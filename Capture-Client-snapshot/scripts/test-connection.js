#!/usr/bin/env node

/**
 * GHL API Connection Test Script
 *
 * This script tests your GHL API credentials and connection
 * without creating any agents.
 */

const axios = require('axios');
require('dotenv').config();

const CONFIG = {
  BASE_URL: process.env.GHL_BASE_URL || 'https://services.leadconnectorhq.com',
  API_KEY: process.env.GHL_API_KEY,
  LOCATION_ID: process.env.GHL_LOCATION_ID
};

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m'
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function header(title) {
  console.log('\n' + '='.repeat(60));
  console.log(`  ${title}`);
  console.log('='.repeat(60) + '\n');
}

async function testConnection() {
  header('GHL API CONNECTION TEST');

  // Test 1: Check environment variables
  log('Test 1: Environment Variables', colors.blue);

  if (!CONFIG.API_KEY) {
    log('✗ GHL_API_KEY not found in environment', colors.red);
    log('  Please set GHL_API_KEY in your .env file', colors.yellow);
    return false;
  }
  log('✓ GHL_API_KEY found', colors.green);

  if (!CONFIG.LOCATION_ID) {
    log('✗ GHL_LOCATION_ID not found in environment', colors.red);
    log('  Please set GHL_LOCATION_ID in your .env file', colors.yellow);
    return false;
  }
  log('✓ GHL_LOCATION_ID found', colors.green);

  log(`✓ Base URL: ${CONFIG.BASE_URL}`, colors.green);

  // Test 2: API Key format
  log('\nTest 2: API Key Format', colors.blue);

  const keyPreview = CONFIG.API_KEY.substring(0, 10) + '...' +
                     CONFIG.API_KEY.substring(CONFIG.API_KEY.length - 4);
  log(`  Key preview: ${keyPreview}`);

  if (CONFIG.API_KEY.length < 20) {
    log('⚠ API key seems too short', colors.yellow);
  } else {
    log('✓ API key length looks valid', colors.green);
  }

  // Test 3: Network connectivity
  log('\nTest 3: Network Connectivity', colors.blue);

  try {
    const response = await axios.get(CONFIG.BASE_URL, { timeout: 5000 });
    log('✓ Can reach GHL API base URL', colors.green);
  } catch (error) {
    if (error.code === 'ENOTFOUND') {
      log('✗ Cannot resolve GHL API hostname', colors.red);
      log('  Check your internet connection', colors.yellow);
      return false;
    } else if (error.code === 'ETIMEDOUT') {
      log('✗ Connection timeout', colors.red);
      log('  Check firewall or network settings', colors.yellow);
      return false;
    } else {
      // Other errors (404, etc.) are actually fine - we just want to reach the server
      log('✓ Can reach GHL API server', colors.green);
    }
  }

  // Test 4: API Authentication
  log('\nTest 4: API Authentication', colors.blue);

  const client = axios.create({
    baseURL: CONFIG.BASE_URL,
    timeout: 10000,
    headers: {
      'Authorization': `Bearer ${CONFIG.API_KEY}`,
      'Content-Type': 'application/json',
      'Version': 'v1'
    }
  });

  try {
    // Try to list voice agents (read operation)
    const response = await client.get('/voice-ai/agents', {
      params: { locationId: CONFIG.LOCATION_ID }
    });

    log('✓ Authentication successful', colors.green);
    log(`  Found ${response.data.agents?.length || 0} existing Voice AI agents`, colors.green);

    return true;
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;

      if (status === 401) {
        log('✗ Authentication failed (401)', colors.red);
        log('  Your API key is invalid or expired', colors.yellow);
        log('  Please generate a new API key from GHL', colors.yellow);
      } else if (status === 403) {
        log('✗ Permission denied (403)', colors.red);
        log('  Your API key lacks required scopes', colors.yellow);
        log('  Required scopes: voice-ai.read, voice-ai.write, conversation-ai.read, conversation-ai.write', colors.yellow);
      } else if (status === 404) {
        log('⚠ Endpoint not found (404)', colors.yellow);
        log('  The Voice AI API endpoint may not be available', colors.yellow);
        log('  This could mean:', colors.yellow);
        log('    - Voice AI is not enabled for your account', colors.yellow);
        log('    - The API endpoint has changed', colors.yellow);
        log('    - Your plan does not include Voice AI access', colors.yellow);
      } else {
        log(`✗ API Error (${status}): ${data.message || 'Unknown error'}`, colors.red);
      }

      return false;
    } else if (error.request) {
      log('✗ No response from API', colors.red);
      log('  Check your network connection', colors.yellow);
      return false;
    } else {
      log(`✗ Error: ${error.message}`, colors.red);
      return false;
    }
  }
}

async function testConversationAI() {
  header('CONVERSATION AI TEST');

  log('Test: Conversation AI Access', colors.blue);

  const client = axios.create({
    baseURL: CONFIG.BASE_URL,
    timeout: 10000,
    headers: {
      'Authorization': `Bearer ${CONFIG.API_KEY}`,
      'Content-Type': 'application/json',
      'Version': 'v1'
    }
  });

  try {
    const response = await client.post('/conversation-ai/agents/search', {
      locationId: CONFIG.LOCATION_ID
    });

    log('✓ Conversation AI API accessible', colors.green);
    log(`  Found ${response.data.bots?.length || 0} existing Conversation AI bots`, colors.green);

    return true;
  } catch (error) {
    if (error.response) {
      const { status } = error.response;

      if (status === 404) {
        log('⚠ Conversation AI endpoint not found', colors.yellow);
        log('  This feature may not be available for your account', colors.yellow);
      } else {
        log(`✗ Conversation AI API Error (${status})`, colors.red);
      }

      return false;
    } else {
      log('✗ Cannot reach Conversation AI API', colors.red);
      return false;
    }
  }
}

async function displaySummary(voiceAISuccess, conversationAISuccess) {
  header('TEST SUMMARY');

  console.log('Voice AI API:           ' +
    (voiceAISuccess ?
      colors.green + '✓ READY' :
      colors.red + '✗ NOT READY') + colors.reset);

  console.log('Conversation AI API:    ' +
    (conversationAISuccess ?
      colors.green + '✓ READY' :
      colors.yellow + '⚠ NOT AVAILABLE') + colors.reset);

  console.log();

  if (voiceAISuccess && conversationAISuccess) {
    log('🎉 All systems ready! You can now run the main setup script.', colors.green);
    log('\nNext steps:', colors.blue);
    log('  npm start              # Run interactive setup', colors.reset);
    log('  npm run list           # List existing agents', colors.reset);
  } else if (voiceAISuccess) {
    log('✓ Voice AI is ready, but Conversation AI may not be available.', colors.yellow);
    log('  You can still create Voice AI agents.', colors.yellow);
  } else {
    log('❌ Setup is not complete. Please fix the errors above.', colors.red);
    log('\nTroubleshooting:', colors.blue);
    log('  1. Verify your API key is correct', colors.reset);
    log('  2. Check that your API key has the required scopes', colors.reset);
    log('  3. Ensure your GHL account has Voice AI enabled', colors.reset);
    log('  4. Contact GHL support if issues persist', colors.reset);
  }

  console.log();
}

async function main() {
  try {
    const voiceAISuccess = await testConnection();
    const conversationAISuccess = await testConversationAI();

    await displaySummary(voiceAISuccess, conversationAISuccess);

    process.exit(voiceAISuccess ? 0 : 1);
  } catch (error) {
    log('\n✗ Unexpected error occurred:', colors.red);
    console.error(error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { testConnection, testConversationAI };

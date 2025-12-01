#!/usr/bin/env node

/**
 * Example: Custom Usage of GHL API Client
 *
 * This script demonstrates how to use the GHL API client
 * as a module in your own scripts.
 */

const { GHLAPIClient, Logger } = require('./ghl-api-setup');
require('dotenv').config();

async function exampleUsage() {
  // Initialize the API client
  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!apiKey || !locationId) {
    Logger.error('Missing GHL_API_KEY or GHL_LOCATION_ID in environment');
    process.exit(1);
  }

  const client = new GHLAPIClient(apiKey, locationId);

  try {
    // Example 1: List all existing agents
    Logger.section('EXAMPLE 1: List All Agents');

    const voiceAgents = await client.listVoiceAgents();
    Logger.log(`Found ${voiceAgents.length} Voice AI agents`);

    const smsAgents = await client.searchConversationBots();
    Logger.log(`Found ${smsAgents.length} Conversation AI agents`);

    // Example 2: Create a simple voice agent
    Logger.section('EXAMPLE 2: Create a Simple Voice Agent');

    const simpleVoiceConfig = {
      agent_name: 'Test Voice Agent',
      agent_type: 'voice_inbound',
      description: 'A simple test voice agent',
      model_settings: {
        provider: 'openai',
        model: 'gpt-4o',
        temperature: 0.7,
        max_tokens: 500
      },
      voice_settings: {
        voice_id: 'jessica',
        voice_provider: 'elevenlabs',
        speaking_rate: 1.0,
        stability: 0.75,
        similarity_boost: 0.75
      },
      business_info: {
        name: 'Test Business',
        type: 'Service Business',
        phone: '555-0123',
        timezone: 'America/New_York'
      },
      greetings: {
        initial_greeting: {
          text: 'Thank you for calling! How can I help you today?',
          conditions: 'business_hours'
        }
      },
      compliance: {
        call_recording_disclosure: true,
        gdpr_compliant: true
      }
    };

    Logger.log('Creating test voice agent...');
    const voiceAgent = await client.createVoiceAgent(simpleVoiceConfig);
    Logger.success(`Voice agent created with ID: ${voiceAgent.id}`);

    // Example 3: Create a simple SMS bot
    Logger.section('EXAMPLE 3: Create a Simple SMS Bot');

    const simpleSMSConfig = {
      agentName: 'Test SMS Bot',
      agentType: 'sms',
      description: 'A simple test SMS bot',
      businessContext: {
        businessName: 'Test Business',
        businessType: 'Service Business',
        phone: '555-0123'
      },
      conversationConfig: {
        tone: 'friendly',
        responseStyle: 'concise',
        maxResponseLength: 320,
        personalization: true
      },
      responseTemplates: {
        greeting: {
          businessHours: 'Hi! Thanks for texting us. How can we help?'
        }
      },
      complianceAndSafety: {
        respectOptOuts: true,
        dataPrivacy: 'Never store sensitive information'
      }
    };

    Logger.log('Creating test SMS bot...');
    const smsBot = await client.createConversationBot(simpleSMSConfig);
    Logger.success(`SMS bot created with ID: ${smsBot.id}`);

    // Example 4: Get agent details
    Logger.section('EXAMPLE 4: Get Agent Details');

    Logger.log('Fetching voice agent details...');
    const voiceAgentDetails = await client.getVoiceAgent(voiceAgent.id);
    Logger.log('Voice agent status:', voiceAgentDetails.status);

    Logger.log('Fetching SMS bot details...');
    const smsBotDetails = await client.getConversationBot(smsBot.id);
    Logger.log('SMS bot status:', smsBotDetails.status);

    // Example 5: Clean up - Delete test agents
    Logger.section('EXAMPLE 5: Clean Up Test Agents');

    const shouldDelete = process.argv.includes('--delete');

    if (shouldDelete) {
      Logger.log('Deleting test voice agent...');
      await client.deleteVoiceAgent(voiceAgent.id);
      Logger.success('Voice agent deleted');

      Logger.log('Deleting test SMS bot...');
      await client.deleteConversationBot(smsBot.id);
      Logger.success('SMS bot deleted');
    } else {
      Logger.warn('Skipping deletion. Run with --delete flag to clean up test agents.');
      Logger.log(`Voice Agent ID: ${voiceAgent.id}`);
      Logger.log(`SMS Bot ID: ${smsBot.id}`);
    }

    Logger.section('EXAMPLES COMPLETE');
    Logger.success('All examples executed successfully!');

  } catch (error) {
    Logger.error('Example failed:', error);
    process.exit(1);
  }
}

// Example 6: Custom agent management functions
async function customFunctions() {
  Logger.section('EXAMPLE 6: Custom Management Functions');

  const client = new GHLAPIClient(
    process.env.GHL_API_KEY,
    process.env.GHL_LOCATION_ID
  );

  // Function to find agents by name
  async function findAgentByName(name, type = 'voice') {
    if (type === 'voice') {
      const agents = await client.listVoiceAgents();
      return agents.find(a => a.name.toLowerCase().includes(name.toLowerCase()));
    } else {
      const bots = await client.searchConversationBots();
      return bots.find(b => b.name.toLowerCase().includes(name.toLowerCase()));
    }
  }

  // Function to bulk update agent status
  async function bulkUpdateStatus(agentIds, status, type = 'voice') {
    const results = [];

    for (const id of agentIds) {
      try {
        // Note: Update method would need to be implemented
        Logger.log(`Updating agent ${id} status to ${status}`);
        results.push({ id, success: true });
      } catch (error) {
        results.push({ id, success: false, error: error.message });
      }
    }

    return results;
  }

  // Function to export agent configurations
  async function exportAgentConfig(agentId, type = 'voice') {
    const agent = type === 'voice'
      ? await client.getVoiceAgent(agentId)
      : await client.getConversationBot(agentId);

    const config = JSON.stringify(agent, null, 2);
    const fs = require('fs').promises;
    const filename = `${type}_agent_${agentId}.json`;

    await fs.writeFile(filename, config);
    Logger.success(`Agent config exported to ${filename}`);

    return filename;
  }

  // Example usage of custom functions
  Logger.log('Searching for receptionist agent...');
  const receptionist = await findAgentByName('receptionist', 'voice');

  if (receptionist) {
    Logger.success(`Found: ${receptionist.name} (ID: ${receptionist.id})`);
  } else {
    Logger.warn('Receptionist agent not found');
  }
}

// Run examples
if (require.main === module) {
  const runCustomFunctions = process.argv.includes('--custom');

  if (runCustomFunctions) {
    customFunctions().catch(error => {
      Logger.error('Custom functions failed:', error);
      process.exit(1);
    });
  } else {
    exampleUsage().catch(error => {
      Logger.error('Example usage failed:', error);
      process.exit(1);
    });
  }
}

module.exports = {
  exampleUsage,
  customFunctions
};

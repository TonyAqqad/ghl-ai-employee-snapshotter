#!/usr/bin/env node

/**
 * ================================================================================
 * GHL AI AGENTS API SETUP SCRIPT
 * ================================================================================
 *
 * This script automates the creation and management of GoHighLevel (GHL)
 * Voice AI agents and Conversation AI bots via the GHL API.
 *
 * PREREQUISITES:
 * --------------
 * 1. GHL Account with API access (Agency or higher plan)
 * 2. Personal Integration Token (PIT) or OAuth JWT token
 * 3. Required API Scopes:
 *    - voice-ai.write
 *    - voice-ai.read
 *    - conversation-ai.write
 *    - conversation-ai.read
 *    - contacts.write (for contact creation)
 *    - calendars.write (for appointment booking)
 *
 * HOW TO GET GHL API CREDENTIALS:
 * --------------------------------
 * 1. Log into your GHL account
 * 2. Navigate to Settings > Integrations > API Keys
 * 3. Click "Create API Key" or "Create Personal Access Token"
 * 4. Select the required scopes listed above
 * 5. Copy the token and save it securely
 * 6. Get your Location ID from Settings > Company > Location ID
 *
 * ENVIRONMENT VARIABLES:
 * ----------------------
 * Create a .env file in the same directory with:
 *
 * GHL_API_KEY=your_api_key_here
 * GHL_LOCATION_ID=your_location_id_here
 * GHL_BASE_URL=https://services.leadconnectorhq.com
 *
 * USAGE:
 * ------
 * npm install              # Install dependencies
 * node ghl-api-setup.js    # Run the script
 *
 * The script will prompt you to:
 * - Enter API credentials (if not in .env)
 * - Choose which agents to create
 * - Confirm before creating agents
 *
 * API DOCUMENTATION:
 * ------------------
 * Voice AI: https://marketplace.gohighlevel.com/docs/ghl/voice-ai/
 * Conversation AI: https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/
 *
 * ================================================================================
 */

const fs = require('fs').promises;
const path = require('path');
const axios = require('axios');
const readline = require('readline');
require('dotenv').config();

// ================================================================================
// CONFIGURATION
// ================================================================================

const CONFIG = {
  BASE_URL: process.env.GHL_BASE_URL || 'https://services.leadconnectorhq.com',
  API_VERSION: 'v1',
  TIMEOUT: 30000,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 2000
};

// API Endpoints
const ENDPOINTS = {
  VOICE_AI: {
    CREATE: '/voice-ai/agents',
    LIST: '/voice-ai/agents',
    GET: '/voice-ai/agents/:id',
    UPDATE: '/voice-ai/agents/:id',
    DELETE: '/voice-ai/agents/:id'
  },
  CONVERSATION_AI: {
    CREATE: '/conversation-ai/agents',
    SEARCH: '/conversation-ai/agents/search',
    GET: '/conversation-ai/agents/:id',
    UPDATE: '/conversation-ai/agents/:id',
    DELETE: '/conversation-ai/agents/:id'
  }
};

// ================================================================================
// UTILITIES
// ================================================================================

class Logger {
  static log(message, data = null) {
    console.log(`[INFO] ${message}`);
    if (data) console.log(data);
  }

  static success(message) {
    console.log(`\x1b[32m✓ ${message}\x1b[0m`);
  }

  static error(message, error = null) {
    console.error(`\x1b[31m✗ ${message}\x1b[0m`);
    if (error) console.error(error);
  }

  static warn(message) {
    console.warn(`\x1b[33m⚠ ${message}\x1b[0m`);
  }

  static section(title) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`  ${title}`);
    console.log(`${'='.repeat(60)}\n`);
  }
}

// ================================================================================
// API CLIENT
// ================================================================================

class GHLAPIClient {
  constructor(apiKey, locationId) {
    this.apiKey = apiKey;
    this.locationId = locationId;
    this.client = axios.create({
      baseURL: CONFIG.BASE_URL,
      timeout: CONFIG.TIMEOUT,
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Version': CONFIG.API_VERSION
      }
    });

    // Add response interceptor for error handling
    this.client.interceptors.response.use(
      response => response,
      error => this.handleError(error)
    );
  }

  handleError(error) {
    if (error.response) {
      const { status, data } = error.response;
      Logger.error(`API Error [${status}]: ${data.message || 'Unknown error'}`);

      if (status === 401) {
        Logger.error('Authentication failed. Please check your API key.');
      } else if (status === 403) {
        Logger.error('Permission denied. Check your API scopes.');
      } else if (status === 429) {
        Logger.warn('Rate limit exceeded. Please wait and try again.');
      }
    } else if (error.request) {
      Logger.error('No response received from API. Check your network connection.');
    } else {
      Logger.error('Error setting up request:', error.message);
    }
    throw error;
  }

  async retryRequest(requestFn, attempts = CONFIG.RETRY_ATTEMPTS) {
    for (let i = 0; i < attempts; i++) {
      try {
        return await requestFn();
      } catch (error) {
        if (i === attempts - 1) throw error;
        Logger.warn(`Request failed, retrying... (${i + 1}/${attempts})`);
        await this.delay(CONFIG.RETRY_DELAY * (i + 1));
      }
    }
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // ================================================================================
  // VOICE AI METHODS
  // ================================================================================

  async createVoiceAgent(config) {
    Logger.log('Creating Voice AI agent...', { name: config.agent_name });

    const payload = {
      locationId: this.locationId,
      name: config.agent_name,
      type: config.agent_type || 'voice_inbound',
      description: config.description,

      // Model settings
      model: {
        provider: config.model_settings?.provider || 'openai',
        model: config.model_settings?.model || 'gpt-4o',
        temperature: config.model_settings?.temperature || 0.7,
        maxTokens: config.model_settings?.max_tokens || 500
      },

      // Voice settings
      voice: {
        voiceId: config.voice_settings?.voice_id || 'jessica',
        provider: config.voice_settings?.voice_provider || 'elevenlabs',
        speakingRate: config.voice_settings?.speaking_rate || 1.0,
        pitch: config.voice_settings?.pitch || 0,
        stability: config.voice_settings?.stability || 0.75,
        similarityBoost: config.voice_settings?.similarity_boost || 0.75
      },

      // Business information
      businessInfo: config.business_info,

      // Business hours
      businessHours: config.business_hours,

      // Greetings
      greetings: config.greetings,

      // Conversation flow
      conversationFlow: config.conversation_flow,

      // Call routing
      callRouting: config.call_routing,

      // Transfer settings
      transferSettings: config.transfer_settings,

      // Voicemail settings
      voicemailSettings: config.voicemail_settings,

      // GHL integration
      integrations: {
        ghl: config.ghl_integration
      },

      // Personality
      personality: config.personality_traits,

      // Compliance
      compliance: config.compliance,

      // Error handling
      errorHandling: config.error_handling,

      // Status
      status: 'active'
    };

    try {
      const response = await this.retryRequest(() =>
        this.client.post(ENDPOINTS.VOICE_AI.CREATE, payload)
      );

      Logger.success(`Voice AI agent created successfully!`);
      Logger.log(`Agent ID: ${response.data.id}`);
      return response.data;
    } catch (error) {
      Logger.error(`Failed to create Voice AI agent: ${config.agent_name}`);
      throw error;
    }
  }

  async listVoiceAgents() {
    Logger.log('Fetching Voice AI agents...');

    try {
      const response = await this.retryRequest(() =>
        this.client.get(ENDPOINTS.VOICE_AI.LIST, {
          params: { locationId: this.locationId }
        })
      );

      Logger.success(`Found ${response.data.agents?.length || 0} Voice AI agents`);
      return response.data.agents || [];
    } catch (error) {
      Logger.error('Failed to list Voice AI agents');
      throw error;
    }
  }

  async getVoiceAgent(agentId) {
    Logger.log(`Fetching Voice AI agent: ${agentId}`);

    try {
      const url = ENDPOINTS.VOICE_AI.GET.replace(':id', agentId);
      const response = await this.retryRequest(() =>
        this.client.get(url, {
          params: { locationId: this.locationId }
        })
      );

      Logger.success('Voice AI agent retrieved');
      return response.data;
    } catch (error) {
      Logger.error(`Failed to get Voice AI agent: ${agentId}`);
      throw error;
    }
  }

  async deleteVoiceAgent(agentId) {
    Logger.log(`Deleting Voice AI agent: ${agentId}`);

    try {
      const url = ENDPOINTS.VOICE_AI.DELETE.replace(':id', agentId);
      await this.retryRequest(() =>
        this.client.delete(url, {
          params: { locationId: this.locationId }
        })
      );

      Logger.success('Voice AI agent deleted successfully');
      return { success: true };
    } catch (error) {
      Logger.error(`Failed to delete Voice AI agent: ${agentId}`);
      throw error;
    }
  }

  // ================================================================================
  // CONVERSATION AI METHODS
  // ================================================================================

  async createConversationBot(config) {
    Logger.log('Creating Conversation AI bot...', { name: config.agentName });

    const payload = {
      locationId: this.locationId,
      name: config.agentName,
      type: config.agentType || 'sms',
      description: config.description,
      status: config.status || 'active',

      // Business context
      businessContext: config.businessContext,

      // Conversation configuration
      conversationConfig: config.conversationConfig,

      // Response templates
      responseTemplates: config.responseTemplates,

      // Triggers and keywords
      triggers: config.triggers,

      // Qualification questions
      qualificationQuestions: config.qualificationQuestions,

      // Routing rules
      routingRules: config.routingRules,

      // Integrations
      integrations: config.integrations,

      // Compliance
      compliance: config.complianceAndSafety,

      // Analytics
      analytics: config.analytics
    };

    try {
      const response = await this.retryRequest(() =>
        this.client.post(ENDPOINTS.CONVERSATION_AI.CREATE, payload)
      );

      Logger.success(`Conversation AI bot created successfully!`);
      Logger.log(`Bot ID: ${response.data.id}`);
      return response.data;
    } catch (error) {
      Logger.error(`Failed to create Conversation AI bot: ${config.agentName}`);
      throw error;
    }
  }

  async searchConversationBots(query = {}) {
    Logger.log('Searching Conversation AI bots...');

    try {
      const response = await this.retryRequest(() =>
        this.client.post(ENDPOINTS.CONVERSATION_AI.SEARCH, {
          locationId: this.locationId,
          ...query
        })
      );

      Logger.success(`Found ${response.data.bots?.length || 0} Conversation AI bots`);
      return response.data.bots || [];
    } catch (error) {
      Logger.error('Failed to search Conversation AI bots');
      throw error;
    }
  }

  async getConversationBot(botId) {
    Logger.log(`Fetching Conversation AI bot: ${botId}`);

    try {
      const url = ENDPOINTS.CONVERSATION_AI.GET.replace(':id', botId);
      const response = await this.retryRequest(() =>
        this.client.get(url, {
          params: { locationId: this.locationId }
        })
      );

      Logger.success('Conversation AI bot retrieved');
      return response.data;
    } catch (error) {
      Logger.error(`Failed to get Conversation AI bot: ${botId}`);
      throw error;
    }
  }

  async deleteConversationBot(botId) {
    Logger.log(`Deleting Conversation AI bot: ${botId}`);

    try {
      const url = ENDPOINTS.CONVERSATION_AI.DELETE.replace(':id', botId);
      await this.retryRequest(() =>
        this.client.delete(url, {
          params: { locationId: this.locationId }
        })
      );

      Logger.success('Conversation AI bot deleted successfully');
      return { success: true };
    } catch (error) {
      Logger.error(`Failed to delete Conversation AI bot: ${botId}`);
      throw error;
    }
  }
}

// ================================================================================
// FILE OPERATIONS
// ================================================================================

class AgentConfigLoader {
  constructor(baseDir) {
    this.baseDir = baseDir;
  }

  async loadAgentConfig(filePath) {
    try {
      const fullPath = path.join(this.baseDir, filePath);
      const content = await fs.readFile(fullPath, 'utf-8');
      return JSON.parse(content);
    } catch (error) {
      Logger.error(`Failed to load agent config: ${filePath}`, error.message);
      throw error;
    }
  }

  async loadPrompt(promptFile) {
    try {
      const fullPath = path.join(this.baseDir, 'prompts', promptFile);
      return await fs.readFile(fullPath, 'utf-8');
    } catch (error) {
      Logger.warn(`Could not load prompt file: ${promptFile}`);
      return null;
    }
  }

  async loadAllVoiceAgents() {
    const voiceAgents = [
      'agents/voice/receptionist-voice.json',
      'agents/voice/demo-booker-voice.json',
      'agents/voice/lead-qualifier-voice.json',
      'agents/voice/after-hours-voice.json'
    ];

    const configs = [];
    for (const agentPath of voiceAgents) {
      try {
        const config = await this.loadAgentConfig(agentPath);
        configs.push({
          path: agentPath,
          name: config.agent_name,
          type: 'voice',
          config
        });
      } catch (error) {
        Logger.warn(`Skipping ${agentPath}: ${error.message}`);
      }
    }
    return configs;
  }

  async loadAllSMSAgents() {
    const smsAgents = [
      'agents/sms/receptionist-sms.json',
      'agents/sms/lead-nurture-sms.json',
      'agents/sms/appointment-sms.json',
      'agents/sms/review-requester-sms.json'
    ];

    const configs = [];
    for (const agentPath of smsAgents) {
      try {
        const config = await this.loadAgentConfig(agentPath);
        configs.push({
          path: agentPath,
          name: config.agentName,
          type: 'sms',
          config
        });
      } catch (error) {
        Logger.warn(`Skipping ${agentPath}: ${error.message}`);
      }
    }
    return configs;
  }
}

// ================================================================================
// INTERACTIVE CLI
// ================================================================================

class InteractiveCLI {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  question(prompt) {
    return new Promise(resolve => {
      this.rl.question(prompt, resolve);
    });
  }

  async promptForCredentials() {
    Logger.section('API CREDENTIALS');

    const apiKey = process.env.GHL_API_KEY || await this.question('Enter your GHL API Key: ');
    const locationId = process.env.GHL_LOCATION_ID || await this.question('Enter your GHL Location ID: ');

    if (!apiKey || !locationId) {
      Logger.error('API Key and Location ID are required!');
      process.exit(1);
    }

    return { apiKey, locationId };
  }

  async selectAgents(voiceAgents, smsAgents) {
    Logger.section('AGENT SELECTION');

    console.log('Available Voice AI Agents:');
    voiceAgents.forEach((agent, idx) => {
      console.log(`  ${idx + 1}. ${agent.name}`);
    });

    console.log('\nAvailable SMS/Conversation AI Agents:');
    smsAgents.forEach((agent, idx) => {
      console.log(`  ${idx + 1 + voiceAgents.length}. ${agent.name}`);
    });

    console.log('\nOptions:');
    console.log('  all    - Create all agents');
    console.log('  voice  - Create all voice agents');
    console.log('  sms    - Create all SMS agents');
    console.log('  1,2,3  - Create specific agents by number');
    console.log('  none   - Exit without creating');

    const selection = await this.question('\nYour selection: ');
    return this.parseSelection(selection, voiceAgents, smsAgents);
  }

  parseSelection(selection, voiceAgents, smsAgents) {
    const allAgents = [...voiceAgents, ...smsAgents];
    selection = selection.trim().toLowerCase();

    if (selection === 'all') {
      return allAgents;
    } else if (selection === 'voice') {
      return voiceAgents;
    } else if (selection === 'sms') {
      return smsAgents;
    } else if (selection === 'none') {
      return [];
    } else if (selection.includes(',')) {
      const indices = selection.split(',').map(s => parseInt(s.trim()) - 1);
      return indices
        .filter(idx => idx >= 0 && idx < allAgents.length)
        .map(idx => allAgents[idx]);
    } else {
      const idx = parseInt(selection) - 1;
      if (idx >= 0 && idx < allAgents.length) {
        return [allAgents[idx]];
      }
    }

    return [];
  }

  async confirmCreation(agents) {
    Logger.section('CONFIRMATION');

    console.log('You are about to create the following agents:');
    agents.forEach(agent => {
      console.log(`  - ${agent.name} (${agent.type})`);
    });

    const confirm = await this.question('\nProceed with creation? (yes/no): ');
    return confirm.toLowerCase() === 'yes' || confirm.toLowerCase() === 'y';
  }

  async displayResults(results) {
    Logger.section('RESULTS');

    const successful = results.filter(r => r.success);
    const failed = results.filter(r => !r.success);

    console.log(`\nSuccessfully created: ${successful.length}/${results.length}`);

    if (successful.length > 0) {
      console.log('\nSuccessful:');
      successful.forEach(r => {
        Logger.success(`${r.name} (ID: ${r.id})`);
      });
    }

    if (failed.length > 0) {
      console.log('\nFailed:');
      failed.forEach(r => {
        Logger.error(`${r.name}: ${r.error}`);
      });
    }
  }

  close() {
    this.rl.close();
  }
}

// ================================================================================
// MAIN APPLICATION
// ================================================================================

class GHLAgentSetup {
  constructor() {
    this.cli = new InteractiveCLI();
    this.loader = null;
    this.client = null;
  }

  async initialize() {
    Logger.section('GHL AI AGENTS SETUP');

    // Get credentials
    const { apiKey, locationId } = await this.cli.promptForCredentials();

    // Initialize client
    this.client = new GHLAPIClient(apiKey, locationId);

    // Initialize loader
    const scriptDir = __dirname;
    const baseDir = path.join(scriptDir, '..');
    this.loader = new AgentConfigLoader(baseDir);

    Logger.success('Initialization complete');
  }

  async loadAgents() {
    Logger.section('LOADING AGENT CONFIGURATIONS');

    const voiceAgents = await this.loader.loadAllVoiceAgents();
    Logger.log(`Loaded ${voiceAgents.length} voice agent configurations`);

    const smsAgents = await this.loader.loadAllSMSAgents();
    Logger.log(`Loaded ${smsAgents.length} SMS agent configurations`);

    return { voiceAgents, smsAgents };
  }

  async createAgents(selectedAgents) {
    Logger.section('CREATING AGENTS');

    const results = [];

    for (const agent of selectedAgents) {
      try {
        let result;

        if (agent.type === 'voice') {
          result = await this.client.createVoiceAgent(agent.config);
        } else if (agent.type === 'sms') {
          result = await this.client.createConversationBot(agent.config);
        }

        results.push({
          success: true,
          name: agent.name,
          id: result.id,
          type: agent.type
        });

        // Add delay between creations to avoid rate limiting
        await this.delay(1000);

      } catch (error) {
        results.push({
          success: false,
          name: agent.name,
          error: error.message,
          type: agent.type
        });
      }
    }

    return results;
  }

  async listExistingAgents() {
    Logger.section('EXISTING AGENTS');

    try {
      const voiceAgents = await this.client.listVoiceAgents();
      const smsAgents = await this.client.searchConversationBots();

      if (voiceAgents.length > 0) {
        console.log('\nVoice AI Agents:');
        voiceAgents.forEach(agent => {
          console.log(`  - ${agent.name} (ID: ${agent.id}) - Status: ${agent.status}`);
        });
      }

      if (smsAgents.length > 0) {
        console.log('\nConversation AI Agents:');
        smsAgents.forEach(agent => {
          console.log(`  - ${agent.name} (ID: ${agent.id}) - Status: ${agent.status}`);
        });
      }

      if (voiceAgents.length === 0 && smsAgents.length === 0) {
        Logger.log('No existing agents found');
      }

      return { voiceAgents, smsAgents };
    } catch (error) {
      Logger.warn('Could not fetch existing agents. Continuing...');
      return { voiceAgents: [], smsAgents: [] };
    }
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async run() {
    try {
      // Initialize
      await this.initialize();

      // List existing agents
      await this.listExistingAgents();

      // Load agent configurations
      const { voiceAgents, smsAgents } = await this.loadAgents();

      if (voiceAgents.length === 0 && smsAgents.length === 0) {
        Logger.error('No agent configurations found!');
        process.exit(1);
      }

      // Select agents to create
      const selectedAgents = await this.cli.selectAgents(voiceAgents, smsAgents);

      if (selectedAgents.length === 0) {
        Logger.log('No agents selected. Exiting...');
        process.exit(0);
      }

      // Confirm creation
      const confirmed = await this.cli.confirmCreation(selectedAgents);

      if (!confirmed) {
        Logger.log('Creation canceled by user');
        process.exit(0);
      }

      // Create agents
      const results = await this.createAgents(selectedAgents);

      // Display results
      await this.cli.displayResults(results);

      Logger.section('COMPLETE');
      Logger.success('Setup process finished!');

    } catch (error) {
      Logger.error('Fatal error occurred:', error);
      process.exit(1);
    } finally {
      this.cli.close();
    }
  }
}

// ================================================================================
// CLI COMMANDS
// ================================================================================

async function handleCommand(command, args) {
  const { apiKey, locationId } = {
    apiKey: process.env.GHL_API_KEY,
    locationId: process.env.GHL_LOCATION_ID
  };

  if (!apiKey || !locationId) {
    Logger.error('GHL_API_KEY and GHL_LOCATION_ID environment variables required');
    process.exit(1);
  }

  const client = new GHLAPIClient(apiKey, locationId);

  switch (command) {
    case 'list':
      await client.listVoiceAgents();
      await client.searchConversationBots();
      break;

    case 'delete-voice':
      if (!args[0]) {
        Logger.error('Usage: node ghl-api-setup.js delete-voice <agent-id>');
        process.exit(1);
      }
      await client.deleteVoiceAgent(args[0]);
      break;

    case 'delete-sms':
      if (!args[0]) {
        Logger.error('Usage: node ghl-api-setup.js delete-sms <bot-id>');
        process.exit(1);
      }
      await client.deleteConversationBot(args[0]);
      break;

    default:
      Logger.error(`Unknown command: ${command}`);
      console.log('\nAvailable commands:');
      console.log('  node ghl-api-setup.js               - Interactive setup');
      console.log('  node ghl-api-setup.js list          - List existing agents');
      console.log('  node ghl-api-setup.js delete-voice <id>  - Delete voice agent');
      console.log('  node ghl-api-setup.js delete-sms <id>    - Delete SMS bot');
      process.exit(1);
  }
}

// ================================================================================
// ENTRY POINT
// ================================================================================

if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length > 0) {
    // Command mode
    handleCommand(args[0], args.slice(1))
      .then(() => process.exit(0))
      .catch(error => {
        Logger.error('Command failed:', error);
        process.exit(1);
      });
  } else {
    // Interactive mode
    const app = new GHLAgentSetup();
    app.run();
  }
}

// ================================================================================
// EXPORTS
// ================================================================================

module.exports = {
  GHLAPIClient,
  AgentConfigLoader,
  Logger
};

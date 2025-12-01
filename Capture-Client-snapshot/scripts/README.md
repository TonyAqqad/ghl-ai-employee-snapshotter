# GHL AI Agents Setup Script

Automated Node.js script for creating and managing GoHighLevel (GHL) Voice AI agents and Conversation AI bots via the GHL API.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Getting GHL API Credentials](#getting-ghl-api-credentials)
- [Configuration](#configuration)
- [Usage](#usage)
- [Agent Configuration Files](#agent-configuration-files)
- [API Reference](#api-reference)
- [Troubleshooting](#troubleshooting)
- [Examples](#examples)

## Features

- **Interactive CLI**: Easy-to-use command-line interface with prompts
- **Batch Creation**: Create multiple agents at once
- **Voice AI Support**: Create and manage Voice AI agents
- **Conversation AI Support**: Create and manage SMS/Conversation bots
- **Configuration Loading**: Automatically loads agent configs from JSON files
- **Error Handling**: Robust error handling with retry logic
- **API Client**: Full-featured GHL API client with all CRUD operations
- **Logging**: Detailed logging with color-coded output
- **Rate Limiting**: Built-in delays to prevent API rate limit issues

## Prerequisites

1. **GoHighLevel Account**: Agency or higher plan with API access
2. **Node.js**: Version 14.0.0 or higher
3. **API Credentials**: Personal Integration Token (PIT) or JWT
4. **Required API Scopes**:
   - `voice-ai.write` - Create and update Voice AI agents
   - `voice-ai.read` - Read Voice AI agents
   - `conversation-ai.write` - Create and update Conversation AI agents
   - `conversation-ai.read` - Read Conversation AI agents
   - `contacts.write` - Create contacts (optional but recommended)
   - `calendars.write` - Manage appointments (optional but recommended)

## Installation

### 1. Navigate to the scripts directory

```bash
cd Capture-Client-snapshot/scripts
```

### 2. Install dependencies

```bash
npm install
```

This will install:
- `axios` - HTTP client for API requests
- `dotenv` - Environment variable management

### 3. Set up environment variables

```bash
cp .env.example .env
```

Edit `.env` and add your credentials:

```env
GHL_API_KEY=your_api_key_here
GHL_LOCATION_ID=your_location_id_here
GHL_BASE_URL=https://services.leadconnectorhq.com
```

## Getting GHL API Credentials

### Step 1: Log into GoHighLevel

Go to your GHL account and log in.

### Step 2: Navigate to API Settings

1. Click on **Settings** (gear icon)
2. Go to **Integrations**
3. Click on **API Keys** or **Private Integrations**

### Step 3: Create API Key

1. Click **"Create API Key"** or **"Create Personal Access Token"**
2. Give it a descriptive name (e.g., "AI Agents Setup Script")
3. Select the required scopes:
   - ✓ voice-ai.write
   - ✓ voice-ai.read
   - ✓ conversation-ai.write
   - ✓ conversation-ai.read
   - ✓ contacts.write
   - ✓ calendars.write
4. Click **"Create"**
5. **Copy the token immediately** (you won't be able to see it again)

### Step 4: Get Location ID

1. Go to **Settings** > **Company**
2. Find your **Location ID** (usually a long alphanumeric string)
3. Copy this ID

### Step 5: Save Credentials

Paste both values into your `.env` file.

## Configuration

### Directory Structure

```
Capture-Client-snapshot/
├── agents/
│   ├── voice/
│   │   ├── receptionist-voice.json
│   │   ├── demo-booker-voice.json
│   │   ├── lead-qualifier-voice.json
│   │   └── after-hours-voice.json
│   └── sms/
│       ├── receptionist-sms.json
│       ├── lead-nurture-sms.json
│       ├── appointment-sms.json
│       └── review-requester-sms.json
├── prompts/
│   ├── voice-receptionist-prompt.md
│   ├── demo-booker-prompt.md
│   └── ...
└── scripts/
    ├── ghl-api-setup.js
    ├── package.json
    ├── .env
    └── README.md
```

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GHL_API_KEY` | Yes | Your GHL Personal Integration Token |
| `GHL_LOCATION_ID` | Yes | Your GHL Location ID |
| `GHL_BASE_URL` | No | API base URL (default: https://services.leadconnectorhq.com) |

## Usage

### Interactive Mode (Recommended)

Run the script and follow the prompts:

```bash
npm start
```

Or:

```bash
node ghl-api-setup.js
```

The script will:
1. Prompt for API credentials (if not in .env)
2. Load all available agent configurations
3. Display existing agents in your account
4. Let you choose which agents to create
5. Confirm before creating
6. Create the selected agents
7. Display results

### Command Line Mode

List existing agents:

```bash
npm run list
```

Delete a Voice AI agent:

```bash
node ghl-api-setup.js delete-voice <agent-id>
```

Delete a Conversation AI bot:

```bash
node ghl-api-setup.js delete-sms <bot-id>
```

### Selection Options

When prompted to select agents:

- `all` - Create all agents (Voice + SMS)
- `voice` - Create all Voice AI agents only
- `sms` - Create all SMS/Conversation AI agents only
- `1,2,3` - Create specific agents by number (comma-separated)
- `none` - Exit without creating

### Example Session

```
================================================================================
  GHL AI AGENTS SETUP
================================================================================

Enter your GHL API Key: sk_live_abc123...
Enter your GHL Location ID: xyz789...

✓ Initialization complete

================================================================================
  EXISTING AGENTS
================================================================================

Voice AI Agents:
  - Main Receptionist (ID: voice_001) - Status: active

================================================================================
  LOADING AGENT CONFIGURATIONS
================================================================================

[INFO] Loaded 4 voice agent configurations
[INFO] Loaded 4 SMS agent configurations

================================================================================
  AGENT SELECTION
================================================================================

Available Voice AI Agents:
  1. Capture Client Main Receptionist
  2. Capture Client Demo Booker
  3. Lead Qualifier Agent
  4. After Hours Agent

Available SMS/Conversation AI Agents:
  5. Capture Client SMS Receptionist
  6. Capture Client SMS Lead Nurture Agent
  7. Appointment SMS Agent
  8. Review Requester SMS Agent

Options:
  all    - Create all agents
  voice  - Create all voice agents
  sms    - Create all SMS agents
  1,2,3  - Create specific agents by number
  none   - Exit without creating

Your selection: voice

================================================================================
  CONFIRMATION
================================================================================

You are about to create the following agents:
  - Capture Client Main Receptionist (voice)
  - Capture Client Demo Booker (voice)
  - Lead Qualifier Agent (voice)
  - After Hours Agent (voice)

Proceed with creation? (yes/no): yes

================================================================================
  CREATING AGENTS
================================================================================

[INFO] Creating Voice AI agent... { name: 'Capture Client Main Receptionist' }
✓ Voice AI agent created successfully!
[INFO] Agent ID: voice_abc123

[INFO] Creating Voice AI agent... { name: 'Capture Client Demo Booker' }
✓ Voice AI agent created successfully!
[INFO] Agent ID: voice_def456

...

================================================================================
  RESULTS
================================================================================

Successfully created: 4/4

Successful:
✓ Capture Client Main Receptionist (ID: voice_abc123)
✓ Capture Client Demo Booker (ID: voice_def456)
✓ Lead Qualifier Agent (ID: voice_ghi789)
✓ After Hours Agent (ID: voice_jkl012)

================================================================================
  COMPLETE
================================================================================

✓ Setup process finished!
```

## Agent Configuration Files

### Voice AI Agent Structure

Voice AI agents are configured in `agents/voice/*.json`:

```json
{
  "agent_name": "Agent Name",
  "agent_type": "voice_inbound",
  "description": "Agent description",
  "model_settings": {
    "provider": "openai",
    "model": "gpt-4o",
    "temperature": 0.7,
    "max_tokens": 500
  },
  "voice_settings": {
    "voice_id": "jessica",
    "voice_provider": "elevenlabs",
    "speaking_rate": 1.0,
    "stability": 0.75
  },
  "business_info": { ... },
  "business_hours": { ... },
  "greetings": { ... },
  "conversation_flow": { ... }
}
```

### Conversation AI Bot Structure

SMS/Conversation bots are configured in `agents/sms/*.json`:

```json
{
  "agentId": "sms-agent-001",
  "agentName": "Agent Name",
  "agentType": "sms",
  "description": "Agent description",
  "businessContext": { ... },
  "conversationConfig": {
    "tone": "professional yet friendly",
    "responseStyle": "concise and helpful",
    "maxResponseLength": 320
  },
  "responseTemplates": { ... },
  "triggers": { ... },
  "routingRules": { ... }
}
```

## API Reference

The script provides a full-featured API client with these methods:

### Voice AI Methods

```javascript
// Create a Voice AI agent
const agent = await client.createVoiceAgent(config);

// List all Voice AI agents
const agents = await client.listVoiceAgents();

// Get a specific Voice AI agent
const agent = await client.getVoiceAgent(agentId);

// Delete a Voice AI agent
await client.deleteVoiceAgent(agentId);
```

### Conversation AI Methods

```javascript
// Create a Conversation AI bot
const bot = await client.createConversationBot(config);

// Search Conversation AI bots
const bots = await client.searchConversationBots({ status: 'active' });

// Get a specific Conversation AI bot
const bot = await client.getConversationBot(botId);

// Delete a Conversation AI bot
await client.deleteConversationBot(botId);
```

### Using as a Module

You can import and use the API client in your own scripts:

```javascript
const { GHLAPIClient, Logger } = require('./ghl-api-setup');

const client = new GHLAPIClient(apiKey, locationId);

// Create a voice agent
const config = { ... };
const agent = await client.createVoiceAgent(config);
Logger.success(`Created agent: ${agent.id}`);
```

## Troubleshooting

### Authentication Errors (401)

**Problem**: "Authentication failed. Please check your API key."

**Solutions**:
1. Verify your API key is correct in `.env`
2. Ensure the API key hasn't expired
3. Check that you're using a Personal Integration Token, not a temporary token
4. Regenerate your API key if necessary

### Permission Errors (403)

**Problem**: "Permission denied. Check your API scopes."

**Solutions**:
1. Verify your API key has the required scopes:
   - voice-ai.write
   - voice-ai.read
   - conversation-ai.write
   - conversation-ai.read
2. Create a new API key with the correct scopes
3. Update your `.env` file with the new key

### Rate Limit Errors (429)

**Problem**: "Rate limit exceeded. Please wait and try again."

**Solutions**:
1. The script includes automatic retry logic
2. Wait a few minutes and try again
3. Create agents in smaller batches
4. Contact GHL support if rate limits are too restrictive

### Connection Errors

**Problem**: "No response received from API. Check your network connection."

**Solutions**:
1. Check your internet connection
2. Verify the GHL API is not experiencing downtime
3. Try accessing https://services.leadconnectorhq.com in your browser
4. Check firewall settings

### Config File Not Found

**Problem**: "Failed to load agent config: [file path]"

**Solutions**:
1. Verify the agent configuration files exist
2. Check file paths are correct
3. Ensure JSON files are valid (no syntax errors)
4. Verify you're running the script from the `scripts/` directory

### Invalid Location ID

**Problem**: Agents created but not visible in your account

**Solutions**:
1. Double-check your Location ID in `.env`
2. Verify you're logged into the correct GHL account
3. Try listing agents with `npm run list` to see if they exist
4. Contact GHL support if the issue persists

## Examples

### Example 1: Create All Agents

```bash
npm start
# Select: all
# Confirm: yes
```

### Example 2: Create Only Voice Agents

```bash
npm start
# Select: voice
# Confirm: yes
```

### Example 3: Create Specific Agents

```bash
npm start
# Select: 1,5,6
# This creates: Receptionist (voice), Receptionist (SMS), Lead Nurture (SMS)
# Confirm: yes
```

### Example 4: List Existing Agents

```bash
npm run list
```

Output:
```
Voice AI Agents:
  - Main Receptionist (ID: voice_001) - Status: active
  - Demo Booker (ID: voice_002) - Status: active

Conversation AI Agents:
  - SMS Receptionist (ID: conv_001) - Status: active
```

### Example 5: Delete an Agent

```bash
# Delete a voice agent
node ghl-api-setup.js delete-voice voice_001

# Delete a conversation bot
node ghl-api-setup.js delete-sms conv_001
```

## Best Practices

1. **Test First**: Create one agent first to verify your setup works
2. **Backup Configs**: Keep your agent configuration files in version control
3. **Environment Variables**: Never commit your `.env` file with real credentials
4. **Rate Limits**: Create agents in small batches to avoid rate limiting
5. **Naming Conventions**: Use descriptive agent names to easily identify them
6. **Error Logs**: Review error messages carefully for troubleshooting
7. **API Key Security**: Keep your API key secure and rotate it periodically

## API Documentation

- **GHL API Docs**: https://highlevel.stoplight.io/
- **Voice AI Docs**: https://marketplace.gohighlevel.com/docs/ghl/voice-ai/
- **Conversation AI Docs**: https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/
- **GHL Community**: https://community.gohighlevel.com/

## Support

For issues with:
- **This script**: Check the Troubleshooting section above
- **GHL API**: Contact GHL support at support@gohighlevel.com
- **Agent configuration**: Refer to agent JSON files and GHL documentation

## License

MIT License - See LICENSE file for details

## Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Changelog

### Version 1.0.0 (2025-12-01)
- Initial release
- Voice AI agent creation
- Conversation AI bot creation
- Interactive CLI
- Command-line mode
- Error handling and retry logic
- Comprehensive logging

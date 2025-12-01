# Quick Start Guide

Get up and running with GHL AI Agent setup in 5 minutes.

## Step 1: Install Dependencies (1 minute)

```bash
cd Capture-Client-snapshot/scripts
npm install
```

## Step 2: Configure Credentials (2 minutes)

### Get Your GHL API Key

1. Log into GoHighLevel
2. Go to **Settings** → **Integrations** → **API Keys**
3. Click **"Create API Key"**
4. Select these scopes:
   - ✓ voice-ai.write
   - ✓ voice-ai.read
   - ✓ conversation-ai.write
   - ✓ conversation-ai.read
5. Copy the API key

### Get Your Location ID

1. Go to **Settings** → **Company**
2. Copy your **Location ID**

### Create .env File

```bash
cp .env.example .env
```

Edit `.env` and paste your credentials:

```env
GHL_API_KEY=sk_live_abc123your_api_key_here
GHL_LOCATION_ID=xyz789your_location_id_here
GHL_BASE_URL=https://services.leadconnectorhq.com
```

## Step 3: Test Connection (1 minute)

```bash
npm test
```

You should see:

```
Voice AI API:           ✓ READY
Conversation AI API:    ✓ READY

🎉 All systems ready!
```

If you see errors, check the [Troubleshooting](#troubleshooting) section.

## Step 4: Create Agents (1 minute)

```bash
npm start
```

Follow the prompts:

1. Press Enter to use credentials from .env
2. Choose which agents to create:
   - Type `all` for all agents
   - Type `voice` for Voice AI only
   - Type `sms` for SMS/Conversation AI only
   - Type `1,2,3` for specific agents
3. Type `yes` to confirm

That's it! Your agents will be created.

## What's Next?

### View Your Agents in GHL

1. Log into GoHighLevel
2. Go to **Conversations** → **AI Agents**
3. You'll see your newly created agents

### Customize Agent Configurations

Edit the JSON files in:
- `../agents/voice/` - Voice AI agents
- `../agents/sms/` - SMS/Conversation AI bots

### List Existing Agents

```bash
npm run list
```

### Delete an Agent

```bash
# Delete voice agent
node ghl-api-setup.js delete-voice <agent-id>

# Delete SMS bot
node ghl-api-setup.js delete-sms <bot-id>
```

## Common Issues

### "Authentication failed"

- Double-check your API key in `.env`
- Regenerate your API key in GHL if needed

### "Permission denied"

- Verify your API key has all required scopes
- Create a new API key with correct scopes

### "Agents not visible in GHL"

- Verify your Location ID is correct
- Make sure you're logged into the right GHL account

## Need Help?

See the full [README.md](README.md) for detailed documentation.

## Example Usage

### Create Only Receptionist Agents

```bash
npm start
# Select: 1,5
# This creates: Voice Receptionist + SMS Receptionist
```

### Create All Voice Agents

```bash
npm start
# Select: voice
```

### Create Everything

```bash
npm start
# Select: all
```

## Files Reference

| File | Purpose |
|------|---------|
| `ghl-api-setup.js` | Main setup script |
| `test-connection.js` | Test API connectivity |
| `package.json` | Node.js dependencies |
| `.env` | Your credentials (DO NOT COMMIT) |
| `README.md` | Full documentation |

## Success!

You're now ready to automate GHL agent creation. Happy building! 🚀

# GHL AI Agents Setup - Implementation Checklist

Use this checklist to ensure successful setup and deployment of your GHL AI agents.

## Phase 1: Prerequisites ✓

### GHL Account Verification

- [ ] You have an active GoHighLevel account
- [ ] Your account is on Agency plan or higher (required for API access)
- [ ] You have admin/owner permissions in your GHL account
- [ ] Voice AI feature is enabled for your account
- [ ] Conversation AI feature is enabled for your account

### Development Environment

- [ ] Node.js 14.0.0 or higher installed
  - Check with: `node --version`
- [ ] npm (Node Package Manager) installed
  - Check with: `npm --version`
- [ ] Git installed (optional, for version control)
  - Check with: `git --version`
- [ ] Terminal/command line access
- [ ] Text editor (VS Code, Sublime, etc.)

## Phase 2: Setup ✓

### 1. File Structure Verification

- [ ] Navigate to `Capture-Client-snapshot/scripts/` directory
- [ ] Verify these files exist:
  - [ ] `ghl-api-setup.js` (main script)
  - [ ] `package.json` (dependencies)
  - [ ] `test-connection.js` (testing utility)
  - [ ] `.env.example` (credential template)
  - [ ] `README.md` (full documentation)
  - [ ] `QUICKSTART.md` (quick guide)

### 2. Agent Configuration Files

- [ ] Verify `../agents/voice/` directory exists
- [ ] Voice agent configurations present:
  - [ ] `receptionist-voice.json`
  - [ ] `demo-booker-voice.json`
  - [ ] `lead-qualifier-voice.json`
  - [ ] `after-hours-voice.json`
- [ ] Verify `../agents/sms/` directory exists
- [ ] SMS agent configurations present:
  - [ ] `receptionist-sms.json`
  - [ ] `lead-nurture-sms.json`
  - [ ] `appointment-sms.json`
  - [ ] `review-requester-sms.json`

### 3. Dependencies Installation

```bash
cd Capture-Client-snapshot/scripts
npm install
```

- [ ] `npm install` completed successfully
- [ ] `node_modules/` directory created
- [ ] `axios` package installed
- [ ] `dotenv` package installed
- [ ] No error messages displayed

## Phase 3: GHL API Credentials ✓

### 1. Get API Key

- [ ] Log into GoHighLevel
- [ ] Navigate to: **Settings** → **Integrations** → **API Keys**
- [ ] Click **"Create API Key"** or **"Create Personal Access Token"**
- [ ] Give it a descriptive name: "AI Agents Setup Script"
- [ ] Select required scopes:
  - [ ] `voice-ai.write`
  - [ ] `voice-ai.read`
  - [ ] `conversation-ai.write`
  - [ ] `conversation-ai.read`
  - [ ] `contacts.write` (recommended)
  - [ ] `calendars.write` (recommended)
- [ ] Click **"Create"**
- [ ] **Copy the API key immediately** (you won't see it again!)
- [ ] Save the API key in a secure location

### 2. Get Location ID

- [ ] Go to: **Settings** → **Company**
- [ ] Find **Location ID** field
- [ ] Copy the Location ID (long alphanumeric string)
- [ ] Save the Location ID securely

### 3. Configure Environment Variables

```bash
cp .env.example .env
```

- [ ] `.env` file created
- [ ] Open `.env` in text editor
- [ ] Paste your API key:
  ```
  GHL_API_KEY=your_actual_api_key_here
  ```
- [ ] Paste your Location ID:
  ```
  GHL_LOCATION_ID=your_actual_location_id_here
  ```
- [ ] Base URL is correct (usually no need to change):
  ```
  GHL_BASE_URL=https://services.leadconnectorhq.com
  ```
- [ ] Save the `.env` file
- [ ] **DO NOT** commit `.env` to version control

## Phase 4: Testing ✓

### 1. Connection Test

```bash
npm test
```

Expected output:
```
Test 1: Environment Variables
✓ GHL_API_KEY found
✓ GHL_LOCATION_ID found
✓ Base URL: https://services.leadconnectorhq.com

Test 2: API Key Format
✓ API key length looks valid

Test 3: Network Connectivity
✓ Can reach GHL API server

Test 4: API Authentication
✓ Authentication successful
  Found X existing Voice AI agents

Voice AI API:           ✓ READY
Conversation AI API:    ✓ READY

🎉 All systems ready!
```

- [ ] All tests passed (green checkmarks)
- [ ] No authentication errors
- [ ] No permission errors
- [ ] Can connect to GHL API

### 2. Troubleshooting (if tests fail)

If authentication fails (401):
- [ ] Verify API key is correct in `.env`
- [ ] Check for extra spaces or quotes in `.env`
- [ ] Regenerate API key in GHL if needed

If permission denied (403):
- [ ] Verify API key has all required scopes
- [ ] Create new API key with correct scopes
- [ ] Update `.env` with new key

If connection fails:
- [ ] Check internet connection
- [ ] Verify GHL API is not experiencing downtime
- [ ] Check firewall settings

## Phase 5: Agent Creation ✓

### 1. Review Agent Configurations

Before creating agents, review and customize:

- [ ] Open `../agents/voice/receptionist-voice.json`
  - [ ] Update `business_info` (name, phone, website)
  - [ ] Update `business_hours` for your timezone
  - [ ] Customize `greetings` with your messaging
  - [ ] Review `call_routing` rules

- [ ] Open `../agents/sms/receptionist-sms.json`
  - [ ] Update `businessContext` (name, phone, email)
  - [ ] Customize `responseTemplates`
  - [ ] Review `triggers` keywords

- [ ] Review other agent configurations as needed

### 2. Create Agents

```bash
npm start
```

Interactive prompts:
- [ ] Credentials loaded from `.env` (or enter manually)
- [ ] Review list of existing agents (if any)
- [ ] Review available agents to create
- [ ] Make selection:
  - Option 1: `all` - Create all agents
  - Option 2: `voice` - Create voice agents only
  - Option 3: `sms` - Create SMS agents only
  - Option 4: `1,2,3` - Create specific agents
- [ ] Review confirmation prompt
- [ ] Type `yes` to proceed
- [ ] Watch creation progress
- [ ] Review results summary

### 3. Verify Results

Expected output:
```
Successfully created: X/X

Successful:
✓ Capture Client Main Receptionist (ID: voice_abc123)
✓ Capture Client Demo Booker (ID: voice_def456)
...
```

- [ ] All selected agents created successfully
- [ ] No error messages
- [ ] Agent IDs displayed

## Phase 6: Verification in GHL ✓

### 1. Voice AI Agents

- [ ] Log into GoHighLevel
- [ ] Navigate to: **Conversations** → **Voice AI**
- [ ] Verify your created agents appear in the list
- [ ] Check agent status (should be "Active")
- [ ] Click on an agent to view details
- [ ] Verify configuration matches your JSON files

### 2. Conversation AI Bots

- [ ] Navigate to: **Conversations** → **Conversation AI**
- [ ] Verify your created bots appear in the list
- [ ] Check bot status (should be "Active")
- [ ] Click on a bot to view details
- [ ] Verify configuration matches your JSON files

### 3. Test Agents (Optional)

For Voice AI:
- [ ] Call your GHL phone number
- [ ] Verify voice agent answers
- [ ] Test conversation flow
- [ ] Check call recording in GHL

For SMS:
- [ ] Send a test text message
- [ ] Verify bot responds
- [ ] Test keyword triggers
- [ ] Check conversation history

## Phase 7: Post-Deployment ✓

### 1. Agent Management

List existing agents:
```bash
npm run list
```

- [ ] Can list all agents successfully
- [ ] Agent IDs are correct

Delete an agent (if needed):
```bash
node ghl-api-setup.js delete-voice <agent-id>
node ghl-api-setup.js delete-sms <bot-id>
```

- [ ] Can delete agents successfully

### 2. Documentation

- [ ] Read full README.md for advanced usage
- [ ] Bookmark API documentation links
- [ ] Save agent IDs for future reference
- [ ] Document any customizations made

### 3. Backup

- [ ] Backup your `.env` file (store securely, not in Git)
- [ ] Backup agent configuration JSON files
- [ ] Note any custom modifications
- [ ] Save agent IDs from GHL

### 4. Security

- [ ] Verify `.env` is in `.gitignore`
- [ ] Never commit `.env` to version control
- [ ] Store API keys securely
- [ ] Rotate API keys periodically (recommended every 90 days)
- [ ] Limit API key scopes to only what's needed

## Phase 8: Monitoring & Maintenance ✓

### 1. Monitor Agent Performance

In GHL Dashboard:
- [ ] Check call volume and response rates
- [ ] Review call recordings and transcripts
- [ ] Monitor SMS conversation engagement
- [ ] Track appointment booking rates
- [ ] Review any error logs

### 2. Regular Maintenance

Monthly tasks:
- [ ] Review agent performance metrics
- [ ] Update agent configurations as needed
- [ ] Check for GHL API updates
- [ ] Verify API key is still valid
- [ ] Review and optimize conversation flows

Quarterly tasks:
- [ ] Rotate API keys for security
- [ ] Audit agent configurations
- [ ] Update prompt files based on performance
- [ ] Review and update business information

## Phase 9: Advanced Usage (Optional) ✓

### 1. Custom Scripts

- [ ] Review `example-custom-usage.js` for examples
- [ ] Create custom automation scripts
- [ ] Import `GHLAPIClient` as a module
- [ ] Implement custom management functions

### 2. Integration

- [ ] Integrate with CI/CD pipeline (if applicable)
- [ ] Automate agent updates on config changes
- [ ] Set up monitoring and alerting
- [ ] Create backup and restore procedures

### 3. Scaling

- [ ] Document process for adding new agents
- [ ] Create templates for new agent types
- [ ] Establish naming conventions
- [ ] Define deployment procedures

## Troubleshooting Common Issues

### Issue: "Authentication failed"

**Checklist:**
- [ ] API key is correct in `.env`
- [ ] No extra spaces or quotes around key
- [ ] API key hasn't expired
- [ ] Using Personal Integration Token (not temp token)

**Solution:**
```bash
# Regenerate API key in GHL and update .env
# Then run test again
npm test
```

### Issue: "Permission denied"

**Checklist:**
- [ ] API key has `voice-ai.write` scope
- [ ] API key has `voice-ai.read` scope
- [ ] API key has `conversation-ai.write` scope
- [ ] API key has `conversation-ai.read` scope

**Solution:**
- Create new API key with all required scopes
- Update `.env` file
- Run test to verify

### Issue: "Agents not visible in GHL"

**Checklist:**
- [ ] Location ID is correct
- [ ] Logged into correct GHL account
- [ ] Agent creation showed success message
- [ ] Refreshed GHL dashboard

**Solution:**
```bash
# List agents via API to verify they exist
npm run list
```

### Issue: "Config file not found"

**Checklist:**
- [ ] Running script from `scripts/` directory
- [ ] Agent JSON files exist in `../agents/`
- [ ] File paths are correct
- [ ] JSON files are valid (no syntax errors)

**Solution:**
```bash
# Verify files exist
ls -la ../agents/voice/
ls -la ../agents/sms/

# Validate JSON
node -e "JSON.parse(require('fs').readFileSync('../agents/voice/receptionist-voice.json'))"
```

## Success Metrics

After completion, you should have:

✓ **Functional API Integration**
- Script can authenticate with GHL API
- Can create, read, and delete agents
- Error handling works correctly

✓ **Agents Deployed**
- All desired agents created in GHL
- Agents are active and operational
- Configurations match JSON files

✓ **Documentation Complete**
- Agent IDs documented
- Customizations noted
- Backup procedures established

✓ **Testing Verified**
- Connection tests pass
- Agents respond correctly
- Workflows function as expected

✓ **Security Maintained**
- API keys stored securely
- `.env` not in version control
- Access controls in place

## Support Resources

If you encounter issues not covered by this checklist:

1. **Script Documentation**
   - `README.md` - Full documentation
   - `QUICKSTART.md` - Quick start guide
   - `SETUP-SUMMARY.md` - Implementation overview

2. **GHL Resources**
   - API Docs: https://highlevel.stoplight.io/
   - Community: https://community.gohighlevel.com/
   - Support: support@gohighlevel.com

3. **Debugging**
   - Check console output for error messages
   - Run `npm test` to verify connectivity
   - Review `.env` file for typos
   - Check GHL dashboard for agent status

## Completion

When all items are checked:

- [ ] ✓ Setup complete
- [ ] ✓ Agents deployed
- [ ] ✓ Testing verified
- [ ] ✓ Documentation reviewed
- [ ] ✓ Ready for production use

**Congratulations! Your GHL AI Agents are now set up and ready to use!** 🎉

---

**Last Updated**: December 1, 2025
**Script Version**: 1.0.0
**Status**: Production Ready

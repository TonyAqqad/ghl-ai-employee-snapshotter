# Capture Client - AI Employee System Snapshot

Complete AI-powered lead management system for marketing agencies featuring voice agents, SMS automation, and multi-touch workflows.

## IMPORTANT: How This Snapshot Works

This is NOT a traditional GHL snapshot file that can be imported via URL. GHL snapshots are server-side only and cannot be created from external files.

This folder contains **configuration templates** that you use as a reference to manually set up or programmatically create via API. Think of this as a blueprint rather than a ready-to-import package.

### Why Not a Traditional Snapshot?

GoHighLevel snapshots can only be created from within an existing GHL account. They are stored on GHL's servers and shared via snapshot links. External files cannot be converted into importable snapshots - this is a GHL platform limitation, not a choice.

### What This Means for You

You'll need to either:
1. Manually recreate the configurations in your GHL account following our guides
2. Use our API scripts to automate the setup process
3. Once set up, create your own native GHL snapshot for easy replication

The good news: Our detailed guides and automation scripts make this process straightforward, and you'll have complete control over customization.

## What's Included

### Voice AI Agents (4)
Configuration templates for AI-powered phone agents:
- **Receptionist Agent** - Professional phone answering, FAQ handling, lead capture
- **Lead Qualifier Agent** - Discovery calls, qualification questions, automatic scoring
- **Demo Booker Agent** - Appointment scheduling, calendar integration, confirmations
- **After Hours Agent** - Off-hours coverage, message taking, callback scheduling

### Conversation AI Bots (4)
SMS automation bot configurations:
- **SMS Receptionist Bot** - Text inquiry responses, information sharing, lead capture
- **Lead Nurture Bot** - Follow-up sequences, engagement tracking, hot lead identification
- **Appointment Bot** - Confirmations, reminders (24hr + 1hr), rescheduling, no-show follow-up
- **Review Requester Bot** - Review requests, process guidance, feedback handling

### Workflow Blueprints (14)
Complete workflow documentation with step-by-step guides:

**Voice Workflows (5)**:
- Inbound Call Handler
- Lead Qualification
- Demo Booking
- Missed Call Recovery
- Voicemail Processing

**SMS Workflows (4)**:
- New Lead SMS Sequence
- Demo Reminder Sequence
- Lead Nurture Sequence
- Win-back Sequence

**Email Workflows (5)**:
- Welcome Sequence
- Demo Sequence
- Proposal Follow-up
- Client Onboarding
- Re-engagement Sequence

### Prompts and Training Content
- AI agent system prompts
- Knowledge base content
- FAQ responses
- Training scenarios
- Best practices documentation

### Email Templates
- Confirmation emails
- Reminder templates
- Follow-up sequences
- Welcome series
- Proposal templates

## Who This Is For

This snapshot is perfect for:

- **Marketing Agencies** - Automate client acquisition and management
- **Service Providers** - Professional lead handling and follow-up
- **Consultants** - Streamline discovery and booking process
- **B2B Companies** - Enterprise-grade lead qualification
- **Any Business** - That wants to never miss a lead

## Key Benefits

- **24/7 Availability** - Never miss a call or text message
- **Instant Response** - Engage leads within seconds
- **Consistent Experience** - Professional service every time
- **Automated Follow-up** - Multi-touch nurture sequences
- **Lead Qualification** - Automatic scoring and routing
- **Increased Conversions** - More demos booked, more deals closed
- **Time Savings** - Automate 80% of lead management
- **Scalability** - Handle unlimited volume without hiring

## How to Use This Snapshot

### Option 1: Manual Setup (Beginner-Friendly)

Follow the step-by-step guides in the `/docs/` folder to recreate everything in the GHL UI:

1. **Start here**: Read `docs/GHL-IMPORT-GUIDE.md` for the complete setup guide
2. **Build workflows**: Follow `docs/WORKFLOW-BUILDER-GUIDE.md` to recreate each workflow
3. **Configure agents**: Use the agent configuration files in `/agents/` as templates
4. **Customize**: Replace placeholder values with your business information

**Time required**: 4-6 hours for complete setup

### Option 2: API Setup (Recommended for Developers)

Use our Node.js scripts to automate the creation of agents via the GHL API:

```bash
cd scripts
npm install
node ghl-api-setup.js
```

This will:
- Create all 4 Voice AI agents with pre-configured prompts
- Create all 4 Conversation AI bots with training content
- Set up custom fields and tags
- Configure phone number assignments

**Note**: Workflows must still be created manually through the GHL workflow builder. The API does not support workflow creation.

**Time required**: 30 minutes for API setup + 2-3 hours for workflows

### Option 3: Create Native GHL Snapshot (For Replication)

Once you've successfully set up everything in your GHL account:

1. Go to Settings > Snapshots in GHL
2. Click "Create Snapshot"
3. Select all the components you created
4. Give it a name (e.g., "Capture Client AI System")
5. Save the snapshot

Now you have a proper GHL snapshot that can be:
- Shared via URL with team members or clients
- Imported into other GHL sub-accounts instantly
- Used as a backup of your configuration

**This is the best approach for agencies serving multiple clients.**

## Folder Structure

```
Capture-Client-snapshot/
├── agents/                          # AI agent configurations
│   ├── voice/                       # Voice AI agent templates
│   │   ├── receptionist.json
│   │   ├── lead-qualifier.json
│   │   ├── demo-booker.json
│   │   └── after-hours.json
│   └── conversation/                # SMS bot templates
│       ├── sms-receptionist.json
│       ├── lead-nurture.json
│       ├── appointment.json
│       └── review-requester.json
├── workflows/                       # Workflow blueprints
│   ├── voice/                       # Voice workflow guides
│   ├── sms/                         # SMS workflow guides
│   └── email/                       # Email workflow guides
├── prompts/                         # AI prompts and training
│   ├── system-prompts/              # Core agent instructions
│   ├── knowledge-base/              # FAQ and knowledge content
│   └── training-scenarios/          # Example conversations
├── templates/                       # Email and SMS templates
│   ├── email/
│   └── sms/
├── scripts/                         # Automation scripts
│   ├── ghl-api-setup.js            # API setup script
│   ├── config.js                    # Configuration file
│   └── package.json
└── docs/                            # Documentation
    ├── GHL-IMPORT-GUIDE.md         # Complete manual setup guide
    ├── WORKFLOW-BUILDER-GUIDE.md   # How to build each workflow
    ├── API-SETUP-GUIDE.md          # API automation guide
    ├── CUSTOM-VALUES-GUIDE.md      # Placeholder replacement
    └── TESTING-CHECKLIST.md        # Testing protocol
```

## Quick Start Guide

### Prerequisites

Before starting, ensure you have:

- **GoHighLevel account** (Agency Pro or higher recommended)
- **API access** (Found in Agency Settings > API)
- **Phone number** with Voice AI enabled (must use Lead Connector, not Twilio direct)
- **SMS capabilities** on your phone number
- **Conversation AI** enabled in your account
- **Node.js** installed (for API setup option)

### Step-by-Step Setup

#### Step 1: Get Your GHL API Credentials

1. Log into your GHL account
2. Go to Agency Settings > API
3. Create a new API key with these permissions:
   - Conversations (read/write)
   - Contacts (read/write)
   - Workflows (read)
   - Calendar (read)
4. Copy your API key and Location ID
5. Save them securely (you'll need these for the API script)

#### Step 2: Choose Your Setup Method

**For Manual Setup**:
- Open `docs/GHL-IMPORT-GUIDE.md`
- Follow the step-by-step instructions
- Start with Voice AI agents, then SMS bots, then workflows

**For API Setup**:
1. Navigate to the `scripts/` folder
2. Run `npm install`
3. Edit `config.js` and add your API credentials
4. Run `node ghl-api-setup.js`
5. Wait 5-10 minutes for agents to be created
6. Verify in your GHL account
7. Follow `docs/WORKFLOW-BUILDER-GUIDE.md` to create workflows manually

#### Step 3: Configure Custom Values

Replace these placeholders throughout your configuration:

- `{{business_name}}` - Your business name
- `{{business_phone}}` - Your phone number (format: +1234567890)
- `{{business_email}}` - Your support email
- `{{business_website}}` - Your website URL
- `{{business_hours}}` - Your operating hours
- `{{calendar_link}}` - Your GHL calendar booking link

See `docs/CUSTOM-VALUES-GUIDE.md` for complete list and instructions.

#### Step 4: Test Everything

Use the comprehensive testing checklist:

1. **Test each Voice AI agent**: Make test calls during and after hours
2. **Test each SMS bot**: Send test messages and verify responses
3. **Test workflows**: Trigger each workflow with test contacts
4. **Test integrations**: Verify calendar bookings, email delivery
5. **Test edge cases**: Voicemail, opt-outs, errors

See `docs/TESTING-CHECKLIST.md` for the complete 200+ point checklist.

#### Step 5: Create Your GHL Snapshot (Optional)

Once everything works:

1. Go to Settings > Snapshots
2. Create new snapshot
3. Select all components
4. Name it for easy identification
5. Share with team/clients via snapshot URL

#### Step 6: Go Live

1. Review all configurations one final time
2. Train your team on the system
3. Enable all agents and workflows
4. Monitor closely for the first 48 hours
5. Make adjustments based on real-world performance

## Documentation

Complete documentation is provided in the `docs/` folder:

### [Custom Values Guide](docs/custom-values-guide.md)
- Complete list of all custom values
- Instructions for finding and replacing
- Validation checklist
- Common mistakes to avoid

### [Setup Guide](docs/setup-guide.md)
- Step-by-step configuration instructions
- Phone system setup
- Calendar configuration
- Voice agent setup
- SMS agent setup
- Workflow configuration
- Email setup
- Troubleshooting guide

### [Testing Checklist](docs/testing-checklist.md)
- 200+ tests to verify functionality
- Voice agent tests
- SMS agent tests
- Workflow tests
- Integration tests
- Pre-launch checklist

## Requirements

### GoHighLevel Account Requirements

- **Account Type**: Agency Pro or higher (for API access and advanced features)
- **Voice AI**: Must be enabled on your account
- **Conversation AI**: Must be enabled for SMS bots
- **Phone System**: Must use Lead Connector (Twilio direct integration will NOT work with Voice AI)
- **API Access**: Required for automated setup (found in Agency Settings > API)

### Phone Number Requirements

- **Voice Capabilities**: Phone number must support inbound/outbound calls
- **SMS Capabilities**: Phone number must support SMS messaging
- **Lead Connector**: Number must be provisioned through GHL's Lead Connector
- **NOT Compatible**: Direct Twilio numbers without Lead Connector integration

### Technical Requirements

- **Email Domain**: Verified domain for email sending
- **Calendar**: At least one calendar configured in GHL
- **Node.js**: Version 14+ (only needed for API setup script)
- **Browser**: Modern browser for manual setup (Chrome, Firefox, Safari, Edge)

### Compatibility

- Works with SaaS mode
- Compatible with white-label/rebrand
- Supports multiple sub-accounts
- No external dependencies beyond GHL platform

## Use Cases

### Scenario 1: New Lead Calls

1. Lead calls business number
2. Receptionist Agent answers professionally
3. Captures lead information
4. Routes to Lead Qualifier if interested
5. Lead Qualifier asks discovery questions
6. Calculates lead score
7. If qualified, routes to Demo Booker
8. Demo scheduled and confirmations sent
9. Automated reminder sequence begins
10. Post-demo follow-up triggered

### Scenario 2: Text Inquiry

1. Lead texts business number
2. SMS Receptionist responds instantly
3. Answers questions and provides info
4. Shares calendar link
5. Lead books appointment
6. Appointment Agent sends confirmation
7. Reminder sequence activated
8. Post-appointment follow-up

### Scenario 3: After Hours Contact

1. Lead calls after business hours
2. After Hours Agent answers
3. States business hours
4. Takes message professionally
5. Creates morning callback task
6. Sends acknowledgment SMS
7. Team follows up next business day

### Scenario 4: Lead Nurture

1. Lead not ready to buy tagged "Nurture"
2. Nurture sequence begins
3. Week 1: Educational content
4. Week 2: Success story
5. Week 3: Industry insights
6. Week 4: Check-in with soft offer
7. Engagement tracked automatically
8. Hot leads identified and escalated

## Customization Options

This snapshot is designed to be customized:

### Easy Customizations
- Business information and branding
- Voice agent personalities and responses
- SMS and email message content
- Workflow timing and sequences
- Qualification questions and scoring
- Pipeline stages and names

### Advanced Customizations
- Custom integrations (Zapier, webhooks)
- Additional custom fields
- Industry-specific workflows
- Multi-language support
- Territory/team routing
- Custom reporting

## Best Practices

### Voice Agents
- Test your agents with real calls before going live
- Update knowledge bases regularly
- Review transcripts weekly for optimization
- Train agents on new FAQs and scenarios
- Monitor call quality and agent performance

### SMS Automation
- Keep messages concise and valuable
- Respect quiet hours (no texts before 9am or after 9pm)
- Honor opt-outs immediately
- Test all links before sending
- Monitor delivery rates and engagement

### Workflows
- Review workflow performance weekly
- A/B test message variations
- Optimize timing based on engagement data
- Remove or archive inactive workflows
- Document any customizations

### Lead Management
- Follow up on hot leads within 5 minutes
- Review lead scores and adjust thresholds
- Keep contact data clean and updated
- Tag contacts consistently
- Move leads through pipeline promptly

## Success Metrics

Track these KPIs to measure success:

### Response Metrics
- Average response time (target: <30 seconds)
- Call answer rate (target: 95%+)
- SMS response rate (target: 100%)
- After-hours coverage (target: 100%)

### Conversion Metrics
- Lead capture rate (calls/SMS to contacts)
- Qualification rate (contacts to qualified)
- Demo booking rate (qualified to scheduled)
- Demo show rate (scheduled to completed)
- Proposal acceptance rate (demos to closed)

### Efficiency Metrics
- Calls handled by AI vs human
- Time saved on lead management
- Cost per lead acquired
- ROI on AI automation

## Support and Assistance

### Documentation
- Review all docs in the `/docs` folder
- Keep this README as reference
- Check testing checklist regularly

### Contact Support
- **Email**: info@captureclient.net
- **Website**: https://capture-client-site.vercel.app/
- **Phone**: (865) 346-3339

### GHL Resources
- GHL Support: support.gohighlevel.com
- GHL Community: community.gohighlevel.com
- GHL Help Docs: help.gohighlevel.com

## Frequently Asked Questions

**Q: Why can't I just import a snapshot.json file?**
A: GHL snapshots can only be created and shared from within GHL's platform. They exist on GHL's servers, not as downloadable files. This is a GHL platform limitation. This package provides templates and automation scripts to recreate the system in your account.

**Q: How long does setup take?**
A: Manual setup: 4-6 hours. API-assisted setup: 2-3 hours. Once configured, you can create a native GHL snapshot in 5 minutes for instant replication.

**Q: Do I need coding skills?**
A: No, not for manual setup. Everything can be done through GHL's UI following our guides. The API script is optional and just runs with `node ghl-api-setup.js`.

**Q: Can I use this for multiple businesses/clients?**
A: Yes. Set it up once, create a GHL snapshot, then import that snapshot into unlimited sub-accounts. Perfect for agencies.

**Q: What if I don't have a GHL phone number?**
A: You must purchase a phone number through GHL's Lead Connector. Voice AI does NOT work with direct Twilio numbers.

**Q: Does this work with Twilio numbers?**
A: Only if your Twilio number is integrated through GHL's Lead Connector. Direct Twilio integration (bypassing Lead Connector) will NOT work with Voice AI.

**Q: Can I customize the agent voices and personalities?**
A: Yes. GHL offers multiple voice options (male/female, different accents). Agent personalities can be customized by editing their system prompts.

**Q: Will this interfere with my existing GHL setup?**
A: No. This creates entirely new components. Your existing agents, workflows, and configurations remain untouched.

**Q: What does this cost?**
A: The templates and scripts are included. You'll need:
- Active GHL subscription (Agency Pro+ recommended: $297-497/month)
- Phone number with Voice AI ($0.02/minute for calls)
- Conversation AI (included with most plans)

**Q: Can I white-label this for clients?**
A: Absolutely. Once set up, create a GHL snapshot and deploy to unlimited client accounts. Perfect for agency offerings.

**Q: What about TCPA compliance?**
A: The system includes opt-out handling, but YOU are responsible for:
- Obtaining proper consent before contacting leads
- Maintaining compliant contact lists
- Following TCPA regulations for your industry

**Q: Can I modify everything?**
A: Yes. These are templates. Customize agents, workflows, messages, timing - everything to match your business needs.

**Q: Why use the API script vs manual setup?**
A: The API script creates agents in 5 minutes vs 2 hours manually. But workflows must still be created manually (GHL API limitation). Choose based on your comfort level.

**Q: What if I get stuck?**
A: Detailed documentation is in the `/docs` folder. Contact support at info@captureclient.net for assistance.

## Changelog

### Version 1.0.0 (2025-12-01)
- Initial release
- 4 voice agents included
- 4 SMS agents included
- 14 automation workflows
- Complete lead management system
- Custom fields and pipeline
- Full documentation suite

## License

This snapshot is proprietary software licensed for use by Capture Client customers only. Redistribution or resale is prohibited.

## About Capture Client

Capture Client specializes in AI-powered lead generation and management solutions for marketing agencies. We help businesses never miss a lead through intelligent automation and AI agents.

**Services**:
- AI Voice Agents
- Lead Generation Systems
- CRM Solutions
- Marketing Automation
- Done-for-You Implementation

**Contact**:
- **Location**: Knoxville, TN
- **Phone**: (865) 346-3339
- **Email**: info@captureclient.net
- **Website**: https://capture-client-site.vercel.app/
- **Hours**: Monday-Friday, 9am-6pm EST

---

## Getting Started Checklist

### Before You Begin
- [ ] GHL Agency Pro account (or higher)
- [ ] Voice AI enabled on account
- [ ] Conversation AI enabled on account
- [ ] Phone number provisioned through Lead Connector
- [ ] API credentials obtained (for API setup)
- [ ] Node.js installed (for API setup)

### Setup Phase
- [ ] API script run successfully OR manual agent creation completed
- [ ] All 4 Voice AI agents created and configured
- [ ] All 4 Conversation AI bots created and configured
- [ ] All 14 workflows created using builder guides
- [ ] Custom values replaced throughout system
- [ ] Phone number assigned to agents
- [ ] Calendars configured and linked

### Testing Phase
- [ ] Voice agents tested with real calls
- [ ] SMS bots tested with real messages
- [ ] All workflows triggered and verified
- [ ] Calendar bookings tested
- [ ] Email delivery verified
- [ ] Edge cases tested (voicemail, opt-outs, errors)

### Launch Phase
- [ ] Final configuration review completed
- [ ] Team trained on system usage
- [ ] All agents and workflows enabled
- [ ] Monitoring system set up
- [ ] (Optional) Native GHL snapshot created for backup/replication

## Need Help?

If you need assistance with setup, customization, or optimization:

1. **Documentation**: Review all guides in `/docs` folder
2. **Troubleshooting**: Check `docs/GHL-IMPORT-GUIDE.md` troubleshooting section
3. **Support**: Contact info@captureclient.net
4. **GHL Resources**: Visit help.gohighlevel.com for platform questions

We're here to help you succeed!

---

## Ready to Get Started?

### For Manual Setup:
Start with [GHL Import Guide](docs/GHL-IMPORT-GUIDE.md) for step-by-step instructions.

### For API Setup:
1. Navigate to `/scripts` folder
2. Follow instructions in [API Setup Guide](docs/API-SETUP-GUIDE.md)
3. Then build workflows using [Workflow Builder Guide](docs/WORKFLOW-BUILDER-GUIDE.md)

### Already Have Everything Set Up?
Create a native GHL snapshot (Settings > Snapshots > Create) to enable instant deployment to other accounts.

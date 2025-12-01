# GHL AI Employee Snapshotter

An automated system for creating GoHighLevel (GHL) snapshots with AI Employees - voice agents, SMS conversational agents, and automated workflows that work for any business type.

## What This Does

Give it:
- A **business type** (plumber, dentist, lawyer, etc.)
- Your **custom values** (business name, phone, hours, etc.)
- Which **AI employees** you want (receptionist, appointment booker, etc.)
- Your **Bright Data credentials** (for researching GHL documentation)

And it automatically creates a complete GHL snapshot with:
- **AI Voice Agents** - Handle phone calls with ChatGPT-4o
- **AI SMS Agents** - Handle text conversations
- **Automated Workflows** - Connect everything together
- **Templated Prompts** - Adapt to any business via custom values
- **Complete Documentation** - Setup guides and testing checklists

## AI Employee Types

| Employee | Voice | SMS | Description |
|----------|-------|-----|-------------|
| **Receptionist** | Yes | Yes | First point of contact, routes inquiries, takes messages |
| **Appointment Booker** | Yes | Yes | Books, reschedules, cancels appointments + reminders |
| **Customer Service** | Yes | Yes | Handles inquiries, FAQs, complaints, escalations |
| **Lead Qualifier** | Yes | Yes | Qualifies leads with discovery questions |
| **Follow-up Agent** | No | Yes | Re-engages cold leads, nurture sequences |
| **Review Requester** | No | Yes | Requests reviews after service |
| **Payment Reminder** | Yes | Yes | Reminds about upcoming/overdue payments |
| **Onboarding Agent** | No | Yes | Welcomes new customers, guides setup |
| **No-Show Recovery** | Yes | Yes | Re-engages missed appointments |
| **Estimate Follow-up** | No | Yes | Follows up on pending quotes |

## Quick Start

1. **Open Claude Code** in this directory
2. Say: "Create a GHL AI Employee snapshot for a [business type]"
3. **Answer the questions**:
   - Snapshot name
   - Which AI employees to include
   - Your business custom values
   - Bright Data API key
4. **Wait for generation** (5-10 minutes)
5. **Import snapshot** into your GHL sub-account

## Example Usage

```
You: Create a GHL AI Employee snapshot for a plumbing company

Claude: I'll help you create a GHL AI Employee snapshot! I need some information:

1. Snapshot Name: (e.g., "Plumber Pro AI Assistant")
2. Which AI Employees do you need?
   - [x] Receptionist
   - [x] Appointment Booker
   - [x] Lead Qualifier
   - [x] Review Requester
   - [x] No-Show Recovery

3. Custom Values:
   - Business name: Acme Plumbing
   - Phone: (555) 123-4567
   - Hours: Mon-Fri 8am-6pm
   - Services: Emergency plumbing, drain cleaning, water heater repair
   ...

4. Bright Data API key: [your key]

Claude: Creating your snapshot...
[Generates workflows, prompts, voice agents, SMS agents]

Snapshot ready! Files in /snapshots/plumber-pro-ai-assistant/
```

## Custom Values System

All AI employees use templated custom values that adapt to any business:

```
{{business_name}}      - Your company name
{{business_phone}}     - Main phone number
{{business_hours}}     - Operating hours
{{services_list}}      - Services offered
{{booking_url}}        - Online booking link
{{escalation_contact}} - Who handles escalations
{{greeting_style}}     - How to greet (Hi there!, Hello!, etc.)
{{brand_tone}}         - Voice tone (friendly, professional, etc.)
...and 20+ more
```

## System Architecture

```
                      ORCHESTRATOR
             (Claude Code with 200k context)
                          |
        +-----------------+-----------------+
        |                 |                 |
        v                 v                 v
+---------------+ +---------------+ +---------------+
|GHL Researcher | |Workflow Design| |Prompt Engineer|
| (Bright Data) | | (Per Employee)| |  (ChatGPT-4o) |
+---------------+ +---------------+ +---------------+
                          |
        +-----------------+-----------------+
        |                 |                 |
        v                 v                 v
+---------------+ +---------------+ +---------------+
| Voice Agent   | |  SMS Agent    | |   Snapshot    |
|   Builder     | |    Builder    | |   Assembler   |
+---------------+ +---------------+ +---------------+
                          |
                          v
                 +----------------+
                 | COMPLETE GHL   |
                 |    SNAPSHOT    |
                 +----------------+
```

## Output Structure

```
/snapshots/[snapshot-name]/
├── snapshot.json           # Main import manifest
├── workflows/
│   ├── receptionist-*.json
│   ├── appointment-*.json
│   └── ...
├── agents/
│   ├── voice/
│   │   └── [employee]-voice.json
│   └── sms/
│       └── [employee]-sms.json
├── prompts/
│   └── [employee]-prompt.md
├── custom-values-guide.md  # How to configure values
├── setup-guide.md          # Complete setup instructions
└── testing-checklist.md    # Testing verification
```

## Subagents

| Agent | Purpose |
|-------|---------|
| **ghl-researcher** | Researches GHL docs via Bright Data |
| **workflow-designer** | Designs automated workflows per employee |
| **prompt-engineer** | Creates ChatGPT-4o optimized prompts |
| **voice-agent-builder** | Configures GHL Voice AI agents |
| **sms-agent-builder** | Configures GHL Conversation AI agents |
| **snapshot-assembler** | Assembles everything into import package |

## Prerequisites

- **GHL Account** with Conversation AI and Voice AI enabled
- **Bright Data Account** (for documentation research)
- **Claude Code** (this tool runs here)

## Setup Bright Data

1. Sign up at brightdata.com
2. Create a "Web Unlocker" zone
3. Copy your API key
4. Provide it when prompted (or set BRIGHTDATA_API_KEY env var)

## Industry Presets

Quick-start presets are available for common industries:

- **Plumbing** - Emergency services, drain cleaning, repairs
- **HVAC** - AC repair, heating, maintenance
- **Dental** - Cleanings, procedures, emergency care
- **Law Firm** - Consultations, case reviews
- **Real Estate** - Showings, consultations
- **Medical Practice** - Patient visits, follow-ups
- **Salon/Spa** - Hair, nails, spa services
- **Auto Repair** - Service, diagnostics

## Files Reference

```
.claude/
├── CLAUDE.md                          # Main orchestrator
├── agents/
│   ├── ghl-researcher.md              # GHL documentation research
│   ├── workflow-designer.md           # Workflow design
│   ├── prompt-engineer.md             # Prompt creation
│   ├── voice-agent-builder.md         # Voice agent config
│   ├── sms-agent-builder.md           # SMS agent config
│   └── snapshot-assembler.md          # Final assembly
└── templates/
    ├── custom-values-template.json    # All custom values
    └── employee-types.json            # Employee definitions
```

## FAQ

**Q: How long does snapshot generation take?**
A: Typically 5-15 minutes depending on the number of AI employees.

**Q: Can I customize the prompts after generation?**
A: Yes! All prompts are in markdown files you can edit before import.

**Q: What model do the AI agents use?**
A: ChatGPT-4o (gpt-4o) - GHL's default AI model.

**Q: Do I need Bright Data?**
A: Yes, for the initial GHL documentation research. The ghl-researcher agent uses it to understand current GHL capabilities.

**Q: Can I use this for multiple businesses?**
A: Yes! Each snapshot uses custom values, so you can import the same snapshot into different GHL sub-accounts and configure different values.

## Support

- **GHL Help Center**: https://help.gohighlevel.com
- **GHL Community**: https://community.gohighlevel.com

---

Built with Claude Code's agent orchestration system.

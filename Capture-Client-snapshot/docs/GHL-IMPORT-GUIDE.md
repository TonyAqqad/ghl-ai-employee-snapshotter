# GHL Import Guide: Capture Client AI Employee System

**Version 1.0.0** | Last Updated: December 1, 2025

---

## Table of Contents

1. [Understanding GHL Snapshots](#part-1-understanding-ghl-snapshots)
2. [Manual Setup Instructions](#part-2-manual-setup-instructions)
   - [Voice AI Agents](#voice-ai-agents-step-by-step)
   - [Conversation AI Bots](#conversation-ai-bots-step-by-step)
   - [Workflows](#workflows-step-by-step)
3. [API Setup Option](#part-3-api-setup-option)
4. [Post-Setup Checklist](#part-4-post-setup-checklist)
5. [Custom Values Reference](#part-5-custom-values-reference)
6. [Troubleshooting](#troubleshooting)

---

## Part 1: Understanding GHL Snapshots

### What Are These JSON Files?

The JSON files in this repository (`C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\`) are **configuration templates**, NOT importable files.

**Important:** You cannot drag-and-drop or import these files into GoHighLevel.

### How GHL Snapshots Actually Work

GoHighLevel snapshots are:
- **Server-side only** - Created and stored on GHL's servers
- **URL-based** - Shared via snapshot links (e.g., `https://snapshots.gohighlevel.com/...`)
- **Account-to-account** - Generated from within a GHL account and imported into another GHL account
- **Platform-restricted** - Cannot be created from external JSON files

### What This Means for You

Our JSON files serve as **blueprints** that document:
- Exact configuration settings for Voice AI agents
- Conversation AI bot settings and training data
- Workflow triggers, actions, and sequencing
- Prompt content and business logic
- Integration requirements

You'll use these blueprints to:
1. **Manually recreate** the configurations in GHL's UI (detailed instructions below)
2. **Programmatically create** using GHL's API (scripts provided in Part 3)
3. **Create your own snapshot** once everything is set up for future replication

---

## Part 2: Manual Setup Instructions

### Prerequisites Checklist

Before you begin, ensure you have:

- [ ] Active GHL account (Agency Pro or above recommended)
- [ ] Phone number configured with voice capabilities
- [ ] SMS enabled on your business number
- [ ] At least one calendar set up in GHL
- [ ] Verified email sending domain
- [ ] Access to Settings > Voice AI (if not visible, contact GHL support)
- [ ] Access to Settings > Conversation AI (Bot Builder)

---

## Voice AI Agents (Step-by-Step)

We have **4 Voice AI agents** to set up:
1. Receptionist Agent
2. Lead Qualifier Agent
3. Demo Booker Agent
4. After Hours Agent

### Configuration Files Location
```
C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\agents\voice\
├── receptionist-voice.json
├── lead-qualifier-voice.json
├── demo-booker-voice.json
└── after-hours-voice.json
```

### Prompt Files Location
```
C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\prompts\
├── voice-receptionist-prompt.md
├── lead-qualifier-prompt.md
└── demo-booker-prompt.md
```

---

### Agent 1: Receptionist Voice Agent

#### Step 1: Navigate to Voice AI
1. Log into your GHL account
2. Go to **Settings** > **Voice AI** (may also be under Phone System settings)
3. Click **Create New Agent** or **Add Voice Agent**

#### Step 2: Basic Configuration
**Reference:** `C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\agents\voice\receptionist-voice.json`

Set the following:
- **Agent Name:** `Capture Client Main Receptionist`
- **Agent Type:** `Inbound Voice`
- **Status:** `Active`
- **Description:** `Primary inbound call handler for Capture Client. Provides professional greeting, answers service questions, and routes callers to appropriate workflows.`

#### Step 3: Model Settings
Configure AI model (found in JSON lines 9-15):
- **Provider:** OpenAI
- **Model:** `gpt-4o`
- **Temperature:** `0.7`
- **Max Tokens:** `500`
- **Response Format:** `Conversational`

#### Step 4: Voice Settings
Configure voice output (found in JSON lines 17-25):
- **Voice Provider:** ElevenLabs
- **Voice ID:** `Jessica` (or choose from available voices)
- **Speaking Rate:** `1.0` (normal speed)
- **Pitch:** `0` (neutral)
- **Stability:** `0.75`
- **Similarity Boost:** `0.75`
- **Style:** `Professional Warm`

#### Step 5: Business Hours
Set up availability schedule (JSON lines 44-56):
```
Monday-Friday: 9:00 AM - 6:00 PM
Saturday-Sunday: Closed
Timezone: America/New_York (EST)
```

#### Step 6: System Prompt
Copy the **entire contents** of:
```
C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\prompts\voice-receptionist-prompt.md
```

Paste into the **System Prompt** or **Agent Instructions** field in GHL.

This prompt is 773 lines and contains:
- Identity and role definition
- Business information
- Call flow structure
- Pricing scripts
- Objection handling
- Example conversations

#### Step 7: Greetings Configuration
Set up dynamic greetings (JSON lines 58-75):

**Business Hours Greeting:**
```
Thank you for calling Capture Client! This is Jessica, your AI assistant. We help businesses like yours generate more leads and automate customer conversations with AI voice agents. How can I help you today?
```

**After Hours Greeting:**
```
Thank you for calling Capture Client. You've reached us outside our normal business hours of Monday through Friday, 9 AM to 6 PM Eastern Time. I'm Jessica, your AI assistant, and I'm happy to help you right now. What can I assist you with?
```

**Returning Caller Greeting:**
```
Welcome back to Capture Client! This is Jessica. I see you've spoken with us before. What can I help you with today?
```

#### Step 8: Intent Detection
Configure intent detection (JSON lines 77-111):

Enable intent detection and add these intents with their keywords:

| Intent Name | Keywords | Action |
|------------|----------|--------|
| learn_about_services | what do you do, services, tell me about, information, learn more | Provide service overview |
| schedule_demo | demo, appointment, schedule, book, meeting, consultation | Transfer to demo booker |
| qualify_lead | interested, pricing, how much, cost, get started, sign up | Transfer to qualifier |
| technical_support | support, help, issue, problem, not working, technical | Route to support |
| speak_to_human | representative, person, human, agent, staff member | Transfer to team |
| billing_question | billing, invoice, payment, charge, subscription | Route to billing |

#### Step 9: Call Routing Rules
Set up routing (JSON lines 129-173):

Configure these routing rules:

1. **Demo Request Route**
   - Condition: Intent = 'schedule_demo'
   - Action: Transfer to Demo Booker Agent
   - Message: "Perfect! Let me connect you with our scheduling assistant who can find the best time for your demo."

2. **Qualification Route**
   - Condition: Intent = 'qualify_lead'
   - Action: Transfer to Lead Qualifier Agent
   - Message: "Excellent! Let me connect you with our lead specialist who can learn more about your needs and find the perfect solution for you."

3. **Support Route**
   - Condition: Intent = 'technical_support'
   - Action: Transfer to phone number `(865) 346-3339`
   - Message: "I understand you need technical support. Let me transfer you to our support team right away."

4. **Human Request (Business Hours)**
   - Condition: Intent = 'speak_to_human' AND business_hours = true
   - Action: Transfer to team member
   - Message: "Of course! Let me connect you with one of our team members."

5. **Human Request (After Hours)**
   - Condition: Intent = 'speak_to_human' AND after_hours = true
   - Action: Take voicemail
   - Message: "I'd love to connect you with our team, but we're currently outside business hours. I can take a detailed message and have someone call you back first thing during business hours, or I can schedule a callback at a time that works for you. Which would you prefer?"

#### Step 10: GHL Integration
Configure CRM integration (JSON lines 228-267):

**Pipeline Settings:**
- Default Pipeline: `Voice Leads`
- Stages:
  - New Call
  - Interested - Needs Follow Up
  - Demo Scheduled
  - Callback Requested

**Contact Creation:**
- Auto-create contacts: ✓ Enabled
- Required fields: Phone, First Name
- Optional fields: Last Name, Email, Company, Source
- Default source: `Inbound Voice Call`
- Auto-apply tags: `voice_lead`, `receptionist`, `inbound`

**Custom Fields to Create:**
- `call_intent` (Text)
- `call_duration` (Number)
- `call_sentiment` (Text)
- `qualification_score` (Number)
- `ai_agent_handled` (Boolean)

#### Step 11: Phone Number Assignment
1. Go to **Settings** > **Phone Numbers**
2. Select your business phone number
3. Under **Inbound Call Handling**, assign to `Receptionist Agent`
4. Set business hours routing logic:
   - Business hours (Mon-Fri 9am-6pm): Receptionist Agent
   - After hours: After Hours Agent (set up in Agent 4)

#### Step 12: Test the Agent
Make test calls to verify:
- [ ] Agent answers with correct greeting
- [ ] Responds appropriately to service inquiries
- [ ] Detects intents correctly (try asking about pricing, booking demo)
- [ ] Transfers work properly (if configured)
- [ ] After-hours greeting activates outside business hours
- [ ] Call is recorded and transcribed
- [ ] Contact is created in CRM with proper tags

---

### Agent 2: Lead Qualifier Voice Agent

#### Step 1: Create New Agent
1. Go to **Settings** > **Voice AI**
2. Click **Create New Agent**

#### Step 2: Basic Configuration
**Reference:** `C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\agents\voice\lead-qualifier-voice.json`

- **Agent Name:** `Lead Qualifier Agent`
- **Agent Type:** `Inbound Voice`
- **Description:** `Conducts discovery calls to qualify leads based on budget, timeline, and service fit`

#### Step 3: Model & Voice Settings
Use same settings as Receptionist:
- Model: `gpt-4o`, Temperature: `0.7`
- Voice: ElevenLabs `Jessica`

#### Step 4: System Prompt
Copy the entire contents of:
```
C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\prompts\lead-qualifier-prompt.md
```

This prompt includes:
- Qualification questions framework
- Budget discovery scripts
- Timeline assessment
- Lead scoring methodology
- Handoff criteria

#### Step 5: Qualification Questions
Configure the agent to ask:
1. "What type of business are you in?"
2. "What's bringing you to Capture Client today? What's your biggest challenge?"
3. "About how many calls would you say your business receives each day or week?"
4. "How are you handling calls right now?"
5. "What would success look like for you?"

#### Step 6: Lead Scoring Integration
Configure custom field updates:
- `qualification_status` (Dropdown: Not Qualified, Partially Qualified, Qualified, Highly Qualified)
- `budget_range` (Dropdown: Under $1K, $1K-$5K, $5K-$10K, $10K+)
- `timeline` (Dropdown: Immediate, 1-3 months, 3-6 months, 6+ months, Just exploring)
- `services_interested` (Multi-select: AI Voice Agents, Lead Generation, CRM Setup, Marketing Automation, Consulting)

#### Step 7: Transfer Rules
Set up transfer conditions:
- If highly qualified → Transfer to Demo Booker
- If partially qualified → Schedule follow-up call
- If not qualified → Take information and add to nurture sequence

#### Step 8: Test the Agent
Test scenarios:
- [ ] Agent asks all qualification questions naturally
- [ ] Updates custom fields correctly
- [ ] Applies appropriate tags based on qualification
- [ ] Transfers to demo booker for qualified leads
- [ ] Handles objections professionally

---

### Agent 3: Demo Booker Voice Agent

#### Step 1: Create New Agent
1. Go to **Settings** > **Voice AI**
2. Click **Create New Agent**

#### Step 2: Basic Configuration
**Reference:** `C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\agents\voice\demo-booker-voice.json`

- **Agent Name:** `Demo Booker Agent`
- **Agent Type:** `Inbound Voice`
- **Description:** `Schedules demo appointments, confirms availability, and sends calendar invites`

#### Step 3: System Prompt
Copy contents of:
```
C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\prompts\demo-booker-prompt.md
```

Key capabilities this prompt enables:
- Calendar availability checking
- Appointment booking
- Information collection (name, email, phone, company)
- Confirmation message sending
- Rescheduling handling

#### Step 4: Calendar Integration
**Critical Setup:**
1. Go to **Settings** > **Calendars**
2. Ensure you have a calendar named "Demo Calls" or similar
3. In Demo Booker agent settings, connect to this calendar
4. Enable:
   - Real-time availability checking
   - Automatic booking
   - Confirmation email sending
   - SMS reminder sending

#### Step 5: Appointment Configuration
Set up appointment defaults:
- **Duration:** 30 minutes
- **Buffer time:** 15 minutes between appointments
- **Meeting method:** Zoom (or your preferred platform)
- **Confirmation email:** Enable automatic sending
- **Reminder schedule:**
  - 24 hours before: Email + SMS
  - 1 hour before: SMS

#### Step 6: Information Collection
Configure required fields:
- Full Name (required)
- Business Name (required)
- Phone Number (required)
- Email Address (required)
- Business Type (optional)
- Appointment Notes (optional)

#### Step 7: Pipeline Integration
When demo is booked:
- Move contact to stage: `Demo Scheduled`
- Apply tag: `demo-scheduled`
- Create task: `Prepare for demo with [Contact Name]`
- Notify team member via Slack/Email

#### Step 8: Test the Agent
Verify:
- [ ] Agent can check calendar availability in real-time
- [ ] Books appointments correctly
- [ ] Collects all required information
- [ ] Sends confirmation email immediately
- [ ] Creates calendar event with proper details
- [ ] Updates contact record and pipeline stage
- [ ] Handles time zone conversions correctly

---

### Agent 4: After Hours Voice Agent

#### Step 1: Create New Agent
1. Go to **Settings** > **Voice AI**
2. Click **Create New Agent**

#### Step 2: Basic Configuration
**Reference:** `C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\agents\voice\after-hours-voice.json`

- **Agent Name:** `After Hours Agent`
- **Agent Type:** `Inbound Voice`
- **Description:** `Handles calls outside business hours, takes messages, and schedules callbacks`

#### Step 3: Business Hours Override
**Important:** This agent should ONLY activate outside business hours.

Configure activation rules:
- **Active when:** Outside business hours (Mon-Fri before 9am or after 6pm, all day Sat-Sun)
- **Timezone:** America/New_York

#### Step 4: Greeting
After-hours specific greeting:
```
Thank you for calling Capture Client. You've reached us outside of our normal business hours, which are Monday through Friday, 9 AM to 6 PM Eastern Time. I'm here to help you. What can I assist you with?
```

#### Step 5: Capabilities
Configure these after-hours actions:
1. **Take Detailed Message**
   - Collect: Name, phone, email, reason for call, urgency level
   - Create task for team (due: next business day, 9am)
   - Send immediate notification to owner

2. **Schedule Callback**
   - Offer callback times during next business day
   - Book directly into team member's calendar
   - Send confirmation SMS

3. **Emergency Handling**
   - Keywords: "emergency", "urgent", "asap", "critical", "immediately"
   - Action: Transfer to owner's mobile or on-call line
   - Fallback: Take urgent message with priority flag

#### Step 6: Phone Number Routing
Set up conditional routing:
1. Go to **Settings** > **Phone Numbers**
2. Select your business number
3. Configure time-based routing:
   - Business hours (Mon-Fri 9am-6pm EST): → Receptionist Agent
   - After hours (all other times): → After Hours Agent

#### Step 7: Emergency Transfer Setup
Configure emergency escalation:
- **Transfer phone:** `(865) 346-3339` (owner's mobile)
- **Transfer announcement:** "I understand this is urgent. Let me transfer you to our emergency contact."
- **Fallback if no answer:** Take detailed message + send SMS/email alert immediately

#### Step 8: Test the Agent
Test outside business hours or use time override:
- [ ] Agent activates outside 9am-6pm EST Mon-Fri
- [ ] Uses correct after-hours greeting
- [ ] Takes detailed messages
- [ ] Schedules callbacks correctly
- [ ] Detects emergency keywords
- [ ] Transfers to emergency contact when appropriate
- [ ] Sends immediate notifications to team

---

## Conversation AI Bots (Step-by-Step)

We have **4 SMS/Conversation AI bots** to set up:
1. SMS Receptionist Bot
2. Lead Nurture Bot
3. Appointment Reminder Bot
4. Review Requester Bot

### Configuration Files Location
```
C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\agents\sms\
├── receptionist-sms.json
├── lead-nurture-sms.json
├── appointment-sms.json
└── review-requester-sms.json
```

### Prompt Files Location
```
C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\prompts\
├── sms-receptionist-prompt.md
└── sms-nurture-prompt.md
```

---

### Bot 1: SMS Receptionist Bot

#### Step 1: Navigate to Conversation AI
1. Log into GHL
2. Go to **Settings** > **Conversation AI** (or **Bot Builder**)
3. Click **Create New Bot** or **Add Conversation Bot**

#### Step 2: Basic Configuration
**Reference:** `C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\agents\sms\receptionist-sms.json`

- **Bot Name:** `Capture Client SMS Receptionist`
- **Bot Type:** `SMS`
- **Status:** `Active`
- **Channel:** SMS (text messaging)

#### Step 3: Business Context
Configure bot's knowledge (JSON lines 9-25):

Add business information:
```yaml
Business Name: Capture Client
Business Type: Marketing Agency - AI Voice Agents and Lead Generation
Location: Knoxville, TN
Phone: (865) 346-3339
Email: info@captureclient.net
Website: https://capture-client-site.vercel.app/
Hours: Monday-Friday, 9:00 AM - 6:00 PM EST
```

#### Step 4: Services Information
Add service details (JSON lines 27-45):

**AI Voice Agents:**
- Description: Custom AI-powered voice agents for appointment booking, lead qualification, and customer service
- Pricing: $999 - $2,195+/month

**Lead Generation:**
- Description: Google and Facebook Ads management with proven ROI

**CRM Platform:**
- Description: All-in-one customer relationship management system

**Marketing Dashboard:**
- Description: Real-time analytics and performance tracking

#### Step 5: Conversation Settings
Configure tone and style (JSON lines 47-53):
- **Tone:** Professional yet friendly
- **Response Style:** Concise and helpful
- **Max Response Length:** 320 characters (2 SMS messages)
- **Personalization:** Enabled
- **Emoji Usage:** Minimal

#### Step 6: Response Templates
Add these response templates (JSON lines 55-91):

**Greeting (Business Hours):**
```
Hi! Thanks for reaching out to Capture Client. I'm here to help! What can I assist you with today?
```

**Greeting (After Hours):**
```
Hi! Thanks for texting Capture Client. We're currently closed but I can still help! Our team is available Mon-Fri, 9am-6pm EST. What can I help you with?
```

**Service Inquiry (AI Voice Agents):**
```
Great question! Our AI Voice Agents handle calls 24/7 for appointment booking, lead qualification & customer service. Plans start at $999/mo. Would you like to schedule a free demo to see it in action?
```

**Service Inquiry (Lead Generation):**
```
We specialize in Google & Facebook Ads that actually generate qualified leads. Our campaigns are data-driven and ROI-focused. Want to discuss your lead gen goals?
```

**Pricing Response:**
```
Our AI Voice Agents range from $999-$2,195+/month depending on features and call volume. Lead gen is custom-quoted based on your goals. Want me to have someone send you detailed pricing?
```

**Booking Request:**
```
I'd love to schedule a demo for you! What day/time works best this week? We're available Mon-Fri, 9am-6pm EST.
```

**Contact Info (Phone):**
```
You can call us at (865) 346-3339. We're available Mon-Fri, 9am-6pm EST.
```

**Contact Info (Website):**
```
Check out our website for more info: https://capture-client-site.vercel.app/
```

#### Step 7: Keyword Triggers
Set up keyword detection (JSON lines 93-104):

Configure these keyword categories:

| Category | Keywords |
|----------|----------|
| Pricing | price, cost, how much, pricing, $, expensive, cheap, rate |
| Services | service, offer, do you do, help with, provide |
| AI Voice | voice, ai agent, call, phone, appointment, booking |
| Lead Gen | leads, google ads, facebook ads, marketing, advertising |
| Booking | schedule, book, appointment, demo, meeting, call, consultation |
| Hours | open, hours, available, when, closed |
| Contact | email, phone, call, reach, contact |
| Urgent | asap, urgent, now, today, immediately, emergency |

#### Step 8: Qualification Questions
Configure qualification flow (JSON lines 107-112):

When contact shows interest, ask:
1. "What type of business are you in?"
2. "What's your biggest challenge right now - getting more leads or handling the ones you have?"
3. "When are you looking to get started?"
4. "Do you have a budget range in mind for this?"

#### Step 9: Escalation Rules
Set up human handoff conditions (JSON lines 114-129):

Escalate to human when:
- Customer requests to speak with someone
- Highly technical question beyond bot scope
- Complaint or negative sentiment detected
- Custom pricing negotiation needed
- After 3 failed attempts to understand query

#### Step 10: GHL Integration
Configure CRM integration (JSON lines 131-148):

**Tags to Apply:**
- `sms-inbound-new` (new inbound text)
- `sms-interested` (expressed interest)
- `demo-requested` (requested demo)
- `sms-followup-needed` (needs human follow-up)
- `sms-qualified` (qualified lead)

**Custom Fields:**
- `sms_conversation_summary` (Text) - Bot conversation summary
- `primary_interest` (Dropdown) - Which service they're interested in
- `urgency_level` (Dropdown) - Low / Medium / High / Urgent

#### Step 11: Compliance Setup
Configure opt-out handling (JSON lines 150-161):

**Opt-out Keywords:** stop, unsubscribe, opt out, remove
**Opt-out Response:**
```
Got it - you've been removed from our SMS list. Sorry to see you go! If you change your mind, just text START.
```

**Help Command Keywords:** help, info, start
**Help Response:**
```
This is Capture Client's SMS assistant. Text back with questions about our AI Voice Agents, Lead Generation, or to schedule a demo. Reply STOP to opt out.
```

#### Step 12: Channel Assignment
1. Go to **Settings** > **Phone Numbers**
2. Select your SMS-enabled business number
3. Under **Inbound SMS Handling**, assign to `SMS Receptionist Bot`
4. Enable auto-response for new conversations

#### Step 13: Test the Bot
Send test messages:
- [ ] "Hi, what do you offer?" → Receives service overview
- [ ] "How much does it cost?" → Receives pricing info
- [ ] "I want to schedule a demo" → Booking flow initiates
- [ ] "What are your hours?" → Receives business hours
- [ ] "STOP" → Opt-out confirmed
- [ ] "HELP" → Help message sent
- [ ] Bot applies correct tags to contact
- [ ] Custom fields populate correctly

---

### Bot 2: Lead Nurture SMS Bot

#### Step 1: Create New Bot
1. Go to **Settings** > **Conversation AI**
2. Click **Create New Bot**

#### Step 2: Basic Configuration
**Reference:** `C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\agents\sms\lead-nurture-sms.json`

- **Bot Name:** `Lead Nurture Bot`
- **Bot Type:** `SMS`
- **Trigger:** Workflow-based (NOT auto-reply to inbound)
- **Purpose:** Send follow-up sequences to nurture leads

#### Step 3: System Prompt
Copy contents of:
```
C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\prompts\sms-nurture-prompt.md
```

This prompt includes:
- Nurture sequence messaging
- Engagement strategies
- Value content sharing
- Buying signal detection

#### Step 4: Nurture Sequence Messages
Configure these automated messages (send via workflow):

**Day 1 - Welcome:**
```
Hi {{contact.first_name}}! Thanks for your interest in Capture Client. We help businesses never miss a lead with 24/7 AI voice agents. What questions can I answer for you?
```

**Day 2 - Case Study:**
```
{{contact.first_name}}, here's a quick success story: One of our HVAC clients captures 15+ extra leads per month using our AI receptionist. That's $7,500+ in revenue they were missing before! Want to see how it works for your industry?
```

**Day 4 - Value Offer:**
```
We're offering free consultation calls this week! I can show you exactly how many leads you might be missing and how AI can capture them. Interested in a 15-min chat?
```

**Day 7 - Check-in:**
```
Just checking in! Have you had a chance to think about how AI voice agents could help your business? I'm here if you have any questions.
```

#### Step 5: Engagement Detection
Configure bot to detect buying signals:
- Questions about implementation
- Timeline inquiries
- Pricing follow-ups
- "How does this work?" questions
- "Can you do [specific feature]?" questions

When detected:
- Tag contact: `hot-lead`
- Create task: "Hot lead - immediate follow-up needed"
- Notify sales team via Slack/Email

#### Step 6: Link to Workflow
This bot should be triggered by the **Lead Nurture Sequence** workflow.

See workflow setup section for details on:
- When to trigger nurture sequence
- How to pace messages (Day 1, 2, 4, 7)
- Exit conditions (if lead books demo or goes cold)

#### Step 7: Test the Bot
Trigger nurture sequence manually:
- [ ] Day 1 message sends correctly
- [ ] Day 2 message includes personalization
- [ ] Messages are spaced correctly (not all at once)
- [ ] Bot detects engagement (buying signals)
- [ ] Hot lead tagging works
- [ ] Notifications trigger properly

---

### Bot 3: Appointment Reminder SMS Bot

#### Step 1: Create New Bot
1. Go to **Settings** > **Conversation AI**
2. Click **Create New Bot**

#### Step 2: Basic Configuration
**Reference:** `C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\agents\sms\appointment-sms.json`

- **Bot Name:** `Appointment Reminder Bot`
- **Bot Type:** `SMS`
- **Trigger:** Calendar-based (appointment events)
- **Purpose:** Send confirmations and reminders for appointments

#### Step 3: Confirmation Message (Immediate)
Sent immediately when appointment is booked:
```
Hi {{contact.first_name}}! Your demo call with Capture Client is confirmed for {{appointment.date}} at {{appointment.time}} {{appointment.timezone}}. You'll receive a reminder 24 hours before. See you then!
```

Include:
- Calendar invite link
- Zoom/meeting link (if applicable)
- How to reschedule (reply or link)

#### Step 4: 24-Hour Reminder
Sent 24 hours before appointment:
```
Reminder: Your Capture Client demo is tomorrow at {{appointment.time}} {{appointment.timezone}}.

What to prep: Think about your current lead flow and biggest challenges with phone calls.

Meeting link: {{appointment.meeting_link}}

Need to reschedule? Just reply to this text!
```

#### Step 5: 1-Hour Reminder
Sent 1 hour before appointment:
```
Your Capture Client demo starts in 1 hour!

Time: {{appointment.time}} {{appointment.timezone}}
Link: {{appointment.meeting_link}}

See you soon!
```

#### Step 6: No-Show Follow-up
Sent if contact doesn't attend:
```
We missed you at today's demo! Life gets busy, we totally understand. Want to reschedule? Reply with a better day/time and I'll get you booked.
```

#### Step 7: Rescheduling Handling
Enable conversational rescheduling:
- If contact replies "I need to reschedule"
- Bot asks: "No problem! What day/time works better for you?"
- Bot checks calendar availability
- Books new appointment
- Sends confirmation

#### Step 8: Integration with Calendar
1. Go to **Settings** > **Calendars**
2. Select your demo calendar
3. Enable **SMS Notifications**
4. Configure notification timing:
   - Confirmation: Immediate
   - Reminder 1: 24 hours before
   - Reminder 2: 1 hour before
5. Link to **Appointment Reminder Bot**

#### Step 9: Test the Bot
Book a test appointment:
- [ ] Confirmation sends immediately
- [ ] 24-hour reminder sends (test with short timeframe)
- [ ] 1-hour reminder sends
- [ ] Rescheduling flow works
- [ ] No-show follow-up triggers correctly
- [ ] Calendar syncs with appointment changes

---

### Bot 4: Review Requester SMS Bot

#### Step 1: Create New Bot
1. Go to **Settings** > **Conversation AI**
2. Click **Create New Bot**

#### Step 2: Basic Configuration
**Reference:** `C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\agents\sms\review-requester-sms.json`

- **Bot Name:** `Review Requester Bot`
- **Bot Type:** `SMS`
- **Trigger:** Workflow-based (after project completion or positive interaction)
- **Purpose:** Request reviews from satisfied customers

#### Step 3: Initial Review Request
Send after positive interaction (triggered by workflow):
```
Hi {{contact.first_name}}! We loved working with you on {{project.name}}. Would you mind sharing your experience with a quick review? It helps us help more businesses like yours!
```

Wait for response...

#### Step 4: Response Handling

**If they respond positively ("Sure!", "Yes", "Happy to"):**
```
Thank you so much! Here's our Google review link: {{review.link}}

It takes just 2 minutes, and your feedback truly makes a difference. Appreciate you!
```

**If they respond neutrally ("Maybe later", "I'll think about it"):**
```
No pressure at all! If you change your mind, just let me know. Thanks for considering it!
```

**If they indicate negative experience:**
```
I'm sorry to hear you had a less-than-great experience. I'd love to make it right. Can I have our manager reach out to discuss?
```
→ Tag contact: `negative-feedback`
→ Create urgent task: "Customer feedback issue - immediate attention needed"
→ Notify manager immediately

#### Step 5: Review Platform Links
Configure review links:
- **Google My Business:** Your GMB review URL
- **Facebook:** Your Facebook page review URL
- **Trustpilot / G2 / Capterra:** If applicable

Store in custom values:
- `{{custom_values.google_review_link}}`
- `{{custom_values.facebook_review_link}}`

#### Step 6: Trigger Conditions
This bot should trigger when:
1. Project status = "Completed"
2. Customer satisfaction score > 8/10 (if you collect this)
3. Milestone reached (e.g., 30 days after service start)
4. Manual trigger by team member

**Do NOT trigger for:**
- Customers with open support tickets
- Recent complaints or negative interactions
- Within first 2 weeks of service

#### Step 7: Follow-up for Completed Reviews
If review is successfully submitted:
```
Thank you SO much for the review, {{contact.first_name}}! It means the world to us. We're grateful to have you as a client!
```

Apply tag: `review-completed`

#### Step 8: Test the Bot
Trigger manually:
- [ ] Initial request sends correctly
- [ ] Positive response sends review link
- [ ] Negative feedback triggers escalation
- [ ] Review completion detected (may require integration)
- [ ] Thank you message sends after review
- [ ] Tags apply correctly

---

## Workflows (Step-by-Step)

We have **14 workflows** to set up across 3 categories:
- Voice Workflows (5)
- SMS Workflows (4)
- Email Workflows (5)

### Workflow Files Location
```
C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\workflows\
├── inbound-call-handler.json
├── lead-qualification.json
├── demo-booking.json
├── missed-call-recovery.json
├── voicemail-processing.json
├── new-lead-sms-sequence.json
├── demo-reminder-sequence.json
├── lead-nurture-sequence.json
├── winback-sequence.json
├── email-welcome-sequence.json
├── email-demo-sequence.json
├── email-proposal-followup.json
├── email-onboarding-sequence.json
└── email-reengagement-sequence.json
```

### Important Note About Workflows

**GHL workflows CANNOT be imported from JSON files.** You must create each workflow manually in the GHL UI.

However, our JSON files provide the complete blueprint with:
- Trigger conditions
- Step-by-step actions
- Decision logic
- Integration points
- Timing delays

---

### Voice Workflow 1: Inbound Call Handler

**Reference File:** `C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\workflows\inbound-call-handler.json`

#### Purpose
Routes incoming calls to appropriate AI receptionist based on business hours and caller status.

#### Workflow Setup

**Step 1: Create Workflow**
1. Go to **Automation** > **Workflows**
2. Click **Create Workflow**
3. Name: `Inbound Call Handler`
4. Folder: `Voice Workflows`

**Step 2: Set Trigger**
- **Trigger Type:** Phone Call
- **Call Type:** Inbound
- **Phone Number:** Your business number `(865) 346-3339`

**Step 3: Add Decision Branch - Business Hours Check**
- **Action:** Add Decision (IF/ELSE)
- **Condition:** Current time is within business hours
- **Business Hours:** Monday-Friday, 9:00 AM - 6:00 PM EST
- **Timezone:** America/New_York

**Step 4: IF Business Hours = TRUE**
Sub-steps:
1. **Action:** Connect to AI Agent
   - Agent: `Receptionist Agent` (Voice AI)
   - Greeting: "Thank you for calling Capture Client! This is Jessica. How can I help you today?"

2. **Action:** Monitor Call for Emergency Keywords
   - Keywords: emergency, urgent, asap, immediately, critical
   - If detected → Transfer to owner: `(865) 346-3339`

3. **Action:** Log Call
   - Create note with call details (duration, intent, outcome)
   - Update contact custom fields:
     - `last_call_date`: {{call.timestamp}}
     - `last_call_outcome`: {{call.outcome}}
     - `total_calls`: increment by 1

4. **Decision:** Route Based on Call Intent
   - If intent = "demo_request" → Trigger workflow: `Demo Booking`
   - If intent = "new_lead" → Trigger workflow: `Lead Qualification`
   - If voicemail left → Trigger workflow: `Voicemail Processing`

**Step 5: IF Business Hours = FALSE**
Sub-steps:
1. **Action:** Connect to AI Agent
   - Agent: `After Hours Agent` (Voice AI)
   - Greeting: "Thank you for calling Capture Client. You've reached us outside our normal business hours..."

2. **Action:** Check for Emergency Keywords
   - Keywords: emergency, urgent, asap, critical
   - If detected → Transfer to owner mobile: `(865) 346-3339`
   - Announcement: "I understand this is urgent. Let me transfer you to our emergency contact."
   - Fallback: Take detailed message + send immediate SMS/email alert

3. **Action:** Take Message or Schedule Callback
   - Offer callback scheduling
   - Create task for team (due: next business day 9am)
   - Send notification to team

4. **Action:** Log After-Hours Call
   - Create note
   - Tag contact: `after-hours-contact`
   - Update custom fields

**Step 6: Error Handling**
- **On Error:** Take voicemail
- **Notification:** Send SMS to owner: "Error in call handling workflow. Voicemail taken from {{contact.phone}}"

**Step 7: Test Workflow**
- [ ] Trigger fires when call comes in
- [ ] Business hours check works correctly
- [ ] Routes to Receptionist during business hours
- [ ] Routes to After Hours outside business hours
- [ ] Emergency detection works
- [ ] Call logging creates notes and updates fields
- [ ] Follow-up workflows trigger based on intent

---

### Voice Workflow 2: Lead Qualification

**Reference File:** `C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\workflows\lead-qualification.json`

#### Purpose
Qualifies leads through discovery questions and scoring, then routes to appropriate next step.

#### Workflow Setup

**Step 1: Create Workflow**
1. Go to **Automation** > **Workflows**
2. Click **Create Workflow**
3. Name: `Lead Qualification Workflow`
4. Folder: `Voice Workflows`

**Step 2: Set Trigger**
- **Trigger Type:** Tag Applied
- **Tag:** `needs-qualification`

OR

- **Trigger Type:** Workflow Trigger
- **Triggered by:** `Inbound Call Handler` workflow when call intent = "new_lead"

**Step 3: Connect to Lead Qualifier Agent**
- **Action:** Make Outbound Call (or Transfer if already on call)
- **Target:** Contact phone number
- **Connect to:** `Lead Qualifier Agent` (Voice AI)
- **Purpose:** Conduct discovery call

**Step 4: Lead Qualifier Agent Asks Questions**
(This happens within the AI agent conversation):
1. What type of business are you in?
2. What's your biggest challenge with calls/leads?
3. How many calls do you receive per day/week?
4. How are you currently handling calls?
5. What would success look like?
6. What's your budget range?
7. What's your timeline to implement?

**Step 5: Capture Qualification Data**
- **Action:** Update Contact Custom Fields
  - `business_type`: {{qualification.business_type}}
  - `primary_pain_point`: {{qualification.pain_point}}
  - `call_volume`: {{qualification.call_volume}}
  - `budget_range`: {{qualification.budget}}
  - `timeline`: {{qualification.timeline}}
  - `services_interested`: {{qualification.services}}

**Step 6: Calculate Lead Score**
- **Action:** Calculate Score
  - Budget $10K+ = +30 points
  - Budget $5K-$10K = +20 points
  - Budget $1K-$5K = +10 points
  - Timeline "Immediate" = +25 points
  - Timeline "1-3 months" = +15 points
  - Target industry (HVAC, Dental, Legal) = +15 points
  - High call volume (50+/week) = +20 points

- **Action:** Update custom field `lead_score` with calculated value

**Step 7: Apply Qualification Status**
- **Decision:** Based on lead score
  - Score 70-100 → Tag: `highly-qualified`, Status: `Highly Qualified`
  - Score 50-69 → Tag: `qualified`, Status: `Qualified`
  - Score 30-49 → Tag: `partially-qualified`, Status: `Partially Qualified`
  - Score 0-29 → Tag: `not-qualified`, Status: `Not Qualified`

**Step 8: Route to Next Step**
- **Decision Branch:**

  **IF Highly Qualified (Score 70+):**
  - Move to pipeline stage: `Demo Scheduled`
  - Trigger workflow: `Demo Booking`
  - Send internal notification: "Hot lead needs demo - immediate follow-up!"

  **IF Qualified (Score 50-69):**
  - Move to pipeline stage: `Interested - Needs Follow Up`
  - Create task: "Follow up with qualified lead - call within 24 hours"
  - Assign to: Round robin
  - Send email: "Next Steps" template

  **IF Partially Qualified (Score 30-49):**
  - Move to pipeline stage: `Nurture`
  - Tag: `nurture-sequence`
  - Trigger workflow: `Lead Nurture Sequence`

  **IF Not Qualified (Score 0-29):**
  - Move to pipeline stage: `Not a Fit`
  - Tag: `not-qualified`
  - Send polite email explaining why not a fit + provide resources

**Step 9: Create Summary Note**
- **Action:** Create Note
  - Title: "Qualification Call Summary - {{date}}"
  - Body: Include all qualification data, score, and next steps

**Step 10: Test Workflow**
- [ ] Trigger fires from tag or workflow trigger
- [ ] Lead Qualifier agent conducts call
- [ ] Custom fields populate correctly
- [ ] Lead score calculates accurately
- [ ] Appropriate tags apply based on score
- [ ] Routing to next step works correctly
- [ ] Notifications and tasks create properly

---

### Voice Workflow 3: Demo Booking

**Reference File:** `C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\workflows\demo-booking.json`

#### Purpose
Schedules demo appointments, sends confirmations, and sets up reminder sequences.

#### Workflow Setup

**Step 1: Create Workflow**
1. Go to **Automation** > **Workflows**
2. Click **Create Workflow**
3. Name: `Demo Booking Workflow`
4. Folder: `Voice Workflows`

**Step 2: Set Trigger**
- **Trigger Type:** Appointment Scheduled
- **Calendar:** Demo Calls (or your demo calendar name)

OR

- **Trigger Type:** Workflow Trigger
- **Triggered by:** `Lead Qualification` workflow for highly qualified leads

**Step 3: Confirm Appointment Details**
(If not already on call, this step connects to Demo Booker agent)
- **Action:** Connect to AI Agent (if needed)
- **Agent:** `Demo Booker Agent`
- **Purpose:** Confirm date, time, attendee details

**Step 4: Create Calendar Event**
- **Action:** Create Calendar Event
  - **Calendar:** Demo Calls
  - **Event Name:** "Demo Call - {{contact.business_name}}"
  - **Duration:** 30 minutes
  - **Meeting Type:** Zoom (or your platform)
  - **Description:** Include:
    - Contact info
    - Business type
    - Primary interest
    - Qualification notes
  - **Attendees:** {{contact.email}}, your team member email

**Step 5: Send Confirmation Email**
- **Action:** Send Email
- **Template:** Demo Confirmation
- **Content:**
```
Subject: Your Demo with Capture Client is Confirmed!

Hi {{contact.first_name}},

Great news! Your demo call is confirmed:

📅 Date: {{appointment.date}}
🕐 Time: {{appointment.time}} {{appointment.timezone}}
📹 Meeting Link: {{appointment.zoom_link}}

What to prepare:
- Think about your current call handling process
- Your biggest challenges with leads/calls
- Any specific questions about AI voice agents

We're looking forward to showing you how Capture Client can help your business never miss a lead!

See you soon,
The Capture Client Team

P.S. You'll receive reminder texts 24 hours and 1 hour before the call.
```

**Step 6: Send Confirmation SMS**
- **Action:** Send SMS
- **Content:**
```
Hi {{contact.first_name}}! Your demo call with Capture Client is confirmed for {{appointment.date}} at {{appointment.time}} {{appointment.timezone}}. You'll receive reminders before the call. See you then!
```

**Step 7: Set Reminder Sequence**
This triggers the **Demo Reminder Sequence** workflow (see SMS Workflows section)

Actions:
- 24 hours before: Trigger `Demo Reminder - 24hr`
- 1 hour before: Trigger `Demo Reminder - 1hr`

**Step 8: Update Contact & Pipeline**
- **Action:** Update Contact
  - Move to pipeline stage: `Demo Scheduled`
  - Add tag: `demo-scheduled`
  - Update custom field: `next_action_date` = {{appointment.date}}

**Step 9: Notify Sales Team**
- **Action:** Send Internal Notification
  - **Channel:** Slack (or Email)
  - **Message:**
```
🎯 New Demo Scheduled!

Contact: {{contact.name}}
Business: {{contact.business_name}}
Demo Date: {{appointment.date}} at {{appointment.time}}
Lead Score: {{contact.lead_score}}
Primary Interest: {{contact.primary_interest}}

Qualification Notes: {{contact.qualification_summary}}
```

**Step 10: Create Prep Task**
- **Action:** Create Task
  - **Title:** "Prepare for demo with {{contact.name}}"
  - **Due Date:** 2 hours before appointment
  - **Assign to:** Team member handling demo
  - **Description:** Include all qualification notes and contact details

**Step 11: Test Workflow**
- [ ] Trigger fires when appointment scheduled
- [ ] Calendar event creates with all details
- [ ] Confirmation email sends immediately
- [ ] Confirmation SMS sends immediately
- [ ] Reminder sequence sets up correctly
- [ ] Contact moves to correct pipeline stage
- [ ] Team notifications send
- [ ] Prep task creates with correct timing

---

### Voice Workflow 4: Missed Call Recovery

**Reference File:** `C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\workflows\missed-call-recovery.json`

#### Purpose
Follows up on missed calls with SMS and callback scheduling to recover potentially lost leads.

#### Workflow Setup

**Step 1: Create Workflow**
1. Go to **Automation** > **Workflows**
2. Click **Create Workflow**
3. Name: `Missed Call Recovery`
4. Folder: `Voice Workflows`

**Step 2: Set Trigger**
- **Trigger Type:** Missed Call
- **Phone Number:** Your business number
- **Condition:** Call duration < 5 seconds (meaning they hung up/voicemail didn't answer)

**Step 3: Wait 2 Minutes**
- **Action:** Wait
- **Duration:** 2 minutes
- **Reason:** Give caller a moment in case they call back immediately

**Step 4: Send Immediate SMS Apology**
- **Action:** Send SMS
- **Content:**
```
Hi! We're sorry we missed your call just now. We'd love to help you!

You can:
📞 Call us back at (865) 346-3339
📅 Book a callback: {{callback_calendar_link}}
💬 Reply to this text with your question

We're available Mon-Fri, 9am-6pm EST.
```

**Step 5: Log Missed Call**
- **Action:** Create Activity Note
  - **Title:** "Missed Call - {{timestamp}}"
  - **Body:** "Missed call from {{contact.phone}}. Recovery SMS sent."
  - **Tag contact:** `missed-call`

**Step 6: Create Follow-up Task**
- **Action:** Create Task
  - **Title:** "Follow up on missed call - {{contact.name}}"
  - **Priority:** High
  - **Due:** Within 2 hours (or next business day if after hours)
  - **Assign to:** Round robin

**Step 7: Alert Team**
- **Action:** Send Internal Notification
  - **Channel:** Slack / Email / SMS
  - **Message:** "Missed call from {{contact.name}} ({{contact.phone}}). Recovery SMS sent. Follow up within 2 hours."

**Step 8: Wait for Response (24 Hours)**
- **Action:** Wait
- **Duration:** 24 hours
- **Purpose:** See if they respond to SMS or callback link

**Step 9: Check if Contact Responded**
- **Decision:** Has contact replied or scheduled callback?

  **IF YES (Responded/Scheduled):**
  - Move to pipeline stage: `Contacted`
  - Remove tag: `missed-call`
  - Complete task: "Follow up on missed call"
  - End workflow

  **IF NO (No Response):**
  - Continue to Step 10

**Step 10: Schedule Automated Callback Attempt**
- **Action:** Make Outbound Call (next business day)
  - **Connect to:** `Receptionist Agent` or `Lead Qualifier Agent`
  - **Time:** Next business day, 10am-4pm (avoid early morning/late afternoon)
  - **Max attempts:** 2

**Step 11: If Callback Connects**
- Agent conducts conversation
- Trigger `Lead Qualification` workflow if appropriate
- Log outcome
- Remove tag: `missed-call`

**Step 12: If No Answer on Callback**
- **Action:** Send Final Follow-up SMS
- **Content:**
```
Hi {{contact.first_name}}, we tried reaching you but haven't connected yet. If you still need help, feel free to call us at (865) 346-3339 or visit our website: https://capture-client-site.vercel.app/

We're here when you're ready!
```
- Tag contact: `cold-lead` or `unresponsive`
- Move to pipeline stage: `No Response`

**Step 13: Test Workflow**
- [ ] Trigger fires on missed call
- [ ] 2-minute wait happens before SMS
- [ ] Recovery SMS sends with correct links
- [ ] Missed call logged in contact record
- [ ] Follow-up task created and assigned
- [ ] Team alert sends
- [ ] Waits 24 hours before callback attempt
- [ ] Callback attempt executes correctly
- [ ] Final follow-up sends if no connection

---

### Voice Workflow 5: Voicemail Processing

**Reference File:** `C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\workflows\voicemail-processing.json`

#### Purpose
Processes voicemails, transcribes content, extracts key information, and triggers appropriate follow-up.

#### Workflow Setup

**Step 1: Create Workflow**
1. Go to **Automation** > **Workflows**
2. Click **Create Workflow**
3. Name: `Voicemail Processing`
4. Folder: `Voice Workflows`

**Step 2: Set Trigger**
- **Trigger Type:** Voicemail Received
- **Phone Number:** Your business number

**Step 3: Transcribe Voicemail**
- **Action:** Transcribe Recording
  - GHL has built-in transcription for voicemails
  - Store transcription in: {{voicemail.transcription}}

**Step 4: Extract Key Information (AI)**
Use GHL's AI features or custom webhook:
- **Action:** AI Extraction
  - Extract:
    - Caller's name
    - Caller's company (if mentioned)
    - Reason for call
    - Urgency level (1-5)
    - Best callback time (if mentioned)
    - Specific questions asked

Store in custom fields:
- `voicemail_summary`
- `voicemail_urgency`
- `callback_preference`

**Step 5: Create Activity Note**
- **Action:** Create Note
  - **Title:** "Voicemail - {{timestamp}}"
  - **Body:**
```
Voicemail received from {{contact.name}}

Transcription:
{{voicemail.transcription}}

AI Summary:
{{voicemail_summary}}

Urgency: {{voicemail_urgency}}
Callback Preference: {{callback_preference}}
```

**Step 6: Send Follow-up SMS**
- **Action:** Send SMS
- **Content:**
```
Hi {{contact.first_name}}, thanks for your voicemail! We got your message about {{voicemail_summary}}.

{{if voicemail_urgency > 3}}
We see this is urgent. A team member will call you back within 2 hours.
{{else}}
We'll call you back within 24 hours.
{{endif}}

Or call us directly at (865) 346-3339 (Mon-Fri, 9am-6pm EST).
```

**Step 7: Create Task for Team**
- **Action:** Create Task
  - **Title:** "Return voicemail - {{contact.name}}"
  - **Priority:**
    - High if urgency > 3
    - Normal if urgency ≤ 3
  - **Due:**
    - 2 hours if urgent
    - 24 hours if normal
  - **Assign to:** Round robin
  - **Description:** Include voicemail transcription and AI summary

**Step 8: Decision - Check Urgency Level**

**IF Urgency Level > 3 (Urgent):**
- **Action:** Send Immediate Alert
  - **Channel:** SMS to on-call person
  - **Message:** "URGENT voicemail from {{contact.name}}: {{voicemail_summary}}. Return call ASAP."
- Tag contact: `urgent-callback`
- Move to pipeline stage: `Urgent Follow-up`

**IF Urgency Level ≤ 3 (Normal):**
- **Action:** Standard notification (email)
- Tag contact: `voicemail-followup`
- Move to pipeline stage: `Needs Callback`

**Step 9: Schedule Callback Reminder**
If task not completed within due time:
- **Action:** Wait until task due date
- **Decision:** Check if task is completed

  **IF Task NOT Completed:**
  - Send reminder to assigned person
  - Escalate to manager
  - Reassign task if needed

  **IF Task Completed:**
  - End workflow

**Step 10: Track Response Time**
- **Action:** Log Metrics
  - Time from voicemail to first response
  - Time from voicemail to completed callback
  - Store in analytics for reporting

**Step 11: Test Workflow**
- [ ] Trigger fires when voicemail left
- [ ] Voicemail transcribes correctly
- [ ] AI extraction works (name, urgency, summary)
- [ ] Activity note creates with all details
- [ ] Follow-up SMS sends
- [ ] Task creates with correct priority and due date
- [ ] Urgent voicemails trigger immediate alerts
- [ ] Reminder system works if task not completed

---

### SMS Workflow 1: New Lead SMS Sequence

**Reference File:** `C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\workflows\new-lead-sms-sequence.json`

#### Purpose
Welcome sequence for new leads captured via any channel (phone, web form, manual entry).

#### Workflow Setup

**Step 1: Create Workflow**
1. Go to **Automation** > **Workflows**
2. Click **Create Workflow**
3. Name: `New Lead SMS Sequence`
4. Folder: `SMS Workflows`

**Step 2: Set Trigger**
- **Trigger Type:** Contact Created
- **Filter:**
  - Contact source = ANY
  - Has phone number = Yes
  - Tag = `new-lead` OR Pipeline stage = `New Lead`

**Step 3: Wait 2 Minutes**
- **Action:** Wait
- **Duration:** 2 minutes
- **Reason:** Give other workflows time to complete (e.g., if lead came from call, let that workflow finish first)

**Step 4: Day 0 - Immediate Welcome SMS**
- **Action:** Send SMS
- **Content:**
```
Hi {{contact.first_name}}! Thanks for your interest in Capture Client. We help businesses never miss a lead with 24/7 AI voice agents. What questions can I answer for you?
```
- **Reply Handling:** Route to SMS Receptionist Bot

**Step 5: Wait 1 Day**
- **Action:** Wait
- **Duration:** 1 day (24 hours)

**Step 6: Day 1 - Share Value Proposition**
- **Action:** Send SMS
- **Content:**
```
{{contact.first_name}}, quick question - are you currently missing calls after hours or during busy times? Our AI agents answer 24/7 so you never lose a lead. Reply if you want to learn more!
```

**Step 7: Wait 1 Day**
- **Action:** Wait
- **Duration:** 1 day

**Step 8: Day 2 - Send Case Study**
- **Action:** Send SMS
- **Content:**
```
Success story: One of our HVAC clients went from missing 20+ after-hours calls per month to capturing every single one. That's an extra $10K+/month in revenue! Want to see how this works for your industry?
```

**Step 9: Wait 2 Days**
- **Action:** Wait
- **Duration:** 2 days

**Step 10: Day 4 - Offer Free Consultation**
- **Action:** Send SMS
- **Content:**
```
{{contact.first_name}}, we're offering free 15-min consultation calls this week! I can show you exactly how many leads you might be missing and how to capture them. Interested? Reply YES or book here: {{calendar_link}}
```

**Step 11: Check for Response**
- **Decision:** Has contact replied or booked appointment?

  **IF YES:**
  - Tag: `engaged`
  - Move to: `Interested - Needs Follow Up`
  - Exit this workflow
  - Trigger: `Lead Qualification` or `Demo Booking` workflow

  **IF NO:**
  - Continue to Step 12

**Step 12: Wait 3 Days**
- **Action:** Wait
- **Duration:** 3 days

**Step 13: Day 7 - Final Check-in**
- **Action:** Send SMS
- **Content:**
```
Last message from me, {{contact.first_name}}! I don't want to bombard you. If you're still interested in learning how AI voice agents can help your business, just reply or call (865) 346-3339. Otherwise, no worries - best of luck with your business!
```

**Step 14: Wait 3 Days**
- **Action:** Wait
- **Duration:** 3 days

**Step 15: Day 10 - Check Final Response**
- **Decision:** Has contact responded?

  **IF YES:**
  - Tag: `re-engaged`
  - Move to: `Interested - Needs Follow Up`
  - Create task for team to call
  - Exit workflow

  **IF NO:**
  - Tag: `cold-lead`, `sms-unresponsive`
  - Move to: `Nurture` or `Dead`
  - Optionally: Add to long-term nurture email sequence
  - End workflow

**Step 16: Exit Conditions**
Configure these exit conditions (contact exits workflow if any occur):
- Contact replies to any message
- Contact books an appointment
- Contact is tagged `do-not-contact`
- Contact opts out of SMS
- Contact's pipeline stage moves to `Demo Scheduled`, `Qualified`, or `Closed Won`

**Step 17: Test Workflow**
- [ ] Trigger fires when new contact created
- [ ] Day 0 message sends immediately (after 2 min wait)
- [ ] Day 1, 2, 4, 7 messages send at correct times
- [ ] Replies route to SMS Receptionist Bot
- [ ] Engagement detection works (exits workflow)
- [ ] Cold lead tagging happens if no response
- [ ] Exit conditions prevent duplicate messages

---

### SMS Workflow 2: Demo Reminder Sequence

**Reference File:** `C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\workflows\demo-reminder-sequence.json`

#### Purpose
Multi-touch reminder sequence for scheduled demos to reduce no-shows.

#### Workflow Setup

**Step 1: Create Workflow**
1. Go to **Automation** > **Workflows**
2. Click **Create Workflow**
3. Name: `Demo Reminder Sequence`
4. Folder: `SMS Workflows`

**Step 2: Set Trigger**
- **Trigger Type:** Appointment Scheduled
- **Calendar:** Demo Calls (or your demo calendar)

OR

- **Trigger Type:** Workflow Trigger
- **Triggered by:** `Demo Booking` workflow

**Step 3: Immediate - Confirmation SMS**
- **Action:** Send SMS
- **Content:**
```
Hi {{contact.first_name}}! Your demo call with Capture Client is confirmed:

📅 {{appointment.date}}
🕐 {{appointment.time}} {{appointment.timezone}}
📹 {{appointment.meeting_link}}

You'll get reminders 24hrs and 1hr before. See you then!
```

**Step 4: Wait Until 24 Hours Before**
- **Action:** Wait Until
- **Target Time:** 24 hours before {{appointment.start_time}}

**Step 5: 24-Hour Reminder**
- **Action:** Send SMS
- **Content:**
```
Reminder: Your Capture Client demo is tomorrow at {{appointment.time}} {{appointment.timezone}}!

What to prep: Think about your current lead flow and biggest challenges with phone calls.

Meeting link: {{appointment.meeting_link}}

Need to reschedule? Just reply to this text!
```

**Step 6: Check for Rescheduling Request**
- **Action:** Listen for SMS Reply
- **Keywords:** reschedule, cancel, can't make it, need to change
- **If detected:**
  - Route to Appointment Reminder Bot (conversational rescheduling)
  - Create task: "Help {{contact.name}} reschedule demo"
  - Pause workflow until new appointment set

**Step 7: Wait Until 1 Hour Before**
- **Action:** Wait Until
- **Target Time:** 1 hour before {{appointment.start_time}}

**Step 8: 1-Hour Reminder**
- **Action:** Send SMS
- **Content:**
```
Your Capture Client demo starts in 1 hour!

🕐 {{appointment.time}} {{appointment.timezone}}
📹 {{appointment.meeting_link}}

See you soon! {{team_member.first_name}} is looking forward to it.
```

**Step 9: Wait Until Appointment Time**
- **Action:** Wait Until
- **Target Time:** {{appointment.start_time}}

**Step 10: Check Attendance**
- **Decision:** Did contact attend the demo?
  - Method: Check if appointment status = "Completed" or "Attended"
  - This may require manual update by team member or Zoom integration

  **IF Attended:**
  - Proceed to Step 11 (Post-Demo Follow-up)

  **IF Did Not Attend (No-Show):**
  - Proceed to Step 14 (No-Show Recovery)

**Step 11: Post-Demo - Thank You SMS (1 Hour After)**
- **Action:** Wait
- **Duration:** 1 hour
- **Action:** Send SMS
- **Content:**
```
Thanks for the demo today, {{contact.first_name}}! We loved learning about {{contact.business_name}}.

{{team_member.first_name}} will send over the info we discussed. Any questions in the meantime? Just reply!

- The Capture Client Team
```

**Step 12: Move to Next Stage**
- **Action:** Update Contact
  - Move to pipeline stage: `Demo Completed`
  - Add tag: `demo-completed`
  - Remove tag: `demo-scheduled`

**Step 13: Trigger Follow-up Workflow**
- **Action:** Trigger Workflow
  - Workflow: `Demo Email Sequence` (post-demo follow-up)
- **End this workflow**

**Step 14: No-Show Recovery**
- **Action:** Wait
- **Duration:** 2 hours after appointment time
  - Reason: Give them time in case they were just late or had tech issues

**Step 15: Send No-Show Follow-up**
- **Action:** Send SMS
- **Content:**
```
We missed you at today's demo, {{contact.first_name}}! Life gets busy, we totally understand.

Want to reschedule? Reply with a day/time that works better and I'll get you booked.

Or grab a spot on our calendar: {{calendar_link}}
```

**Step 16: Update Status**
- **Action:** Update Contact
  - Move to pipeline stage: `No-Show`
  - Add tag: `demo-no-show`
  - Create task: "Follow up with no-show - {{contact.name}}"
  - Assign task to: Original demo holder

**Step 17: Wait for Rescheduling Response**
- **Action:** Wait
- **Duration:** 3 days

**Step 18: Check if Rescheduled**
- **Decision:** Has contact rescheduled?

  **IF YES (Rescheduled):**
  - Remove tag: `demo-no-show`
  - Move to: `Demo Scheduled`
  - Restart this workflow for new appointment
  - End current workflow instance

  **IF NO (No Response):**
  - Tag: `cold-lead`, `demo-no-show-unresponsive`
  - Move to: `Nurture` or `Dead`
  - End workflow

**Step 19: Test Workflow**
- [ ] Trigger fires when appointment scheduled
- [ ] Confirmation sends immediately
- [ ] 24-hour reminder sends at correct time
- [ ] Rescheduling detection works
- [ ] 1-hour reminder sends at correct time
- [ ] Attendance check works (may need manual testing)
- [ ] Post-demo thank you sends if attended
- [ ] No-show recovery triggers if didn't attend
- [ ] Rescheduling offer works correctly

---

### SMS Workflow 3: Lead Nurture Sequence

**Reference File:** `C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\workflows\lead-nurture-sequence.json`

#### Purpose
Long-term nurture sequence for leads not yet ready to buy - keeps brand top-of-mind with valuable content.

#### Workflow Setup

**Step 1: Create Workflow**
1. Go to **Automation** > **Workflows**
2. Click **Create Workflow**
3. Name: `Lead Nurture Sequence`
4. Folder: `SMS Workflows`

**Step 2: Set Trigger**
- **Trigger Type:** Tag Applied
- **Tag:** `nurture` or `partially-qualified` or `not-ready-to-buy`

OR

- **Trigger Type:** Pipeline Stage Changed
- **Stage:** `Nurture`

**Step 3: Week 1 - Educational Content**
- **Action:** Send SMS
- **Content:**
```
Hi {{contact.first_name}}! Here's a quick tip: 78% of customers buy from the business that responds first. Our AI agents respond in under 10 seconds, 24/7. That's how you win more deals!
```

**Step 4: Wait 1 Week**
- **Action:** Wait
- **Duration:** 7 days

**Step 5: Week 2 - Success Story**
- **Action:** Send SMS
- **Content:**
```
Real result from a Capture Client customer: "We went from answering 60% of calls to 100%. Our booking rate increased 40% in the first month." - Sarah, Dental Practice Owner. Want results like this? Let's chat!
```

**Step 6: Wait 1 Week**
- **Action:** Wait
- **Duration:** 7 days

**Step 7: Week 3 - Industry Insights**
- **Action:** Send SMS
- **Content:**
```
{{contact.first_name}}, did you know: The avg business misses 27% of phone calls. If you get 100 calls/month, that's 27 potential customers lost! Want to see how many you might be missing? Free consultation: {{calendar_link}}
```

**Step 8: Wait 1 Week**
- **Action:** Wait
- **Duration:** 7 days

**Step 9: Week 4 - Soft Offer Check-in**
- **Action:** Send SMS
- **Content:**
```
Hey {{contact.first_name}}, just checking in! Are you still looking to improve your lead capture? I'm here if you have any questions about AI voice agents or want to explore options. No pressure!
```

**Step 10: Check for Engagement**
- **Decision:** Has contact replied to any message?

  **IF YES:**
  - Tag: `re-engaged`, `hot-lead`
  - Move to: `Interested - Needs Follow Up`
  - Create task: "Hot re-engaged lead - call ASAP"
  - Exit nurture sequence
  - Trigger: `Lead Qualification` workflow

  **IF NO:**
  - Continue to Step 11

**Step 11: Wait 2 Weeks**
- **Action:** Wait
- **Duration:** 14 days

**Step 12: Week 6 - Special Promotion**
- **Action:** Send SMS
- **Content:**
```
Special offer for {{contact.first_name}}: This month only - get 1 month free when you sign up for our Growth plan! That's a $2,195 value. Never miss a lead again. Interested? Reply or call (865) 346-3339
```

**Step 13: Wait 2 Weeks**
- **Action:** Wait
- **Duration:** 14 days

**Step 14: Week 8 - Final Value Reminder**
- **Action:** Send SMS
- **Content:**
```
Last note from me, {{contact.first_name}}. We're here when you're ready to capture every lead & grow your business. Call (865) 346-3339 or visit https://capture-client-site.vercel.app/. Wishing you success!
```

**Step 15: Wait 1 Week**
- **Action:** Wait
- **Duration:** 7 days

**Step 16: Final Check & Move to Long-term**
- **Decision:** Has contact engaged?

  **IF YES:**
  - Tag: `re-engaged`
  - Move to: `Interested - Needs Follow Up`
  - Create task for follow-up
  - Exit workflow

  **IF NO:**
  - Remove tag: `nurture`
  - Add tag: `long-term-nurture`, `inactive`
  - Move to: `Long-term Nurture` or `Archived`
  - Optionally: Add to quarterly email check-in list
  - End workflow

**Step 17: Exit Conditions**
Configure these exit conditions (workflow ends if any occur):
- Contact replies to any message
- Contact books an appointment
- Contact is manually moved to active pipeline stage
- Contact is tagged `do-not-contact`
- Contact opts out of SMS
- Contact purchases/converts

**Step 18: Test Workflow**
- [ ] Trigger fires when tag applied or stage changed
- [ ] Week 1, 2, 3, 4, 6, 8 messages send at correct intervals
- [ ] Content personalizes correctly with contact name
- [ ] Engagement detection works (exits workflow)
- [ ] Re-engagement creates task and moves pipeline
- [ ] Final tagging happens if no engagement
- [ ] Exit conditions prevent sending after conversion

---

### SMS Workflow 4: Win-back Sequence

**Reference File:** `C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\workflows\winback-sequence.json`

#### Purpose
Re-engagement sequence for cold or lost leads - attempt to revive interest after period of inactivity.

#### Workflow Setup

**Step 1: Create Workflow**
1. Go to **Automation** > **Workflows**
2. Click **Create Workflow**
3. Name: `Win-back Sequence`
4. Folder: `SMS Workflows`

**Step 2: Set Trigger**
- **Trigger Type:** Custom Automation
- **Condition:** Contact inactive for 60+ days
  - Last activity date > 60 days ago
  - No recent calls, emails, or texts
  - Pipeline stage = `Dead`, `Lost`, or `No Response`

**Alternative Trigger:**
- **Trigger Type:** Tag Applied
- **Tag:** `winback-attempt`

**Step 3: Check Contact Status**
- **Decision:** Is contact eligible for win-back?
  - Has phone number: Yes
  - Has NOT opted out of SMS: Yes
  - Is NOT tagged `do-not-contact`: Yes
  - Last contact was at least 60 days ago: Yes

  **IF Not Eligible:**
  - End workflow immediately

  **IF Eligible:**
  - Continue to Step 4

**Step 4: Day 0 - Check-in Message**
- **Action:** Send SMS
- **Content:**
```
Hi {{contact.first_name}}! It's been a while since we talked. How have things been going with your business? Still dealing with missed calls or lead management challenges?
```

**Step 5: Wait 3 Days**
- **Action:** Wait
- **Duration:** 3 days

**Step 6: Check for Response**
- **Decision:** Has contact replied?

  **IF YES:**
  - Tag: `winback-successful`, `re-engaged`
  - Move to: `Interested - Needs Follow Up`
  - Create task: "Re-engaged lead - priority follow-up"
  - Exit workflow

  **IF NO:**
  - Continue to Step 7

**Step 7: Day 3 - Share Recent Updates**
- **Action:** Send SMS
- **Content:**
```
{{contact.first_name}}, we've made some exciting updates since we last spoke! Our AI voice agents now integrate with [new feature]. They're helping businesses capture 40% more leads. Want to see a quick demo?
```

**Step 8: Wait 4 Days**
- **Action:** Wait
- **Duration:** 4 days

**Step 9: Day 7 - Offer Special Incentive**
- **Action:** Send SMS
- **Content:**
```
Win-back offer for {{contact.first_name}}: We'd love another chance to help your business! This month only - 20% off your first 3 months OR 1 month free trial. Reply YES if interested!
```

**Step 10: Wait 5 Days**
- **Action:** Wait
- **Duration:** 5 days

**Step 11: Check for Response to Offer**
- **Decision:** Has contact replied to offer?

  **IF YES:**
  - Tag: `winback-offer-accepted`, `hot-lead`
  - Move to: `Interested - Needs Follow Up`
  - Create high-priority task: "Close win-back offer ASAP"
  - Notify sales manager
  - Exit workflow

  **IF NO:**
  - Continue to Step 12

**Step 12: Day 12 - Last Chance Message**
- **Action:** Send SMS
- **Content:**
```
Last message from me, {{contact.first_name}}. I don't want to bug you! If you ever want to revisit AI voice agents for your business, we're here: (865) 346-3339. Otherwise, best wishes!
```

**Step 13: Wait 5 Days**
- **Action:** Wait
- **Duration:** 5 days

**Step 14: Final Status Update**
- **Decision:** Has contact responded to any message?

  **IF YES:**
  - Process as re-engagement (see Step 6)
  - Exit workflow

  **IF NO (No Response to Entire Sequence):**
  - Tag: `winback-failed`, `permanent-cold`
  - Move to: `Dead - Do Not Contact`
  - Add to suppression list (optional)
  - Log in contact notes: "Win-back attempt failed - no response to 4-message sequence"
  - End workflow

**Step 15: Analytics Tracking**
- **Action:** Log Metrics
  - Track win-back attempt
  - Track response rate
  - Track conversion rate
  - Use for reporting and optimization

**Step 16: Test Workflow**
- [ ] Trigger fires for inactive contacts (test with shorter timeframe)
- [ ] Eligibility check works correctly
- [ ] Day 0, 3, 7, 12 messages send at correct times
- [ ] Response detection works (exits workflow)
- [ ] Offer acceptance creates high-priority task
- [ ] Final tagging happens if no response
- [ ] Analytics logging works

---

## Email Workflows Overview

We have **5 email workflows** to set up. These follow the same principle as SMS workflows but use email as the channel.

**Email Workflow Files:**
```
C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\workflows\
├── email-welcome-sequence.json
├── email-demo-sequence.json
├── email-proposal-followup.json
├── email-onboarding-sequence.json
└── email-reengagement-sequence.json
```

Due to the length of this guide, I'll provide abbreviated setup instructions for email workflows, as the process is similar to SMS workflows but with email-specific considerations.

---

### Email Workflow Quick Setup Guide

For each email workflow:

1. **Navigate to:** Automation > Workflows > Create Workflow
2. **Set the appropriate trigger** (see individual workflow for specifics)
3. **Add email send actions** with delays between them
4. **Use email templates** (create these in Settings > Templates > Email)
5. **Configure tracking:** Open tracking, click tracking, link tracking
6. **Set exit conditions:** Stop sending if contact converts, opts out, or engages
7. **Test thoroughly:** Send test emails to verify formatting and links

---

### Email Workflow 1: Welcome Email Sequence

**Reference:** `C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\workflows\email-welcome-sequence.json`

**Trigger:** Contact Created (new lead)

**Sequence:**
- Day 0: Welcome email with resources
- Day 1: Company introduction
- Day 3: Service overview
- Day 5: Case studies
- Day 7: Consultation offer

**Key Details:**
- Sender: "The Capture Client Team" <info@captureclient.net>
- Reply-to: Actual team member email for better engagement
- Include unsubscribe link (required)
- Track opens and clicks for engagement scoring

---

### Email Workflow 2: Demo Email Sequence

**Reference:** `C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\workflows\email-demo-sequence.json`

**Trigger:** Demo appointment scheduled or completed

**Sequence:**
- Pre-demo: Confirmation and prep guide (send immediately)
- Day of demo: Reminder with materials (2 hours before)
- Post-demo: Thank you and next steps (1 hour after)
- Day 2: Proposal delivery
- Day 5: Follow-up check-in

**Key Details:**
- Include calendar ICS file in confirmation
- Attach prep guide PDF
- Include Zoom/meeting link prominently
- Use personalization (demo date, time, attendee name)

---

### Email Workflow 3: Proposal Follow-up Sequence

**Reference:** `C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\workflows\email-proposal-followup.json`

**Trigger:** Opportunity status changed to "Proposal Sent"

**Sequence:**
- Day 0: Proposal delivery email (with PDF attached)
- Day 2: Review reminder
- Day 4: Answer questions offer
- Day 7: Check-in call scheduling
- Day 10: Urgency reminder (expiration date approaching)

**Key Details:**
- Attach proposal PDF
- Include DocuSign link (if using electronic signatures)
- Track PDF opens to know when they review it
- Create tasks for sales team at each step

---

### Email Workflow 4: Client Onboarding Sequence

**Reference:** `C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\workflows\email-onboarding-sequence.json`

**Trigger:** Opportunity status = "Closed Won" OR Tag = "new-client"

**Sequence:**
- Day 0: Welcome as client + what to expect
- Day 1: Account setup instructions
- Day 3: Training resources and video tutorials
- Week 2: Check-in and support contact info
- Week 4: Success tips and optimization suggestions

**Key Details:**
- Include login credentials (if applicable)
- Link to knowledge base/documentation
- Introduce support team members
- Set expectations for implementation timeline

---

### Email Workflow 5: Re-engagement Email Sequence

**Reference:** `C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\workflows\email-reengagement-sequence.json`

**Trigger:** Contact inactive for 90+ days (no email opens, clicks, or replies)

**Sequence:**
- Week 1: "We miss you" message
- Week 2: What's new update (new features, case studies)
- Week 3: Special offer (discount or extended trial)
- Week 4: Last chance message
- Post-Week 4: Archive or remove if no engagement

**Key Details:**
- Use curiosity-driven subject lines
- A/B test different approaches
- Exit workflow if any email is opened or clicked
- Final email should allow easy opt-out

---

## Part 3: API Setup Option

### Using GHL API to Automate Setup

For advanced users, you can use GoHighLevel's public APIs to programmatically create Voice AI agents and Conversation AI bots.

**Important:** Workflows still must be created manually in the UI. GHL does not provide a public API for workflow creation.

### GHL API Documentation
- **API Docs:** https://developers.gohighlevel.com/
- **Voice AI API:** https://developers.gohighlevel.com/docs/voice-ai
- **Conversation AI API:** https://developers.gohighlevel.com/docs/conversation-ai

### API Authentication

1. **Get API Key:**
   - Log into GHL
   - Go to Settings > Integrations > API
   - Generate new API key
   - Store securely (never commit to Git)

2. **API Base URL:**
   ```
   https://rest.gohighlevel.com/v1/
   ```

3. **Authentication Header:**
   ```
   Authorization: Bearer YOUR_API_KEY
   ```

### Voice AI Agent Creation via API

**Endpoint:** `POST /voice-ai/agents`

**Example Request:**
```javascript
const axios = require('axios');

const createVoiceAgent = async () => {
  const response = await axios.post(
    'https://rest.gohighlevel.com/v1/voice-ai/agents',
    {
      name: 'Capture Client Main Receptionist',
      agentType: 'inbound',
      model: {
        provider: 'openai',
        model: 'gpt-4o',
        temperature: 0.7,
        maxTokens: 500
      },
      voice: {
        provider: 'elevenlabs',
        voiceId: 'jessica',
        stability: 0.75,
        similarityBoost: 0.75
      },
      businessHours: {
        timezone: 'America/New_York',
        schedule: {
          monday: { start: '09:00', end: '18:00' },
          tuesday: { start: '09:00', end: '18:00' },
          wednesday: { start: '09:00', end: '18:00' },
          thursday: { start: '09:00', end: '18:00' },
          friday: { start: '09:00', end: '18:00' }
        }
      },
      systemPrompt: `[PASTE FULL PROMPT FROM voice-receptionist-prompt.md]`,
      integrations: {
        pipeline: 'Voice Leads',
        autoCreateContacts: true,
        defaultTags: ['voice_lead', 'receptionist', 'inbound']
      }
    },
    {
      headers: {
        'Authorization': `Bearer ${process.env.GHL_API_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );

  console.log('Agent created:', response.data);
  return response.data;
};

createVoiceAgent();
```

### Conversation AI Bot Creation via API

**Endpoint:** `POST /conversation-ai/bots`

**Example Request:**
```javascript
const createSMSBot = async () => {
  const response = await axios.post(
    'https://rest.gohighlevel.com/v1/conversation-ai/bots',
    {
      name: 'Capture Client SMS Receptionist',
      type: 'sms',
      status: 'active',
      businessContext: {
        businessName: 'Capture Client',
        businessType: 'Marketing Agency',
        phone: '(865) 346-3339',
        email: 'info@captureclient.net',
        website: 'https://capture-client-site.vercel.app/'
      },
      conversationSettings: {
        tone: 'professional_friendly',
        maxResponseLength: 320,
        useEmojis: 'minimal'
      },
      responseTemplates: [
        {
          trigger: 'greeting',
          condition: 'business_hours',
          response: 'Hi! Thanks for reaching out to Capture Client. I\'m here to help! What can I assist you with today?'
        }
        // ... add more templates from JSON
      ],
      keywords: {
        pricing: ['price', 'cost', 'how much', 'pricing'],
        booking: ['schedule', 'book', 'appointment', 'demo']
        // ... add more from JSON
      },
      integrations: {
        tags: ['sms-inbound-new', 'sms-interested'],
        customFields: {
          smsConversationSummary: 'sms_conversation_summary'
        }
      }
    },
    {
      headers: {
        'Authorization': `Bearer ${process.env.GHL_API_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );

  console.log('Bot created:', response.data);
  return response.data;
};

createSMSBot();
```

### Batch Setup Script

You can create a Node.js script to set up all agents at once:

**File:** `setup-ghl-agents.js`
```javascript
require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const GHL_API_KEY = process.env.GHL_API_KEY;
const BASE_URL = 'https://rest.gohighlevel.com/v1';

// Read JSON config files
const voiceAgents = [
  './agents/voice/receptionist-voice.json',
  './agents/voice/lead-qualifier-voice.json',
  './agents/voice/demo-booker-voice.json',
  './agents/voice/after-hours-voice.json'
];

const smsAgents = [
  './agents/sms/receptionist-sms.json',
  './agents/sms/lead-nurture-sms.json',
  './agents/sms/appointment-sms.json',
  './agents/sms/review-requester-sms.json'
];

// Read prompts
const readPrompt = (filename) => {
  return fs.readFileSync(path.join('./prompts', filename), 'utf8');
};

// Create Voice Agent
const createVoiceAgent = async (configPath) => {
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  const promptFile = config.prompt_file || 'voice-receptionist-prompt.md';
  const systemPrompt = readPrompt(promptFile);

  try {
    const response = await axios.post(
      `${BASE_URL}/voice-ai/agents`,
      {
        ...config,
        systemPrompt: systemPrompt
      },
      {
        headers: {
          'Authorization': `Bearer ${GHL_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(`✅ Created Voice Agent: ${config.agent_name}`);
    return response.data;
  } catch (error) {
    console.error(`❌ Failed to create ${config.agent_name}:`, error.response?.data || error.message);
  }
};

// Create SMS Bot
const createSMSBot = async (configPath) => {
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

  try {
    const response = await axios.post(
      `${BASE_URL}/conversation-ai/bots`,
      config,
      {
        headers: {
          'Authorization': `Bearer ${GHL_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(`✅ Created SMS Bot: ${config.agentName}`);
    return response.data;
  } catch (error) {
    console.error(`❌ Failed to create ${config.agentName}:`, error.response?.data || error.message);
  }
};

// Main setup function
const setupAllAgents = async () => {
  console.log('Starting GHL Agent Setup...\n');

  console.log('Creating Voice Agents...');
  for (const agentPath of voiceAgents) {
    await createVoiceAgent(agentPath);
  }

  console.log('\nCreating SMS Bots...');
  for (const botPath of smsAgents) {
    await createSMSBot(botPath);
  }

  console.log('\n✅ Setup complete!');
  console.log('⚠️  Remember: Workflows must be created manually in the GHL UI.');
};

setupAllAgents();
```

**Usage:**
1. Install dependencies: `npm install axios dotenv`
2. Create `.env` file: `GHL_API_KEY=your_api_key_here`
3. Run: `node setup-ghl-agents.js`

### API Limitations

**What you CAN do via API:**
- ✅ Create Voice AI agents
- ✅ Create Conversation AI bots
- ✅ Create contacts
- ✅ Create opportunities
- ✅ Add tags
- ✅ Update custom fields
- ✅ Send emails/SMS
- ✅ Create calendars and appointments

**What you CANNOT do via API:**
- ❌ Create workflows (must be done manually in UI)
- ❌ Import snapshots (server-side only)
- ❌ Bulk update agent configurations (one at a time)

---

## Part 4: Post-Setup Checklist

After setting up all agents and workflows, complete this checklist:

### Phone System Configuration
- [ ] Business phone number assigned to Receptionist Agent (business hours)
- [ ] Business phone number assigned to After Hours Agent (outside business hours)
- [ ] Time-based routing configured correctly (test at different times)
- [ ] Emergency transfer phone number tested and working
- [ ] Voicemail transcription enabled
- [ ] Call recording enabled (check legal requirements for your state)
- [ ] Call forwarding/fallback numbers configured

### SMS Configuration
- [ ] SMS enabled on business phone number
- [ ] SMS Receptionist Bot assigned to inbound texts
- [ ] Keyword auto-responses configured
- [ ] Opt-out handling tested (send "STOP" and verify)
- [ ] Help command tested (send "HELP" and verify)
- [ ] SMS delivery reports enabled

### Calendar Configuration
- [ ] "Demo Calls" calendar created
- [ ] Calendar availability set (correct hours, days, timezone)
- [ ] Buffer time configured (15 minutes recommended)
- [ ] Zoom/Google Meet integration connected
- [ ] Calendar notifications enabled
- [ ] Appointment confirmation emails configured
- [ ] Reminder schedule set (24hr + 1hr)
- [ ] Calendar booking link generated and tested

### CRM Configuration
- [ ] Pipeline created: "Lead Pipeline" or "Voice Leads"
- [ ] Pipeline stages match workflow expectations
- [ ] Custom fields created (all 8+ fields from snapshot.json)
- [ ] Tags created (at least 14 tags from snapshot.json)
- [ ] Lead source tracking configured
- [ ] Contact auto-creation enabled
- [ ] Duplicate detection configured

### Custom Values Configuration
- [ ] `{{business_name}}` = Your actual business name
- [ ] `{{business_phone}}` = Your actual phone number
- [ ] `{{business_email}}` = Your actual email
- [ ] `{{business_website}}` = Your actual website URL
- [ ] `{{business_hours}}` = Your actual hours
- [ ] `{{business_address}}` = Your actual address
- [ ] `{{calendar_link}}` = Your actual GHL calendar link
- [ ] `{{demo_calendar_link}}` = Your actual demo calendar link
- [ ] `{{owner_name}}` = Your name or main contact name
- [ ] `{{owner_phone}}` = Your mobile for emergency transfers

**How to update custom values:**
- Go to Settings > Custom Values
- Replace all Capture Client defaults with YOUR information
- Test in a workflow or agent to ensure replacement works

### Email Configuration
- [ ] Email sending domain verified (SPF, DKIM, DMARC)
- [ ] Email templates created (Welcome, Confirmation, Reminder, Follow-up)
- [ ] Email signature configured
- [ ] Unsubscribe link present in all marketing emails
- [ ] Email tracking enabled (opens, clicks)
- [ ] Test emails sent and received successfully

### Agent Testing
- [ ] Voice Receptionist: Make test call during business hours
- [ ] Voice Receptionist: Verify intent detection (ask about pricing, demo, etc.)
- [ ] Lead Qualifier: Test qualification questions flow
- [ ] Demo Booker: Book a test appointment, verify calendar creation
- [ ] After Hours: Make test call outside business hours
- [ ] SMS Receptionist: Send test text, verify response
- [ ] Lead Nurture Bot: Trigger manually, check message sequence
- [ ] Appointment Bot: Schedule test appointment, verify reminders
- [ ] Review Bot: Trigger manually, test response handling

### Workflow Testing
- [ ] Inbound Call Handler: Make calls at different times, verify routing
- [ ] Lead Qualification: Trigger workflow, verify data capture
- [ ] Demo Booking: Book demo, verify all steps execute
- [ ] Missed Call Recovery: Miss a call intentionally, verify SMS
- [ ] Voicemail Processing: Leave voicemail, verify transcription
- [ ] New Lead SMS: Create test contact, verify sequence timing
- [ ] Demo Reminder: Book demo, verify all reminders send
- [ ] Lead Nurture: Add test contact to nurture, verify pacing
- [ ] Win-back: Add inactive contact, trigger workflow
- [ ] Email workflows: Test each sequence end-to-end

### Integration Testing
- [ ] Contact created from voice call
- [ ] Contact tagged appropriately
- [ ] Custom fields populate from call data
- [ ] Pipeline stage updates automatically
- [ ] Tasks create and assign correctly
- [ ] Notifications send to team (Slack/Email)
- [ ] Calendar appointments sync correctly
- [ ] Voicemail transcriptions appear in contact notes

### Team Training
- [ ] Team trained on how to review call recordings
- [ ] Team knows how to manually transfer calls
- [ ] Team understands pipeline stages and workflow triggers
- [ ] Team knows how to handle escalated conversations
- [ ] Team has access to conversation transcripts
- [ ] Team knows how to edit agent responses (if needed)
- [ ] Team trained on GHL interface and reporting

### Compliance & Legal
- [ ] Call recording disclosure compliant with local laws
- [ ] SMS opt-in/opt-out process compliant with TCPA
- [ ] GDPR compliance addressed (if applicable)
- [ ] Privacy policy updated to mention AI agents
- [ ] Data retention policy configured
- [ ] Customer consent obtained where required

### Monitoring & Analytics
- [ ] Dashboard set up to track key metrics
- [ ] Call volume tracking enabled
- [ ] Response time monitoring configured
- [ ] Conversion rate tracking set up
- [ ] Agent performance metrics reviewed
- [ ] Weekly reporting scheduled
- [ ] Alert notifications configured for failures/errors

---

## Part 5: Custom Values Reference

### Complete Custom Values List

These values must be configured in GHL (Settings > Custom Values) and replaced throughout all agents and workflows:

| Custom Value Key | Default Value | Description | Where Used |
|------------------|---------------|-------------|------------|
| `{{business_name}}` | Capture Client | Your business name | All agents, all workflows, email templates |
| `{{business_phone}}` | (865) 346-3339 | Main business phone | Voice agents, SMS bots, email templates |
| `{{business_email}}` | info@captureclient.net | Main business email | All agents, email templates, contact forms |
| `{{business_website}}` | https://capture-client-site.vercel.app/ | Business website URL | All agents, SMS messages, email templates |
| `{{business_hours}}` | Monday-Friday, 9am-6pm EST | Operating hours | Voice agents, SMS bots, after-hours messages |
| `{{business_address}}` | Knoxville, TN | Business location | Voice agents, email signatures |
| `{{calendar_link}}` | [Your GHL Calendar Link] | General calendar booking | SMS bots, email templates, missed call recovery |
| `{{demo_calendar_link}}` | [Your Demo Calendar Link] | Demo-specific calendar | Demo workflows, sales agents, follow-ups |
| `{{owner_name}}` | [Your Name] | Owner/main contact | Voice agents (transfer scenarios), email signatures |
| `{{owner_phone}}` | [Your Mobile] | Owner mobile for emergencies | Emergency transfer workflows, after-hours escalation |

### How to Set Custom Values in GHL

1. Log into GoHighLevel
2. Navigate to **Settings** > **Custom Values**
3. Click **Add Custom Value**
4. Enter:
   - **Key:** Exactly as shown above (including `{{` and `}}`)
   - **Value:** Your actual information
   - **Description:** Note what it's used for
5. Click **Save**
6. Repeat for all 10 custom values

### Custom Fields for Contact Records

These custom fields must be created in **Settings > Custom Fields > Contact Fields**:

| Field Name | Field Type | Options/Range | Required | Description |
|------------|-----------|---------------|----------|-------------|
| `lead_source` | Dropdown | Website, Phone, Referral, Social Media, Paid Ad, Other | Yes | How lead found you |
| `lead_score` | Number | 0-100 | No | Calculated qualification score |
| `budget_range` | Dropdown | Under $1K, $1K-$5K, $5K-$10K, $10K+ | No | Lead's budget range |
| `timeline` | Dropdown | Immediate, 1-3 months, 3-6 months, 6+ months, Just exploring | No | Implementation timeline |
| `services_interested` | Multi-select | AI Voice Agents, Lead Generation, CRM Setup, Marketing Automation, Consulting | No | Services they want |
| `qualification_status` | Dropdown | Not Qualified, Partially Qualified, Qualified, Highly Qualified | No | Overall qualification |
| `last_call_outcome` | Text | - | No | Summary of last call |
| `next_action_date` | Date | - | No | Scheduled follow-up date |
| `business_type` | Text | - | No | Type of business (HVAC, Dental, etc.) |
| `call_volume` | Number | - | No | Estimated calls per day/week |
| `primary_pain_point` | Text | - | No | Main challenge they need solved |
| `voicemail_summary` | Text | - | No | AI summary of voicemail content |
| `voicemail_urgency` | Number | 1-5 | No | Urgency level of voicemail |
| `sms_conversation_summary` | Text | - | No | Summary of SMS bot conversation |
| `primary_interest` | Dropdown | Voice AI, Lead Gen, CRM, Full Suite | No | Which service most interested in |
| `urgency_level` | Dropdown | Low, Medium, High, Urgent | No | How urgently they need solution |

### Tags to Create

Create these tags in **Settings > Tags**:

**Lead Status Tags:**
- `new-lead`
- `qualified`
- `highly-qualified`
- `partially-qualified`
- `not-qualified`
- `hot-lead`
- `cold-lead`

**Interaction Tags:**
- `voice_lead`
- `sms-inbound-new`
- `demo-scheduled`
- `demo-completed`
- `demo-no-show`
- `missed-call`
- `after-hours-contact`
- `voicemail-followup`

**Engagement Tags:**
- `engaged`
- `re-engaged`
- `nurture`
- `long-term-nurture`
- `sms-interested`
- `sms-qualified`
- `winback-successful`
- `winback-failed`

**Action Tags:**
- `needs-qualification`
- `callback-requested`
- `urgent-callback`
- `sms-followup-needed`
- `review-completed`

**Status Tags:**
- `do-not-contact`
- `inactive`
- `unresponsive`
- `permanent-cold`

### Pipeline Configuration

Create pipeline: **"Lead Pipeline"** with these stages:

1. **New Lead** - Just entered system
2. **Contacted** - Initial contact made
3. **Qualified** - Passed qualification criteria
4. **Demo Scheduled** - Demo appointment booked
5. **Demo Completed** - Demo finished, awaiting proposal
6. **Proposal Sent** - Proposal delivered
7. **Negotiation** - Discussing terms, pricing, etc.
8. **Closed Won** - Deal closed successfully
9. **Closed Lost** - Lost the deal
10. **Nurture** - Not ready now, long-term follow-up
11. **No Response** - Unresponsive to outreach
12. **Dead** - Permanently not interested

---

## Troubleshooting

### Common Issues and Solutions

#### Voice AI Issues

**Problem:** Voice agent doesn't answer calls
- **Check:** Phone number routing settings
- **Check:** Agent status = Active
- **Check:** Business hours configuration
- **Solution:** Go to Settings > Phone Numbers > Select number > Verify "Inbound Call Handling" is set to correct agent

**Problem:** Voice sounds robotic or unnatural
- **Check:** Voice provider settings
- **Check:** Stability and similarity boost values
- **Solution:** Try different voice options (ElevenLabs Jessica, Sarah, etc.), adjust stability to 0.75-0.85

**Problem:** Agent doesn't understand caller intent
- **Check:** System prompt quality
- **Check:** Intent detection keywords
- **Solution:** Add more keyword variations, refine system prompt with examples

**Problem:** Transfers not working
- **Check:** Transfer phone numbers are correct
- **Check:** Transfer timeout settings
- **Solution:** Test transfer numbers manually, increase timeout to 45 seconds

#### Conversation AI Issues

**Problem:** SMS bot doesn't respond
- **Check:** Bot status = Active
- **Check:** Phone number SMS assignment
- **Solution:** Settings > Phone Numbers > Inbound SMS > Assign to correct bot

**Problem:** Bot responses are too long (cut off)
- **Check:** Max response length setting
- **Solution:** Set to 320 characters (2 SMS messages) or less

**Problem:** Keywords not triggering correct responses
- **Check:** Keyword configuration
- **Check:** Keyword matching (exact vs. contains)
- **Solution:** Add keyword variations, use "contains" matching instead of exact

**Problem:** Opt-out not working
- **Check:** Opt-out keywords configured (STOP, UNSUBSCRIBE)
- **Solution:** Add opt-out keywords, test by sending "STOP"

#### Workflow Issues

**Problem:** Workflow not triggering
- **Check:** Trigger conditions
- **Check:** Contact meets all filter criteria
- **Solution:** Review trigger conditions, test with simple test contact

**Problem:** Messages sending at wrong times
- **Check:** Timezone settings
- **Check:** Wait step durations
- **Solution:** Verify timezone in workflow settings, check wait steps

**Problem:** Workflow sending duplicate messages
- **Check:** Exit conditions
- **Check:** Multiple workflows with same trigger
- **Solution:** Add exit conditions, ensure only one workflow per trigger event

**Problem:** Workflow stopped mid-sequence
- **Check:** Contact opted out or unsubscribed
- **Check:** Error in one of the steps
- **Solution:** Review workflow execution log, check for errors in steps

#### Integration Issues

**Problem:** Custom fields not populating
- **Check:** Custom field names match exactly (case-sensitive)
- **Check:** Field type compatibility
- **Solution:** Verify custom field exists in Settings > Custom Fields

**Problem:** Tags not applying
- **Check:** Tag names are correct
- **Check:** Workflow step configured to add tag
- **Solution:** Manually add tag to test contact, verify it exists

**Problem:** Calendar appointments not creating
- **Check:** Calendar exists and is active
- **Check:** Calendar integration enabled
- **Solution:** Settings > Calendars > Verify calendar active and accessible

**Problem:** Notifications not sending
- **Check:** Notification channel configured (Email/Slack/SMS)
- **Check:** Integration connected
- **Solution:** Test notification manually, verify Slack/Email integration

---

## Need Help?

### Support Resources

**GHL Documentation:**
- Main docs: https://help.gohighlevel.com/
- API docs: https://developers.gohighlevel.com/
- Community forum: https://community.gohighlevel.com/

**Capture Client Support:**
- Email: info@captureclient.net
- Phone: (865) 346-3339
- Website: https://capture-client-site.vercel.app/

### Professional Setup Services

If you'd prefer professional setup assistance:
- We offer done-for-you setup services
- Includes full configuration, testing, and training
- Contact us for pricing

---

## Appendix: File Structure Reference

### Complete Folder Structure
```
C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\
│
├── agents/
│   ├── voice/
│   │   ├── receptionist-voice.json
│   │   ├── lead-qualifier-voice.json
│   │   ├── demo-booker-voice.json
│   │   ├── after-hours-voice.json
│   │   └── README.md
│   │
│   ├── sms/
│   │   ├── receptionist-sms.json
│   │   ├── lead-nurture-sms.json
│   │   ├── appointment-sms.json
│   │   └── review-requester-sms.json
│   │
│   └── email/
│       └── [email agent configs]
│
├── prompts/
│   ├── voice-receptionist-prompt.md
│   ├── lead-qualifier-prompt.md
│   ├── demo-booker-prompt.md
│   ├── sms-receptionist-prompt.md
│   └── sms-nurture-prompt.md
│
├── workflows/
│   ├── inbound-call-handler.json
│   ├── lead-qualification.json
│   ├── demo-booking.json
│   ├── missed-call-recovery.json
│   ├── voicemail-processing.json
│   ├── new-lead-sms-sequence.json
│   ├── demo-reminder-sequence.json
│   ├── lead-nurture-sequence.json
│   ├── winback-sequence.json
│   ├── email-welcome-sequence.json
│   ├── email-demo-sequence.json
│   ├── email-proposal-followup.json
│   ├── email-onboarding-sequence.json
│   └── email-reengagement-sequence.json
│
├── docs/
│   ├── GHL-IMPORT-GUIDE.md (this file)
│   └── [other documentation]
│
├── snapshot.json
├── README.md
├── IMPLEMENTATION-CHECKLIST.md
└── EMAIL-WORKFLOWS-SUMMARY.md
```

---

## Changelog

**Version 1.0.0** - December 1, 2025
- Initial release of comprehensive GHL Import Guide
- Covers all 4 Voice AI agents
- Covers all 4 Conversation AI bots
- Covers all 14 workflows (5 voice, 4 SMS, 5 email)
- Includes API setup instructions
- Includes complete custom values reference
- Includes troubleshooting section

---

**End of GHL Import Guide**

For updates to this guide or to report issues, contact: info@captureclient.net

# Capture Client Voice AI Agents

## Overview
This directory contains comprehensive GHL Voice AI agent configurations for Capture Client, a marketing agency specializing in AI Voice Agents and Lead Generation services based in Knoxville, TN.

---

## Business Information
- **Business Name**: Capture Client
- **Phone**: (865) 346-3339
- **Location**: Knoxville, Tennessee
- **Hours**: Monday-Friday, 9am-6pm EST
- **Timezone**: America/New_York
- **Services**: AI Voice Agents, Lead Generation, Appointment Setting, Marketing Automation, CRM Integration, 24/7 Call Handling

---

## Voice Agents

### 1. Main Receptionist Voice Agent
**File**: `receptionist-voice.json`

**Purpose**: Primary inbound call handler for all incoming calls during and after business hours.

**Key Features**:
- Professional, warm greeting with context awareness
- Intelligent intent detection for 6+ call types
- Service overview capabilities
- Smart routing to specialized agents
- Handles: service inquiries, demo requests, qualification needs, support issues, human transfer requests

**Voice Profile**: Jessica (professional_warm)

**Routing Logic**:
- Demo requests → Transfer to Demo Booker
- Lead qualification → Transfer to Lead Qualifier
- Technical support → Transfer to Support Team
- After hours human request → Voicemail or callback scheduling

**GHL Integration**:
- Pipeline: "Voice Leads"
- Tags: voice_lead, receptionist, inbound
- Auto-creates contacts with source tracking
- Creates follow-up tasks with round-robin assignment

---

### 2. Lead Qualifier Voice Agent
**File**: `lead-qualifier-voice.json`

**Purpose**: Conducts discovery conversations to qualify leads using BANT+ methodology.

**Key Features**:
- 7-stage qualification framework (rapport → business context → pain discovery → budget → authority → need → timeline)
- Adaptive questioning based on responses
- Weighted lead scoring system (0-100 points)
- Natural objection handling
- Conversational data collection

**Voice Profile**: Sarah (consultative_friendly)

**Lead Scoring**:
- **Hot (80-100)**: Immediate demo booking
- **Warm (60-79)**: Schedule consultation
- **Cool (40-59)**: Nurture sequence
- **Cold (0-39)**: Educational content

**Scoring Criteria**:
- Budget (25 points)
- Authority (20 points)
- Need (25 points)
- Timeline (20 points)
- Fit (10 points)

**GHL Integration**:
- Pipeline: "Voice Leads - Qualified"
- Stages mapped by score category
- Custom fields: qualification_score, industry, pain_point, budget_range, timeline
- Automatic workflow triggers based on score
- Priority tasks created for hot leads

---

### 3. Demo Booker Voice Agent
**File**: `demo-booker-voice.json`

**Purpose**: Specializes in scheduling demos and managing appointments.

**Key Features**:
- 10-step booking flow
- Multiple appointment types (30min, 60min, 15min)
- Timezone intelligence and conflict prevention
- Rescheduling and cancellation handling
- Automated confirmations and reminders

**Voice Profile**: Emily (efficient_friendly)

**Appointment Types**:
- **Standard Demo**: 30 minutes (default)
- **Extended Consultation**: 60 minutes
- **Quick Intro**: 15 minutes

**Confirmation & Reminders**:
- Immediate: Email + SMS confirmation with calendar invite
- 24 hours before: Email + SMS reminder
- 2 hours before: SMS reminder
- No-show follow-up: 30 minutes after missed appointment

**GHL Integration**:
- Calendar: "demo_calendar"
- Creates opportunities in "Sales Pipeline"
- Stage: "Demo Scheduled"
- Tags: demo_scheduled, voice_booked
- Prep tasks created 30 minutes before appointment

---

### 4. After Hours Voice Agent
**File**: `after-hours-voice.json`

**Purpose**: Handles calls outside business hours (evenings, weekends, holidays).

**Key Features**:
- Context-aware greetings (weeknight, weekend, holiday, early morning)
- Urgency assessment with 3-level triage
- Callback scheduling with flexible options
- Detailed message taking
- Self-service resource delivery
- Emergency escalation protocols

**Voice Profile**: Alex (calm_professional)

**Callback Options**:
- First thing tomorrow morning (09:00-10:00)
- Tomorrow afternoon (13:00-15:00)
- Specific date/time
- As soon as office opens (urgent)

**Urgency Levels**:
- **High**: Immediate notification, callback within 30min-2hrs
- **Medium**: Priority morning callback
- **Low**: Standard callback within 24 business hours

**GHL Integration**:
- Pipeline: "After Hours Leads"
- Tags: after_hours, voice_lead, needs_callback
- Urgent SMS alerts to on-call team
- Morning digest summary
- Custom fields: urgency_level, callback_scheduled_for, message_content

---

## Agent Workflow & Handoffs

### Typical Call Flow

```
Inbound Call
    ↓
Receptionist (Jessica)
    ↓
Intent Detection
    ↓
    ├─→ Service Question → Answer → Qualify or Book
    ├─→ Schedule Demo → Transfer to Demo Booker (Emily)
    ├─→ Interested in Services → Transfer to Lead Qualifier (Sarah)
    ├─→ Technical Support → Transfer to Support Team
    └─→ After Hours → After Hours Agent (Alex)

Lead Qualifier (Sarah)
    ↓
BANT+ Questions → Lead Scoring
    ↓
    ├─→ Hot Lead (80-100) → Transfer to Demo Booker
    ├─→ Warm Lead (60-79) → Transfer to Demo Booker
    ├─→ Cool Lead (40-59) → Send resources, schedule follow-up
    └─→ Cold Lead (0-39) → Long-term nurture

Demo Booker (Emily)
    ↓
Collect info → Check availability → Confirm booking
    ↓
Automated Confirmations & Reminders
    ↓
Demo Completed or No-Show → Follow-up workflow

After Hours (Alex)
    ↓
Assess urgency
    ↓
    ├─→ Urgent → Detailed message + immediate alert
    ├─→ Medium → Schedule priority callback
    └─→ Low → Standard callback or message
```

---

## Technical Specifications

### All Agents Share:
- **Model**: GPT-4o (OpenAI)
- **Voice Provider**: ElevenLabs
- **Call Recording**: Enabled with transcription
- **Sentiment Analysis**: Real-time
- **TCPA/GDPR Compliant**: Yes
- **Data Retention**: 365-730 days

### Voice Characteristics:
- **Receptionist (Jessica)**: Professional warm, moderate pace
- **Lead Qualifier (Sarah)**: Consultative friendly, slightly slower
- **Demo Booker (Emily)**: Efficient friendly, steady pace
- **After Hours (Alex)**: Calm professional, steady reassuring

### Temperature Settings:
- **Receptionist**: 0.7 (balanced)
- **Lead Qualifier**: 0.8 (more creative/adaptive)
- **Demo Booker**: 0.6 (more precise)
- **After Hours**: 0.7 (balanced)

---

## GHL Integration Summary

### Pipelines:
1. **Voice Leads** (Receptionist)
2. **Voice Leads - Qualified** (Lead Qualifier)
3. **Sales Pipeline** (Demo Booker - opportunities)
4. **After Hours Leads** (After Hours)

### Contact Creation:
- All agents auto-create contacts
- Update existing contacts if phone matches
- Source tracking by agent type
- Automatic tagging system

### Task Management:
- Round-robin assignment
- Priority levels based on lead score/urgency
- Due dates calculated automatically
- Detailed notes from conversation

### Custom Fields Used:
- call_intent, call_duration, call_sentiment
- qualification_score, score_category
- primary_pain_point, budget_range, timeline
- demo_date, appointment_type
- urgency_level, after_hours_reason
- And more...

### Workflow Triggers:
- Hot lead notifications (SMS to sales team)
- Demo confirmations and reminders
- After hours urgent alerts
- No-show recovery sequences
- Nurture campaign enrollment

---

## Analytics & Tracking

### Key Metrics Tracked:
1. **Receptionist**:
   - Call volume by intent
   - Transfer rate
   - Resolution rate
   - Average call duration

2. **Lead Qualifier**:
   - Qualification time
   - Score distribution
   - Conversion to demo rate
   - Objections encountered

3. **Demo Booker**:
   - Booking time
   - Booking completion rate
   - Reschedule rate
   - No-show rate

4. **After Hours**:
   - After hours call volume
   - Urgency distribution
   - Callback completion rate
   - Resolution time

---

## Implementation Checklist

### Pre-Launch:
- [ ] Configure GHL calendars
- [ ] Set up pipelines and stages
- [ ] Create custom fields
- [ ] Configure workflow automations
- [ ] Set up email/SMS templates
- [ ] Assign team members for round-robin
- [ ] Configure business hours
- [ ] Set up holiday calendar

### Testing:
- [ ] Test each agent individually
- [ ] Test agent-to-agent transfers
- [ ] Verify calendar integration
- [ ] Test after-hours routing
- [ ] Confirm notification delivery
- [ ] Validate data flow to GHL
- [ ] Check recording and transcription

### Post-Launch:
- [ ] Monitor call quality
- [ ] Review transcripts regularly
- [ ] Analyze conversion rates
- [ ] Optimize based on data
- [ ] Update scripts as needed
- [ ] Train team on handoff process

---

## Best Practices

### For Optimal Performance:
1. **Review transcripts weekly** to identify improvement opportunities
2. **Monitor lead scores** to refine qualification criteria
3. **Track no-show rates** and adjust reminder timing
4. **Analyze after-hours patterns** to optimize staffing
5. **Update knowledge base** as services evolve
6. **Test regularly** to catch issues early
7. **Gather feedback** from callers and team

### Common Issues & Solutions:
- **High transfer rate**: Review receptionist intent detection
- **Low qualification scores**: Adjust scoring weights
- **High no-show rate**: Increase reminder frequency
- **Missed urgent calls**: Review after-hours escalation
- **Poor sentiment**: Adjust tone/pace settings

---

## Support & Maintenance

### Regular Updates Needed:
- Business hours changes
- Holiday schedules
- New services or offerings
- Pricing updates
- Team member availability
- Phone numbers or contact info

### Version Control:
- Current version: 1.0.0
- Last updated: 2025-12-01
- Update frequency: As needed, minimum quarterly review

---

## Contact Information

For technical support or questions about these configurations:
- **Business**: Capture Client
- **Phone**: (865) 346-3339
- **Location**: Knoxville, TN
- **Hours**: Monday-Friday, 9am-6pm EST

---

## File Structure

```
C:\Users\eaqqa\ghl-ai-employees\Capture-Client-snapshot\agents\voice\
├── receptionist-voice.json      (13KB)
├── lead-qualifier-voice.json    (19KB)
├── demo-booker-voice.json       (19KB)
├── after-hours-voice.json       (20KB)
└── README.md                    (this file)
```

---

## Next Steps

1. **Review Configurations**: Read through each JSON file to familiarize yourself with the settings
2. **Customize as Needed**: Adjust scripts, questions, or flows to match your exact needs
3. **Set Up GHL**: Configure your GoHighLevel account with the required pipelines, fields, and workflows
4. **Test Thoroughly**: Run test calls through each agent before going live
5. **Train Your Team**: Ensure everyone understands how the agents work and when to expect handoffs
6. **Go Live**: Launch gradually, monitoring closely for the first few days
7. **Optimize**: Use analytics to continuously improve performance

---

*These configurations are designed to work together as an integrated voice AI system for Capture Client. Each agent has a specific role but they share information seamlessly through GHL integration.*

# Capture Client - GHL Voice AI Workflow Automations

## Overview
This directory contains 5 comprehensive GoHighLevel workflow automations designed specifically for Capture Client's AI Voice Agent system.

**Business Details:**
- Company: Capture Client
- Location: Knoxville, Tennessee
- Phone: (865) 346-3339
- Hours: Monday-Friday, 9:00 AM - 6:00 PM EST
- Services: AI Voice Agents, Lead Generation, CRM Solutions

---

## Workflow Files

### 1. Inbound Call Handler (`inbound-call-handler.json`)
**Size:** 7.8 KB | **Trigger:** `call_incoming`

**Purpose:** Primary call routing and handling system

**Key Features:**
- Business hours detection and routing
- AI receptionist integration during business hours
- After-hours message taking and callback scheduling
- Emergency keyword detection and priority routing
- Real-time call transcript monitoring
- Automatic owner transfer for urgent matters
- Comprehensive call outcome tracking
- Integration with downstream workflows

**Flow:**
1. Checks business hours
2. Routes to AI receptionist with appropriate context
3. Monitors for emergency keywords
4. Transfers to owner if urgent
5. Logs all call details and outcomes
6. Triggers appropriate follow-up workflows

**Custom Values:**
- `ai_receptionist_url`: AI agent endpoint
- `owner_phone`: Emergency contact number
- `business_phone`: Main company line

---

### 2. Lead Qualification Workflow (`lead-qualification.json`)
**Size:** 15 KB | **Trigger:** `workflow_trigger` from inbound-call-handler

**Purpose:** Intelligent lead scoring and automated qualification

**Key Features:**
- AI-powered data extraction from call transcripts
- Multi-factor lead scoring system (0-100 points)
- Three-tier lead classification (Hot/Warm/Cold)
- Automated routing based on lead quality
- Immediate notifications for hot leads
- Custom nurture sequences for each tier
- Comprehensive lead intelligence capture

**Scoring Criteria:**
- **Budget Range** (0-30 points)
  - High ($5,000+): 30 points
  - Medium ($2,000-$4,999): 20 points
  - Low ($500-$1,999): 10 points

- **Timeline** (0-30 points)
  - Immediate (within 1 week): 30 points
  - Soon (within 1 month): 20 points
  - Future (3+ months): 10 points

- **Decision Maker** (0-25 points)
  - Yes: 25 points
  - Influencer: 15 points
  - No: 5 points

- **Business Type** (0-25 points)
  - Enterprise: 25 points
  - Established: 20 points
  - Startup: 15 points

- **Need Clarity** (0-15 points)
  - Specific identified need: 15 points
  - Vague inquiry: 5 points

**Lead Tiers:**
- **Hot (80-100 points):** Immediate notification, auto demo booking, high priority
- **Warm (50-79 points):** Email notification, nurture sequence, medium priority
- **Cold (0-49 points):** Long-term nurture, newsletter, low priority

---

### 3. Demo Booking Workflow (`demo-booking.json`)
**Size:** 18 KB | **Trigger:** Multiple (workflow trigger, calendar event, form submission)

**Purpose:** Complete demo lifecycle management

**Key Features:**
- Multi-channel confirmation (SMS + Email + Calendar invite)
- Automated reminder system (24hr + 1hr before)
- Demo preparation task creation for sales team
- Attendance tracking and no-show handling
- Post-demo follow-up automation
- Rescheduling support
- Integration with sales pipeline

**Communication Schedule:**
1. **Immediate:** Booking confirmation (SMS + Email + Calendar)
2. **24 Hours Before:** Reminder with meeting link
3. **1 Hour Before:** Final reminder
4. **Post-Demo:** Thank you + next steps (if attended)
5. **No-Show:** Recovery SMS + rescheduling offer

**Demo Types:**
- Standard (30 min): General AI Voice Agent overview
- Enterprise (60 min): Deep dive for larger organizations
- Technical (45 min): Integration and technical details

---

### 4. Missed Call Recovery Workflow (`missed-call-recovery.json`)
**Size:** 16 KB | **Trigger:** `call_missed`

**Purpose:** Automatic missed call recovery and engagement

**Key Features:**
- Immediate SMS response (30 seconds after missed call)
- Personalized messaging based on business hours
- Multi-stage follow-up sequence
- Callback scheduling integration
- Response monitoring with early exit
- Escalation to manual outreach if needed
- Comprehensive recovery analytics

**Follow-up Sequence:**
1. **30 seconds:** Initial recovery SMS with callback link
2. **2 hours:** First follow-up (if no response)
3. **24 hours:** Second follow-up with service details
4. **48 hours:** Final follow-up
5. **No Response:** Add to long-term nurture, create manual task

**Smart Features:**
- Different messaging for business hours vs after hours
- Workflow interrupts on contact response
- Tracks recovery method (SMS reply, callback scheduled, inbound call)
- Calculates time-to-recovery metrics

---

### 5. Voicemail Processing Workflow (`voicemail-processing.json`)
**Size:** 21 KB | **Trigger:** `voicemail_received`

**Purpose:** Intelligent voicemail transcription and automated response

**Key Features:**
- Automatic voicemail transcription
- AI-powered intent detection and data extraction
- Priority classification based on content and sentiment
- Multi-channel team notifications
- Personalized auto-response via SMS
- Priority-based task creation
- Integration with lead qualification

**AI Data Extraction:**
- Caller name and company
- Callback number
- Primary intent (sales, support, callback, etc.)
- Urgency level (urgent, normal, low)
- Sentiment analysis (positive, neutral, negative, frustrated)
- Specific service interest
- Detailed request summary

**Priority Detection Keywords:**
- **Urgent:** emergency, asap, immediately, critical, important
- **Sales:** interested, pricing, quote, demo, cost, buy
- **Support:** not working, broken, issue, problem, help
- **Callback:** call me, call back, reach me, contact me

**Priority-Based Response:**
- **HIGH Priority:** Immediate multi-channel notification (SMS, Email, Slack, Phone), 1-hour callback deadline
- **MEDIUM Priority:** Email + Slack notification, 4-hour callback deadline
- **NORMAL Priority:** Email notification, 24-hour callback deadline

---

## Workflow Integration Map

```
INBOUND CALL
    │
    ├─► Inbound Call Handler
    │       │
    │       ├─► (Intent: New Lead) → Lead Qualification
    │       │                              │
    │       │                              ├─► (Hot Lead) → Demo Booking
    │       │                              ├─► (Warm Lead) → Nurture Sequence
    │       │                              └─► (Cold Lead) → Long-term Nurture
    │       │
    │       └─► (Intent: Demo Request) → Demo Booking
    │
    ├─► (Call Missed) → Missed Call Recovery
    │                       │
    │                       └─► (Response) → Lead Qualification
    │
    └─► (Voicemail Left) → Voicemail Processing
                                │
                                └─► (Sales Intent) → Lead Qualification
```

---

## Common Custom Values

All workflows share these custom value placeholders:

```json
{
  "company_name": "Capture Client",
  "company_phone": "(865) 346-3339",
  "company_location": "Knoxville, TN",
  "sales_team_email": "sales@captclient.com",
  "sales_team_phone": "+18653463339",
  "booking_link": "https://calendly.com/captclient/demo",
  "callback_link": "https://calendly.com/captclient/callback",
  "ai_receptionist_url": "https://api.captclient.com/ai-receptionist",
  "business_hours": {
    "timezone": "America/New_York",
    "monday-friday": "09:00-18:00",
    "weekend": "closed"
  }
}
```

---

## Implementation Notes

### Prerequisites
1. GoHighLevel account with workflow automation enabled
2. AI Voice Agent system configured and connected
3. Phone system integration (Twilio, native GHL, etc.)
4. Custom fields created in CRM
5. Email templates configured
6. Calendly or similar booking system integrated

### Required Custom Fields
Create these custom fields in your GHL account:

**Contact Fields:**
- `lead_score` (number)
- `lead_tier` (text: hot/warm/cold)
- `lead_source` (text)
- `last_call_date` (date)
- `last_call_outcome` (text)
- `last_call_intent` (text)
- `demo_scheduled` (boolean)
- `demo_date` (date)
- `demo_status` (text)
- `missed_call_count` (number)
- `voicemail_count` (number)
- `budget_range` (text)
- `timeline` (text)
- `specific_need` (text)
- `industry` (text)
- `company_size` (number)

**Tags to Create:**
- `hot-lead`, `warm-lead`, `cold-lead`
- `qualified`, `demo-ready`, `demo-scheduled`, `demo-completed`
- `missed-call-active`, `missed-call-recovered`
- `voicemail-received`, `active-prospect`
- `high-priority`, `medium-priority`

### Integration Setup

1. **Import Workflows:**
   - Upload each JSON file to GHL workflow builder
   - Review and adjust custom values
   - Map to your specific phone numbers and endpoints

2. **Configure AI Receptionist:**
   - Set up AI agent endpoint URL
   - Configure greeting messages
   - Enable call transcription
   - Set up emergency keyword detection

3. **Set Up Notifications:**
   - Configure Slack webhooks (optional)
   - Set up SMS notification numbers
   - Configure email addresses
   - Test all notification channels

4. **Test Each Workflow:**
   - Make test inbound calls
   - Miss a call intentionally
   - Leave test voicemails
   - Book test demos
   - Verify all triggers and actions

5. **Monitor and Optimize:**
   - Review workflow analytics weekly
   - Adjust scoring criteria based on results
   - Refine messaging based on response rates
   - Update AI prompts for better accuracy

---

## Analytics and Tracking

Each workflow tracks key metrics:

### Inbound Call Handler
- Total calls received
- Business hours vs after hours
- Emergency transfers
- Call outcomes
- Average call duration

### Lead Qualification
- Lead score distribution
- Conversion rates by tier
- Time to qualification
- Most common intents
- Budget and timeline patterns

### Demo Booking
- Booking rate
- Attendance rate
- No-show rate
- Reminder effectiveness
- Conversion to customer

### Missed Call Recovery
- Recovery success rate
- Time to recovery
- Most effective recovery method
- Follow-up effectiveness

### Voicemail Processing
- Transcription accuracy
- Intent detection accuracy
- Priority distribution
- Average callback time
- Response rate

---

## Troubleshooting

### Common Issues

**Workflow Not Triggering:**
- Verify trigger conditions are met
- Check phone system integration
- Confirm API connections are active
- Review GHL automation logs

**Custom Values Not Populating:**
- Verify custom field names match exactly
- Check that fields exist in contact record
- Ensure proper data type mapping

**AI Extraction Failing:**
- Review call transcript quality
- Adjust AI prompts for clarity
- Increase transcription quality settings
- Check API limits and quotas

**Notifications Not Sending:**
- Verify recipient contact information
- Check notification channel integrations
- Review workflow permissions
- Test notification channels independently

---

## Support and Maintenance

**Created:** December 1, 2025
**Version:** 1.0.0
**Last Updated:** December 1, 2025

**Maintenance Schedule:**
- Review workflows weekly for first month
- Monthly optimization after stabilization
- Quarterly comprehensive audit
- Update AI prompts as needed

**Contact:**
For technical support or customization requests, contact the Capture Client technical team.

---

## Future Enhancements

Potential additions for version 2.0:
- Multi-language support
- Advanced sentiment analysis
- Predictive lead scoring with ML
- Integration with additional CRM systems
- Video call scheduling for demos
- Automated proposal generation
- Customer feedback collection workflows
- Referral program automation
- Win/loss analysis integration

---

**Note:** These workflows are designed to work together as an integrated system. For best results, implement all 5 workflows as a complete voice AI automation suite.

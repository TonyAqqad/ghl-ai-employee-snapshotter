# GHL Workflow Builder Guide
## Capture Client AI Employee Snapshot

This guide shows you exactly how to recreate each workflow in GoHighLevel's Workflow Builder.

> **Note**: GHL workflows cannot be imported via JSON. You must build them manually in the UI.

---

## Table of Contents

### Voice Workflows
1. [Inbound Call Handler](#1-inbound-call-handler)
2. [Lead Qualification](#2-lead-qualification)
3. [Demo Booking](#3-demo-booking)
4. [Missed Call Recovery](#4-missed-call-recovery)
5. [Voicemail Processing](#5-voicemail-processing)

### SMS Workflows
6. [New Lead SMS Sequence](#6-new-lead-sms-sequence)
7. [Demo Reminder Sequence](#7-demo-reminder-sequence)
8. [Lead Nurture Sequence](#8-lead-nurture-sequence)
9. [Winback Sequence](#9-winback-sequence)

### Email Workflows
10. [Email Welcome Sequence](#10-email-welcome-sequence)
11. [Email Demo Sequence](#11-email-demo-sequence)
12. [Email Proposal Follow-up](#12-email-proposal-follow-up)
13. [Email Onboarding Sequence](#13-email-onboarding-sequence)
14. [Email Re-engagement Sequence](#14-email-re-engagement-sequence)

---

## Voice Workflows

### 1. Inbound Call Handler

**Purpose**: Routes incoming calls to AI receptionist with business hours logic

**Source File**: `workflows/inbound-call-handler.json`

#### GHL Setup Steps:

1. **Navigate**: Automation > Workflows > Create Workflow

2. **Add Trigger**:
   - Select: **Call Events > Inbound Call**
   - Filter: All inbound calls to your Voice AI number

3. **Add Action - Business Hours Check**:
   - Add: **If/Else Branch**
   - Condition: "Current time is within business hours"
   - Business Hours: Mon-Fri 9am-6pm EST

4. **Business Hours Branch (YES)**:
   - Add: **Connect to Voice AI Agent**
   - Select: "Receptionist Voice Agent"
   - Greeting: "Thank you for calling Capture Client..."

5. **After Hours Branch (NO)**:
   - Add: **Connect to Voice AI Agent**
   - Select: "After Hours Voice Agent"
   - Greeting: "You've reached us outside business hours..."

6. **Add Action - Monitor for Emergency**:
   - Add: **If/Else Branch** (after AI agent)
   - Condition: "Call transcript contains" any of: emergency, urgent, asap
   - YES: Add **Transfer Call** to owner phone

7. **Add Action - Log Call**:
   - Add: **Create Note**
   - Template: Include call timestamp, duration, outcome, summary

8. **Add Action - Update Contact**:
   - Add: **Update Contact**
   - Fields: last_call_date, last_call_outcome, total_calls

9. **Add Action - Route to Follow-up**:
   - Add: **If/Else Branch**
   - If intent = demo_request: Trigger "Demo Booking" workflow
   - If outcome = new_lead: Trigger "Lead Qualification" workflow
   - If voicemail_left: Trigger "Voicemail Processing" workflow

**Connected Agents**: Receptionist Voice, After Hours Voice

**Custom Values Used**:
- `{{owner_phone}}` - for emergency transfers
- `{{business_hours}}` - for hours check

---

### 2. Lead Qualification

**Purpose**: Scores leads based on call data and routes to appropriate nurture

**Source File**: `workflows/lead-qualification.json`

#### GHL Setup Steps:

1. **Add Trigger**:
   - Select: **Workflow Trigger**
   - Source: From "Inbound Call Handler" when outcome = new_lead

2. **Add Action - Extract Data**:
   - Add: **Update Contact** with AI-extracted fields:
   - budget_range, timeline, decision_maker, business_type, industry

3. **Add Action - Calculate Score**:
   - Add: **Math Operation** or use custom fields
   - Score criteria:
     - Budget $5k+: 30 pts | $2-5k: 20 pts | $500-2k: 10 pts
     - Timeline immediate: 30 pts | 1 month: 20 pts | 3+ months: 10 pts
     - Decision maker: 25 pts | Influencer: 15 pts
     - Enterprise: 25 pts | Established: 20 pts | Startup: 15 pts

4. **Add Action - Assign Tier**:
   - Add: **If/Else Branch**
   - If score >= 80: Set lead_tier = "hot"
   - If score >= 50: Set lead_tier = "warm"
   - Else: Set lead_tier = "cold"

5. **HOT Lead Branch (score >= 80)**:
   - Add: **Send SMS** to sales team: "HOT LEAD ALERT!"
   - Add: **Send Email** to sales team with full details
   - Add: **Send SMS** to lead: offer to book demo
   - Add: **Update Contact** tags: hot-lead, qualified, demo-ready
   - Add: **Add to Pipeline**: stage "Demo Scheduled"

6. **WARM Lead Branch (score 50-79)**:
   - Add: **Send Email** to sales team (lower priority)
   - Add: **Send Email** to lead with educational content
   - Add: **Update Contact** tags: warm-lead, qualified
   - Add: **Add to Campaign**: "warm-lead-nurture-sequence"

7. **COLD Lead Branch (score < 50)**:
   - Add: **Update Contact** tags: cold-lead, long-term-nurture
   - Add: **Add to Campaign**: "monthly-newsletter"
   - Add: **Create Task**: "Check-in in 90 days"

8. **Add Action - Create Note**:
   - Add: **Create Note** with qualification report

**Custom Values Used**:
- `{{sales_team_phone}}`, `{{sales_team_email}}`
- `{{booking_link}}`

---

### 3. Demo Booking

**Purpose**: Handles demo scheduling from qualified leads

**Source File**: `workflows/demo-booking.json`

#### GHL Setup Steps:

1. **Add Trigger**:
   - Select: **Workflow Trigger** from Lead Qualification (hot leads)
   - OR **Form Submission** from demo request form
   - OR **Calendar > Appointment Booked**

2. **Add Action - Send Confirmation SMS**:
   - Add: **Send SMS**
   - Message: "Your demo with Capture Client is confirmed for {{appointment_date}}..."

3. **Add Action - Send Confirmation Email**:
   - Add: **Send Email**
   - Subject: "Demo Confirmed - {{appointment_date}}"
   - Include: meeting link, preparation tips, what to expect

4. **Add Action - Update Pipeline**:
   - Add: **Move Pipeline Stage**
   - Stage: "Demo Scheduled"

5. **Add Action - Add Tags**:
   - Add: **Update Contact**
   - Tags: demo-scheduled, qualified

6. **Add Action - Create Task**:
   - Add: **Create Task**
   - Title: "Prepare for demo with {{contact.name}}"
   - Due: 1 day before appointment

7. **Add Trigger**: Start Demo Reminder Sequence workflow

---

### 4. Missed Call Recovery

**Purpose**: Re-engages missed calls within minutes

**Source File**: `workflows/missed-call-recovery.json`

#### GHL Setup Steps:

1. **Add Trigger**:
   - Select: **Call Events > Call Status Changed**
   - Filter: Status = "Missed" or "No Answer"

2. **Add Wait**: 2 minutes (let voicemail complete)

3. **Add Action - Send SMS**:
   - Add: **Send SMS**
   - Message: "Hi! We just missed your call to Capture Client. Sorry about that! How can we help you? Reply here or call back at (865) 346-3339"

4. **Add Action - Update Contact**:
   - Add: **Update Contact**
   - Tags: missed-call, needs-followup
   - Field: missed_call_count + 1

5. **Add Wait**: 30 minutes

6. **Add Condition**: Check if they responded
   - YES: Exit workflow
   - NO: Continue

7. **Add Action - Second SMS**:
   - Message: "Just following up! We don't want to miss connecting with you..."

8. **Add Wait**: 4 hours

9. **Add Action - Send Email**:
   - Subject: "We tried to reach you"
   - Include callback options and booking link

---

### 5. Voicemail Processing

**Purpose**: Transcribes and processes voicemails

**Source File**: `workflows/voicemail-processing.json`

#### GHL Setup Steps:

1. **Add Trigger**:
   - Select: **Call Events > Voicemail Received**

2. **Add Action - Transcribe** (GHL auto-transcribes):
   - The transcript is available in `{{voicemail.transcript}}`

3. **Add Action - Create Note**:
   - Add: **Create Note**
   - Title: "Voicemail from {{contact.name}}"
   - Body: Include transcript, timestamp, phone number

4. **Add Action - Analyze Intent**:
   - Add: **If/Else Branch**
   - Check transcript for: emergency, urgent, demo, pricing, appointment

5. **Add Action - Send Notification**:
   - Add: **Send SMS** to team
   - Message: "New voicemail from {{contact.phone}}: {{voicemail.summary}}"

6. **Add Action - Auto-Response SMS**:
   - Add: **Send SMS** to caller
   - Message: "Thanks for your message! We got it and will call you back within 2 hours..."

7. **Add Action - Update Contact**:
   - Tags: voicemail-received, callback-needed
   - Field: last_voicemail_date

8. **Add Action - Create Task**:
   - Title: "Call back {{contact.name}} - Voicemail"
   - Priority: Based on intent analysis
   - Due: Within 2 hours

---

## SMS Workflows

### 6. New Lead SMS Sequence

**Purpose**: 7-day SMS sequence to book demos from new leads

**Source File**: `workflows/new-lead-sms-sequence.json`

#### GHL Setup Steps:

1. **Add Trigger**:
   - Select: **Form Submission** (contact, demo, pricing forms)
   - OR **Contact Created**
   - OR **Missed Call** (from Missed Call Recovery)

2. **Step 1 - Immediate Response** (0 min delay):
   - Add: **Send SMS**
   - Message: "Hi {{first_name}}! Thanks for reaching out to Capture Client! Are you looking to: 1) Book a demo 2) Get pricing 3) Learn more? Reply with the number!"
   - Add: **Wait for Reply** (2 hours)

3. **Step 2 - Response Handler**:
   - Add: **If/Else Branch** based on reply
   - "1" or "demo": Send scheduling options, add tag "demo-requested"
   - "2" or "pricing": Send pricing info, continue sequence
   - "3" or "learn": Send overview, continue sequence
   - No response: Send follow-up after 2 hours

4. **Step 3 - Day 1** (6 hours delay):
   - Condition: Not demo booked
   - Add: **Send SMS**
   - Message: "67% of customers expect 5-min response. That's where AI agents shine..."

5. **Step 4 - Day 2** (24 hours delay):
   - Add: **Send SMS**
   - Message: Social proof - "We just helped a business go from 20 to 65 appointments/month..."

6. **Step 5 - Day 3** (48 hours delay):
   - Add: **Send SMS**
   - Message: Pain point - "How many leads do you lose because calls go to voicemail?"

7. **Step 6 - Day 4** (72 hours delay):
   - Add: **Send SMS**
   - Message: Direct offer - "Want a 15-min demo? Reply YES!"

8. **Step 7 - Day 5** (96 hours delay):
   - Add: **Send SMS**
   - Message: Case study share with link

9. **Step 8 - Day 7** (168 hours delay):
   - Add: **Send SMS**
   - Message: Final check-in - "Should I follow up in a month?"

10. **Exit Conditions**:
    - Add: **Remove from Workflow** when:
      - Demo booked (trigger Demo Reminder workflow)
      - Opted out (STOP keyword)
      - Explicitly not interested
      - Became customer

**Compliance Settings**:
- Enable opt-out keyword detection: STOP, UNSUBSCRIBE
- Max 3 messages per day

---

### 7. Demo Reminder Sequence

**Purpose**: Reminder sequence before and after demo appointments

**Source File**: `workflows/demo-reminder-sequence.json`

#### GHL Setup Steps:

1. **Add Trigger**:
   - Select: **Calendar > Appointment Created**
   - Filter: Appointment type = "Demo"

2. **24 Hours Before**:
   - Add: **Wait until** 24 hours before appointment
   - Add: **Send SMS**: "Reminder: Your demo is tomorrow at {{appointment_time}}. Reply CONFIRM to confirm or RESCHEDULE if you need to change."
   - Add: **Send Email**: Detailed reminder with prep tips

3. **2 Hours Before**:
   - Add: **Send SMS**: "Your Capture Client demo starts in 2 hours! Here's your meeting link: {{meeting_link}}"

4. **15 Minutes Before**:
   - Add: **Send SMS**: "Starting in 15 min! {{meeting_link}}"

5. **Post-Demo Follow-up** (1 hour after):
   - Add: **Send Email**: "Great meeting! Here's the recording and next steps..."
   - Add: **Create Task**: "Follow up on {{contact.name}} demo"

6. **No-Show Handling**:
   - Add: **If/Else Branch**: Check if appointment marked as "No Show"
   - YES: Trigger No-Show recovery sequence
   - Add: **Send SMS**: "We missed you! Want to reschedule?"

---

### 8. Lead Nurture Sequence

**Purpose**: Long-term nurture for warm leads not ready to buy

**Source File**: `workflows/lead-nurture-sequence.json`

#### GHL Setup Steps:

1. **Add Trigger**:
   - Select: **Tag Added**: "warm-lead"
   - OR **Workflow Trigger** from Lead Qualification

2. **Week 1**:
   - Add: **Send Email**: Educational content about AI voice agents
   - Add: **Send SMS**: "Check your email for something valuable!"

3. **Week 2**:
   - Add: **Send Email**: Case study
   - Add: **Send SMS**: Quick tip about lead response time

4. **Week 3**:
   - Add: **Send Email**: ROI calculator or comparison guide
   - Add: **Send SMS**: "Did you see our ROI guide?"

5. **Week 4**:
   - Add: **Send Email**: Client testimonial video
   - Add: **Send SMS**: Soft demo offer

6. **Month 2-3**:
   - Add: Monthly educational emails
   - Add: Bi-weekly SMS check-ins

7. **Re-engagement**:
   - If engagement detected (email open, SMS reply):
   - Add: **Update Contact**: lead_score + 10
   - If score crosses threshold: Trigger hot lead sequence

---

### 9. Winback Sequence

**Purpose**: Re-engage leads that went cold

**Source File**: `workflows/winback-sequence.json`

#### GHL Setup Steps:

1. **Add Trigger**:
   - Select: **Contact Inactive** for 30+ days
   - OR **Tag Added**: "winback-candidate"

2. **Day 1**:
   - Add: **Send SMS**: "Hi {{first_name}}, it's been a while! Still interested in AI voice agents?"

3. **Day 3**:
   - Add: **Send Email**: "What's new at Capture Client" - highlight new features

4. **Day 7**:
   - Add: **Send SMS**: Special offer or free consultation

5. **Day 14**:
   - Add: **Send Email**: "Last chance" - limited time offer

6. **Exit Conditions**:
   - Response received: Route to appropriate workflow
   - No response after sequence: Mark as "inactive-long-term"

---

## Email Workflows

### 10. Email Welcome Sequence

**Purpose**: Welcome new leads/customers with brand introduction

**Source File**: `workflows/email-welcome-sequence.json`

#### GHL Setup Steps:

1. **Add Trigger**: Contact Created OR Form Submission

2. **Immediate**:
   - Subject: "Welcome to Capture Client!"
   - Content: Brand intro, what to expect, quick win resource

3. **Day 2**:
   - Subject: "Here's what we do (and why it matters)"
   - Content: Services overview, key differentiators

4. **Day 4**:
   - Subject: "A success story you'll love"
   - Content: Case study relevant to their industry

5. **Day 7**:
   - Subject: "Ready to talk?"
   - Content: Soft CTA to book demo

---

### 11. Email Demo Sequence

**Purpose**: Pre and post demo email nurture

**Source File**: `workflows/email-demo-sequence.json`

1. **Pre-Demo (2 days before)**: What to expect, prep questions
2. **Pre-Demo (1 day before)**: Reminder with meeting details
3. **Post-Demo (same day)**: Thank you + recording
4. **Post-Demo (day 2)**: Proposal/pricing follow-up
5. **Post-Demo (day 5)**: Urgency + next steps

---

### 12. Email Proposal Follow-up

**Purpose**: Follow up on sent proposals

**Source File**: `workflows/email-proposal-followup.json`

1. **Trigger**: Proposal sent / Opportunity stage change
2. **Day 1**: "Just sent your proposal - questions?"
3. **Day 3**: "Did you have a chance to review?"
4. **Day 7**: "Let's discuss any concerns"
5. **Day 14**: "What's holding you back?"

---

### 13. Email Onboarding Sequence

**Purpose**: New customer onboarding

**Source File**: `workflows/email-onboarding-sequence.json`

1. **Trigger**: Opportunity Won / Payment received
2. **Day 0**: Welcome email with setup instructions
3. **Day 2**: Setup checklist and resources
4. **Day 5**: Check-in on progress
5. **Day 14**: Training resources
6. **Day 30**: Success check-in + review request

---

### 14. Email Re-engagement Sequence

**Purpose**: Re-engage inactive contacts

**Source File**: `workflows/email-reengagement-sequence.json`

1. **Trigger**: No email open in 60 days
2. **Email 1**: "We miss you" + new content
3. **Email 2**: "What's changed" + special offer
4. **Email 3**: "Last chance before we say goodbye"
5. **If no engagement**: Remove from active lists

---

## Quick Reference: GHL UI Navigation

| Action | Navigation Path |
|--------|-----------------|
| Create Workflow | Automation > Workflows > Create Workflow |
| Add Voice AI | Actions > AI Actions > Voice AI Agent |
| Add SMS | Actions > Communication > Send SMS |
| Add Email | Actions > Communication > Send Email |
| Add Wait | Actions > Timing > Wait |
| Add Condition | Actions > Logic > If/Else |
| Update Contact | Actions > Contact > Update Contact |
| Add Tag | Actions > Contact > Add Tag |
| Create Task | Actions > Internal > Create Task |
| Move Pipeline | Actions > Opportunities > Move to Stage |

---

## Testing Each Workflow

Before going live:

1. **Create test contact** with your phone/email
2. **Trigger the workflow** manually
3. **Verify each step** executes correctly
4. **Check timing** on delays
5. **Test exit conditions**
6. **Review analytics** for tracking

---

## Need Help?

- **GHL Help Center**: https://help.gohighlevel.com
- **Workflow Documentation**: Search "Workflows" in help center
- **Video Tutorials**: GHL YouTube channel

---

*This guide maps JSON configurations to GHL UI actions. Reference the source JSON files for exact message content and settings.*

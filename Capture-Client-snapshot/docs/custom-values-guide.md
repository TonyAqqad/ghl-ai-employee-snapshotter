# Custom Values Guide - Capture Client AI Employee Snapshot

This guide explains all custom values used throughout the snapshot and how to customize them for your business.

## Overview

Custom values are placeholder variables used throughout voice agents, SMS agents, workflows, and templates. After importing the snapshot, you MUST replace these with your actual business information.

## Critical Custom Values

These values are used extensively and MUST be updated:

### Business Identity

#### {{business_name}}
- **Default**: Capture Client
- **Where Used**: Voice agent greetings, SMS messages, email signatures, all communications
- **Example**: "Thank you for calling Capture Client..."
- **Your Value**: _______________________________

#### {{business_phone}}
- **Default**: (865) 346-3339
- **Where Used**: Call-back messages, SMS signatures, email footers
- **Format**: (XXX) XXX-XXXX
- **Your Value**: _______________________________

#### {{business_email}}
- **Default**: info@captureclient.net
- **Where Used**: Email workflows, contact information, support requests
- **Your Value**: _______________________________

#### {{business_website}}
- **Default**: https://capture-client-site.vercel.app/
- **Where Used**: Resource links, email signatures, SMS messages
- **Format**: https://yourdomain.com
- **Your Value**: _______________________________

### Operating Information

#### {{business_hours}}
- **Default**: Monday-Friday, 9am-6pm EST
- **Where Used**: After hours agent, voicemail messages, auto-responders
- **Format**: [Days], [Hours] [Timezone]
- **Your Value**: _______________________________

#### {{business_address}}
- **Default**: Knoxville, TN
- **Where Used**: Location-based routing, local information
- **Your Value**: _______________________________

#### {{timezone}}
- **Default**: America/New_York
- **Where Used**: Appointment scheduling, reminder timing
- **Format**: IANA timezone identifier
- **Your Value**: _______________________________

### Contact Information

#### {{support_email}}
- **Default**: info@captureclient.net
- **Where Used**: Support requests, escalations, problem tickets
- **Your Value**: _______________________________

#### {{owner_name}}
- **Default**: [Your Name]
- **Where Used**: Personal touches in emails, high-value lead notifications
- **Your Value**: _______________________________

### Booking and Scheduling

#### {{calendar_link}}
- **Default**: [Your GHL Calendar Link]
- **Where Used**: Callback scheduling, general appointments
- **Format**: Your GHL calendar booking URL
- **Your Value**: _______________________________

#### {{demo_calendar_link}}
- **Default**: [Your Demo Calendar Link]
- **Where Used**: Demo booking agent, demo workflows
- **Format**: Your GHL calendar booking URL (demo-specific)
- **Your Value**: _______________________________

## Service-Specific Values

### Services Offered

#### {{services_list}}
- **Default**: AI Voice Agents, Lead Generation, CRM Solutions
- **Where Used**: Agent responses to "What do you offer?" questions
- **Your Value**: _______________________________

#### {{primary_service}}
- **Default**: AI Voice Agents
- **Where Used**: Lead qualification, primary offering mentions
- **Your Value**: _______________________________

### Pricing Information

#### {{minimum_budget}}
- **Default**: $1,000
- **Where Used**: Lead qualification, budget assessment
- **Your Value**: _______________________________

#### {{typical_project_range}}
- **Default**: $5,000-$10,000
- **Where Used**: Discovery calls, proposal discussions
- **Your Value**: _______________________________

### Social Media and Resources

#### {{facebook_url}}
- **Default**: [Your Facebook URL]
- **Where Used**: Social proof links, resource sharing
- **Your Value**: _______________________________

#### {{linkedin_url}}
- **Default**: [Your LinkedIn URL]
- **Where Used**: Professional networking, B2B communications
- **Your Value**: _______________________________

#### {{case_study_link}}
- **Default**: [Your Case Study URL]
- **Where Used**: Nurture sequences, proof of concept
- **Your Value**: _______________________________

#### {{testimonial_link}}
- **Default**: [Your Testimonial Page URL]
- **Where Used**: Social proof, decision-making stage
- **Your Value**: _______________________________

## How to Update Custom Values

### Method 1: Bulk Find and Replace (Recommended)

1. **Export All Components**
   - Go to GHL Settings > Snapshots
   - Export the imported snapshot
   - Download the JSON file

2. **Use Text Editor**
   - Open the JSON file in VS Code, Notepad++, or similar
   - Use Find and Replace (Ctrl+H)
   - Find: `{{business_name}}`
   - Replace: `Your Actual Business Name`
   - Click "Replace All"
   - Repeat for each custom value

3. **Re-import**
   - Save the modified JSON
   - Import back into GHL
   - Verify changes applied correctly

### Method 2: Manual Update Through GHL

1. **Voice Agents**
   - Go to Phone > Voice AI
   - Edit each agent
   - Update the greeting, responses, and prompts
   - Replace all {{custom_values}} with actual values
   - Test the agent

2. **SMS Agents**
   - Go to Conversations > AI Agents
   - Edit each SMS agent
   - Update responses and templates
   - Replace all {{custom_values}}
   - Test with sample messages

3. **Workflows**
   - Go to Automation > Workflows
   - Open each workflow
   - Click on each action (SMS, Email, etc.)
   - Replace {{custom_values}} in message bodies
   - Save and republish

4. **Email Templates**
   - Go to Marketing > Templates
   - Edit each email template
   - Replace {{custom_values}} in subject and body
   - Preview and test

## Custom Values by Component

### Voice Agent: Receptionist
```
{{business_name}} - Used in greeting
{{business_hours}} - For hour inquiries
{{calendar_link}} - For callback scheduling
{{services_list}} - For service inquiries
```

### Voice Agent: Lead Qualifier
```
{{business_name}} - Professional identification
{{services_list}} - Service discussion
{{minimum_budget}} - Budget qualification
{{demo_calendar_link}} - Demo booking
```

### Voice Agent: Demo Booker
```
{{business_name}} - Appointment confirmation
{{demo_calendar_link}} - Scheduling link
{{business_email}} - Calendar invite from address
{{timezone}} - Appointment timezone
```

### Voice Agent: After Hours
```
{{business_name}} - Identification
{{business_hours}} - Hours information
{{business_phone}} - Alternative contact
{{support_email}} - Urgent contact option
```

### SMS Receptionist
```
{{business_name}} - Message signature
{{business_hours}} - Operating hours
{{calendar_link}} - Scheduling
{{business_website}} - Resource links
```

### SMS Lead Nurture
```
{{business_name}} - Sender identity
{{case_study_link}} - Value demonstration
{{testimonial_link}} - Social proof
{{demo_calendar_link}} - CTA
```

### SMS Appointment
```
{{business_name}} - Appointment identity
{{business_address}} - Location info
{{business_phone}} - Contact for issues
{{calendar_link}} - Rescheduling
```

### SMS Review Requester
```
{{business_name}} - Review request from
{{owner_name}} - Personal touch
{{google_review_link}} - Review destination
```

### Email Workflows
```
All custom values are used extensively in:
- Subject lines
- Email body content
- Signatures
- Footer information
- CTA buttons and links
```

## Validation Checklist

After updating custom values, verify:

- [ ] No {{brackets}} remain in any agent or workflow
- [ ] All phone numbers are in correct format
- [ ] All URLs are valid and accessible
- [ ] All email addresses are correct
- [ ] Calendar links are tested and working
- [ ] Business hours match your actual schedule
- [ ] Timezone is set correctly for appointment scheduling
- [ ] Service descriptions are accurate
- [ ] Pricing information is current
- [ ] Social media links are correct

## Testing Your Custom Values

### Test Voice Agents
```
1. Call your business number
2. Listen for your business name in greeting
3. Ask about hours - verify correct information
4. Request callback - verify calendar link works
5. Test after hours - verify correct message
```

### Test SMS Agents
```
1. Send "Hi" to your business number
2. Verify business name in response
3. Check all links are clickable and correct
4. Verify hours information is accurate
5. Test scheduling link
```

### Test Email Workflows
```
1. Create a test contact
2. Trigger each email workflow
3. Check all emails for:
   - Correct business name
   - Working links
   - Correct contact information
   - Proper formatting
```

### Test Workflows
```
1. Create test lead
2. Move through pipeline
3. Verify all automated messages
4. Check custom values in all communications
5. Test calendar bookings
```

## Common Mistakes to Avoid

1. **Forgetting to Update Calendar Links**
   - Many agents reference calendar links
   - Test ALL calendar links after updating

2. **Inconsistent Formatting**
   - Phone: Use consistent format throughout
   - URLs: Include https://
   - Hours: Use consistent day/time format

3. **Wrong Timezone**
   - Critical for appointment scheduling
   - Must match your actual location
   - Use IANA format (e.g., America/New_York)

4. **Placeholder Values Left Behind**
   - Search for "[Your" to find unfilled placeholders
   - Search for "{{" to find remaining custom values

5. **Email Addresses**
   - Must be verified in GHL
   - Must match your domain
   - Test email sending before going live

## Getting Help

If you need assistance updating custom values:

- **Email**: info@captureclient.net
- **Website**: https://capture-client-site.vercel.app/
- **Documentation**: See setup-guide.md for detailed instructions

## Quick Reference Table

| Custom Value | Default | Usage Count | Priority |
|--------------|---------|-------------|----------|
| {{business_name}} | Capture Client | 50+ | Critical |
| {{business_phone}} | (865) 346-3339 | 30+ | Critical |
| {{business_email}} | info@captureclient.net | 25+ | Critical |
| {{business_website}} | https://capture-client-site.vercel.app/ | 20+ | Critical |
| {{business_hours}} | M-F, 9am-6pm EST | 15+ | Critical |
| {{calendar_link}} | [Your Link] | 20+ | Critical |
| {{demo_calendar_link}} | [Your Link] | 15+ | Critical |
| {{owner_name}} | [Your Name] | 10+ | High |
| {{services_list}} | AI Voice Agents, etc. | 10+ | High |
| {{support_email}} | info@captureclient.net | 8+ | Medium |

## Next Steps

1. Fill in your values in the table above
2. Follow Method 1 or Method 2 to update
3. Complete the validation checklist
4. Run all tests
5. Proceed to setup-guide.md for full system configuration

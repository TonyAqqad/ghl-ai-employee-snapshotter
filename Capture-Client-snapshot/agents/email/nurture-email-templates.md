# Nurture Email Templates

**Business**: Capture Client
**Purpose**: Proposal follow-up, onboarding, and re-engagement emails
**Workflows**: email-proposal-followup.json, email-onboarding-sequence.json, email-reengagement-sequence.json

---

## PROPOSAL FOLLOW-UP SEQUENCE

### Proposal Email 1: Day 2 Check-in

**Subject**: Quick Question About Your Proposal
**Preheader**: Making sure you have everything you need

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proposal Check-in</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 20px;">
                                Hi {{contact.first_name}},
                            </p>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px;">
                                I wanted to check in and see if you had a chance to review your proposal.
                            </p>

                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td align="center" style="padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
                                        <p style="font-size: 14px; color: #666666; margin: 0 0 15px;">Your Proposal:</p>
                                        <a href="{{proposal_link}}" style="display: inline-block; padding: 14px 35px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 6px;">
                                            View Proposal →
                                        </a>
                                    </td>
                                </tr>
                            </table>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 20px;">
                                I also wanted to address a few things that commonly come up:
                            </p>

                            <!-- Pricing Section -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 20px;">
                                <tr>
                                    <td style="background-color: #f8f9fa; padding: 20px; border-left: 4px solid #667eea; border-radius: 4px;">
                                        <h4 style="color: #667eea; margin: 0 0 10px; font-size: 16px;">💰 ON PRICING:</h4>
                                        <p style="font-size: 14px; line-height: 22px; color: #555555; margin: 0;">
                                            Our packages range from $999-$2,195/month. Most clients see <strong>3-5x ROI within 90 days</strong> through:
                                        </p>
                                        <ul style="font-size: 14px; line-height: 22px; color: #555555; margin: 10px 0 0; padding-left: 20px;">
                                            <li>Increased lead conversion (average 67% boost)</li>
                                            <li>Reduced staffing costs</li>
                                            <li>Better lead qualification</li>
                                            <li>24/7 availability</li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>

                            <!-- Implementation Section -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 20px;">
                                <tr>
                                    <td style="background-color: #f8f9fa; padding: 20px; border-left: 4px solid #764ba2; border-radius: 4px;">
                                        <h4 style="color: #764ba2; margin: 0 0 10px; font-size: 16px;">🚀 ON IMPLEMENTATION:</h4>
                                        <p style="font-size: 14px; line-height: 22px; color: #555555; margin: 0;">
                                            We handle everything:
                                        </p>
                                        <ul style="font-size: 14px; line-height: 22px; color: #555555; margin: 10px 0 0; padding-left: 20px;">
                                            <li>Custom AI training (your scripts, your brand voice)</li>
                                            <li>CRM integration or setup</li>
                                            <li>Phone system connection</li>
                                            <li>Team training</li>
                                            <li>Ongoing optimization</li>
                                        </ul>
                                        <p style="font-size: 14px; line-height: 22px; color: #555555; margin: 10px 0 0;">
                                            <strong>Timeline:</strong> 48 hours to go-live
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <!-- Risk Section -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background-color: #e8f5e9; padding: 20px; border-left: 4px solid #4caf50; border-radius: 4px;">
                                        <h4 style="color: #2e7d32; margin: 0 0 10px; font-size: 16px;">✅ ON RISK:</h4>
                                        <p style="font-size: 14px; line-height: 22px; color: #2e7d32; margin: 0;">
                                            <strong>Zero risk</strong> with our 30-day money-back guarantee. If you're not seeing results, we refund everything.
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px;">
                                <strong>Is there anything holding you back?</strong>
                            </p>

                            <p style="font-size: 15px; line-height: 24px; color: #333333; margin: 0 0 15px;">
                                Common concerns we can address:
                            </p>

                            <ul style="font-size: 15px; line-height: 26px; color: #666666; margin: 0 0 30px; padding-left: 20px;">
                                <li>"Will leads know it's AI?" - We design for natural conversation and transparency</li>
                                <li>"What about complex questions?" - Seamless handoff to your team when needed</li>
                                <li>"Can it handle our industry?" - We've worked with 500+ businesses across 20+ industries</li>
                                <li>"What if we need changes?" - Unlimited optimization included in all packages</li>
                            </ul>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px;">
                                Want to discuss any of this?
                            </p>

                            <!-- CTA Buttons -->
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="padding: 10px 0;">
                                        <a href="{{calendar_link}}" style="display: inline-block; padding: 16px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 6px; margin: 0 5px 10px;">
                                            Schedule a Quick Call →
                                        </a>
                                        <a href="mailto:team@captureclient.net?subject=Questions about proposal" style="display: inline-block; padding: 16px 40px; background-color: #ffffff; color: #667eea; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 6px; border: 2px solid #667eea; margin: 0 5px 10px;">
                                            Reply With Questions
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding: 30px; background-color: #f8f9fa; border-radius: 0 0 8px 8px;">
                            <p style="font-size: 14px; line-height: 22px; color: #666666; margin: 0;">
                                Here to help,<br><br>
                                The Capture Client Team<br>
                                <a href="mailto:team@captureclient.net" style="color: #667eea; text-decoration: none;">team@captureclient.net</a>
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
```

---

### Proposal Email 2: Day 7 Final Follow-up

**Subject**: Last Call: Your Proposal Expires Tonight
**Preheader**: Special offer ends today - $500 setup fee waiver

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Final Follow-up</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <!-- Urgency Banner -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%); padding: 15px; text-align: center; border-radius: 8px 8px 0 0;">
                            <p style="color: #ffffff; margin: 0; font-size: 14px; font-weight: bold; text-transform: uppercase;">
                                ⏰ OFFER EXPIRES TONIGHT AT MIDNIGHT
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 20px;">
                                Hi {{contact.first_name}},
                            </p>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px;">
                                This is my final follow-up regarding your AI Voice Agent proposal.
                            </p>

                            <!-- Offer Box -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 25px; border-radius: 8px; text-align: center;">
                                        <p style="color: #ffffff; font-size: 18px; line-height: 26px; margin: 0 0 15px;">
                                            Your special offer expires <strong>tonight at midnight:</strong>
                                        </p>
                                        <ul style="font-size: 15px; line-height: 26px; color: #ffffff; margin: 0; padding-left: 20px; text-align: left;">
                                            <li>$500 setup fee waived</li>
                                            <li>Month 1 CRM free ($197 value)</li>
                                            <li>Priority onboarding (48-hour go-live)</li>
                                        </ul>
                                        <p style="color: #ffffff; font-size: 18px; font-weight: bold; margin: 20px 0 0;">
                                            TOTAL SAVINGS: $697
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 20px; text-align: center;">
                                <strong>YOUR PROPOSAL:</strong>
                            </p>

                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td align="center">
                                        <a href="{{proposal_link}}" style="display: inline-block; padding: 16px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 6px;">
                                            View Proposal →
                                        </a>
                                    </td>
                                </tr>
                            </table>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 20px;">
                                I respect that you may have decided:
                            </p>

                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="padding: 12px; background-color: #e8f5e9; border-left: 3px solid #4caf50; border-radius: 4px; margin-bottom: 10px;">
                                        <p style="font-size: 14px; color: #2e7d32; margin: 0;">
                                            ✓ <strong>"YES"</strong> - Click below to accept and we'll start tomorrow
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px; background-color: #fff3cd; border-left: 3px solid #ffc107; border-radius: 4px; margin-bottom: 10px;">
                                        <p style="font-size: 14px; color: #856404; margin: 0;">
                                            ✓ <strong>"NOT NOW"</strong> - That's okay! We'll be here when you're ready
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px; background-color: #e3f2fd; border-left: 3px solid #2196F3; border-radius: 4px;">
                                        <p style="font-size: 14px; color: #1976D2; margin: 0;">
                                            ✓ <strong>"NEED MORE INFO"</strong> - Let's schedule a quick call
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px;">
                                Whatever you decide, I appreciate the time you've given us.
                            </p>

                            <!-- Final Thought -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background-color: #f8f9fa; padding: 25px; border-left: 4px solid #667eea; border-radius: 4px;">
                                        <h4 style="color: #667eea; margin: 0 0 15px; font-size: 18px;">A FINAL THOUGHT:</h4>
                                        <p style="font-size: 15px; line-height: 24px; color: #333333; margin: 0 0 15px;">
                                            The businesses thriving in 2024 are the ones embracing AI automation. Not because it's trendy, but because it works.
                                        </p>
                                        <p style="font-size: 15px; line-height: 24px; color: #333333; margin: 0;">
                                            Your competitors are either:
                                        </p>
                                        <ol style="font-size: 15px; line-height: 24px; color: #333333; margin: 10px 0 0; padding-left: 20px;">
                                            <li>Already using AI Voice Agents (getting more leads, better conversion)</li>
                                            <li>About to start (they're having the same conversation you are)</li>
                                            <li>Falling behind (losing market share to #1 and #2)</li>
                                        </ol>
                                        <p style="font-size: 15px; line-height: 24px; color: #333333; margin: 15px 0 0; font-weight: bold;">
                                            Where do you want your business to be?
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <!-- CTA Buttons -->
                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 20px; text-align: center; font-weight: bold;">
                                IF YOU'RE READY:
                            </p>

                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td align="center" style="padding: 10px 0;">
                                        <a href="{{proposal_link}}" style="display: inline-block; padding: 18px 50px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; font-size: 18px; font-weight: bold; border-radius: 6px; margin: 0 5px 15px;">
                                            Accept Proposal (Save $697) →
                                        </a>
                                        <a href="{{calendar_link}}" style="display: inline-block; padding: 14px 40px; background-color: #ffffff; color: #667eea; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 6px; border: 2px solid #667eea; margin: 0 5px 10px;">
                                            Schedule Final Call
                                        </a>
                                    </td>
                                </tr>
                            </table>

                            <!-- Not Ready Section -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background-color: #f8f9fa; padding: 20px; border-radius: 6px;">
                                        <p style="font-size: 14px; line-height: 22px; color: #666666; margin: 0 0 10px;">
                                            <strong>IF YOU'RE NOT READY:</strong>
                                        </p>
                                        <p style="font-size: 14px; line-height: 22px; color: #666666; margin: 0;">
                                            No hard feelings! I'll move you to our monthly newsletter where you'll get AI automation tips, industry insights, case studies, and special offers. You can reach out anytime: team@captureclient.net
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <p style="font-size: 15px; line-height: 24px; color: #333333; margin: 0; text-align: center;">
                                <strong>Thank you for considering Capture Client.</strong><br>
                                Whether you move forward now or later (or never), I wish you success in your business.
                            </p>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding: 30px; background-color: #f8f9fa; border-radius: 0 0 8px 8px;">
                            <p style="font-size: 14px; line-height: 22px; color: #666666; margin: 0;">
                                All the best,<br><br>
                                The Capture Client Team<br>
                                Knoxville, TN<br>
                                <a href="mailto:team@captureclient.net" style="color: #667eea; text-decoration: none;">team@captureclient.net</a>
                            </p>
                            <p style="font-size: 12px; line-height: 18px; color: #999999; margin: 15px 0 0; font-style: italic;">
                                P.S. Reply "NOT INTERESTED" and I'll make sure you don't receive any more sales emails from us. We respect your time.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
```

---

## ONBOARDING SEQUENCE

### Onboarding Email: Welcome (Day 0)

**Subject**: Welcome to Capture Client! Let's Get You Live in 48 Hours
**Preheader**: Your AI Voice Agent journey starts now

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Capture Client</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <!-- Celebration Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #4caf50 0%, #2e7d32 100%); padding: 40px 30px; text-align: center; border-radius: 8px 8px 0 0;">
                            <div style="font-size: 48px; margin-bottom: 15px;">🎉</div>
                            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">Welcome to Capture Client!</h1>
                            <p style="color: #ffffff; margin: 10px 0 0; font-size: 16px;">Let's transform your lead generation together</p>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 20px;">
                                Hi {{contact.first_name}},
                            </p>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 20px;">
                                Welcome to the Capture Client family!
                            </p>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px;">
                                We're thrilled to help you automate your lead generation and scale your business with AI Voice Agents. You've made a smart investment, and we're committed to making sure you see results fast.
                            </p>

                            <!-- Timeline -->
                            <h3 style="color: #333333; margin: 0 0 20px; font-size: 22px;">
                                WHAT HAPPENS NEXT:
                            </h3>

                            <!-- Day 0 -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 15px;">
                                <tr>
                                    <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 8px;">
                                        <h4 style="color: #ffffff; margin: 0 0 10px; font-size: 16px;">TODAY (Day 0):</h4>
                                        <ul style="font-size: 14px; line-height: 24px; color: #ffffff; margin: 0; padding-left: 20px;">
                                            <li>✓ Contract signed</li>
                                            <li>✓ Payment processed</li>
                                            <li>✓ Welcome email (you're reading it!)</li>
                                            <li>✓ Account creation in progress</li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>

                            <!-- Day 1 -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 15px;">
                                <tr>
                                    <td style="background-color: #f0f7ff; padding: 20px; border-left: 4px solid #2196F3; border-radius: 4px;">
                                        <h4 style="color: #1976D2; margin: 0 0 10px; font-size: 16px;">TOMORROW (Day 1):</h4>
                                        <ul style="font-size: 14px; line-height: 24px; color: #333333; margin: 0; padding-left: 20px;">
                                            <li>Kickoff call scheduled (30 minutes)</li>
                                            <li>Custom AI training begins</li>
                                            <li>Integration setup starts</li>
                                            <li>You receive access to your dashboard</li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>

                            <!-- Day 2 -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background-color: #e8f5e9; padding: 20px; border-left: 4px solid #4caf50; border-radius: 4px;">
                                        <h4 style="color: #2e7d32; margin: 0 0 10px; font-size: 16px;">DAY 2 (48 HOURS):</h4>
                                        <ul style="font-size: 14px; line-height: 24px; color: #2e7d32; margin: 0; padding-left: 20px;">
                                            <li><strong>AI Voice Agent goes LIVE</strong></li>
                                            <li>Final testing and optimization</li>
                                            <li>Team training session</li>
                                            <li><strong>You start capturing leads!</strong></li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>

                            <!-- Onboarding Team -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background-color: #fff3cd; padding: 20px; border-left: 4px solid #ffc107; border-radius: 4px;">
                                        <h4 style="color: #856404; margin: 0 0 10px; font-size: 16px;">👤 YOUR ONBOARDING TEAM:</h4>
                                        <p style="font-size: 14px; line-height: 22px; color: #856404; margin: 0;">
                                            You've been assigned a dedicated onboarding specialist: <strong>{{onboarding_specialist_name}}</strong><br>
                                            Email: {{specialist_email}}<br>
                                            Phone: {{specialist_phone}}<br><br>
                                            They'll guide you through every step.
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <!-- Preparation -->
                            <h3 style="color: #333333; margin: 0 0 15px; font-size: 20px;">
                                TO PREPARE FOR YOUR KICKOFF CALL:
                            </h3>

                            <p style="font-size: 15px; line-height: 24px; color: #333333; margin: 0 0 15px;">
                                Please have ready:
                            </p>

                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background-color: #f8f9fa; padding: 20px; border-radius: 6px;">
                                        <p style="font-size: 14px; font-weight: bold; color: #333333; margin: 0 0 10px;">1. ACCESS CREDENTIALS:</p>
                                        <ul style="font-size: 14px; line-height: 22px; color: #555555; margin: 0 0 15px; padding-left: 20px;">
                                            <li>Your CRM login (if using existing)</li>
                                            <li>Phone system admin access</li>
                                            <li>Calendar integration preferences</li>
                                        </ul>

                                        <p style="font-size: 14px; font-weight: bold; color: #333333; margin: 0 0 10px;">2. BUSINESS INFORMATION:</p>
                                        <ul style="font-size: 14px; line-height: 22px; color: #555555; margin: 0 0 15px; padding-left: 20px;">
                                            <li>Services and pricing details</li>
                                            <li>Lead qualification criteria</li>
                                            <li>Common questions/objections</li>
                                            <li>Scheduling preferences</li>
                                        </ul>

                                        <p style="font-size: 14px; font-weight: bold; color: #333333; margin: 0 0 10px;">3. SCRIPTS & MATERIALS:</p>
                                        <ul style="font-size: 14px; line-height: 22px; color: #555555; margin: 0; padding-left: 20px;">
                                            <li>Current phone scripts (if any)</li>
                                            <li>Email templates you use</li>
                                            <li>FAQ documents</li>
                                            <li>Brand voice guidelines</li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>

                            <!-- Quick Links -->
                            <h3 style="color: #333333; margin: 0 0 20px; font-size: 20px;">
                                QUICK LINKS:
                            </h3>

                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="padding: 10px 0;">
                                        <a href="{{kickoff_calendar_link}}" style="display: block; padding: 12px 20px; background-color: #f8f9fa; color: #667eea; text-decoration: none; font-size: 15px; border-left: 3px solid #667eea; border-radius: 4px; margin-bottom: 10px;">
                                            📅 Schedule Kickoff Call
                                        </a>
                                        <a href="{{dashboard_link}}" style="display: block; padding: 12px 20px; background-color: #f8f9fa; color: #667eea; text-decoration: none; font-size: 15px; border-left: 3px solid #667eea; border-radius: 4px; margin-bottom: 10px;">
                                            📊 Access Your Dashboard
                                        </a>
                                        <a href="{{checklist_link}}" style="display: block; padding: 12px 20px; background-color: #f8f9fa; color: #667eea; text-decoration: none; font-size: 15px; border-left: 3px solid #667eea; border-radius: 4px; margin-bottom: 10px;">
                                            📚 Onboarding Checklist
                                        </a>
                                        <a href="{{slack_invite_link}}" style="display: block; padding: 12px 20px; background-color: #f8f9fa; color: #667eea; text-decoration: none; font-size: 15px; border-left: 3px solid #667eea; border-radius: 4px; margin-bottom: 10px;">
                                            💬 Join Our Client Slack
                                        </a>
                                    </td>
                                </tr>
                            </table>

                            <!-- Package Info -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 8px;">
                                        <h4 style="color: #ffffff; margin: 0 0 10px; font-size: 16px;">YOUR PACKAGE:</h4>
                                        <p style="color: #ffffff; font-size: 15px; line-height: 24px; margin: 0;">
                                            <strong>{{package_name}}</strong> - ${{package_price}}/month<br>
                                            {{package_features}}
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px; text-align: center;">
                                <strong>Welcome aboard! Let's transform your lead generation together.</strong>
                            </p>

                            <!-- CTA Buttons -->
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="padding: 10px 0;">
                                        <a href="{{kickoff_calendar_link}}" style="display: inline-block; padding: 16px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 6px; margin: 0 5px 10px;">
                                            Schedule Your Kickoff Call →
                                        </a>
                                        <a href="{{dashboard_link}}" style="display: inline-block; padding: 16px 40px; background-color: #ffffff; color: #667eea; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 6px; border: 2px solid #667eea; margin: 0 5px 10px;">
                                            Access Dashboard
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding: 30px; background-color: #f8f9fa; border-radius: 0 0 8px 8px;">
                            <p style="font-size: 14px; line-height: 22px; color: #666666; margin: 0;">
                                Excited to work with you,<br><br>
                                The Capture Client Team<br>
                                Knoxville, TN<br>
                                <a href="mailto:team@captureclient.net" style="color: #667eea; text-decoration: none;">team@captureclient.net</a>
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
```

---

## RE-ENGAGEMENT SEQUENCE

### Re-engagement Email: We Miss You

**Subject**: We Miss You - What Happened?
**Preheader**: Let's reconnect and see how we can help

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>We Miss You</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 20px;">
                                Hi {{contact.first_name}},
                            </p>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px;">
                                It's been a while since we last connected. I wanted to reach out personally because I'm genuinely curious: <strong>what happened?</strong>
                            </p>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 15px;">
                                When we first talked, you seemed interested in:
                            </p>

                            <ul style="font-size: 15px; line-height: 26px; color: #667eea; margin: 0 0 30px; padding-left: 20px;">
                                <li>Automating your lead generation</li>
                                <li>Improving response times</li>
                                <li>Scaling without more staff</li>
                                <li>Increasing conversion rates</li>
                            </ul>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px;">
                                <strong>Did something change?</strong>
                            </p>

                            <!-- Not Here to Sell -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background-color: #f0f7ff; padding: 25px; border-left: 4px solid #2196F3; border-radius: 4px;">
                                        <h3 style="color: #1976D2; margin: 0 0 15px; font-size: 20px;">I'M NOT HERE TO SELL:</h3>
                                        <p style="font-size: 15px; line-height: 24px; color: #333333; margin: 0 0 10px;">
                                            I'm reaching out because:
                                        </p>
                                        <ol style="font-size: 15px; line-height: 24px; color: #333333; margin: 0; padding-left: 20px;">
                                            <li>We may have missed something in our initial conversation</li>
                                            <li>Your situation may have changed</li>
                                            <li>We've added new features that might be relevant</li>
                                            <li>I want to understand what we could have done better</li>
                                        </ol>
                                    </td>
                                </tr>
                            </table>

                            <!-- What's Changed -->
                            <h3 style="color: #333333; margin: 0 0 15px; font-size: 20px;">
                                WHAT'S CHANGED SINCE WE LAST TALKED:
                            </h3>

                            <p style="font-size: 15px; line-height: 24px; color: #333333; margin: 0 0 15px;">
                                A lot has happened at Capture Client:
                            </p>

                            <ul style="font-size: 15px; line-height: 26px; color: #4caf50; margin: 0 0 30px; padding-left: 20px;">
                                <li>✓ New affordable starter packages (from $999/month)</li>
                                <li>✓ Even faster setup (now 24-48 hours)</li>
                                <li>✓ Expanded CRM capabilities</li>
                                <li>✓ Multi-language support</li>
                                <li>✓ Enhanced analytics dashboard</li>
                                <li>✓ 500+ businesses now served (was 300+ when we talked)</li>
                            </ul>

                            <!-- Common Reasons -->
                            <h3 style="color: #333333; margin: 0 0 15px; font-size: 20px;">
                                COMMON REASONS FOR NOT MOVING FORWARD:
                            </h3>

                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background-color: #f8f9fa; padding: 15px; border-radius: 6px; margin-bottom: 10px;">
                                        <p style="font-size: 14px; font-weight: bold; color: #333333; margin: 0 0 8px;">"Not the right time"</p>
                                        <p style="font-size: 14px; line-height: 22px; color: #666666; margin: 0;">
                                            • Has timing improved?<br>
                                            • What would make it the right time?
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background-color: #f8f9fa; padding: 15px; border-radius: 6px;">
                                        <p style="font-size: 14px; font-weight: bold; color: #333333; margin: 0 0 8px;">"Budget concerns"</p>
                                        <p style="font-size: 14px; line-height: 22px; color: #666666; margin: 0;">
                                            • We've added more affordable options<br>
                                            • Most clients see 3-5x ROI within 90 days<br>
                                            • Month-to-month, no long-term commitment
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <!-- Industry Moving Fast -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background-color: #fff3cd; padding: 20px; border-left: 4px solid #ffc107; border-radius: 4px;">
                                        <h4 style="color: #856404; margin: 0 0 10px; font-size: 16px;">⚡ THE INDUSTRY IS MOVING FAST:</h4>
                                        <p style="font-size: 14px; line-height: 22px; color: #856404; margin: 0;">
                                            Since we last talked:<br>
                                            • 73% more businesses are using AI Voice Agents<br>
                                            • Average lead response time has dropped 80%<br>
                                            • Companies without AI automation are losing market share<br><br>
                                            The question isn't "if" you'll adopt AI, it's "when."<br>
                                            <strong>Will it be before or after your competitors?</strong>
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px;">
                                I'd genuinely love to reconnect and understand where you're at. Even if you're not interested in Capture Client, maybe I can help in another way - share best practices, recommend other solutions, or just chat about lead generation challenges.
                            </p>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px; text-align: center;">
                                <strong>15 minutes?</strong>
                            </p>

                            <!-- CTA Buttons -->
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="padding: 10px 0;">
                                        <a href="{{calendar_link}}" style="display: inline-block; padding: 16px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 6px; margin: 0 5px 10px;">
                                            Let's Reconnect →
                                        </a>
                                        <a href="mailto:team@captureclient.net?subject=Please remove me from your list" style="display: inline-block; padding: 12px 30px; background-color: #ffffff; color: #999999; text-decoration: none; font-size: 14px; border-radius: 6px; margin: 0 5px 10px;">
                                            Not Interested (Remove Me)
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding: 30px; background-color: #f8f9fa; border-radius: 0 0 8px 8px;">
                            <p style="font-size: 14px; line-height: 22px; color: #666666; margin: 0;">
                                Hoping to hear from you,<br><br>
                                The Capture Client Team<br>
                                <a href="mailto:team@captureclient.net" style="color: #667eea; text-decoration: none;">team@captureclient.net</a>
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
```

---

## Implementation Guidelines

### Personalization Strategy
**Dynamic Content Based on:**
- Lead source (Google Ads, Facebook, Referral, Website)
- Industry (adjust case studies and examples)
- Company size (emphasize different benefits)
- Previous interactions (reference specific conversations)
- Stage in journey (new lead vs. returning prospect)

### Email Cadence Best Practices
**Welcome Sequence**: Days 0, 2, 5, 9, 14
**Demo Sequence**: Immediate, -24h, -1h, +1h
**Proposal Follow-up**: Day 0, 2, 5, 7
**Onboarding**: Day 0, 1, 7, 30
**Re-engagement**: Every 7 days (3 emails total)

### Subject Line Testing
Test variations:
- Question vs. statement
- Personalization (name/company)
- Urgency level
- Emoji usage
- Length (40-50 characters ideal)

### Mobile Optimization Checklist
- [ ] Single column layout
- [ ] Minimum 16px font size
- [ ] Touch-friendly buttons (44px minimum)
- [ ] Compressed images
- [ ] Short paragraphs (3-4 lines max)
- [ ] Preview text optimized

### Compliance & Deliverability
- **CAN-SPAM**: Clear sender, physical address, unsubscribe link
- **GDPR**: Consent tracking, data processing agreements
- **Authentication**: SPF, DKIM, DMARC configured
- **List hygiene**: Remove bounces, honor unsubscribes immediately
- **Engagement**: Remove inactive subscribers after 90 days

### A/B Testing Roadmap
**Month 1**: Subject lines
**Month 2**: CTA button text and placement
**Month 3**: Email length (long-form vs. concise)
**Month 4**: Tone (professional vs. conversational)
**Month 5**: Social proof placement
**Month 6**: Offer type and timing

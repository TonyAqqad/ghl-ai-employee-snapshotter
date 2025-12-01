# Demo Confirmation & Reminder Email Templates

**Business**: Capture Client
**Purpose**: Demo confirmation, reminders, and post-demo follow-up
**Workflow**: email-demo-sequence.json

---

## Email 1: Demo Confirmation (Immediate)

### Subject Line
Your AI Voice Agent Demo is Confirmed - {{appointment.date}}

### Preheader
We're excited to show you how AI can transform your business

### Email Content (HTML)

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo Confirmed</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <!-- Header with Checkmark -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #4caf50 0%, #2e7d32 100%); padding: 40px 30px; text-align: center; border-radius: 8px 8px 0 0;">
                            <div style="background-color: #ffffff; width: 60px; height: 60px; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                                <span style="font-size: 36px; color: #4caf50;">✓</span>
                            </div>
                            <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: bold;">Demo Confirmed!</h1>
                        </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 20px;">
                                Hi {{contact.first_name}},
                            </p>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px;">
                                Great news! Your AI Voice Agent demo is confirmed.
                            </p>

                            <!-- Demo Details Box -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 25px; border-radius: 8px;">
                                        <h3 style="color: #ffffff; margin: 0 0 20px; font-size: 20px; text-align: center;">
                                            DEMO DETAILS
                                        </h3>
                                        <table width="100%" cellpadding="8" cellspacing="0">
                                            <tr>
                                                <td style="color: #ffffff; font-size: 15px; padding: 8px 0;">
                                                    <strong>📅 Date:</strong> {{appointment.date}}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="color: #ffffff; font-size: 15px; padding: 8px 0;">
                                                    <strong>🕐 Time:</strong> {{appointment.time}} {{appointment.timezone}}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="color: #ffffff; font-size: 15px; padding: 8px 0;">
                                                    <strong>⏱️ Duration:</strong> 30 minutes
                                                </td>
                                            </tr>
                                        </table>
                                        <table width="100%" cellpadding="0" cellspacing="0" style="margin: 15px 0 0;">
                                            <tr>
                                                <td align="center">
                                                    <a href="{{appointment.meeting_link}}" style="display: inline-block; padding: 12px 30px; background-color: #ffffff; color: #667eea; text-decoration: none; font-size: 15px; font-weight: bold; border-radius: 6px;">
                                                        📹 Join Meeting
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            <!-- What to Expect -->
                            <h3 style="color: #333333; margin: 0 0 15px; font-size: 20px;">
                                WHAT TO EXPECT:
                            </h3>

                            <p style="font-size: 15px; line-height: 24px; color: #333333; margin: 0 0 15px;">
                                During your demo, we'll:
                            </p>

                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="padding: 12px; background-color: #f8f9fa; border-left: 3px solid #667eea; margin-bottom: 10px;">
                                        <p style="font-size: 14px; line-height: 22px; color: #333333; margin: 0;">
                                            <strong>1.</strong> Show you our AI Voice Agent in action (live calls)
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px; background-color: #f8f9fa; border-left: 3px solid #667eea;">
                                        <p style="font-size: 14px; line-height: 22px; color: #333333; margin: 0;">
                                            <strong>2.</strong> Discuss your specific lead generation challenges
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px; background-color: #f8f9fa; border-left: 3px solid #667eea;">
                                        <p style="font-size: 14px; line-height: 22px; color: #333333; margin: 0;">
                                            <strong>3.</strong> Explain how we'd customize the system for your business
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px; background-color: #f8f9fa; border-left: 3px solid #667eea;">
                                        <p style="font-size: 14px; line-height: 22px; color: #333333; margin: 0;">
                                            <strong>4.</strong> Answer all your questions
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px; background-color: #f8f9fa; border-left: 3px solid #667eea;">
                                        <p style="font-size: 14px; line-height: 22px; color: #333333; margin: 0;">
                                            <strong>5.</strong> Provide a custom pricing proposal (if you're ready)
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <!-- To Get Most Value -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background-color: #fff3cd; padding: 20px; border-left: 4px solid #ffc107; border-radius: 4px;">
                                        <h4 style="color: #856404; margin: 0 0 10px; font-size: 16px;">💡 TO GET THE MOST VALUE:</h4>
                                        <p style="font-size: 14px; line-height: 22px; color: #856404; margin: 0 0 10px;">
                                            Please have ready:
                                        </p>
                                        <ul style="font-size: 14px; line-height: 22px; color: #856404; margin: 0; padding-left: 20px;">
                                            <li>Current lead volume and sources</li>
                                            <li>Your qualification criteria</li>
                                            <li>Integration requirements (CRM, phone system)</li>
                                            <li>Any specific questions or concerns</li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>

                            <p style="font-size: 15px; line-height: 24px; color: #333333; margin: 0 0 20px;">
                                <strong>CALENDAR INVITE:</strong><br>
                                A calendar invite has been sent to {{contact.email}}
                            </p>

                            <p style="font-size: 15px; line-height: 24px; color: #333333; margin: 0 0 30px;">
                                <strong>NEED TO RESCHEDULE?</strong><br>
                                No problem! <a href="{{reschedule_link}}" style="color: #667eea; text-decoration: none;">Click here to reschedule</a>
                            </p>

                            <p style="font-size: 15px; line-height: 24px; color: #333333; margin: 0 0 30px;">
                                Want to come prepared? Watch this 3-minute overview:
                            </p>

                            <!-- CTA Buttons -->
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="padding: 10px 0;">
                                        <a href="{{overview_video_link}}" style="display: inline-block; padding: 16px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 6px; margin: 0 5px 10px;">
                                            Watch Pre-Demo Video →
                                        </a>
                                        <a href="{{calendar_file_link}}" style="display: inline-block; padding: 16px 40px; background-color: #ffffff; color: #667eea; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 6px; border: 2px solid #667eea; margin: 0 5px 10px;">
                                            Add to Calendar
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
                                Looking forward to meeting you!<br><br>
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

## Email 2: 24-Hour Reminder

### Subject Line
Reminder: Your Demo Tomorrow at {{appointment.time}}

### Preheader
Everything you need for tomorrow's demo

### Email Content (HTML)

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo Reminder - 24 Hours</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold;">Demo Tomorrow!</h1>
                            <p style="color: #ffffff; margin: 10px 0 0; font-size: 16px;">We're looking forward to it</p>
                        </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 20px;">
                                Hi {{contact.first_name}},
                            </p>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px;">
                                This is a friendly reminder about your AI Voice Agent demo tomorrow.
                            </p>

                            <!-- Demo Details -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background-color: #f0f7ff; padding: 20px; border-left: 4px solid #2196F3; border-radius: 4px;">
                                        <h3 style="color: #1976D2; margin: 0 0 15px; font-size: 18px;">📅 DEMO DETAILS</h3>
                                        <p style="font-size: 15px; line-height: 24px; color: #333333; margin: 0;">
                                            <strong>Tomorrow:</strong> {{appointment.date}}<br>
                                            <strong>Time:</strong> {{appointment.time}} {{appointment.timezone}}<br>
                                            <strong>Meeting Link:</strong> <a href="{{appointment.meeting_link}}" style="color: #2196F3; text-decoration: none;">Click to join</a>
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <!-- Prep Checklist -->
                            <h3 style="color: #333333; margin: 0 0 15px; font-size: 20px;">
                                PREP CHECKLIST:
                            </h3>

                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="padding: 10px 0;">
                                        <table width="100%" cellpadding="8" cellspacing="0">
                                            <tr>
                                                <td style="background-color: #e8f5e9; padding: 10px 15px; border-radius: 4px; margin-bottom: 8px;">
                                                    <span style="color: #2e7d32; font-size: 15px;">✓ Test your audio/video (if video demo)</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="background-color: #e8f5e9; padding: 10px 15px; border-radius: 4px; margin-bottom: 8px;">
                                                    <span style="color: #2e7d32; font-size: 15px;">✓ Review your current lead flow process</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="background-color: #e8f5e9; padding: 10px 15px; border-radius: 4px; margin-bottom: 8px;">
                                                    <span style="color: #2e7d32; font-size: 15px;">✓ List your top 3 lead generation challenges</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="background-color: #e8f5e9; padding: 10px 15px; border-radius: 4px; margin-bottom: 8px;">
                                                    <span style="color: #2e7d32; font-size: 15px;">✓ Think about your ideal outcome</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="background-color: #e8f5e9; padding: 10px 15px; border-radius: 4px;">
                                                    <span style="color: #2e7d32; font-size: 15px;">✓ Prepare any questions</span>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            <!-- What You'll See -->
                            <h3 style="color: #333333; margin: 0 0 15px; font-size: 20px;">
                                WHAT YOU'LL SEE:
                            </h3>

                            <ul style="font-size: 15px; line-height: 26px; color: #333333; margin: 0 0 30px; padding-left: 20px;">
                                <li>Live AI Voice Agent demonstrations</li>
                                <li>Real call recordings and transcriptions</li>
                                <li>Custom implementation roadmap</li>
                                <li>Pricing tailored to your needs</li>
                                <li>ROI calculator for your business</li>
                            </ul>

                            <!-- Questions Box -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background-color: #fff3cd; padding: 20px; border-left: 4px solid #ffc107; border-radius: 4px;">
                                        <p style="font-size: 15px; line-height: 24px; color: #856404; margin: 0;">
                                            <strong>QUESTIONS BEFORE WE MEET?</strong><br>
                                            Reply to this email or call: {{phone_number}}
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <p style="font-size: 15px; line-height: 24px; color: #333333; margin: 0 0 30px;">
                                <strong>NEED TO RESCHEDULE?</strong><br>
                                <a href="{{reschedule_link}}" style="color: #667eea; text-decoration: none;">Click here to reschedule</a>
                            </p>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px; text-align: center;">
                                <strong>See you tomorrow!</strong>
                            </p>

                            <!-- CTA Button -->
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="padding: 10px 0 30px;">
                                        <a href="{{appointment.meeting_link}}" style="display: inline-block; padding: 16px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 6px;">
                                            Join Meeting Tomorrow →
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

## Email 3: 1-Hour Reminder

### Subject Line
Starting in 1 Hour: Your AI Voice Agent Demo

### Preheader
Your meeting link is ready

### Email Content (HTML)

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0;">
    <title>Demo Starting Soon</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); border-top: 6px solid #e74c3c;">
                    <!-- Urgency Header -->
                    <tr>
                        <td style="padding: 30px 30px 20px; text-align: center;">
                            <div style="background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%); color: #ffffff; padding: 15px 20px; border-radius: 8px; display: inline-block; margin-bottom: 20px;">
                                <span style="font-size: 20px; font-weight: bold;">⏰ STARTING IN 1 HOUR</span>
                            </div>
                        </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                        <td style="padding: 0 30px 40px;">
                            <p style="font-size: 18px; line-height: 26px; color: #333333; margin: 0 0 20px; text-align: center;">
                                Hi {{contact.first_name}},
                            </p>

                            <p style="font-size: 18px; line-height: 26px; color: #333333; margin: 0 0 30px; text-align: center;">
                                Your demo starts in <strong>1 hour</strong>!
                            </p>

                            <!-- Quick Details -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background-color: #f0f7ff; padding: 20px; border-radius: 8px; text-align: center;">
                                        <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 10px;">
                                            <strong>Time:</strong> {{appointment.time}} {{appointment.timezone}}
                                        </p>
                                        <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0;">
                                            <strong>Duration:</strong> 30 minutes
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px; text-align: center; font-weight: bold;">
                                ONE-CLICK JOIN:
                            </p>

                            <!-- Large CTA Button -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td align="center" style="padding: 10px 0;">
                                        <a href="{{appointment.meeting_link}}" style="display: inline-block; padding: 20px 60px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; font-size: 20px; font-weight: bold; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                                            Join Demo Now →
                                        </a>
                                    </td>
                                </tr>
                            </table>

                            <!-- Technical Check -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background-color: #f8f9fa; padding: 20px; border-left: 4px solid #667eea; border-radius: 4px;">
                                        <h4 style="color: #667eea; margin: 0 0 10px; font-size: 16px;">📋 TECHNICAL CHECK:</h4>
                                        <ul style="font-size: 14px; line-height: 22px; color: #555555; margin: 0; padding-left: 20px;">
                                            <li>Camera & microphone working?</li>
                                            <li>Quiet location ready?</li>
                                            <li>Notepad for questions?</li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>

                            <p style="font-size: 15px; line-height: 24px; color: #666666; margin: 0; text-align: center; font-style: italic;">
                                Running late? No problem - just let us know.
                            </p>

                            <p style="font-size: 18px; line-height: 26px; color: #333333; margin: 20px 0 0; text-align: center; font-weight: bold;">
                                See you soon!
                            </p>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding: 30px; background-color: #f8f9fa; border-radius: 0 0 8px 8px;">
                            <p style="font-size: 14px; line-height: 22px; color: #666666; margin: 0; text-align: center;">
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

## Email 4: Post-Demo Thank You & Next Steps

### Subject Line
Thanks for Your Time + Next Steps

### Preheader
Your custom proposal and resources

### Email Content (HTML)

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Post-Demo Follow-up</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center; border-radius: 8px 8px 0 0;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: bold;">Thank You!</h1>
                        </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 20px;">
                                Hi {{contact.first_name}},
                            </p>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px;">
                                Thank you for taking the time to meet with us today!
                            </p>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px;">
                                It was great learning about <strong>{{contact.company}}</strong> and how we can help automate your lead generation.
                            </p>

                            <!-- Proposal Box -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background: linear-gradient(135deg, #4caf50 0%, #2e7d32 100%); padding: 25px; border-radius: 8px; text-align: center;">
                                        <h3 style="color: #ffffff; margin: 0 0 15px; font-size: 20px;">
                                            AS PROMISED:
                                        </h3>
                                        <p style="color: #ffffff; font-size: 16px; margin: 0 0 20px;">
                                            Here's your custom proposal
                                        </p>
                                        <a href="{{proposal_link}}" style="display: inline-block; padding: 14px 40px; background-color: #ffffff; color: #2e7d32; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 6px;">
                                            📄 View Your Proposal →
                                        </a>
                                    </td>
                                </tr>
                            </table>

                            <!-- What's Included -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background-color: #f0f7ff; padding: 20px; border-left: 4px solid #2196F3; border-radius: 4px;">
                                        <h4 style="color: #1976D2; margin: 0 0 10px; font-size: 16px;">THIS INCLUDES:</h4>
                                        <ul style="font-size: 14px; line-height: 24px; color: #555555; margin: 0; padding-left: 20px;">
                                            <li>Recommended package for your needs</li>
                                            <li>Custom pricing breakdown</li>
                                            <li>Implementation timeline</li>
                                            <li>Expected ROI calculation</li>
                                            <li>Integration details</li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>

                            <!-- Next Steps -->
                            <h3 style="color: #333333; margin: 0 0 20px; font-size: 22px;">
                                NEXT STEPS:
                            </h3>

                            <!-- Step 1 -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 15px;">
                                <tr>
                                    <td style="background-color: #f8f9fa; padding: 15px 20px; border-left: 3px solid #667eea; border-radius: 4px;">
                                        <h4 style="color: #667eea; margin: 0 0 5px; font-size: 16px;">1. REVIEW YOUR PROPOSAL</h4>
                                        <p style="font-size: 14px; line-height: 22px; color: #555555; margin: 0;">
                                            Take your time reviewing the details. Everything is customized based on our conversation.
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <!-- Step 2 -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 15px;">
                                <tr>
                                    <td style="background-color: #f8f9fa; padding: 15px 20px; border-left: 3px solid #764ba2; border-radius: 4px;">
                                        <h4 style="color: #764ba2; margin: 0 0 5px; font-size: 16px;">2. QUESTIONS?</h4>
                                        <p style="font-size: 14px; line-height: 22px; color: #555555; margin: 0;">
                                            I'm here to help! Reply to this email or <a href="{{calendar_link}}" style="color: #764ba2; text-decoration: none;">schedule another call</a>.
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <!-- Step 3 -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background-color: #f8f9fa; padding: 15px 20px; border-left: 3px solid #667eea; border-radius: 4px;">
                                        <h4 style="color: #667eea; margin: 0 0 5px; font-size: 16px;">3. READY TO START?</h4>
                                        <p style="font-size: 14px; line-height: 22px; color: #555555; margin: 0;">
                                            Click below to accept the proposal and we'll have you live in 48 hours.
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <!-- Additional Resources -->
                            <h3 style="color: #333333; margin: 0 0 15px; font-size: 20px;">
                                ADDITIONAL RESOURCES:
                            </h3>

                            <ul style="font-size: 15px; line-height: 28px; color: #333333; margin: 0 0 30px; padding-left: 20px;">
                                <li><a href="#" style="color: #667eea; text-decoration: none;">Case Study: Similar Company Success Story</a></li>
                                <li><a href="{{faq_link}}" style="color: #667eea; text-decoration: none;">FAQ Document</a></li>
                                <li><a href="{{calculator_link}}" style="color: #667eea; text-decoration: none;">ROI Calculator</a></li>
                                <li><a href="{{testimonials_link}}" style="color: #667eea; text-decoration: none;">Customer Testimonials</a></li>
                            </ul>

                            <!-- Guarantee Box -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background-color: #e8f5e9; padding: 20px; border-left: 4px solid #4caf50; border-radius: 4px;">
                                        <h4 style="color: #2e7d32; margin: 0 0 10px; font-size: 16px;">✅ REMEMBER:</h4>
                                        <ul style="font-size: 14px; line-height: 22px; color: #2e7d32; margin: 0; padding-left: 20px;">
                                            <li>30-day money-back guarantee</li>
                                            <li>48-hour setup time</li>
                                            <li>No long-term contracts</li>
                                            <li>Full support included</li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>

                            <!-- Special Offer -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background-color: #fff3cd; padding: 20px; border-left: 4px solid #ffc107; border-radius: 4px;">
                                        <h4 style="color: #856404; margin: 0 0 10px; font-size: 16px;">🎁 OUR OFFER:</h4>
                                        <p style="font-size: 14px; line-height: 22px; color: #856404; margin: 0 0 10px;">
                                            If you get started this week, we'll include:
                                        </p>
                                        <ul style="font-size: 14px; line-height: 22px; color: #856404; margin: 0; padding-left: 20px;">
                                            <li>Setup fee waived ($500 value)</li>
                                            <li>First month CRM free ($197 value)</li>
                                            <li>Priority onboarding</li>
                                        </ul>
                                        <p style="font-size: 14px; line-height: 22px; color: #856404; margin: 10px 0 0;">
                                            <strong>Offer valid until:</strong> {{offer_expiry_date}}
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px; text-align: center;">
                                <strong>What questions can I answer?</strong>
                            </p>

                            <!-- CTA Buttons -->
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="padding: 10px 0;">
                                        <a href="{{proposal_link}}" style="display: inline-block; padding: 16px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 6px; margin: 0 5px 10px;">
                                            Review Your Proposal →
                                        </a>
                                        <a href="{{calendar_link}}" style="display: inline-block; padding: 16px 40px; background-color: #ffffff; color: #667eea; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 6px; border: 2px solid #667eea; margin: 0 5px 10px;">
                                            Schedule Follow-Up Call
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
                                Thanks again,<br><br>
                                The Capture Client Team<br>
                                <a href="mailto:team@captureclient.net" style="color: #667eea; text-decoration: none;">team@captureclient.net</a><br>
                                {{phone_number}}
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

## Implementation Notes

### SMS Integration (1-Hour Reminder)
Parallel to the 1-hour email reminder, send SMS:
```
Hi {{contact.first_name}}, your Capture Client demo starts in 1 hour. Join here: {{appointment.meeting_link}}
```

### Calendar File (.ics)
Generate ICS file with:
- Event title: "AI Voice Agent Demo - Capture Client"
- Description: Meeting link and agenda
- Reminder: 1 hour before
- Location: Virtual (include meeting link)

### No-Show Recovery Email
If prospect doesn't attend, send 30 minutes after scheduled time:

**Subject**: We Missed You - Let's Reschedule

**Content**: Brief, friendly message acknowledging the miss, offering easy reschedule, no guilt-tripping.

### Tracking & Optimization
Monitor these metrics:
- **Confirmation rate**: Opens of confirmation email
- **Calendar add rate**: Clicks on calendar button
- **Show rate**: Actual attendance vs. booked
- **Proposal view rate**: Opens of post-demo email
- **Conversion rate**: Proposal acceptance

### Best Practices
1. **Send immediately**: Confirmation within 1 minute of booking
2. **Multiple reminders**: 24-hour and 1-hour work best
3. **Mobile-friendly**: 70%+ open emails on mobile
4. **Clear CTAs**: One primary action per email
5. **Personalize**: Use appointment details, not generic text

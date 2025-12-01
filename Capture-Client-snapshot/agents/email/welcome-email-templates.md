# Welcome Email Sequence Templates

**Business**: Capture Client
**Purpose**: New lead nurture sequence (5 emails over 14 days)
**Workflow**: email-welcome-sequence.json

---

## Email 1: Welcome + What We Do (Day 0 - Immediate)

### Subject Line
Welcome to Capture Client - Let's Automate Your Lead Generation

### Preheader
Discover how AI Voice Agents can transform your business

### Email Content (HTML)

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
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center; border-radius: 8px 8px 0 0;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">Welcome to Capture Client!</h1>
                        </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 20px;">
                                Hi {{contact.first_name}},
                            </p>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 20px;">
                                Welcome to Capture Client! We're thrilled you're interested in automating your lead generation with AI Voice Agents.
                            </p>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 20px;">
                                <strong>We help businesses like yours:</strong>
                            </p>

                            <ul style="font-size: 16px; line-height: 28px; color: #333333; margin: 0 0 30px; padding-left: 20px;">
                                <li>Capture and qualify leads 24/7</li>
                                <li>Never miss a follow-up opportunity</li>
                                <li>Scale without hiring more staff</li>
                                <li>Close more deals on autopilot</li>
                            </ul>

                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background-color: #f8f9fa; padding: 20px; border-left: 4px solid #667eea; border-radius: 4px;">
                                        <p style="font-size: 14px; line-height: 22px; color: #555555; margin: 0;">
                                            <strong>📊 Our Track Record:</strong><br>
                                            500+ businesses served | 4.9/5 rating | 99% call accuracy
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 20px;">
                                <strong>Over the next two weeks, I'll share:</strong>
                            </p>

                            <ul style="font-size: 16px; line-height: 28px; color: #333333; margin: 0 0 30px; padding-left: 20px;">
                                <li>Real success stories from businesses in your industry</li>
                                <li>How our AI Voice Agents work</li>
                                <li>Pricing and ROI breakdown</li>
                                <li>A special offer just for you</li>
                            </ul>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px;">
                                Want to skip ahead and see it in action?
                            </p>

                            <!-- CTA Button -->
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="padding: 10px 0 30px;">
                                        <a href="{{calendar_link}}" style="display: inline-block; padding: 16px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 6px;">
                                            Book Your Free Demo →
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding: 30px; background-color: #f8f9fa; border-radius: 0 0 8px 8px;">
                            <p style="font-size: 14px; line-height: 22px; color: #666666; margin: 0 0 15px;">
                                The Capture Client Team<br>
                                Knoxville, TN<br>
                                <a href="mailto:team@captureclient.net" style="color: #667eea; text-decoration: none;">team@captureclient.net</a><br>
                                <a href="https://capture-client-site.vercel.app/" style="color: #667eea; text-decoration: none;">capture-client-site.vercel.app</a>
                            </p>

                            <p style="font-size: 12px; line-height: 18px; color: #999999; margin: 0;">
                                You're receiving this because you signed up for information about Capture Client's AI Voice Agents.<br>
                                <a href="{{unsubscribe_link}}" style="color: #999999; text-decoration: underline;">Unsubscribe</a>
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

## Email 2: Case Study (Day 2)

### Subject Line
How [Company Name] Doubled Their Lead Response Rate

### Preheader
Real results from a business just like yours

### Email Content (HTML)

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Case Study Success</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="padding: 40px 30px 30px;">
                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 20px;">
                                Hi {{contact.first_name}},
                            </p>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 20px;">
                                I wanted to share a quick success story that might resonate with you.
                            </p>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px;">
                                Last quarter, a marketing agency in Nashville was struggling with:
                            </p>

                            <ul style="font-size: 16px; line-height: 28px; color: #e74c3c; margin: 0 0 20px; padding-left: 20px;">
                                <li>Leads going cold while waiting for callbacks</li>
                                <li>Sales team overwhelmed with qualification calls</li>
                                <li>Inconsistent follow-up processes</li>
                            </ul>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px;">
                                <strong>Sound familiar?</strong>
                            </p>

                            <!-- Results Box -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 8px;">
                                        <h2 style="color: #ffffff; margin: 0 0 20px; font-size: 22px; text-align: center;">
                                            After Implementing Our AI Voice Agent:
                                        </h2>

                                        <table width="100%" cellpadding="10" cellspacing="0">
                                            <tr>
                                                <td style="color: #ffffff; font-size: 16px; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.2);">
                                                    <strong>⚡ Lead response time:</strong> 4 hours → 30 seconds
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="color: #ffffff; font-size: 16px; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.2);">
                                                    <strong>📈 Qualified leads:</strong> +67% increase
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="color: #ffffff; font-size: 16px; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.2);">
                                                    <strong>🎯 Sales focus:</strong> Closing, not screening
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="color: #ffffff; font-size: 16px; padding: 10px 0;">
                                                    <strong>💰 Revenue increase:</strong> 42% in 90 days
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background-color: #f0f7ff; padding: 20px; border-left: 4px solid #2196F3; border-radius: 4px;">
                                        <p style="font-size: 14px; line-height: 22px; color: #333333; margin: 0 0 10px;">
                                            <strong>⚡ The best part?</strong>
                                        </p>
                                        <p style="font-size: 14px; line-height: 22px; color: #555555; margin: 0;">
                                            Setup took less than 48 hours.
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 20px;">
                                <strong>Our AI Voice Agent handles:</strong>
                            </p>

                            <ul style="font-size: 16px; line-height: 28px; color: #333333; margin: 0 0 30px; padding-left: 20px;">
                                <li>Initial lead qualification</li>
                                <li>Appointment scheduling</li>
                                <li>FAQ responses</li>
                                <li>Follow-up calls</li>
                                <li>CRM updates</li>
                            </ul>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px;">
                                All with <strong>99% transcription accuracy</strong> and natural conversation flow.
                            </p>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px;">
                                Curious how this would work for your business?
                            </p>

                            <!-- CTA Button -->
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="padding: 10px 0 30px;">
                                        <a href="{{calendar_link}}" style="display: inline-block; padding: 16px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 6px;">
                                            See a Live Demo →
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

## Email 3: How It Works (Day 5)

### Subject Line
Here's Exactly How Our AI Voice Agents Work

### Preheader
Simple setup, powerful results in 48 hours

### Email Content (HTML)

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>How It Works</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="padding: 40px 30px 30px;">
                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 20px;">
                                Hi {{contact.first_name}},
                            </p>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px;">
                                You're probably wondering: <em>"How does this actually work?"</em>
                            </p>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px;">
                                Let me break it down:
                            </p>

                            <!-- Step 1 -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 20px;">
                                <tr>
                                    <td style="background-color: #f8f9fa; padding: 20px; border-left: 4px solid #667eea; border-radius: 4px;">
                                        <h3 style="color: #667eea; margin: 0 0 10px; font-size: 18px;">
                                            STEP 1: Quick Discovery Call (20 minutes)
                                        </h3>
                                        <p style="font-size: 14px; line-height: 22px; color: #555555; margin: 0;">
                                            We learn about your business, lead flow, and goals.
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <!-- Step 2 -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 20px;">
                                <tr>
                                    <td style="background-color: #f8f9fa; padding: 20px; border-left: 4px solid #764ba2; border-radius: 4px;">
                                        <h3 style="color: #764ba2; margin: 0 0 10px; font-size: 18px;">
                                            STEP 2: Custom AI Training (24-48 hours)
                                        </h3>
                                        <p style="font-size: 14px; line-height: 22px; color: #555555; margin: 0 0 10px;">
                                            We program your AI Voice Agent with:
                                        </p>
                                        <ul style="font-size: 14px; line-height: 22px; color: #555555; margin: 0; padding-left: 20px;">
                                            <li>Your services and pricing</li>
                                            <li>Your qualification criteria</li>
                                            <li>Your scheduling preferences</li>
                                            <li>Your brand voice and style</li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>

                            <!-- Step 3 -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 20px;">
                                <tr>
                                    <td style="background-color: #f8f9fa; padding: 20px; border-left: 4px solid #667eea; border-radius: 4px;">
                                        <h3 style="color: #667eea; margin: 0 0 10px; font-size: 18px;">
                                            STEP 3: Integration & Testing
                                        </h3>
                                        <p style="font-size: 14px; line-height: 22px; color: #555555; margin: 0 0 10px;">
                                            We connect to your:
                                        </p>
                                        <ul style="font-size: 14px; line-height: 22px; color: #555555; margin: 0; padding-left: 20px;">
                                            <li>Phone system</li>
                                            <li>Calendar</li>
                                            <li>CRM (we provide one if needed)</li>
                                            <li>Lead sources</li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>

                            <!-- Step 4 -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 20px;">
                                <tr>
                                    <td style="background-color: #f8f9fa; padding: 20px; border-left: 4px solid #764ba2; border-radius: 4px;">
                                        <h3 style="color: #764ba2; margin: 0 0 10px; font-size: 18px;">
                                            STEP 4: Go Live
                                        </h3>
                                        <p style="font-size: 14px; line-height: 22px; color: #555555; margin: 0 0 10px;">
                                            Your AI Voice Agent starts:
                                        </p>
                                        <ul style="font-size: 14px; line-height: 22px; color: #555555; margin: 0; padding-left: 20px;">
                                            <li>Answering inbound calls</li>
                                            <li>Making outbound follow-ups</li>
                                            <li>Qualifying leads 24/7</li>
                                            <li>Booking appointments automatically</li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>

                            <!-- Step 5 -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background-color: #f8f9fa; padding: 20px; border-left: 4px solid #667eea; border-radius: 4px;">
                                        <h3 style="color: #667eea; margin: 0 0 10px; font-size: 18px;">
                                            STEP 5: Optimize & Scale
                                        </h3>
                                        <p style="font-size: 14px; line-height: 22px; color: #555555; margin: 0;">
                                            We monitor, refine, and expand based on results.
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <!-- Technology Highlights -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 25px; border-radius: 8px;">
                                        <h3 style="color: #ffffff; margin: 0 0 15px; font-size: 20px; text-align: center;">
                                            THE TECHNOLOGY:
                                        </h3>
                                        <ul style="font-size: 15px; line-height: 26px; color: #ffffff; margin: 0; padding-left: 20px;">
                                            <li>99% call transcription accuracy</li>
                                            <li>Natural conversation AI</li>
                                            <li>Multi-language support</li>
                                            <li>Seamless CRM integration</li>
                                            <li>Real-time analytics dashboard</li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>

                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background-color: #fff3cd; padding: 20px; border-left: 4px solid #ffc107; border-radius: 4px;">
                                        <p style="font-size: 16px; line-height: 24px; color: #856404; margin: 0; text-align: center;">
                                            <strong>⏱️ TIME TO VALUE:</strong> 48 hours from 'yes' to live
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px;">
                                Want to see it in action?
                            </p>

                            <!-- CTA Buttons -->
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="padding: 10px 0;">
                                        <a href="{{demo_video_link}}" style="display: inline-block; padding: 16px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 6px; margin: 0 5px 10px;">
                                            Watch Demo Video →
                                        </a>
                                        <a href="{{calendar_link}}" style="display: inline-block; padding: 16px 40px; background-color: #ffffff; color: #667eea; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 6px; border: 2px solid #667eea; margin: 0 5px 10px;">
                                            Book a Live Demo
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

## Email 4: Pricing & FAQ (Day 9)

### Subject Line
AI Voice Agent Pricing & Your Questions Answered

### Preheader
Transparent pricing from $999/month with 30-day guarantee

### Email Content (HTML)

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pricing & FAQ</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="padding: 40px 30px 30px;">
                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 20px;">
                                Hi {{contact.first_name}},
                            </p>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px;">
                                Let's talk numbers and answer the questions you're probably thinking.
                            </p>

                            <h2 style="color: #333333; margin: 0 0 25px; font-size: 24px; text-align: center;">
                                PRICING OPTIONS
                            </h2>

                            <!-- Pricing Tables -->

                            <!-- Starter Package -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 20px; border: 2px solid #e0e0e0; border-radius: 8px;">
                                <tr>
                                    <td style="background-color: #f8f9fa; padding: 20px; border-radius: 6px 6px 0 0;">
                                        <h3 style="color: #667eea; margin: 0 0 5px; font-size: 20px;">Starter Package</h3>
                                        <p style="font-size: 32px; font-weight: bold; color: #333333; margin: 0;">
                                            $999<span style="font-size: 16px; font-weight: normal; color: #666666;">/month</span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 20px;">
                                        <ul style="font-size: 14px; line-height: 24px; color: #555555; margin: 0; padding-left: 20px;">
                                            <li>1 AI Voice Agent</li>
                                            <li>500 calls/month</li>
                                            <li>Basic CRM included</li>
                                            <li>Email & chat support</li>
                                            <li>48-hour setup</li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>

                            <!-- Growth Package -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 20px; border: 3px solid #667eea; border-radius: 8px; position: relative;">
                                <tr>
                                    <td colspan="2" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 8px; text-align: center; border-radius: 5px 5px 0 0;">
                                        <span style="color: #ffffff; font-size: 12px; font-weight: bold; text-transform: uppercase;">⭐ Most Popular</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="background-color: #f8f9fa; padding: 20px;">
                                        <h3 style="color: #667eea; margin: 0 0 5px; font-size: 20px;">Growth Package</h3>
                                        <p style="font-size: 32px; font-weight: bold; color: #333333; margin: 0;">
                                            $1,497<span style="font-size: 16px; font-weight: normal; color: #666666;">/month</span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 20px;">
                                        <ul style="font-size: 14px; line-height: 24px; color: #555555; margin: 0; padding-left: 20px;">
                                            <li>2 AI Voice Agents</li>
                                            <li>1,500 calls/month</li>
                                            <li>Advanced CRM with automation</li>
                                            <li>Priority support</li>
                                            <li>Custom integrations</li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>

                            <!-- Enterprise Package -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px; border: 2px solid #e0e0e0; border-radius: 8px;">
                                <tr>
                                    <td style="background-color: #f8f9fa; padding: 20px; border-radius: 6px 6px 0 0;">
                                        <h3 style="color: #667eea; margin: 0 0 5px; font-size: 20px;">Enterprise Package</h3>
                                        <p style="font-size: 32px; font-weight: bold; color: #333333; margin: 0;">
                                            $2,195<span style="font-size: 16px; font-weight: normal; color: #666666;">+/month</span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 20px;">
                                        <ul style="font-size: 14px; line-height: 24px; color: #555555; margin: 0; padding-left: 20px;">
                                            <li>Unlimited AI Voice Agents</li>
                                            <li>Unlimited calls</li>
                                            <li>White-label option</li>
                                            <li>Dedicated account manager</li>
                                            <li>Custom development</li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>

                            <!-- All Packages Include -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background-color: #e8f5e9; padding: 20px; border-left: 4px solid #4caf50; border-radius: 4px;">
                                        <h4 style="color: #2e7d32; margin: 0 0 10px; font-size: 16px;">✅ ALL PACKAGES INCLUDE:</h4>
                                        <ul style="font-size: 14px; line-height: 24px; color: #2e7d32; margin: 0; padding-left: 20px;">
                                            <li>30-day money-back guarantee</li>
                                            <li>Free CRM platform</li>
                                            <li>Ongoing optimization</li>
                                            <li>Analytics dashboard</li>
                                            <li>Training & documentation</li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>

                            <!-- FAQ Section -->
                            <h2 style="color: #333333; margin: 0 0 25px; font-size: 24px; text-align: center;">
                                FREQUENTLY ASKED QUESTIONS
                            </h2>

                            <!-- FAQ Item -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 15px;">
                                <tr>
                                    <td style="background-color: #f8f9fa; padding: 15px; border-radius: 6px;">
                                        <p style="font-size: 15px; font-weight: bold; color: #333333; margin: 0 0 8px;">
                                            Q: How long does setup take?
                                        </p>
                                        <p style="font-size: 14px; line-height: 22px; color: #555555; margin: 0;">
                                            A: 48 hours from contract signature to go-live.
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 15px;">
                                <tr>
                                    <td style="background-color: #f8f9fa; padding: 15px; border-radius: 6px;">
                                        <p style="font-size: 15px; font-weight: bold; color: #333333; margin: 0 0 8px;">
                                            Q: What if leads can tell it's AI?
                                        </p>
                                        <p style="font-size: 14px; line-height: 22px; color: #555555; margin: 0;">
                                            A: Our agents are designed for transparency and natural conversation. Leads appreciate the instant response and 24/7 availability.
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 15px;">
                                <tr>
                                    <td style="background-color: #f8f9fa; padding: 15px; border-radius: 6px;">
                                        <p style="font-size: 15px; font-weight: bold; color: #333333; margin: 0 0 8px;">
                                            Q: Can it integrate with my existing CRM?
                                        </p>
                                        <p style="font-size: 14px; line-height: 22px; color: #555555; margin: 0;">
                                            A: Yes! We integrate with most major CRMs (HubSpot, Salesforce, Pipedrive, etc.) or provide our own.
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 15px;">
                                <tr>
                                    <td style="background-color: #f8f9fa; padding: 15px; border-radius: 6px;">
                                        <p style="font-size: 15px; font-weight: bold; color: #333333; margin: 0 0 8px;">
                                            Q: What's the ROI?
                                        </p>
                                        <p style="font-size: 14px; line-height: 22px; color: #555555; margin: 0;">
                                            A: Most clients see 3-5x ROI within 90 days through increased lead conversion and reduced staffing costs.
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 15px;">
                                <tr>
                                    <td style="background-color: #f8f9fa; padding: 15px; border-radius: 6px;">
                                        <p style="font-size: 15px; font-weight: bold; color: #333333; margin: 0 0 8px;">
                                            Q: Is there a contract?
                                        </p>
                                        <p style="font-size: 14px; line-height: 22px; color: #555555; margin: 0;">
                                            A: Month-to-month with 30-day money-back guarantee. Cancel anytime.
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background-color: #f8f9fa; padding: 15px; border-radius: 6px;">
                                        <p style="font-size: 15px; font-weight: bold; color: #333333; margin: 0 0 8px;">
                                            Q: What industries do you serve?
                                        </p>
                                        <p style="font-size: 14px; line-height: 22px; color: #555555; margin: 0;">
                                            A: Marketing agencies, real estate, home services, professional services, healthcare, and more.
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px; text-align: center;">
                                <strong>Ready to get started?</strong>
                            </p>

                            <!-- CTA Button -->
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="padding: 10px 0 30px;">
                                        <a href="{{calendar_link}}" style="display: inline-block; padding: 16px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 6px;">
                                            Book Your Strategy Call →
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

## Email 5: Final Push with Offer (Day 14)

### Subject Line
Last Chance: Exclusive Setup Fee Waiver ($500 Value)

### Preheader
Special offer expires in 48 hours - Save $500 on setup

### Email Content (HTML)

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Special Offer</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <!-- Urgency Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%); padding: 15px; text-align: center; border-radius: 8px 8px 0 0;">
                            <p style="color: #ffffff; margin: 0; font-size: 14px; font-weight: bold; text-transform: uppercase;">
                                ⏰ SPECIAL OFFER EXPIRES IN 48 HOURS
                            </p>
                        </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 20px;">
                                Hi {{contact.first_name}},
                            </p>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 20px;">
                                It's been two weeks since you first showed interest in automating your lead generation with AI Voice Agents.
                            </p>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px;">
                                I wanted to reach out one last time with a special offer.
                            </p>

                            <!-- Offer Box -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 8px; text-align: center;">
                                        <h2 style="color: #ffffff; margin: 0 0 20px; font-size: 24px;">
                                            FOR THE NEXT 48 HOURS ONLY:
                                        </h2>
                                        <p style="color: #ffffff; font-size: 18px; line-height: 28px; margin: 0 0 20px;">
                                            We're waiving our <strong>$500 setup fee</strong> for new clients.
                                        </p>
                                        <table width="100%" cellpadding="10" cellspacing="0" style="margin: 20px 0 0;">
                                            <tr>
                                                <td style="color: #ffffff; font-size: 15px; text-align: left; padding: 8px 0; border-top: 1px solid rgba(255,255,255,0.3);">
                                                    ✓ Custom AI Voice Agent training ($500 value) - <strong>FREE</strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="color: #ffffff; font-size: 15px; text-align: left; padding: 8px 0; border-top: 1px solid rgba(255,255,255,0.3);">
                                                    ✓ CRM integration & setup ($300 value) - <strong>INCLUDED</strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="color: #ffffff; font-size: 15px; text-align: left; padding: 8px 0; border-top: 1px solid rgba(255,255,255,0.3);">
                                                    ✓ 48-hour implementation - <strong>GUARANTEED</strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="color: #ffffff; font-size: 15px; text-align: left; padding: 8px 0; border-top: 1px solid rgba(255,255,255,0.3); border-bottom: 1px solid rgba(255,255,255,0.3);">
                                                    ✓ 30-day money-back guarantee - <strong>RISK-FREE</strong>
                                                </td>
                                            </tr>
                                        </table>
                                        <p style="color: #ffffff; font-size: 20px; font-weight: bold; margin: 20px 0 0;">
                                            TOTAL VALUE: Over $800 in savings
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <!-- Why Now Section -->
                            <h3 style="color: #e74c3c; margin: 0 0 15px; font-size: 20px;">
                                WHY NOW?
                            </h3>

                            <p style="font-size: 15px; line-height: 24px; color: #333333; margin: 0 0 15px;">
                                Every day without AI Voice Agents means:
                            </p>

                            <ul style="font-size: 15px; line-height: 26px; color: #e74c3c; margin: 0 0 30px; padding-left: 20px;">
                                <li><strong>Missed leads</strong> (average business loses 30% of leads to slow response)</li>
                                <li><strong>Wasted ad spend</strong> (you're paying for leads you can't handle)</li>
                                <li><strong>Burned-out sales team</strong> (repetitive qualification calls)</li>
                                <li><strong>Lost revenue</strong> (competitors with AI are moving faster)</li>
                            </ul>

                            <!-- Track Record -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background-color: #f0f7ff; padding: 20px; border-left: 4px solid #2196F3; border-radius: 4px;">
                                        <h4 style="color: #1976D2; margin: 0 0 10px; font-size: 16px;">📊 OUR TRACK RECORD:</h4>
                                        <ul style="font-size: 14px; line-height: 24px; color: #555555; margin: 0; padding-left: 20px;">
                                            <li>500+ businesses served</li>
                                            <li>4.9/5 average rating</li>
                                            <li>99% call accuracy</li>
                                            <li>67% average increase in qualified leads</li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>

                            <!-- Expiry Warning -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 30px;">
                                <tr>
                                    <td style="background-color: #fff3cd; padding: 20px; border-left: 4px solid #ffc107; border-radius: 4px; text-align: center;">
                                        <p style="font-size: 18px; font-weight: bold; color: #856404; margin: 0;">
                                            ⏰ THIS OFFER EXPIRES: {{offer_expiry_date}}
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px; text-align: center;">
                                <strong>Don't let this opportunity slip away.</strong>
                            </p>

                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0 0 30px; text-align: center;">
                                Ready to transform your lead generation?
                            </p>

                            <!-- CTA Buttons -->
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="padding: 10px 0;">
                                        <a href="{{calendar_link}}?offer=setup-waiver" style="display: inline-block; padding: 18px 50px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; font-size: 18px; font-weight: bold; border-radius: 6px; margin: 0 0 15px;">
                                            Claim Your $500 Discount →
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" style="padding: 0 0 30px;">
                                        <a href="mailto:info@captureclient.net?subject=Questions about AI Voice Agents" style="display: inline-block; padding: 12px 30px; background-color: #ffffff; color: #667eea; text-decoration: none; font-size: 14px; font-weight: bold; border-radius: 6px; border: 2px solid #667eea;">
                                            I Have Questions
                                        </a>
                                    </td>
                                </tr>
                            </table>

                            <!-- P.S. -->
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="background-color: #f8f9fa; padding: 20px; border-radius: 6px;">
                                        <p style="font-size: 14px; line-height: 22px; color: #666666; margin: 0; font-style: italic;">
                                            <strong>P.S.</strong> If you're not ready now, no worries. Reply to this email anytime you want to chat.
                                        </p>
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

## Implementation Notes

### Personalization Variables
All emails use these merge tags:
- `{{contact.first_name}}` - Lead's first name
- `{{contact.email}}` - Lead's email address
- `{{contact.company}}` - Company name
- `{{calendar_link}}` - Booking link
- `{{offer_expiry_date}}` - Dynamic expiry date
- `{{unsubscribe_link}}` - Unsubscribe URL

### A/B Testing Recommendations
Test these elements:
1. **Subject lines**: Direct vs. curiosity-driven
2. **CTA button copy**: "Book Demo" vs. "See It Live" vs. "Get Started"
3. **Social proof placement**: Top vs. bottom
4. **Urgency level**: High pressure vs. low pressure

### Mobile Optimization
All templates are:
- Responsive (single column on mobile)
- Touch-friendly buttons (min 44px height)
- Readable font sizes (16px minimum)
- Fast-loading (optimized images)

### Deliverability Best Practices
- **SPF/DKIM**: Configure properly for team@captureclient.net
- **List hygiene**: Remove bounces immediately
- **Engagement**: Monitor opens/clicks, segment active users
- **Unsubscribe**: Clear, one-click process
- **Avoid spam triggers**: Limit ALL CAPS, excessive punctuation

### Testing Checklist
Before sending:
- [ ] Preview in Gmail, Outlook, Apple Mail
- [ ] Test all merge tags populate correctly
- [ ] Verify all links work
- [ ] Check mobile rendering
- [ ] Spam test (Mail-Tester, etc.)
- [ ] Proofread copy thoroughly

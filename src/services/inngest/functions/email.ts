import { inngest } from "../client"
import { resend } from "@/services/resend/client"
import QuoteRequestNotificationEmail from "@/services/resend/components/QuoteRequestNotificationEmail"
import QuoteConfirmationEmail from "@/services/resend/components/QuoteConfirmationEmail"

export const sendQuoteRequestNotification = inngest.createFunction(
  {
    id: "send-quote-request-notification",
    name: "Send Quote Request Notification",
    throttle: {
      limit: 10,
      period: "1m",
    },
  },
  { event: "app/email.quote-request-notification" },
  async ({ event, step }) => {
    const { data, user } = event

    await step.run("send-admin-notification", async () => {
      await resend.emails.send({
        from: "Gateling Website <hello@gateling.com>",
        to: user.email,
        subject: `🚀 New WordPress Project Request from ${data.businessName}`,
        react: QuoteRequestNotificationEmail({
          clientName: data.clientName,
          businessName: data.businessName,
          email: data.email,
          phone: data.phone,
          projectType: data.projectType,
          budgetRange: data.budgetRange,
          timeline: data.timeline,
          features: data.features,
          goals: data.goals,
          adminDashboardUrl: `${process.env.WEBSITE_URL || 'https://gateling.com'}/admin/requests`,
        }),
        tags: [
          { name: "type", value: "quote-request-notification" },
          { name: "project-type", value: data.projectType },
          { name: "budget-range", value: data.budgetRange },
        ],
      })
    })
  }
)

export const sendQuoteConfirmation = inngest.createFunction(
  {
    id: "send-quote-confirmation",
    name: "Send Quote Confirmation",
    throttle: {
      limit: 10,
      period: "1m",
    },
  },
  { event: "app/email.quote-confirmation" },
  async ({ event, step }) => {
    const { data, user } = event

    const nextSteps = [
      "We'll review your requirements within 24 hours",
      "You'll receive a detailed quote via email",
      "We'll schedule a consultation call to discuss your project",
      "Upon approval, we'll start your project immediately"
    ]

    await step.run("send-client-confirmation", async () => {
      await resend.emails.send({
        from: "Gateling Team <hello@gateling.com>",
        to: data.email,
        subject: `Thank you for your WordPress project request, ${data.clientName}!`,
        react: QuoteConfirmationEmail({
          clientName: data.clientName,
          businessName: data.businessName,
          projectType: data.projectType,
          budgetRange: data.budgetRange,
          timeline: data.timeline,
          features: data.features,
          nextSteps,
          contactEmail: process.env.FROM_EMAIL || "hello@gateling.com",
          contactPhone: process.env.CONTACT_PHONE || "+1 (555) 123-4567",
          websiteUrl: process.env.WEBSITE_URL || "https://gateling.com",
        }),
        tags: [
          { name: "type", value: "quote-confirmation" },
          { name: "project-type", value: data.projectType },
          { name: "client-email", value: data.email },
        ],
      })
    })
  }
)

export const sendFollowUpEmail = inngest.createFunction(
  {
    id: "send-follow-up-email",
    name: "Send Follow-up Email",
    throttle: {
      limit: 10,
      period: "1m",
    },
  },
  { event: "app/email.follow-up" },
  async ({ event, step }) => {
    const { data } = event

    await step.run("send-follow-up", async () => {
      await resend.emails.send({
        from: "Gateling Team <hello@gateling.com>",
        to: data.clientEmail,
        subject: data.subject,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #FF6B1A; padding: 24px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 28px;">Gateling</h1>
            </div>
            <div style="padding: 32px 24px; background: white; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
              <h2 style="color: #1a1a1a; margin-bottom: 16px;">Hi ${data.clientName},</h2>
              <div style="color: #4a5568; line-height: 1.6; white-space: pre-line;">${data.message}</div>
              <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e2e8f0;">
                <p style="color: #718096; font-size: 14px; margin: 0;">
                  Best regards,<br>
                  The Gateling Team<br>
                  <a href="mailto:hello@gateling.com" style="color: #FF6B1A;">hello@gateling.com</a>
                </p>
              </div>
            </div>
          </div>
        `,
        tags: [
          { name: "type", value: "follow-up" },
          { name: "client-email", value: data.clientEmail },
        ],
      })
    })
  }
)

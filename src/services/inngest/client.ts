import { EventSchemas, Inngest } from "inngest"

type Events = {
  "app/email.quote-request-notification": {
    data: {
      requestId: string
      clientName: string
      businessName: string
      email: string
      phone?: string
      projectType: string
      budgetRange: string
      timeline: string
      features: string[]
      goals?: string
    }
    user: {
      email: string
      name: string
    }
  }
  "app/email.quote-confirmation": {
    data: {
      requestId: string
      clientName: string
      businessName: string
      email: string
      projectType: string
      budgetRange: string
      timeline: string
      features: string[]
    }
    user: {
      email: string
      name: string
    }
  }
  "app/email.follow-up": {
    data: {
      clientEmail: string
      clientName: string
      subject: string
      message: string
    }
  }
}

export const inngest = new Inngest({
  id: "gateling-website",
  schemas: new EventSchemas().fromRecord<Events>(),
})

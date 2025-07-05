import { serve } from "inngest/next"
import { inngest } from "@/services/inngest/client"
import {
    sendQuoteRequestNotification,
    sendQuoteConfirmation,
    sendFollowUpEmail
} from "@/services/inngest/functions/email"

export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [
        sendQuoteRequestNotification,
        sendQuoteConfirmation,
        sendFollowUpEmail,
    ],
})


import { inngest } from '@/services/inngest/client';

export interface ClientRequestData {
    // Personal Information
    contactName: string;
    businessName: string;
    email: string;
    phone?: string;
    currentWebsite?: string;
    industry?: string;

    // Project Details
    projectType: string;
    budgetRange: string;
    timeline: string;
    existingWebsite?: string;

    // Features
    features: string[];
    designPreferences?: string;
    contentStatus?: string;

    // Goals
    primaryGoals?: string;
    targetAudience?: string;
    competitors?: string;
    additionalNotes?: string;
}

export class EmailService {
    private static instance: EmailService;
    private adminEmail: string;

    private constructor() {
        this.adminEmail = process.env.ADMIN_EMAIL || 'admin@gateling.com';
    }

    public static getInstance(): EmailService {
        if (!EmailService.instance) {
            EmailService.instance = new EmailService();
        }
        return EmailService.instance;
    }

    /**
     * Send new quote request notification to admin using Inngest
     */
    async sendNewQuoteRequestNotification(requestData: ClientRequestData): Promise<{ success: boolean; error?: string }> {
        try {
            await inngest.send({
                name: "app/email.quote-request-notification",
                data: {
                    requestId: `req_${Date.now()}`,
                    clientName: requestData.contactName,
                    businessName: requestData.businessName,
                    email: requestData.email,
                    phone: requestData.phone,
                    projectType: requestData.projectType,
                    budgetRange: requestData.budgetRange,
                    timeline: requestData.timeline,
                    features: requestData.features,
                    goals: requestData.primaryGoals,
                },
                user: {
                    email: this.adminEmail,
                    name: "Admin",
                },
            });

            console.log('Admin notification queued successfully');
            return { success: true };
        } catch (error) {
            console.error('Error queueing admin notification:', error);
            return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
        }
    }

    /**
     * Send quote confirmation to client using Inngest
     */
    async sendQuoteConfirmation(requestData: ClientRequestData): Promise<{ success: boolean; error?: string }> {
        try {
            await inngest.send({
                name: "app/email.quote-confirmation",
                data: {
                    requestId: `req_${Date.now()}`,
                    clientName: requestData.contactName,
                    businessName: requestData.businessName,
                    email: requestData.email,
                    projectType: requestData.projectType,
                    budgetRange: requestData.budgetRange,
                    timeline: requestData.timeline,
                    features: requestData.features,
                },
                user: {
                    email: requestData.email,
                    name: requestData.contactName,
                },
            });

            console.log('Client confirmation queued successfully');
            return { success: true };
        } catch (error) {
            console.error('Error queueing client confirmation:', error);
            return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
        }
    }

    /**
     * Send both admin notification and client confirmation using Inngest
     */
    async sendQuoteRequestEmails(requestData: ClientRequestData): Promise<{
        adminNotification: { success: boolean; error?: string };
        clientConfirmation: { success: boolean; error?: string };
    }> {
        const [adminResult, clientResult] = await Promise.allSettled([
            this.sendNewQuoteRequestNotification(requestData),
            this.sendQuoteConfirmation(requestData),
        ]);

        return {
            adminNotification: adminResult.status === 'fulfilled'
                ? adminResult.value
                : { success: false, error: adminResult.reason?.message || 'Failed to send admin notification' },
            clientConfirmation: clientResult.status === 'fulfilled'
                ? clientResult.value
                : { success: false, error: clientResult.reason?.message || 'Failed to send client confirmation' },
        };
    }

    /**
     * Send follow-up email to client using Inngest
     */
    async sendFollowUpEmail(
        clientEmail: string,
        clientName: string,
        subject: string,
        message: string
    ): Promise<{ success: boolean; error?: string }> {
        try {
            await inngest.send({
                name: "app/email.follow-up",
                data: {
                    clientEmail,
                    clientName,
                    subject,
                    message,
                },
            });

            console.log('Follow-up email queued successfully');
            return { success: true };
        } catch (error) {
            console.error('Error queueing follow-up email:', error);
            return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
        }
    }

    /**
     * Test email configuration by sending a test notification
     */
    async testEmailConfiguration(): Promise<{ success: boolean; error?: string }> {
        try {
            const testData: ClientRequestData = {
                contactName: "Test User",
                businessName: "Test Business",
                email: this.adminEmail,
                projectType: "Test Project",
                budgetRange: "$1,000 - $5,000",
                timeline: "1 month",
                features: ["Test Feature"],
                primaryGoals: "Testing email configuration",
            };

            const result = await this.sendNewQuoteRequestNotification(testData);

            if (result.success) {
                console.log('Email configuration test successful');
                return { success: true };
            } else {
                return { success: false, error: result.error };
            }
        } catch (error) {
            console.error('Error testing email configuration:', error);
            return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
        }
    }
}

// Export singleton instance
export const emailService = EmailService.getInstance();

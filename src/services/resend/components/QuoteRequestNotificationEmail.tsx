import {
    Button,
    Container,
    Head,
    Heading,
    Html,
    Section,
    Tailwind,
    Text,
} from "@react-email/components"
import tailwindConfig from "../data/tailwindConfig"

interface QuoteRequestNotificationEmailProps {
    clientName: string
    businessName: string
    email: string
    phone?: string
    projectType: string
    budgetRange: string
    timeline: string
    features: string[]
    goals?: string
    adminDashboardUrl: string
}

export default function QuoteRequestNotificationEmail({
    clientName,
    businessName,
    email,
    phone,
    projectType,
    budgetRange,
    timeline,
    features,
    goals,
    adminDashboardUrl,
}: QuoteRequestNotificationEmailProps) {
    return (
        <Tailwind config={tailwindConfig}>
            <Html>
                <Head />
                <Container className="font-sans">
                    <Section className="bg-primary text-primary-foreground rounded-lg p-6 mb-6">
                        <Heading as="h1" className="text-center text-3xl font-bold m-0">
                            🚀 New WordPress Project Request
                        </Heading>
                    </Section>

                    <Section className="mb-6">
                        <Text className="text-lg font-semibold mb-4">
                            You have received a new project request from {businessName}!
                        </Text>

                        <div className="bg-card border border-border rounded-lg p-4 mb-4">
                            <Heading as="h2" className="text-xl font-semibold mb-3 text-primary">
                                Client Information
                            </Heading>
                            <Text className="mb-2"><strong>Contact Name:</strong> {clientName}</Text>
                            <Text className="mb-2"><strong>Business Name:</strong> {businessName}</Text>
                            <Text className="mb-2"><strong>Email:</strong> {email}</Text>
                            {phone && <Text className="mb-2"><strong>Phone:</strong> {phone}</Text>}
                        </div>

                        <div className="bg-card border border-border rounded-lg p-4 mb-4">
                            <Heading as="h2" className="text-xl font-semibold mb-3 text-primary">
                                Project Details
                            </Heading>
                            <Text className="mb-2"><strong>Project Type:</strong> {projectType}</Text>
                            <Text className="mb-2"><strong>Budget Range:</strong> {budgetRange}</Text>
                            <Text className="mb-2"><strong>Timeline:</strong> {timeline}</Text>

                            <Text className="mb-2 font-semibold">Required Features:</Text>
                            <ul className="list-disc pl-6 mb-2">
                                {features.map((feature, index) => (
                                    <li key={index} className="mb-1">{feature}</li>
                                ))}
                            </ul>

                            {goals && (
                                <>
                                    <Text className="mb-2 font-semibold">Primary Goals:</Text>
                                    <Text className="mb-2">{goals}</Text>
                                </>
                            )}
                        </div>
                    </Section>

                    <Section className="text-center">
                        <Button
                            href={adminDashboardUrl}
                            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold"
                        >
                            View in Admin Dashboard
                        </Button>
                    </Section>

                    <Section className="mt-8 pt-6 border-t border-border">
                        <Text className="text-sm text-muted-foreground text-center">
                            This email was sent from your Gateling website contact form.
                        </Text>
                    </Section>
                </Container>
            </Html>
        </Tailwind>
    )
}

QuoteRequestNotificationEmail.PreviewProps = {
    clientName: "John Smith",
    businessName: "Smith Consulting",
    email: "john@smithconsulting.com",
    phone: "+1 (555) 123-4567",
    projectType: "Business Website",
    budgetRange: "$5,000 - $10,000",
    timeline: "2-3 months",
    features: ["Custom Design", "SEO Optimization", "Contact Forms", "Blog"],
    goals: "Increase online presence and generate more leads",
    adminDashboardUrl: "https://gateling.com/admin/requests",
} satisfies QuoteRequestNotificationEmailProps

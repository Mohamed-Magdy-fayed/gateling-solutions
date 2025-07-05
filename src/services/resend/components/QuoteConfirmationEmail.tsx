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

interface QuoteConfirmationEmailProps {
    clientName: string
    businessName: string
    projectType: string
    budgetRange: string
    timeline: string
    features: string[]
    nextSteps: string[]
    contactEmail: string
    contactPhone: string
    websiteUrl: string
}

export default function QuoteConfirmationEmail({
    clientName,
    businessName,
    projectType,
    budgetRange,
    timeline,
    features,
    nextSteps,
    contactEmail,
    contactPhone,
    websiteUrl,
}: QuoteConfirmationEmailProps) {
    return (
        <Tailwind config={tailwindConfig}>
            <Html>
                <Head />
                <Container className="font-sans">
                    <Section className="bg-primary text-primary-foreground rounded-lg p-6 mb-6">
                        <Heading as="h1" className="text-center text-3xl font-bold m-0">
                            Gateling
                        </Heading>
                        <Text className="text-center text-lg mt-2 mb-0">
                            Professional WordPress Development
                        </Text>
                    </Section>

                    <Section className="mb-6">
                        <Heading as="h2" className="text-2xl font-bold mb-4">
                            Thank you for your project request, {clientName}!
                        </Heading>

                        <Text className="text-lg mb-4">
                            We're excited to help {businessName} achieve its online goals with a professional WordPress website.
                        </Text>

                        <Text className="mb-6">
                            We've received your request and our team is already reviewing the details. Here's a summary of what you've requested:
                        </Text>

                        <div className="bg-card border border-border rounded-lg p-4 mb-6">
                            <Heading as="h3" className="text-xl font-semibold mb-3 text-primary">
                                Project Summary
                            </Heading>
                            <Text className="mb-2"><strong>Project Type:</strong> {projectType}</Text>
                            <Text className="mb-2"><strong>Budget Range:</strong> {budgetRange}</Text>
                            <Text className="mb-2"><strong>Timeline:</strong> {timeline}</Text>

                            <Text className="mb-2 font-semibold">Features Requested:</Text>
                            <ul className="list-disc pl-6 mb-4">
                                {features.map((feature, index) => (
                                    <li key={index} className="mb-1">{feature}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-card border border-border rounded-lg p-4 mb-6">
                            <Heading as="h3" className="text-xl font-semibold mb-3 text-primary">
                                What Happens Next?
                            </Heading>
                            <ol className="list-decimal pl-6">
                                {nextSteps.map((step, index) => (
                                    <li key={index} className="mb-2">{step}</li>
                                ))}
                            </ol>
                        </div>
                    </Section>

                    <Section className="bg-secondary rounded-lg p-6 mb-6">
                        <Heading as="h3" className="text-xl font-semibold mb-3">
                            Why Choose Gateling?
                        </Heading>
                        <ul className="list-disc pl-6">
                            <li className="mb-2">✅ 10+ years of WordPress expertise</li>
                            <li className="mb-2">✅ Custom designs tailored to your brand</li>
                            <li className="mb-2">✅ SEO-optimized for better search rankings</li>
                            <li className="mb-2">✅ Mobile-responsive and fast-loading</li>
                            <li className="mb-2">✅ Ongoing support and maintenance</li>
                            <li className="mb-2">✅ 100% satisfaction guarantee</li>
                        </ul>
                    </Section>

                    <Section className="text-center mb-6">
                        <Button
                            href={websiteUrl}
                            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold mr-4"
                        >
                            Visit Our Website
                        </Button>
                    </Section>

                    <Section className="bg-card border border-border rounded-lg p-4 mb-6">
                        <Heading as="h3" className="text-lg font-semibold mb-3">
                            Questions? We're Here to Help!
                        </Heading>
                        <Text className="mb-2">
                            If you have any questions or need to discuss your project further, don't hesitate to reach out:
                        </Text>
                        <Text className="mb-1"><strong>Email:</strong> {contactEmail}</Text>
                        <Text className="mb-1"><strong>Phone:</strong> {contactPhone}</Text>
                    </Section>

                    <Section className="text-center pt-6 border-t border-border">
                        <Text className="text-sm text-muted-foreground">
                            Thank you for choosing Gateling for your WordPress development needs.
                            <br />
                            We look forward to bringing your vision to life!
                        </Text>
                    </Section>
                </Container>
            </Html>
        </Tailwind>
    )
}

QuoteConfirmationEmail.PreviewProps = {
    clientName: "John Smith",
    businessName: "Smith Consulting",
    projectType: "Business Website",
    budgetRange: "$5,000 - $10,000",
    timeline: "2-3 months",
    features: ["Custom Design", "SEO Optimization", "Contact Forms", "Blog"],
    nextSteps: [
        "We'll review your requirements within 24 hours",
        "You'll receive a detailed quote via email",
        "We'll schedule a consultation call to discuss your project",
        "Upon approval, we'll start your project immediately"
    ],
    contactEmail: "hello@gateling.com",
    contactPhone: "+1 (555) 123-4567",
    websiteUrl: "https://gateling.com",
} satisfies QuoteConfirmationEmailProps

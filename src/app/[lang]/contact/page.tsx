import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { H1, H2, H3, P, Lead } from '@/components/ui/typography';
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    MessageSquare,
    Send
} from 'lucide-react';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

export default function ContactPage() {
    const contactInfo = [
        {
            icon: Mail,
            title: 'Email Us',
            content: 'hello@gateling.com',
            description: 'Send us an email and we\'ll respond within 24 hours'
        },
        {
            icon: Phone,
            title: 'Call Us',
            content: '+1 (555) 123-4567',
            description: 'Monday to Friday, 9 AM to 6 PM EST'
        },
        {
            icon: MapPin,
            title: 'Visit Us',
            content: '123 Business Ave, Suite 100\nNew York, NY 10001',
            description: 'Schedule an appointment for in-person meetings'
        },
        {
            icon: Clock,
            title: 'Business Hours',
            content: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM',
            description: 'We\'re here to help during business hours'
        }
    ];

    const faqs = [
        {
            question: 'How long does it take to build a website?',
            answer: 'Most websites take 2-4 weeks to complete, depending on complexity and requirements.'
        },
        {
            question: 'Do you provide ongoing support?',
            answer: 'Yes, we offer maintenance packages and ongoing support for all our websites.'
        },
        {
            question: 'Can you help with SEO?',
            answer: 'Absolutely! All our websites are built with SEO best practices, and we offer additional SEO services.'
        },
        {
            question: 'What\'s included in the price?',
            answer: 'Our packages include design, development, basic SEO setup, and 30 days of free support.'
        }
    ];

    return (
        <div className="min-h-screen">
            <Header />
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="container mx-auto px-4 text-center">
                    <H1 className="mb-6 max-w-4xl mx-auto">
                        Let's Discuss Your WordPress Project
                    </H1>
                    <Lead className="mb-8 max-w-2xl mx-auto text-muted-foreground">
                        Ready to get started? We'd love to hear about your project and discuss how we can help
                        you achieve your online goals.
                    </Lead>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <H2 className="mb-6">Send Us a Message</H2>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <MessageSquare className="w-5 h-5" />
                                        Contact Form
                                    </CardTitle>
                                    <CardDescription>
                                        Fill out the form below and we'll get back to you within 24 hours.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First Name</Label>
                                            <Input id="firstName" placeholder="John" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last Name</Label>
                                            <Input id="lastName" placeholder="Doe" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input id="email" type="email" placeholder="john@example.com" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone Number (Optional)</Label>
                                        <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="company">Company Name (Optional)</Label>
                                        <Input id="company" placeholder="Your Company" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input id="subject" placeholder="Website Development Inquiry" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                                            rows={6}
                                        />
                                    </div>

                                    <Button className="w-full" size="lg">
                                        <Send className="w-4 h-4 mr-2" />
                                        Send Message
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <H2 className="mb-6">Get In Touch</H2>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <Card key={index}>
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center flex-shrink-0">
                                                    <info.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                                                </div>
                                                <div>
                                                    <H3 className="mb-2">{info.title}</H3>
                                                    <P className="font-medium mb-1 whitespace-pre-line">{info.content}</P>
                                                    <P className="text-muted-foreground text-sm">{info.description}</P>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* Quick Quote CTA */}
                            <Card className="mt-8 bg-orange-50 dark:bg-orange-900/10 border-orange-200 dark:border-orange-800">
                                <CardContent className="p-6 text-center">
                                    <H3 className="mb-2">Need a Quick Quote?</H3>
                                    <P className="text-muted-foreground mb-4">
                                        Get a detailed quote for your project in just a few minutes.
                                    </P>
                                    <Button asChild>
                                        <a href="/quote">Get Free Quote</a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <H2 className="mb-4">Frequently Asked Questions</H2>
                        <P className="text-muted-foreground max-w-2xl mx-auto">
                            Here are some common questions we get about our WordPress development services.
                        </P>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <Card key={index}>
                                    <CardContent className="p-6">
                                        <H3 className="mb-3">{faq.question}</H3>
                                        <P className="text-muted-foreground">{faq.answer}</P>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section (Placeholder) */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <H2 className="text-center mb-8">Our Location</H2>
                    <div className="max-w-4xl mx-auto">
                        <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                                <P className="text-muted-foreground">Interactive map would be embedded here</P>
                                <P className="text-sm text-muted-foreground mt-2">
                                    123 Business Ave, Suite 100, New York, NY 10001
                                </P>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

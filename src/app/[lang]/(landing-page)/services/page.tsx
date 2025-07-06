import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { H1, H2, H3, P, Lead } from '@/components/ui/typography';
import {
    Globe,
    Smartphone,
    Search,
    Shield,
    Zap,
    ShoppingCart,
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
    const services = [
        {
            icon: Globe,
            title: 'WordPress Website Development',
            description: 'Custom WordPress websites built from scratch with modern design and functionality.',
            features: ['Custom Theme Development', 'Plugin Integration', 'Performance Optimization', 'SEO Ready']
        },
        {
            icon: Smartphone,
            title: 'Responsive Design',
            description: 'Mobile-first designs that look perfect on all devices and screen sizes.',
            features: ['Mobile Optimization', 'Touch-Friendly Interface', 'Cross-Browser Compatibility', 'Fast Loading']
        },
        {
            icon: ShoppingCart,
            title: 'E-commerce Solutions',
            description: 'Complete online stores with WooCommerce integration and payment processing.',
            features: ['WooCommerce Setup', 'Payment Gateway Integration', 'Inventory Management', 'Order Tracking']
        },
        {
            icon: Search,
            title: 'SEO Optimization',
            description: 'Search engine optimization to help your website rank higher in search results.',
            features: ['On-Page SEO', 'Technical SEO', 'Content Optimization', 'Analytics Setup']
        },
        {
            icon: Shield,
            title: 'Security & Maintenance',
            description: 'Ongoing security monitoring, updates, and maintenance to keep your site safe.',
            features: ['Security Monitoring', 'Regular Updates', 'Backup Solutions', 'Malware Protection']
        },
        {
            icon: Zap,
            title: 'Performance Optimization',
            description: 'Speed optimization to ensure your website loads quickly and performs well.',
            features: ['Speed Optimization', 'Image Compression', 'Caching Setup', 'CDN Integration']
        }
    ];

    const process = [
        {
            step: '01',
            title: 'Discovery & Planning',
            description: 'We start by understanding your business goals, target audience, and project requirements.'
        },
        {
            step: '02',
            title: 'Design & Wireframing',
            description: 'Creating wireframes and designs that align with your brand and user experience goals.'
        },
        {
            step: '03',
            title: 'Development & Testing',
            description: 'Building your website with clean code, testing across devices and browsers.'
        },
        {
            step: '04',
            title: 'Launch & Support',
            description: 'Launching your website and providing ongoing support and maintenance.'
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="container mx-auto px-4 text-center">
                    <H1 className="mb-6 max-w-4xl mx-auto">
                        Professional WordPress Services for Growing Businesses
                    </H1>
                    <Lead className="mb-8 max-w-2xl mx-auto text-muted-foreground">
                        From custom development to ongoing maintenance, we provide comprehensive WordPress solutions
                        that help your business succeed online.
                    </Lead>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="/quote">Get Started Today</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/contact">Discuss Your Project</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <H2 className="mb-4">Our WordPress Services</H2>
                        <P className="text-muted-foreground max-w-2xl mx-auto">
                            We offer a complete range of WordPress services to help you build, grow, and maintain your online presence.
                        </P>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center mb-4">
                                        <service.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                                    </div>
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                    <CardDescription>{service.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-3" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <H2 className="mb-4">Our Development Process</H2>
                        <P className="text-muted-foreground max-w-2xl mx-auto">
                            We follow a proven process to ensure your project is delivered on time, on budget, and exceeds your expectations.
                        </P>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center mx-auto mb-6">
                                    <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">{step.step}</span>
                                </div>
                                <H3 className="mb-4">{step.title}</H3>
                                <P className="text-muted-foreground text-sm">{step.description}</P>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <H2 className="mb-6">Ready to Start Your WordPress Project?</H2>
                        <P className="text-muted-foreground mb-8">
                            Let's discuss your requirements and create a custom solution that helps your business grow.
                        </P>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <Link href="/quote">Get Free Quote</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/portfolio">View Our Work</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

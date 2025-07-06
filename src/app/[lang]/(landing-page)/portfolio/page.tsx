import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { H1, H2, H3, P, Lead } from '@/components/ui/typography';
import {
    ExternalLink,
    Eye,
    Calendar,
    Tag,
    ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function PortfolioPage() {
    const projects = [
        {
            id: 1,
            title: 'TechStart Solutions',
            description: 'Modern corporate website for a technology consulting firm with custom booking system and client portal.',
            category: 'Corporate',
            industry: 'Technology',
            completedDate: '2024-01-15',
            url: 'https://techstart-demo.com',
            image: '/portfolio/techstart.jpg',
            technologies: ['WordPress', 'Custom Theme', 'WooCommerce', 'Booking System'],
            results: {
                trafficIncrease: '150%',
                conversionRate: '3.2%',
                loadTime: '1.8s'
            },
            testimonial: {
                text: 'Gateling delivered exactly what we needed. Our new website has significantly improved our online presence.',
                author: 'Sarah Johnson, CEO'
            }
        },
        {
            id: 2,
            title: 'Artisan Bakery',
            description: 'E-commerce website for a local bakery with online ordering, delivery scheduling, and inventory management.',
            category: 'E-commerce',
            industry: 'Food & Beverage',
            completedDate: '2024-02-20',
            url: 'https://artisan-bakery-demo.com',
            image: '/portfolio/bakery.jpg',
            technologies: ['WordPress', 'WooCommerce', 'Custom Plugin', 'Payment Gateway'],
            results: {
                onlineOrders: '200+/month',
                revenue: '$15k/month',
                customerSatisfaction: '98%'
            },
            testimonial: {
                text: 'The online ordering system has transformed our business. We\'ve seen a 300% increase in orders.',
                author: 'Mike Chen, Owner'
            }
        },
        {
            id: 3,
            title: 'Creative Studio Portfolio',
            description: 'Stunning portfolio website for a design agency showcasing their work with interactive galleries and case studies.',
            category: 'Portfolio',
            industry: 'Design',
            completedDate: '2024-03-10',
            url: 'https://creative-studio-demo.com',
            image: '/portfolio/creative.jpg',
            technologies: ['WordPress', 'Custom Theme', 'Gallery Plugin', 'Animation'],
            results: {
                portfolioViews: '500+/week',
                inquiries: '25+/month',
                projectValue: '$50k average'
            },
            testimonial: {
                text: 'Our new portfolio website perfectly represents our brand and has attracted high-value clients.',
                author: 'Emily Rodriguez, Creative Director'
            }
        },
        {
            id: 4,
            title: 'HealthCare Plus',
            description: 'Professional medical practice website with appointment booking, patient portal, and HIPAA compliance.',
            category: 'Healthcare',
            industry: 'Medical',
            completedDate: '2024-04-05',
            url: 'https://healthcare-plus-demo.com',
            image: '/portfolio/healthcare.jpg',
            technologies: ['WordPress', 'Appointment System', 'Patient Portal', 'Security'],
            results: {
                appointments: '300+/month',
                patientSatisfaction: '95%',
                efficiency: '40% improvement'
            },
            testimonial: {
                text: 'The appointment system has streamlined our operations and improved patient experience significantly.',
                author: 'Dr. David Kim, MD'
            }
        },
        {
            id: 5,
            title: 'Fitness Revolution',
            description: 'Dynamic fitness center website with class scheduling, membership management, and trainer profiles.',
            category: 'Fitness',
            industry: 'Health & Wellness',
            completedDate: '2024-05-12',
            url: 'https://fitness-revolution-demo.com',
            image: '/portfolio/fitness.jpg',
            technologies: ['WordPress', 'Membership Plugin', 'Class Booking', 'Payment System'],
            results: {
                memberships: '150+ new',
                classBookings: '500+/month',
                retention: '85%'
            },
            testimonial: {
                text: 'Our new website has helped us attract more members and manage our classes more efficiently.',
                author: 'Lisa Thompson, Manager'
            }
        },
        {
            id: 6,
            title: 'Legal Associates',
            description: 'Professional law firm website with case study database, attorney profiles, and consultation booking.',
            category: 'Legal',
            industry: 'Legal Services',
            completedDate: '2024-06-18',
            url: 'https://legal-associates-demo.com',
            image: '/portfolio/legal.jpg',
            technologies: ['WordPress', 'Custom Database', 'Consultation System', 'Document Portal'],
            results: {
                consultations: '50+/month',
                caseInquiries: '75+/month',
                credibility: 'Significantly improved'
            },
            testimonial: {
                text: 'The professional design and functionality have enhanced our firm\'s credibility and client acquisition.',
                author: 'Robert Wilson, Partner'
            }
        }
    ];

    const categories = ['All', 'Corporate', 'E-commerce', 'Portfolio', 'Healthcare', 'Fitness', 'Legal'];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="container mx-auto px-4 text-center">
                    <H1 className="mb-6 max-w-4xl mx-auto">
                        Our Portfolio: WordPress Websites That Drive Results
                    </H1>
                    <Lead className="mb-8 max-w-2xl mx-auto text-muted-foreground">
                        Explore our recent projects and see how we've helped businesses across various industries
                        achieve their online goals with custom WordPress solutions.
                    </Lead>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="/quote">Start Your Project</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/contact">Discuss Your Needs</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Filter Categories */}
            <section className="py-12 border-b">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap gap-4 justify-center">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={category === 'All' ? 'default' : 'outline'}
                                className="rounded-full"
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {projects.map((project) => (
                            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                                {/* Project Image */}
                                <div className="relative overflow-hidden">
                                    <div className="aspect-video bg-gray-200 dark:bg-gray-800 relative">
                                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                                            <Eye className="w-8 h-8" />
                                        </div>

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <Button size="sm" variant="secondary" asChild>
                                                <Link href={project.url} target="_blank">
                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    View Live Site
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <CardHeader>
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                                            <div className="flex items-center gap-2 mb-3">
                                                <Badge variant="outline">{project.category}</Badge>
                                                <Badge variant="secondary">{project.industry}</Badge>
                                            </div>
                                        </div>
                                        <div className="text-right text-sm text-muted-foreground">
                                            <Calendar className="w-4 h-4 inline mr-1" />
                                            {new Date(project.completedDate).toLocaleDateString()}
                                        </div>
                                    </div>
                                    <CardDescription className="text-base">{project.description}</CardDescription>
                                </CardHeader>

                                <CardContent className="space-y-6">
                                    {/* Technologies */}
                                    <div>
                                        <P className="text-sm font-medium mb-2">Technologies Used:</P>
                                        <div className="flex flex-wrap gap-1">
                                            {project.technologies.map((tech, index) => (
                                                <Badge key={index} variant="outline" className="text-xs">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Results */}
                                    <div>
                                        <P className="text-sm font-medium mb-3">Key Results:</P>
                                        <div className="grid grid-cols-2 gap-4">
                                            {Object.entries(project.results).map(([key, value]) => (
                                                <div key={key} className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                                    <P className="font-semibold text-orange-600 dark:text-orange-400">{value}</P>
                                                    <P className="text-xs text-muted-foreground capitalize">
                                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                                    </P>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Testimonial */}
                                    <div className="bg-orange-50 dark:bg-orange-900/10 p-4 rounded-lg border-l-4 border-orange-500">
                                        <P className="text-sm italic mb-2">"{project.testimonial.text}"</P>
                                        <P className="text-xs font-medium text-orange-600 dark:text-orange-400">
                                            — {project.testimonial.author}
                                        </P>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2">
                                        <Button className="flex-1" size="sm" asChild>
                                            <Link href={project.url} target="_blank">
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                View Live
                                            </Link>
                                        </Button>
                                        <Button variant="outline" size="sm" className="flex-1" asChild>
                                            <Link href={`/portfolio/${project.id}`}>
                                                Case Study
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-12">
                        <Button variant="outline" size="lg">
                            Load More Projects
                        </Button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <H2 className="mb-4">Portfolio Highlights</H2>
                        <P className="text-muted-foreground max-w-2xl mx-auto">
                            Here are some key metrics from our recent projects that demonstrate the impact of our work.
                        </P>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <H3 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">500+</H3>
                            <P className="text-muted-foreground">Websites Delivered</P>
                        </div>
                        <div className="text-center">
                            <H3 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">98%</H3>
                            <P className="text-muted-foreground">Client Satisfaction</P>
                        </div>
                        <div className="text-center">
                            <H3 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">150%</H3>
                            <P className="text-muted-foreground">Average Traffic Increase</P>
                        </div>
                        <div className="text-center">
                            <H3 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">2.5s</H3>
                            <P className="text-muted-foreground">Average Load Time</P>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <H2 className="mb-6">Ready to Join Our Success Stories?</H2>
                        <P className="text-muted-foreground mb-8">
                            Let's create a WordPress website that drives real results for your business.
                            Get started with a free consultation and quote.
                        </P>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <Link href="/quote">Get Your Free Quote</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/contact">Schedule Consultation</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

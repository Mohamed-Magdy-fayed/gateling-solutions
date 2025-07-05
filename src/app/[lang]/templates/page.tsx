import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { H1, H2, P, Lead } from '@/components/ui/typography';
import {
    ExternalLink,
    Download,
    Star,
    Eye,
} from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function TemplatesPage() {
    const categories = [
        { id: 'all', name: 'All Templates', count: 24 },
        { id: 'business', name: 'Business & Corporate', count: 8 },
        { id: 'ecommerce', name: 'E-commerce', count: 6 },
        { id: 'portfolio', name: 'Portfolio', count: 4 },
        { id: 'blog', name: 'Blog & Content', count: 3 },
        { id: 'landing', name: 'Landing Pages', count: 2 },
        { id: 'directory', name: 'Directory', count: 1 }
    ];

    const templates = [
        {
            id: 1,
            name: 'Corporate Pro',
            description: 'Professional corporate website template with modern design and advanced features.',
            category: 'business',
            price: 0,
            isPremium: false,
            rating: 4.8,
            downloads: 1250,
            image: '/templates/corporate-pro.jpg',
            demoUrl: '#',
            features: ['Responsive Design', 'Contact Forms', 'Team Section', 'Services Pages']
        },
        {
            id: 2,
            name: 'E-Shop Elite',
            description: 'Complete e-commerce solution with WooCommerce integration and modern design.',
            category: 'ecommerce',
            price: 49,
            isPremium: true,
            rating: 4.9,
            downloads: 890,
            image: '/templates/eshop-elite.jpg',
            demoUrl: '#',
            features: ['WooCommerce Ready', 'Product Filters', 'Wishlist', 'Quick View']
        },
        {
            id: 3,
            name: 'Creative Portfolio',
            description: 'Stunning portfolio template for designers, photographers, and creative professionals.',
            category: 'portfolio',
            price: 29,
            isPremium: true,
            rating: 4.7,
            downloads: 650,
            image: '/templates/creative-portfolio.jpg',
            demoUrl: '#',
            features: ['Gallery Layouts', 'Lightbox', 'Project Pages', 'Contact Form']
        },
        {
            id: 4,
            name: 'Blog Master',
            description: 'Clean and minimal blog template perfect for content creators and writers.',
            category: 'blog',
            price: 0,
            isPremium: false,
            rating: 4.6,
            downloads: 980,
            image: '/templates/blog-master.jpg',
            demoUrl: '#',
            features: ['Multiple Layouts', 'Social Sharing', 'Comments', 'Newsletter']
        },
        {
            id: 5,
            name: 'Landing Pro',
            description: 'High-converting landing page template for marketing campaigns and product launches.',
            category: 'landing',
            price: 39,
            isPremium: true,
            rating: 4.8,
            downloads: 420,
            image: '/templates/landing-pro.jpg',
            demoUrl: '#',
            features: ['Conversion Optimized', 'A/B Testing Ready', 'Analytics', 'Lead Forms']
        },
        {
            id: 6,
            name: 'Business Hub',
            description: 'Comprehensive business template with all the features you need to establish your online presence.',
            category: 'business',
            price: 35,
            isPremium: true,
            rating: 4.9,
            downloads: 750,
            image: '/templates/business-hub.jpg',
            demoUrl: '#',
            features: ['Multi-page Layout', 'Booking System', 'Testimonials', 'FAQ Section']
        }
    ];

    return (
        <div className="min-h-screen">
            <Header />
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="container mx-auto px-4 text-center">
                    <H1 className="mb-6 max-w-4xl mx-auto">
                        Premium WordPress Templates for Every Business
                    </H1>
                    <Lead className="mb-8 max-w-2xl mx-auto text-muted-foreground">
                        Choose from our collection of professionally designed, conversion-optimized WordPress templates.
                        All templates are mobile-responsive and SEO-ready.
                    </Lead>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="#templates">Browse Templates</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/quote">Custom Design</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Categories Filter */}
            <section className="py-12 border-b">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap gap-4 justify-center">
                        {categories.map((category) => (
                            <Button
                                key={category.id}
                                variant={category.id === 'all' ? 'default' : 'outline'}
                                className="rounded-full"
                            >
                                {category.name}
                                <Badge variant="secondary" className="ml-2">
                                    {category.count}
                                </Badge>
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Templates Grid */}
            <section id="templates" className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {templates.map((template) => (
                            <Card key={template.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                                <div className="relative overflow-hidden">
                                    <div className="aspect-video bg-gray-200 dark:bg-gray-800 relative">
                                        {/* Placeholder for template image */}
                                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                                            <Eye className="w-8 h-8" />
                                        </div>

                                        {/* Overlay with actions */}
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                            <Button size="sm" variant="secondary" asChild>
                                                <Link href={template.demoUrl}>
                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    Live Demo
                                                </Link>
                                            </Button>
                                            {template.isPremium ? (
                                                <Button size="sm">
                                                    <Download className="w-4 h-4 mr-2" />
                                                    ${template.price}
                                                </Button>
                                            ) : (
                                                <Button size="sm">
                                                    <Download className="w-4 h-4 mr-2" />
                                                    Free Download
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <CardHeader>
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <CardTitle className="text-lg">{template.name}</CardTitle>
                                            <div className="flex items-center gap-2 mt-2">
                                                {template.isPremium ? (
                                                    <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400">
                                                        Premium
                                                    </Badge>
                                                ) : (
                                                    <Badge variant="secondary">Free</Badge>
                                                )}
                                                <div className="flex items-center text-sm text-muted-foreground">
                                                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                                                    {template.rating}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            {template.isPremium ? (
                                                <P className="font-semibold text-lg">${template.price}</P>
                                            ) : (
                                                <P className="font-semibold text-lg text-green-600">Free</P>
                                            )}
                                            <P className="text-xs text-muted-foreground">{template.downloads} downloads</P>
                                        </div>
                                    </div>
                                    <CardDescription>{template.description}</CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <div className="space-y-4">
                                        <div>
                                            <P className="text-sm font-medium mb-2">Features:</P>
                                            <div className="flex flex-wrap gap-1">
                                                {template.features.map((feature, index) => (
                                                    <Badge key={index} variant="outline" className="text-xs">
                                                        {feature}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-2">
                                            <Button className="flex-1" size="sm" asChild>
                                                <Link href={template.demoUrl}>
                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    Preview
                                                </Link>
                                            </Button>
                                            <Button variant="outline" size="sm" className="flex-1">
                                                <Download className="w-4 h-4 mr-2" />
                                                {template.isPremium ? 'Buy Now' : 'Download'}
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-12">
                        <Button variant="outline" size="lg">
                            Load More Templates
                        </Button>
                    </div>
                </div>
            </section>

            {/* Custom Design CTA */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <H2 className="mb-6">Need a Custom Design?</H2>
                        <P className="text-muted-foreground mb-8">
                            Can't find the perfect template? We create custom WordPress websites tailored to your specific needs and brand.
                        </P>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <Link href="/quote">Get Custom Quote</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/contact">Discuss Your Project</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}


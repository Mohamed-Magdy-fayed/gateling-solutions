import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { H1, H2, H3, P, Lead } from '@/components/ui/typography';
import {
    Users,
    Award,
    Clock,
    Globe,
    Target,
    Heart,
    Zap,
    Shield
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
    const stats = [
        { icon: Users, label: 'Happy Clients', value: '500+' },
        { icon: Globe, label: 'Websites Delivered', value: '750+' },
        { icon: Award, label: 'Years Experience', value: '8+' },
        { icon: Clock, label: 'Average Project Time', value: '2-4 weeks' }
    ];

    const values = [
        {
            icon: Target,
            title: 'Results-Driven',
            description: 'We focus on creating websites that drive real business results and help you achieve your goals.'
        },
        {
            icon: Heart,
            title: 'Client-Focused',
            description: 'Your success is our success. We work closely with you throughout the entire process.'
        },
        {
            icon: Zap,
            title: 'Innovation',
            description: 'We stay up-to-date with the latest technologies and design trends to deliver cutting-edge solutions.'
        },
        {
            icon: Shield,
            title: 'Reliability',
            description: 'You can count on us for timely delivery, ongoing support, and transparent communication.'
        }
    ];

    const team = [
        {
            name: 'Sarah Johnson',
            role: 'Founder & Lead Developer',
            bio: 'With over 8 years of WordPress experience, Sarah leads our development team and ensures every project meets our high standards.',
            image: '/team/sarah.jpg'
        },
        {
            name: 'Mike Chen',
            role: 'UI/UX Designer',
            bio: 'Mike brings creativity and user-centered design thinking to every project, creating beautiful and functional interfaces.',
            image: '/team/mike.jpg'
        },
        {
            name: 'Emily Rodriguez',
            role: 'Project Manager',
            bio: 'Emily keeps projects on track and ensures clear communication between our team and clients throughout the process.',
            image: '/team/emily.jpg'
        },
        {
            name: 'David Kim',
            role: 'WordPress Developer',
            bio: 'David specializes in custom WordPress development and plugin creation, bringing technical expertise to complex projects.',
            image: '/team/david.jpg'
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="container mx-auto px-4 text-center">
                    <H1 className="mb-6 max-w-4xl mx-auto">
                        We're Passionate About Creating Amazing WordPress Websites
                    </H1>
                    <Lead className="mb-8 max-w-2xl mx-auto text-muted-foreground">
                        Founded in 2016, Gateling has been helping businesses establish their online presence with
                        professional WordPress websites that drive results.
                    </Lead>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center mx-auto mb-4">
                                    <stat.icon className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                                </div>
                                <H3 className="text-3xl font-bold mb-2">{stat.value}</H3>
                                <P className="text-muted-foreground">{stat.label}</P>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <H2 className="mb-6">Our Story</H2>
                            <P className="text-muted-foreground text-lg leading-relaxed">
                                Gateling was born from a simple belief: every business deserves a professional website that
                                helps them grow. What started as a small freelance operation has grown into a dedicated team
                                of WordPress experts who are passionate about creating exceptional web experiences.
                            </P>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <H3 className="mb-4">Our Mission</H3>
                                <P className="text-muted-foreground mb-6">
                                    To empower businesses of all sizes with professional WordPress websites that not only look
                                    great but also drive real business results. We believe that great design and functionality
                                    should be accessible to everyone.
                                </P>
                                <H3 className="mb-4">Our Vision</H3>
                                <P className="text-muted-foreground">
                                    To be the go-to WordPress agency for businesses looking to establish a strong online presence.
                                    We envision a world where every business has the tools they need to succeed online.
                                </P>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                                <H3 className="mb-4">Why Choose Gateling?</H3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0" />
                                        <span className="text-sm">8+ years of WordPress expertise</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0" />
                                        <span className="text-sm">500+ successful projects delivered</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0" />
                                        <span className="text-sm">Dedicated support and maintenance</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0" />
                                        <span className="text-sm">Custom solutions for every business</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <H2 className="mb-4">Our Values</H2>
                        <P className="text-muted-foreground max-w-2xl mx-auto">
                            These core values guide everything we do and shape how we work with our clients.
                        </P>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <Card key={index} className="text-center h-full">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center mx-auto mb-4">
                                        <value.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                                    </div>
                                    <CardTitle className="text-lg">{value.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <P className="text-muted-foreground text-sm">{value.description}</P>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <H2 className="mb-4">Meet Our Team</H2>
                        <P className="text-muted-foreground max-w-2xl mx-auto">
                            Our talented team of designers, developers, and project managers work together to bring your vision to life.
                        </P>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <Card key={index} className="text-center">
                                <CardHeader>
                                    <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 mx-auto mb-4 flex items-center justify-center">
                                        <Users className="w-8 h-8 text-muted-foreground" />
                                    </div>
                                    <CardTitle className="text-lg">{member.name}</CardTitle>
                                    <CardDescription className="text-orange-600 dark:text-orange-400 font-medium">
                                        {member.role}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <P className="text-muted-foreground text-sm">{member.bio}</P>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <H2 className="mb-6">Ready to Work With Us?</H2>
                        <P className="text-muted-foreground mb-8">
                            Let's discuss your project and see how we can help you achieve your online goals.
                        </P>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <Link href="/quote">Start Your Project</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/contact">Get In Touch</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

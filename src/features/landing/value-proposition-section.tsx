'use client';

import { 
  Zap, 
  Shield, 
  Smartphone, 
  Search, 
  Headphones, 
  TrendingUp,
  Clock,
  Award
} from 'lucide-react';
import { H2, H3, P } from '@/components/ui/typography';

export function ValuePropositionSection() {
  const mainBenefits = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed and performance to keep visitors engaged and improve search rankings.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive',
      description: 'Perfect display on all devices - desktop, tablet, and mobile for maximum reach.',
    },
    {
      icon: Search,
      title: 'SEO Optimized',
      description: 'Built with search engine optimization best practices to help customers find you online.',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and reliable hosting to protect your business and customers.',
    },
  ];

  const additionalBenefits = [
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Most projects completed within 2-4 weeks',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Ongoing maintenance and support included',
    },
    {
      icon: TrendingUp,
      title: 'Conversion Focused',
      description: 'Designed to turn visitors into customers',
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: '100% satisfaction guarantee on all projects',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <H2 className="text-primary mb-4">
            Why Choose Gateling for Your WordPress Website?
          </H2>
          <P className="text-lg text-muted-foreground">
            We combine technical expertise with business strategy to create websites 
            that not only look great but drive real results for your business.
          </P>
        </div>

        {/* Main benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mainBenefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-background rounded-xl p-6 shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <H3 className="text-lg mb-2 border-none pb-0">{benefit.title}</H3>
              <P className="text-muted-foreground text-sm mt-0">
                {benefit.description}
              </P>
            </div>
          ))}
        </div>

        {/* Additional benefits */}
        <div className="bg-background rounded-2xl p-8 shadow-sm border border-border/50">
          <div className="text-center mb-8">
            <H3 className="text-primary border-none pb-0">
              Everything You Need for Online Success
            </H3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <H3 className="text-base mb-2 border-none pb-0">{benefit.title}</H3>
                <P className="text-muted-foreground text-sm mt-0">
                  {benefit.description}
                </P>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <P className="text-muted-foreground text-sm mt-0">Websites Delivered</P>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <P className="text-muted-foreground text-sm mt-0">Client Satisfaction</P>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <P className="text-muted-foreground text-sm mt-0">Years Experience</P>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <P className="text-muted-foreground text-sm mt-0">Support Available</P>
          </div>
        </div>
      </div>
    </section>
  );
}


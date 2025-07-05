'use client';

import { 
  MessageSquare, 
  Lightbulb, 
  Code, 
  Rocket,
  ArrowRight
} from 'lucide-react';
import { H2, H3, P } from '@/components/ui/typography';

export function ProcessSection() {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Discovery & Planning',
      description: 'We start with a detailed consultation to understand your business, goals, and requirements.',
      details: [
        'Business analysis',
        'Target audience research',
        'Competitor analysis',
        'Project timeline',
      ],
    },
    {
      icon: Lightbulb,
      title: 'Design & Strategy',
      description: 'Our team creates a custom design strategy that aligns with your brand and conversion goals.',
      details: [
        'Custom design mockups',
        'User experience planning',
        'Content strategy',
        'SEO planning',
      ],
    },
    {
      icon: Code,
      title: 'Development & Testing',
      description: 'We build your website using best practices, ensuring it\'s fast, secure, and mobile-friendly.',
      details: [
        'WordPress development',
        'Mobile optimization',
        'Speed optimization',
        'Security implementation',
      ],
    },
    {
      icon: Rocket,
      title: 'Launch & Support',
      description: 'We launch your website and provide ongoing support to ensure continued success.',
      details: [
        'Website launch',
        'Training & documentation',
        'Ongoing maintenance',
        '24/7 support',
      ],
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <H2 className="text-primary mb-4">
            Our Proven 4-Step Process
          </H2>
          <P className="text-lg text-muted-foreground">
            From initial consultation to launch and beyond, we guide you through 
            every step of creating your perfect WordPress website.
          </P>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border/50" />
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step card */}
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300 relative z-10">
                  {/* Step number */}
                  <div className="absolute -top-4 left-6 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 pt-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <H3 className="text-lg mb-3 border-none pb-0">{step.title}</H3>
                  <P className="text-muted-foreground mb-4 mt-0">
                    {step.description}
                  </P>

                  {/* Details list */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline info */}
        <div className="mt-16 text-center bg-background rounded-xl p-8 shadow-sm border border-border/50">
          <H3 className="text-primary mb-4 border-none pb-0">
            Typical Project Timeline
          </H3>
          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">1-2 Days</div>
              <P className="text-muted-foreground text-sm mt-0">Discovery & Planning</P>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">1-2 Weeks</div>
              <P className="text-muted-foreground text-sm mt-0">Design & Development</P>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">2-3 Days</div>
              <P className="text-muted-foreground text-sm mt-0">Testing & Launch</P>
            </div>
          </div>
          <P className="text-muted-foreground mt-6">
            Most projects are completed within 2-4 weeks from start to finish
          </P>
        </div>
      </div>
    </section>
  );
}


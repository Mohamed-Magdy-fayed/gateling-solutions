'use client';

import Link from 'next/link';
import { ArrowRight, Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { H2, H3, P } from '@/components/ui/typography';
import { APP_CONFIG } from '@/constants';

export function FinalCtaSection() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team',
      action: 'Call Now',
      href: `tel:${APP_CONFIG.phone}`,
      value: APP_CONFIG.phone,
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get a detailed response within 24 hours',
      action: 'Send Email',
      href: `mailto:${APP_CONFIG.email}`,
      value: APP_CONFIG.email,
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with us in real-time',
      action: 'Start Chat',
      href: '#',
      value: 'Available 9AM-6PM EST',
    },
  ];

  const urgencyFactors = [
    'Free consultation (limited time)',
    'Priority booking for new clients',
    'Special launch month pricing',
    '30-day money-back guarantee',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="mb-12">
            <H2 className="text-primary mb-4">
              Ready to Transform Your Business Online?
            </H2>
            <P className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of successful businesses who have grown their revenue 
              with a professional WordPress website. Get started today with a free consultation.
            </P>

            {/* Primary CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/quote">
                  Get Your Free Quote Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/templates">
                  Browse Templates
                </Link>
              </Button>
            </div>

            {/* Urgency factors */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              {urgencyFactors.map((factor, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{factor}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact methods */}
          <div className="bg-background/80 backdrop-blur rounded-2xl p-8 shadow-lg border border-border/50">
            <H3 className="text-primary mb-6 border-none pb-0">
              Multiple Ways to Get Started
            </H3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <H3 className="text-lg mb-2 border-none pb-0">{method.title}</H3>
                  <P className="text-muted-foreground text-sm mb-3 mt-0">
                    {method.description}
                  </P>
                  <P className="text-sm font-medium text-foreground mb-3 mt-0">
                    {method.value}
                  </P>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={method.href}>
                      {method.action}
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Final reassurance */}
          <div className="mt-12 text-center">
            <P className="text-muted-foreground mb-4">
              🔒 Your information is secure and will never be shared
            </P>
            <P className="text-sm text-muted-foreground">
              Trusted by 500+ businesses • 98% satisfaction rate • 5-star reviews
            </P>
          </div>
        </div>
      </div>
    </section>
  );
}


'use client';

import { Star, Quote } from 'lucide-react';
import { H2, H3, P } from '@/components/ui/typography';

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'Johnson Consulting',
      role: 'CEO',
      content: 'Gateling transformed our online presence completely. Our new website not only looks professional but has increased our lead generation by 300%. The team was responsive, professional, and delivered exactly what we needed.',
      rating: 5,
      image: '/api/placeholder/60/60',
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'TechStart Solutions',
      role: 'Founder',
      content: 'Working with Gateling was a game-changer for our startup. They understood our vision and created a website that perfectly represents our brand. The mobile optimization is fantastic, and our bounce rate has decreased significantly.',
      rating: 5,
      image: '/api/placeholder/60/60',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'Bloom Boutique',
      role: 'Owner',
      content: 'I needed an e-commerce site that was both beautiful and functional. Gateling delivered beyond my expectations. Sales have increased by 250% since the launch, and customers constantly compliment the user experience.',
      rating: 5,
      image: '/api/placeholder/60/60',
    },
  ];

  const stats = [
    {
      value: '300%',
      label: 'Average Lead Increase',
      description: 'Our clients see significant growth in leads and conversions',
    },
    {
      value: '98%',
      label: 'Client Satisfaction',
      description: 'Nearly all our clients are completely satisfied with results',
    },
    {
      value: '2-4 Weeks',
      label: 'Average Delivery',
      description: 'Fast turnaround without compromising on quality',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <H2 className="text-primary mb-4">
            What Our Clients Say About Us
          </H2>
          <P className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what business owners say 
            about working with Gateling and the results they've achieved.
          </P>
        </div>

        {/* Testimonials grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-muted/30 rounded-xl p-6 relative hover:bg-muted/50 transition-colors duration-300"
            >
              {/* Quote icon */}
              <div className="absolute -top-3 left-6 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                <Quote className="h-3 w-3" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <P className="text-foreground/80 mb-6 mt-0 italic">
                "{testimonial.content}"
              </P>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <H3 className="text-sm border-none pb-0 mb-1">{testimonial.name}</H3>
                  <P className="text-xs text-muted-foreground mt-0">
                    {testimonial.role}, {testimonial.company}
                  </P>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
          <div className="text-center mb-8">
            <H3 className="text-primary border-none pb-0 mb-2">
              Results That Speak for Themselves
            </H3>
            <P className="text-muted-foreground mt-0">
              Our track record of success with businesses like yours
            </P>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <H3 className="text-lg border-none pb-0 mb-2">{stat.label}</H3>
                <P className="text-muted-foreground text-sm mt-0">
                  {stat.description}
                </P>
              </div>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 text-center">
          <P className="text-muted-foreground mb-6">
            Trusted by 500+ businesses across industries
          </P>
          <div className="flex justify-center items-center gap-8 opacity-60">
            {/* Placeholder for industry badges/certifications */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-muted rounded" />
              <span className="text-sm">WordPress Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-muted rounded" />
              <span className="text-sm">Google Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-muted rounded" />
              <span className="text-sm">SSL Secured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


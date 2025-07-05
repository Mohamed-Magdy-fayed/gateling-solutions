'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { H3, P } from '@/components/ui/typography';
import { APP_CONFIG } from '@/constants';

export function Footer() {
  const navigation = {
    services: [
      { name: 'WordPress Development', href: '/services/wordpress' },
      { name: 'Website Design', href: '/services/design' },
      { name: 'E-commerce Solutions', href: '/services/ecommerce' },
      { name: 'SEO Optimization', href: '/services/seo' },
      { name: 'Website Maintenance', href: '/services/maintenance' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Process', href: '/process' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Testimonials', href: '/testimonials' },
      { name: 'Blog', href: '/blog' },
    ],
    resources: [
      { name: 'Templates', href: '/templates' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Support', href: '/support' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Refund Policy', href: '/refund' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">G</span>
                </div>
                <span className="font-bold text-xl text-foreground">{APP_CONFIG.name}</span>
              </Link>
              
              <P className="text-muted-foreground mb-6 max-w-md mt-0">
                Professional WordPress website development services that help businesses 
                grow online. From concept to launch, we create websites that convert 
                visitors into customers.
              </P>

              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <Link href={`mailto:${APP_CONFIG.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                    {APP_CONFIG.email}
                  </Link>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <Link href={`tel:${APP_CONFIG.phone}`} className="text-muted-foreground hover:text-foreground transition-colors">
                    {APP_CONFIG.phone}
                  </Link>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">
                    Remote Team • Serving Clients Worldwide
                  </span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4 mt-6">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                  >
                    <social.icon className="h-4 w-4" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation links */}
            <div>
              <H3 className="text-foreground mb-4 border-none pb-0">Services</H3>
              <ul className="space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <H3 className="text-foreground mb-4 border-none pb-0">Company</H3>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <H3 className="text-foreground mb-4 border-none pb-0">Resources</H3>
              <ul className="space-y-3 mb-6">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Newsletter signup */}
              <div className="bg-background rounded-lg p-4 border border-border/50">
                <H3 className="text-sm mb-2 border-none pb-0">Stay Updated</H3>
                <P className="text-xs text-muted-foreground mb-3 mt-0">
                  Get tips and insights delivered to your inbox
                </P>
                <div className="flex items-center gap-2">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="flex-1 min-w-0 px-3 py-2 text-xs bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <button className="px-3 py-2 bg-primary text-primary-foreground text-xs rounded hover:bg-primary/90 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <P className="text-sm text-muted-foreground mt-0">
              © {new Date().getFullYear()} {APP_CONFIG.name}. All rights reserved.
            </P>
            
            <div className="flex items-center gap-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


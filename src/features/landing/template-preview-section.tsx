'use client';

import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { H2, H3, P } from '@/components/ui/typography';
import { TEMPLATE_CATEGORIES } from '@/constants';
import { useTranslation } from '@/i18n/useTranslation';

export function TemplatePreviewSection() {
  const { t } = useTranslation();

  const featuredTemplates = [
    {
      id: 1,
      name: t('templatePreview.featuredTemplates.professionalBusiness.name'),
      category: 'business',
      image: '/api/placeholder/400/300',
      isPremium: false,
      description: t('templatePreview.featuredTemplates.professionalBusiness.description'),
      demoUrl: '#',
    },
    {
      id: 2,
      name: t('templatePreview.featuredTemplates.modernEcommerce.name'),
      category: 'ecommerce',
      image: '/api/placeholder/400/300',
      isPremium: true,
      description: t('templatePreview.featuredTemplates.modernEcommerce.description'),
      demoUrl: '#',
    },
    {
      id: 3,
      name: t('templatePreview.featuredTemplates.creativePortfolio.name'),
      category: 'portfolio',
      image: '/api/placeholder/400/300',
      isPremium: false,
      description: t('templatePreview.featuredTemplates.creativePortfolio.description'),
      demoUrl: '#',
    },
    {
      id: 4,
      name: t('templatePreview.featuredTemplates.restaurantFood.name'),
      category: 'business',
      image: '/api/placeholder/400/300',
      isPremium: true,
      description: t('templatePreview.featuredTemplates.restaurantFood.description'),
      demoUrl: '#',
    },
  ];

  const categories = Object.entries(TEMPLATE_CATEGORIES).slice(0, 6);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <H2 className="text-primary mb-4">
            {t('templatePreview.header.title')}
          </H2>
          <P className="text-lg text-muted-foreground">
            {t('templatePreview.header.description')}
          </P>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {categories.map(([key, category]) => (
            <Link
              key={key}
              href={`/templates?category=${key}`}
              className="group bg-muted/50 hover:bg-muted rounded-lg p-4 text-center transition-all duration-200 hover:scale-105"
            >
              <div className="text-2xl mb-2">
                {/* Icon placeholder - would use actual icons */}
                <div className="w-8 h-8 bg-primary/20 rounded-lg mx-auto" />
              </div>
              <P className="text-sm font-medium mt-0 group-hover:text-primary transition-colors">
                {category.label}
              </P>
            </Link>
          ))}
        </div>

        {/* Featured templates */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredTemplates.map((template) => (
            <div
              key={template.id}
              className="group bg-background rounded-xl overflow-hidden shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Template image */}
              <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                {/* Placeholder for template screenshot */}
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-lg mx-auto mb-2" />
                    <P className="text-xs text-muted-foreground mt-0">{t('templatePreview.templateImagePlaceholder')}</P>
                  </div>
                </div>

                {/* Premium badge */}
                {template.isPremium && (
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                    {t('templatePreview.premiumBadge')}
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary" asChild>
                      <Link href={template.demoUrl}>
                        <ExternalLink className="h-4 w-4 mr-1" />
                        {t('templatePreview.demoButton')}
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href="/quote">
                        {t('templatePreview.useThisButton')}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Template info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <H3 className="text-base border-none pb-0">{template.name}</H3>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                    {TEMPLATE_CATEGORIES[template.category as keyof typeof TEMPLATE_CATEGORIES]?.label}
                  </span>
                </div>
                <P className="text-sm text-muted-foreground mt-0">
                  {template.description}
                </P>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-sm font-medium text-primary">
                    {template.isPremium ? t('templatePreview.premiumText') : t('templatePreview.freeText')}
                  </span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={template.demoUrl}>
                      {t('templatePreview.viewDetailsButton')}
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/templates">
              {t('templatePreview.viewAllTemplatesButton')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <P className="text-muted-foreground mt-4">
            {t('templatePreview.ctaDescription')}
          </P>
        </div>
      </div>
    </section>
  );
}

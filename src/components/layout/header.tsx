'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Moon, Sun, Menu, X, GlobeIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { APP_CONFIG } from '@/constants';
import { useTranslation } from '@/i18n/useTranslation';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t, switchLanguage } = useTranslation()

  const navigation = [
    { name: t('header.navigation.about'), href: '/about' },
    { name: t('header.navigation.services'), href: '/services' },
    { name: t('header.navigation.portfolio'), href: '/portfolio' },
    { name: t('header.navigation.templates'), href: '/templates' },
    { name: t('header.navigation.contact'), href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 gap-4 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 whitespace-nowrap">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">G</span>
            </div>
            <span className="font-bold text-xl text-foreground">{APP_CONFIG.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="h-9 w-9"
            >
              <Sun className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <Moon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <span className="sr-only">{t('header.themeToggle')}</span>
            </Button>

            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              asChild
            >
              <Link href={switchLanguage()}>
                <GlobeIcon size={20} />
                <span className="sr-only">{t('header.languageToggle')}</span>
              </Link>
            </Button>

            {/* CTA Button */}
            <Button asChild className="hidden sm:inline-flex">
              <Link href="/quote">{t('header.ctaButton')}</Link>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">{t('header.mobileMenuToggle')}</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild className="w-full">
                  <Link href="/quote" onClick={() => setIsMenuOpen(false)}>
                    {t('header.ctaButton')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

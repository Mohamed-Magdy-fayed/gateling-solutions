'use client';

import { usePathname } from 'next/navigation';
import { Bell, Search, Menu, Sun, Moon, GlobeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { H3 } from '@/components/ui/typography';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useTranslation } from '@/i18n/useTranslation';

export function AdminHeader() {
  const pathname = usePathname();

  const { theme, setTheme } = useTheme();
  const { t, switchLanguage } = useTranslation()

  const getPageTitle = (path: string) => {
    const segments = path.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1];

    switch (lastSegment) {
      case 'admin':
        return 'Dashboard';
      case 'requests':
        return 'Client Requests';
      case 'templates':
        return 'Templates';
      case 'communications':
        return 'Communications';
      case 'analytics':
        return 'Analytics';
      case 'settings':
        return 'Settings';
      default:
        return 'Admin Panel';
    }
  };

  return (
    <div className="flex items-center justify-between w-full">
      {/* Left side - Title */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        <H3 className="border-none pb-0">{getPageTitle(pathname)}</H3>
      </div>

      {/* Right side - Actions */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 bg-muted/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-64"
          />
        </div>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center">
            3
          </span>
        </Button>

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

        {/* Quick actions */}
        <Button size="sm">
          New Request
        </Button>
      </div>
    </div>
  );
}


import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale as Locale)) notFound();

    return {
        messages: (await import(`../../messages/${locale}.json`)).default,
        timeZone: 'UTC',
        now: new Date(),
    };
});

export const localeNames: Record<Locale, string> = {
    en: 'English',
    ar: 'العربية',
};

export const localeFlags: Record<Locale, string> = {
    en: '🇺🇸',
    ar: '🇸🇦',
};

// Direction mapping for RTL support
export const localeDirections: Record<Locale, 'ltr' | 'rtl'> = {
    en: 'ltr',
    ar: 'rtl',
};


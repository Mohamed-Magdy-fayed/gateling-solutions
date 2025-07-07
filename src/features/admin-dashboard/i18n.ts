import { LanguageMessages } from "@/i18n/lib";

export const adminEn = {
    adminSidebar: {
        adminPanel: 'Admin Panel',
        navigation: {
            title: 'Main Navigation',
            dashboard: 'Dashboard',
            clientRequests: 'Client Requests',
            templates: 'Templates',
            communications: 'Communications',
            analytics: 'Analytics',
            settings: 'Settings',
        },
        userSection: {
            adminUser: 'Admin User',
            signOut: 'Sign Out',
        },
        general: "General"
    },
} as const satisfies LanguageMessages

export const adminAr = {
    adminSidebar: {
        adminPanel: 'لوحة التحكم',
        navigation: {
            title: 'القائمة الرئيسية',
            dashboard: 'لوحة القيادة',
            clientRequests: 'طلبات العملاء',
            templates: 'القوالب',
            communications: 'الاتصالات',
            analytics: 'التحليلات',
            settings: 'الإعدادات',
        },
        userSection: {
            adminUser: 'المستخدم المسؤول',
            signOut: 'تسجيل الخروج',
        },
        general: "عام"
    },
} as const satisfies LanguageMessages
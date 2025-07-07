'use client';

import { ReactNode } from "react";

import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuAction } from "@/components/ui/sidebar";
import { useTranslation } from "@/i18n/useTranslation";
import {
  LayoutDashboard,
  Users,
  MessageSquare,
  Settings,
  BarChart3,
  Palette,
  LogOut,
  ChevronRight
} from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";
import { APP_CONFIG } from "@/constants";
import { AdminHeader } from "./admin-header";


export const allowedByDefault = ["/redirects", "/admin/users_management/account"]

export function AdminSidebar({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { t, locale } = useTranslation();

  const navigation = [
    {
      name: t('adminSidebar.navigation.dashboard'),
      href: '/admin',
      icon: LayoutDashboard,
    },
    {
      name: t('adminSidebar.navigation.clientRequests'),
      href: '/admin/requests',
      icon: Users,
    },
    {
      name: t('adminSidebar.navigation.templates'),
      href: '/admin/templates',
      icon: Palette,
    },
    {
      name: t('adminSidebar.navigation.communications'),
      href: '/admin/communications',
      icon: MessageSquare,
    },
    {
      name: t('adminSidebar.navigation.analytics'),
      href: '/admin/analytics',
      icon: BarChart3,
    },
    {
      name: t('adminSidebar.navigation.settings'),
      href: '/admin/settings',
      icon: Settings,
    },
  ];

  const generalLinks = [
    {
      name: t('adminSidebar.userSection.signOut'),
      href: '#',
      icon: LogOut,
    },
  ];

  function renderSidebarItems(items: typeof navigation, pathname: string) {
    return items.map((navLink) => (
      <SidebarMenuItem key={navLink.href || navLink.name}>
        <SidebarMenuButton
          asChild
          tooltip={navLink.name}
          size="sm"
          aria-activedescendant={
            navLink.href && pathname.startsWith(navLink.href)
              ? "true"
              : "false"
          }
          className="aria-[activedescendant=true]:bg-accent/60"
        >
          <Link href={navLink.href}>
            {navLink.icon ? <navLink.icon /> : null}
            <span>{navLink.name}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    ));
  }

  function renderDropdownMenuForItem(navLink: typeof navigation[number], pathname: string) {
    return (
      <DropdownMenu key={navLink.name + "DropdownMenu"}>
        <DropdownMenuTrigger asChild>
          <SidebarMenuItem>
            <SidebarMenuButton size="sm" tooltip={navLink.name}>
              {navLink.icon ? <navLink.icon size={20} /> : null}
              <span>{navLink.name}</span>
              <SidebarMenuAction asChild className="transition-transform duration-200 ml-auto">
                <ChevronRight />
              </SidebarMenuAction>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right">
          <DropdownMenuGroup>
            <DropdownMenuItem
              asChild
              key={navLink.href || navLink.name}
              aria-activedescendant={
                navLink.href && pathname.startsWith(navLink.href)
                  ? "true"
                  : "false"
              }
              className="aria-[activedescendant=true]:bg-accent/60"
            >
              <Link href={navLink.href}>
                {navLink.icon ? <navLink.icon size={20} /> : null}
                <span>{navLink.name}</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <SidebarProvider dir={locale === "ar" ? "rtl" : "ltr"}>
      <Sidebar collapsible="icon" variant="inset" side={locale === "ar" ? "right" : "left"}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/admin" className="flex items-center gap-2 whitespace-nowrap h-fit">
                  <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">G</span>
                  </div>
                  <div>
                    <span className="font-bold text-lg text-foreground">{APP_CONFIG.name}</span>
                    <div className="text-xs text-muted-foreground">{t('adminSidebar.adminPanel')}</div>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarSeparator className="mx-0" />
        </SidebarHeader>
        <SidebarContent className="px-1">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarGroupLabel>{t("adminSidebar.navigation.title")}</SidebarGroupLabel>
              <SidebarMenu>
                {/* Sidebar (Collapsible) */}
                <div className="group-data-[collapsible=icon]:hidden">
                  {renderSidebarItems(navigation, pathname)}
                </div>
                {/* Dropdown (Collapsed/rail) */}
                <div className="hidden group-data-[collapsible=icon]:block">
                  {navigation.map((item) => renderDropdownMenuForItem(item, pathname))}
                </div>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup className="mt-auto">
            <SidebarGroupContent>
              <SidebarGroupLabel>{t("adminSidebar.general")}</SidebarGroupLabel>
              <SidebarMenu>
                {/* Sidebar (Collapsible) */}
                <div className="group-data-[collapsible=icon]:hidden">
                  {renderSidebarItems(generalLinks, pathname)}
                </div>
                {/* Dropdown (Collapsed/rail) */}
                <div className="hidden group-data-[collapsible=icon]:block">
                  {generalLinks.map((item) => renderDropdownMenuForItem(item, pathname))}
                </div>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarSeparator className="mx-0" />
          <SidebarMenu>
            <SidebarMenuItem>
              <div className="flex items-center gap-3 px-3 py-2 mb-2">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">A</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-foreground truncate">
                    {t('adminSidebar.userSection.adminUser')}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
                    admin@gateling.com
                  </div>
                </div>
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center gap-2 p-4">
          <SidebarTrigger className="ltr:-ml-1 rtl:-mr-1" />
          <Separator orientation="vertical" className="ltr:mr-2 rtl:ml-2 h-4" />
          {/* <SidebarNavBreadCrumb /> */}
          {/* <SidebarNavActions actionGroups={actionGroups} actions={actions} className="ltr:ml-auto rtl:mr-auto" /> */}
          <AdminHeader />
        </header>
        <Separator />
        <div className="p-4">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

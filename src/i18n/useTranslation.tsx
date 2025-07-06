'use client'

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { initI18n, locales, type LanguageMessages } from "./lib"
import { usePathname } from "next/navigation"

const TranslationContext = createContext<
  | (ReturnType<typeof initI18n> & {
    setLocale: (locale: string) => void
    locale: string
    userLocale: string
    isRtl: boolean
  })
  | null
>(null)

export function TranslationProvider({
  defaultLocale,
  translations,
  fallbackLocale,
  children,
}: {
  defaultLocale?: string
  translations: Record<Lowercase<string>, LanguageMessages>
  fallbackLocale: string | string[]
  children: ReactNode
}) {
  const pathname = usePathname()
  const [locale, setLocale] = useState(() => {
    if (defaultLocale == null) return locales.find(locale => pathname.includes(locale)) || navigator.language
    return defaultLocale
  })
  const initRes = useMemo(() => {
    return initI18n({
      locale,
      fallbackLocale,
      translations,
    })
  }, [locale, fallbackLocale, translations])

  const isRtl = useMemo(() => locale === "ar", [locale])

  return (
    <TranslationContext.Provider
      value={{ ...initRes, setLocale, locale, userLocale: navigator.language, isRtl }}
    >
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context == null) {
    throw new Error("useTranslation must be used within a TranslationProvider")
  }
  return context
}

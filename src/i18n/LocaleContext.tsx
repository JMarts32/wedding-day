import { createContext, useContext, useMemo } from "react"
import type { PropsWithChildren } from "react"
import { translations } from "./translations"
import type { Locale, T } from "./translations"

function detectLocale(): Locale {
  const lang = navigator.language.toLowerCase()
  if (lang.startsWith("es")) return "es"
  if (lang.startsWith("fr")) return "fr"
  return "en"
}

interface LocaleContextValue {
  t: T
  locale: Locale
}

const LocaleContext = createContext<LocaleContextValue>({
  t: translations.en,
  locale: "en",
})

export function LocaleProvider({ children }: PropsWithChildren) {
  const value = useMemo(() => {
    const locale = detectLocale()
    return { t: translations[locale], locale }
  }, [])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useT(): T {
  return useContext(LocaleContext).t
}

export function useLocale(): Locale {
  return useContext(LocaleContext).locale
}

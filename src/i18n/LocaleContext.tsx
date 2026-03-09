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

const LocaleContext = createContext<T>(translations.en)

export function LocaleProvider({ children }: PropsWithChildren) {
  const t = useMemo(() => {
    const locale = detectLocale()
    return translations[locale]
  }, [])

  return <LocaleContext.Provider value={t}>{children}</LocaleContext.Provider>
}

export function useT(): T {
  return useContext(LocaleContext)
}

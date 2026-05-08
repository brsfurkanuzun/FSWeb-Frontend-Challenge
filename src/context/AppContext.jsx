import { useEffect, useMemo } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { AppStateContext } from './AppStateContext'

export function AppProvider({ children }) {
  const [language, setLanguage] = useLocalStorage('portfolio_language', 'tr')
  const [theme, setTheme] = useLocalStorage('portfolio_theme', 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const value = useMemo(
    () => ({
      language,
      theme,
      setLanguage,
      setTheme,
      toggleLanguage: () => setLanguage((prev) => (prev === 'tr' ? 'en' : 'tr')),
      toggleTheme: () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    [language, theme, setLanguage, setTheme],
  )

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>
}

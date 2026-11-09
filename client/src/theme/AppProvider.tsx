import { useState, type ReactNode } from 'react'
import { AppContext, type ThemeMode } from './AppContext.ts'

export default function AppProvider({ children }: { children: ReactNode }) {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light')

  const toggleTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light')
    // the CSS in theme.css reads this attribute
    document.documentElement.dataset.theme = themeMode
  }

  return <AppContext value={{ themeMode, toggleTheme }}>{children}</AppContext>
}

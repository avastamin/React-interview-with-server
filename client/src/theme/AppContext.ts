import { createContext } from 'react'

export type ThemeMode = 'light' | 'dark'

export interface AppContextValue {
  themeMode: ThemeMode
  toggleTheme: () => void
}

export const AppContext = createContext<AppContextValue | null>(null)

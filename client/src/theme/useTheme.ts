import { use } from 'react'
import { AppContext } from './AppContext.ts'

export function useTheme() {
  const context = use(AppContext)
  if (!context) {
    throw new Error('useTheme must be used inside <AppProvider>')
  }
  return context
}

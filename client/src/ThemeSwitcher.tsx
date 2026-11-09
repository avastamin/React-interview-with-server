import { useTheme } from './theme/useTheme.ts'

import styles from './ThemeSwitcher.module.css'

export default function ThemeSwitcher() {
  const { themeMode, toggleTheme } = useTheme()
  const isDark = themeMode === 'dark'

  return (
    <section className={styles.root}>
      <h1>Toggle Theme</h1>
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label="Dark mode"
        className={styles.switch}
        onClick={toggleTheme}
      >
        <span className={styles.thumb} />
        <span className={styles.label}>{isDark ? 'Dark' : 'Light'}</span>
      </button>
    </section>
  )
}

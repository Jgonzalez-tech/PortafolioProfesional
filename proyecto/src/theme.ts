export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'portfolio-theme'

export function getInitialTheme(): Theme {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'dark' ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme

  const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
  if (themeColor) {
    themeColor.content = theme === 'dark' ? '#0f172a' : '#f8fafc'
  }

  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // El modo sigue funcionando aunque el almacenamiento no esté disponible.
  }
}

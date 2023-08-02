import 'styled-components'
import type theme from '.'

declare module 'styled-components' {
  type ThemeType = typeof theme

  export interface DefaultTheme extends ThemeType { }
}

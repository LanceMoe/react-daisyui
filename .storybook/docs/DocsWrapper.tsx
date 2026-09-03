import React from 'react'

import { useGlobalTheme } from '../../.storybook/theming/useGlobalTheme'
import Theme from '../../src/Theme'

export function DocsWrapper({ children }: { children: React.ReactNode }) {
  const theme = useGlobalTheme()
  return <Theme dataTheme={theme}>{children}</Theme>
}

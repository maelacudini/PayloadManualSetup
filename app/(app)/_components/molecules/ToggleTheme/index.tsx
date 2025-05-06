'use client'

import { ICON_SIZE, THEMES } from "@/utils/constants"
import { useTheme } from "@/utils/hooks/useTheme"
import { Button } from "../../atoms/Button"
import { Moon, Sun } from "lucide-react"

export const ToggleTheme = () => {
  const { updateTheme } = useTheme()

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {THEMES.map((theme) => (
        <Button variant="outline" size="icon" key={theme} onClick={() => updateTheme(theme)}>
          {theme === 'dark' ? <Moon size={ICON_SIZE.md} /> : <Sun size={ICON_SIZE.md} />}
        </Button>
      ))}
    </div>
  )
}

'use client'

import { FullLocale } from "@/lib/i18n/types"
import { LOCALES } from "@/utils/constants"
import { setUserLocale } from "@/utils/functions/locale"
import { Button } from "../../atoms/Button"

export const ToggleLang = () => {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {LOCALES.map((lang) => (
        <Button variant="primary" key={lang} onClick={() => setUserLocale(lang)}>
          {FullLocale[lang]}
        </Button>
      ))}
    </div>
  )
}

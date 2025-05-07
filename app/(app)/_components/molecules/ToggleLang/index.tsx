'use client'

import { FullLocale } from "@/lib/i18n/types"
import { LOCALE_COOKIE_NAME, LOCALES } from "@/utils/constants"
import { Button } from "../../atoms/Button"
import { setCookie } from "@/utils/functions/cookies"
import { useLocale } from "next-intl"

export const ToggleLang = () => {
  const locale = useLocale()
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {LOCALES.map((lang) => (
        <Button disabled={lang === locale} variant="primary" key={lang} onClick={() => setCookie({ name: LOCALE_COOKIE_NAME, value: lang })}>
          {FullLocale[lang]}
        </Button>
      ))}
    </div>
  )
}

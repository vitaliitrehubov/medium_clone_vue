import { createI18n } from 'vue-i18n'
import { translations, defaultLocale } from '@/plugins/i18n/locales'

const messages = Object.assign(translations)

const i18n = createI18n({
  locale: defaultLocale,
  fallbackLocale: 'en',
  legacy: false,
  messages
})

export default i18n
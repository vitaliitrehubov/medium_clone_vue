import { SpecificDateTimeFormatOptions } from "@intlify/core-base"

export const formatDate = (locale: string, dateStr: string | Date): string => {
  const options: SpecificDateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' }
  const format = locale === 'ua' ? 'uk-UA' : 'en-US'
  const date = new Date(dateStr)
  return date.toLocaleDateString(format, options)
}
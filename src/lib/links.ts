import { isPlaceholder } from '../content/profile'

export type ActionLink = {
  label: string
  href?: string
  external?: boolean
}

export function emailHref(email: string) {
  if (isPlaceholder(email) || !email.includes('@')) return undefined
  return `mailto:${email}`
}

export function webHref(url: string) {
  if (!url || isPlaceholder(url)) return undefined
  if (!/^https?:\/\//i.test(url)) return undefined
  return url
}

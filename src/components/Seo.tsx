import { useEffect } from 'react'
import { isPlaceholder, profile, seo } from '../content/profile'

export function Seo() {
  useEffect(() => {
    document.title = seo.title

    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', seo.description)

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', seo.title)

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) ogDescription.setAttribute('content', seo.description)

    if (!isPlaceholder(profile.portfolioUrl)) {
      const ogUrl = document.querySelector('meta[property="og:url"]')
      if (ogUrl) ogUrl.setAttribute('content', profile.portfolioUrl)
    }
  }, [])

  return null
}

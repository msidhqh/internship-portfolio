import { profile } from '../content/profile'
import { emailHref, webHref } from '../lib/links'
import { ActionButton } from './ActionButton'
import { SectionLabel } from './SectionLabel'

export function Contact() {
  const email = emailHref(profile.email)
  const linkedin = webHref(profile.linkedin)

  return (
    <section id="contact" className="bg-charcoal px-5 py-24 text-ivory md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel light>Let’s connect</SectionLabel>
        <h2 className="heading-editorial mt-6 max-w-[14ch] text-4xl text-ivory md:text-6xl lg:text-7xl">
          Open to new opportunities.
        </h2>
        <p className="mt-6 max-w-md text-beige/80">
          I’m currently seeking an IT internship where I can contribute to
          real-world projects, apply my technical skills and continue growing
          through industry experience.
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          <ActionButton
            href={email}
            variant="light"
            ariaLabel={email ? 'Email me' : 'Add an email in src/content/profile.ts'}
          >
            Email Me <span aria-hidden="true">↗</span>
          </ActionButton>
          <ActionButton
            href={linkedin}
            variant="outline-light"
            ariaLabel={linkedin ? 'LinkedIn' : 'Add a LinkedIn URL in src/content/profile.ts'}
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </ActionButton>
          <ActionButton
            onClick={async () => {
              const url = `${import.meta.env.BASE_URL}assets/internresume.pdf`
              try {
                const res = await fetch(url)
                if (!res.ok) throw new Error('Network error')
                const blob = await res.blob()
                const blobUrl = URL.createObjectURL(blob)
                const a = document.createElement('a')
                a.href = blobUrl
                a.download = 'Maahirah_Sidhiqah_Resume.pdf'
                document.body.appendChild(a)
                a.click()
                a.remove()
                URL.revokeObjectURL(blobUrl)
              } catch (e) {
                // Fallback to direct link if fetch/download fails
                window.location.href = url
              }
            }}
            variant="light"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
            ariaLabel="Download resume"
          >
            Download Resume ↓
          </ActionButton>
        </div>

        {(!email || !linkedin ) && (
          <p className="mt-8 max-w-lg text-xs leading-relaxed text-beige/50">
            Contact links are placeholders until you replace [ADD EMAIL],
            [ADD LINKEDIN URL], and [ADD GITHUB URL] in{' '}
            <code className="text-beige/70">src/content/profile.ts</code>.
          </p>
        )}
      </div>
    </section>
  )
}

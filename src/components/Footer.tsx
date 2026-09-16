import { profile } from '../content/profile'
import { emailHref, webHref } from '../lib/links'

export function Footer() {
  const year = new Date().getFullYear()
  const links = [
    { label: 'LinkedIn', href: webHref(profile.linkedin) },
    { label: 'Email', href: emailHref(profile.email) },
  ]

  return (
    <footer className="bg-charcoal px-5 pb-10 text-ivory md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 border-t border-ivory/10 pt-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-xl">{profile.monogram}</p>
          <p className="mt-1 text-sm text-beige/60">{profile.role}</p>
        </div>
        <ul className="flex flex-wrap gap-6 text-sm text-beige/70">
          {links.map((link) => (
            <li key={link.label}>
              {link.href ? (
                <a
                  href={link.href}
                  className="hover:text-ivory"
                  {...(link.href.startsWith('http')
                    ? { target: '_blank', rel: 'noreferrer noopener' }
                    : {})}
                >
                  {link.label}
                </a>
              ) : (
                <span title="Add this link in src/content/profile.ts">{link.label}</span>
              )}
            </li>
          ))}
        </ul>
        <p className="text-xs text-beige/45">
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  )
}

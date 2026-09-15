import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { profile } from '../content/profile'
import { emailHref, webHref } from '../lib/links'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()
  const connectHref = emailHref(profile.email) ?? '#contact'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,padding] duration-300 ${
        scrolled
          ? 'bg-ivory/90 py-3 shadow-[0_1px_0_rgba(43,33,27,0.08)] backdrop-blur-md'
          : 'bg-transparent py-5'
      }`}
    >
      <nav
        className="relative z-[60] mx-auto flex max-w-6xl items-center justify-between px-5 md:px-8"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="font-serif text-xl tracking-tight text-espresso md:text-[1.35rem]"
        >
          {profile.monogram}
          <span className="sr-only"> — {profile.name}, home</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm text-espresso/80 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="tracking-wide transition-colors duration-300 hover:text-espresso"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={connectHref}
          className="hidden items-center gap-2 rounded-full border border-espresso/15 px-4 py-2 text-sm text-espresso transition-colors duration-300 hover:border-espresso/40 lg:inline-flex"
        >
          Let’s Connect <span aria-hidden="true">↗</span>
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso/15 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 h-px w-4 bg-espresso transition-transform duration-300 ${open ? 'top-1.5 rotate-45' : 'top-0.5'}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-4 bg-espresso transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}
            />
            <span
              className={`absolute left-0 h-px w-4 bg-espresso transition-transform duration-300 ${open ? 'top-1.5 -rotate-45' : 'top-2.5'}`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-40 flex flex-col bg-ivory px-6 pt-24 lg:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-serif text-4xl text-espresso"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-12 flex flex-col gap-3 text-sm text-accent">
              {webHref(profile.linkedin) && (
                <a href={webHref(profile.linkedin)} target="_blank" rel="noreferrer noopener">
                  LinkedIn ↗
                </a>
              )}
              {webHref(profile.github) && (
                <a href={webHref(profile.github)} target="_blank" rel="noreferrer noopener">
                  GitHub ↗
                </a>
              )}
              <a href={connectHref} onClick={() => setOpen(false)}>
                Let’s Connect ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

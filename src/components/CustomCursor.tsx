import { useEffect, useRef } from 'react'
import { useMediaQuery, usePrefersReducedMotion } from '../hooks/useMediaQuery'

function parseRGB(cssColor: string) {
  const m = cssColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([0-9.]+))?\)/)
  if (!m) return null
  return { r: Number(m[1]), g: Number(m[2]), b: Number(m[3]), a: m[4] ? Number(m[4]) : 1 }
}

function luminanceFromRgb({ r, g, b }: { r: number; g: number; b: number }) {
  const srgb = [r, g, b].map((v) => v / 255)
  const lin = srgb.map((c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)))
  return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2]
}

export function CustomCursor() {
  const enabled = useMediaQuery('(hover: hover) and (pointer: fine) and (min-width: 1024px)')
  const reduce = usePrefersReducedMotion()
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!enabled || reduce) {
      document.documentElement.classList.remove('has-custom-cursor')
      return
    }

    document.documentElement.classList.add('has-custom-cursor')

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let hover = false
    let inverted = false
    let rafId: number | null = null

    const update = () => {
      // position elements
      if (dot.current) dot.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      if (ring.current) ring.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(${hover ? 1.9 : 1})`

      // detect background color of element under cursor
      try {
        const el = document.elementFromPoint(mouseX, mouseY) as HTMLElement | null
        let bg: string | null = null
        for (let node: HTMLElement | null = el; node; node = node.parentElement) {
          const style = getComputedStyle(node)
          const candidate = style.backgroundColor
          if (candidate && candidate !== 'transparent' && candidate !== 'rgba(0, 0, 0, 0)') {
            bg = candidate
            break
          }
        }
        if (!bg) {
          const bodyBg = getComputedStyle(document.body).backgroundColor
          bg = bodyBg || null
        }

        if (bg) {
          const rgb = parseRGB(bg)
          if (rgb) {
            const lum = luminanceFromRgb(rgb)
            inverted = lum < 0.55
          } else {
            inverted = false
          }
        } else {
          inverted = false
        }
      } catch (e) {
        inverted = false
      }

      // apply colors + glow
      if (dot.current) {
        dot.current.style.backgroundColor = inverted ? 'rgba(255,255,255,0.95)' : ''
        dot.current.style.boxShadow = inverted ? '0 6px 18px rgba(255,255,255,0.08)' : '0 6px 18px rgba(0,0,0,0.12)'
      }
      if (ring.current) {
        ring.current.style.borderColor = inverted ? 'rgba(255,255,255,0.9)' : ''
        ring.current.style.boxShadow = inverted ? '0 8px 24px rgba(255,255,255,0.06)' : '0 8px 24px rgba(0,0,0,0.06)'
      }

      rafId = requestAnimationFrame(update)
    }

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      hover = Boolean(target?.closest('a, button, [data-cursor="hover"]'))
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })

    rafId = requestAnimationFrame(update)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [enabled, reduce])

  if (!enabled || reduce) return null

  return (
    <>
      <div
        ref={ring}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[90] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-espresso/50 transition-transform duration-200 ease-[var(--ease-editorial)]"
      />
      <div
        ref={dot}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[90] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-espresso"
      />
    </>
  )
}

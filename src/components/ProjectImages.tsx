import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { ProjectImage } from '../content/projects'

type Props = {
  images: ProjectImage[]
}

export function ProjectImages({ images }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  if (!images || images.length === 0) return null

  return (
    <section aria-label="Project screenshots" className="mt-12">
      <h3 className="label-meta mb-6">Project screenshots</h3>

      {images.length === 1 && (
        <div className="mx-auto max-w-3xl">
          <SingleLayout image={images[0]} index={0} onOpen={setLightboxIndex} />
        </div>
      )}

      {images.length === 2 && <div className="grid gap-6 sm:grid-cols-2">{images.map((img, i) => (<ImageCell key={i} image={img} index={i} onOpen={setLightboxIndex} />))}</div>}

      {images.length === 3 && <div className="grid gap-6 sm:grid-cols-3">{images.map((img, i) => (<ImageCell key={i} image={img} index={i} onOpen={setLightboxIndex} />))}</div>}

      {images.length === 4 && <div className="grid gap-6 sm:grid-cols-2">{images.map((img, i) => (<ImageCell key={i} image={img} index={i} onOpen={setLightboxIndex} />))}</div>}

      {images.length > 4 && <div className="grid gap-6 sm:grid-cols-3">{images.map((img, i) => (<ImageCell key={i} image={img} index={i} onOpen={setLightboxIndex} />))}</div>}

      <Lightbox images={images} index={lightboxIndex} onClose={closeLightbox} />
    </section>
  )
}

// ─── Layout: single ──────────────────────────────────────────────────────────
function SingleLayout({ image, index, onOpen }: { image: ProjectImage; index: number; onOpen: (i: number) => void }) {
  return (
    <div>
      <ImageCell image={image} index={index} onOpen={onOpen} fullWidth />
    </div>
  )
}

// ─── Layout: two columns ─────────────────────────────────────────────────────
// (layouts handled inline above)

// ─── Individual image cell ────────────────────────────────────────────────────
function ImageCell({ image, index, onOpen, fullWidth = false }: { image: ProjectImage; index: number; onOpen: (i: number) => void; fullWidth?: boolean }) {
  const isPlaceholder = !image.src

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {/* Image number label */}
      <p className="mb-2 text-[10px] tracking-[0.18em] text-accent uppercase">
        {String(index + 1).padStart(2, '0')} — {image.title}
      </p>

      {/* Image container */}
      <button
        type="button"
        className="group block w-full cursor-zoom-in rounded-[1.25rem] border border-espresso/12 bg-beige focus-visible:outline-2 focus-visible:outline-espresso"
        aria-label={`View ${image.title} enlarged`}
        onClick={() => onOpen(index)}
      >
        <div className={`relative overflow-hidden rounded-[1.25rem] ${fullWidth ? 'aspect-[16/10]' : 'aspect-[16/10]'}`}>
          {isPlaceholder ? (
            <PlaceholderCell />
          ) : (
            <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 ease-[--ease-editorial] group-hover:scale-[1.02]" />
          )}
        </div>
      </button>

      {/* Caption */}
      <p className={`mt-3 text-sm leading-relaxed ${isPlaceholder ? 'italic text-accent/70' : 'text-ink/75'}`}>
        {image.caption}
      </p>
    </div>
  )
}

// ─── Placeholder fill ─────────────────────────────────────────────────────────
function PlaceholderCell() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-beige/80">
      {/* Dotted border inset */}
      <div className="flex h-[calc(100%-2rem)] w-[calc(100%-2rem)] flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-espresso/20">
        {/* Camera icon (SVG) */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="text-espresso/30" aria-hidden="true">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
        <p className="text-[11px] tracking-[0.16em] text-espresso/35 uppercase">Project screenshot placeholder</p>
        <p className="text-[10px] text-espresso/25">Add image to project data</p>
      </div>
    </div>
  )
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({
  images,
  index,
  onClose,
}: {
  images: ProjectImage[]
  index: number | null
  onClose: () => void
}) {
  const reduce = useReducedMotion()
  const closeRef = useRef<HTMLButtonElement>(null)
  const isOpen = index !== null
  const image = index !== null ? images[index] : null

  useEffect(() => {
    if (!isOpen) return
    closeRef.current?.focus()
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && image && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged view: ${image.title}`}
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-10"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.22 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-espresso/85 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            className="relative z-10 w-full max-w-5xl"
            initial={reduce ? false : { scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={reduce ? undefined : { scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Close button */}
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[11px] tracking-[0.18em] text-ivory/60 uppercase">
                {String((index ?? 0) + 1).padStart(2, '0')} — {image.title}
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close enlarged view"
                className="rounded-full border border-ivory/20 px-4 py-1.5 text-sm text-ivory/80 transition-colors hover:border-ivory/50 hover:text-ivory focus-visible:outline-2 focus-visible:outline-ivory"
              >
                Close ×
              </button>
            </div>

            {/* Image area */}
            <div className="overflow-hidden rounded-[1.25rem] border border-ivory/10">
              {!image.src ? (
                <div className="flex aspect-[16/9] w-full items-center justify-center bg-beige/80">
                  <PlaceholderCell />
                </div>
              ) : (
                <img
                  src={image.src}
                  alt={image.alt}
                  className="block h-auto max-h-[75vh] w-full object-contain"
                />
              )}
            </div>

            {/* Caption */}
            <p className={`mt-4 text-sm leading-relaxed ${!image.src ? 'italic text-ivory/40' : 'text-ivory/70'}`}>
              {image.caption}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


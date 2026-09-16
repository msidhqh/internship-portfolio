import { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { projects } from '../content/projects'
import { webHref } from '../lib/links'
import { ProjectImages } from './ProjectImages'
import { ActionButton } from './ActionButton'
import { ProjectVisual } from './ProjectVisual'

type Props = {
  projectId: string | null
  onClose: () => void
}

export function ProjectModal({ projectId, onClose }: Props) {
  const project = projects.find((item) => item.id === projectId)
  const closeRef = useRef<HTMLButtonElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!project) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[70] overflow-y-auto bg-ivory"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-title"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
        >
          <div className="mx-auto max-w-5xl px-5 py-8 md:px-8 md:py-12">
            <div className="flex items-center justify-between">
              <p className="label-meta">Case study {project.number}</p>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="rounded-full border border-espresso/15 px-4 py-2 text-sm"
              >
                Close
              </button>
            </div>

            <h2
              id="project-title"
              className="heading-editorial mt-8 max-w-3xl text-4xl md:text-6xl"
            >
              {project.title}
            </h2>
            <p className="mt-3 text-sm tracking-wide text-accent">{project.category}</p>

            <div className="mt-10 h-[280px] md:h-[360px]">
              <ProjectVisual visual={project.visual} className="h-full min-h-full" />
            </div>

            {project.id !== 'peer-tutoring-platform' && <ProjectImages images={project.images} />}

            <div className="mt-14 grid gap-12 md:grid-cols-12">
              <div className="md:col-span-8">
                <Block title="Overview" body={project.overview} />
                <Block title="What I built" body={project.whatIBuilt} />
                <Block title="Technical implementation" body={project.technicalImplementation} />
                <div className="mt-10">
                  <h3 className="label-meta">Key features</h3>
                  <ul className="mt-4 space-y-2 text-ink/80">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span className="mt-2 h-px w-6 shrink-0 bg-espresso/30" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Block title="My contribution" body={project.contribution} />
                <div className="mt-10">
                  <h3 className="label-meta">Lessons / takeaways</h3>
                  <ul className="mt-4 space-y-3 leading-relaxed text-ink/80">
                    {project.takeaways.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <aside className="md:col-span-4">
                <div className="rounded-[1.4rem] border border-espresso/10 bg-beige/40 p-6">
                  <h3 className="label-meta">Technologies</h3>
                  <ul className="mt-4 space-y-2 text-sm">
                    {project.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  {(webHref(project.github ?? '') || webHref(project.liveDemo ?? '')) && (
                    <div className="mt-6 space-y-2 text-sm">
                      {webHref(project.github ?? '') && (
                        <a
                          href={webHref(project.github ?? '')}
                          className="block"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          GitHub ↗
                        </a>
                      )}
                      {webHref(project.liveDemo ?? '') && (
                        <a
                          href={webHref(project.liveDemo ?? '')}
                          className="block"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Live demo ↗
                        </a>
                      )}
                    </div>
                  )}
                  {project.id === 'peer-tutoring-platform' && (
                    <div className="mt-6">
                      <ActionButton href="https://garb-kit-42921381.figma.site" variant="light">
                        View Interactive Prototype ↗
                      </ActionButton>
                    </div>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div className="mt-10">
      <h3 className="label-meta">{title}</h3>
      <p className="mt-4 leading-relaxed text-ink/80">{body}</p>
    </div>
  )
}

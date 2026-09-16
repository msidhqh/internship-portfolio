import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  projectFilters,
  projects,
  type ProjectFilter,
} from '../content/projects'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

type Props = {
  onOpen: (id: string) => void
}

export function Projects({ onOpen }: Props) {
  const [filter, setFilter] = useState<ProjectFilter>('All')
  const reduce = useReducedMotion()

  const visible = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((project) => project.filters.includes(filter))
  }, [filter])

  return (
    <section id="projects" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Selected work</SectionLabel>
            <h2 className="heading-editorial mt-4 text-4xl md:text-6xl">
              A closer look at what I’ve built.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink/70">
            A selection of projects spanning web development, UX/UI, operations,
            and data — built through coursework, client work and team projects.
          </p>
        </Reveal>

        <div
          className="mt-12 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter projects"
        >
          {projectFilters.map((item) => {
            const active = item === filter
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(item)}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors duration-300 ${
                  active
                    ? 'bg-espresso text-ivory'
                    : 'text-espresso/70 hover:text-espresso'
                }`}
              >
                {item}
              </button>
            )
          })}
        </div>

        <div className="mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: 8 }}
              transition={{ duration: 0.3 }}
            >
              {visible.length === 0 ? (
                <p className="py-20 text-sm text-ink/70">
                  No case studies tagged {filter.toLowerCase()} yet. Development
                  and data work are listed under All.
                </p>
              ) : (
                visible.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    reverse={index % 2 === 1}
                    onOpen={onOpen}
                  />
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

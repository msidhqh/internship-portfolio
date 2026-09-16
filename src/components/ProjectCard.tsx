import type { Project } from '../content/projects'
import { ProjectVisual } from './ProjectVisual'

type Props = {
  project: Project
  reverse?: boolean
  onOpen: (id: string) => void
}

export function ProjectCard({ project, reverse = false, onOpen }: Props) {
  return (
    <article
      id={project.id}
      data-cursor="hover"
      className={`group grid items-center gap-8 border-t border-espresso/10 py-12 md:grid-cols-2 md:gap-14 md:py-16 ${
        reverse ? 'md:[&>*:first-child]:order-2' : ''
      }`}
      style={{ scrollMarginTop: '6rem' }}
    >
      <button
        type="button"
        onClick={() => onOpen(project.id)}
        className="preview-zoom text-left"
        aria-label={`View details for ${project.title}`}
      >
        <ProjectVisual visual={project.visual} className="min-h-[260px] md:min-h-[320px]" />
      </button>

      <div>
        <div className="flex items-baseline justify-between gap-4">
          <p className="font-serif text-3xl text-espresso/25 transition-opacity duration-300 group-hover:opacity-70">
            {project.number}
          </p>
          <p className="label-meta">{project.category}</p>
        </div>
        <h3 className="heading-editorial mt-4 text-3xl md:text-[2.4rem]">{project.title}</h3>
        <p className="mt-4 max-w-md leading-relaxed text-ink/75">{project.shortDescription}</p>
        <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-xs tracking-wide text-accent">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => onOpen(project.id)}
          className="mt-8 inline-flex items-center gap-2 text-sm text-espresso transition-transform duration-300 group-hover:translate-x-0.5"
        >
          View Details
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </article>
  )
}

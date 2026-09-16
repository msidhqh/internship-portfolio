import { skillGroups } from '../content/skills'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

export function Skills() {
  return (
    <section id="skills" className="bg-beige/50 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="heading-editorial mt-4 text-4xl md:text-5xl">
              Technical skills
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/70">
            A practical mix of product development, cloud systems, data work,
            cybersecurity foundations, and design tooling.
          </p>
        </Reveal>

        <div className="mt-16 divide-y divide-espresso/10 border-y border-espresso/10">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.id}
              delay={index * 0.06}
              className="grid gap-6 py-8 md:grid-cols-[180px_minmax(0,1.1fr)_minmax(0,1.2fr)] md:items-start md:gap-10"
            >
              <p className="label-meta pt-1">{group.label}</p>
              <p className="text-sm leading-relaxed text-ink/70">{group.description}</p>
              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-espresso">
                {group.items.map((item) => (
                  <li key={item} className="border-b border-transparent">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

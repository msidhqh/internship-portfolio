import { education } from '../content/experience'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

export function Education() {
  return (
    <section className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl border-t border-espresso/10 pt-16">
        <Reveal className="grid gap-8 md:grid-cols-3 md:items-end">
          <div>
            <SectionLabel>Education</SectionLabel>
            <h2 className="heading-editorial mt-4 text-3xl md:text-4xl">
              {education.institution}
            </h2>
          </div>
          <p className="text-lg text-espresso">{education.programme}</p>
          <div className="md:text-right">
            <p className="label-meta">Expected graduation</p>
            <p className="mt-2 font-serif text-3xl">{education.expectedGraduation}</p>
            <p className="mt-3 text-sm text-ink/70">{education.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

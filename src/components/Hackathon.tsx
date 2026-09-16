import { hackathon } from '../content/experience'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'
import { ActionButton } from './ActionButton'

export function Hackathon() {
  return (
    <section className="bg-beige/40 px-5 py-20 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
        <Reveal>
          <SectionLabel>Hackathon participation</SectionLabel>
          <h2 className="heading-editorial mt-4 text-3xl md:text-4xl">
            Turning an idea into something real.
          </h2>
          <p className="mt-3 text-sm text-accent">
            {hackathon.name} · {hackathon.date}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="leading-relaxed text-ink/80">{hackathon.summary}</p>
          <p className="mt-5 leading-relaxed text-ink/80">
            “Our team developed a peer tutoring platform for the hackathon, with
            my focus on the UI/UX and student-facing experience.”
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ActionButton
              href="#peer-tutoring-platform"
              variant="solid"
              className="min-w-[280px] justify-center px-6 py-3 text-base"
              ariaLabel="Explore the Peer Tutoring Platform"
            >
              Explore the Peer Tutoring Platform →
            </ActionButton>
            <ActionButton
              onClick={() => window.open(`${import.meta.env.BASE_URL}assets/hackathoncert.pdf`, '_blank')}
              variant="solid"
              className="min-w-[280px] justify-center px-6 py-3 text-base"
              ariaLabel="View hackathon certificate"
            >
              View Hackathon Certificate ↗
            </ActionButton>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-espresso">
            {hackathon.themes.map((theme) => (
              <li key={theme} className="border-b border-espresso/15 pb-1">
                {theme}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

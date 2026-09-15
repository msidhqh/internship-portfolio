import { leadership } from '../content/experience'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

export function Leadership() {
  return (
    <section id="experience" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>Beyond the code</SectionLabel>
          <h2 className="heading-editorial mt-4 max-w-xl text-4xl md:text-5xl">
            Leadership & experience
          </h2>
        </Reveal>

        <Reveal className="mt-16 border-t border-espresso/10 pt-10 md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-16">
          <div>
            <p className="label-meta">{leadership.organisation}</p>
            <p className="mt-3 font-serif text-3xl">{leadership.role}</p>
            <p className="mt-3 text-sm text-ink/70">{leadership.institution}</p>
            <p className="mt-2 text-xs tracking-wide text-accent">{leadership.dates}</p>
          </div>

          <div>
            <p className="max-w-2xl leading-relaxed text-ink/80">{leadership.summary}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {leadership.focus.map((item) => (
                <li key={item} className="border-l border-espresso/20 pl-4 text-sm text-espresso">
                  {item}
                </li>
              ))}
            </ul>

            <ol className="mt-12 space-y-8 border-t border-espresso/10 pt-8">
              {leadership.events.map((event, index) => (
                <li key={event.name} className="grid gap-2 md:grid-cols-[80px_minmax(0,1fr)]">
                  <p className="font-serif text-2xl text-espresso/30">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <div>
                    <p className="text-sm tracking-[0.18em] text-accent uppercase">
                      {event.role}
                    </p>
                    <h3 className="mt-1 font-serif text-2xl">{event.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">{event.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

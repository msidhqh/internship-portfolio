import { profile } from '../content/profile'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

const facts = [
  { label: 'Based in', value: profile.location },
  { label: 'Currently', value: profile.programme },
  { label: 'Seeking', value: profile.seeking },
]

export function About() {
  return (
    <section id="about" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-20">
        <Reveal>
          <SectionLabel>Introduction</SectionLabel>
          <h2 className="heading-editorial mt-4 text-4xl md:text-6xl">
            A little about me.
          </h2>
        </Reveal>

        <div>
          <Reveal delay={0.08}>
            <p className="max-w-xl text-lg leading-relaxed text-ink/85">
              I’m a Diploma in Information Technology student at Nanyang Polytechnic with hands-on experience across software development, cloud technologies, databases, data visualization and UX/UI design. Through academic and client-based projects, I’ve designed and developed practical web applications, working across both the technical implementation and user experience of the products I create. Beyond technical work, my experience in NYP's SIT Club as an EXCO has strengthened my communication, teamwork and ability to take ownership. I’m currently looking for an IT internship where I can apply my skills, contribute to real-world projects and continue growing as a technology professional.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl leading-relaxed text-ink/70">
              I believe good technology should be practical, intuitive and thoughtfully designed — balancing how a product works with how people experience it.

            </p>
          </Reveal>

          <Reveal delay={0.22} className="mt-12 grid gap-6 border-t border-espresso/10 pt-8 sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label}>
                <p className="label-meta">{fact.label}</p>
                <p className="mt-2 text-sm leading-snug text-espresso">{fact.value}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

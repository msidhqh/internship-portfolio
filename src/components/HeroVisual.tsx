import { motion, useReducedMotion } from 'framer-motion'

const technicalSkills = [
  {
    id: 'languages',
    label: 'Programming Languages',
    items: ['Python', 'HTML', 'CSS', 'JavaScript', 'SQL'],
  },
  {
    id: 'frameworks',
    label: 'Frameworks & Libraries',
    items: ['Flask', 'React', 'Node.js', 'Bootstrap'],
  },
  {
    id: 'databases',
    label: 'Databases',
    items: ['Oracle APEX', 'MongoDB'],
  },
  {
    id: 'methodologies',
    label: 'Development Methodologies',
    items: ['Agile', 'Waterfall'],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    items: ['Git', 'VS Code', 'Figma', 'Power BI'],
  },
]

const qualities = ['Detail-oriented', 'Collaborative', 'Problem-solver', 'Eager to learn']

export function HeroVisual() {
  const reduce = useReducedMotion()
  const delay = (step: number) => (reduce ? 0 : 0.32 + step * 0.07)

  return (
    <motion.div
      className="relative"
      initial={reduce ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      {/* Corner index label */}
      <div className="absolute -top-6 -right-2 hidden text-right md:block">
        <p className="label-meta">Profile</p>
        <p className="font-serif text-4xl text-espresso">01</p>
      </div>

      <div className="relative rounded-[1.6rem] border border-espresso/15 bg-beige/60 p-3 md:p-4">
        {/* Header bar — espresso background */}
        <div className="mb-3 flex items-center justify-between rounded-xl bg-espresso px-4 py-2.5">
          <span className="text-[10px] tracking-[0.18em] text-ivory/70 uppercase">Technical Skills</span>
          <span className="text-[10px] tracking-[0.18em] text-ivory/70 uppercase">Profile</span>
        </div>

        {/* Technical skill cards */}
        <div className="grid gap-2">
          {technicalSkills.map((group, i) => (
            <motion.div
              key={group.id}
              className="rounded-xl border border-espresso/10 bg-ivory/80 px-3 py-2.5"
              initial={reduce ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: delay(i) }}
            >
              <div className="mb-1.5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-espresso/60" />
                <p className="text-[10px] tracking-[0.14em] text-espresso font-semibold uppercase">
                  {group.label}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-espresso/12 bg-beige px-2 py-0.5 text-[11px] text-espresso/75"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-2.5 border-t border-espresso/10" />

        {/* Qualities — espresso pill strip */}
        <div className="rounded-xl border border-espresso/10 bg-espresso/5 px-3 py-2.5">
          <div className="flex flex-wrap gap-2">
            {qualities.map((q) => (
              <span
                key={q}
                className="rounded-full border border-espresso/20 bg-espresso px-3 py-1 text-[11px] font-medium text-ivory/90"
              >
                {q}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

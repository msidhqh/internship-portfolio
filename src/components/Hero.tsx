import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../content/profile'
import { emailHref } from '../lib/links'
import { ActionButton } from './ActionButton'
import { HeroVisual } from './HeroVisual'

export function Hero() {
  const reduce = useReducedMotion()
  const connectHref = emailHref(profile.email) ?? '#contact'
  const delay = (step: number) => (reduce ? 0 : 0.05 + step * 0.09)

  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pt-28 pb-20 md:px-8 md:pt-36 md:pb-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <div>
          <motion.p
            className="label-meta"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: delay(0) }}
          >
            DIPLOMA IN INFORMATION TECHNOLOGY • CYBERSECURITY SPECIALISATION • NANYANG POLYTECHNIC
          </motion.p>


          <motion.h1
            className="heading-editorial mt-5 max-w-[14ch] text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.15]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: delay(1) }}
          >
            Maahirah Sidhiqah
          </motion.h1>

          <motion.p
            className="mt-7 max-w-lg text-[1.05rem] leading-relaxed text-ink/80"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay(2) }}
          >
            Diploma in IT student with hands-on experience in full-stack web development, AWS serverless applications, UX/UI design, databases and data visualisation.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap gap-3"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: delay(3) }}
          >
            <ActionButton href="#projects">
              Explore My Projects <span aria-hidden="true">↘</span>
            </ActionButton>
            <ActionButton href={connectHref} variant="ghost">
              Let’s Connect <span aria-hidden="true">↗</span>
            </ActionButton>
          </motion.div>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}

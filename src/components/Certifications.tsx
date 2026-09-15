import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'
import { certifications } from '../content/certifications'
import { ActionButton } from './ActionButton'

function isPlaceholder(value?: string) {
  if (!value) return true
  return value.startsWith('[PLACEHOLDER') || value.startsWith('[')
}

export function Certifications() {
  return (
    <section id="certifications" className="bg-beige/50 px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>Professional credentials</SectionLabel>
          <h2 className="heading-editorial mt-4 max-w-xl text-4xl md:text-5xl">Certifications</h2>
        </Reveal>

        <div className="divide-y divide-espresso/10 border-y border-espresso/10">
          {certifications.map((c, index) => {
            const nameIsPlaceholder = isPlaceholder(c.name)
            const issuerIsPlaceholder = isPlaceholder(c.issuer)
            const dateIsPlaceholder = isPlaceholder(c.date)
            const credIdValid = c.credentialId && !isPlaceholder(c.credentialId)
            const hasVerify = c.verifyUrl && c.verifyUrl.trim() !== ''
            const hasDoc = c.documentUrl && c.documentUrl.trim() !== ''
            const isIbm = /\bIBM\b/i.test(c.issuer ?? '')
            const showDoc = hasDoc && !isIbm

            return (
              <Reveal
                key={c.id}
                delay={index * 0.04}
                className="grid gap-6 py-6 md:grid-cols-[72px_minmax(0,1fr)] md:items-start md:gap-10"
              >
                <p className="label-meta pt-1">{c.number}</p>

                <div>
                  <h3 className={`mt-0 text-lg font-medium ${nameIsPlaceholder ? 'italic text-accent/70' : 'text-ink/90'}`}>
                    {c.name}
                  </h3>

                  <div className="mt-2 text-sm text-accent">
                    <span className={issuerIsPlaceholder ? 'italic text-accent/70' : 'text-accent'}>{c.issuer}</span>
                    <span className="mx-2">·</span>
                    <span className={dateIsPlaceholder ? 'italic text-accent/70' : 'text-accent'}>{c.date}</span>
                  </div>

                  {credIdValid && <div className="mt-3 text-sm text-ink/80">Credential ID: {c.credentialId}</div>}

                  <div className="mt-4 flex flex-wrap gap-3">
                    {showDoc && (
                      <>
                        {hasVerify && (
                          <ActionButton href={c.verifyUrl} variant="solid" className="px-6" ariaLabel={`Verify credential ${c.name}`}>
                            Verify Credential ↗
                          </ActionButton>
                        )}

                        <ActionButton
                          onClick={() => window.open(c.documentUrl || '#', '_blank')}
                          variant="solid"
                          className="px-6"
                          ariaLabel={`Open certificate ${c.name} in new tab`}
                        >
                          View Certificate ↗
                        </ActionButton>
                      </>
                    )}

                    {!showDoc && hasVerify && (
                      <ActionButton href={c.verifyUrl} variant="solid" className="px-6" ariaLabel={`Verify credential ${c.name}`}>
                        Verify Credential ↗
                      </ActionButton>
                    )}

                    {!showDoc && !hasVerify && (
                      <div className="text-sm italic text-accent/70">No public credential available</div>
                    )}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Certifications

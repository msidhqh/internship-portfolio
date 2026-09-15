import type { ProjectVisual } from '../content/projects'

type Props = {
  visual: ProjectVisual
  className?: string
}

export function ProjectVisual({ visual, className = '' }: Props) {
  return (
    <div
      className={`mini-ui relative h-full min-h-[220px] overflow-hidden rounded-[1.25rem] border border-espresso/10 bg-beige ${className}`}
      aria-hidden="true"
    >
      {visual === 'sccci' && <SccciPreview />}
      {visual === 'tutoring' && <TutoringPreview />}
      {visual === 'motors' && <MotorsPreview />}
      {visual === 'education' && <EducationPreview />}
    </div>
  )
}

// ─── SCCCI Support Ticket Dashboard ─────────────────────────────────────────
function SccciPreview() {
  return (
    <div className="flex h-full flex-col p-4 md:p-5">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between rounded-xl bg-espresso px-3 py-2">
        <span className="text-[10px] tracking-[0.18em] text-ivory/70 uppercase">Operations</span>
        <span className="flex items-center gap-1.5 text-[11px] text-ivory/60">
          <span className="h-1.5 w-1.5 rounded-full bg-ivory/40" />
          Sync idle
        </span>
      </div>
      {/* Three module cards */}
      <div className="grid flex-1 grid-cols-3 gap-2">
        {[
          { label: 'Tickets', rows: ['w-4/5', 'w-3/5', 'w-2/3'] },
          { label: 'Headcount', rows: ['w-3/4', 'w-1/2', 'w-3/5'] },
          { label: 'Diagnostics', rows: ['w-2/3', 'w-4/5', 'w-1/2'] },
        ].map(({ label, rows }) => (
          <div key={label} className="rounded-xl bg-ivory/80 p-3">
            <p className="text-[10px] tracking-[0.14em] text-espresso font-semibold uppercase">
              {label}
            </p>
            <div className="mt-2.5 space-y-1.5">
              {rows.map((w, i) => (
                <div key={i} className={`h-1.5 ${w} rounded-full bg-espresso/20`} />
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Queue bar */}
      <div className="mt-2.5 rounded-xl border border-espresso/10 bg-ivory/60 px-3 py-2">
        <div className="flex items-center justify-between text-[10px]">
          <span className="tracking-[0.14em] text-espresso/50 uppercase">Queue</span>
          <span className="text-espresso/60">Open · In review · Closed</span>
        </div>
        <div className="mt-2 flex gap-2">
          {['w-2/5 bg-espresso/20', 'w-1/4 bg-espresso/12', 'w-1/3 bg-espresso/8'].map((cls, i) => (
            <div key={i} className={`h-5 rounded-md ${cls}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Peer Tutoring Platform ──────────────────────────────────────────────────
function TutoringPreview() {
  return (
    <div className="flex h-full flex-col p-4 md:p-5">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between rounded-xl bg-espresso px-3 py-2">
        <span className="text-[10px] tracking-[0.18em] text-ivory/70 uppercase">Platform</span>
        <span className="text-[10px] text-ivory/50">AWS Serverless</span>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-2">
        {/* Subjects card */}
        <div className="rounded-xl bg-ivory/80 p-3">
          <p className="text-[10px] tracking-[0.14em] text-espresso font-semibold uppercase">
            Subjects
          </p>
          <div className="mt-2.5 space-y-2">
            {['Programming', 'Databases', 'Networks'].map((item) => (
              <div key={item} className="flex items-center justify-between text-xs text-espresso/70">
                <span>{item}</span>
                <span className="h-px w-6 bg-espresso/20" />
              </div>
            ))}
          </div>
        </div>
        {/* Right column */}
        <div className="flex flex-col gap-2">
          <div className="flex-1 rounded-xl bg-espresso p-3 text-ivory">
            <p className="text-[10px] tracking-[0.14em] uppercase opacity-60">Requests</p>
            <p className="mt-1.5 font-serif text-xl leading-none">Inbox</p>
            <p className="mt-1 text-[11px] opacity-60">Pending match</p>
          </div>
          <div className="rounded-xl border border-espresso/15 bg-ivory/70 p-2.5 text-[11px] text-espresso/60">
            Availability · Open slots
          </div>
        </div>
      </div>
      {/* Stack strip */}
      <div className="mt-2.5 flex gap-1.5">
        {['React', 'Lambda', 'DynamoDB'].map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-espresso/15 bg-espresso/6 px-2 py-0.5 text-[10px] text-espresso/60"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── Chin Hon Motors ─────────────────────────────────────────────────────────
function MotorsPreview() {
  return (
    <div className="flex h-full flex-col p-4 md:p-5">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between rounded-xl bg-espresso px-3 py-2">
        <span className="text-[10px] tracking-[0.18em] text-ivory/70 uppercase">Pricing console</span>
        <span className="text-[10px] text-ivory/50">Flask · Python</span>
      </div>
      {/* Table */}
      <div className="flex-1 rounded-xl border border-espresso/10 bg-ivory/80 p-3">
        <div className="grid grid-cols-3 gap-2 border-b border-espresso/10 pb-2 text-[10px] tracking-[0.12em] text-espresso/50 uppercase">
          <span>Model</span>
          <span>Price</span>
          <span>Status</span>
        </div>
        {[
          ['w-16', 'w-10', 'bg-espresso/25'],
          ['w-14', 'w-12', 'bg-espresso/12'],
          ['w-16', 'w-9', 'bg-espresso/20'],
          ['w-12', 'w-11', 'bg-espresso/10'],
        ].map(([mw, pw, sw], row) => (
          <div
            key={row}
            className="grid grid-cols-3 items-center gap-2 border-b border-espresso/6 py-2.5 last:border-0"
          >
            <div className={`h-1.5 ${mw} rounded-full bg-espresso/20`} />
            <div className={`h-1.5 ${pw} rounded-full bg-espresso/15`} />
            <div className={`h-4 w-10 rounded-md ${sw}`} />
          </div>
        ))}
      </div>
      {/* Role tag */}
      <div className="mt-2.5 flex items-center gap-2">
        <span className="rounded-full border border-espresso/15 bg-espresso/6 px-2 py-0.5 text-[10px] text-espresso/55">
          Staff view
        </span>
        <span className="rounded-full border border-espresso/15 bg-espresso/6 px-2 py-0.5 text-[10px] text-espresso/55">
          Comparison
        </span>
      </div>
    </div>
  )
}

// ─── Education Cost vs Quality Dashboard ─────────────────────────────────────
function EducationPreview() {
  return (
    <div className="flex h-full flex-col p-4 md:p-5">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between rounded-xl bg-espresso px-3 py-2">
        <span className="text-[10px] tracking-[0.18em] text-ivory/70 uppercase">Dashboard</span>
        <span className="text-[10px] text-ivory/50">Power BI · DAX</span>
      </div>
      {/* KPI cards */}
      <div className="mb-2.5 grid grid-cols-3 gap-2">
        {[
          { label: 'Expenditure', w: 'w-10' },
          { label: 'Performance', w: 'w-8' },
          { label: 'Access', w: 'w-9' },
        ].map(({ label, w }) => (
          <div key={label} className="rounded-xl border border-espresso/10 bg-ivory/80 px-3 py-2">
            <p className="text-[10px] tracking-[0.12em] text-espresso/50 uppercase">{label}</p>
            <div className={`mt-2 h-2 ${w} rounded-full bg-espresso/25`} />
          </div>
        ))}
      </div>
      {/* Scatter chart — espresso bg */}
      <div className="relative flex-1 overflow-hidden rounded-xl bg-espresso px-2 py-2">
        <p className="mb-1 text-[9px] tracking-[0.14em] text-ivory/40 uppercase">
          Expenditure vs Performance
        </p>
        <svg viewBox="0 0 200 80" className="h-full w-full" fill="none">
          {/* Axes */}
          <path d="M12 68 H192 M12 8 V68" stroke="#E8DFD2" strokeOpacity="0.15" strokeWidth="0.8" />
          {/* Data points */}
          {[
            [36, 52], [58, 40], [80, 56], [104, 32],
            [126, 38], [148, 24], [168, 30], [90, 48],
          ].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="#F5F0E8" fillOpacity="0.75" />
          ))}
          {/* Trend line */}
          <path
            d="M36 54 L168 28"
            stroke="#F5F0E8"
            strokeOpacity="0.25"
            strokeWidth="1"
            strokeDasharray="4 3"
          />
        </svg>
      </div>
    </div>
  )
}

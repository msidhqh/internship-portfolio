type Props = {
  children: string
  light?: boolean
}

export function SectionLabel({ children, light = false }: Props) {
  return (
    <p
      className={`label-meta ${light ? 'text-beige/70' : 'text-accent'}`}
    >
      {children}
    </p>
  )
}

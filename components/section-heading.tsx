export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-content sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-base text-muted">{subtitle}</p>}
    </div>
  )
}

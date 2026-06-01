export function SectionHeading({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-6">
      <h2>{title}</h2>
      {subtitle && <p className="subtitle mt-2 max-w-md">{subtitle}</p>}
    </div>
  )
}

type MetricCardProps = {
  value: string
  label: string
  note?: string
}

export default function MetricCard({ value, label, note }: MetricCardProps) {
  return (
    <div className='panel-dark rounded-[1.75rem] p-6 h-full'>
      <div className='text-4xl font-semibold tracking-[-0.06em] text-[var(--color-accent-soft)] sm:text-5xl'>
        {value}
      </div>
      <p className='mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-off-white)]'>
        {label}
      </p>
      {note ? (
        <p className='mt-4 text-sm leading-7 text-white/70'>{note}</p>
      ) : null}
    </div>
  )
}

import { useReveal } from '../hooks/useReveal'
import { trustPoints } from '../data/content'

export function TrustBar() {
  const ref = useReveal()

  return (
    <section className="border-y border-line bg-white py-20">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          {trustPoints.map((point) => (
            <div key={point.title} className="text-center sm:text-left">
              <h3 className="text-[18px] font-semibold text-ink">{point.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

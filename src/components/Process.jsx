import { useReveal } from '../hooks/useReveal'
import { process } from '../data/content'

export function Process() {
  const ref = useReveal()

  return (
    <section id="process" className="bg-white py-28">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-[13px] font-semibold uppercase tracking-widest text-brand">
            Process
          </span>
          <h2 className="mt-4 text-[34px] font-bold tracking-tight text-ink sm:text-[40px]">
            이용 방법은 간단합니다
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-line sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item) => (
            <div key={item.step} className="bg-white p-8">
              <span className="text-[13px] font-semibold text-brand">{item.step}</span>
              <h3 className="mt-3 text-[19px] font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

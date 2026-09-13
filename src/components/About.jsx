import { useReveal } from '../hooks/useReveal'

export function About() {
  const ref = useReveal()

  return (
    <section id="about" className="bg-white py-28">
      <div ref={ref} className="reveal mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-[13px] font-semibold uppercase tracking-widest text-brand">
            About Us
          </span>
          <h2 className="mt-4 text-[34px] font-bold leading-tight tracking-tight text-ink sm:text-[40px]">
            영등포에 새로 문을 연,
            <br />
            린나이 정식 대리점입니다
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-ink-soft">
            2026년, 린나이 영등포점이 새롭게 문을 열었습니다. 본사로부터 인증받은
            정식 대리점으로서 보일러, 온수기, 주방가전까지 린나이의 모든 정품을
            정직한 가격과 책임감 있는 시공으로 전해드립니다.
          </p>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
            복잡하고 폐쇄적인 보일러 유통 구조 속에서, 고객이 믿고 맡길 수 있는
            가장 가까운 창구가 되는 것이 저희의 목표입니다.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <StatCard label="공식 인증" value="린나이 정식 대리점" />
          <StatCard label="취급 품목" value="보일러 · 온수기 · 주방가전" />
          <StatCard label="서비스" value="상담 · 견적 · 시공 · A/S" />
          <StatCard label="지역" value="서울 영등포 중심" />
        </div>
      </div>
    </section>
  )
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl bg-mist p-6">
      <p className="text-[12px] font-medium uppercase tracking-wider text-ink-soft">{label}</p>
      <p className="mt-2 text-[16px] font-semibold leading-snug text-ink">{value}</p>
    </div>
  )
}

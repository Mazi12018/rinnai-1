import rinnaiLogo from '../assets/rinnai-logo.png'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-mist pt-40 pb-28">
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full opacity-70 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(226,35,26,0.25), transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(10,10,12,0.08), transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-[13px] font-medium text-ink-soft">
          린나이 공식 영등포 대리점 · 2026 NEW OPEN
        </span>

        <h1 className="mx-auto mt-8 max-w-3xl text-[44px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[64px]">
          따뜻함을 만드는
          <br />
          가장 정직한 방법
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-ink-soft sm:text-[19px]">
          보일러부터 온수기, 주방가전까지. 린나이 정품을 가장 가까운 곳에서,
          가장 확실한 시공과 A/S로 만나보세요.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#products"
            className="w-full rounded-full bg-ink px-8 py-3.5 text-[15px] font-medium text-white transition-transform hover:scale-[1.02] hover:bg-brand sm:w-auto"
          >
            제품 둘러보기
          </a>
          <a
            href="#contact"
            className="w-full rounded-full border border-line bg-white px-8 py-3.5 text-[15px] font-medium text-ink transition-colors hover:border-ink sm:w-auto"
          >
            상담 신청하기
          </a>
        </div>
      </div>

      <div className="relative mx-auto mt-20 max-w-4xl px-6">
        <div className="aspect-[16/7] w-full rounded-[32px] bg-gradient-to-br from-white to-mist shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] ring-1 ring-line flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <img src={rinnaiLogo} alt="Rinnai" className="h-10 w-auto sm:h-12" />
            <p className="text-[13px] font-medium uppercase tracking-widest text-ink-soft">
              Official Partner · 영등포 공식대리점
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

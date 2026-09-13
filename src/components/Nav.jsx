import { useEffect, useState } from 'react'
import rinnaiLogo from '../assets/rinnai-logo.png'
import { nav } from '../data/content'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={rinnaiLogo} alt="Rinnai" className="h-5 w-auto" />
          <span className="text-[17px] font-semibold tracking-tight text-ink">영등포</span>
        </a>

        <nav className="hidden items-center gap-8 text-[13px] font-medium text-ink-soft md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-full bg-ink px-5 py-2 text-[13px] font-medium text-white transition-colors hover:bg-brand"
          >
            상담 신청
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center md:hidden"
          aria-label="메뉴 열기"
        >
          <span className="block h-px w-5 bg-ink relative before:absolute before:-top-1.5 before:h-px before:w-5 before:bg-ink after:absolute after:top-1.5 after:h-px after:w-5 after:bg-ink" />
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4 text-[15px] font-medium text-ink-soft">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="text-brand">
              상담 신청
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

import rinnaiLogo from '../assets/rinnai-logo.png'
import { business, contact } from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-line bg-white py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <img src={rinnaiLogo} alt="Rinnai" className="h-4 w-auto opacity-80" />
            <p className="text-[13px] font-medium text-ink">린나이 영등포 공식대리점</p>
          </div>
          <p className="text-[12px] text-ink-soft">© 2026 {business.companyName}. All rights reserved.</p>
        </div>

        <p className="mt-4 text-center text-[12px] leading-relaxed text-ink-soft sm:text-left">
          {business.companyName} · 사업자등록번호 {business.registrationNumber} · {contact.addressLine} ·{' '}
          {contact.phone}
        </p>
      </div>
    </footer>
  )
}

import { useReveal } from '../hooks/useReveal'
import { contact } from '../data/content'
import { InquiryForm } from './InquiryForm'

export function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className="bg-ink py-28 text-white">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <span className="text-[13px] font-semibold uppercase tracking-widest text-brand">
              Contact
            </span>
            <h2 className="mt-4 text-[34px] font-bold tracking-tight sm:text-[40px]">
              지금 바로 상담하세요
            </h2>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-white/70">
              전화 한 통이면 충분합니다. 제품 선택부터 설치, 이후 A/S까지
              린나이 영등포 대리점이 끝까지 책임집니다.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${contact.phone}`}
                className="w-full rounded-full bg-brand px-8 py-3.5 text-center text-[15px] font-medium text-white transition-transform hover:scale-[1.02] sm:w-auto"
              >
                전화 상담
              </a>
              <span className="w-full cursor-not-allowed rounded-full border border-white/10 px-8 py-3.5 text-center text-[15px] font-medium text-white/40 sm:w-auto">
                카카오톡 문의 (준비중)
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <InquiryForm />

            <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
              <dl className="flex flex-col gap-6">
                <InfoRow label="매장 주소" value={contact.addressLine} />
                <InfoRow label="대표 전화" value={contact.phone} />
                <InfoRow label="운영 시간" value={contact.hours} />
                <InfoRow label="카카오톡" value={contact.kakaoNote} />
              </dl>
              <p className="mt-8 text-[12px] leading-relaxed text-white/40">
                ※ 카카오톡 채널은 개설 후 링크가 연결될 예정입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoRow({ label, value }) {
  return (
    <div>
      <dt className="text-[12px] font-medium uppercase tracking-wider text-white/40">{label}</dt>
      <dd className="mt-1.5 text-[16px] font-medium text-white">{value}</dd>
    </div>
  )
}

import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

const initialForm = { name: '', phone: '', message: '' }

export function InquiryForm() {
  const [form, setForm] = useState(initialForm)
  const [agreed, setAgreed] = useState(false)
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.name.trim() || !form.phone.trim()) {
      setStatus('error')
      setErrorMsg('이름과 연락처를 입력해 주세요.')
      return
    }
    if (!agreed) {
      setStatus('error')
      setErrorMsg('개인정보 수집 및 이용에 동의해 주세요.')
      return
    }

    setStatus('submitting')
    setErrorMsg('')

    const { error } = await supabase.from('inquiries').insert({
      name: form.name.trim(),
      phone: form.phone.trim(),
      message: form.message.trim() || null,
    })

    if (error) {
      setStatus('error')
      setErrorMsg('전송에 실패했습니다. 잠시 후 다시 시도해 주세요.')
      return
    }

    setStatus('success')
    setForm(initialForm)
    setAgreed(false)
  }

  if (status === 'success') {
    return (
      <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
        <p className="text-[16px] font-semibold text-white">상담 신청이 접수됐습니다.</p>
        <p className="mt-2 text-[14px] text-white/60">
          빠른 시간 안에 남겨주신 연락처로 연락드리겠습니다.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-5 text-[13px] font-medium text-brand"
        >
          다시 작성하기
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
      <p className="text-[13px] font-semibold uppercase tracking-widest text-brand">
        빠른 상담 신청
      </p>

      <div className="mt-5 flex flex-col gap-3">
        <input
          type="text"
          placeholder="이름"
          value={form.name}
          onChange={handleChange('name')}
          className="rounded-xl border border-white/15 bg-transparent px-4 py-3 text-[14px] text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
        />
        <input
          type="tel"
          placeholder="연락처 (예: 010-1234-5678)"
          value={form.phone}
          onChange={handleChange('phone')}
          className="rounded-xl border border-white/15 bg-transparent px-4 py-3 text-[14px] text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
        />
        <textarea
          placeholder="문의 내용 (제품, 설치 환경 등)"
          value={form.message}
          onChange={handleChange('message')}
          rows={3}
          className="resize-none rounded-xl border border-white/15 bg-transparent px-4 py-3 text-[14px] text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
        />
      </div>

      <label className="mt-4 flex items-start gap-2 text-[12px] leading-relaxed text-white/50">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-0.5"
        />
        상담을 위해 이름, 연락처를 수집하며, 상담 목적으로만 이용됩니다. 수집에 동의합니다.
      </label>

      {status === 'error' && <p className="mt-3 text-[13px] text-brand">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-5 w-full rounded-full bg-brand px-6 py-3 text-[14px] font-medium text-white transition-transform hover:scale-[1.02] disabled:opacity-60"
      >
        {status === 'submitting' ? '전송 중…' : '상담 신청하기'}
      </button>
    </form>
  )
}

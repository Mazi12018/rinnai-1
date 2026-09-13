import { useReveal } from '../hooks/useReveal'
import { products } from '../data/content'

export function Products() {
  const ref = useReveal()

  return (
    <section id="products" className="bg-mist py-28">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-[13px] font-semibold uppercase tracking-widest text-brand">
            Products
          </span>
          <h2 className="mt-4 text-[34px] font-bold tracking-tight text-ink sm:text-[40px]">
            우리 집에 필요한 모든 것
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] text-ink-soft">
            보일러를 중심으로, 온수기와 주방가전까지 린나이 정품으로 한 번에 만나보세요.
          </p>
          <a
            href="https://www.rinnaimall.com/front/main"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-1.5 text-[13px] font-medium text-ink-soft transition-colors hover:border-ink hover:text-ink"
          >
            린나이몰에서 전체 제품 보기
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }) {
  return (
    <div
      className={`flex flex-col rounded-[28px] p-8 transition-transform hover:-translate-y-1 ${
        product.accent ? 'bg-ink text-white' : 'bg-white text-ink ring-1 ring-line'
      }`}
    >
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
          product.accent ? 'bg-white/10' : 'bg-mist'
        }`}
      >
        <ProductIcon id={product.id} accent={product.accent} />
      </div>

      <h3 className="mt-8 text-[22px] font-semibold">{product.name}</h3>
      <p className={`mt-1 text-[14px] font-medium ${product.accent ? 'text-brand' : 'text-brand'}`}>
        {product.tagline}
      </p>
      <p className={`mt-4 text-[15px] leading-relaxed ${product.accent ? 'text-white/70' : 'text-ink-soft'}`}>
        {product.desc}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {product.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
              product.accent
                ? 'bg-white/10 text-white hover:bg-white/20'
                : 'bg-mist text-ink hover:bg-ink hover:text-white'
            }`}
          >
            {link.label}
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </div>
  )
}

function ProductIcon({ id, accent }) {
  const stroke = accent ? '#ffffff' : '#0a0a0c'

  if (id === 'boiler') {
    return (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
        <rect x="4" y="2" width="18" height="22" rx="3" stroke={stroke} strokeWidth="1.6" />
        <path d="M9 8h8M9 12h8M9 16h4" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  }

  if (id === 'kitchen') {
    return (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
        <rect x="3" y="6" width="20" height="14" rx="2.5" stroke={stroke} strokeWidth="1.6" />
        <circle cx="8.5" cy="13" r="2" stroke={stroke} strokeWidth="1.6" />
        <circle cx="17.5" cy="13" r="2" stroke={stroke} strokeWidth="1.6" />
      </svg>
    )
  }

  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <path
        d="M13 3c3.5 5 6.5 9.2 6.5 12.7a6.5 6.5 0 1 1-13 0C6.5 12.2 9.5 8 13 3Z"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

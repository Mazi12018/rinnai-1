import { useReveal } from '../hooks/useReveal'
import { blogPosts, contact } from '../data/content'

export function BlogTeaser() {
  const ref = useReveal()

  return (
    <section id="blog" className="bg-mist py-28">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-[13px] font-semibold uppercase tracking-widest text-brand">
              Blog
            </span>
            <h2 className="mt-4 text-[34px] font-bold tracking-tight text-ink sm:text-[40px]">
              보일러 이야기, 궁금하셨죠
            </h2>
            <p className="mt-4 max-w-lg text-[16px] text-ink-soft">
              제품 선택부터 관리 요령까지, 전문 대리점의 노하우를 네이버 블로그에서
              만나보세요.
            </p>
          </div>
          <a
            href={contact.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-1.5 text-[13px] font-medium text-ink transition-colors hover:border-ink"
          >
            네이버 블로그 방문하기
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {blogPosts.map((post) => (
            <a
              key={post.title}
              href={contact.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl bg-white p-6 ring-1 ring-line transition-transform hover:-translate-y-1"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-line">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="mt-5 text-[12px] font-medium uppercase tracking-wider text-brand">
                {post.category}
              </p>
              <h3 className="mt-2 text-[16px] font-semibold leading-snug text-ink">
                {post.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

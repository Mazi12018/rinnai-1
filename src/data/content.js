import boilerFrostImg from '../assets/blog/boiler-frost.jpg'
import condensingBoilerImg from '../assets/blog/condensing-boiler.jpg'
import kitchenHoodImg from '../assets/blog/kitchen-hood.jpg'

export const nav = [
  { label: '소개', href: '#about' },
  { label: '제품', href: '#products' },
  { label: '이용안내', href: '#process' },
  { label: '블로그', href: '#blog' },
  { label: '오시는 길', href: '#contact' },
]

export const trustPoints = [
  {
    title: '린나이 공식 인증 대리점',
    desc: '본사 인증을 받은 정식 대리점에서 100% 정품만 취급합니다.',
  },
  {
    title: '전문 기사 직접 시공',
    desc: '숙련된 전문 기사가 설치부터 마감까지 책임집니다.',
  },
  {
    title: '빠르고 투명한 A/S',
    desc: '설치 이후에도 빠른 연락과 명확한 견적으로 응대합니다.',
  },
]

export const products = [
  {
    id: 'boiler',
    name: '보일러',
    tagline: '겨울을 책임지는 가장 확실한 선택',
    desc: '콘덴싱 보일러부터 일반 보일러까지, 우리 집 구조에 맞는 최적의 모델을 만나보세요.',
    accent: true,
    links: [{ label: '보일러 전체보기', url: 'https://www.rinnaimall.com/front/product/category/384' }],
  },
  {
    id: 'kitchen',
    name: '주방가전',
    tagline: '요리하는 시간을 더 즐겁게',
    desc: '가스레인지, 전기레인지, 후드 등 린나이 주방가전으로 주방을 완성하세요.',
    accent: false,
    links: [
      { label: '가스레인지', url: 'https://www.rinnaimall.com/front/product/category/390' },
      { label: '전기레인지', url: 'https://www.rinnaimall.com/front/product/category/391' },
      { label: '후드', url: 'https://www.rinnaimall.com/front/product/category/395' },
    ],
  },
  {
    id: 'water-heater',
    name: '온수기',
    tagline: '어디서든 따뜻한 물을 그대로',
    desc: '전기온수기와 가스온수기로, 필요한 곳에 필요한 만큼 뜨거운 물을 공급합니다.',
    accent: false,
    links: [{ label: '온수기 전체보기', url: 'https://www.rinnaimall.com/front/product/category/385' }],
  },
]

export const process = [
  { step: '01', title: '상담', desc: '전화 또는 온라인으로 필요한 제품과 설치 환경을 확인합니다.' },
  { step: '02', title: '견적', desc: '현장에 맞는 모델과 비용을 투명하게 안내해 드립니다.' },
  { step: '03', title: '시공', desc: '전문 기사가 방문하여 안전하고 꼼꼼하게 설치합니다.' },
  { step: '04', title: 'A/S', desc: '설치 후에도 빠르게 연락하고 확실하게 책임집니다.' },
]

export const blogPosts = [
  {
    title: '겨울철 보일러 동파, 미리 막는 방법',
    category: '보일러 관리',
    image: boilerFrostImg,
  },
  {
    title: '콘덴싱 보일러, 일반 보일러와 뭐가 다를까?',
    category: '제품 가이드',
    image: condensingBoilerImg,
  },
  {
    title: '주방 후드 환기, 이렇게 관리하세요',
    category: '주방가전',
    image: kitchenHoodImg,
  },
]

export const contact = {
  addressLine: '서울특별시 영등포구 여의대방로53가길 12 1층',
  phone: '02-844-3650',
  hours: '월~토 08:30 – 18:00',
  kakaoNote: '카카오톡 채널 준비 중',
  blogUrl: 'https://blog.naver.com/rinnai2026',
}

export const business = {
  companyName: '주식회사 노벤',
  registrationNumber: '748-81-00590',
}

import { About } from './components/About'
import { BlogTeaser } from './components/BlogTeaser'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Process } from './components/Process'
import { Products } from './components/Products'
import { TrustBar } from './components/TrustBar'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Products />
        <Process />
        <BlogTeaser />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

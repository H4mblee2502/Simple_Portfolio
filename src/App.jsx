import { Navbar, Footer } from './components/layout'
import { Hero, Projects, Contact, Worksection } from './sections'
export default function App(){
  return(
    <div>
      <Navbar />
      <main>
          <Hero />
          <Worksection />
          <Projects />
          <Contact />
      </main>
      <Footer />
    </div>
  )
}
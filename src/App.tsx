import { useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { CustomCursor } from './components/CustomCursor'
import { Education } from './components/Education'
import { Certifications } from './components/Certifications'
import { Footer } from './components/Footer'
import { Hackathon } from './components/Hackathon'
import { Hero } from './components/Hero'
import { Leadership } from './components/Leadership'
import { Navbar } from './components/Navbar'
import { ProjectModal } from './components/ProjectModal'
import { Projects } from './components/Projects'
import { Seo } from './components/Seo'
import { Skills } from './components/Skills'

export default function App() {
  const [projectId, setProjectId] = useState<string | null>(null)

  return (
    <>
      <Seo />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="page-noise" aria-hidden="true" />
      <CustomCursor />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects onOpen={setProjectId} />
        <Leadership />
        <Hackathon />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ProjectModal projectId={projectId} onClose={() => setProjectId(null)} />
    </>
  )
}

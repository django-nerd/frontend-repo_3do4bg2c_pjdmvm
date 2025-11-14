import { useEffect, useRef, useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { About, Skills, Experience, Projects, Education, AISection, Contact } from './components/Sections'

const sampleProjects = [
  {
    title: 'E-Commerce Platform',
    stack: ['ASP.NET MVC','SQL Server'],
    description: 'A scalable e‑commerce platform with secure payments and admin analytics.',
    code_url: '#',
    live_url: '#'
  },
  {
    title: 'Web Scraping Real Estate System',
    stack: ['Python','HTML','CSS','JS'],
    description: 'Automated scraping with dashboards and exportable insights.',
    code_url: '#',
    live_url: '#'
  },
  {
    title: 'Anime Music System',
    stack: ['HTML','CSS','Bootstrap','JS'],
    description: 'A playful music catalog with search and playlists.',
    code_url: '#',
    live_url: '#'
  },
  {
    title: 'Crawler‑based Search Engine',
    stack: ['Python'],
    description: 'Custom crawler with indexing and basic ranking.',
    code_url: '#',
    live_url: '#'
  },
]

function App() {
  const workRef = useRef(null)

  const onViewWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const onDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'DEMO-Resume.pdf'
    link.click()
  }

  return (
    <div className="font-poppins bg-white text-navy dark:bg-navy dark:text-white">
      <Navbar />
      <main>
        <Hero onViewWork={onViewWork} onDownloadResume={onDownloadResume} />
        <About />
        <Skills />
        <Experience />
        <Projects projects={sampleProjects} />
        <Education />
        <AISection />
        <Contact />
      </main>
      <footer className="text-center text-sm text-navy/60 dark:text-gray-400 py-10">© {new Date().getFullYear()} DEMO — Crafted with React & AI</footer>
    </div>
  )
}

export default App

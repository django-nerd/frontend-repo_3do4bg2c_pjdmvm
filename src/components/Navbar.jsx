import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, Github, Linkedin } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = stored ? stored === 'dark' : prefersDark
    setDark(initial)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between rounded-b-2xl backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-navy/60 dark:supports-[backdrop-filter]:bg-navy/50 border-b border-white/20">
        <a href="#home" className="font-semibold tracking-wide text-navy dark:text-white">DEMO</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-navy/80 dark:text-gray-200">
          <a href="#about" className="hover:text-teal transition">About</a>
          <a href="#skills" className="hover:text-teal transition">Skills</a>
          <a href="#experience" className="hover:text-teal transition">Experience</a>
          <a href="#projects" className="hover:text-teal transition">Projects</a>
          <a href="#education" className="hover:text-teal transition">Education</a>
          <a href="#ai" className="hover:text-teal transition">AI</a>
          <a href="#contact" className="hover:text-teal transition">Contact</a>
          <a href="https://github.com/demo" target="_blank" rel="noreferrer" aria-label="Github"><Github size={18} /></a>
          <a href="https://linkedin.com/in/demo177" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <button onClick={() => setDark(d => !d)} aria-label="Toggle theme" className="p-2 rounded-lg hover:bg-gray-100/80 dark:hover:bg-white/10">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
        <button onClick={() => setOpen(o => !o)} className="md:hidden p-2 rounded-lg hover:bg-gray-100/80 dark:hover:bg-white/10"><Menu /></button>
      </div>
      {open && (
        <div className="md:hidden mx-4 mt-2 rounded-2xl p-4 bg-white/80 dark:bg-navy/70 backdrop-blur border border-white/20 text-sm text-navy/80 dark:text-gray-200">
          <div className="grid gap-3">
            {['About','Skills','Experience','Projects','Education','AI','Contact'].map((s) => (
              <a key={s} href={`#${s.toLowerCase()}`} onClick={() => setOpen(false)} className="hover:text-teal">{s}</a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com/demo" target="_blank" rel="noreferrer"><Github size={18} /></a>
              <a href="https://linkedin.com/in/demo177" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
              <button onClick={() => setDark(d => !d)} aria-label="Toggle theme" className="p-2 rounded-lg hover:bg-gray-100/80 dark:hover:bg-white/10">
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

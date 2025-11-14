import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 bg-gradient-to-b from-white to-graysoft/60 dark:from-navy dark:to-navy/60">
      <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-semibold text-navy dark:text-white">About Me</h2>
          <p className="mt-6 text-navy/80 dark:text-gray-200 leading-relaxed">
            I’m DEMO, a results-driven Software Engineer with 4.7 years of experience in full-stack development, AI integration, and cloud-based enterprise systems. I specialize in combining code and creativity to build secure, fast, and intelligent web solutions.
          </p>
          <div className="mt-8 grid gap-4">
            {["Joined MindRuby Technology LLP","Led AI-enhanced tools initiative","Optimized backend & security","Mentored team on prompt engineering"].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }} className="relative rounded-2xl border border-navy/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-4">
                <div className="absolute -left-2 top-1.5 h-3 w-3 rounded-full bg-teal shadow shadow-teal/40" />
                <p className="text-sm text-navy/80 dark:text-gray-200">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-full h-64 rounded-3xl bg-gradient-to-r from-teal/30 to-purple-500/20 animate-gradient-x" />
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  const skills = {
    Frontend: ['React.js','TypeScript','HTML5','CSS3','JavaScript'],
    Backend: ['ASP.NET','C#','SQL Server','Python'],
    Cloud: ['Azure'],
    AI: ['AI Integration','Prompt Engineering']
  }

  const bars = [
    { name: 'ASP.NET', level: 90 },
    { name: 'C#', level: 88 },
    { name: 'SQL Server', level: 85 },
    { name: 'React.js', level: 86 },
    { name: 'TypeScript', level: 82 },
    { name: 'Python', level: 80 },
  ]

  return (
    <section id="skills" className="relative scroll-mt-24 bg-white dark:bg-navy">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-semibold text-navy dark:text-white">Skills</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {bars.map((b, i) => (
              <div key={b.name} className="">
                <div className="flex justify-between text-sm text-navy/70 dark:text-gray-300">
                  <span>{b.name}</span>
                  <span>{b.level}%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-graysoft dark:bg-white/10 overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${b.level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1 }} className="h-full rounded-full bg-teal" />
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="rounded-2xl border border-navy/10 dark:border-white/10 p-4 bg-white/70 dark:bg-white/5 backdrop-blur">
              <div className="flex flex-wrap gap-2">
                {Object.entries(skills).map(([cat, items]) => (
                  <div key={cat} className="min-w-[220px]">
                    <p className="text-xs uppercase tracking-wide text-navy/60 dark:text-gray-400">{cat}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {items.map((s) => (
                        <span key={s} className="text-xs px-3 py-1 rounded-full border border-navy/10 dark:border-white/15 bg-white/70 dark:bg-white/5 hover:border-teal/40">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  const items = [
    {
      role: 'Software Engineer',
      company: 'MindRuby Technology LLP',
      time: '2021 – Present',
      bullets: [
        'Agile development and full‑stack projects',
        'API integrations and AI‑enhanced tools',
        'Database optimizations and security improvements',
      ],
      achievements: [
        'Boosted development efficiency using AI prompts',
        'Optimized backend performance',
        'Improved data security',
      ]
    }
  ]

  return (
    <section id="experience" className="relative scroll-mt-24 bg-gradient-to-b from-white to-graysoft/60 dark:from-navy dark:to-navy/60">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-semibold text-navy dark:text-white">Experience</h2>
        <div className="mt-10 grid gap-6">
          {items.map((e, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }} className="rounded-3xl border border-navy/10 dark:border-white/10 p-6 bg-white/70 dark:bg-white/5 backdrop-blur">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-navy dark:text-white">{e.role} — {e.company}</h3>
                  <p className="text-sm text-navy/60 dark:text-gray-300">{e.time}</p>
                </div>
              </div>
              <ul className="mt-4 list-disc pl-6 text-navy/80 dark:text-gray-200">
                {e.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {e.achievements.map((a) => (
                  <span key={a} className="text-xs px-3 py-1 rounded-full border border-teal/40 text-teal bg-teal/10">{a}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Projects({ projects }) {
  return (
    <section id="projects" className="relative scroll-mt-24 bg-white dark:bg-navy">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-semibold text-navy dark:text-white">Projects</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }} className="group relative rounded-3xl overflow-hidden border border-navy/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur">
              <div className="h-36 bg-gradient-to-tr from-teal/30 to-purple-500/30" />
              <div className="p-5">
                <h3 className="font-semibold text-navy dark:text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-navy/70 dark:text-gray-300">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-full border border-navy/10 dark:border-white/15">{s}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  {p.code_url && <a href={p.code_url} target="_blank" className="text-sm text-teal hover:underline">View Code</a>}
                  {p.live_url && <a href={p.live_url} target="_blank" className="text-sm text-teal hover:underline">Live Demo</a>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Education() {
  return (
    <section id="education" className="relative scroll-mt-24 bg-gradient-to-b from-white to-graysoft/60 dark:from-navy dark:to-navy/60">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-semibold text-navy dark:text-white">Education & Certifications</h2>
        <div className="mt-8 grid gap-6">
          <div className="rounded-2xl border border-navy/10 dark:border-white/10 p-6 bg-white/70 dark:bg-white/5 backdrop-blur">
            <p className="font-semibold text-navy dark:text-white">B.Tech (CSE) – SISTec, Bhopal</p>
            <p className="text-sm text-navy/70 dark:text-gray-300">2017–2021, 8.10 CGPA</p>
          </div>
          <div className="rounded-2xl border border-navy/10 dark:border-white/10 p-6 bg-white/70 dark:bg-white/5 backdrop-blur">
            <p className="font-semibold text-navy dark:text-white">Certifications</p>
            <p className="text-sm text-navy/70 dark:text-gray-300">Azure Fundamentals (AZ-900), Python 3, AWS, Linux, RHCSA</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function AISection() {
  return (
    <section id="ai" className="relative scroll-mt-24 bg-white dark:bg-navy">
      <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-semibold text-navy dark:text-white">AI & Innovation</h2>
          <p className="mt-6 text-navy/80 dark:text-gray-200">Highlighting AI-driven development and prompt engineering to optimize workflows, enhance code quality, and maintain robust security.</p>
          <ul className="mt-4 list-disc pl-6 text-navy/80 dark:text-gray-200">
            <li>Automated code reviews and test generation leveraging LLMs</li>
            <li>Secure prompt patterns and guardrails</li>
            <li>AI-assisted database optimization and monitoring</li>
          </ul>
        </div>
        <div className="h-72 rounded-3xl bg-gradient-to-tr from-purple-500/30 via-teal/30 to-amber-400/30 animate-gradient-x" />
      </div>
    </section>
  )
}

export function Contact() {
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  async function onSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    const res = await fetch(`${backend}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (res.ok) {
      alert('Thanks! I will get back to you soon.')
      e.currentTarget.reset()
    } else {
      alert('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-24 bg-gradient-to-b from-white to-graysoft/60 dark:from-navy dark:to-navy/60">
      <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-semibold text-navy dark:text-white">Get in touch</h2>
          <div className="mt-6 space-y-2 text-navy/80 dark:text-gray-200">
            <p>Email: dempgmail.com</p>
            <p>Phone: +91-0000000000</p>
            <p>LinkedIn: demo177</p>
          </div>
          <div className="mt-8 h-64 rounded-3xl bg-gradient-to-tr from-teal/30 to-purple-500/30 animate-gradient-x" />
        </div>
        <form onSubmit={onSubmit} className="rounded-3xl border border-navy/10 dark:border-white/10 p-6 bg-white/70 dark:bg-white/5 backdrop-blur grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" placeholder="Your name" required className="px-4 py-3 rounded-xl bg-white/80 dark:bg-white/10 border border-white/20 outline-none focus:border-teal" />
            <input type="email" name="email" placeholder="Email" required className="px-4 py-3 rounded-xl bg-white/80 dark:bg-white/10 border border-white/20 outline-none focus:border-teal" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="phone" placeholder="Phone" className="px-4 py-3 rounded-xl bg-white/80 dark:bg-white/10 border border-white/20 outline-none focus:border-teal" />
            <input name="subject" placeholder="Subject" required className="px-4 py-3 rounded-xl bg-white/80 dark:bg-white/10 border border-white/20 outline-none focus:border-teal" />
          </div>
          <textarea name="message" placeholder="Message" required rows="5" className="px-4 py-3 rounded-xl bg-white/80 dark:bg-white/10 border border-white/20 outline-none focus:border-teal" />
          <button className="justify-self-start rounded-xl bg-teal px-6 py-3 font-medium text-white shadow-lg shadow-teal/30 hover:brightness-110 transition">Send Message</button>
        </form>
      </div>
    </section>
  )
}

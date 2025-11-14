import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ onViewWork, onDownloadResume }) {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-navy text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/60 to-navy pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 flex flex-col items-center text-center">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-teal animate-pulse" /> AI-Driven Engineer
        </motion.span>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
          Building Secure, Scalable & AI-Driven Web Applications.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mt-6 max-w-2xl text-gray-200">
          I’m DEMO, a results-driven Software Engineer with 4.7 years of experience in full-stack development, AI integration, and cloud-based enterprise systems.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <button onClick={onViewWork} className="rounded-xl bg-teal px-6 py-3 font-medium text-white shadow-lg shadow-teal/30 hover:brightness-110 transition">View My Work</button>
          <button onClick={onDownloadResume} className="rounded-xl bg-white/10 px-6 py-3 font-medium text-white border border-white/20 hover:bg-white/20 transition">Download Resume</button>
        </motion.div>
      </div>
    </section>
  )
}

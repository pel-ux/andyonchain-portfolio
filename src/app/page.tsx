'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Contact from '@/components/Contact'


const TITLES = [
  'Web3 Community Manager',
  'Culture Builder',
  'Discord Architect',
  'DAO Contributor',
  'Onboarding Wizard',
]

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function useTypewriter(words: string[], speed = 65, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1))
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause)
        } else {
          setCharIdx(c => c + 1)
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setWordIdx(i => (i + 1) % words.length)
          setCharIdx(0)
        } else {
          setCharIdx(c => c - 1)
        }
      }
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

function MatrixCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animIdRef = useRef<number>(0)
  const activeRef = useRef(true)
  const frameRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const isMobile = window.innerWidth < 768

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const CHARS = '01ΞΨΩ∞◈⬡#$%βΣ'.split('')
    const COL_W = isMobile ? 20 : 14
    let cols = Math.floor(canvas.width / COL_W)
    if (isMobile) cols = Math.floor(cols * 0.6)
    const drops: number[] = Array(cols).fill(0).map(() => Math.random() * -60)

    const observer = new IntersectionObserver(
      ([entry]) => { activeRef.current = entry.isIntersecting },
      { threshold: 0.05 }
    )
    observer.observe(canvas)

    const draw = () => {
      frameRef.current++
      if (isMobile && frameRef.current % 2 !== 0) {
        animIdRef.current = requestAnimationFrame(draw)
        return
      }
      if (!activeRef.current) {
        animIdRef.current = requestAnimationFrame(draw)
        return
      }

      ctx.fillStyle = 'rgba(9,9,15,0.2)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${isMobile ? 10 : 11}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const ch = CHARS[Math.floor(Math.random() * CHARS.length)]
        const y = drops[i] * COL_W
        const brightness = Math.random()

        ctx.globalAlpha = isMobile ? 0.55 : 0.7
        ctx.fillStyle = brightness > 0.93 ? '#e9d5ff' : brightness > 0.5 ? '#7c3aed' : '#3b0764'
        ctx.fillText(ch, i * COL_W, y)
        ctx.globalAlpha = 1

        if (y > canvas.height && Math.random() > 0.972) drops[i] = 0
        drops[i] += isMobile ? 0.4 : 0.55
      }

      animIdRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animIdRef.current)
      window.removeEventListener('resize', resize)
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ willChange: 'transform' }}
      aria-hidden="true"
    />
  )
}

function Navbar({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false)

  // Close menu on outside click
  useEffect(() => {
    if (!open) return
    const handler = () => setOpen(false)
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [open])

  // Close on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 640) setOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-6 h-14">

        {/* Logo */}
        <span className="font-mono text-sm text-purple-400 font-bold tracking-wider">
          andy<span className="text-zinc-600">onchain</span>
        </span>

        {/* Desktop links */}
        <ul className="hidden sm:flex items-center gap-6">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-zinc-500 hover:text-purple-400 text-sm transition-colors font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="px-4 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-medium transition-colors"
            >
              Hire me
            </a>
          </li>
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          onClick={(e) => { e.stopPropagation(); setOpen(o => !o) }}
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 rounded-md hover:bg-zinc-800/50 transition-colors"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span
            className={`block h-px w-5 bg-zinc-400 transition-all duration-300 origin-center ${
              open ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block h-px w-5 bg-zinc-400 transition-all duration-300 ${
              open ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block h-px w-5 bg-zinc-400 transition-all duration-300 origin-center ${
              open ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="flex flex-col px-6 pb-5 pt-1 gap-1 border-t border-zinc-800/40">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-3 text-zinc-400 hover:text-purple-400 text-sm font-medium transition-colors border-b border-zinc-800/30 last:border-0"
              >
                {link.label}
                <span className="text-zinc-700 text-xs">↗</span>
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center w-full py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-colors"
            >
              Hire me
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

function SectionDivider() {
  return (
    <div className="flex items-center gap-4 px-6 max-w-4xl mx-auto py-2">
      <div className="flex-1 h-px bg-zinc-800" />
      <span className="text-zinc-700 text-xs font-mono">◈</span>
      <div className="flex-1 h-px bg-zinc-800" />
    </div>
  )
}

export default function Home() {
  const title = useTypewriter(TITLES)
  const [copied, setCopied] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText('@andyonchain')
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }, [])

  return (
    <div className="bg-zinc-950 min-h-screen text-white">

      <Navbar scrolled={scrolled} />

      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center min-h-[100svh] text-center px-6 overflow-hidden"
      >
        <MatrixCanvas />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 65% 65% at 50% 50%, transparent 0%, rgba(9,9,15,0.85) 70%, #09090f 100%)',
          }}
        />

        <div className="relative z-10 flex flex-col items-center pt-14">

          {/* ── AVATAR ── */}
          <div className="relative mb-7">
            <div className="absolute inset-[-3px] rounded-full border border-purple-600/50 animate-spin [animation-duration:10s]" />
            <div className="absolute inset-[-8px] rounded-full bg-purple-700 blur-2xl opacity-20 animate-pulse" />
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-purple-600 bg-zinc-900 overflow-hidden flex items-center justify-center">
              <img src="/andy.jpg" alt="Andy" className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover" />
            </div>
            <span
              className="absolute bottom-1 right-1 flex items-center gap-1 bg-zinc-900 border border-zinc-800 text-green-400 text-[10px] font-mono px-2 py-0.5 rounded-full"
              title="Available for work"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
              open
            </span>
          </div>

          {/* ── NAME ── */}
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-2 cursor-default select-none">
            AndyOnchain
            <span className="text-purple-500 animate-pulse">_</span>
          </h1>

          {/* ── TYPEWRITER ── */}
          <div className="h-6 mb-5 flex items-center justify-center">
            <p className="text-purple-400 text-xs sm:text-sm font-mono tracking-widest uppercase">
              {title}
              <span className="animate-pulse opacity-70">|</span>
            </p>
          </div>

          {/* ── BIO ── */}
          <p className="text-zinc-400 text-sm sm:text-base max-w-sm sm:max-w-md leading-relaxed mb-1">
            Growing, nurturing, and energising Web3 communities across DeFi,
            NFTs, and DAOs — one genuine connection at a time.
          </p>
          <p className="text-zinc-600 text-sm mb-8 italic">
            Built communities that actually show up.
          </p>

          {/* ── HANDLE CHIP ── */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-1.5 mb-7 rounded-full border border-zinc-800 text-zinc-500 text-xs font-mono hover:border-purple-600 hover:text-purple-400 transition-all active:scale-95"
            aria-label="Copy Twitter handle"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 inline-block" />
            {copied ? '✓ copied!' : '@andyonchain'}
          </button>

          {/* ── TOOLS ROW ── */}
          <div className="flex items-center gap-3 mb-8 flex-wrap justify-center">
            {['Discord', 'Notion', 'Telegram', 'Snapshot', 'Dune'].map(tool => (
              <span
                key={tool}
                className="text-[11px] font-mono text-zinc-600 border border-zinc-800 px-2.5 py-1 rounded-md"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* ── CTA BUTTONS ── */}
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#projects"
              className="px-6 py-2.5 rounded-lg bg-purple-600 text-white text-sm font-medium hover:bg-purple-500 active:scale-95 transition-all"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-lg border border-zinc-800 text-zinc-400 text-sm hover:border-purple-600 hover:text-purple-400 active:scale-95 transition-all"
            >
              Get in touch
            </a>
          </div>

        </div>
      </section>

      {/* ── SECTIONS ── */}
      <SectionDivider />
      <section id="projects" className="scroll-mt-16">
        <Projects />
      </section>

      <SectionDivider />
      <section id="about" className="scroll-mt-16">
        <About />
      </section>

      <SectionDivider />
      <section id="contact" className="scroll-mt-16">
        <Contact />
      </section>

    </div>
  )
}
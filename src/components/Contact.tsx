'use client'

import { useEffect, useRef } from 'react'

export default function Contact() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const PARTICLE_COUNT = 60
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.2,
    }))

    const CONNECTION_DISTANCE = 120

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha})`
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DISTANCE) {
            const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.18
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const links = [
    {
      label: 'Twitter / X',
      handle: '@andyonchain',
      href: 'https://x.com/AndyonChain_',
      icon: '🐦',
    },
    {
      label: 'Telegram',
      handle: '@andyonchain',
      href: 'http://t.me/AndyonChain',
      icon: '✈️',
    },
    {
      label: 'Email',
      handle: 'E-mail',
      href: 'anwanandikan312@gmail.com',
      icon: '📩',
    },
  ]

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[70vh] text-center px-4 overflow-hidden">

      {/* Animated particle background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-2xl font-semibold text-white mb-2">Get in touch</h1>
        <p className="text-zinc-500 text-sm mb-12 max-w-sm">
          Want to work together,Reach out on any of these platforms.
        </p>

        <div className="flex flex-col gap-3 w-full max-w-sm">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border border-zinc-800 rounded-xl px-5 py-4 hover:border-purple-800 hover:bg-zinc-950 transition-all group"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{link.icon}</span>
                <div className="text-left">
                  <p className="text-white text-sm font-medium">{link.label}</p>
                  <p className="text-zinc-500 text-xs">{link.handle}</p>
                </div>
              </div>
              <span className="text-zinc-700 group-hover:text-purple-400 transition-colors text-sm">
                &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>

    </div>
  )
}
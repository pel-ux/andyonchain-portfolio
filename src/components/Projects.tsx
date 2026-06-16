'use client'

import { useState, useCallback } from 'react'
import { projects as initialProjects } from '@/data/projects'

type Project = typeof initialProjects[number]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function ProjectCard({
  project,
  index,
  expanded,
  onToggle,
}: {
  project: Project
  index: number
  expanded: boolean
  onToggle: () => void
}) {
  return (
    <div
      onClick={onToggle}
      className={`group relative rounded-2xl transition-all duration-300 cursor-pointer select-none overflow-hidden
        ${expanded
          ? 'border border-purple-700/60 bg-purple-950/10'
          : 'border border-zinc-800/60 hover:border-purple-800/50'
        }`}
      style={{ background: expanded ? undefined : 'rgba(255,255,255,0.015)' }}
    >
      {/* Hover/active glow */}
      <div
        className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300
          ${expanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
        style={{
          background:
            'radial-gradient(ellipse 90% 50% at 50% 0%, rgba(124,58,237,0.09), transparent)',
        }}
      />

      <div className="relative z-10 p-6">
        {/* ── TOP ROW ── */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-zinc-700 group-hover:text-purple-600 transition-colors w-5 shrink-0">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3
                className={`font-semibold text-base tracking-tight transition-colors leading-tight
                  ${expanded ? 'text-purple-300' : 'text-white group-hover:text-purple-300'}`}
                style={{ fontFamily: "'Syne', 'Inter', sans-serif" }}
              >
                {project.name}
              </h3>
              {/* Tags visible in collapsed state */}
              {!expanded && (
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-zinc-600 group-hover:text-purple-500/70 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-zinc-700 text-xs font-mono">{project.year}</span>
            <span
              className={`text-lg transition-all duration-300 ${expanded ? 'rotate-45 text-purple-400' : 'text-zinc-700 group-hover:text-purple-400'}`}
            >
              +
            </span>
          </div>
        </div>

        {/* ── EXPANDED CONTENT ── */}
        <div
          className={`transition-all duration-300 overflow-hidden
            ${expanded ? 'max-h-96 opacity-100 mt-5' : 'max-h-0 opacity-0'}`}
        >
          <div className="pl-9 border-l border-purple-800/30 ml-2">
            <p
              className="text-zinc-400 text-sm leading-relaxed mb-5"
              style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
            >
              {project.description}
            </p>

            {/* All tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-1 rounded-full border border-purple-900/50 text-purple-400/70 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* View link */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors border border-purple-800/50 hover:border-purple-600 px-4 py-2 rounded-lg"
              >
                View project ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [list, setList] = useState<Project[]>(initialProjects)
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [shuffling, setShuffling] = useState(false)

  const handleShuffle = useCallback(() => {
    setShuffling(true)
    setExpandedId(null)
    setTimeout(() => {
      setList(shuffle(initialProjects))
      setShuffling(false)
    }, 300)
  }, [])

  const toggleExpand = useCallback((id: string) => {
    setExpandedId(prev => (prev === id ? null : id))
  }, [])

  return (
    <section className="relative overflow-hidden px-6 py-20">

      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 90% 10%, rgba(109,40,217,0.1) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 5% 90%, rgba(139,92,246,0.07) 0%, transparent 55%), #09090f',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-600/40 to-transparent" />

      <div className="relative z-10 max-w-2xl mx-auto">

        {/* ── HEADER ── */}
        <div className="mb-10">
          <p className="text-purple-500 text-xs font-mono tracking-widest uppercase mb-3">// projects</p>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2
              className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-none"
              style={{ fontFamily: "'Syne', 'Inter', sans-serif" }}
            >
              Work I've{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(90deg, #c4b5fd, #7c3aed)' }}
              >
                shipped.
              </span>
            </h2>

            {/* Shuffle button */}
            <button
              onClick={handleShuffle}
              disabled={shuffling}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-mono transition-all duration-200
                ${shuffling
                  ? 'border-purple-700 text-purple-500 bg-purple-950/20'
                  : 'border-zinc-800 text-zinc-500 hover:border-purple-700 hover:text-purple-400 hover:bg-purple-950/10 active:scale-95'
                }`}
            >
              <span className={`inline-block transition-transform duration-300 ${shuffling ? 'animate-spin' : ''}`}>
                ⟳
              </span>
              {shuffling ? 'shuffling...' : 'shuffle'}
            </button>
          </div>
          <p
            className="text-zinc-600 text-xs mt-2"
            style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
          >
            {list.length} projects · tap a card to expand
          </p>
        </div>

        {/* ── PROJECT LIST ── */}
        <div
          className={`flex flex-col gap-3 transition-opacity duration-300 ${shuffling ? 'opacity-0' : 'opacity-100'}`}
        >
          {list.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              expanded={expandedId === project.id}
              onToggle={() => toggleExpand(project.id)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
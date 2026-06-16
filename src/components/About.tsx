export default function About() {
  const stack = [
    'Discord', 'Notion', 'Twitter/X', 'Lens Protocol',
    'Farcaster', 'Mirror.xyz', 'Snapshot', 'Dune', 'Telegram',
  ]

  const skills = [
    {
      icon: '🏗️',
      title: 'Community Building',
      description: 'Growing Web3 communities from zero — onboarding flows, retention loops, and the culture that makes people stay.',
    },
    {
      icon: '✍️',
      title: 'Content & Comms',
      description: 'Announcements, threads, newsletters, and governance proposals that people actually read and act on.',
    },
    {
      icon: '🎙️',
      title: 'Events & Spaces',
      description: 'Hosting X Spaces, AMAs, and community calls that drive real participation — not just attendance numbers.',
    },
    {
      icon: '🔗',
      title: 'Dev Relations',
      description: 'Bridging technical teams and community members. Making complex things feel simple and worth caring about.',
    },
  ]

  return (
    <section className="relative overflow-hidden px-6 py-20">

      {/* ── BACKGROUND GRADIENT ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 10% 20%, rgba(109,40,217,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 90% 80%, rgba(139,92,246,0.08) 0%, transparent 55%), #09090f',
        }}
      />
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-600/40 to-transparent" />

      <div className="relative z-10 max-w-2xl mx-auto">

        {/* ── HEADER ── */}
        <div className="mb-12">
          <p className="text-purple-500 text-xs font-mono tracking-widest uppercase mb-3">About Your Community Manager</p>
          <h2 className="text-3xl font-bold text-white mb-5 tracking-tight">
            The person behind<br />
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #a78bfa, #7c3aed)' }}>
              the community.
            </span>
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
            I'm Andy — a Web3 Community Manager with hands-on experience growing
            decentralised communities across DeFi, NFT, and DAO ecosystems.
            I care about making Web3 accessible, engaging, and genuinely worth being part of.
          </p>
        </div>

        {/* ── SKILLS GRID ── */}
        <div className="mb-12">
          <h3 className="text-zinc-500 text-xs font-mono tracking-widest uppercase mb-5">What I do</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="group relative border border-zinc-800 hover:border-purple-800 rounded-xl p-5 transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.08), transparent)' }}
                />
                <span className="text-xl mb-3 block">{skill.icon}</span>
                <h4 className="text-white text-sm font-semibold mb-2">{skill.title}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── TOOLS ── */}
        <div>
          <h3 className="text-zinc-500 text-xs font-mono tracking-widest uppercase mb-4">Tools & platforms</h3>
          <div className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="text-xs px-3 py-1.5 rounded-full border border-zinc-800 text-zinc-400 hover:border-purple-700 hover:text-purple-400 transition-colors cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
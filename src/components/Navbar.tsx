import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-white font-semibold tracking-tight">
        nexus<span className="text-zinc-500">.dao</span>
      </Link>

      <div className="flex items-center gap-6">
        <Link
          href="/projects"
          className="text-sm text-zinc-400 hover:text-white transition-colors"
        >
          Projects
        </Link>
        <Link
          href="/requests"
          className="text-sm text-zinc-400 hover:text-white transition-colors"
        >
          Join Requests
        </Link>
      </div>
    </nav>
  )
}
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl font-semibold mb-3">nexus<span className="text-zinc-500">.dao</span></h1>
      <p className="text-zinc-400 mb-8 max-w-md">A Web3 community portfolio. Discover projects, meet contributors, and apply to join.</p>
      <div className="flex gap-4">
        <Link href="/projects" className="px-5 py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors">
          Browse Projects
        </Link>
        <Link href="/requests" className="px-5 py-2.5 rounded-lg border border-zinc-800 text-sm text-zinc-400 hover:border-zinc-600 transition-colors">
          Join Requests
        </Link>
      </div>
    </div>
  )
}
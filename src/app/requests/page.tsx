import { requests } from '@/data/requests'
import { projects } from '@/data/projects'

export default function RequestsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-8">Join Requests</h1>
      <div className="flex flex-col gap-4">
        {requests.map((req) => {
          const project = projects.find((p) => p.id === req.projectId)
          return (
            <div key={req.id} className="border border-zinc-800 rounded-xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-medium text-white flex-shrink-0">
                {req.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-white font-medium">{req.name}</span>
                  <span className="text-zinc-500 text-sm">{req.handle}</span>
                  {project && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
                      {project.name}
                    </span>
                  )}
                </div>
                <p className="text-zinc-400 text-sm mb-3 leading-relaxed">{req.note}</p>
                <div className="flex flex-wrap gap-2">
                  {req.skills.map((skill) => (
                    <span key={skill} className="text-xs px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button className="text-xs px-3 py-1.5 rounded-lg bg-green-950 text-green-400 border border-green-900 hover:bg-green-900 transition-colors">
                  Accept
                </button>
                <button className="text-xs px-3 py-1.5 rounded-lg border border-zinc-800 text-zinc-500 hover:border-zinc-600 transition-colors">
                  Decline
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
import { projects } from '@/data/projects'

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-zinc-800 rounded-xl p-5 hover:border-zinc-600 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-3xl">{project.icon}</span>
              <span className={`w-2 h-2 rounded-full mt-1 ${project.active ? 'bg-green-500' : 'bg-zinc-600'}`} />
            </div>
            <h2 className="text-white font-medium mb-1">{project.name}</h2>
            <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-1 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-zinc-800 text-xs text-zinc-500">
              <span>{project.chain}</span>
              <span>{project.contributors} contributors</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
import ProjectCard from './ProjectCard';

export default function ProjectList({ projects, onNavigate, onSelectProject }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.length > 0 ? (
        projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelectProject={onSelectProject}
          />
        ))
      ) : (
        <div className="col-span-full text-center bg-white p-10 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700">No projects yet!</h3>
          <p className="text-gray-500 mt-2">Be the first to create a campaign.</p>
          <button
            onClick={() => onNavigate('create')}
            className="mt-6 bg-emerald-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-emerald-600"
          >
            Start Your Project
          </button>
        </div>
      )}
    </div>
  );
}

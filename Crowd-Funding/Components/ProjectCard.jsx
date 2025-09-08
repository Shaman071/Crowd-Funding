import ProgressBar from './ProgressBar';

export default function ProjectCard({ project, onSelectProject }) {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 cursor-pointer group"
      onClick={() => onSelectProject(project.id)}
    >
      <img
        className="w-full h-48 object-cover"
        src={project.image}
        alt={project.title}
      />
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-emerald-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm mb-3">by {project.creator}</p>
        <p className="text-gray-600 text-sm mb-4 h-12 overflow-hidden">
          {project.description}
        </p>
        <ProgressBar value={project.pledged} max={project.goal} />
        <div className="flex justify-between items-end mt-3 text-sm">
          <div>
            <span className="font-bold text-lg text-emerald-600">
              ${project.pledged.toLocaleString()}
            </span>
            <span className="text-gray-500">
              {' '}
              / ${project.goal.toLocaleString()}
            </span>
          </div>
          <div className="text-right">
            <span className="font-bold text-lg">{project.daysLeft}</span>
            <span className="text-gray-500"> days left</span>
          </div>
        </div>
      </div>
    </div>
  );
}

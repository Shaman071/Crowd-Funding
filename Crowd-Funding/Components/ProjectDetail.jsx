import { useState } from 'react';
import ProgressBar from './ProgressBar';

export default function ProjectDetail({ project, onBack, onPledge }) {
  const [pledgeAmount, setPledgeAmount] = useState('');
  const [error, setError] = useState('');

  const handlePledgeSubmit = (e) => {
    e.preventDefault();
    const amount = parseInt(pledgeAmount, 10);
    if (isNaN(amount) || amount <= 0) {
      setError('Please enter a valid pledge amount.');
      return;
    }
    setError('');
    onPledge(project.id, amount);
    setPledgeAmount('');
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="text-emerald-600 font-semibold mb-6 hover:text-emerald-800"
      >
        &larr; Back to all projects
      </button>
      <div className="md:flex md:gap-8">
        <div className="md:w-3/5">
          <img
            className="w-full h-80 object-cover rounded-lg mb-4 shadow-md"
            src={project.image}
            alt={project.title}
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            {project.title}
          </h2>
          <p className="text-gray-600 mb-6">
            Created by{' '}
            <span className="font-semibold text-gray-800">
              {project.creator}
            </span>
          </p>
          <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="md:w-2/5 mt-8 md:mt-0">
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 sticky top-24">
            <ProgressBar value={project.pledged} max={project.goal} />
            <div className="my-4">
              <p className="text-3xl font-bold text-emerald-600">
                ${project.pledged.toLocaleString()}
              </p>
              <p className="text-gray-600 text-sm">
                pledged of ${project.goal.toLocaleString()} goal
              </p>
            </div>
            <div className="my-4">
              <p className="text-3xl font-bold text-gray-900">
                {project.backers}
              </p>
              <p className="text-gray-600 text-sm">backers</p>
            </div>
            <div className="my-4">
              <p className="text-3xl font-bold text-gray-900">
                {project.daysLeft}
              </p>
              <p className="text-gray-600 text-sm">days to go</p>
            </div>
            <form onSubmit={handlePledgeSubmit} className="mt-6">
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded-lg mb-3 text-sm">
                  {error}
                </div>
              )}
              <label className="font-semibold text-gray-700 block mb-2">
                Make a pledge
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 font-bold text-lg bg-gray-200 px-3 py-2 border border-r-0 border-gray-300 rounded-l-md">
                  $
                </span>
                <input
                  type="number"
                  value={pledgeAmount}
                  onChange={(e) => setPledgeAmount(e.target.value)}
                  placeholder="Amount"
                  className="w-full px-4 py-2 border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="bg-emerald-500 text-white font-semibold py-2 px-4 rounded-r-md hover:bg-emerald-600"
                >
                  Pledge
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

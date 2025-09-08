import { useState } from 'react';

export default function ProjectForm({ onSubmit, onCancel }) {
  const [title, setTitle] = useState('');
  const [creator, setCreator] = useState('');
  const [goal, setGoal] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !creator.trim() || !goal.trim() || !description.trim()) {
      setError('All fields are required.');
      return;
    }
    if (isNaN(parseInt(goal, 10)) || parseInt(goal, 10) <= 0) {
      setError('Please enter a valid goal amount.');
      return;
    }
    setError('');
    onSubmit({
      title,
      creator,
      goal: parseInt(goal, 10),
      description,
    });
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Start Your Project</h2>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
          <input
            type="text"
            value={creator}
            onChange={(e) => setCreator(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Funding Goal ($)</label>
          <input
            type="number"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Project Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
          ></textarea>
        </div>
        <div className="flex justify-end space-x-4 pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="text-gray-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-emerald-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-emerald-600"
          >
            Launch Project
          </button>
        </div>
      </form>
    </div>
  );
}

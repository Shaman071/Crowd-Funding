export default function ProgressBar({ value, max }) {
  const percentage = Math.min((value / max) * 100, 100);
  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-emerald-500 h-2 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}

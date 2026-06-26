export default function StatCard({ title, value, color }) {
  const colors = {
    blue: "border-blue-500",
    red: "border-red-500",
    green: "border-green-500",
    purple: "border-purple-500",
  };

  return (
    <div
      className={`bg-slate-900 rounded-2xl p-6 border-l-4 ${
        colors[color] || "border-blue-500"
      } shadow-lg`}
    >
      <p className="text-slate-400 text-sm">{title}</p>

      <h2 className="text-3xl font-bold mt-2">{value}</h2>
    </div>
  );
}
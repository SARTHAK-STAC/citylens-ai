export default function ChartCard({ title }) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 h-80 border border-slate-800 shadow-lg">
      <h2 className="text-xl font-semibold text-white mb-4">
        {title}
      </h2>

      <div className="flex items-center justify-center h-full text-slate-500">
        Chart Coming Soon
      </div>
    </div>
  );
}
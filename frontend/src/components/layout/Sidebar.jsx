import {
  FiHome,
  FiBarChart2,
  FiMap,
  FiCpu,
  FiFileText,
  FiSettings,
} from "react-icons/fi";

const menu = [
  { icon: <FiHome />, title: "Dashboard" },
  { icon: <FiBarChart2 />, title: "Analytics" },
  { icon: <FiCpu />, title: "AI Insights" },
  { icon: <FiMap />, title: "Heatmap" },
  { icon: <FiFileText />, title: "Reports" },
  { icon: <FiSettings />, title: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-900 border-r border-slate-800 p-6">
      <h1 className="text-3xl font-bold text-blue-400">
        CityLens AI
      </h1>

      <p className="text-slate-400 text-sm mt-2">
        Decision Intelligence
      </p>

      <div className="mt-10 space-y-2">
        {menu.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-800 cursor-pointer transition"
          >
            {item.icon}
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
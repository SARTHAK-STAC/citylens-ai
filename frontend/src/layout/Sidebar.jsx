import {
  FiHome,
  FiCpu,
  FiMap,
  FiBarChart2,
  FiFileText,
  FiSettings,
  FiGrid,
  FiDatabase,
  FiRefreshCw,
  FiChevronRight,
} from "react-icons/fi";

const workspace = [
  { name: "Overview", icon: FiHome, active: true },
  { name: "Decision Center", icon: FiGrid },
  { name: "AI Copilot", icon: FiCpu },
];

const platform = [
  { name: "Analytics", icon: FiBarChart2 },
  { name: "Heatmap", icon: FiMap },
  { name: "Reports", icon: FiFileText },
  { name: "Settings", icon: FiSettings },
];

export default function Sidebar() {
  return (
    <aside className="w-[310px] border-r border-[#1D2430] bg-[#0F131A] flex flex-col">

      {/* LOGO */}

      <div className="px-7 pt-8 pb-6">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 shadow-[0_0_40px_rgba(59,130,246,.25)]">

            <span className="text-xl font-bold">C</span>

          </div>

          <div>

            <h1 className="text-[28px] font-bold tracking-tight">
              CityLens
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Decision Intelligence
            </p>

          </div>

        </div>

      </div>

      <div className="mx-7 border-b border-[#202734]" />

      {/* WORKSPACE */}

      <div className="px-5 mt-8">

        <p className="px-3 mb-4 text-[11px] uppercase tracking-[0.35em] text-slate-500">
          Workspace
        </p>

        <div className="space-y-2">

          {workspace.map((item) => {

            const Icon = item.icon;

            return (

              <button
                key={item.name}
                className={`group flex w-full items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300

                ${
                  item.active
                    ? "bg-[#1A2230] text-white shadow-lg"
                    : "text-slate-400 hover:bg-[#171D26] hover:text-white"
                }`}
              >

                <div className="flex items-center gap-4">

                  <Icon size={18} />

                  <span className="font-medium">
                    {item.name}
                  </span>

                </div>

                <FiChevronRight
                  className={`transition ${
                    item.active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />

              </button>

            );

          })}

        </div>

      </div>

      {/* PLATFORM */}

      <div className="px-5 mt-10">

        <p className="px-3 mb-4 text-[11px] uppercase tracking-[0.35em] text-slate-500">
          Platform
        </p>

        <div className="space-y-2">

          {platform.map((item) => {

            const Icon = item.icon;

            return (

              <button
                key={item.name}
                className="group flex w-full items-center justify-between rounded-2xl px-4 py-3 text-slate-400 transition hover:bg-[#171D26] hover:text-white"
              >

                <div className="flex items-center gap-4">

                  <Icon size={18} />

                  <span>
                    {item.name}
                  </span>

                </div>

              </button>

            );

          })}

        </div>

      </div>

      <div className="flex-1" />

      {/* SERVICES */}

      <div className="px-5 pb-6">

        <div className="rounded-3xl border border-[#232B37] bg-[#151A22] p-6">

          <div className="flex items-center gap-3 mb-6">

            <FiDatabase className="text-blue-400" />

            <h3 className="font-semibold">
              Google Cloud
            </h3>

          </div>

          {["Gemini AI", "BigQuery", "Vertex AI"].map((item) => (

            <div
              key={item}
              className="flex items-center justify-between mb-5"
            >

              <span className="text-sm text-slate-300">
                {item}
              </span>

              <div className="flex items-center gap-2">

                <div className="h-2 w-2 rounded-full bg-green-500"/>

                <span className="text-xs text-green-400">
                  Connected
                </span>

              </div>

            </div>

          ))}

          <div className="mt-7 rounded-2xl bg-[#0F131A] p-4">

            <div className="flex items-center gap-3">

              <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"/>

              <div>

                <h4 className="font-medium">
                  System Healthy
                </h4>

                <p className="text-xs text-slate-500">
                  Last sync 2 mins ago
                </p>

              </div>

            </div>

            <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-medium transition hover:bg-blue-500">

              <FiRefreshCw />

              Refresh Data

            </button>

          </div>

        </div>

      </div>

    </aside>
  );
}
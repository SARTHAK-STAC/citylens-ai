import {
  FiBell,
  FiSearch
} from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="h-20 border-b border-[#1E2530] bg-[#0B0F14]">

      <div className="flex h-full items-center justify-between px-10">

        {/* Search */}

        <div className="relative">

          <FiSearch
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            placeholder="Search complaints..."
            className="w-[420px]
            rounded-2xl
            border
            border-[#252D38]
            bg-[#171D26]
            py-4
            pl-12
            pr-4
            outline-none
            transition
            focus:border-blue-500"
          />

        </div>

        <div className="flex items-center gap-4">

          <button
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#252D38] bg-[#171D26]"
          >

            <FiBell />

          </button>

          <div
            className="rounded-2xl border border-[#252D38]
            bg-[#171D26]
            px-5
            py-3"
          >

            <div className="flex items-center gap-3">

              <div className="h-2 w-2 rounded-full bg-green-500"/>

              <span className="text-sm">
                System Healthy
              </span>

            </div>

          </div>

          <div
            className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-semibold"
          >
            S
          </div>

        </div>

      </div>

    </header>
  );
}
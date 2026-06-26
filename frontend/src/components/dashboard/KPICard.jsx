import { FiArrowUpRight } from "react-icons/fi";

export default function KPICard({
  title,
  value,
  change,
  icon: Icon,
}) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-[26px]
      border
      border-[#232B36]
      bg-[#151A22]
      p-6
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-[#3B82F6]/40
      hover:shadow-[0_0_50px_rgba(59,130,246,0.08)]
      "
    >
      {/* glow */}

      <div
        className="
        absolute
        right-[-60px]
        top-[-60px]
        h-40
        w-40
        rounded-full
        bg-blue-500/5
        blur-3xl
        transition-all
        duration-500
        group-hover:bg-blue-500/10
        "
      />

      <div className="relative z-10 flex h-full flex-col justify-between">

        {/* top */}

        <div className="flex items-start justify-between">

          <div>

            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              {title}
            </p>

          </div>

          <div
            className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            border
            border-[#2A3340]
            bg-[#10141B]
            text-slate-400
            transition
            group-hover:border-blue-500/40
            group-hover:text-blue-400
            "
          >
            <Icon size={18} />
          </div>

        </div>

        {/* value */}

        <div className="mt-5">

          <h2 className="text-[40px] font-bold leading-none tracking-tight">
            {value}
          </h2>

        </div>

        {/* bottom */}

        <div className="mt-6 flex items-center justify-between">

          <div
            className="
            inline-flex
            items-center
            gap-1
            rounded-full
            bg-emerald-500/10
            px-3
            py-1
            text-sm
            font-medium
            text-emerald-400
            "
          >
            {change}

            <FiArrowUpRight size={14} />
          </div>

          <span className="text-xs text-slate-500">
            vs last week
          </span>

        </div>

      </div>

    </div>
  );
}
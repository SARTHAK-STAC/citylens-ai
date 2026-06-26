import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", value: 920 },
  { day: "Tue", value: 1100 },
  { day: "Wed", value: 980 },
  { day: "Thu", value: 1450 },
  { day: "Fri", value: 1310 },
  { day: "Sat", value: 1710 },
  { day: "Sun", value: 1590 },
];

export default function TrendChart() {
  return (
    <div className="rounded-3xl border border-[#232B36] bg-[#151A22] p-6">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-semibold">
            Complaint Trend
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Complaints received over the last 7 days
          </p>

        </div>

        <button className="rounded-xl border border-[#2A3441] bg-[#10141B] px-4 py-2 text-sm hover:bg-[#171D26] transition">
          Last 7 Days
        </button>

      </div>

      <div className="h-[320px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="colorValue"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="5%"
                  stopColor="#3B82F6"
                  stopOpacity={0.35}
                />

                <stop
                  offset="95%"
                  stopColor="#3B82F6"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              stroke="#1E2530"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              stroke="#64748B"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#64748B"
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              contentStyle={{
                background: "#151A22",
                border: "1px solid #232B36",
                borderRadius: 16,
                color: "#fff",
              }}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#3B82F6"
              strokeWidth={3}
              fill="url(#colorValue)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#3B82F6",
  "#06B6D4",
  "#8B5CF6",
  "#22C55E",
];

const data = [
  {
    name: "Parking",
    value: 38,
  },
  {
    name: "Noise",
    value: 27,
  },
  {
    name: "Blocked Driveway",
    value: 18,
  },
  {
    name: "Others",
    value: 17,
  },
];

export default function CategoryChart() {
  return (
    <div className="rounded-3xl border border-[#232B36] bg-[#151A22] p-6 h-full">

      <h2 className="text-xl font-semibold">
        Complaint Categories
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Distribution by complaint type
      </p>

      <div className="h-[250px] mt-4">

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={5}
            >

              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}

            </Pie>

          </PieChart>

        </ResponsiveContainer>

      </div>

      <div className="space-y-3">

        {data.map((item, index) => (

          <div
            key={item.name}
            className="flex items-center justify-between"
          >

            <div className="flex items-center gap-3">

              <div
                className="h-3 w-3 rounded-full"
                style={{
                  background: COLORS[index],
                }}
              />

              <span className="text-sm">
                {item.name}
              </span>

            </div>

            <span className="text-slate-400">
              {item.value}%
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}
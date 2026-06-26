import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import StatCard from "../components/dashboard/KPICard";
import AIInsight from "../components/AIInsight";
import ChartCard from "../components/ChartCard";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-6">

          <div className="grid grid-cols-4 gap-5">

            <StatCard
              title="Total Complaints"
              value="364,558"
              color="blue"
            />

            <StatCard
              title="Open Cases"
              value="1,640"
              color="red"
            />

            <StatCard
              title="Closed Cases"
              value="362,114"
              color="green"
            />

            <StatCard
              title="Avg Resolution"
              value="4.2 hrs"
              color="purple"
            />

          </div>

          <div className="grid grid-cols-3 gap-5 mt-6">

            <div className="col-span-2">
              <ChartCard title="Complaint Trend" />
            </div>

            <ChartCard title="Complaint Types" />

          </div>

          <div className="grid grid-cols-2 gap-5 mt-6">

            <ChartCard title="Borough Distribution" />

            <AIInsight />

          </div>

        </main>
      </div>
    </div>
  );
}
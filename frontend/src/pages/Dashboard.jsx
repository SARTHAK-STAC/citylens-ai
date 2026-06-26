import Hero from "../components/dashboard/Hero";
import KPIGrid from "../components/dashboard/KPIGrid";
import TrendChart from "../components/dashboard/TrendChart";
import CategoryChart from "../components/dashboard/CategoryChart";
import AIRecommendation from "../components/dashboard/AIRecommendation";
import RecentComplaints from "../components/dashboard/RecentComplaints";
import HeatmapCard from "../components/dashboard/HeatmapCard";

export default function Dashboard() {
  return (
    <div className="space-y-8">

      {/* Hero */}
      <Hero />

      {/* KPI Cards */}
      <KPIGrid />

      {/* Charts */}
      <section className="grid grid-cols-12 gap-6">

        <div className="col-span-8">
          <TrendChart />
        </div>

        <div className="col-span-4">
          <CategoryChart />
        </div>

      </section>

      {/* Bottom Section */}
      <section className="grid grid-cols-12 gap-6">

        {/* Heatmap */}
        <div className="col-span-5 h-[500px]">
          <HeatmapCard />
        </div>

        {/* AI */}
        <div className="col-span-4 h-[500px]">
          <AIRecommendation />
        </div>

        {/* Recent */}
        <div className="col-span-3 h-[500px]">
          <RecentComplaints />
        </div>

      </section>

    </div>
  );
}
import {
  FiTrendingUp,
  FiAlertCircle,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";

import KPICard from "./KPICard";

export default function KPIGrid() {
  return (
    <section className="grid grid-cols-4 gap-6">

      <KPICard
        title="Total Complaints"
        value="364,558"
        change="+12.5%"
        icon={FiTrendingUp}
      />

      <KPICard
        title="Open Cases"
        value="1,640"
        change="+5.6%"
        icon={FiAlertCircle}
      />

      <KPICard
        title="Closed Cases"
        value="362,114"
        change="+13.1%"
        icon={FiCheckCircle}
      />

      <KPICard
        title="Avg Resolution"
        value="4.2 hrs"
        change="-0.8 hrs"
        icon={FiClock}
      />

    </section>
  );
}
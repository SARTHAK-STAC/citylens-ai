import {
  FiAlertCircle,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

const complaints = [
  {
    title: "Illegal Parking",
    location: "Brooklyn",
    status: "Open",
    time: "2 mins ago",
  },
  {
    title: "Noise Complaint",
    location: "Queens",
    status: "In Progress",
    time: "9 mins ago",
  },
  {
    title: "Blocked Driveway",
    location: "Manhattan",
    status: "Resolved",
    time: "18 mins ago",
  },
  {
    title: "Street Cleaning",
    location: "Bronx",
    status: "Open",
    time: "28 mins ago",
  },
];

function Badge({ status }) {
  if (status === "Resolved") {
    return (
      <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
        Resolved
      </span>
    );
  }

  if (status === "In Progress") {
    return (
      <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400">
        In Progress
      </span>
    );
  }

  return (
    <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
      Open
    </span>
  );
}

export default function RecentComplaints() {
  return (
    <div className="rounded-3xl border border-[#232B36] bg-[#151A22] p-6 h-full">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-semibold">
            Recent Complaints
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Latest activity from the city
          </p>

        </div>

        <FiAlertCircle className="text-blue-400" size={20} />

      </div>

      <div className="mt-6 space-y-4">

        {complaints.map((item, index) => (

          <div
            key={index}
            className="rounded-2xl border border-[#232B36] bg-[#11161D] p-4 transition hover:border-blue-500/40 hover:bg-[#171D26]"
          >

            <div className="flex items-center justify-between">

              <div>

                <h3 className="font-medium">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {item.location}
                </p>

              </div>

              <Badge status={item.status} />

            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">

              <FiClock />

              {item.time}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}
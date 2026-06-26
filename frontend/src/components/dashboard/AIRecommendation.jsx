import {
  FiCpu,
  FiArrowRight,
  FiAlertTriangle,
  FiTrendingUp,
} from "react-icons/fi";

export default function AIRecommendation() {
  return (
    <div className="rounded-3xl border border-[#232B36] bg-[#1A2230] p-7 h-full flex flex-col">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center">

            <FiCpu size={22} />

          </div>

          <div>

            <h2 className="text-xl font-semibold">
              Gemini AI
            </h2>

            <p className="text-sm text-slate-400">
              Live Recommendation
            </p>

          </div>

        </div>

        <div className="rounded-full bg-green-500/10 text-green-400 px-4 py-1 text-sm font-medium">
          94% Confidence
        </div>

      </div>

      {/* Insight */}

      <div className="mt-8">

        <div className="rounded-2xl bg-[#11161D] border border-[#2A3441] p-5">

          <div className="flex items-start gap-3">

            <FiAlertTriangle className="text-yellow-400 mt-1" />

            <div>

              <h3 className="font-semibold">
                High Complaint Spike Detected
              </h3>

              <p className="mt-2 text-slate-400 leading-7">
                Complaint volume in <span className="text-white font-medium">Brooklyn</span> has
                increased by <span className="text-blue-400 font-semibold">18%</span> compared to
                last week.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Recommendation */}

      <div className="mt-6 rounded-2xl bg-[#11161D] border border-[#2A3441] p-5">

        <div className="flex items-center gap-3">

          <FiTrendingUp className="text-green-400" />

          <h3 className="font-semibold">
            Suggested Action
          </h3>

        </div>

        <p className="mt-3 text-slate-400 leading-7">
          Deploy <span className="text-white font-medium">2 sanitation teams</span>
          and increase parking enforcement in the affected area to reduce
          complaint escalation over the next 24 hours.
        </p>

      </div>

      <div className="flex-1" />

      {/* Button */}

      <button
        className="
        mt-8
        flex
        items-center
        justify-center
        gap-2
        rounded-2xl
        bg-blue-600
        py-4
        font-medium
        transition-all
        hover:bg-blue-500
        hover:shadow-lg
        hover:shadow-blue-500/30
        "
      >

        Generate Full Report

        <FiArrowRight />

      </button>

    </div>
  );
}
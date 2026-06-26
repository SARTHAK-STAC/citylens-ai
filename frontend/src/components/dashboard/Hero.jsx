export default function Hero() {
  return (
    <section className="mb-10">

      <div className="flex items-end justify-between">

        <div>

          <p className="text-blue-400 font-semibold tracking-wide uppercase text-sm">
            City Intelligence Platform
          </p>

          <h1 className="mt-3 text-5xl font-bold tracking-tight leading-tight">
            Good Evening,
            <br />
            <span className="text-white">Sarthak 👋</span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-slate-400">
            Monitor city-wide complaints, identify hotspots,
            and receive AI-powered recommendations in real time.
          </p>

        </div>

        <div className="hidden xl:flex gap-4">

          <div className="rounded-2xl border border-[#252D38] bg-[#151A22] px-6 py-5">

            <p className="text-xs uppercase tracking-widest text-slate-500">
              Today
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              1,642
            </h2>

            <p className="text-green-400 mt-2 text-sm">
              +14.2%
            </p>

          </div>

          <div className="rounded-2xl border border-[#252D38] bg-[#151A22] px-6 py-5">

            <p className="text-xs uppercase tracking-widest text-slate-500">
              Critical
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              38
            </h2>

            <p className="text-red-400 mt-2 text-sm">
              Needs Attention
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
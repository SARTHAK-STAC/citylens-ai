export default function Navbar() {
  return (
    <header className="h-20 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-8">
      <h2 className="text-2xl font-bold text-white">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="bg-slate-800 text-white rounded-lg px-4 py-2 outline-none"
        />

        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold">
          S
        </div>
      </div>
    </header>
  );
}
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Dashboard from "../pages/Dashboard";

export default function MainLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#0B0F14] text-slate-100">

      {/* Sidebar */}

      <Sidebar />

      {/* Main */}

      <div className="flex flex-1 flex-col overflow-hidden">

        <Navbar />

        <main className="flex-1 overflow-y-auto">

         <div className="mx-auto w-full max-w-[1480px] px-12 py-12">

            <Dashboard />

          </div>

        </main>

      </div>

    </div>
  );
}
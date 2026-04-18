import { useState } from "react";
import TopNav from "../components/Navbar";
import Icon from "../components/Icon";

// ─── Sidebar Nav ─────────────────────────────────────────────────────────────
const navItems = [
  { icon: "dashboard", label: "Dashboard", active: true },
  { icon: "medical", label: "Doctors" },
  { icon: "hospital", label: "Hospitals" },
  { icon: "event", label: "Appointments" },
  { icon: "group", label: "Patients" },
  { icon: "person", label: "Profile" },
  { icon: "admin", label: "Admin" },
];

function Sidebar() {
  return (
    <aside
      className="fixed left-0 top-0 h-full w-64 z-40 overflow-y-auto hide-scrollbar border-r border-slate-100 flex-col p-4 pt-20 hidden lg:flex"
      style={{ backgroundColor: "#f8faff" }}
    >
      <nav className="flex-1 space-y-1">
        {navItems.map(({ icon, label, active }) => (
          <a
            key={label}
            href="#"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
              active
                ? "bg-white text-blue-700 shadow-sm shadow-blue-500/10"
                : "text-slate-500 hover:bg-white/70 hover:text-slate-800 hover:translate-x-0.5"
            }`}
          >
            <Icon name={icon} className="w-[18px] h-[18px]" />
            <span>{label}</span>
          </a>
        ))}
      </nav>

      <div className="mt-auto space-y-1 pt-4 border-t border-slate-200">
        <button
          className="w-full flex items-center justify-center gap-2 py-3 text-white rounded-xl text-sm font-semibold mb-3 shadow-lg transition-all active:scale-95"
          style={{
            background: "linear-gradient(135deg, #005dac 0%, #1976d2 100%)",
            boxShadow: "0 8px 24px rgba(0,93,172,0.25)",
          }}
        >
          <Icon name="plus" className="w-4 h-4" />
          New Appointment
        </button>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2.5 text-slate-500 hover:bg-white/70 rounded-xl text-sm font-medium transition-all"
        >
          <Icon name="help" className="w-[18px] h-[18px]" />
          <span>Help</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2.5 text-red-500 hover:bg-red-50 rounded-xl text-sm font-medium transition-all"
        >
          <Icon name="logout" className="w-[18px] h-[18px]" />
          <span>Logout</span>
        </a>
      </div>
    </aside>
  );
}

// ─── KPI Card ─────────────────────────────────────────────────────────────────
function KpiCard({
  icon,
  iconColor,
  bgColor,
  label,
  value,
  unit,
  badge,
  badgeColor,
}) {
  return (
    <div
      className="bg-white p-6 rounded-2xl shadow-sm relative overflow-hidden group cursor-default transition-all hover:-translate-y-0.5 hover:shadow-md"
      style={{ boxShadow: "0 2px 16px rgba(0,93,172,0.05)" }}
    >
      <div
        className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full -mr-8 -mt-8 transition-all ${bgColor}`}
      />
      <div className="relative z-10">
        <div
          className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 ${bgColor}`}
        >
          <Icon name={icon} className={`w-5 h-5 ${iconColor}`} />
        </div>
        <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">
          {label}
        </p>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-extrabold tracking-tighter text-slate-800">
            {value}
            {unit && <span className="text-lg font-bold ml-1">{unit}</span>}
          </span>
          {badge && (
            <span className={`text-xs font-bold ${badgeColor}`}>{badge}</span>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Bar Chart ────────────────────────────────────────────────────────────────
const chartData = [
  { month: "Jan", admissions: 60, discharges: 45 },
  { month: "Feb", admissions: 75, discharges: 55 },
  { month: "Mar", admissions: 90, discharges: 70 },
  { month: "Apr", admissions: 85, discharges: 60 },
  { month: "May", admissions: 100, discharges: 80 },
  { month: "Jun", admissions: 80, discharges: 65 },
];

function BarChart() {
  return (
    <div
      className="bg-white p-8 rounded-2xl"
      style={{ boxShadow: "0 2px 16px rgba(0,93,172,0.05)" }}
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2
            className="text-xl font-bold text-slate-800"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Patient Engagement Trend
          </h2>
          <p className="text-sm text-slate-400 mt-0.5">
            Monthly analysis of admission vs discharge
          </p>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-600" />
            <span className="text-xs font-semibold text-slate-400">
              Admissions
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-sky-300" />
            <span className="text-xs font-semibold text-slate-400">
              Discharges
            </span>
          </div>
        </div>
      </div>

      <div className="h-56 flex items-end justify-between gap-3 px-2 relative">
        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="border-b border-slate-50 w-full" />
          ))}
        </div>

        {chartData.map(({ month, admissions, discharges }) => (
          <div
            key={month}
            className="flex-1 flex flex-col items-center justify-end gap-1.5 h-full z-10"
          >
            <div
              className="w-full max-w-[14px] bg-blue-600 rounded-t-md transition-all hover:opacity-80 hover:scale-105"
              style={{ height: `${admissions}%` }}
            />
            <div
              className="w-full max-w-[14px] bg-sky-300 rounded-t-md transition-all hover:opacity-80 hover:scale-105"
              style={{ height: `${discharges}%` }}
            />
            <span className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-wider">
              {month}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Activity Feed ────────────────────────────────────────────────────────────
const activities = [
  {
    name: "Erica Thompson",
    desc: "Check-up: Annual Cardiovascular Screen",
    time: "09:45 AM",
    status: "Completed",
    statusColor: "text-emerald-600 bg-emerald-50",
    icon: "heart",
    iconBg: "bg-blue-50 text-blue-600",
  },
  {
    name: "Marcus Holloway",
    desc: "Prescription: Hypertension Management",
    time: "11:20 AM",
    status: "Pending",
    statusColor: "text-blue-600 bg-blue-50",
    icon: "pill",
    iconBg: "bg-orange-50 text-orange-500",
  },
  {
    name: "Linda Chen",
    desc: "Admission: Emergency Wing B",
    time: "01:15 PM",
    status: "Urgent",
    statusColor: "text-red-600 bg-red-50",
    icon: "emergency",
    iconBg: "bg-red-50 text-red-500",
  },
];

function ActivityFeed() {
  return (
    <div
      className="bg-white p-8 rounded-2xl"
      style={{ boxShadow: "0 2px 16px rgba(0,93,172,0.05)" }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2
          className="text-xl font-bold text-slate-800"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Recent Patient Activity
        </h2>
        <button className="text-blue-600 text-xs font-bold hover:underline">
          View All Records
        </button>
      </div>
      <div className="space-y-3">
        {activities.map(
          ({ name, desc, time, status, statusColor, icon, iconBg }) => (
            <div
              key={name}
              className="flex items-center justify-between p-4 rounded-xl border border-transparent hover:border-slate-100 hover:bg-slate-50 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${iconBg}`}
                >
                  <Icon name={icon} className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">{name}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{desc}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-slate-700">{time}</p>
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase mt-1 ${statusColor}`}
                >
                  {status}
                </span>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

// ─── Schedule Card ────────────────────────────────────────────────────────────
function ScheduleCard() {
  return (
    <div
      className="p-6 rounded-2xl text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #005dac 0%, #1976d2 100%)",
        boxShadow: "0 12px 40px rgba(0,93,172,0.3)",
      }}
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-2xl" />
      <div className="relative z-10">
        <h2
          className="text-base font-bold mb-5 flex items-center gap-2"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          <Icon name="calendar" className="w-5 h-5" />
          Today's Schedule
        </h2>

        <div className="space-y-3">
          <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 border border-white/20">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-bold tracking-widest uppercase opacity-70">
                Next Patient
              </span>
              <span className="px-2 py-0.5 bg-white text-blue-700 text-[10px] font-bold rounded-full">
                IN 15 MIN
              </span>
            </div>
            <p className="font-bold text-base">Sarah Jenkins</p>
            <p className="text-xs opacity-75 mt-1">MRI Review • Lab 4C</p>
          </div>

          <div className="bg-white/8 rounded-xl p-4 border border-white/10">
            <p className="text-xs opacity-60 mb-1">02:30 PM</p>
            <p className="font-bold text-sm">Team Clinical Huddle</p>
            <p className="text-[10px] opacity-70 mt-0.5">Conference Room A</p>
          </div>
        </div>

        <button className="w-full mt-5 py-2.5 bg-white text-blue-700 rounded-xl text-xs font-bold hover:bg-blue-50 transition-colors">
          Manage Calendar
        </button>
      </div>
    </div>
  );
}

// ─── Ward Capacity ────────────────────────────────────────────────────────────
const wards = [
  {
    label: "General Ward",
    pct: 82,
    color: "#005dac",
    textColor: "text-blue-600",
  },
  {
    label: "Intensive Care",
    pct: 94,
    color: "#ba1a1a",
    textColor: "text-red-600",
  },
  {
    label: "Surgery Post-Op",
    pct: 45,
    color: "#006493",
    textColor: "text-teal-600",
  },
];

function WardCapacity() {
  return (
    <div
      className="bg-white p-6 rounded-2xl"
      style={{ boxShadow: "0 2px 16px rgba(0,93,172,0.05)" }}
    >
      <h2
        className="text-lg font-bold text-slate-800 mb-6"
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        Ward Capacity
      </h2>
      <div className="space-y-5">
        {wards.map(({ label, pct, color, textColor }) => (
          <div key={label}>
            <div className="flex justify-between mb-2">
              <span className="text-xs font-semibold text-slate-500">
                {label}
              </span>
              <span className={`text-xs font-bold ${textColor}`}>{pct}%</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${pct}%`, backgroundColor: color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Map Card ─────────────────────────────────────────────────────────────────
function MapCard() {
  return (
    <div
      className="bg-white p-4 rounded-2xl overflow-hidden"
      style={{ boxShadow: "0 2px 16px rgba(0,93,172,0.05)" }}
    >
      <div className="relative h-44 rounded-xl overflow-hidden mb-4">
        <img
          src="https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?auto=format&fit=crop&w=800&q=80"
          alt="Hospital Facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
          <div>
            <p className="text-white text-sm font-bold">
              Main Campus Navigation
            </p>
            <p className="text-white/70 text-[10px] mt-0.5">
              Real-time personnel tracking active
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 px-2">
        <div className="flex -space-x-2">
          {["#3b82f6", "#10b981", "#f59e0b"].map((color, i) => (
            <div
              key={i}
              className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] font-bold"
              style={{ backgroundColor: color }}
            >
              {["JM", "SC", "RK"][i]}
            </div>
          ))}
          <div className="w-7 h-7 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[9px] font-bold text-slate-500">
            +12
          </div>
        </div>
        <span className="text-[11px] font-medium text-slate-400">
          On-duty staff currently in facility
        </span>
      </div>
    </div>
  );
}

// ─── Period Toggle ────────────────────────────────────────────────────────────
function PeriodToggle() {
  const [active, setActive] = useState("Daily");
  return (
    <div className="flex bg-slate-100 p-1 rounded-xl">
      {["Daily", "Weekly", "Monthly"].map((p) => (
        <button
          key={p}
          onClick={() => setActive(p)}
          className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
            active === p
              ? "bg-white text-blue-600 shadow-sm"
              : "text-slate-400 hover:text-slate-600"
          }`}
        >
          {p}
        </button>
      ))}
    </div>
  );
}

// ─── Root Component ───────────────────────────────────────────────────────────
export default function MediConnectDashboard() {
  return (
    <div
      className="text-slate-800 min-h-screen"
      style={{ backgroundColor: "#f5f7fb", fontFamily: "Inter, sans-serif" }}
    >
      <TopNav />
      <Sidebar />

      <main className="lg:ml-64 pt-20 px-6 lg:px-8 pb-16">
        {/* Page Header */}
        <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 mt-8">
          <div>
            <h1
              className="text-3xl font-extrabold text-slate-900 tracking-tight"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Clinical Overview
            </h1>
            <p className="text-slate-400 font-medium mt-1 text-sm">
              Welcome back, Dr. Moore. Here's what's happening today.
            </p>
          </div>
          <PeriodToggle />
        </header>

        {/* KPI Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <KpiCard
            icon="group"
            iconColor="text-blue-600"
            bgColor="bg-blue-50"
            label="Total Patients"
            value="1,284"
            badge="+12%"
            badgeColor="text-emerald-500"
          />
          <KpiCard
            icon="medical"
            iconColor="text-teal-600"
            bgColor="bg-teal-50"
            label="Active Doctors"
            value="42"
            badge="Stable"
            badgeColor="text-slate-400"
          />
          <KpiCard
            icon="event"
            iconColor="text-orange-500"
            bgColor="bg-orange-50"
            label="Appointments"
            value="86"
            badge="-4%"
            badgeColor="text-red-500"
          />
          <KpiCard
            icon="clock"
            iconColor="text-slate-600"
            bgColor="bg-slate-100"
            label="Avg. Wait Time"
            value="14"
            unit="min"
            badge="-2min"
            badgeColor="text-emerald-500"
          />
        </section>

        {/* Main Split */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <BarChart />
            <ActivityFeed />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <ScheduleCard />
            <WardCapacity />
            <MapCard />
          </div>
        </div>
      </main>

      {/* FAB */}
      <button
        className="fixed bottom-8 right-8 w-14 h-14 text-white rounded-full shadow-2xl flex items-center justify-center group active:scale-90 transition-all z-50"
        style={{
          background: "linear-gradient(135deg, #005dac 0%, #1976d2 100%)",
          boxShadow: "0 12px 32px rgba(0,93,172,0.4)",
        }}
      >
        <Icon
          name="plus"
          className="w-6 h-6 group-hover:rotate-90 transition-transform duration-200"
        />
      </button>
    </div>
  );
}

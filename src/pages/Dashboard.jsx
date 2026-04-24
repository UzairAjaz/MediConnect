import { useEffect, useState } from "react";
import AfterLoginNav from "../components/layouts/AfterLoginNav";
import Icon from "../components/layouts/Icon";
import Sidebar from "../components/layouts/SideBar";

// API BASE
const API = "http://localhost:5000/api";

// KPI Card
function KpiCard({ icon, iconColor, bgColor, label, value, unit }) {
  return (
    <div
      className="bg-white p-6 rounded-2xl shadow-sm relative overflow-hidden"
      style={{ boxShadow: "0 2px 16px rgba(0,93,172,0.05)" }}
    >
      <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full -mr-8 -mt-8 ${bgColor}`} />

      <div className="relative z-10">
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 ${bgColor}`}>
          <Icon name={icon} className={`w-5 h-5 ${iconColor}`} />
        </div>

        <p className="text-xs font-bold text-slate-400 mb-1 uppercase">{label}</p>

        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-extrabold text-slate-800">
            {value ?? "--"}
            {unit && <span className="text-lg ml-1">{unit}</span>}
          </span>
        </div>
      </div>
    </div>
  );
}

// Activity Feed
function ActivityFeed({ activities }) {
  return (
    <div
      className="bg-white p-8 rounded-2xl"
      style={{ boxShadow: "0 2px 16px rgba(0,93,172,0.05)" }}
    >
      <h2 className="text-xl font-bold mb-6">Recent Activity</h2>

      <div className="space-y-3">
        {activities.length === 0 ? (
          <p className="text-sm text-slate-400">No activity found</p>
        ) : (
          activities.map((a) => (
            <div
              key={a._id}
              className="flex justify-between p-4 hover:bg-slate-50 rounded-xl"
            >
              <div>
                <p className="font-bold">{a.name}</p>
                <p className="text-xs text-slate-400">{a.desc}</p>
              </div>

              <div className="text-right text-xs">
                <p>{a.time}</p>
                <span className="text-blue-600 font-bold">{a.status}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// Skeleton Loader
function SkeletonCard() {
  return (
    <div className="bg-white p-6 rounded-2xl animate-pulse">
      <div className="h-6 w-24 bg-slate-200 rounded mb-3"></div>
      <div className="h-8 w-16 bg-slate-300 rounded"></div>
    </div>
  );
}

// ROOT
export default function MediConnectDashboard() {
  const [stats, setStats] = useState(null);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await fetch(`${API}/dashboard`);

        if (!res.ok) throw new Error("API error");

        const data = await res.json();

        setStats(data.stats || {});
        setActivities(data.activities || []);
      } catch (err) {
        console.log("Dashboard error:", err);
        setError(true);

        // fallback dummy data (important for demo)
        setStats({
          patients: 1284,
          doctors: 42,
          appointments: 86,
          waitTime: 14,
        });

        setActivities([
          {
            _id: 1,
            name: "Ali Khan",
            desc: "Appointment booked",
            time: "10:30 AM",
            status: "Completed",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-800">
      <AfterLoginNav />
      <Sidebar />

      <main className="lg:ml-64 pt-20 px-6 lg:px-8 pb-16">
        <h1 className="text-3xl font-extrabold mb-8">Dashboard</h1>

        {/* ERROR MESSAGE */}
        {error && (
          <p className="text-red-500 mb-4 text-sm">
            Failed to load live data — showing demo data
          </p>
        )}

        {/* LOADING */}
        {loading ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </section>
        ) : (
          <>
            {/* KPI GRID */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              <KpiCard
                icon="group"
                iconColor="text-blue-600"
                bgColor="bg-blue-50"
                label="Total Patients"
                value={stats?.patients}
              />

              <KpiCard
                icon="medical"
                iconColor="text-teal-600"
                bgColor="bg-teal-50"
                label="Doctors"
                value={stats?.doctors}
              />

              <KpiCard
                icon="event"
                iconColor="text-orange-500"
                bgColor="bg-orange-50"
                label="Appointments"
                value={stats?.appointments}
              />

              <KpiCard
                icon="clock"
                iconColor="text-slate-600"
                bgColor="bg-slate-100"
                label="Avg Wait"
                value={stats?.waitTime}
                unit="min"
              />
            </section>

            {/* ACTIVITY */}
            <ActivityFeed activities={activities} />
          </>
        )}
      </main>
    </div>
  );
}
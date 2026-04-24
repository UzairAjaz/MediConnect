import Icon from "./Icon";
import { Link, useLocation } from "react-router-dom";

function AfterLoginNav() {
  const location = useLocation(); // current route

  const navItems = [
    { name: "Home", path: "/mediconnect" },
    { name: "Doctors", path: "/doctors" },
    { name: "Hospitals", path: "/hospitals" },
    { name: "Contact Us", path: "/contactus" },
  ];

  return (
    <header
      className="fixed top-0 w-full z-50 h-16 border-b border-slate-100"
      style={{
        backgroundColor: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="flex justify-between items-center w-full px-6 lg:px-18 h-full">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-2">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center shadow-md"
            style={{
              background: "linear-gradient(135deg, #005dac 0%, #1976d2 100%)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>

          <Link
            to={"/mediconnect"}
            className="text-2xl font-extrabold bg-clip-text text-transparent"
            style={{
              fontFamily: "Manrope, sans-serif",
              backgroundImage: "linear-gradient(135deg, #005dac, #1976d2)",
            }}
          >
            MediConnect
          </Link>
        </div>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path; // 🔥 dynamic check

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-semibold tracking-tight transition-all pb-1 ${
                  isActive
                    ? "text-blue-700 border-b-2 border-blue-600"
                    : "text-slate-500 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-300"
                }`}
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4 ml-4 border-l pl-4 ml-24 border-slate-100">
          <Link to={"/profile"}>
            <button className="text-slate-700 hover:text-blue-600 transition-all active:scale-95">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zM4 20c0-3.314 3.582-6 8-6s8 2.686 8 6"
                />
              </svg>
            </button>
          </Link>

          <Link to={"/MediConnect"}>
            <button className="text-white hover:text-slate-900 transition-all p-2 rounded-xl active:scale-95 bg-red-500">
              Logout
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default AfterLoginNav;
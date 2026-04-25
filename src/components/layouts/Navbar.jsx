import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function TopNav() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Doctors", path: "/doctors" },
    { name: "Hospitals", path: "/hospitals" },
    { name: "Contact Us", path: "/contactus" },
  ];

  const isActive = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <header className="fixed top-0 w-full z-50 h-16 border-b border-slate-100 bg-white/90 backdrop-blur">
      
      <div className="flex justify-between items-center w-full px-6 sm:px-18 lg:px-18 h-full">

        {/* LEFT LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-md bg-gradient-to-br from-blue-500 to-blue-600">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
              <path stroke="currentColor" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>

          <span className="text-xl sm:text-2xl font-extrabold bg-clip-text text-transparent gradient-text">
            MediConnect
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-semibold pb-1 ${
                isActive(item.path)
                  ? "text-blue-700 border-b-2 border-blue-600"
                  : "text-slate-500 hover:text-blue-600 border-b-2 border-transparent"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE (DESKTOP) */}
        <div className="hidden md:flex items-center gap-4 border-l pl-4 border-slate-100">
          <Link to="/auth" className="text-slate-700 hover:text-blue-600">
            Login
          </Link>

          <Link
            to="/auth"
            className="flex items-center gap-2 bg-amber-500 text-white px-3 py-2 rounded-xl hover:opacity-90"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path stroke="currentColor" strokeWidth={2} d="M12 12a5 5 0 100-10 5 5 0 000 10zM4 22a8 8 0 0116 0" />
            </svg>
            <span className="hidden lg:inline">Join as Doctor</span>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-700"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-3 shadow-sm">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block text-sm font-medium ${
                isActive(item.path)
                  ? "text-blue-600"
                  : "text-slate-600"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <Link
              to="/auth"
              className="block text-slate-700"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>

            <Link
              to="/auth"
              className="block bg-amber-500 text-white px-3 py-2 rounded-lg text-center"
              onClick={() => setOpen(false)}
            >
              Join as Doctor
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default TopNav;
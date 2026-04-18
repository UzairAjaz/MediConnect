import Icon from "./Icon";
function TopNav() {
  return (
    <header className="fixed top-0 w-full z-50 h-16 border-b border-slate-100" style={{ backgroundColor: "rgba(255,255,255,0.85)", backdropFilter: "blur(20px)" }}>
      <div className="flex justify-between items-center w-full px-6 lg:px-8 h-full">
        <div className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center shadow-md"
              style={{ background: "linear-gradient(135deg, #005dac 0%, #1976d2 100%)" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          <span
            className="text-2xl font-extrabold bg-clip-text text-transparent"
            style={{ fontFamily: "Manrope, sans-serif", backgroundImage: "linear-gradient(135deg, #005dac, #1976d2)" }}
          >
            MediConnect
          </span>
          <div className="hidden md:flex items-center relative">
            <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              placeholder="Search patients or records..."
              type="text"
            />
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {["Dashboard", "Patients", "Reports"].map((item, i) => (
            <a
              key={item}
              href="#"
              className={`text-sm font-semibold tracking-tight transition-colors ${
                i === 0 ? "text-blue-700 border-b-2 border-blue-600 py-1" : "text-slate-500 hover:text-blue-600"
              }`}
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              {item}
            </a>
          ))}

          <div className="flex items-center gap-4 ml-4 border-l pl-4 border-slate-100">
            <button className="relative text-slate-400 hover:text-blue-600 transition-all active:scale-95">
              <Icon name="bell" className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>
            <button className="text-slate-400 hover:text-blue-600 transition-all active:scale-95">
              <Icon name="settings" className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 ml-1">
              <div className="text-right">
                <p className="text-xs font-bold text-slate-800">Dr. Julianne Moore</p>
                <p className="text-[10px] text-slate-400">Senior Cardiologist</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center text-white font-bold text-sm shadow-md">
                JM
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default TopNav;
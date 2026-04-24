import { ICONS } from "../layouts/ui/icons/HospitalIcons";

function Icon({ name, className = "w-5 h-5" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={ICONS[name]} />
    </svg>
  );
}

export default function SearchBar() {
  return (
    <section className="max-w-7xl mx-auto mb-12">
      <div
        className="relative p-1 bg-white rounded-2xl flex items-center gap-2 border border-slate-100"
        style={{ boxShadow: "0 12px 32px rgba(0,93,172,0.06)" }}
      >
        {/* Location input */}
        <div className="flex-1 flex items-center gap-3 px-4">
          <Icon name="location" className="w-5 h-5 text-[#005dac] shrink-0" />
          <input
            type="text"
            placeholder="Enter city, region, or zip code..."
            className="w-full py-4 bg-transparent border-none focus:ring-0 text-[#1a1c1c] placeholder:text-slate-400 font-medium outline-none text-sm"
          />
        </div>
        {/* Divider */}
        <div className="h-10 w-px bg-slate-100 hidden sm:block" />
        {/* Specialty input */}
        <div className="flex-1 hidden sm:flex items-center gap-3 px-4">
          <Icon name="specialty" className="w-5 h-5 text-[#005dac] shrink-0" />
          <input
            type="text"
            placeholder="Search by specialty (e.g. Cardiology)..."
            className="w-full py-4 bg-transparent border-none focus:ring-0 text-[#1a1c1c] placeholder:text-slate-400 font-medium outline-none text-sm"
          />
        </div>
        {/* CTA */}
        <button
          className="px-8 py-4 rounded-xl text-white font-bold text-sm tracking-tight transition-all active:scale-95 shadow-md shadow-blue-500/10 shrink-0"
          style={{ background: "var(--primary-gradient)" }}
        >
          Find Hospitals
        </button>
      </div>
    </section>
  );
}

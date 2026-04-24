import { ICONS } from "./ui/icons/DoctorsIcons";
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
export default function MobileNav() {
  const tabs = [
    { icon: "dashboard", label: "Home" },
    { icon: "medical", label: "Doctors" },
    { icon: "hospital", label: "Hospital" },
    { icon: "person", label: "Profile" },
  ];
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 w-full z-50 h-16 flex justify-around items-center px-4 border-t border-slate-100"
      style={{
        backgroundColor: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(20px)",
      }}
    >
      {tabs.map(({ icon, label }) => (
        <button
          key={label}
          className={`flex flex-col items-center gap-1 ${label === "Doctors" ? "text-blue-600" : "text-slate-400 hover:text-slate-600"}`}
        >
          <Icon name={icon} className="w-5 h-5" />
          <span
            className={`text-[10px] ${label === "Doctors" ? "font-bold" : "font-medium"}`}
          >
            {label}
          </span>
        </button>
      ))}
    </nav>
  );
}
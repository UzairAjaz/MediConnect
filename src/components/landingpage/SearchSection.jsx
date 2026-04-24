import PrimaryBtn from "./PrimaryBtn";
import { ICONS } from "../layouts/ui/icons/LandingPage";
function Icon({ name, className = "w-5 h-5", filled = false }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={ICONS[name]} />
    </svg>
  );
}

function SearchField({
  icon,
  label,
  placeholder = "",
  type = "text",
  isSelect = false,
}) {
  return (
    <div className="p-3 rounded-xl bg-[#f3f3f3] transition-colors focus-within:bg-white focus-within:ring-2 focus-within:ring-[#005dac]/10">
      <label className="block text-[10px] font-bold text-[#005dac] uppercase tracking-tighter mb-1">
        {label}
      </label>
      <div className="flex items-center gap-2">
        <Icon
          name={icon}
          className="w-[18px] h-[18px] text-[#414752] shrink-0"
        />
        {isSelect ? (
          <select className="bg-transparent border-none focus:ring-0 w-full p-0 text-sm font-medium text-[#1a1c1c] outline-none">
            <option>Cardiology</option>
            <option>Dermatology</option>
            <option>Pediatrics</option>
          </select>
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            className="bg-transparent border-none focus:ring-0 w-full p-0 text-sm font-medium text-[#1a1c1c] placeholder:text-[#717783] outline-none"
          />
        )}
      </div>
    </div>
  );
}
export default function SearchSection() {
  return (
    <section className="px-8 -mt-12 relative z-20">
      <div
        className="max-w-[60rem] mx-auto bg-white p-4 lg:p-6 rounded-4xl border border-[#c1c6d4]/10"
        style={{ boxShadow: "0 20px 50px rgba(0,93,172,0.12)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Doctor name */}
          <SearchField
            icon="person"
            label="Doctor Name"
            placeholder="Dr. Smith..."
            type="text"
          />
          {/* Specialty */}
          <SearchField icon="stethoscope" label="Specialty" isSelect />
          {/* Condition */}
          <SearchField
            icon="healing"
            label="Condition"
            placeholder="Fever, Acne..."
            type="text"
          />
          {/* Location */}
          <SearchField
            icon="location"
            label="Location"
            placeholder="City or Zip..."
            type="text"
          />
          {/* Search CTA */}
          <PrimaryBtn className="rounded-xl py-4 text-sm">
            <Icon name="search" className="w-5 h-5" />
            Search Now
          </PrimaryBtn>
        </div>
      </div>
    </section>
  );
}

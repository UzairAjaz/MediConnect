import { useState } from "react";
import AfterLoginNav from "../components/layouts/AfterLoginNav";
import Footer from "../components/layouts/Footer";
import SearchBar from "../components/hospitalpage/SearchBar";
import HospitalCard from "../components/hospitalpage/HospitalCard";
import { HOSPITALS } from "../data/hospitals";
import { ICONS } from "../components/layouts/ui/icons/HospitalIcons";
// ─── Constants ────────────────────────────────────────────────────────────────
const GRADIENT = {
  background: "linear-gradient(135deg, #005dac 0%, #1976d2 100%)",
};
const C = {
  surface: "#f9f9f9",
  surfaceLow: "#f3f3f3",
  surfaceHigh: "#e8e8e8",
  white: "#ffffff",
  border: "rgba(193,198,212,0.15)",
  text: "#1a1c1c",
  muted: "#414752",
  primary: "#005dac",
};

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

const MAP_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA1QWYicjsGDugf1axcs43jqffVLYek3lL4NwfHFWfE7UpqyNnWRuITfOwDjtRLXY-URixF0Hd6HKpmwOdw-OsnrB66LzxMd8voFoiZ0Ph7aB2EnIE7-OmxSoRPDOiQ0kKfyn6aI2xbovX6nf8umyENtltINTBlwQN0kAkGEJ8lxIJIudPWcT1MxTl9gKHCpySAJqk1EHGwmOMBXul7vMnvOef7kXRaZcw8VpVgDD4qYrNJP9AdFiXP1osPWEG3_EM8aZxxwn900Yup";
const USER_AVATAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCr45wtQdjSZJLTgbFYsMGX8tNbxx8Gf3LhAFMm4NivAFiv48iAwMk_WDar_0T_EFkacob1_yvCCRjXwUxa5HlIh-dbfU1adOA6OwCYtvyc6jali5k4aMBgfCK_w1ZDKWvpd7aQaGrbqJ33YgIhCgtVrGk6mO07eQ42g_FJkG885Ew8ZGQ-3swEgsEDSngvI0l3wr-ej49XrJ624Xbt5OC-eQw8_7qnly5QUpEnf1R_121N9e50M88_Jm_b5YIibRaUXcTvxVI1fy8H";


// Page Assembly 
export default function HospitalsPage() {
  const [filteredHospitals, setFilteredHospitals] = useState(HOSPITALS);
  return (
    <div
      className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c]"
    >
      <AfterLoginNav />

      <main className="pt-24 pb-12 px-10 sm:px-18">
        {/* ── Page header ── */}
        <div className="max-w-7xl mx-auto mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1
                className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2"
                style={{ fontFamily: "Manrope,sans-serif" }}
              >
                Hospital Search
              </h1>
              <p className="text-[#414752] max-w-xl">
                Find and book appointments at top-rated clinical sanctuaries in
                your preferred location.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-[#414752]">
                Showing {filteredHospitals.length} results
              </span>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#e8e8e8] rounded-xl text-sm font-medium text-[#1a1c1c] hover:bg-[#e2e2e2] transition-colors">
                <Icon name="filter" className="w-4 h-4" />
                Filters
              </button>
            </div>
          </div>
        </div>

        {/* ── Search bar ── */}
        <SearchBar />
        {/* ── Hospital bento grid ── */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHospitals.map((h) => (
            <HospitalCard key={h.id} hospital={h} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

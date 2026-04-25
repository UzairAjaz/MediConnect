import AfterLoginNav from "../components/layouts/AfterLoginNav.jsx";
import SearchBar from "../components/doctorspage/SearchBar";
import Footer from "../components/layouts/Footer";
import { ICONS } from "../components/layouts/ui/icons/DoctorsIcons.js";
import DoctorCard from "../components/doctorspage/DoctorCard.jsx";
import { DOCTORS } from "../data/doctors.js";
import { useNavigate } from "react-router-dom";

const USER_AVATAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB-Q_OlaBplztXev8eLSMevWk1kz08K1YYgVbgdLZT1Idprfn3kAqf8yx4IoQqpSKiAqX6BHWLdFS0-HrrW7o-8D8mbsiIvVLztC-N9eRdwHtDOXyNcN2Z5w32SboweVuxoSBKSRT9HSSsMQor_h34HCVXJDZcJNsveFm0kfZboG3DmR9369z0jVUS1ydQHJznba5m1awEylZ9-Dj0Zl7buno-HppLGk4Xzdl_-Dg9pDsrstI0EfDKSq86chrff_0KOTRyzuskQrj5p";

const GRADIENT = {
  background: "linear-gradient(135deg, #005dac 0%, #1976d2 100%)",
};

// Page Assembly
export default function DoctorsPage() {
  const navigate = useNavigate();
  const handleDoctorClick = (doc) => {
    navigate("/appointment", {
      state: { doctor: doc },
    });
  };
  return (
    <div className="bg-[#f9f9f9] min-h-screen text-[#1a1c1c]">
      <AfterLoginNav />

      <main className="sm:px-18 pt-20 min-h-screen px-10 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero + Search */}
          <section className="py-12 flex flex-col gap-8">
            <div>
              <h1
                className="text-4xl md:text-5xl font-extrabold text-[#1a1c1c] tracking-tight"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Search Specialists
              </h1>
              <p className="text-[#414752] text-lg max-w-2xl mt-2 leading-relaxed">
                Connect with the world's leading medical professionals in a
                focused, clinical sanctuary built for your well-being.
              </p>
            </div>
            <SearchBar />
          </section>

          {/* Doctor grid: 5 cards + promo card */}
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {DOCTORS.map((doc) => (
              <div
                key={doc.id}
                onClick={() => handleDoctorClick(doc)}
                className="cursor-pointer"
              >
                <DoctorCard {...doc} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AfterLoginNav from "../components/layouts/AfterLoginNav";
import Footer from "../components/layouts/Footer";
import { DOCTORS } from "../data/doctors";
// Constants 
const GRADIENT = { background: "linear-gradient(135deg, #005dac 0%, #1976d2 100%)" };

// SVG Icon Map
const PATHS = {
  person:     "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  stethoscope:"M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18",
  calendar:   "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  check:      "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  info:       "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  upload:     "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
  chevRight:  "M9 5l7 7-7 7",
  star:       "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
  arrow:      "M17 8l4 4m0 0l-4 4m4-4H3",
  bell:       "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  settings:   "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z",
  plus:       "M12 4v16m8-8H4",
  medical:    "M9 12h6m-3-3v6M5 20a7 7 0 1114 0H5z",
  hospital:   "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  event:      "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  group:      "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  logout:     "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
  help:       "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  progress:   "M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83",
};

function Icon({ name, className = "w-5 h-5", filled = false }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className}
      fill={filled ? "currentColor" : "none"} viewBox="0 0 24 24"
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d={PATHS[name]} />
    </svg>
  );
}

const TIME_SLOTS = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

const TAGS = ["Echocardiography", "Heart Failure", "Hyperlipidemia"];

const NAV_ITEMS = [
  { icon: "medical",   label: "Doctors"      },
  { icon: "hospital",  label: "Hospitals"    },
  { icon: "event",     label: "Appointments", active: true },
  { icon: "group",     label: "Patients"     },
  { icon: "person",    label: "Profile"      },
];

/** Tiny uppercase field label */
function FieldLabel({ children }) {
  return (
    <label className="block text-[11px] font-bold text-[#414752] uppercase tracking-[0.08em] mb-1.5 ml-0.5">
      {children}
    </label>
  );
}

/** Uniform input / select / textarea base classes */
const inputCls = `
  w-full px-4 py-3 bg-[#f3f3f3] border-none rounded-xl text-[13px]
  text-[#1a1c1c] outline-none transition-all
  focus:bg-white focus:ring-2 focus:ring-[#005dac]/15
  placeholder:text-[#717783]
`;

// DoctorCard 
function DoctorCard({ doctor }) {

  return (
    <aside className="flex flex-col gap-6">
      {/* Main card */}
      <div
        className="bg-white rounded-2xl p-8 relative"
        style={{ boxShadow: "0 12px 32px rgba(0,93,172,0.06)" }}
      >
        {/* Star rating badge */}
        <div className="absolute top-4 right-4 bg-[#ffdbc7] text-[#311300] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <Icon name="star" className="w-3 h-3 text-amber-600" filled />
          {doctor.rating}
        </div>

        {/* Avatar + info */}
        <div className="flex flex-col items-center text-center">
          {/* Avatar bubble */}
          <div
            className="w-32 h-32 rounded-full border-4 border-[#eeeeee] flex items-center justify-center mb-6"
            style={{ background: "linear-gradient(135deg, #d4e3ff, #a5c8ff)" }}
          >
            <Icon name="person" className="w-14 h-14 text-[#005dac]" />
          </div>

          <h2 className="text-[22px] font-bold text-[#1a1c1c] mb-1">
            {doctor.name}, M.D.
          </h2>
          <span className="text-[#005dac] font-semibold text-xs tracking-[0.1em] uppercase mb-5">
            {doctor.specialty} Specialist
          </span>

          <div className="w-full h-px bg-[#f3f3f3] mb-5" />

          <p className="text-[#414752] text-[13px] leading-relaxed mb-5">
            Dr. {doctor.name.split(" ")[1]} has over 15 years of experience in clinical{" "}
            {doctor.specialty.toLowerCase()} and interventional medicine. She specializes in
            preventative care and advanced diagnostic procedures for complex conditions.
          </p>

          {/* Specialty tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-5">
            {TAGS.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-[#eeeeee] text-[#414752] text-[11px] rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="w-full space-y-3">
            <div className="flex justify-between text-[13px]">
              <span className="text-[#414752]">Consultation Fee</span>
              <span className="font-bold text-[#1a1c1c]">{doctor.fee}</span>
            </div>
            <div className="flex justify-between text-[13px]">
              <span className="text-[#414752]">Available Today</span>
              <span className="font-medium text-[#005dac]">3 Slots Left</span>
            </div>
          </div>
        </div>
      </div>

      {/* Clinic guidelines banner */}
      <div className="bg-[#005dac]/6 p-6 rounded-2xl flex gap-4 items-start">
        <div className="p-2 rounded-xl flex-shrink-0" style={GRADIENT}>
          <Icon name="info" className="w-5 h-5 text-white" />
        </div>
        <div>
          <h4 className="font-bold text-[13px] text-[#1a1c1c] mb-1">Clinic Guidelines</h4>
          <p className="text-[12px] text-[#414752] leading-[1.7]">
            Please arrive 15 minutes prior to your scheduled time. Bring all current medications
            and previous medical records for review.
          </p>
        </div>
      </div>
    </aside>
  );
}

// ─── Success Screen ───────────────────────────────────────────────────────────
function SuccessScreen({ doctor, date, slot, email, onReset }) {
  return (
    <div
      className="bg-white rounded-2xl p-16 flex flex-col items-center justify-center text-center gap-6"
      style={{ boxShadow: "0 12px 32px rgba(0,93,172,0.06)" }}
    >
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center text-white"
        style={{ ...GRADIENT, boxShadow: "0 12px 32px rgba(0,93,172,0.3)" }}
      >
        <Icon name="check" className="w-10 h-10" />
      </div>

      <h2 className="text-3xl font-extrabold text-[#1a1c1c]">
        Appointment Confirmed!
      </h2>
      <p className="text-[#414752] text-[15px] leading-[1.7] max-w-md">
        Your appointment with <strong>{doctor}</strong> has been booked for{" "}
        <strong>{date || "your selected date"}</strong> at <strong>{slot}</strong>.
        A confirmation email will be sent to <strong>{email || "your email"}</strong>.
      </p>

      <button
        onClick={onReset}
        className="mt-2 px-9 py-4 text-white font-bold rounded-xl text-sm transition-all hover:opacity-90 active:scale-95"
        style={{ ...GRADIENT, boxShadow: "0 8px 24px rgba(0,93,172,0.25)" }}
      >
        Book Another Appointment
      </button>
    </div>
  );
}

// ─── AppointmentForm ──────────────────────────────────────────────────────────
function AppointmentForm({ doctor }) {
  const INIT = {
    name: "", email: "", phone: "",
    gender: "Male", age: "",
    doctor: doctor.name,
    date: "", symptoms: "",
    consent: false,
  };

  const [form, setForm]         = useState(INIT);
  const [selectedSlot, setSlot] = useState("09:00 AM");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);


  useEffect(() => {
    // auto-sync doctor (important fix)
    setForm((f) => ({
      ...f,
      doctor: doctor.name,
    }));
  }, [doctor]);

  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }));
  const specialty = DOCTORS.find((d) => d.name === form.doctor)?.specialty || "Cardiology";

  const submit = (e) => {
    e.preventDefault();
    if (!form.consent) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };


  if (submitted) {
    return (
      <SuccessScreen
        doctor={form.doctor} date={form.date} slot={selectedSlot} email={form.email}
        onReset={() => { setSubmitted(false); setForm(INIT); }}
      />
    );
  }

  /** Reusable section divider with icon + title */
  const SectionHead = ({ icon, title, subtitle }) => (
    <div className="col-span-2 pt-2">
      <h3 className="text-[17px] font-bold text-[#1a1c1c] flex items-center gap-2 mb-1">
        <Icon name={icon} className="w-5 h-5 text-[#005dac]" />
        {title}
      </h3>
      <p className="text-[11px] text-[#414752] uppercase tracking-[0.1em]">{subtitle}</p>
    </div>
  );

  return (
    <div
      className="bg-white rounded-2xl p-10 md:p-12"
      style={{ boxShadow: "0 12px 32px rgba(0,93,172,0.06)" }}
    >
      <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">

        {/* ── Patient Information ── */}
        <SectionHead icon="person" title="Patient Information" subtitle="Demographics & Contact Details" />

        {/* Full name */}
        <div>
          <FieldLabel>Patient Full Name</FieldLabel>
          <div className="relative">
            <input type="text" placeholder="John Doe" required
              className={inputCls} value={form.name}
              onChange={(e) => set("name", e.target.value)} />
            {form.name && (
              <Icon name="check" className="w-4 h-4 absolute right-3 top-3.5 text-emerald-500" />
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <FieldLabel>Email Address</FieldLabel>
          <input type="email" placeholder="john.doe@example.com" required
            className={inputCls} value={form.email}
            onChange={(e) => set("email", e.target.value)} />
        </div>

        {/* Phone */}
        <div>
          <FieldLabel>Phone Number</FieldLabel>
          <input type="tel" placeholder="+1 (555) 000-0000"
            className={inputCls} value={form.phone}
            onChange={(e) => set("phone", e.target.value)} />
        </div>

        {/* Gender + Age — side by side */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <FieldLabel>Gender</FieldLabel>
            <select className={inputCls} value={form.gender}
              onChange={(e) => set("gender", e.target.value)}>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <FieldLabel>Age</FieldLabel>
            <input type="number" placeholder="45" min={1} max={120}
              className={inputCls} value={form.age}
              onChange={(e) => set("age", e.target.value)} />
          </div>
        </div>

        {/* ── Appointment Details ── */}
        <SectionHead icon="stethoscope" title="Appointment Details" subtitle="Doctor Selection & Symptoms" />

        {/* Doctor selector */}
        <div>
          <FieldLabel>Select Doctor</FieldLabel>
          <select className={inputCls} value={form.doctor}
            onChange={(e) => set("doctor", e.target.value)}>
            {DOCTORS.map((d) => <option key={d.name}>{d.name}</option>)}
          </select>
        </div>

        {/* Specialization — read-only */}
        <div>
          <FieldLabel>Specialization</FieldLabel>
          <input readOnly value={specialty}
            className={`${inputCls} text-[#717783] cursor-not-allowed`} />
        </div>

        {/* Preferred date */}
        <div>
          <FieldLabel>Preferred Date</FieldLabel>
          <input type="date" required
            className={inputCls} value={form.date}
            onChange={(e) => set("date", e.target.value)} />
        </div>

        {/* Time slot picker */}
        <div>
          <FieldLabel>Preferred Time Slot</FieldLabel>
          <div className="flex flex-wrap gap-2 mt-1">
            {TIME_SLOTS.map((slot) => (
              <button key={slot} type="button"
                onClick={() => setSlot(slot)}
                className={`px-4 py-2 rounded-lg text-[11px] font-semibold border-none cursor-pointer transition-all
                  ${selectedSlot === slot
                    ? "text-white shadow-md shadow-blue-500/20"
                    : "bg-[#eeeeee] text-[#414752] hover:bg-[#e2e2e2]"}`}
                style={selectedSlot === slot ? GRADIENT : {}}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Symptoms — full width */}
        <div className="col-span-2">
          <FieldLabel>Describe Your Symptoms</FieldLabel>
          <textarea rows={4} placeholder="Briefly describe what you are experiencing..."
            className={`${inputCls} resize-none min-h-[100px]`}
            value={form.symptoms}
            onChange={(e) => set("symptoms", e.target.value)} />
        </div>

        {/* File upload — full width */}
        <div className="col-span-2">
          <FieldLabel>Medical Report Upload (Optional)</FieldLabel>
          <label className="flex flex-col items-center justify-center w-full
                            border-2 border-dashed border-[#c1c6d4]/50 rounded-2xl
                            p-8 cursor-pointer text-center hover:border-[#005dac]/30
                            hover:bg-[#f9f9f9] transition-all group">
            <input type="file" accept=".pdf,.jpg,.png" className="hidden" />
            <Icon name="upload" className="w-10 h-10 text-[#c1c6d4] mb-3 group-hover:text-[#005dac] transition-colors" />
            <p className="text-[13px] text-[#414752]">
              Drag and drop files or{" "}
              <span className="text-[#005dac] font-bold">browse</span>
            </p>
            <p className="text-[10px] text-[#717783] uppercase tracking-[0.05em] mt-1">
              PDF, JPG, PNG (Max 10MB)
            </p>
          </label>
        </div>

        {/* Actions — full width */}
        <div className="col-span-2 pt-6 flex flex-col gap-5">
          {/* Consent checkbox */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" required
              checked={form.consent}
              onChange={(e) => set("consent", e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded accent-[#005dac] shrink-0" />
            <span className="text-[12px] text-[#414752] leading-[1.7]">
              I consent to the processing of my health data for medical consultation purposes
              and agree to the{" "}
              <a href="#" className="text-[#005dac] font-semibold hover:underline">Terms of Service</a>
              {" "}and{" "}
              <a href="#" className="text-[#005dac] font-semibold hover:underline">Privacy Policy</a>.
            </span>
          </label>

          {/* Submit button */}
          <button type="submit" disabled={loading}
            className="w-full py-4 rounded-xl text-white font-bold text-[15px]
                       flex items-center justify-center gap-2 transition-all
                       hover:opacity-90 active:scale-[0.98] disabled:opacity-80"
            style={{ ...GRADIENT, boxShadow: "0 8px 24px rgba(0,93,172,0.2)" }}
          >
            {loading ? (
              <>
                <svg className="w-5 h-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Booking...
              </>
            ) : (
              <>
                Confirm Appointment
                <Icon name="calendar" className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

// ─── Page Assembly ─────────────────────────────────────────────────────────────
export default function BookAppointment() {
    const location = useLocation();
     const passedDoctor = location.state?.doctor || DOCTORS[0];
  const [selectedDoctor, setSelectedDoctor] = useState(passedDoctor);

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c]">
      <AfterLoginNav />
      <main className="lg:px-18 pt-20 min-h-screen px-6 pb-16">
        <div className="max-w-7xl mx-auto">

          {/* ── Breadcrumb + page title ── */}
          <header className="mt-10 mb-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-[13px] text-[#414752] mb-4">
              {["Dashboard", "Appointments"].map((crumb) => (
                <span key={crumb} className="flex items-center gap-1.5">
                  <a href="#" className="hover:text-[#005dac] transition-colors">{crumb}</a>
                  <Icon name="chevRight" className="w-3.5 h-3.5 opacity-50" />
                </span>
              ))}
              <span className="text-[#005dac] font-semibold">Book an Appointment</span>
            </nav>

            <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1c1c]">
              Book an Appointment
            </h1>
          </header>

          {/* ── Main 12-col grid: 4 doctor card + 8 form ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            {/* Doctor card — 4 cols */}
            <div className="lg:col-span-4">
              <DoctorCard doctor={selectedDoctor} />
            </div>

            {/* Appointment form — 8 cols */}
            <div className="lg:col-span-8">
              <AppointmentForm doctor={selectedDoctor}/>
            </div>
          </div>

        </div>
      </main>
      <Footer/>
    </div>
  );
}
import { useState } from "react";
import AfterLoginNav from "../components/layouts/AfterLoginNav";
import Footer from "../components/layouts/Footer";

// ── Icons (inline SVG) ────────────────────────────────────────────────────────
const FacebookIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const InstagramIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1300);
  };

  const inputClass =
    "form-input w-full px-4 py-3 rounded-lg transition-all" +
    " border border-amber-500 outline-none";
  const inputStyle = {
    background: "var(--surface-container-low)",
    color: "var(--on-surface)",
    fontSize: 15,
  };

  return (
    <div
      className="lg:col-span-7 rounded-xl p-10 md:p-12"
      style={{
        background: "var(--surface-container-lowest)",
        boxShadow: "0 12px 32px rgba(0,93,172,0.06)",
      }}
    >
      {/* Title */}
      <div className="flex items-center gap-3 mb-8">
        <h2 className="font-headline font-bold text-3xl">Send us a message</h2>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 32 }}
      >
        {/* Name + Email row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              label: "Full Name",
              key: "name",
              type: "text",
              placeholder: "Dr. Julian Reed",
            },
            {
              label: "Email Address",
              key: "email",
              type: "email",
              placeholder: "julian@mediconnect.hosp",
            },
          ].map(({ label, key, type, placeholder }) => (
            <div key={key}>
              <label
                style={{
                  display: "block",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--on-surface-variant)",
                  marginBottom: 8,
                }}
              >
                {label}
              </label>
              <input
                className={inputClass}
                style={inputStyle}
                type={type}
                placeholder={placeholder}
                required
                value={form[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
              />
            </div>
          ))}
        </div>

        {/* Subject */}
        <div>
          <label
            style={{
              display: "block",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--on-surface-variant)",
              marginBottom: 8,
            }}
          >
            Subject
          </label>
          <input
            className={inputClass}
            style={inputStyle}
            type="text"
            placeholder="Patient Inquiry"
            required
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
          />
        </div>

        {/* Message */}
        <div>
          <label
            style={{
              display: "block",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--on-surface-variant)",
              marginBottom: 8,
            }}
          >
            Message
          </label>
          <textarea
            className={inputClass}
            style={{ ...inputStyle, resize: "none" }}
            placeholder="How can our clinical team help you today?"
            rows={5}
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>

        {/* Success */}
        {submitted && (
          <div
            className="fade-in flex items-center gap-3 px-5 py-4 rounded-lg"
            style={{
              background: "#f0fdf4",
              border: "1px solid #bbf7d0",
              color: "#166534",
            }}
          >
            <span
              className="material-symbols-outlined icon-filled"
              style={{ color: "#16a34a", fontSize: 20 }}
            >
              <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-5 h-5 text-green-500"
  viewBox="0 0 24 24"
  fill="none"
>
  <circle
    cx="12"
    cy="12"
    r="10"
    stroke="currentColor"
    strokeWidth="2"
    className="opacity-25"
  />
  <path
    d="M8 12l2.5 2.5L16 9"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="opacity-90"
  />
</svg>
            </span>
            <span style={{ fontSize: 14, fontWeight: 600 }}>
              Message sent! We'll get back to you within 2 hours.
            </span>
          </div>
        )}

        {/* Submit */}
        {!submitted && (
          <button
            type="submit"
            disabled={loading}
            className={`flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-semibold text-white
    bg-gradient-to-r from-[#005dac] to-[#1976d2]
    shadow-md transition-all duration-200
    ${loading ? "opacity-80 cursor-not-allowed" : "hover:shadow-lg active:scale-95"}`}
          >
            {loading ? (
              <>
                <span className="material-symbols-outlined animate-spin text-white text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 animate-spin text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="opacity-25"
                    />
                    <path
                      d="M22 12a10 10 0 00-10-10"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      className="opacity-75"
                    />
                  </svg>
                </span>
                Sending...
              </>
            ) : (
              <>
                Send Message
              </>
            )}
          </button>
        )}
      </form>
    </div>
  );
}
const call = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-[#005dac]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.684l1.2 3.6a1 1 0 01-.272 1.06l-1.27 1.27a16 16 0 006.586 6.586l1.27-1.27a1 1 0 011.06-.272l3.6 1.2a1 1 0 01.684.95V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);
const mail = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-[#005dac]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M22 6l-10 7L2 6" />
  </svg>
);
const location_on = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-[#005dac]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21s-7-4.35-7-10a7 7 0 1114 0c0 5.65-7 10-7 10z"
    />
    <circle cx="12" cy="11" r="2.5" />
  </svg>
);
const person = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 text-[#005dac]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21s-6-4-6-9a6 6 0 1112 0c0 5-6 9-6 9z"
    />
    <circle cx="12" cy="10" r="2.5" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.5 14a4 4 0 015 0"
    />
  </svg>
);
const schedule = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 text-[#005dac]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
  </svg>
);
const event = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 text-[#005dac]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 1l4 4-4 4" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 5H9a6 6 0 000 12h1"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 23l-4-4 4-4" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 19h12a6 6 0 000-12h-1"
    />
  </svg>
);
function InfoCard() {
  const contacts = [
    {
      icon: call,
      title: "Phone",
      line1: "+1 (888) 234-CLINIC",
      line2: "Mon–Fri, 9am – 6pm EST",
    },
    {
      icon: mail,
      title: "Email",
      line1: "support@mediconnect.hosp",
      line2: "Expect a reply within 2 hours",
    },
    {
      icon: location_on,
      title: "Office Location",
      line1: "Medical District North, Suite 402",
      line2: "Boston, MA 02114",
    },
  ];

  return (
    <div
      className="rounded-xl p-8 md:p-10"
      style={{ background: "var(--surface-container-high)" }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {contacts.map(({ icon, title, line1, line2 }) => (
          <div key={title} className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
              style={{
                background: "var(--surface-container-lowest)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <span
                className="material-symbols-outlined icon-filled"
                style={{ color: "var(--primary)", fontSize: 22 }}
              >
                {icon}
              </span>
            </div>
            <div>
              <h3
                className="font-headline font-bold"
                style={{ color: "var(--on-surface)", fontSize: 16 }}
              >
                {title}
              </h3>
              <p
                style={{
                  color: "var(--on-surface-variant)",
                  marginTop: 4,
                  fontWeight: 500,
                }}
              >
                {line1}
              </p>
              <p
                style={{
                  color: "var(--on-surface-variant)",
                  fontSize: 13,
                  marginTop: 2,
                }}
              >
                {line2}
              </p>
            </div>
          </div>
        ))}

        {/* Social */}
        <div
          style={{
            paddingTop: 24,
            borderTop: "1px solid rgba(193,198,212,0.2)",
          }}
        >
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--on-surface-variant)",
              marginBottom: 16,
            }}
          >
            Join Our Community
          </p>
          <div className="flex gap-4">
            {[
              { label: "Facebook", Icon: FacebookIcon },
              { label: "Instagram", Icon: InstagramIcon },
              { label: "LinkedIn", Icon: LinkedInIcon },
            ].map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="social-icon w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: "var(--surface-container-lowest)",
                  color: "var(--on-surface-variant)",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                  textDecoration: "none",
                }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MapCard() {
  return (
    <div
      className="map-wrap relative rounded-xl overflow-hidden cursor-pointer"
      style={{ height: 256, boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
      onClick={() =>
        window.open(
          "https://maps.google.com/?q=Medical+District+North+Boston+MA",
          "_blank",
        )
      }
    >
      {/* SVG map bg */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg,#c8d8e8 0%,#b0c4d8 30%,#dce8f0 60%,#c4d4e4 100%)",
        }}
      >
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.35 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="mapgrid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#5a8099"
                strokeWidth="0.6"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mapgrid)" />
          <line
            x1="0"
            y1="85"
            x2="100%"
            y2="85"
            stroke="#7aacc0"
            strokeWidth="3"
          />
          <line
            x1="0"
            y1="165"
            x2="100%"
            y2="165"
            stroke="#7aacc0"
            strokeWidth="2"
          />
          <line
            x1="130"
            y1="0"
            x2="130"
            y2="100%"
            stroke="#7aacc0"
            strokeWidth="3"
          />
          <line
            x1="270"
            y1="0"
            x2="270"
            y2="100%"
            stroke="#7aacc0"
            strokeWidth="1.5"
          />
          <line
            x1="370"
            y1="0"
            x2="370"
            y2="100%"
            stroke="#7aacc0"
            strokeWidth="1.5"
          />
          <rect
            x="18"
            y="18"
            width="90"
            height="52"
            rx="3"
            fill="#98b5c6"
            opacity="0.55"
          />
          <rect
            x="145"
            y="18"
            width="105"
            height="52"
            rx="3"
            fill="#98b5c6"
            opacity="0.45"
          />
          <rect
            x="285"
            y="18"
            width="70"
            height="52"
            rx="3"
            fill="#98b5c6"
            opacity="0.4"
          />
          <rect
            x="18"
            y="103"
            width="90"
            height="48"
            rx="3"
            fill="#98b5c6"
            opacity="0.45"
          />
          <rect
            x="145"
            y="103"
            width="105"
            height="48"
            rx="3"
            fill="#b0c8d6"
            opacity="0.65"
          />
          <rect
            x="285"
            y="103"
            width="70"
            height="48"
            rx="3"
            fill="#98b5c6"
            opacity="0.4"
          />
          <rect
            x="18"
            y="185"
            width="90"
            height="42"
            rx="3"
            fill="#98b5c6"
            opacity="0.4"
          />
          <rect
            x="145"
            y="185"
            width="105"
            height="42"
            rx="3"
            fill="#98b5c6"
            opacity="0.45"
          />
        </svg>
      </div>
      {/* Tint overlay */}
      <div
        className="map-overlay absolute inset-0"
        style={{ background: "rgba(0,93,172,0.12)", mixBlendMode: "multiply" }}
      />
      {/* Pin */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="map-pin primary-gradient px-5 py-3 rounded-full flex items-center gap-2"
          style={{ boxShadow: "0 8px 32px rgba(0,93,172,0.4)" }}
        >
          <span
            className="material-symbols-outlined icon-filled"
            style={{ color: "#fff", fontSize: 20 }}
          >
            location_on
          </span>
          <span
            className="font-headline font-bold"
            style={{ color: "#fff", fontSize: 13 }}
          >
            Open in Maps
          </span>
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  const faqs = [
    {
      icon: person,
      q: "How do I access my patient portal?",
      a: "Secure credentials are provided during your initial consultation. You can reset these via the login screen using your verified clinician email.",
    },
    {
      icon: schedule,
      q: "What is your typical response time?",
      a: "Our clinical support team prioritizes critical inquiries within 2 hours. General administrative questions are typically resolved within one business day.",
    },
    {
      icon: event,
      q: "Can I reschedule appointments online?",
      a: "Yes, the dashboard allows for seamless rescheduling up to 24 hours before your scheduled slot. For urgent changes, please call the clinic directly.",
    },
  ];

  return (
    <section
      style={{ maxWidth: 1440, margin: "0 auto", padding: "80px 32px 0" }}
    >
      <div className="text-center" style={{ marginBottom: 64 }}>
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--primary)",
          }}
        >
          Inquiry Assistance
        </span>
        <h2
          className="font-headline font-bold"
          style={{ fontSize: 36, color: "var(--on-surface)", marginTop: 12 }}
        >
          Common Questions
        </h2>
        <p
          style={{
            color: "var(--on-surface-variant)",
            marginTop: 12,
            maxWidth: 480,
            margin: "12px auto 0",
          }}
        >
          Quick answers to the questions our patients ask most frequently.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {faqs.map(({ icon, q, a }) => (
          <div
            key={q}
            className="faq-card rounded-xl p-8"
            style={{
              background: "var(--surface-container-low)",
              border: "1px solid rgba(193,198,212,0.15)",
            }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: "var(--primary-fixed)", marginBottom: 20 }}
            >
              <span
                className="material-symbols-outlined icon-filled"
                style={{ color: "var(--primary)", fontSize: 20 }}
              >
                {icon}
              </span>
            </div>
            <h3
              className="font-headline font-bold"
              style={{
                fontSize: 17,
                color: "var(--on-surface)",
                marginBottom: 12,
              }}
            >
              {q}
            </h3>
            <p
              style={{
                color: "var(--on-surface-variant)",
                lineHeight: 1.7,
                fontSize: 14,
              }}
            >
              {a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <>
      <AfterLoginNav />

      <main className="px-10 sm:px-18 py-36">
        {/* Hero */}
        <section
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            padding: "0 0 80px",
            textAlign: "center",
          }}
        >
          <span
            className="inline-block font-headline font-bold"
            style={{
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--primary)",
              background: "var(--primary-fixed)",
              padding: "6px 16px",
              borderRadius: 9999,
              marginBottom: 16,
            }}
          >
            Support &amp; Inquiries
          </span>
          <h1
            className="font-headline font-extrabold"
            style={{
              fontSize: "clamp(40px, 5vw, 60px)",
              color: "var(--on-surface)",
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p
            style={{
              color: "var(--on-surface-variant)",
              fontSize: 18,
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            We're here to help you. Whether you have questions about care,
            scheduling, or medical history, our clinical team is ready to
            assist.
          </p>
        </section>

        {/* Form + Sidebar grid */}
        <section
          style={{ maxWidth: 1440 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          <ContactForm />
          <div
            className="lg:col-span-5"
            style={{ display: "flex", flexDirection: "column", gap: 32 }}
          >
            <InfoCard />
            <MapCard />
          </div>
        </section>

        {/* FAQ */}
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}

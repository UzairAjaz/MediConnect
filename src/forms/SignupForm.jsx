import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FloatingInput from "../components/layouts/FloatingInput";
import GradientButton from "../components/layouts/GradientButton";

export default function SignupForm({ onSwitch }) {
  const [role, setRole] = useState("patient");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/mediconnect");
  };

  return (
    <form onSubmit={handleSignup} className="space-y-8">
      <header>
        <h2
          className="text-3xl font-bold text-[#1a1c1c] mb-2"
          style={{ fontFamily: "Manrope" }}
        >
          Create Clinical Account
        </h2>
        <p className="text-[#414752]">
          Join our network of healthcare excellence.
        </p>
      </header>

      <div className="space-y-3">
        <span className="text-sm font-semibold text-[#414752] px-1 uppercase tracking-wider">
          Select your Role
        </span>
        <div className="grid grid-cols-2 gap-3">
          {[
            {
              value: "patient",
              label: "Patient",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-[#005dac]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              ),
            },
            {
              value: "doctor",
              label: "Doctor",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-[#005dac]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-3-3v6M5 20a7 7 0 1114 0H5z"
                  />
                </svg>
              ),
            },
          ].map(({ value, label, icon }) => (
            <button
              key={value}
              type="button"
              onClick={() => setRole(value)}
              className={`flex flex-col items-center justify-center p-4 border rounded-xl cursor-pointer transition-all ${
                role === value
                  ? "bg-[#d4e3ff]/30 border-[#005dac]"
                  : "border-[#c1c6d4]/30 hover:bg-[#f3f3f3]"
              }`}
            >
              {icon}
              <span className="text-sm font-bold mt-1">{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <FloatingInput id="signup-name" label="Full Legal Name" type="text" />
        <FloatingInput id="signup-email" label="Work/Personal Email" type="email" />
        <FloatingInput id="signup-password" label="Secure Password" type="password" />

        <div className="pt-2">
          <p className="text-xs text-[#414752] mb-6 leading-relaxed">
            By clicking create, you agree to our{" "}
            <a href="#" className="text-[#005dac] font-bold">
              Terms of Clinical Conduct
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#005dac] font-bold">
              HIPAA Data Policy
            </a>.
          </p>
          <GradientButton type="submit">Initialize Account</GradientButton>
        </div>
      </div>

      <p className="text-center text-[#414752] text-sm">
        Already have credentials?{" "}
        <button
          type="button"
          onClick={onSwitch}
          className="text-[#005dac] font-bold hover:underline"
        >
          Log In
        </button>
      </p>
    </form>
  );
}

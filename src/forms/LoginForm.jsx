import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FloatingInput from "../components/layouts/FloatingInput";
import GradientButton from "../components/layouts/GradientButton";

function LoginForm({ onSwitch }) {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Add your login validation / API call here
    // If login is successful:
    navigate("/mediconnect");
  };

  return (
    <form onSubmit={handleLogin} className="space-y-8">
      <header>
        <h2
          className="text-3xl font-bold text-[#1a1c1c] mb-2"
          style={{ fontFamily: "Manrope" }}
        >
          Welcome Back
        </h2>
        <p className="text-[#414752]">
          Please enter your clinical credentials to continue.
        </p>
      </header>

      <div className="space-y-6">
        <FloatingInput id="login-email" label="Email Address" type="email" />
        <FloatingInput
          id="login-password"
          label="Password"
          type={showPass ? "text" : "password"}
          rightElement={
            <button type="button" onClick={() => setShowPass((v) => !v)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {showPass ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-9-7s4-7 9-7a9.956 9.956 0 016.21 2.16M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.274.86-.67 1.67-1.17 2.4M3 3l18 18"
                  />
                )}
              </svg>
            </button>
          }
        />

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              className="w-5 h-5 rounded accent-[#005dac]"
            />
            <span className="text-sm text-[#414752]">Remember device</span>
          </label>
          <a
            href="#"
            className="text-sm font-semibold text-[#005dac] hover:text-[#1976d2] transition-colors"
          >
            Forgot Password?
          </a>
        </div>

        <GradientButton type="submit">
          Access Sanctuary
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </GradientButton>
      </div>

      <p className="text-center text-[#414752] text-sm">
        New practitioner?{" "}
        <button
          type="button"
          onClick={onSwitch}
          className="text-[#005dac] font-bold hover:underline"
        >
          Create an account
        </button>
      </p>
    </form>
  );
}

export default LoginForm;

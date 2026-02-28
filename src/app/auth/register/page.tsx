"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role: "RESELLER" }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      router.push("/auth/login");
    } catch (err: any) {
      alert(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        .login-bg {
          width: 100vw;
          min-height: 100vh;
          background: linear-gradient(135deg, #7ed957 0%, #0097b2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          font-family: 'Segoe UI', sans-serif;
        }

        .login-card {
          background: #fff;
          border-radius: 20px;
          padding: 48px 44px 40px;
          width: 100%;
          max-width: 460px;
          position: relative;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }

        .close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          cursor: pointer;
          color: #aaa;
          font-size: 22px;
          line-height: 1;
          padding: 4px;
          transition: color 0.2s;
        }
        .close-btn:hover { color: #555; }

        .login-title {
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 6px;
        }

        .signup-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
        }

        .signup-text {
          font-size: 14px;
          color: #555;
          margin: 0;
        }

        .signup-link {
          color: #7ed957;
          font-weight: 600;
          text-decoration: none;
        }
        .signup-link:hover { text-decoration: underline; }

        .field-group {
          margin-bottom: 18px;
        }

        .field-wrapper {
          position: relative;
        }

        .field-input {
          width: 100%;
          border: none;
          border-bottom: 1.5px solid #d0d0d0;
          padding: 10px 0;
          font-size: 15px;
          color: #1a1a1a;
          background: transparent;
          outline: none;
          transition: border-color 0.2s;
          box-sizing: border-box;
        }
        .field-input::placeholder { color: #bbb; }
        .field-input:focus { border-bottom-color: #7ed957; }

        .toggle-pw {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: #aaa;
          padding: 0;
          display: flex;
          align-items: center;
        }

        .signin-btn {
          width: 100%;
          padding: 15px;
          background: linear-gradient(135deg, #7ed957 0%, #0097b2 100%);
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          margin-top: 10px;
          margin-bottom: 20px;
          transition: opacity 0.2s, transform 0.15s;
          letter-spacing: 0.3px;
        }
        .signin-btn:hover:not(:disabled) {
          opacity: 0.92;
          transform: translateY(-1px);
        }
        .signin-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .bottom-row {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .login-text {
          font-size: 14px;
          color: #555;
          margin: 0;
        }

        .login-link {
          color: #7ed957;
          font-weight: 600;
          text-decoration: none;
        }
        .login-link:hover { text-decoration: underline; }
      `}</style>

      <div className="login-bg">
        <div className="login-card">
          {/* Close button */}
          <button
            className="close-btn"
            type="button"
            aria-label="Close"
            onClick={() => router.push("/")}
          >
            ✕
          </button>

          {/* Title + login row */}
          <h1 className="login-title">Sign up</h1>
          <div className="signup-row">
            <p className="signup-text">
              Already have an account?{" "}
              <a href="/auth/login" className="signup-link">
                Sign in here
              </a>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleRegister}>
            {/* Name */}
            <div className="field-group">
              <div className="field-wrapper">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="field-input"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="field-group">
              <div className="field-wrapper">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="field-input"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="field-group">
              <div className="field-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="field-input"
                  style={{ paddingRight: "32px" }}
                  required
                />
                <button
                  type="button"
                  className="toggle-pw"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#aaa"
                      strokeWidth="2"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#aaa"
                      strokeWidth="2"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Sign up button */}
            <button type="submit" disabled={loading} className="signin-btn">
              {loading ? "Creating account..." : "Sign up"}
            </button>

            {/* Bottom row */}
            <div className="bottom-row">
              <p className="login-text">
                Already have an account?{" "}
                <a href="/auth/login" className="login-link">
                  Sign in
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

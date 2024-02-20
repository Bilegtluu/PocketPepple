import React, { useState } from "react";
import { Logo } from "./logo/Logo";
import Link from "next/link";
import { useRouter } from "next/router";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        throw new Error("Please enter both email and password");
      }

      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Login failed");
      }

      router.push("/account");
      setError(null);
    } catch (error) {
      setError(error.message || "Login failed");
    }
  };

  return (
    <div className="flex">
      <div className="flex flex-col justify-center gap-10 items-center custom-background-right">
        <div className="flex items-center text">
          <Logo />
          Pocket Pebble
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="text">Welcome Back</div>
          <div>Welcome back, Please enter your details</div>
        </div>
        <div className="w-[384px] flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="btn button text-white font-sans text-xl"
            onClick={handleLogin}
          >
            Log in
          </button>
        </div>
        <div className="flex gap-2">
          <div className="font-sans text-base">Don’t have an account?</div>
          <button className="text-blue-600">
            <Link href="/signup">Sign Up</Link>
          </button>
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
      <div className="custom-background"></div>
    </div>
  );
};

export default Login;

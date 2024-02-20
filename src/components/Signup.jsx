import React, { useState } from "react";
import { Logo } from "./logo/Logo";
import Link from "next/link";
import { useRouter } from "next/router";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      if (!name || !email || !password || password !== rePassword) {
        throw new Error("Please check your information.");
      }

      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          name,
        }),
      });
      console.log("hah");

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Sign-up failed");
      }

      setSuccess(true);
      setError(null);
      router.push("/account");
    } catch (error) {
      setSuccess(false);
      setError(error.message || "Sign-up failed");
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
          <div className="text">Create Pocket Pebble account</div>
          <div>Sign up below to create your Wallet account</div>
        </div>
        <div className="w-[384px] flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <input
            type="password"
            placeholder="Re-Password"
            className="input"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
          <button
            className="button btn text-white font-sans text-xl"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
        <div className="flex gap-2">
          <div className="font-sans text-base">Already have an account?</div>
          <button className="text-blue-600">
            <Link href="/login">Log In</Link>
          </button>
        </div>
        {success && <div className="text-green-500">Sign-up successful!</div>}
        {error && <div className="text-red-500">{error}</div>}
      </div>
      <div className="custom-background"></div>
    </div>
  );
};

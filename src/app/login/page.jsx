"use client";

import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl p-6">
        <h2 className="text-3xl font-bold text-center mb-4">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <label className="form-control w-full">
            <span className="label-text">Email</span>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          {/* Password */}
          <label className="form-control w-full">
            <span className="label-text">Password</span>
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          {/* Button */}
          <button className="btn btn-primary w-full">Login</button>
        </form>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-primary font-semibold">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

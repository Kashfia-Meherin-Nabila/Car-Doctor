"use client";

import { RegisterUser } from '@/app/action/auth/RegisterUser';
import React from 'react';
import { useState } from "react";

const RegisterForm  =()=>  {
    
   
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    

    const handleLogin = (e) => {
    e.preventDefault();
    RegisterUser("Email:", email, "Password:", password);
  };

    return (
        <div>
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
          <button className="btn btn-primary w-full">Register</button>
        </form>
        </div>
    );
};

export default RegisterForm;
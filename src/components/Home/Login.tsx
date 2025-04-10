// File: Login.tsx

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "@/redux/features/authSlice";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (data.token) {
        dispatch(login(data.token));
        navigate("/");
      } else {
        console.error("Invalid credentials");
      }
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <div className="p-16">
      <h1 className="flex justify-center items-center text-3xl text-sky-400">
        Login
      </h1>
      <div className="border border-gray-300 rounded-lg shadow-md p-6 max-w-md mx-auto mt-8">
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="mb-4 w-full">
            <Label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 w-full"
              required
            />
          </div>

          <div className="mb-4 w-full relative">
            <Label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </Label>
            <Input
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 w-full pr-10"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-10 transform -translate-y-1/2 text-gray-500"
              aria-label={passwordVisible ? "Hide password" : "Show password"}
            >
              {passwordVisible ? (
                <HiEyeOff className="h-5 w-5" />
              ) : (
                <HiEye className="h-5 w-5" />
              )}
            </button>
          </div>

          <button
            type="submit"
            className="bg-sky-500 text-white px-20 py-2 rounded hover:bg-blue-600 mt-4"
          >
            Login
          </button>
        </form>

        <div className="flex justify-center mt-4">
          <a href="/forgot-password" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center mt-4">
        <p className="text-gray-700">Don't have an account?</p>
        <a href="/signup" className="text-blue-500 hover:underline ml-2">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Login;

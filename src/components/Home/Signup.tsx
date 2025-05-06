import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
      phone,
    };

    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      console.log(res);

      const data = await res.json();
      console.log("Signup successful:", data);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="p-16">
      <h1 className="flex justify-center items-center text-3xl text-sky-400">
        Sign Up
      </h1>
      <div className="border border-gray-300 rounded-lg shadow-md p-6 max-w-md mx-auto mt-8">
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="mb-4 w-full">
            <Label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="border border-gray-300 rounded px-4 py-2 w-full"
              required
            />
          </div>

          <div className="mb-4 w-full">
            <Label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
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

          <div className="mb-4 w-full">
            <Label htmlFor="phone" className="block text-gray-700 mb-2">
              Phone Number
            </Label>
            <Input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="border border-gray-300 rounded px-4 py-2 w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-sky-500 text-white px-20 py-2 rounded hover:bg-sky-600 mt-4"
          >
            Signup
          </button>
        </form>
      </div>

      <div className="flex justify-center items-center mt-4">
        <p className="text-gray-700">Already have an account?</p>
        <a href="/login" className="text-blue-500 hover:underline ml-2">
          Login
        </a>
      </div>
    </div>
  );
};

export default Signup;

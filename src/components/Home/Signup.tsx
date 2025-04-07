import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HiEye, HiEyeOff } from "react-icons/hi"; // Import icons

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="p-16">
      <h1 className="flex justify-center items-center text-3xl text-sky-400">
        Sign Up
      </h1>
      <div className="border border-gray-300 rounded-lg shadow-md p-6 max-w-md mx-auto mt-8">
        <form className="flex flex-col items-center ">
          <div className="mb-4 w-full">
            <Label htmlFor="email" className="block text-gray-700 mb-2">
              Name
            </Label>
            <Input
              type="name"
              id="name"
              placeholder="Enter your name"
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4 w-full">
            <Label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>

          <div className="mb-4 w-full relative">
            <Label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </Label>
            <Input
              type={passwordVisible ? "text" : "password"} // Toggle between text and password
              id="password"
              placeholder="Enter your password"
              className="border border-gray-300 rounded px-4 py-2 w-full pr-10" // Added padding to the right for the icon
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-10 transform -translate-y-1/2 text-gray-500"
              aria-label={passwordVisible ? "Hide password" : "Show password"} // Added aria-label for accessibility
            >
              {passwordVisible ? (
                <HiEyeOff className="h-5 w-5" />
              ) : (
                <HiEye className="h-5 w-5" />
              )}
            </button>
          </div>
          <div className="mb-4 w-full">
            <Label htmlFor="number" className="block text-gray-700 mb-2">
              Phone Number
            </Label>
            <Input
              type="number"
              id="number"
              placeholder="Enter Number"
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-sky-500 text-gray-600 px-20 py-2 rounded hover:bg-blue-600 mt-4"
          >
            Signup
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center mt-4">
        <p className="text-gray-700">I have an account?</p>
        <a href="/login" className="text-blue-500 hover:underline ml-2">
          Login
        </a>
      </div>
    </div>
  );
};

export default Signup;

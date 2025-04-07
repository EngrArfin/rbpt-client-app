import { useState } from "react";
import { Input } from "@/components/ui/input"; // Make sure Input is imported from your custom components
import { Label } from "@/components/ui/label"; // Similarly, ensure Label is correctly imported

const ForgotPassword = () => {
  const [email, setEmail] = useState(""); // State to hold the email input value
  const [error, setError] = useState(""); // State to manage error messages (if any)
  const [loading, setLoading] = useState(false); // State to manage loading state

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(""); // Reset error message

    if (!email) {
      setError("Please enter your email.");
      setLoading(false);
      return;
    }

    try {
      // Implement your password reset logic here
      // Example: Call your backend API to send the reset email
      console.log("Sending reset email to:", email);
      // Simulate success after 2 seconds
      setTimeout(() => {
        alert("Password reset email sent!");
        setLoading(false);
      }, 2000);
    } catch (error) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="p-16">
      <h1 className="flex justify-center items-center text-3xl text-sky-400 mb-6">
        Forgot Your Password?
      </h1>
      <div className="border border-gray-300 rounded-lg shadow-md p-6 max-w-md mx-auto mt-8">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="mb-4 w-full">
            <Label htmlFor="email" className="block text-gray-700 mb-2">
              Enter your email
            </Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className={`bg-sky-500 text-white px-20 py-2 rounded hover:bg-blue-600 mt-4 ${
              loading ? "cursor-wait opacity-50" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
        <div className="flex justify-center mt-4">
          <a href="/login" className="text-blue-500 hover:underline">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

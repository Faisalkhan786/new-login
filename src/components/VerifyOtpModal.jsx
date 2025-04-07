import React, { useState } from "react";
import { useLoginWithOtpMutation } from "../redux/otpApi";

const VerifyOtpModal = ({ sessionId, mobileNumber, closeModal }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [loginWithOtp, { isLoading }] = useLoginWithOtpMutation();

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return; // Allow only one digit
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleVerifyOtp = async () => {
    setError("");
    console.log("Entered OTP:", otp.join(""));
    const enteredOtp = otp.join("");

    if (enteredOtp.length != 6) {
      setError("Enter a valid 4-digit OTP.");
      return;
    }

    try {

      const response = await loginWithOtp({
        phone_number: String(mobileNumber),
        otp: Number(enteredOtp),
        device_id: "123",
        device_token: "sdnlfnasdjnfnjnsnnfndvdnsnfnjas",
        country_code: "IN",
        phone_code: "+91",
      }).unwrap();

      console.log("Login Response:", response);

      if (response.status === true) {
        alert("Login Successful!");
        closeModal();
      } else {
        setError(response.message || "Invalid OTP. Try again");
      }
    } catch (error) {
      console.log("Login Error", error);
      setError(error?.data?.message || "verification failed. Try again.");
    }

    setLoading(false);
    // Add login verification logic here
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
          onClick={closeModal}
        >
          ✖
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold mb-4 text-center text-blue-800">Verify OTP</h2>

        {/* OTP Input Fields */}
        <div className="flex justify-center gap-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              maxLength={1}
              className="w-12 h-12 text-center text-xl text-blue-800 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        {/* Login Button */}
        <button
          onClick={handleVerifyOtp}
          disabled={isLoading}
          className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          {loading ? "Verifying..." : "Login"}
        </button>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        {/* Resend OTP Section */}
        <div className=" flex justify-between text-center mt-4">
          <p className="text-gray-600 text-sm">Didn’t receive the code?</p>
          <button className="text-blue-600 font-semibold hover:underline">
            Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpModal;

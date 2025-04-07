import React, { useState } from "react";
import VerifyOtpModal from "./VerifyOtpModal";
import axios from "axios";
import { useGenerateOtpMutation } from "../redux/otpApi";

const LoginModal = ({ closeModal }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [generateOtp, { isLoading }] = useGenerateOtpMutation();

  const handleGetOtp = async () => {

    console.log("OTP requested for:", mobileNumber);

    if (!mobileNumber || mobileNumber.length < 10) {
      setError("Enter a valid mobile number");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await generateOtp({
        phone_number: mobileNumber,
        country_code: "IN",
        phone_code: "+91",
      }).unwrap();

      console.log("Response before status: ", response);
      console.log("status: ", response.status);

      if (response.status) {
        console.log("Response after status check: ", response.data);
        setSessionId(response.data.otp); // Store session ID for verification
        setShowOtpModal(true);

      } else {
        setError("Failed to send OTP. Try again.");
      }

    } catch (error) {
      console.log("Error sending OTP:", error);
      setError("Error sending OTP. Check your number", error);
    }

    setLoading(false);
  };

  return (
    <>
      {!showOtpModal ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-10 rounded-lg shadow-lg w-1/3 relative">
            {/* Close Button (Top-Right Corner) */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
              onClick={closeModal}
            >
              ✖
            </button>

            {/* Title */}
            <h1 className="text-2xl font-bold mb-4 text-center text-blue-800">Login with Mobile</h1>

            {/* Info Text */}
            <p className="text-gray-600 text-sm text-center mb-4">
              You will receive a 4-digit code <br /> for verification
            </p>

            {/* Label & Mobile Input */}
            <label className="block text-gray-700 font-medium mb-1 text-left">Enter Mobile No</label>
            <input
              type="tel"
              placeholder="Enter mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="w-full p-3 border text-blue-800 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            {/* Get OTP Button */}
            <button
              onClick={handleGetOtp}
              disabled={isLoading}
              className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {isLoading ? "Sending OTP..." : "Get OTP"}
            </button>
            {error && <p className="text-red-500 text-center mt-2">{error}</p>}
          </div>
        </div>
      ) : (<VerifyOtpModal sessionId={sessionId} mobileNumber={mobileNumber} closeModal={closeModal} />)}
    </>
  );
};

export default LoginModal;

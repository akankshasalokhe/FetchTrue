"use client";
import { useState, useEffect } from "react";

export default function AssuranceCard() {
  const [assuranceData, setAssuranceData] = useState(null);

 useEffect(() => {
  const fetchAssurance = async () => {
    try {
      const res = await fetch("https://landing-page-yclw.vercel.app/api/packages");
      const data = await res.json();
      console.log("API Response:", data);
      setAssuranceData(data.data[0]); // 👈 pick first object
    } catch (error) {
      console.error("Error fetching assurance data:", error);
    }
  };
  fetchAssurance();
}, []);


  return (
    <div className="mt-12 bg-white shadow-xl rounded-2xl border border-gray-100 p-6 sm:p-8 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img
          src="/icon (3).png"
          alt="Assurance"
          width={120}
          height={120}
          className="w-28 h-28 sm:w-36 sm:h-36 object-contain"
        />
        <div className="text-center sm:text-left flex-1">
          <h3 className="text-lg sm:text-2xl font-bold text-gray-900">
            We Assure You up to{" "}
            <span className="text-blue-600">5X Return</span>
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            If you earn less than 5 Lakh in{" "}
            {assuranceData?.lockInPeriod || 3} year
            {assuranceData?.lockInPeriod > 1 ? "s" : ""}, we'll refund up to 5X
            your initial amount
          </p>
          <p className="mt-4 font-semibold text-gray-800 text-sm sm:text-base">
            Your Extra Benefits:{" "}
            <span className="font-normal text-gray-700">
              You've received ₹
              {assuranceData?.monthlyEarnings?.toLocaleString() || "3,000"} as
              your fixed monthly earning bonus for purchasing the package.
            </span>
          </p>
          <p className="text-blue-600 text-xs sm:text-sm mt-3 flex items-center justify-center sm:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            Safe, secure, and assured returns on your investment.
          </p>
        </div>
      </div>

      {/* Dynamic Data Section */}
      <div className="mt-8 border-t border-gray-200 pt-6 space-y-3 text-xs sm:text-sm text-gray-700">
      <div className="flex justify-between">
        <span className="font-medium">Franchise Fees</span>
        <span>
          <s className="text-gray-500">
            ₹{assuranceData?.price?.toLocaleString() || "50000"}
          </s>{" "}
          <span className="text-green-600 font-semibold ml-2">
            {assuranceData?.discount || 20}% ₹
            {assuranceData?.discountedPrice?.toLocaleString() || "10000"}
          </span>
        </span>
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Franchise Deposit (Refundable)</span>
        <span className="font-semibold">
          ₹{assuranceData?.deposit?.toLocaleString() || "1,00,000"}
        </span>
      </div>
      <div className="flex justify-between font-bold text-blue-800 pt-2 border-t border-gray-100">
        <span className="text-base sm:text-lg">Growth Total</span>
        <span className="text-base sm:text-lg">
          ₹{assuranceData?.grandtotal?.toLocaleString() || "1,10,000"}
        </span>
      </div>
    </div>

      {/* Payment Section */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex-1 text-center sm:text-left">
          <p className="text-xs text-gray-500">
            Pay using UPI, Card, Net Banking
          </p>
        </div>
        <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-blue-900 text-sm sm:text-base">
          Activate Now
        </button>
      </div>

      <div className="mt-4 text-center sm:text-right">
        <p className="text-xs sm:text-sm font-semibold text-blue-700 inline-flex items-center bg-blue-50 px-3 sm:px-4 py-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 sm:h-5 w-4 sm:w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          We Assure You up to 5X Return
        </p>
      </div>
    </div>
  );
}

// src/pages/author/PaymentPage.tsx
import React from 'react';

const PaymentPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#B8CDD9] py-16 px-4 flex justify-center items-center">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 w-full max-w-2xl shadow-2xl">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">Payment</h1>
        
        <div className="space-y-6">
          <div className="text-gray-700 text-lg">
            <p><strong>Submission Type:</strong> Valet</p>
            <p><strong>Amount:</strong> $99.00</p>
          </div>

          <button
            className="w-full bg-[#4A5D8A] text-white py-4 px-6 rounded-lg font-medium hover:bg-[#3A4D7A] transition duration-200 shadow-lg hover:shadow-xl"
          >
            Pay Now
          </button>

          <div className="bg-gray-100 p-4 rounded-lg mt-6 text-sm text-gray-600">
            <p>After successful payment, a receipt will be available here for download.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

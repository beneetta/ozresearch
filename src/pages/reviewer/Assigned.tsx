// src/pages/reviewer/Assigned.tsx
import React from 'react';

const Assigned: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#B8CDD9] flex items-center justify-center px-4 py-10">
      <div className="bg-white/90 backdrop-blur-md p-10 rounded-xl shadow-2xl max-w-4xl w-full">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Assigned Manuscripts</h1>

        <div className="space-y-6">
          {/* Example Assigned Manuscript */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-medium text-gray-700 mb-2">Manuscript: Ethics in AI</h2>
            <p className="text-sm text-gray-600 mb-4">You are assigned to review this manuscript. Please download and submit your feedback.</p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Download Manuscript</button>
              <button className="bg-[#4A5D8A] text-white py-2 px-4 rounded hover:bg-[#3A4D7A] transition">Submit Feedback</button>
            </div>
          </div>

          {/* Add more assigned manuscripts here */}
        </div>
      </div>
    </div>
  );
};

export default Assigned;

// src/pages/editor/AssignReviewers.tsx
import React from 'react';

const AssignReviewers: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#B8CDD9] py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Assign Reviewers</h1>

        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Manuscript ID</label>
            <input
              type="text"
              placeholder="Enter Manuscript ID"
              className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-[#4A5D8A] focus:bg-white transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Assign Reviewer (Manual)</label>
            <input
              type="text"
              placeholder="Enter Reviewer Email or ID"
              className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-[#4A5D8A] focus:bg-white transition-all duration-200"
            />
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-[#4A5D8A] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#3A4D7A] transition-all duration-200">
              Assign Reviewer
            </button>

            <button className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-medium hover:bg-gray-300 transition-all duration-200">
              Use AI Suggestion
            </button>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Suggested Reviewers (AI)</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Dr. Alex Johnson - alex.j@example.com</li>
              <li>Prof. Emily Zhang - emily.z@example.com</li>
              <li>Dr. Priya Rao - priya.rao@example.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignReviewers;

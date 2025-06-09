// src/pages/reviewer/Invitations.tsx
import React from 'react';

const Invitations: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#B8CDD9] py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Review Invitations</h1>

        {/* Sample Invitations Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-[#4A5D8A] text-white">
                <th className="py-3 px-6 text-left">Manuscript Title</th>
                <th className="py-3 px-6 text-left">Submission Date</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Placeholder Row */}
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-4 px-6">Sample Manuscript on AI Ethics</td>
                <td className="py-4 px-6">2025-06-01</td>
                <td className="py-4 px-6 space-x-2">
                  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Accept</button>
                  <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Reject</button>
                </td>
              </tr>
              {/* Additional rows can be mapped from data */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Invitations;

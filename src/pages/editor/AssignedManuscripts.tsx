// src/pages/editor/AssignedManuscripts.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const AssignedManuscripts: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#B8CDD9] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold text-gray-800 mb-8">Assigned Manuscripts</h1>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-[#4A5D8A] text-white">
                <th className="py-3 px-4 text-left">Manuscript Title</th>
                <th className="py-3 px-4 text-left">Reviewers</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4">AI in Education</td>
                <td className="py-3 px-4">Dr. Smith, Dr. Jane</td>
                <td className="py-3 px-4">Under Review</td>
                <td className="py-3 px-4 space-x-2">
                  <Link 
                    to="/editor/ai-report" 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    View AI Report
                  </Link>
                  <Link 
                    to="/editor/track-peer-review" 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Track Review
                  </Link>
                  <button className="text-green-600 hover:underline text-sm">Make Decision</button>
                </td>
              </tr>
              {/* Repeat for more entries */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssignedManuscripts;

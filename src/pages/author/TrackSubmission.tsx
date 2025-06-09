// File: src/pages/author/TrackSubmission.tsx
import React from 'react';

const TrackSubmission: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#B8CDD9] py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Track Submission</h1>

        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-[#4A5D8A] text-white">
              <th className="py-3 px-4 text-left">Manuscript Title</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Last Updated</th>
              <th className="py-3 px-4 text-left">Version</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100 hover:bg-gray-200">
              <td className="py-3 px-4">The Impact of AI on Education</td>
              <td className="py-3 px-4">Under Review</td>
              <td className="py-3 px-4">2024-06-01</td>
              <td className="py-3 px-4">v1.2</td>
            </tr>
            <tr className="bg-white hover:bg-gray-100">
              <td className="py-3 px-4">Climate Change in Urban Areas</td>
              <td className="py-3 px-4">Revision Requested</td>
              <td className="py-3 px-4">2024-05-22</td>
              <td className="py-3 px-4">v1.1</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-6 text-sm text-gray-600">
          * You can view detailed revision comments and upload updated versions in the Manuscript Details section.
        </div>
      </div>
    </div>
  );
};

export default TrackSubmission;

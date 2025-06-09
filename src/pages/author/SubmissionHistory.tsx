// src/pages/author/SubmissionHistory.tsx
import React from 'react';

interface Submission {
  id: number;
  title: string;
  date: string;
  status: 'Submitted' | 'Under Review' | 'Revision' | 'Accepted' | 'Rejected';
  version: string;
}

const sampleSubmissions: Submission[] = [
  {
    id: 1,
    title: 'A Study on AI in Education',
    date: '2025-06-02',
    status: 'Under Review',
    version: 'v1.0'
  },
  {
    id: 2,
    title: 'Blockchain Use in Health Records',
    date: '2025-05-20',
    status: 'Revision',
    version: 'v1.1'
  },
  {
    id: 3,
    title: 'Green Computing Trends',
    date: '2025-04-10',
    status: 'Accepted',
    version: 'v1.3'
  }
];

const SubmissionHistory: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#B8CDD9] py-16 px-4 flex items-center justify-center">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 w-full max-w-4xl shadow-2xl">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">Submission History</h1>

        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-[#4A5D8A] text-white text-left">
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Version</th>
            </tr>
          </thead>
          <tbody>
            {sampleSubmissions.map((submission) => (
              <tr key={submission.id} className="bg-white border-b border-gray-200">
                <td className="py-3 px-4 text-gray-800">{submission.title}</td>
                <td className="py-3 px-4 text-gray-600">{submission.date}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      submission.status === 'Accepted'
                        ? 'bg-green-100 text-green-700'
                        : submission.status === 'Rejected'
                        ? 'bg-red-100 text-red-700'
                        : submission.status === 'Revision'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {submission.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-700">{submission.version}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmissionHistory;

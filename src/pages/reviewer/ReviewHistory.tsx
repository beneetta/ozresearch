// src/pages/reviewer/ReviewHistory.tsx
import React from 'react';

const ReviewHistory: React.FC = () => {
  const reviewData = [
    {
      manuscriptTitle: 'AI in Healthcare',
      submissionDate: '2025-04-10',
      decision: 'Accepted',
      feedbackFile: 'ai_healthcare_review.pdf',
    },
    {
      manuscriptTitle: 'Quantum Computing Basics',
      submissionDate: '2025-03-20',
      decision: 'Rejected',
      feedbackFile: 'quantum_review.pdf',
    },
    // Add more mock reviews here
  ];

  return (
    <div className="min-h-screen bg-[#B8CDD9] py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Review History
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#4A5D8A] text-white">
                <th className="p-4">Manuscript Title</th>
                <th className="p-4">Submission Date</th>
                <th className="p-4">Decision</th>
                <th className="p-4">Review File</th>
              </tr>
            </thead>
            <tbody>
              {reviewData.map((item, index) => (
                <tr key={index} className="bg-white even:bg-gray-100">
                  <td className="p-4">{item.manuscriptTitle}</td>
                  <td className="p-4">{item.submissionDate}</td>
                  <td className="p-4">{item.decision}</td>
                  <td className="p-4">
                    <a
                      href={`/reviews/${item.feedbackFile}`}
                      className="text-[#4A5D8A] underline hover:text-[#3A4D7A]"
                    >
                      {item.feedbackFile}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReviewHistory;

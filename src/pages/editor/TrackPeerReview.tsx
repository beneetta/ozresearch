import React from 'react';

const dummyReviews = [
  {
    manuscript: 'AI in Healthcare',
    reviewer: 'Dr. Jane Smith',
    feedbackStatus: 'Submitted',
    responseTime: '3 days'
  },
  {
    manuscript: 'Blockchain for Voting',
    reviewer: 'Prof. Alan Walker',
    feedbackStatus: 'Pending',
    responseTime: '-'
  },
  {
    manuscript: 'Quantum Computing Basics',
    reviewer: 'Dr. Emma Brown',
    feedbackStatus: 'Submitted',
    responseTime: '2 days'
  }
];

const TrackPeerReview: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#B8CDD9] py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Track Peer Review</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-gray-700">
            <thead className="border-b font-medium bg-[#4A5D8A] text-white">
              <tr>
                <th scope="col" className="px-6 py-4">Manuscript</th>
                <th scope="col" className="px-6 py-4">Reviewer</th>
                <th scope="col" className="px-6 py-4">Feedback Status</th>
                <th scope="col" className="px-6 py-4">Response Time</th>
              </tr>
            </thead>
            <tbody>
              {dummyReviews.map((review, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-100 transition">
                  <td className="px-6 py-4">{review.manuscript}</td>
                  <td className="px-6 py-4">{review.reviewer}</td>
                  <td className="px-6 py-4">{review.feedbackStatus}</td>
                  <td className="px-6 py-4">{review.responseTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TrackPeerReview;

import React from 'react';

const notifications = [
  {
    type: 'Decision Alert',
    message: 'You accepted the manuscript "AI in Healthcare".',
    time: '2 hours ago'
  },
  {
    type: 'Reviewer Progress',
    message: 'Dr. Jane Smith submitted review for "Blockchain for Voting".',
    time: '1 day ago'
  },
  {
    type: 'AI Report',
    message: 'AI report is ready for "Quantum Computing Basics".',
    time: '3 days ago'
  }
];

const NotificationCenter: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#B8CDD9] py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Notification Center</h1>
        <ul className="space-y-4">
          {notifications.map((note, idx) => (
            <li key={idx} className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-medium text-[#4A5D8A]">{note.type}</h3>
                <span className="text-sm text-gray-500">{note.time}</span>
              </div>
              <p className="text-gray-700">{note.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotificationCenter;

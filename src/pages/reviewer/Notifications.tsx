// src/pages/reviewer/Notifications.tsx
import React from 'react';
import { Bell } from 'lucide-react';

const ReviewerNotifications: React.FC = () => {
  const dummyNotifications = [
    {
      id: 1,
      type: 'New Review Request',
      message: 'You have been invited to review Manuscript #2024-AI-33.',
      time: '2 hours ago',
    },
    {
      id: 2,
      type: 'Reminder',
      message: 'Your review for Manuscript #2024-CS-10 is due in 3 days.',
      time: '1 day ago',
    },
    {
      id: 3,
      type: 'Deadline Warning',
      message: 'Review deadline for Manuscript #2024-DS-88 is tomorrow.',
      time: '2 days ago',
    },
  ];

  return (
    <div className="min-h-screen bg-[#B8CDD9] py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
          <Bell className="mr-2" /> Reviewer Notifications
        </h1>

        <div className="space-y-4">
          {dummyNotifications.map((note) => (
            <div
              key={note.id}
              className="bg-[#f8fafc] border-l-4 border-[#4A5D8A] p-4 rounded-md shadow-sm"
            >
              <h3 className="font-semibold text-gray-700">{note.type}</h3>
              <p className="text-gray-600 text-sm mt-1">{note.message}</p>
              <span className="text-xs text-gray-400 block mt-2">{note.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewerNotifications;

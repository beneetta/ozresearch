// src/pages/author/NotificationCenter.tsx
import React from 'react';

interface Notification {
  id: number;
  message: string;
  type: 'info' | 'success' | 'warning';
  date: string;
}

const sampleNotifications: Notification[] = [
  { id: 1, message: 'Your manuscript has been submitted successfully.', type: 'success', date: '2025-06-08' },
  { id: 2, message: 'Payment confirmation for valet submission received.', type: 'info', date: '2025-06-07' },
  { id: 3, message: 'Editor has requested revisions for your manuscript.', type: 'warning', date: '2025-06-06' }
];

const NotificationCenter: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#B8CDD9] py-16 px-4 flex items-center justify-center">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 w-full max-w-3xl shadow-2xl">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">Notification Center</h1>

        <ul className="space-y-4">
          {sampleNotifications.map(notification => (
            <li
              key={notification.id}
              className={`p-4 rounded-lg shadow-md ${
                notification.type === 'success'
                  ? 'bg-green-100 border-l-4 border-green-500'
                  : notification.type === 'info'
                  ? 'bg-blue-100 border-l-4 border-blue-500'
                  : 'bg-yellow-100 border-l-4 border-yellow-500'
              }`}
            >
              <p className="text-gray-800 font-medium">{notification.message}</p>
              <p className="text-sm text-gray-600">{notification.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotificationCenter;

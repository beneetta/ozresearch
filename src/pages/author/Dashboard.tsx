// src/pages/author/Dashboard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, User, Clock } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#B8CDD9] py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header with Dashboard title and small icons */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-semibold text-gray-800">Author Dashboard</h1>
          <div className="flex items-center space-x-6">
            <Link to="/author/submissions" className="text-gray-700 hover:text-[#4A5D8A] flex items-center space-x-1">
              <Clock size={20} />
              <span className="text-sm font-medium">History</span>
            </Link>
            <Link to="/author/notifications" className="text-gray-700 hover:text-[#4A5D8A] flex items-center space-x-1">
              <Bell size={20} />
              <span className="text-sm font-medium">Notifications</span>
            </Link>
            <Link to="/author/edit-profile" className="text-gray-700 hover:text-[#4A5D8A] flex items-center space-x-1">
              <User size={20} />
              <span className="text-sm font-medium">Profile</span>
            </Link>
          </div>
        </div>

        {/* Status Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mb-12">
          {['Submitted', 'Under Review', 'Revision', 'Accepted', 'Rejected'].map((status) => (
            <div
              key={status}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md text-center"
            >
              <h3 className="text-lg font-semibold text-gray-700 mb-2">{status}</h3>
              <p className="text-3xl font-bold text-[#4A5D8A]">0</p>
            </div>
          ))}
        </div>

        {/* Primary Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to="/author/submit"
            className="bg-[#4A5D8A] text-white py-4 px-6 rounded-lg text-center font-medium hover:bg-[#3A4D7A] shadow-md hover:shadow-xl"
          >
            Submit New Manuscript
          </Link>
          <Link
            to="/author/track"
            className="bg-[#4A5D8A] text-white py-4 px-6 rounded-lg text-center font-medium hover:bg-[#3A4D7A] shadow-md hover:shadow-xl"
          >
            Track Submission
          </Link>
          <Link
            to="/author/payment"
            className="bg-[#4A5D8A] text-white py-4 px-6 rounded-lg text-center font-medium hover:bg-[#3A4D7A] shadow-md hover:shadow-xl"
          >
            Make Payment
          </Link>
        </div>

        {/* Recent Notifications Panel */}
        <div className="mt-12 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Notifications</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Your manuscript titled "AI in Education" has been submitted.</li>
            <li>Editor has requested minor revisions for Manuscript #1024.</li>
            <li>Payment for Valet submission is confirmed.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
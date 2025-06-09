// src/pages/reviewer/Dashboard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, User, Clock } from 'lucide-react';

const ReviewerDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#B8CDD9] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with title and quick access icons */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-semibold text-gray-800">Reviewer Dashboard</h1>
          <div className="flex items-center space-x-6">
            <Link to="/reviewer/review-history" className="text-gray-700 hover:text-[#4A5D8A] flex items-center space-x-1">
              <Clock size={20} />
              <span className="text-sm font-medium">History</span>
            </Link>
            <Link to="/reviewer/notifications" className="text-gray-700 hover:text-[#4A5D8A] flex items-center space-x-1">
              <Bell size={20} />
              <span className="text-sm font-medium">Notifications</span>
            </Link>
            <Link to="/reviewer/edit-profile" className="text-gray-700 hover:text-[#4A5D8A] flex items-center space-x-1">
              <User size={20} />
              <span className="text-sm font-medium">Profile</span>
            </Link>
          </div>
        </div>

        {/* Status Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md text-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Invited Reviews</h3>
            <p className="text-3xl font-bold text-[#4A5D8A]">0</p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md text-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Accepted Reviews</h3>
            <p className="text-3xl font-bold text-[#4A5D8A]">0</p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md text-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Pending Deadlines</h3>
            <p className="text-3xl font-bold text-[#4A5D8A]">0</p>
          </div>
        </div>

        {/* Quick Access Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link
            to="/reviewer/invitations"
            className="bg-[#4A5D8A] text-white py-4 px-6 rounded-lg text-center font-medium hover:bg-[#3A4D7A] shadow-md hover:shadow-xl"
          >
            Review Invitations
          </Link>
          <Link
            to="/reviewer/assigned"
            className="bg-[#4A5D8A] text-white py-4 px-6 rounded-lg text-center font-medium hover:bg-[#3A4D7A] shadow-md hover:shadow-xl"
          >
            Assigned Manuscripts
          </Link>
          <Link
            to="/reviewer/review-history"
            className="bg-[#4A5D8A] text-white py-4 px-6 rounded-lg text-center font-medium hover:bg-[#3A4D7A] shadow-md hover:shadow-xl"
          >
            Review History
          </Link>
        </div>

        {/* Recent Activity Log */}
        <div className="mt-12 bg-white/90 p-6 rounded-xl shadow-md max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>✅ Accepted review for Manuscript #2312 – 2 days ago</li>
            <li>📥 Received review invitation for Manuscript #2451</li>
            <li>⚠️ Review due tomorrow for Manuscript #2015</li>
          </ul>
        </div>

        {/* Reviewer Help Links */}
        <div className="mt-10 text-center text-sm text-gray-600">
          <p>
            Need help reviewing?{' '}
            <Link to="/reviewer/guidelines" className="text-[#4A5D8A] font-medium hover:underline">
              See Reviewer Guidelines
            </Link>
          </p>
        </div>

        {/* Feedback */}
        <div className="mt-6 text-center">
          <button className="text-sm text-[#4A5D8A] underline hover:text-[#3A4D7A]">
            Provide Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewerDashboard;

// src/pages/editor/EditorDashboard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, User, FileText } from 'lucide-react';

const EditorDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#B8CDD9] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with title and quick access icons */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-semibold text-gray-800">Editor Dashboard</h1>
          <div className="flex items-center space-x-6">
            <Link to="/editor/notifications" className="text-gray-700 hover:text-[#4A5D8A] flex items-center space-x-1">
              <Bell size={20} />
              <span className="text-sm font-medium">Notifications</span>
            </Link>
            <Link to="/editor/edit-profile" className="text-gray-700 hover:text-[#4A5D8A] flex items-center space-x-1">
              <User size={20} />
              <span className="text-sm font-medium">Profile</span>
            </Link>
          </div>
        </div>

        {/* Status Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md text-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Assigned Manuscripts</h3>
            <p className="text-3xl font-bold text-[#4A5D8A]">5</p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md text-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Pending Decisions</h3>
            <p className="text-3xl font-bold text-[#4A5D8A]">3</p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md text-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Reviewer Feedbacks</h3>
            <p className="text-3xl font-bold text-[#4A5D8A]">4</p>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to="/editor/assigned"
            className="bg-[#4A5D8A] text-white py-4 px-6 rounded-lg text-center font-medium hover:bg-[#3A4D7A] shadow-md hover:shadow-xl"
          >
            View Assigned Manuscripts
          </Link>
          <Link
            to="/editor/assign-reviewers"
            className="bg-[#4A5D8A] text-white py-4 px-6 rounded-lg text-center font-medium hover:bg-[#3A4D7A] shadow-md hover:shadow-xl"
          >
            Assign Reviewers
          </Link>
          <Link
            to="/editor/create-conference"
            className="bg-[#4A5D8A] text-white py-4 px-6 rounded-lg text-center font-medium hover:bg-[#3A4D7A] shadow-md hover:shadow-xl"
          >
            Create Conference Call
          </Link>
        </div>
        

        {/* Notifications Panel */}
        <div className="mt-12 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Latest Notifications</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                <li>AI report is ready for Manuscript #4532.</li>
                <li>Reviewer feedback received for Manuscript #3120.</li>
                <li>Reminder: Editorial decision pending for Manuscript #2879.</li>
            </ul>
        </div>

      </div>
    </div>
  );
};

export default EditorDashboard;

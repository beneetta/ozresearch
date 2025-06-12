// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#B8CDD9] flex flex-col">
      

      {/* Page Content */}
      <div className="flex flex-col items-center justify-center flex-1 px-4">
        <h2 className="text-white text-4xl md:text-5xl font-light text-center mb-16 max-w-4xl leading-relaxed">
          Submit. Review. Collaborate
        </h2>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {/* Author Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">AUTHOR</h3>
            <p className="text-gray-600 mb-8 text-sm">
              Submit your original research papers and track their progress through the review process. As an Author, you can upload manuscripts, view feedback, and manage revisions directly within the portal.
            </p>
            <div className="space-y-4">
              <Link to="/register?role=author" className="block w-full bg-[#4A5D8A] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#3A4D7A] transition-colors duration-200">
                REGISTER
              </Link>
              <Link to="/login?role=author" className="block w-full bg-[#4A5D8A] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#3A4D7A] transition-colors duration-200">
                LOGIN
              </Link>
              <Link to="/author/dashboard" className="block w-full bg-[#2C3E50] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#1A2C3E] transition-colors duration-200">
                VIEW DASHBOARD
              </Link>
            </div>
          </div>

          {/* Reviewer Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">REVIEWER</h3>
            <p className="text-gray-600 mb-8 text-sm">
              Participate in the peer-review process by evaluating submitted manuscripts. As a Reviewer, you provide valuable feedback, ensure academic quality, and help maintain the integrity of published research.
            </p>
            <div className="space-y-4">
              <Link to="/register?role=reviewer" className="block w-full bg-[#4A5D8A] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#3A4D7A] transition-colors duration-200">
                REGISTER
              </Link>
              <Link to="/login?role=reviewer" className="block w-full bg-[#4A5D8A] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#3A4D7A] transition-colors duration-200">
                LOGIN
              </Link>
              <Link to="/reviewer/dashboard" className="block w-full bg-[#2C3E50] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#1A2C3E] transition-colors duration-200">
                VIEW DASHBOARD
              </Link>
            </div>
          </div>

          {/* Editor Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">EDITOR</h3>
            <p className="text-gray-600 mb-8 text-sm">
              Oversee manuscript submissions, assign reviewers, and make publication decisions. As an Editor, you manage the end-to-end workflow of academic publishing, ensuring timely and high-quality output.
            </p>
            <div className="space-y-4">
              <Link to="/register?role=editor" className="block w-full bg-[#4A5D8A] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#3A4D7A] transition-colors duration-200">
                REGISTER
              </Link>
              <Link to="/login?role=editor" className="block w-full bg-[#4A5D8A] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#3A4D7A] transition-colors duration-200">
                LOGIN
              </Link>
              <Link to="/editor/dashboard" className="block w-full bg-[#2C3E50] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#1A2C3E] transition-colors duration-200">
                VIEW DASHBOARD
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

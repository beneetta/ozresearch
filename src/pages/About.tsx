// src/pages/About.tsx

import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#B8CDD9] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
          <h1 className="text-4xl font-light text-gray-800 text-center mb-8">About OZRESEARCH PORTAL</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-xl leading-relaxed">
              OZRESEARCH PORTAL is a comprehensive platform designed to streamline the academic publishing process, 
              connecting authors, reviewers, and editors in a collaborative environment.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#4A5D8A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">A</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Authors</h3>
                <p className="text-gray-600">Submit and manage your manuscripts with ease</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#4A5D8A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">R</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Reviewers</h3>
                <p className="text-gray-600">Provide expert peer review and feedback</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#4A5D8A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">E</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Editors</h3>
                <p className="text-gray-600">Oversee the editorial process efficiently</p>
              </div>
            </div>
            
            <p className="text-lg leading-relaxed">
              Our mission is to facilitate high-quality research publication through innovative technology 
              and user-friendly interfaces, making the academic publishing process more efficient and transparent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
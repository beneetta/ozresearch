// src/pages/editor/EditProfile.tsx
import React, { useState } from 'react';

const EditorEditProfile: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    expertise: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Editor Profile Updated:', formData);
    // Add API integration here
  };

  return (
    <div className="min-h-screen bg-[#B8CDD9] py-12 px-4 flex items-center justify-center">
      <div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-xl w-full max-w-2xl">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Edit Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:bg-white focus:ring-2 focus:ring-[#4A5D8A] placeholder-gray-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:bg-white focus:ring-2 focus:ring-[#4A5D8A] placeholder-gray-500"
            required
          />
          <input
            type="text"
            name="institution"
            placeholder="Institution"
            value={formData.institution}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:bg-white focus:ring-2 focus:ring-[#4A5D8A] placeholder-gray-500"
          />
          <input
            type="text"
            name="expertise"
            placeholder="Expertise Area"
            value={formData.expertise}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:bg-white focus:ring-2 focus:ring-[#4A5D8A] placeholder-gray-500"
          />
          <button
            type="submit"
            className="w-full bg-[#4A5D8A] text-white py-3 rounded-lg font-medium hover:bg-[#3A4D7A] shadow-md hover:shadow-lg"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditorEditProfile;

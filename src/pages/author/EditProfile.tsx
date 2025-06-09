// src/pages/author/EditProfile.tsx
import React, { useState } from 'react';

const EditProfile: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    affiliation: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updated Profile:', formData);
    // TODO: Implement update logic (API call)
  };

  return (
    <div className="min-h-screen bg-[#B8CDD9] flex items-center justify-center px-4 py-8">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 w-full max-w-xl shadow-2xl">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">Edit Profile</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#4A5D8A]"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#4A5D8A]"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#4A5D8A]"
            required
          />
          <input
            type="text"
            name="affiliation"
            value={formData.affiliation}
            onChange={handleChange}
            placeholder="Institution / Affiliation"
            className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#4A5D8A]"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#4A5D8A] text-white py-3 rounded-lg font-medium hover:bg-[#3A4D7A] transition duration-200"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;

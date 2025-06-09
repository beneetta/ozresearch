// src/pages/reviewer/EditProfile.tsx
import React, { useState } from 'react';

const EditProfile: React.FC = () => {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    institution: 'RMIT University',
    expertise: 'Computer Science, AI',
    phone: '+61 123 456 789',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updated Profile:', formData);
    alert('Profile updated successfully!');
  };

  return (
    <div className="min-h-screen bg-[#B8CDD9] py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Edit Profile</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5D8A]"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5D8A]"
            required
          />

          <input
            type="text"
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            placeholder="Institution"
            className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5D8A]"
          />

          <textarea
            name="expertise"
            value={formData.expertise}
            onChange={handleChange}
            placeholder="Areas of Expertise (comma-separated)"
            rows={3}
            className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5D8A]"
          />

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Contact Number"
            className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5D8A]"
          />

          <button
            type="submit"
            className="w-full bg-[#4A5D8A] text-white py-3 rounded-lg font-medium hover:bg-[#3A4D7A] shadow hover:shadow-lg"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;

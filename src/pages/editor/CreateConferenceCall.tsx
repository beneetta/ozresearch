import React, { useState } from 'react';

const CreateConference: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    location: '',
    topics: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Conference Call Data:', formData);
    // Submit logic here
  };

  return (
    <div className="min-h-screen bg-[#B8CDD9] py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Create Conference Call</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Conference Name"
            className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#4A5D8A]"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#4A5D8A]"
            required
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#4A5D8A]"
            required
          />
          <input
            type="text"
            name="topics"
            value={formData.topics}
            onChange={handleChange}
            placeholder="Topics (comma-separated)"
            className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#4A5D8A]"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            rows={5}
            className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#4A5D8A]"
          />
          <button
            type="submit"
            className="w-full bg-[#4A5D8A] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#3A4D7A] transition-colors"
          >
            Create Call
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateConference;

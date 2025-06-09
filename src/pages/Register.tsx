// File: src/pages/Register.tsx
import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const Register: React.FC = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role') || 'author';
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    role: role,
    institution: '',
    editor: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    // Handle registration logic here
  };

  return (
    <div className="min-h-screen bg-[#B8CDD9] flex items-center justify-center px-4 py-8">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 w-full max-w-2xl shadow-2xl">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">REGISTER</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#4A5D8A] transition-all duration-200 placeholder-gray-500"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#4A5D8A] transition-all duration-200 placeholder-gray-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#4A5D8A] transition-all duration-200 placeholder-gray-500"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#4A5D8A] transition-all duration-200 placeholder-gray-500"
                required
              />
            </div>
          </div>

          <div>
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#4A5D8A] transition-all duration-200 text-gray-700"
              required
            >
              <option value="">Select your Role</option>
              <option value="author">Author</option>
              <option value="reviewer">Reviewer</option>
              <option value="editor">Editor</option>
            </select>
          </div>

          <div>
            <input
              type="text"
              name="institution"
              placeholder="Institution"
              value={formData.institution}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#4A5D8A] transition-all duration-200 placeholder-gray-500"
              required
            />
          </div>

          <div>
            <input
              type="text"
              name="editor"
              placeholder="Editor"
              value={formData.editor}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#4A5D8A] transition-all duration-200 placeholder-gray-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#4A5D8A] text-white py-4 px-6 rounded-lg font-medium hover:bg-[#3A4D7A] transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            REGISTER
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link 
              to={`/login?role=${role}`}
              className="text-[#4A5D8A] hover:text-[#3A4D7A] font-medium transition-colors duration-200"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
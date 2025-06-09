// src/pages/Login.tsx
import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role') || 'author';

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login data:', formData);
    // TODO: Handle actual login logic
  };

  return (
    <div className="min-h-screen bg-[#B8CDD9] flex flex-col">
      
    

      {/* Login Form Section */}
      <div className="flex items-center justify-center px-4 py-8 flex-1">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md shadow-2xl">
          <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">LOGIN</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#4A5D8A] transition-all duration-200 placeholder-gray-500"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#4A5D8A] transition-all duration-200 placeholder-gray-500"
              required
            />

            <button
              type="submit"
              className="w-full bg-[#4A5D8A] text-white py-4 px-6 rounded-lg font-medium hover:bg-[#3A4D7A] transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              LOGIN
            </button>
          </form>

          <div className="mt-6 text-center space-y-3">
            <Link 
              to="/forgot-password"
              className="block text-[#4A5D8A] hover:text-[#3A4D7A] font-medium transition-colors duration-200"
            >
              Forgot Password?
            </Link>

            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link 
                to={`/register?role=${role}`}
                className="text-[#4A5D8A] hover:text-[#3A4D7A] font-medium transition-colors duration-200"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;




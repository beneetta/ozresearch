import React, { useState } from 'react';

const SubmitManuscript: React.FC = () => {
  const [formData, setFormData] = useState({
    submissionType: '',
    title: '',
    abstract: '',
    keywords: '',
    coAuthors: '',
    file: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        file: e.target.files![0]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Manuscript Submission:', formData);
    alert('Submission successful (mock)!');
  };

  return (
    <div className="min-h-screen bg-[#B8CDD9] flex items-center justify-center px-4 py-8">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 w-full max-w-3xl shadow-2xl">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">Submit New Manuscript</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Submission Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Submission Type</label>
            <select
              name="submissionType"
              value={formData.submissionType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#4A5D8A]"
            >
              <option value="">Select Type</option>
              <option value="standard">Standard</option>
              <option value="valet">Valet</option>
            </select>
          </div>

          {/* Title */}
          <div>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#4A5D8A]"
            />
          </div>

          {/* Abstract */}
          <div>
            <textarea
              name="abstract"
              placeholder="Abstract"
              value={formData.abstract}
              onChange={handleChange}
              rows={4}
              required
              className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#4A5D8A]"
            />
          </div>

          {/* Keywords */}
          <div>
            <input
              type="text"
              name="keywords"
              placeholder="Keywords (comma separated)"
              value={formData.keywords}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#4A5D8A]"
            />
          </div>

          {/* Co-Authors */}
          <div>
            <input
              type="text"
              name="coAuthors"
              placeholder="Co-authors (comma separated)"
              value={formData.coAuthors}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#4A5D8A]"
            />
          </div>

          {/* Upload File */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Manuscript</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
              className="w-full bg-white rounded-lg border p-2 text-gray-700"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#4A5D8A] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#3A4D7A] transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Submit Manuscript
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitManuscript;

import React from 'react';

const AIReport: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#B8CDD9] py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">AI Report Summary</h1>

        <div className="space-y-6">
          {/* Plagiarism Check */}
          <div className="p-6 rounded-lg bg-[#F8FAFC] shadow-md">
            <h2 className="text-xl font-semibold text-[#4A5D8A] mb-2">Plagiarism Detection</h2>
            <p className="text-gray-700">Plagiarism score: <span className="font-bold">12%</span></p>
            <p className="text-gray-600 text-sm mt-1">Minor overlap with previously published work. Acceptable range.</p>
          </div>

          {/* Formatting Check */}
          <div className="p-6 rounded-lg bg-[#F8FAFC] shadow-md">
            <h2 className="text-xl font-semibold text-[#4A5D8A] mb-2">Formatting Analysis</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Font and margin settings are compliant</li>
              <li>Reference style: APA (Consistent)</li>
              <li>Figures and tables are captioned appropriately</li>
            </ul>
          </div>

          {/* AI Suggestions */}
          <div className="p-6 rounded-lg bg-[#F8FAFC] shadow-md">
            <h2 className="text-xl font-semibold text-[#4A5D8A] mb-2">AI Suggestions</h2>
            <p className="text-gray-700">
              Consider improving abstract clarity. Some sections of the discussion are overly technical and could benefit from simpler language for a broader readership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIReport;

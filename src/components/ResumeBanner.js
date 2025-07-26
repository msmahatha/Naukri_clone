import React from 'react';

const ResumeBanner = () => {
  return (
    <div className="mt-10 max-w-4xl mx-auto p-6 rounded-lg flex items-center justify-between" style={{ background: 'linear-gradient(to right, #E0F3F3, #D4F1F1)' }}>
      <div>
        <h3 className="font-bold text-xl text-gray-800">Need help with your resume?</h3>
        <p className="text-gray-700 text-sm">Get experts to build your resume from scratch</p>
        <button className="mt-4 bg-white text-blue-600 font-semibold py-2 px-5 rounded-full border border-gray-300 hover:bg-gray-50 text-sm transition-colors">
          View details
        </button>
      </div>
      <div className="flex items-center">
        <img 
          src="https://static.naukimg.com/s/5/105/i/naukri-360.png" 
          alt="Naukri 360" 
          className="h-8 mr-4"
          onError={(e) => { e.target.style.display = 'none' }}
        />
        <img 
          src="https://static.naukimg.com/s/5/105/i/resume-services.png" 
          alt="Resume Illustration" 
          className="h-20"
          onError={(e) => { e.target.style.display = 'none' }}
        />
      </div>
    </div>
  );
};

export default ResumeBanner;
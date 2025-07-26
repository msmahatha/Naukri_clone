import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  return (
    <div className="text-center py-10 md:py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
        Find your dream job now
      </h1>
      <p className="text-gray-600 mb-8">
        5 lakh+ jobs for you to explore
      </p>

      {/* Search Bar */}
      <div className="bg-white p-2 rounded-full shadow-lg max-w-4xl mx-auto">
        <form className="grid grid-cols-1 md:grid-cols-12 items-center gap-y-4 md:gap-y-0 md:gap-x-2 p-2 md:p-0">
          
          {/* Skill/Designation/Company Search */}
          <div className="md:col-span-5 flex items-center px-3">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
            <input 
              type="text" 
              placeholder="Enter skills / designations / companies" 
              className="w-full bg-transparent focus:outline-none text-sm ml-3"
            />
          </div>

          {/* Experience Dropdown */}
          <div className="w-full md:col-span-3 flex items-center md:border-l md:border-gray-200 px-3">
            <select className="w-full bg-transparent focus:outline-none text-sm appearance-none text-gray-700 cursor-pointer">
              <option value="">Select experience</option>
              <option value="0">Fresher</option>
              <option value="1">1 Year</option>
              <option value="2">2 Years</option>
              <option value="3">3+ Years</option>
            </select>
          </div>

          {/* Location Search */}
          <div className="w-full md:col-span-2 flex items-center md:border-l md:border-gray-200 px-3">
            <input 
              type="text" 
              placeholder="Enter location" 
              className="w-full bg-transparent focus:outline-none text-sm"
            />
          </div>

          {/* Search Button */}
          <div className="w-full md:col-span-2">
            <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2.5 px-6 rounded-full hover:bg-blue-600 transition-colors">
              Search
            </button>
          </div>
        </form>
      </div>
       <p className="text-center text-sm text-gray-500 mt-4">
          <span className="font-semibold">Trending searches:</span> software, internship, sales, marketing
        </p>
    </div>
  );
};

export default HeroSection;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBriefcase, faRupeeSign } from '@fortawesome/free-solid-svg-icons';

const JobCard = ({ job }) => {
  // Function to format the salary display
  const formatSalary = (salary) => {
    if (!salary || !salary.min || !salary.max) {
      return 'Not Disclosed';
    }
    return `₹ ${salary.min} - ${salary.max} LPA`;
  };

  // Function to create a snippet of the description
  const getDescriptionSnippet = (description) => {
    if (!description) return '';
    return description.length > 100 ? description.substring(0, 100) + '...' : description;
  };

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-start">
        {/* We can add a company logo here in the future */}
        {/* <img src={job.companyLogo} alt={job.company} className="w-12 h-12 mr-4" /> */}
        <div className="flex-grow">
          <h3 className="font-bold text-lg text-gray-800">{job.title}</h3>
          <p className="text-sm text-gray-600">{job.company}</p>
          
          <div className="flex flex-wrap items-center text-xs text-gray-500 mt-2">
            <span className="mr-4 flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1.5" /> {job.location}
            </span>
            <span className="mr-4 flex items-center">
              <FontAwesomeIcon icon={faBriefcase} className="mr-1.5" /> {job.experience}
            </span>
            <span className="flex items-center">
              <FontAwesomeIcon icon={faRupeeSign} className="mr-1.5" /> {formatSalary(job.salary)}
            </span>
          </div>

          <p className="text-sm text-gray-600 mt-3">{getDescriptionSnippet(job.description)}</p>

          <div className="mt-3">
            {job.requirements.slice(0, 3).map((req, index) => (
              <span key={index} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
                {req}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

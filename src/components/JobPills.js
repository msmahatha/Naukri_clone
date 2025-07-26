import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBuilding, faGraduationCap, faCogs, faChartPie, faTasks, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const JobPills = () => {
  const pills = [
    { name: 'Remote', icon: faGlobe },
    { name: 'MNC', icon: faBuilding },
    { name: 'Internship', icon: faGraduationCap },
    { name: 'Engineering', icon: faCogs },
    { name: 'Analytics', icon: faChartPie },
    { name: 'Project Mg...', icon: faTasks },
  ];

  return (
    <div className="mt-8 mb-4 max-w-5xl mx-auto">
      <div className="flex flex-wrap justify-center gap-3">
        {pills.map((pill) => (
          <a
            key={pill.name}
            href="/#"
            className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:shadow-md transition-all flex items-center"
          >
            <FontAwesomeIcon icon={pill.icon} className="mr-2 text-gray-500" />
            {pill.name}
            <FontAwesomeIcon icon={faChevronRight} className="text-xs ml-2 text-gray-400" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default JobPills;

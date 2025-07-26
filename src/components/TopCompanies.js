import React from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TopCompanies = () => {
  const companyCategories = [
    {
      name: 'MNCs',
      count: '2.2k+',
      logos: [
        'https://img.naukimg.com/logo_images/groups/v2/13506.gif',
        'https://img.naukimg.com/logo_images/groups/v2/457770.gif',
        'https://img.naukimg.com/logo_images/groups/v2/1288922.gif',
        'https://img.naukimg.com/logo_images/groups/v2/36756.gif',
      ],
    },
    {
      name: 'Edtech',
      count: '164',
      logos: [
        'https://img.naukimg.com/logo_images/groups/v2/116312.gif',
        'https://img.naukimg.com/logo_images/groups/v2/4603328.gif',
        'https://img.naukimg.com/logo_images/groups/v2/118620.gif',
        'https://img.naukimg.com/logo_images/groups/v2/209664.gif',
      ],
    },
    {
      name: 'Healthcare',
      count: '625',
      logos: [
        'https://img.naukimg.com/logo_images/groups/v2/48220.gif',
        'https://img.naukimg.com/logo_images/groups/v2/10338.gif',
        'https://img.naukimg.com/logo_images/groups/v2/43932.gif',
        'https://img.naukimg.com/logo_images/groups/v2/155942.gif',
      ],
    },
    {
      name: 'Unicorns',
      count: '95',
      logos: [
        'https://img.naukimg.com/logo_images/groups/v2/152692.gif',
        'https://img.naukimg.com/logo_images/groups/v2/499794.gif',
        'https://img.naukimg.com/logo_images/groups/v2/152988.gif',
        'https://img.naukimg.com/logo_images/groups/v2/128322.gif',
      ],
    },
    {
        name: 'Internet',
        count: '253',
        logos: [
           'https://img.naukimg.com/logo_images/groups/v2/115482.gif',
           'https://img.naukimg.com/logo_images/groups/v2/14102.gif',
           'https://img.naukimg.com/logo_images/groups/v2/152692.gif',
           'https://img.naukimg.com/logo_images/groups/v2/499794.gif',
        ],
      },
  ];

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
        Top companies hiring now
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {companyCategories.map((category) => (
          <a
            key={category.name}
            href="/#"
            className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-gray-800">
                {category.name} <FontAwesomeIcon icon={faChevronRight} className="text-xs ml-1" />
              </h3>
              <p className="text-xs text-gray-500">{category.count} are actively hiring</p>
            </div>
            <div className="flex space-x-2">
              {category.logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`${category.name} logo ${index + 1}`}
                  className="h-8 w-8 object-contain border rounded-md p-1 bg-white"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TopCompanies;

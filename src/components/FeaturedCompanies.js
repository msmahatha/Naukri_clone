import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeaturedCompanies = () => {
  const featuredCompanies = [
    {
      name: 'FIS',
      logo: 'https://img.naukimg.com/logo_images/v2/11356.gif',
      rating: '3.9',
      reviews: '8k+',
      description: 'Global leader in financial technology.',
    },
    {
      name: 'ICICI Bank',
      logo: 'https://img.naukimg.com/logo_images/v2/457770.gif',
      rating: '4.0',
      reviews: '42.6k+',
      description: 'Leading private sector bank in India.',
    },
    {
      name: 'Genpact',
      logo: 'https://img.naukimg.com/logo_images/v2/13506.gif',
      rating: '3.7',
      reviews: '36.6k+',
      description: 'Global professional services firm.',
    },
    {
      name: 'Infosys',
      logo: 'https://img.naukimg.com/logo_images/v2/4431.gif',
      rating: '3.6',
      reviews: '63.6k+',
      description: 'Global leader in next-gen digital services.',
    },
    {
      name: 'Coforge',
      logo: 'https://img.naukimg.com/logo_images/v2/93134.gif',
      rating: '3.3',
      reviews: '4.1k+',
      description: 'Global digital services and solutions partner.',
    },
  ];

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
        Featured companies actively hiring
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {featuredCompanies.map((company) => (
          <a
            key={company.name}
            href="/#"
            className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all text-center"
          >
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="h-10 mx-auto mb-4 object-contain"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
            <h3 className="font-bold text-gray-800">{company.name}</h3>
            <p className="text-sm text-yellow-500 my-1">
              <FontAwesomeIcon icon={faStar} className="mr-1" />
              {company.rating}
              <span className="text-gray-500 ml-2">| {company.reviews} reviews</span>
            </p>
            <p className="text-xs text-gray-600 mt-2">{company.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCompanies;
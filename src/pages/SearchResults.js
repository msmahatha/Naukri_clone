import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../utils/api'; // Import the new api utility
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobCard from '../components/JobCard';

// Re-using the skeleton loader logic by defining it here
const JobCardSkeleton = () => (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 rounded"></div>
            <div className="h-3 bg-gray-200 rounded w-5/6"></div>
          </div>
          <div className="flex pt-4 space-x-2">
              <div className="h-5 bg-gray-200 rounded-full w-16"></div>
              <div className="h-5 bg-gray-200 rounded-full w-20"></div>
          </div>
        </div>
      </div>
    </div>
);

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const query = searchParams.get('q');
  const location = searchParams.get('location');

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Use the 'api' instance now. The URL is just the endpoint.
        const res = await api.get(`/jobs/search`, {
          params: { q: query, location: location }
        });

        setJobs(res.data);
      } catch (err) {
        console.error("Failed to fetch search results", err);
        setError("Could not load search results. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query, location]);

  const renderContent = () => {
    if (loading) {
      return Array.from({ length: 4 }).map((_, index) => (
        <JobCardSkeleton key={index} />
      ));
    }

    if (error) {
      return <p className="text-red-500 col-span-1 md:col-span-2 text-center">{error}</p>;
    }

    if (jobs.length > 0) {
      return jobs.map(job => <JobCard key={job._id} job={job} />);
    }

    return <p className="col-span-1 md:col-span-2 text-center">No jobs found matching your criteria.</p>;
  };

  return (
    <div className="bg-gray-50 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Search Results
        </h1>
        <p className="text-gray-600 mb-8">
          Showing results for {query && `"${query}"`} {location && `in "${location}"`}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchResults;
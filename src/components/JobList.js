import React, { useState, useEffect } from 'react';
import api from '../utils/api'; // Import the new api utility
import JobCard from './JobCard';

// A skeleton component to show while loading
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


const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setError(null);
        // Use the 'api' instance now. The URL is just the endpoint.
        const res = await api.get('/jobs');
        setJobs(res.data);
      } catch (err) {
        console.error("Failed to fetch jobs", err);
        setError("Failed to load job listings. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

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

    return <p className="col-span-1 md:col-span-2 text-center">No job openings found at the moment.</p>;
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
        Recent Job Openings
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default JobList;
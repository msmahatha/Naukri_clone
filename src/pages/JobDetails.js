import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../utils/api'; // Import the new api utility
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBriefcase, faRupeeSign, faClock } from '@fortawesome/free-solid-svg-icons';

const JobDetails = () => {
  const { id } = useParams(); // Get job ID from URL
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        // Use the 'api' instance now. The URL is just the endpoint.
        const res = await api.get(`/jobs/${id}`);
        setJob(res.data);
      } catch (err) {
        console.error("Failed to fetch job details", err);
        setError("Job not found or an error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  const formatSalary = (salary) => {
    if (!salary || !salary.min || !salary.max) return 'Not Disclosed';
    return `₹ ${salary.min} - ${salary.max} LPA`;
  };

  if (loading) {
    return (
        <div className="flex justify-center items-center h-screen">
            <p>Loading...</p>
        </div>
    );
  }

  if (error) {
    return (
        <div className="flex justify-center items-center h-screen">
            <p className="text-red-500">{error}</p>
        </div>
    );
  }

  return (
    <div className="bg-gray-50 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        {job && (
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-gray-800">{job.title}</h1>
            <p className="text-xl text-gray-600 mt-1">{job.company}</p>

            <div className="flex flex-wrap items-center text-gray-500 mt-4 border-t border-b py-4">
              <span className="mr-6 my-1 flex items-center"><FontAwesomeIcon icon={faBriefcase} className="mr-2" /> {job.experience}</span>
              <span className="mr-6 my-1 flex items-center"><FontAwesomeIcon icon={faRupeeSign} className="mr-2" /> {formatSalary(job.salary)}</span>
              <span className="my-1 flex items-center"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> {job.location}</span>
            </div>
            
            <div className="mt-6">
                <h3 className="font-bold text-lg text-gray-800 mb-2">Job Description</h3>
                <p className="text-gray-700 whitespace-pre-wrap">{job.description}</p>
            </div>

            <div className="mt-6">
                <h3 className="font-bold text-lg text-gray-800 mb-2">Key Requirements</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-6 text-sm text-gray-500">
                <p><span className="font-semibold">Job Type:</span> {job.jobType}</p>
                <p className="flex items-center mt-1"><FontAwesomeIcon icon={faClock} className="mr-2" /> Posted on: {new Date(job.date).toLocaleDateString()}</p>
            </div>
            
            <div className="mt-8 text-center">
                <button className="bg-blue-600 text-white font-bold py-3 px-10 rounded-full hover:bg-blue-700 transition-colors">
                    Apply Now
                </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default JobDetails;


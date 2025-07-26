import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { toast } from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PostJob = () => {
  const navigate = useNavigate(); // Removed unused token from context

  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
    requirements: '', // Will be split into an array
    experience: '',
    salary: {
      min: '',
      max: '',
    },
    jobType: 'Full-time',
  });

  const { title, company, location, description, requirements, experience, salary, jobType } = formData;

  const onChange = (e) => {
    if (e.target.name === 'min' || e.target.name === 'max') {
        setFormData({ ...formData, salary: { ...salary, [e.target.name]: e.target.value } });
    } else {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const jobData = {
        ...formData,
        requirements: requirements.split(',').map(req => req.trim()), // Convert comma-separated string to array
      };

      await api.post('/jobs', jobData);
      
      toast.success('Job posted successfully!');
      navigate('/');

    } catch (err) {
      const errorMessage = err.response?.data?.msg || 'Failed to post job.';
      toast.error(errorMessage);
    }
  };

  return (
    <div className="bg-gray-50 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Post a New Job</h1>
          <form onSubmit={onSubmit} className="space-y-6">
            {/* Job Title and Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Job Title</label>
                <input type="text" name="title" value={title} onChange={onChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
                <input type="text" name="company" value={company} onChange={onChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>

            {/* Location and Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                    <input type="text" name="location" value={location} onChange={onChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience Required (e.g., 2-4 years)</label>
                    <input type="text" name="experience" value={experience} onChange={onChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
            </div>

            {/* Salary Range */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Salary Range (LPA)</label>
                <div className="mt-1 grid grid-cols-2 gap-4">
                    <input type="number" name="min" placeholder="Minimum" value={salary.min} onChange={onChange} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    <input type="number" name="max" placeholder="Maximum" value={salary.max} onChange={onChange} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
            </div>

            {/* Job Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Job Description</label>
              <textarea name="description" value={description} onChange={onChange} required rows="6" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>

            {/* Requirements */}
            <div>
              <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">Key Requirements (comma-separated)</label>
              <input type="text" name="requirements" value={requirements} onChange={onChange} required placeholder="e.g., React, Node.js, MongoDB" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>

            {/* Job Type */}
            <div>
                <label htmlFor="jobType" className="block text-sm font-medium text-gray-700">Job Type</label>
                <select name="jobType" value={jobType} onChange={onChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Internship</option>
                </select>
            </div>

            {/* Submit Button */}
            <div className="text-right">
              <button type="submit" className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Post Job
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PostJob;
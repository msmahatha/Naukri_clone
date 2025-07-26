import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CompleteProfile = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    headline: '',
    education: '',
    university: '',
    city: '',
    skills: '', // Will be a comma-separated string in the form
  });

  useEffect(() => {
    // Pre-fill the form with existing user profile data
    if (user && user.profile) {
      setFormData({
        headline: user.profile.headline || '',
        education: user.profile.education || '',
        university: user.profile.university || '',
        city: user.profile.city || '',
        skills: user.profile.skills ? user.profile.skills.join(', ') : '',
      });
    }
  }, [user]);

  const { headline, education, university, city, skills } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const profileData = {
          ...formData,
          profileCompletion: 70 // Example: update completion status
      }

      const res = await api.put('/profile', profileData);

      // Update the user in our global context
      dispatch({
          type: 'USER_LOADED',
          payload: res.data
      });
      
      toast.success('Profile updated successfully!');
      navigate('/'); // Redirect to homepage

    } catch (err) {
      const errorMessage = err.response?.data?.msg || 'Failed to update profile.';
      toast.error(errorMessage);
    }
  };

  return (
    <div className="bg-gray-50 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Complete Your Profile</h1>
          <p className="text-gray-600 mb-6">Provide a few more details to get the most out of Naukri.</p>
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label htmlFor="headline" className="block text-sm font-medium text-gray-700">Profile Headline</label>
              <input type="text" name="headline" value={headline} onChange={onChange} placeholder="e.g., Full Stack Developer at XYZ Corp" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="education" className="block text-sm font-medium text-gray-700">Highest Qualification</label>
                    <input type="text" name="education" value={education} onChange={onChange} placeholder="e.g., B.Tech/B.E. Computers" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="university" className="block text-sm font-medium text-gray-700">University / College</label>
                    <input type="text" name="university" value={university} onChange={onChange} placeholder="e.g., Brainware University" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">Current City</label>
              <input type="text" name="city" value={city} onChange={onChange} placeholder="e.g., Kolkata" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Key Skills (comma-separated)</label>
              <input type="text" name="skills" value={skills} onChange={onChange} required placeholder="e.g., React, Node.js, MongoDB" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div className="text-right pt-4">
              <button type="submit" className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Save and Continue
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CompleteProfile;

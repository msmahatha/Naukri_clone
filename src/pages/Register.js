import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../utils/api'; // Import the new api utility
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUpload } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const { dispatch, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
    workStatus: 'experienced',
    city: '',
  });
  // eslint-disable-next-line no-unused-vars
  const [resume, setResume] = useState(null);
  const [resumeName, setResumeName] = useState('Upload Resume');

  const { name, email, password } = formData;

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      setResume(file);
      setResumeName(file.name);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
        toast.error('Password must be at least 6 characters');
        return;
    }
    const newUser = { name, email, password }; 
    try {
      // Use the 'api' instance now. The URL is just the endpoint.
      await api.post('/auth/register', newUser);
      
      toast.success('Registration successful! Please log in.');
      navigate('/login');
      
    } catch (err) {
      dispatch({ type: 'REGISTER_FAIL' });
      const errorMessage = err.response?.data?.msg || 'Registration failed. Please try again.';
      toast.error(errorMessage);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/">
                    <img src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" alt="Naukri" className="h-7" />
                </Link>
                <p className="text-sm">
                    Already Registered? <Link to="/login" className="font-bold text-blue-600 hover:text-blue-700">Login here</Link>
                </p>
            </div>
        </header>

        <main className="container mx-auto px-6 py-8">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl mx-auto grid md:grid-cols-12 gap-8">
                {/* Left Column */}
                <div className="md:col-span-4 md:border-r md:pr-8">
                    <div className="bg-white rounded-lg p-6 text-center">
                        <img src="https://static.naukimg.com/s/5/105/i/register.png" alt="Illustration" className="w-48 mx-auto mb-6" />
                        <h2 className="font-bold text-xl text-gray-800 mb-4">On registering, you can</h2>
                        <ul className="space-y-4 text-gray-700 text-left">
                            <li className="flex items-start">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3 mt-1 text-lg" />
                                <span>Build your profile and let recruiters find you</span>
                            </li>
                            <li className="flex items-start">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3 mt-1 text-lg" />
                                <span>Get job postings delivered right to your email</span>
                            </li>
                            <li className="flex items-start">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3 mt-1 text-lg" />
                                <span>Find a job and grow your career</span>
                            </li>
                        </ul>
                    </div>
                </div>


                {/* Right Column */}
                <div className="md:col-span-8 flex">
                    <div className="w-full lg:w-3/4">
                        <h1 className="text-2xl font-bold text-gray-800 mb-2">Create your Naukri profile</h1>
                        <p className="text-sm text-gray-600 mb-6">Search & apply to jobs from India's No.1 Job Site</p>
                        <form onSubmit={onSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Full name</label>
                                <input id="name" name="name" type="text" value={name} onChange={onChange} required placeholder="What is your name?" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email ID</label>
                                <input id="email" name="email" type="email" value={email} onChange={onChange} required placeholder="Tell us your Email ID" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
                                <input id="password" name="password" type="password" value={password} onChange={onChange} required placeholder="(Minimum 6 characters)" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                 <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 mb-1">Mobile number</label>
                                 <div className="flex">
                                    <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md">+91</span>
                                    <input type="tel" name="mobile" id="mobile" value={formData.mobile} onChange={onChange} placeholder="Enter your mobile number" className="w-full px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                 </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Work status</label>
                                <div className="grid grid-cols-2 gap-4">
                                   <label className={`p-4 border rounded-md cursor-pointer flex items-center ${formData.workStatus === 'experienced' ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-300'}`}>
                                       <img src="https://static.naukimg.com/s/5/105/i/briefcase.png" alt="experienced" className="w-8 h-8 mr-4" />
                                       <div>
                                           <input type="radio" name="workStatus" value="experienced" checked={formData.workStatus === 'experienced'} onChange={onChange} className="hidden" />
                                           <h4 className="font-bold">I'm experienced</h4>
                                           <p className="text-xs text-gray-500">I have work experience</p>
                                       </div>
                                   </label>
                                   <label className={`p-4 border rounded-md cursor-pointer flex items-center ${formData.workStatus === 'fresher' ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-300'}`}>
                                       <img src="https://static.naukimg.com/s/5/105/i/school.png" alt="fresher" className="w-8 h-8 mr-4" />
                                       <div>
                                           <input type="radio" name="workStatus" value="fresher" checked={formData.workStatus === 'fresher'} onChange={onChange} className="hidden" />
                                           <h4 className="font-bold">I'm a fresher</h4>
                                           <p className="text-xs text-gray-500">Haven't worked after graduation</p>
                                       </div>
                                   </label>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-1">Current city</label>
                                <input id="city" name="city" type="text" value={formData.city} onChange={onChange} placeholder="e.g., Mumbai" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Resume</label>
                                <label htmlFor="resume-upload" className="w-full flex items-center px-4 py-2 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                                    <FontAwesomeIcon icon={faUpload} className="text-blue-500 mr-3" />
                                    <span className="text-sm text-gray-600 truncate">{resumeName}</span>
                                </label>
                                <input id="resume-upload" name="resume" type="file" onChange={onFileChange} className="hidden" />
                                <p className="text-xs text-gray-500 mt-1">DOC, DOCx, PDF, RTF | Max: 2 MB</p>
                            </div>

                             <div className="flex items-center">
                                <input id="updates" name="updates" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                <label htmlFor="updates" className="ml-2 block text-sm text-gray-900">
                                    Send me important updates & promotions
                                </label>
                            </div>
                            <div className="pt-2">
                                <button type="submit" className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-full hover:bg-blue-600 transition-colors">
                                    Register now
                                </button>
                            </div>
                        </form>
                    </div>
                     <div className="w-full lg:w-1/4 pl-8 border-l flex flex-col items-center">
                        <span className="text-gray-400 text-xs mb-4">Or</span>
                        <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-full shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4 mr-2" />
                            Continue with Google
                        </button>
                    </div>
                </div>
            </div>
        </main>
        <footer className="py-6 text-center text-xs text-gray-600">
            <div className="space-x-4">
                <a href="/#" className="hover:text-blue-600">About Us</a>
                <a href="/#" className="hover:text-blue-600">Contact Us</a>
                <a href="/#" className="hover:text-blue-600">FAQs</a>
                <a href="/#" className="hover:text-blue-600">Terms and Conditions</a>
                <a href="/#" className="hover:text-blue-600">Report a Problem</a>
                <a href="/#" className="hover:text-blue-600">Privacy Policy</a>
            </div>
            <p className="mt-2">All rights reserved © 2025 Info Edge India Ltd.</p>
        </footer>
    </div>
  );
};

export default Register;
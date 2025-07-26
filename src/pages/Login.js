import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const { dispatch, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    try {
      const config = { headers: { 'Content-Type': 'application/json' } };
      const body = JSON.stringify(user);
      // *** THE FIX IS HERE: Port changed from 5000 to 8000 ***
      const res = await axios.post('http://localhost:8000/api/auth/login', body, config);
      
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
      toast.success('Logged in successfully!');
      navigate('/');

    } catch (err) {
      dispatch({ type: 'LOGIN_FAIL' });
      const errorMessage = err.response?.data?.msg || 'Login failed. Please try again.';
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
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#" className="text-gray-700 hover:text-blue-600 font-medium text-sm">Jobs</a>
            <a href="/#" className="text-gray-700 hover:text-blue-600 font-medium text-sm">Companies</a>
            <a href="/#" className="text-gray-700 hover:text-blue-600 font-medium text-sm">Services</a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="pr-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">New to Naukri?</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3 mt-1 text-lg" />
                <span>One click apply using naukri profile.</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3 mt-1 text-lg" />
                <span>Get relevant job recommendations.</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3 mt-1 text-lg" />
                <span>Showcase profile to top companies and consultants.</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3 mt-1 text-lg" />
                <span>Know application status on applied jobs.</span>
              </li>
            </ul>
            <Link to="/register">
              <button className="mt-8 w-full border border-blue-600 text-blue-600 font-bold py-3 px-4 rounded-full hover:bg-blue-50 transition-colors">
                Register for Free
              </button>
            </Link>
            <img src="https://static.naukimg.com/s/5/105/i/register.png" alt="Illustration" className="w-full mt-8" />
          </div>

          {/* Right Column */}
          <div className="bg-white p-8 rounded-lg shadow-2xl">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Login</h1>
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email ID / Username</label>
                <input id="email" name="email" type="email" value={email} onChange={onChange} required placeholder="Enter Email ID / Username" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
                <input id="password" name="password" type={showPassword ? 'text' : 'password'} value={password} onChange={onChange} required placeholder="Enter Password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 top-6 pr-3 flex items-center text-sm leading-5 text-blue-600 font-semibold">
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              <div className="text-right">
                <a href="/#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
              </div>
              <div>
                <button type="submit" className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-full hover:bg-blue-600 transition-colors">
                  Login
                </button>
              </div>
              <div>
                <button type="button" className="w-full border border-gray-300 text-gray-700 font-bold py-3 px-4 rounded-full hover:bg-gray-100 transition-colors">
                  Use OTP to Login
                </button>
              </div>
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">Or</span>
                </div>
              </div>
              <div>
                <button type="button" className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-full shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2" />
                  Sign in with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;

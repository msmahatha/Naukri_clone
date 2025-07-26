import React from 'react';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Column 1: Logo and Social Links */}
          <div className="md:col-span-4 lg:col-span-2">
            <img src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" alt="Naukri.com" className="h-7 mb-4" />
            <p className="font-semibold mb-2 text-sm text-gray-800">Connect with us</p>
            <div className="flex space-x-4 text-gray-500">
              <a href="/#" className="hover:text-blue-600"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="/#" className="hover:text-blue-600"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="/#" className="hover:text-blue-600"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="/#" className="hover:text-blue-600"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>

          {/* Column 2, 3, 4: Links */}
          <div className="md:col-span-8 lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <ul className="space-y-3">
                <li><a href="/#" className="text-gray-600 hover:text-blue-600">About us</a></li>
                <li><a href="/#" className="text-gray-600 hover:text-blue-600">Careers</a></li>
                <li><a href="/#" className="text-gray-600 hover:text-blue-600">Employer home</a></li>
                <li><a href="/#" className="text-gray-600 hover:text-blue-600">Sitemap</a></li>
                <li><a href="/#" className="text-gray-600 hover:text-blue-600">Credits</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li><a href="/#" className="text-gray-600 hover:text-blue-600">Help center</a></li>
                <li><a href="/#" className="text-gray-600 hover:text-blue-600">Summons/Notices</a></li>
                <li><a href="/#" className="text-gray-600 hover:text-blue-600">Grievances</a></li>
                <li><a href="/#" className="text-gray-600 hover:text-blue-600">Report issue</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li><a href="/#" className="text-gray-600 hover:text-blue-600">Privacy policy</a></li>
                <li><a href="/#" className="text-gray-600 hover:text-blue-600">Terms & conditions</a></li>
                <li><a href="/#" className="text-gray-600 hover:text-blue-600">Fraud alert</a></li>
                <li><a href="/#" className="text-gray-600 hover:text-blue-600">Trust & safety</a></li>
              </ul>
            </div>
          </div>

          {/* Column 5: App Download */}
          <div className="md:col-span-12 lg:col-span-4">
            <div className="bg-gray-50 p-4 rounded-lg border">
              <p className="font-bold text-gray-800">Apply on the go</p>
              <p className="text-sm text-gray-600 mb-3">Get real-time job updates on our App</p>
              <div className="flex space-x-3">
                <a href="/#"><img src="https://static.naukimg.com/s/0/0/i/new-homepage/android-app.png" alt="Google Play" className="h-10" /></a>
                <a href="/#"><img src="https://static.naukimg.com/s/0/0/i/new-homepage/ios-app.png" alt="App Store" className="h-10" /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-6 flex flex-wrap justify-between items-center text-xs text-gray-500">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="https://static.naukimg.com/s/4/100/i/infoedge-logo.png" alt="Info Edge" className="h-5 mr-4" />
            <p>All trademarks are the property of their respective owners. All rights reserved © 2025 Info Edge (India) Ltd.</p>
          </div>
          <div className="flex items-center space-x-4">
            <p className="font-semibold text-gray-700">Our businesses</p>
            <a href="/#"><img src="https://static.naukimg.com/s/4/100/i/hirist-logo.png" alt="hirist.com" className="h-5" /></a>
            <a href="/#"><img src="https://static.naukimg.com/s/4/100/i/jobhai-logo.png" alt="jobhai.com" className="h-5" /></a>
            <a href="/#"><img src="https://static.naukimg.com/s/4/100/i/doselect-logo.png" alt="doselect.com" className="h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
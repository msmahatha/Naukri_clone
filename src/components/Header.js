import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api'; // Import the new api utility
import { AuthContext } from '../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const NavDropdown = ({ title, menuData, activeMenu, setActiveMenu }) => {
    const isOpen = activeMenu === title;

    return (
        <div 
            className="relative"
            onMouseEnter={() => setActiveMenu(title)}
            onMouseLeave={() => setActiveMenu(null)}
        >
            <a href="/#" className={`text-gray-700 hover:text-blue-600 font-medium text-sm py-5 ${isOpen ? 'text-blue-600 border-b-2 border-orange-500' : ''}`}>
                {title}
            </a>
            {isOpen && menuData && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-[-2px] bg-white rounded-lg shadow-2xl p-6 z-20" style={{width: 'max-content'}}>
                    <div className="flex space-x-12">
                        {Object.entries(menuData).map(([category, links]) => (
                            <div key={category}>
                                <h3 className="font-bold text-gray-800 mb-4 text-base whitespace-nowrap">{category}</h3>
                                <ul className="space-y-3">
                                    {links.map(link => (
                                        <li key={link}>
                                            <a href="/#" className="text-sm text-gray-600 hover:text-blue-600 block whitespace-nowrap">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};


const Header = () => {
  const { isAuthenticated, user, dispatch } = useContext(AuthContext);
  const [navData, setNavData] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const fetchNavData = async () => {
        try {
            // Use the 'api' instance now. The URL is just the endpoint.
            const res = await api.get('/jobs/nav-data');
            setNavData(res.data);
        } catch (error) {
            console.error("Failed to fetch nav data", error);
        }
    };
    fetchNavData();
  }, []);

  const onLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const authLinks = (
    <div className="flex items-center space-x-4">
      <Link to="/post-job" className="px-4 py-2 text-sm font-semibold text-blue-600 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
        Post Job
      </Link>
      <button
        onClick={onLogout}
        className="px-5 py-2 text-sm font-semibold text-white bg-[#FF7555] rounded-full hover:bg-[#f86a4a] transition-colors"
      >
        Logout
      </button>
    </div>
  );

  const guestLinks = (
    <div className="flex items-center space-x-3">
      <Link to="/login" className="px-5 py-2 text-sm font-semibold text-blue-600 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
        Login
      </Link>
      <Link to="/register" className="px-5 py-2 text-sm font-semibold text-white bg-[#FF7555] border border-[#FF7555] rounded-full hover:bg-[#f86a4a] transition-colors">
        Register
      </Link>
      <div className="hidden md:block border-l pl-3 ml-1">
        <a href="/#" className="text-gray-700 hover:text-blue-600 font-medium text-sm flex items-center">
          For employers
          <FontAwesomeIcon icon={faChevronDown} className="h-3 w-3 ml-1" />
        </a>
      </div>
    </div>
  );

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link to="/">
              <img 
                src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" 
                alt="Naukri.com" 
                className="h-7" 
              />
            </Link>
            <nav className="hidden md:flex items-center space-x-8 h-full">
              {navData && (
                  <>
                    <NavDropdown title="Jobs" menuData={navData.jobs} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                    <NavDropdown title="Companies" menuData={navData.companies} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                    <NavDropdown title="Services" menuData={navData.services} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                  </>
              )}
            </nav>
          </div>
          <div>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

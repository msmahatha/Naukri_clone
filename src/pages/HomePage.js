import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faBars, faStar, faUser, faTimes, faCog, faQuestionCircle, faSignOutAlt, faTasks } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


// A simple card component for the "Explore jobs" section
const CompanyJobCard = ({ logo, name, rating, reviews, link }) => (
    <div className="border rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
        <img src={logo} alt={name} className="h-12 mx-auto mb-2" />
        <h4 className="font-bold">{name}</h4>
        <p className="text-sm text-yellow-500 my-1">
            <FontAwesomeIcon icon={faStar} /> {rating} <span className="text-gray-500">| {reviews} reviews</span>
        </p>
        <a href={link} className="text-blue-600 font-semibold text-sm mt-2 inline-block">View jobs</a>
    </div>
);

// Notification Panel Component
const NotificationPanel = ({ isOpen, closePanel }) => {
    return (
        <>
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={closePanel}></div>
            <div className={`fixed top-20 right-5 w-full max-w-sm bg-white rounded-xl shadow-2xl z-50 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="p-4 border-b flex justify-between items-center">
                    <h2 className="text-lg font-bold">Notifications</h2>
                    <button onClick={closePanel} className="text-gray-500 hover:text-gray-800"><FontAwesomeIcon icon={faTimes} /></button>
                </div>
                <div className="p-8 text-center flex flex-col items-center justify-center">
                    <img src="https://static.naukimg.com/s/5/105/i/bell.png" alt="No notifications" className="w-24 h-24 mb-4" />
                    <h3 className="font-bold text-lg mb-2">Haven't got any notifications?</h3>
                    <p className="text-sm text-gray-600 mb-4">You will soon get notifications. Meanwhile, browse relevant jobs on Naukri.</p>
                    <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700">Go to recommendations</button>
                </div>
            </div>
        </>
    );
};

// User Profile Panel Component
const UserProfilePanel = ({ isOpen, closePanel, user, onLogout }) => {
    return (
        <>
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={closePanel}></div>
            <div className={`fixed top-20 right-5 w-full max-w-sm bg-white rounded-xl shadow-2xl z-50 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="p-4 flex justify-end">
                    <button onClick={closePanel} className="text-gray-500 hover:text-gray-800"><FontAwesomeIcon icon={faTimes} /></button>
                </div>
                <div className="p-6 pt-0">
                    <div className="flex items-center space-x-4">
                        <div className="relative w-16 h-16">
                             <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36"><circle className="text-gray-200" strokeWidth="3" fill="none" stroke="currentColor" r="16" cx="18" cy="18" /><circle className="text-orange-500" strokeWidth="3" strokeDasharray="50, 100" strokeLinecap="round" fill="none" stroke="currentColor" r="16" cx="18" cy="18" /></svg>
                             <img src="https://static.naukimg.com/s/5/105/i/user-avtar.png" alt="User Avatar" className="absolute top-1/2 left-1/2 w-14 h-14 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                             <span className="absolute bottom-0 right-0 text-xs bg-white px-1 rounded-full font-semibold">50%</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">{user?.name}</h3>
                            <p className="text-sm text-gray-600">B.Tech/B.E. Computers at Brainware University, Kolkata</p>
                            <a href="/#" className="text-sm text-blue-600 font-semibold">View & Update Profile</a>
                        </div>
                    </div>
                    <div className="mt-6 border-t pt-6">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="font-bold text-gray-800">Your profile performance</h4>
                            <span className="text-xs text-gray-500">Last 90 days</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-2xl font-bold">0</p>
                                <p className="text-sm text-gray-600">Search Appearances</p>
                                <a href="/#" className="text-xs text-blue-600 font-semibold">View all</a>
                            </div>
                             <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-2xl font-bold">0</p>
                                <p className="text-sm text-gray-600">Recruiter Actions</p>
                                <a href="/#" className="text-xs text-blue-600 font-semibold">View all</a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 border-t pt-4">
                        <ul className="space-y-1 text-gray-700">
                            <li><a href="/#" className="flex items-center p-2 rounded hover:bg-gray-100"><FontAwesomeIcon icon={faTasks} className="mr-3 w-5" /> Career guidance</a></li>
                            <li><a href="/#" className="flex items-center p-2 rounded hover:bg-gray-100"><FontAwesomeIcon icon={faCog} className="mr-3 w-5" /> Settings</a></li>
                            <li><a href="/#" className="flex items-center p-2 rounded hover:bg-gray-100"><FontAwesomeIcon icon={faQuestionCircle} className="mr-3 w-5" /> FAQs</a></li>
                            <li><button onClick={onLogout} className="w-full flex items-center p-2 rounded hover:bg-gray-100"><FontAwesomeIcon icon={faSignOutAlt} className="mr-3 w-5" /> Logout</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

// Reusable Nav Dropdown Component
const NavDropdown = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div 
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <a href="/#" className={`text-gray-600 hover:text-blue-600 font-medium text-sm py-4 ${isOpen ? 'border-b-2 border-orange-500' : ''}`}>
                {title}
            </a>
            {isOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-[-2px] w-56 bg-white rounded-lg shadow-2xl p-4 z-20">
                    <ul className="space-y-3">
                        {items.map(item => (
                            <li key={item}>
                                <a href="/#" className="text-sm text-gray-700 hover:text-blue-600 block">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const CampusFooter = () => {
    return (
        <footer className="bg-white border-t mt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-5 lg:col-span-3">
                        <div className="flex items-center mb-4">
                            <img src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" alt="Naukri.com" className="h-7" />
                            <span className="text-orange-500 font-bold ml-2 whitespace-nowrap">naukri campus</span>
                        </div>
                        <p className="font-semibold mb-2 text-sm text-gray-800">Connect with us</p>
                        <div className="flex space-x-4 text-gray-500">
                            <a href="/#" className="hover:text-blue-600"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="/#" className="hover:text-blue-600"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="/#" className="hover:text-blue-600"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="/#" className="hover:text-blue-600"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                    </div>
                    <div className="md:col-span-7 lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
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
                <div className="border-t mt-8 pt-6 flex flex-wrap justify-between items-center text-xs text-gray-500">
                    <div className="flex items-center mb-4 md:mb-0">
                        <img src="https://static.naukimg.com/s/4/100/i/infoedge-logo.png" alt="Info Edge" className="h-5 mr-4" />
                        <p>All trademarks are the property of their respective owners. All rights reserved © 2025 Info Edge (India) Ltd.</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="font-semibold text-gray-700">Our businesses</p>
                        <a href="/#"><img src="https://static.naukimg.com/s/4/100/i/99acres-logo.png" alt="99acres.com" className="h-5" /></a>
                        <a href="/#" className="hover:text-blue-600"><img src="https://static.naukimg.com/s/4/100/i/jeevansathi-logo.png" alt="jeevansathi.com" className="h-5" /></a>
                        <a href="/#" className="hover:text-blue-600"><img src="https://static.naukimg.com/s/4/100/i/naukrigulf-logo.png" alt="naukrigulf.com" className="h-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};


const HomePage = () => {
    const { user, dispatch } = useContext(AuthContext);
    const [isNotificationsOpen, setNotificationsOpen] = useState(false);
    const [isProfileOpen, setProfileOpen] = useState(false);

    const onLogout = () => {
        dispatch({ type: 'LOGOUT' });
        setProfileOpen(false); // Close panel on logout
    };

    const prepareItems = ['Pathfinder', 'NCAT', 'Expert speak', 'Resume maker', 'Personalised interview Q/A', 'Career guidance', 'Interview Experiences'];
    const participateItems = ['Contests', 'All India NCAT', 'Naukri Campus Young Turks', 'Naukri Campus Squad', 'Engineers\' Ring of Honour'];
    const opportunitiesItems = ['Recommended jobs', 'Job invites', 'Jobs from alerts', 'Application status', 'Saved jobs'];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
        <NotificationPanel isOpen={isNotificationsOpen} closePanel={() => setNotificationsOpen(false)} />
        <UserProfilePanel isOpen={isProfileOpen} closePanel={() => setProfileOpen(false)} user={user} onLogout={onLogout} />
        
        <header className="bg-white shadow-sm sticky top-0 z-30">
            <div className="container mx-auto px-6 py-0 flex justify-between items-center">
                <div className="flex items-center space-x-6">
                    <img src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" alt="Naukri Campus" className="h-7" />
                    <span className="text-orange-500 font-bold">naukri campus</span>
                    <nav className="hidden md:flex items-center space-x-8 text-sm font-medium h-full">
                        <NavDropdown title="Prepare" items={prepareItems} />
                        <NavDropdown title="Participate" items={participateItems} />
                        <NavDropdown title="Opportunities" items={opportunitiesItems} />
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative hidden md:block">
                        <input type="text" placeholder="Search jobs here" className="border-2 border-gray-200 rounded-full py-2 px-5 w-72 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
                        <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                    <FontAwesomeIcon icon={faBell} className="text-xl text-gray-500 cursor-pointer" onClick={() => setNotificationsOpen(true)} />
                    <div className="flex items-center space-x-2 border rounded-full p-2 cursor-pointer" onClick={() => setProfileOpen(true)}>
                        <FontAwesomeIcon icon={faBars} className="text-xl text-gray-500" />
                        <FontAwesomeIcon icon={faUser} className="text-xl text-gray-400" />
                    </div>
                </div>
            </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            {/* Left Sidebar: User Profile */}
            <aside className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md text-center">
                 <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-full h-full" viewBox="0 0 36 36"><path className="text-gray-200" strokeWidth="2" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="text-green-500" strokeWidth="2" strokeDasharray="90, 100" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                    <img src="https://static.naukimg.com/s/5/105/i/user-avtar.png" alt="User Avatar" className="absolute top-1/2 left-1/2 w-20 h-20 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <h3 className="font-bold text-lg">{user?.name}</h3>
                <p className="text-sm text-gray-600">B.Tech/B.E. Computers</p>
                <p className="text-sm text-gray-600">Brainware University, Kolk...</p>
                <p className="text-xs text-gray-400 mt-2">Last updated 10d ago</p>
                <button className="mt-4 w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700">Complete profile</button>
            </aside>

            {/* Right Content */}
            <div className="lg:col-span-3 space-y-8">
                {/* Ambassador Banner */}
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center" style={{ backgroundImage: `url('https://static.naukimg.com/s/7/0/assets/images/src/widgets/campus-wdgt/latest/components/assets/bgMid.a2ec0814.png')`, backgroundSize: 'cover', backgroundPosition: 'right' }}>
                    <div className="w-1/2">
                        <p className="font-bold text-sm">naukri campus</p>
                        <h2 className="text-2xl font-bold text-white my-2">Shine & inspire as a <br/> Naukri Campus Ambassador</h2>
                        <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-full text-sm mt-4">Become Ambassador</button>
                    </div>
                </div>
                
                {/* Quiz Challenge Banner */}
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
                    <div>
                        <p className="text-sm font-bold text-blue-600">Contest | GenQuest</p>
                        <h3 className="text-xl font-bold my-1">Independence Day Quiz Challenge</h3>
                        <p className="text-sm text-gray-600">Contest Date: 15th August 2025</p>
                        <div className="text-xs mt-2">
                            <span className="border-r pr-2 mr-2">MCQ Challenge</span>
                            <span className="border-r pr-2 mr-2">Prizes Worth INR 10K</span>
                            <span>Certificates for All</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="bg-orange-100 text-orange-600 p-2 rounded-lg text-center">
                            <p className="text-xs">Take the test anytime between</p>
                            <p className="font-bold">10 AM to 11 PM</p>
                        </div>
                        <button className="mt-2 bg-orange-500 text-white font-semibold py-2 px-6 rounded-full text-sm">Register Now!</button>
                    </div>
                </div>

                {/* Career Path Section */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <p className="text-sm text-gray-500">pathfinder</p>
                            <h3 className="text-lg font-bold">Discover the career path that's right for you!</h3>
                            <p className="text-sm text-gray-600">Explore roles, check your readiness, and succeed with a personalised learning plan.</p>
                        </div>
                        <a href="/#" className="text-blue-600 font-semibold text-sm">View all</a>
                    </div>
                    <div className="flex space-x-2">
                        <button className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Software Product company</button>
                        <button className="bg-gray-100 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full">Startup company</button>
                        <button className="bg-gray-100 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full">IT services and consulting company</button>
                    </div>
                </div>

                {/* Explore Jobs Section */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                     <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold">Explore jobs by top companies</h3>
                        <a href="/#" className="text-blue-600 font-semibold text-sm">View all</a>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <CompanyJobCard name="Intellect Design..." logo="https://img.naukimg.com/logo_images/v2/19428.gif" rating="3.9" reviews="2.2k+" link="/#" />
                        <CompanyJobCard name="MSCI Services" logo="https://img.naukimg.com/logo_images/v2/4603328.gif" rating="3.8" reviews="323" link="/#" />
                        <CompanyJobCard name="ZS" logo="https://img.naukimg.com/logo_images/v2/118620.gif" rating="3.3" reviews="2.4k+" link="/#" />
                    </div>
                </div>
            </div>
        </main>
        <CampusFooter />
    </div>
  );
};

export default HomePage;
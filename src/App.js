import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import Page Components & Routes
import HomeRoute from './routing/HomeRoute';
import Register from './pages/Register';
import Login from './pages/Login';
import PostJob from './pages/PostJob';
import SearchResults from './pages/SearchResults';
import JobDetails from './pages/JobDetails';
import PrivateRoute from './routing/PrivateRoute';
import CompleteProfile from './pages/CompleteProfile'; // Import the new page

function App() {
  return (
    <AuthProvider>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomeRoute />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/job/:id" element={<JobDetails />} />
          
          {/* Private Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/complete-profile" element={<CompleteProfile />} /> {/* Add the new route */}
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
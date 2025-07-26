import React from 'react';

// Import all the section components
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ResumeBanner from '../components/ResumeBanner';
import JobPills from '../components/JobPills';
import TopCompanies from '../components/TopCompanies';
import FeaturedCompanies from '../components/FeaturedCompanies';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="bg-[#F8F8F8] min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 pb-12">
        <HeroSection />
        <ResumeBanner />
        <JobPills />
        <TopCompanies />
        <FeaturedCompanies />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
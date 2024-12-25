import React from 'react';
import HeroBg from "../../assets/background/services.jpeg";
import Introduction from './Introduction';
import AllCategories from './ServicesCateogories';
import PortfolioShowcase from './PortfolioShowcase';
import CustomSolutions from './CustomSolutions';
import CallToAction from './Contact';
import FAQSection from './FAQ\'s';

const Services: React.FC = () => {
  return (
    <div>
      <div
        className="relative flex items-center justify-center bg-center bg-cover"
        style={{
          backgroundImage: `url(${HeroBg})`,
          height: "100vh",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Centered Content */}
        <div className="relative z-10 text-center text-white">
          {/* Heading */}
          <h1 className="text-5xl font-extrabold leading-tight lg:text-7xl">
            Services
          </h1>

          {/* Breadcrumb */}
          <div className="mt-6 flex items-center justify-center space-x-3">
            <span className="text-lg font-semibold text-gray-300">Home</span>
            <span className="text-lg font-semibold text-yellow-400">•</span>
            <span className="text-lg font-semibold text-yellow-400">
              Services
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <Introduction />
      </div>
      <div className="">
        <AllCategories />
      </div>
      <div className="">
        <PortfolioShowcase />
      </div>
      <div className="">
        <CustomSolutions />
      </div>
      <div className="">
        <CallToAction />
      </div>
      <div className="">
        <FAQSection />
      </div>
      
    </div>
    
  );
};

export default Services;




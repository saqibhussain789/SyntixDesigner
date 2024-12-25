import React from 'react';
import HeroBg from "../../assets/background/about.png";
import Introduction from './Introduction';
import MissionVision from './Mission';
import Story from './Story';
import OurTeam from './Team';
import Achievements from './Achievements';
import CallToAction from './ContactSection';
import CoreValues from './CoreValues';
import WhyChooseUs from './WhyChooseUs';
import CustomerImpact from './CustomerImpact';
const About: React.FC = () => {
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
            About Us
          </h1>

          {/* Breadcrumb */}
          <div className="mt-6 flex items-center justify-center space-x-3">
            <span className="text-lg font-semibold text-gray-300">Home</span>
            <span className="text-lg font-semibold text-yellow-400">•</span>
            <span className="text-lg font-semibold text-yellow-400">
              About Us
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <Introduction />
      </div>
      <div className="">
        <MissionVision />
      </div>
      <div className="">
        <Story />
      </div>
      <div className="">
        <OurTeam />
      </div>
      <div className="">
        <Achievements />
      </div>
      <div className="">
        <CoreValues />
      </div>
      <div className="">
        <WhyChooseUs />
      </div>
      <div className="">
        <CustomerImpact />
      </div>
      <div className="">
        <CallToAction />
      </div>

    
    </div>
    
  );
};

export default About;




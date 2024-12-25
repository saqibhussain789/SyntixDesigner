import React from "react";
import HeroBg from '../../assets/background/testimonial.png'
import Introduction from "./Introduction";
import SearchFilterSection from "./SearchFilter";
import FAQSection from "./FAQ's";
import CallToAction from "./Contact";
import AllCategories from "./AllCategories";
import FeaturedTutorials from "./FeaturedTutorials";
import StepByStep from "./StepByStep";
import InteractiveExample from "./InteractiveExample";
import VideosTutorials from "./VideoTutorials";
import TopContributors from "./TopContributor";
import CommunityDiscussions from "./CommunityDiscussions";
import BenefitsTutorials from "./Benefits";


const Testimonial: React.FC = () => {
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
          Testimonial
          </h1>

          {/* Breadcrumb */}
          <div className="mt-6 flex items-center justify-center space-x-3">
            <span className="text-lg font-semibold text-gray-300">Home</span>
            <span className="text-lg font-semibold text-yellow-400">•</span>
            <span className="text-lg font-semibold text-yellow-400">
            Testimonial
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <Introduction />
      </div>
      <div className="">
        <SearchFilterSection />
      </div>
      <div className="">
        <AllCategories />
      </div>
      <div className="">
        <FeaturedTutorials />
      </div>
      <div className="">
        <StepByStep />
      </div>
      <div className="">
        <InteractiveExample />
      </div>
      <div className="">
        <VideosTutorials />
      </div>
      <div className="">
        <TopContributors />
      </div>
      <div className="">
        <CommunityDiscussions />
      </div>
      <div className="">
        <BenefitsTutorials />
      </div>
      <div className="">
        <FAQSection />
      </div>
      <div className="">
        <CallToAction />
      </div>
      
        </div>
    )
};

export default Testimonial;
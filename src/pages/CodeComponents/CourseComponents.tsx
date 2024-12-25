import React from "react";
import HeroBg from "../../assets/CodeComponents/hero.png";
import Introduction from "./Introduction";
import SearchFilter from "./SearchFilter";
import AllCategories from "./AllCategories";
import CommunityFavorites from "./CommunityFavroutes";
import ComponentsDetails from "./ComponentsDetail";
import DownloadOption from "./Downliad";
import FeaturedComponents from "./FeaturedComponents";
import FrameIntegration from "./FrameIntegration";
import LivePreview from "./LivePreview";
import UserRatings from "./UserRatings";
import CallToAction from "./Contact";
import FAQSection from "./FAQ's";

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
            Code Components
          </h1>

          {/* Breadcrumb */}
          <div className="mt-6 flex items-center justify-center space-x-3">
            <span className="text-lg font-semibold text-gray-300">Home</span>
            <span className="text-lg font-semibold text-yellow-400">•</span>
            <span className="text-lg font-semibold text-yellow-400">
              Code Components
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <Introduction />
      </div>
      <div className="">
        <SearchFilter />
      </div>
      <div className="">
        <AllCategories />
      </div>
      <div className="">
        <CommunityFavorites />
      </div>
      <div className="">
        <ComponentsDetails />
      </div>
      <div className="">
        <DownloadOption />
      </div>
      <div className="">
        <FeaturedComponents />
      </div>
      <div className="">
        <FrameIntegration />
      </div>
      <div className="">
        <LivePreview />
      </div>
      <div className="">
        <UserRatings />
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

export default About;

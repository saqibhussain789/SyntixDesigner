import React from "react";
import HeroBg from "../../assets/background/Support.jpeg";
import Introduction from "./Introduction";
import CallToAction from "./Contact";
import FAQSection from "./FAQ's";
import Issues from "./Issues";
import ContactOption from "./ContactOptions";
import FeedbackSuggestions from "./Feedback";
import CommunityForum from "./CommunityForum";
import HelpTopic from "./Help";
import LiveChat from "./LiveChat";
import ScheduleMeeting from "./Schedulemeeting";
import SearchBar from "./Searchbar";
import ServicesStatus from "./Services";
import UserGuides from "./Userguide";
import VideoTutorials from "./VideoTutorial";

const Support: React.FC = () => {
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
            SUPPORT/HELP
          </h1>

          {/* Breadcrumb */}
          <div className="mt-6 flex items-center justify-center space-x-3">
            <span className="text-lg font-semibold text-gray-300">Home</span>
            <span className="text-lg font-semibold text-yellow-400">•</span>
            <span className="text-lg font-semibold text-yellow-400">
            Support/Help
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <Introduction />
      </div>
      <div className="">
        <Issues />
      </div>
      <div className="">
        <ContactOption />
      </div>
      <div className="">
        <CommunityForum />
      </div>
      <div className="">
        <HelpTopic />
      </div>
      <div className="">
        <LiveChat />
      </div>
      <div className="">
        <ScheduleMeeting />
      </div>
      <div className="">
        <SearchBar />
      </div>
      <div className="">
        <ServicesStatus />
      </div>
      <div className="">
        <UserGuides />
      </div>
      <div className="">
        <VideoTutorials />
      </div>
      <div className="">
        <FeedbackSuggestions />
      </div>
      <div className="">
        <FAQSection />
      </div>
      <div className="">
        <CallToAction />
      </div>
    </div>
  );
};

export default Support;

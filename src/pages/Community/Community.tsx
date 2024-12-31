import React from "react";
import HeroBg from "../../assets/background/Community.jpeg";
import Introduction from "./Introduction";
import SearchFilter from "./Search";
import Categories from "./Categories";
import Discussions from "./Discussions";
import Guidelines from "./Guidelines";
import FAQSection from "./FAQ's";
import PinnedTags from "./PinnedTopic";
import LatestPosts from "./LatestPosts";
import LeadershipBoard from "./Leaderboard";
import TypeOfRewards from "./Badges";
import CallToAction from "./Contact";
import PollSurvey from "./Survey";
import UserProfile from "./UserProfile";

const Community: React.FC = () => {
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
            COMMUNITY
          </h1>

          {/* Breadcrumb */}
          <div className="mt-6 flex items-center justify-center space-x-3">
            <span className="text-lg font-semibold text-gray-300">Home</span>
            <span className="text-lg font-semibold text-yellow-400">•</span>
            <span className="text-lg font-semibold text-yellow-400">
              Community
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
        <Categories />
      </div>
      <div className="">
        <Discussions />
      </div>
      <div className="">
        <PinnedTags />
      </div>
      <div className="">
        <LatestPosts />
      </div>
      <div className="">
        <UserProfile />
      </div>
      <div className="">
        <LeadershipBoard />
      </div>
      <div className="">
        <TypeOfRewards />
      </div>
      <div className="">
        <PollSurvey />
      </div>
      <div className="">
        <Guidelines />
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

export default Community;

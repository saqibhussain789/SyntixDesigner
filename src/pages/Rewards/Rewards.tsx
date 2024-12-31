import React from "react";
import HeroBg from "../../assets/background/rewards.jpeg";
import HowItWorks from "./HowItWorks";
import Introduction from "./Introduction";
import EligibilityCriteria from "./Eligiability";
import TopAchievers from "./TopAchievers";
import RewardsTiers from "./RewardsTier";
import RedeemRewards from "./RadeemRewards";
import TrackProgress from "./TrackProgress";
import CommunityLeadershipBoard from "./Leadership";
import BenefitsParticipation from "./Benefits";
import FAQSection from "./FAQ's";
import CallToAction from "./Contact";
import TypeOfRewards from "./RewardsSection";

const Rewards: React.FC = () => {
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
            REWARDS
          </h1>

          {/* Breadcrumb */}
          <div className="mt-6 flex items-center justify-center space-x-3">
            <span className="text-lg font-semibold text-gray-300">Home</span>
            <span className="text-lg font-semibold text-yellow-400">•</span>
            <span className="text-lg font-semibold text-yellow-400">
            Reward
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <Introduction />
      </div>
      <div className="">
        <HowItWorks />
      </div>
      <div className="">
        <TypeOfRewards />
      </div>
      <div className="">
        <EligibilityCriteria />
      </div>
      <div className="">
        <TopAchievers />
      </div>
      <div className="">
        <RewardsTiers />
      </div>
      <div className="">
        <RedeemRewards />
      </div>
      <div className="">
        <TrackProgress />
      </div>
      <div className="">
        <CommunityLeadershipBoard />
      </div>
      <div className="">
        <BenefitsParticipation />
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

export default Rewards;

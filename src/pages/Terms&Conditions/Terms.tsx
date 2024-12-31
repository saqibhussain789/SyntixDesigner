import React from "react";
import HeroBg from "../../assets/background/terms.jpeg";
import Introduction from "./Introduction";
import Acceptance from "./Acceptance";
import PlatformUse from "./Platform";
import Accounts from "./Accounts";
import Content from "./ContentOwnership";
import ChangeTerms from "./ChangeTerms";
import CallToAction from "./Contact";
import ContentOwnership from "./Content";
import RewardsIncentives from "./Rewards";
import SubscriptionPayment from "./Subscriptions";
import Disclaimer from "./Disclaimers";
import Termination from "./Termination";
import Law from "./Law";

const Terms: React.FC = () => {
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
            TERMS & CONDITIONS
          </h1>

          {/* Breadcrumb */}
          <div className="mt-6 flex items-center justify-center space-x-3">
            <span className="text-lg font-semibold text-gray-300">Home</span>
            <span className="text-lg font-semibold text-yellow-400">•</span>
            <span className="text-lg font-semibold text-yellow-400">
            Terms & Conditions
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <Introduction />
      </div>
      <div className="">
        <Acceptance />
      </div>
      <div className="">
        <PlatformUse />
      </div>
      <div className="">
        <Accounts />
      </div>
      <div className="">
        <SubscriptionPayment />
      </div>
      <div className="">
        <Content />
      </div>
      <div className="">
        <ContentOwnership />
      </div>
      <div className="">
        <RewardsIncentives />
      </div>
      <div className="">
        <Disclaimer />
      </div>
      <div className="">
        <Termination />
      </div>
      <div className="">
        <ChangeTerms />
      </div>
      <div className="">
        <Law />
      </div>
      <div className="">
        <CallToAction />
      </div>
    </div>
  );
};

export default Terms;

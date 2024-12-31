import React from "react";
import HeroBg from "../../assets/background/privacy.jpeg";
import Introduction from "./Introduction";
import InformationWeCollect from "./Information";
import HowUseInformation from "./HowUseInformation";
import DataSharing from "./DataSharing";
import Cookies from "./Cookies";
import ThirdParty from "./Thirdparty";
import AgeRestrictions from "./AgeRestrictions";
import Changes from "./Changes";
import UserRights from "./UserRights";
import DataSecurity from "./DataSecurity";
import CallToAction from "./Contact";
import FAQSection from "./FAQ's";

const Privacy: React.FC = () => {
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
          PRIVACY POLICY
          </h1>

          {/* Breadcrumb */}
          <div className="mt-6 flex items-center justify-center space-x-3">
            <span className="text-lg font-semibold text-gray-300">Home</span>
            <span className="text-lg font-semibold text-yellow-400">•</span>
            <span className="text-lg font-semibold text-yellow-400">
            Privacy Policy
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <Introduction />
      </div>
      <div className="">
        <InformationWeCollect />
      </div>
      <div className="">
        <HowUseInformation />
      </div>
      <div className="">
        <DataSharing />
      </div>
      <div className="">
        <UserRights />
      </div>
      <div className="">
        <Cookies />
      </div>
      <div className="">
        <DataSecurity />
      </div>
      <div className="">
        <ThirdParty />
      </div>
      <div className="">
        <AgeRestrictions />
      </div>
      <div className="">
        <Changes />
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

export default Privacy;

import React from "react";
import HeroBg from "../../assets/background/login.jpeg";
import CallToAction from "./Contact";
import Benefits from "./Benefits";
import LoginForm from "./loginform";
import PrivacyNotice from "./Privacy";
import SecurityCheck from "./Privacysecurity";
import SignupForm from "./Signup";
import SocialOptions from "./Socialoption";
import SupportLink from "./Support";
import ForgotPassword from "./Forgotpassword";


const Login: React.FC = () => {
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
            LOGIN\SIGNUP
          </h1>

          {/* Breadcrumb */}
          <div className="mt-6 flex items-center justify-center space-x-3">
            <span className="text-lg font-semibold text-gray-300">Home</span>
            <span className="text-lg font-semibold text-yellow-400">•</span>
            <span className="text-lg font-semibold text-yellow-400">
              Login/SignUp
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <LoginForm />
      </div>
      <div className="">
        <SignupForm />
      </div>
      <div className="">
        <SocialOptions />
      </div>
      <div className="">
        <ForgotPassword />
      </div>
      <div className="">
        <Benefits />
      </div>
      <div className="">
        <SecurityCheck />
      </div>
      <div className="">
        <PrivacyNotice />
      </div>
      <div className="">
        <SupportLink />
      </div>
      
    <div className="">
        <CallToAction />
      </div>
      
      
    </div>
  );
};

export default Login;

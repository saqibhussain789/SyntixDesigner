import React from "react";
import HeroBg from "../../assets/background/hero.png";
import KeyFeatures from "./KeyFeatures";
import PopularCourses from "./PopularCourses";
import ReadyToUseComponents from "./ReadyToUseComponents";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import CourseRewards from "./CourseRewards";
import Services from "./Services";
import CommunityHighlights from "./CommunityHighlights";
import ContactSection from "./ContactSection";
import PartnersCollaboration from "./Colaborations";
import FAQSection from "./FAQ's";
import NewsletterSubscription from "./NewsLetter";
const Home: React.FC = () => {
  return (
    <div className="">
      <div
        className="relative flex items-center justify-center bg-center bg-cover"
        style={{
          backgroundImage: `url(${HeroBg})`,
          height: "100vh",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-wrap items-center justify-between w-full max-w-7xl px-4 mx-auto text-white lg:flex-nowrap">
          {/* Text Content */}
          <div className="w-full mb-8 lg:w-2/3 lg:mb-0">
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
              Learning Online Made Simple
            </h1>
            <p className="mt-6 text-lg font-light text-gray-300">
              Explore expertly designed courses to build your skills and achieve
              your career goals at your own pace.
            </p>
            <a
              href="#courses"
              className="inline-block px-8 py-3 mt-6 text-lg font-semibold text-black transition duration-300 bg-yellow-400 rounded-lg hover:bg-yellow-500 hover:shadow-lg"
            >
              View Courses
            </a>
          </div>

          {/* Form Section */}
          <div className="w-full p-8 bg-yellow-400 rounded-lg shadow-xl lg:w-1/3">
            <h3 className="mb-6 text-2xl font-semibold text-gray-800">
              Request Information
            </h3>
            <form className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-1/2 px-4 py-3 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 px-4 py-3 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none"
              />
              <select className="w-full px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none">
                <option value="" disabled selected>
                  Select Learning Program
                </option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>Graphic Design</option>
              </select>
              <textarea
                placeholder="Additional Information"
                className="w-full px-4 py-3 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="w-full px-4 py-3 text-lg font-semibold text-white transition bg-black rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500 focus:outline-none"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="">
        <KeyFeatures />
      </div>
      <div className="">
        <PopularCourses />
      </div>
      <div className="">
        <ReadyToUseComponents />
      </div>
      <div className="">
        <WhyChooseUs />
      </div>
      <div className="">
        <Testimonials />
      </div>
      <div className="">
        <CourseRewards />
      </div>
      <div className="">
        <Services />
      </div>
      <div className="">
        <CommunityHighlights />
      </div>
      <div className="">
        <ContactSection />
      </div>
      <div className="">
        <PartnersCollaboration />
      </div>
      <div className="">
        <FAQSection />
      </div>
      <div className="">
        <NewsletterSubscription />
      </div>
    </div>
  );
};

export default Home;

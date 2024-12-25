import React from "react";
import HeroBg from '../../assets/background/courses.png'
import Introduction from "./Introduction";
import CoursesCategories from "./CoursesCategories";
import TopInstructor from "./Instructor";
import LearningPath from "./Learning";
import LearningPreview from "./Preview";
import BenefitsEnrolling from "./Benefits";
import SerachFilter from "./SearchFilter";
import GlobalCommunity from "./Community";
import PartnerWithUs from "./Partners";
import CallToAction from "./Support";
import FAQSection from "./FAQ's";
import CourseRewards from "./Certificates";

const Courses: React.FC = () => {
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
          Courses
          </h1>

          {/* Breadcrumb */}
          <div className="mt-6 flex items-center justify-center space-x-3">
            <span className="text-lg font-semibold text-gray-300">Home</span>
            <span className="text-lg font-semibold text-yellow-400">•</span>
            <span className="text-lg font-semibold text-yellow-400">
            Courses
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <Introduction />
      </div>
      <div className="">
        <CoursesCategories />
      </div>
      <div className="">
        <SerachFilter  />
      </div>
      <div className="">
        <TopInstructor />
      </div>
      <div className="">
        <LearningPath />
      </div>
      <div className="">
        <LearningPreview />
      </div>
      <div className="">
        <BenefitsEnrolling />
      </div>
      <div className="">
        <GlobalCommunity />
      </div>
      <div className="">
        <CourseRewards />
      </div>
      <div className="">
        <PartnerWithUs />
      </div>
      <div className="">
        <CallToAction />
      </div>
      <div className="">
        <FAQSection />
      </div>
        </div>
    )
};

export default Courses;
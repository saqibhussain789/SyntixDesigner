import React from "react";
import HeroBg from "../../assets/background/blog.jpeg";
import Introduction from "./Introduction";
import SearchFilter from "./SearchFilter";
import FAQSection from "./FAQ's";
import AllCategories from "./FeatureArtical";
import LatestPosts from "./LatestPosts";
import TopAuthors from "./TopAuthors";
import PopularTags from "./PopularTags";
import BlogPreviews from "./BlogPreviews";
import InteractivePolls from "./InteractivePolls";
import UserComments from "./Comments";
import RelatedBlogs from "./RelatedBlogs";
import WriteForUs from "./WriteForUs";
import NewsletterSubscription from "./Newsletter";

const Blog: React.FC = () => {
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
            BLOG
          </h1>

          {/* Breadcrumb */}
          <div className="mt-6 flex items-center justify-center space-x-3">
            <span className="text-lg font-semibold text-gray-300">Home</span>
            <span className="text-lg font-semibold text-yellow-400">•</span>
            <span className="text-lg font-semibold text-yellow-400">
              Blog
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
        <LatestPosts />
      </div>
      <div className="">
        <TopAuthors />
      </div>
      <div className="">
        <PopularTags />
      </div>
      <div className="">
        <BlogPreviews />
      </div>
      <div className="">
        <InteractivePolls />
      </div>
      <div className="">
        <UserComments />
      </div>
      <div className="">
        <RelatedBlogs />
      </div>
      <div className="">
        <WriteForUs />
      </div>
      <div className="">
        <NewsletterSubscription />
      </div>
      <div className="">
        <FAQSection />
      </div>
      
    </div>
  );
};

export default Blog;

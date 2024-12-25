import React from 'react';
import FutureLearn from "../../assets/Testimonials/futurelearn.png";
import SkillShare from "../../assets/Testimonials/SkillShare.png";
import edX from "../../assets/Testimonials/exd.png";

const TopContributors = () => {
  const contributors = [
    { 
        id: 1, 
        name: "FutureLearn", 
        logo: FutureLearn, 
        content: "Offers a variety of online courses from top universities and organizations to enhance your skills." 
    },
    { 
        id: 2, 
        name: "Skillshare", 
        logo: SkillShare, 
        content: "A platform focused on creative and professional courses to unlock your potential in various fields." 
    },
    { 
        id: 3, 
        name: "edX", 
        logo: edX, 
        content: "Provides access to high-quality education from world-renowned institutions and universities." 
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-yellow-500">TOP</h2>
        <h3 className="text-5xl font-extrabold text-gray-800">CONTRIBUTORS</h3>
        <p className="text-gray-500 mt-4">
          Meet our top contributors who make learning accessible for everyone.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          {contributors.map((contributor) => (
            <div
              key={contributor.id}
              className="shadow-md rounded-lg overflow-hidden text-center border hover:shadow-lg p-4"
            >
              <img
                src={contributor.logo}
                alt={contributor.name}
                className="w-24 h-24 mx-auto"
              />
              <h4 className="text-lg font-bold mt-2">{contributor.name}</h4>
              <p className="text-gray-500 text-sm mt-2">{contributor.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopContributors;

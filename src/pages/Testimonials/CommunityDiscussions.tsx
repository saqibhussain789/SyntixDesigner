import React from 'react';
import P1 from "../../assets/Testimonials/Alex.png";
import P2 from "../../assets/Testimonials/Lisa.png";
import P3 from "../../assets/Testimonials/Taylor.png";
import P4 from "../../assets/Testimonials/Roni.jpeg";

const CommunityDiscussions = () => {
  const members = [
    { 
      id: 1, 
      name: "Alex Taylor", 
      image: P1, 
      content: "Alex is an enthusiastic contributor focused on user experience and design discussions." 
    },
    { 
      id: 2, 
      name: "Lisa Patel", 
      image: P2, 
      content: "Lisa brings a wealth of knowledge in AI and machine learning topics to the community." 
    },
    { 
      id: 3, 
      name: "Rachel Taylor", 
      image: P3, 
      content: "Rachel actively engages in coding challenges and fosters collaboration among members." 
    },
    { 
      id: 4, 
      name: "Ravi Roberts", 
      image: P4, 
      content: "Ravi contributes insightful articles and supports members in technical discussions." 
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-yellow-500">COMMUNITY</h2>
        <h3 className="text-5xl font-extrabold text-gray-800">DISCUSSIONS</h3>
        <p className="text-gray-500 mt-4">
          Connect and engage with our active community members.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="shadow-md rounded-lg overflow-hidden text-center border hover:shadow-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-bold">{member.name}</h4>
                <p className="text-gray-500 text-sm mt-2">{member.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityDiscussions;

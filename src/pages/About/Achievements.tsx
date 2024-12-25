import React from "react";
import Goal from "../../assets/Achievements/Goal.png"
import Mentoring from "../../assets/Achievements/men.png"
import Development from "../../assets/Achievements/develop.png"
import Skill from "../../assets/Achievements/skill.png"
import Training from "../../assets/Achievements/training.png"
import Communication from "../../assets/Achievements/communication.png"

const Achievements = () => {
  const cards = [
    {
      id: 1,
      image: Goal,
      title: "Goal",
      description:
        "To empower individuals to live healthier, happier, and more fulfilling lives.",
    },
    {
      id: 2,
      image: Mentoring,
      title: "Mentoring",
      description:
        "To be a globally recognized platform for mental health and wellness resources.",
    },
    {
      id: 3,
      image: Development,
      title: "Development",
      description:
        "Integrity, inclusivity, and innovation in everything we do to support well-being.",
    },
    {
        id: 4,
        image: Skill,
        title: "Skill",
        description:
          "Integrity, inclusivity, and innovation in everything we do to support well-being.",
      },
      {
        id: 5,
        image: Training,
        title: "Training",
        description:
          "Integrity, inclusivity, and innovation in everything we do to support well-being.",
      },
      {
        id: 6,
        image: Communication,
        title: "Communication",
        description:
          "Integrity, inclusivity, and innovation in everything we do to support well-being.",
      },
  ];

  return (
    <div className="py-16 bg-white">
     <div className="max-w-7xl px-4 mx-auto text-left">
        <h2 className="text-4xl font-bold text-yellow-500">OUR</h2>
        <h3 className="text-5xl font-extrabold text-gray-800">ACHIEVEMENTS</h3>
        <p className="mt-4 text-gray-500 text-lg">
          Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
          <br />
          Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
          tincidunt tristique enim sed sollicitudin.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition"
            style={{ boxShadow: "0 4px 10px rgba(255, 223, 0, 0.6)" }} // Yellow shadow
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-16 h-16 mb-4"
            />

            {/* Card Heading */}
            <h4 className="text-xl font-semibold text-gray-800">{card.title}</h4>

            {/* Description */}
            <p className="mt-2 text-center text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;

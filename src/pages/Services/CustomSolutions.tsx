import React from "react";
import Stat from "../../assets/Customers/stats.png"
import Trust from "../../assets/Customers/trust.png"
import Growth from "../../assets/Customers/growth.png"
import Result from "../../assets/Customers/results.png"

const CustomSolutions = () => {
  const impactCards = [
    {
      id: 1,
      icon: Stat, 
      title: "Requirements",
      description: "Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.",
    },
    {
      id: 2,
      icon: Trust, 
      title: "Design",
      description: "Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.",
    },
    {
      id: 3,
      icon: Growth, 
      title: "Development",
      description: "Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.",
    },
    {
      id: 4,
      icon: Result, 
      title: "Test",
      description: "Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.",
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl px-4 mx-auto text-left">
        <h2 className="text-4xl font-bold text-yellow-500">CUSTOM</h2>
        <h3 className="text-5xl font-extrabold text-gray-800">SOLUTIONS</h3>
        <p className="mt-4 text-gray-500 text-lg">
          Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
          <br />
          Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
          tincidunt tristique enim sed sollicitudin.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 max-w-7xl mt-12 mx-auto px-4">
        {impactCards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg hover:shadow-xl transition"
            style={{ boxShadow: "0 4px 10px rgba(255, 223, 0, 0.6)" }} // Yellow shadow for cards
          >
            {/* Icon */}
            <img src={card.icon} alt={card.title} className="w-16 h-16 mb-4" />

            {/* Title */}
            <h4 className="text-xl font-bold text-gray-800">{card.title}</h4>

            {/* Description */}
            <p className="mt-2 text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSolutions;

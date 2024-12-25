import React from "react";
import Goal from "../../assets/Values/Goal.png"
import Integrity from "../../assets/Values/integrity.png"
import Quality from "../../assets/Values/Quality.png"
import Team from "../../assets/Values/team.png"
import Innovation from "../../assets/Values/innovation.png"
import Customers from "../../assets/Values/custoers.png"

const CoreValues = () => {
  const cards = [
    { id: 1, image: Team, title: "TEAM WORK" },
    { id: 2, image: Innovation, title: "INNOVATION" },
    { id: 3, image: Integrity, title: "INTEGRITY" },
    { id: 4, image: Quality, title: "QUALITY" },
    { id: 5, image: Customers, title: "CUSTOMERS" },
    { id: 6, image: Goal, title: "GOALS" },
  ];

  return (
    <div className="py-16 bg-gray-100">
     <div className="max-w-7xl px-4 mx-auto text-left">
        <h2 className="text-4xl font-bold text-yellow-500">OUR</h2>
        <h3 className="text-5xl font-extrabold text-gray-800">CORE VALUES</h3>
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
            className="flex flex-col items-center p-6 bg-white shadow-lg hover:shadow-xl transition"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;

import React from "react";
import Branding from "../../assets/WhyChooseus/Brand.png"
import Design from "../../assets/WhyChooseus/design.png"
import Support from "../../assets/WhyChooseus/support.png"

const WhyChooseUs = () => {
  const cards = [
    {
      id: 1,
      icon: Branding, 
      title: "Branding Identity",
      description: "Vitae sollicitudin ipsum tincidunt in. Sed tincidunt tristique enim sed sollicitudin.",
    },
    {
      id: 2,
      icon: Design,
      title: "Unique Design",
      description: "Vitae sollicitudin ipsum tincidunt in. Sed tincidunt tristique enim sed sollicitudin.",
    },
    {
      id: 3,
      icon: Support,
      title: "Support",
      description: "Vitae sollicitudin ipsum tincidunt in. Sed tincidunt tristique enim sed sollicitudin.",
    },
  ];

  return (
    <div className="py-16 bg-white">
      
      
     <div className="max-w-7xl px-4 mx-auto text-left">
        <h2 className="text-4xl font-bold text-yellow-500">WHY YOU CHOOSE</h2>
        <h3 className="text-5xl font-extrabold text-gray-800">SYNTIX DESIGNER</h3>
        <p className="mt-4 text-gray-500 text-lg">
          Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
          <br />
          Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
          tincidunt tristique enim sed sollicitudin.
        </p>
      </div>


      {/* Cards */}
      <div className="grid grid-cols-1 mt-12 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col items-center p-6 border border-yellow-400 rounded-lg bg-white hover:shadow-xl transition"
          >
            {/* Icon */}
            <img src={card.icon} alt={card.title} className="w-16 h-16 mb-4" />

            {/* Title */}
            <h4 className="text-xl font-bold text-gray-800">{card.title}</h4>

            {/* Description */}
            <p className="mt-2 text-center text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;

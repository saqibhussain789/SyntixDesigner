import React from "react";
import { FaLightbulb, FaBrain, FaCogs } from "react-icons/fa";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaLightbulb className="text-3xl text-yellow-500" />,
      title: "Innovative Thinking",
      description: "Phasellus non dolor nibh. Nullam elementum.",
    },
    {
      icon: <FaBrain className="text-3xl text-yellow-500" />,
      title: "Creative Solutions",
      description: "Phasellus non dolor nibh. Nullam elementum.",
    },
    {
      icon: <FaCogs className="text-3xl text-yellow-500" />,
      title: "Efficient Processes",
      description: "Phasellus non dolor nibh. Nullam elementum.",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl px-4 mx-auto text-left">
        <h2 className="text-4xl font-bold text-yellow-500">WHY YOU</h2>
        <h3 className="text-5xl font-extrabold text-gray-800">CHOOSE US</h3>
        <p className="mt-4 text-gray-500 text-lg">
          Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
          <br />
          Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
          tincidunt tristique enim sed sollicitudin.
        </p>
        </div>
        <div className="max-w-7xl px-4 mx-auto text-center">
        <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 transition bg-white border rounded-lg shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full">
                {reason.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-800">
                {reason.title}
              </h4>
              <p className="mt-2 text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>

        <button className="px-6 py-3 mt-10 text-lg font-semibold text-white transition bg-teal-600 rounded-lg hover:bg-teal-700">
          Read More
        </button>
      </div>
    </div>
  );
};

export default WhyChooseUs;

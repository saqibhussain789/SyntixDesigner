import React from "react";
import { FaInfinity, FaVideo, FaCertificate, FaMobileAlt, FaChalkboardTeacher, FaHeadset } from "react-icons/fa";

const KeyFeatures = () => {
  const features = [
    {
      icon: <FaInfinity className="text-3xl text-yellow-500" />,
      title: "Unlimited Access",
      description: "Morbi leo risus, porta ac consectetur, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor.",
    },
    {
      icon: <FaVideo className="text-3xl text-yellow-500" />,
      title: "4500 Video Courses",
      description: "Morbi leo risus, porta ac consectetur, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor.",
    },
    {
      icon: <FaCertificate className="text-3xl text-yellow-500" />,
      title: "Valid Certification",
      description: "Morbi leo risus, porta ac consectetur, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor.",
    },
    {
      icon: <FaMobileAlt className="text-3xl text-yellow-500" />,
      title: "On-the-go Learning",
      description: "Morbi leo risus, porta ac consectetur, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor.",
    },
    {
      icon: <FaChalkboardTeacher className="text-3xl text-yellow-500" />,
      title: "Expert Teachers",
      description: "Morbi leo risus, porta ac consectetur, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor.",
    },
    {
      icon: <FaHeadset className="text-3xl text-yellow-500" />,
      title: "24x7 Super Support",
      description: "Morbi leo risus, porta ac consectetur, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor.",
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl px-4 mx-auto text-left">
        <h2 className="text-4xl font-bold text-yellow-500">OUR</h2>
        <h3 className="text-5xl font-extrabold text-gray-800">Key Features</h3>
        <p className="mt-4 text-gray-500 text-lg">
          Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
          <br />
          Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
          tincidunt tristique enim sed sollicitudin.
        </p>
        

        <div className="grid gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 transition duration-300 transform bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-yellow-100 rounded-full">
                {feature.icon}
              </div>
              <h4 className="mt-4 text-xl font-semibold text-gray-800">
                {feature.title}
              </h4>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;

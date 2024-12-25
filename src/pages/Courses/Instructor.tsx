import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const TopInstructor = () => {
  const instructors = [
    {
      id: 1,
      name: "Thomas Webb",
      role: "Professor of Business Strategy",
      institution: "University of Cambridge",
      social: { twitter: "#", linkedin: "#" },
    },
    {
      id: 2,
      name: "Courtney Henry",
      role: "Marketing Expert",
      institution: "Harvard Business School",
      social: { twitter: "#", linkedin: "#" },
    },
    {
      id: 3,
      name: "Albert Fone",
      role: "Former Tech Lead",
      institution: "London Tech Labs",
      social: { twitter: "#", linkedin: "#" },
    },
    {
      id: 4,
      name: "Marvin McKinney",
      role: "Economics Professor",
      institution: "London School of Economics",
      social: { twitter: "#", linkedin: "#" },
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl px-4 mx-auto">
        <div className="max-w-7xl px-4 mx-auto text-left">
          <h2 className="text-4xl font-bold text-yellow-500">TOP</h2>
          <h3 className="text-5xl font-extrabold text-gray-800">INSTRUCTORS</h3>
          <p className="mt-4 text-gray-500 text-lg">
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            <br />
            Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
            tincidunt tristique enim sed sollicitudin.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-4 mt-10">
        {instructors.map((instructor) => (
          <div
            key={instructor.id}
            className="bg-white border rounded-lg shadow-sm hover:shadow-lg transition p-4 text-center"
          >
            <h4 className="text-xl font-semibold text-gray-800">{instructor.name}</h4>
            <p className="mt-2 text-sm text-gray-600">{instructor.role}</p>
            <p className="mt-1 text-sm text-gray-500">{instructor.institution}</p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href={instructor.social.twitter}
                className="text-blue-500 hover:text-blue-600 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href={instructor.social.linkedin}
                className="text-blue-700 hover:text-blue-800 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopInstructor;

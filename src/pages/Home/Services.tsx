import React from "react";
import WebImg from "../../assets/Courses/web.png";
import RandImg from "../../assets/Courses/rndom.png";
import PG from "../../assets/Courses/photography.jpeg"
const Services = () => {
  const courses = [
    {
      image: WebImg,
      title: "Web Development",
      description: "Phasellus non dolor nibh. Nullam elementum.",
    },
    {
      image: RandImg,
      title: "Graphic Designing",
      description: "Phasellus non dolor nibh. Nullam elementum.",
    },
    {
      image: PG,
      title: "Photography",
      description: "Phasellus non dolor nibh. Nullam elementum.",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl px-4 mx-auto text-left">
        <h2 className="text-4xl font-bold text-yellow-500">OUR</h2>
        <h3 className="text-5xl font-extrabold text-gray-800">SERVICES</h3>
        <p className="mt-4 text-gray-500 text-lg">
          Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
          <br />
          Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
          tincidunt tristique enim sed sollicitudin.
        </p>
      </div>
      <div className="max-w-6xl px-4 mx-auto text-center">
        <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="overflow-hidden transition bg-white rounded-lg shadow-lg hover:shadow-xl"
            >
              <img
                src={course.image}
                alt={course.title}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800">
                  {course.title}
                </h4>
                <p className="mt-2 text-gray-600">{course.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="px-10 py-3 mt-10 text-lg font-semibold text-white transition bg-teal-600 rounded-lg hover:bg-teal-700">
          Detail
        </button>
      </div>
    </div>
  );
};

export default Services;

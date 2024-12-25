import React from "react";

const LearningPath = () => {
  const paths = [
    {
      id: 1,
      title: "Learn",
      description: "Discover new knowledge and skills from experts in various fields.",
    },
    {
      id: 2,
      title: "Explore",
      description: "Navigate through topics and find the best resources tailored for you.",
    },
    {
      id: 3,
      title: "Dream",
      description: "Turn your learning journey into a dream career with proper guidance.",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl px-4 mx-auto">
      <div className="max-w-7xl px-4 mx-auto text-left">
        <h2 className="text-4xl font-bold text-yellow-500">LEARNING</h2>
        <h3 className="text-5xl font-extrabold text-gray-800">PATH</h3>
        <p className="mt-4 text-gray-500 text-lg">
          Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
          <br />
          Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
          tincidunt tristique enim sed sollicitudin.
        </p>
      </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 mt-10">
        {paths.map((path) => (
          <div
            key={path.id}
            className="bg-white border rounded-lg shadow-sm hover:shadow-lg transition p-6 text-center"
          >
            <h4 className="text-xl font-semibold text-gray-800">{path.title}</h4>
            <p className="mt-2 text-sm text-gray-600">{path.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPath;

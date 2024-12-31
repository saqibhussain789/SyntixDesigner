import { useState } from "react";

const PopularTags = () => {
  const [tags] = useState(["Photography", "Design", "Coding", "React", "Tailwind", "JavaScript"]);
  const rightCardText = "Explore how tags are used in projects and articles. Click below to dive into more details.";

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-left mb-8">
          <h2 className="text-4xl font-bold text-yellow-500">POPULAR</h2>
          <h3 className="text-5xl font-extrabold text-gray-800">TAGS</h3>
        </div>

        {/* Left and Right Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section: Tag Clouds */}
          <div>
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Tag Cloud</h4>
            <div className="flex flex-wrap gap-4">
              {tags.map((tag, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-yellow-200 text-yellow-800 font-bold rounded-full shadow-md hover:bg-yellow-300"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Right Section: Card */}
          <div>
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Post Your Tag</h4>
            <div className="bg-yellow-300 p-6 rounded-lg shadow-lg">
              <p className="text-gray-800 text-lg mb-4">{rightCardText}</p>
              <button className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularTags;

import React from "react";
import P1 from "../../assets/Courses/rndom.png"

const SearchFilterSection = () => {
  const posts = [
    {
      id: 1,
      title: "How to build a website",
      date: "2 hours ago",
      author: "Admin",
      comments: "12 comments",
      image: P1,
    },
    {
      id: 2,
      title: "How to build a website",
      date: "2 hours ago",
      author: "Admin",
      comments: "12 comments",
      image: P1,
    },
    {
      id: 3,
      title: "How to build a website",
      date: "2 hours ago",
      author: "Admin",
      comments: "12 comments",
      image: P1,
    },
    {
      id: 4,
      title: "How to build a website",
      date: "2 hours ago",
      author: "Admin",
      comments: "12 comments",
      image: P1,
    },
  ];

  const categories = [
    "Web Development",
    "Data Science",
    "Machine Learning",
    "UI/UX Design",
    "Program Design",
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading Section */}
        <div className="text-left mb-8">
          <h2 className="text-4xl font-bold text-yellow-500">SEARCH &</h2>
          <h3 className="text-5xl font-extrabold text-gray-800">FILTER</h3>
          <p className="mt-4 text-gray-500 text-lg">
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            <br />
            Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
            tincidunt tristique enim sed sollicitudin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Section (Posts) */}
          
          <div className="lg:col-span-3">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Posts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="border rounded-lg shadow-sm hover:shadow-lg transition bg-yellow-100"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <div className="text-sm text-gray-500 mb-2">
                      <span>{post.date}</span> | <span>{post.author}</span> |{" "}
                      <span>{post.comments}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {post.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section (Categories) */}
          <div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Category
              </h4>
              <div className="flex flex-col gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="text-left px-4 py-2 text-sm font-medium text-yellow-600 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterSection;

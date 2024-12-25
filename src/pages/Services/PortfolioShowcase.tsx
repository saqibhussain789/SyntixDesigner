import React from "react";
import C1 from "../../assets/Components/Component1.webp"
import C2 from "../../assets/Components/Header.webp"
import C3 from "../../assets/Components/Footer.webp"
const PortfolioShowcase = () => {
  const posts = [
    {
      id: 1,
      image: C1,
      title: "How to build a website",
      author: "John Doe",
      date: "5 min read",
      category: "Web Development",
    },
    {
      id: 2,
      image: C2,
      title: "The Future of AI",
      author: "Jane Smith",
      date: "8 min read",
      category: "Artificial Intelligence",
    },
    {
      id: 3,
      image: C3,
      title: "Team Collaboration Tips",
      author: "James Brown",
      date: "6 min read",
      category: "Business",
    },
    {
      id: 4,
      image: C1,
      title: "How to build a website",
      author: "Emily Davis",
      date: "10 min read",
      category: "Web Development",
    },
    {
        id: 5,
        image: C2,
        title: "How to build a website",
        author: "Emily Davis",
        date: "10 min read",
        category: "Web Development",
      },
      {
        id: 6,
        image: C3,
        title: "How to build a website",
        author: "Emily Davis",
        date: "10 min read",
        category: "Web Development",
      },
      {
        id: 7,
        image: C1,
        title: "How to build a website",
        author: "Emily Davis",
        date: "10 min read",
        category: "Web Development",
      },
      {
        id: 8,
        image: C2,
        title: "How to build a website",
        author: "Emily Davis",
        date: "10 min read",
        category: "Web Development",
      },
  ];

  const categories = [
    "Web Development",
    "Business",
    "Data Science",
    "Artificial Intelligence",
    "Design",
  ];

  const recentPosts = [
    "Learn JavaScript in 30 Days",
    "Mastering React",
    "10 CSS Tricks You Didn't Know",
    "SEO Best Practices",
    "How to Build a Portfolio",
  ];

  const tags = ["Coding", "React", "JavaScript", "Business", "Design"];

  return (
    <>
    <div className="max-w-7xl px-4 mx-auto text-left">
    <h2 className="text-4xl font-bold text-yellow-500">PORTFOLIO</h2>
    <h3 className="text-5xl font-extrabold text-gray-800">SHOWCASE</h3>
    <p className="mt-4 text-gray-500 text-lg">
      Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
      <br />
      Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
      tincidunt tristique enim sed sollicitudin.
    </p>
  </div>
    <div className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
   
      {/* Left Section */}
      <div className="lg:col-span-2">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white border rounded-lg shadow-sm hover:shadow-lg transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
                <h4 className="mt-2 text-lg font-semibold text-gray-800">
                  {post.title}
                </h4>
                <p className="text-sm text-yellow-600">{post.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div>
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Category</h3>
          <div className="space-y-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className="w-full text-left px-4 py-2 text-sm font-medium text-yellow-600 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Posts</h3>
          <ul className="space-y-3">
            {recentPosts.map((post, index) => (
              <li
                key={index}
                className="px-4 py-2 bg-yellow-100 text-yellow-600 rounded-lg hover:bg-yellow-200 transition"
              >
                {post}
              </li>
            ))}
          </ul>
        </div>

        {/* Tag Cloud */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Tag Cloud</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Plain Text */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Plain Text</h3>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
            aliquet metus. Nam quis risus nec mi luctus gravida.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default PortfolioShowcase;

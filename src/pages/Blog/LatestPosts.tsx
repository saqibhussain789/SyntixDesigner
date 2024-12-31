import P1 from "../../assets/Blog/P1.png"
import P2 from "../../assets/Blog/p2.jpeg"
import P3 from "../../assets/Blog/p3.jpeg"
import Person1 from "../../assets/Blog/person1.jpeg"
import Person2 from "../../assets/Blog/person2.jpeg"
import Person3 from "../../assets/Blog/person3.jpeg"


const LatestPosts = () => {
  const posts = [
    {
      id: 1,
      title: "Mastering React in 2024",
      content: "A complete guide to ReactJS for beginners and professionals.",
      authorImg: Person1,
      postImg: P1,
    },
    {
      id: 2,
      title: "10 Tips for Effective UI Design",
      content: "Learn how to create clean and modern user interfaces.",
      authorImg: Person2,
      postImg: P2,
    },
    {
      id: 3,
      title: "Photography Basics for Beginners",
      content: "An essential guide for those new to photography.",
      authorImg: Person3,
      postImg: P3,
    },
  ];

  const recommendedTopics = ["React Basics", "UI/UX Design", "Photography", "JavaScript Tips"];

  return (
    <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-yellow-500">FEATURED</h2>
        <h3 className="text-5xl font-extrabold text-gray-800">ARTICLE</h3>
        </div>
      <div className="max-w-7xl mx-auto mt-5 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-8">
          
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4 relative"
            >
              {/* Author Image */}
              <img
                src={post.authorImg}
                alt="Author"
                className="absolute top-4 left-4 w-10 h-10 rounded-full border border-gray-300"
              />
              {/* Post Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600">{post.content}</p>
              </div>
              {/* Post Image */}
              <img
                src={post.postImg}
                alt="Post"
                className="w-32 h-32 object-cover rounded-lg"
              />
              {/* Three Dots */}
              <button className="absolute bottom-4 right-4 text-gray-400 hover:text-gray-600">
                &#8226;&#8226;&#8226;
              </button>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="space-y-8">
          {/* Limited Access */}
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-yellow-600 mb-4">Limited Access</h3>
            {/* Search Bar */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search posts..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
              />
              <button className="px-4 py-2 bg-yellow-500 text-white font-bold rounded-lg">
                Search
              </button>
            </div>
          </div>

          {/* Recommended Topics */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Recommended Topics</h3>
            <div className="flex flex-wrap gap-2">
              {recommendedTopics.map((topic, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-yellow-100 text-yellow-600 font-medium rounded-lg text-sm"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;

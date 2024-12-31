import C1 from "../../assets/Components/Component1.webp";
import C2 from "../../assets/Components/Header.webp";
import C3 from "../../assets/Components/Footer.webp";

const LatestPosts = () => {
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
  ];

  return (
    <>
      {/* Heading Section */}
      <div className="max-w-7xl px-4 mx-auto text-left">
        <h2 className="text-4xl font-bold text-yellow-500">LATEST</h2>
        <h3 className="text-5xl font-extrabold text-gray-800">POSTS</h3>
        <p className="mt-4 text-gray-500 text-lg">
          Stay updated with our latest articles and tutorials to enhance your
          skills and knowledge.
        </p>
      </div>

      {/* Left Section (Posts Only) */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </>
  );
};

export default LatestPosts;

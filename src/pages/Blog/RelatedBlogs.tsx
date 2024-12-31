import B1 from "../../assets/Blog/Blog1.jpeg"
import B2 from "../../assets/Blog/Blog2.jpeg"
import B3 from "../../assets/Blog/Blog3.jpeg"

const RelatedBlogs = () => {
  const blogsLeft = [
    {
      id: 1,
      imageUrl: B1, 
      uploadDate: "2024-12-01",
      title: "Mastering the Art of Photography",
      content: "Discover essential tips and techniques to elevate your photography skills and capture breathtaking moments like a pro.",
      categories: ["Photography", "Design"],
    },
    {
      id: 2,
      imageUrl: B2, 
      uploadDate: "2024-12-05",
      title: "Innovative UI Design Trends 2024",
      content: "Explore the latest trends in user interface design and learn how to create modern, user-friendly interfaces for your projects.",
      categories: ["Development", "UI/UX"],
    },
  ];

  const blogRight = {
    id: 3,
    imageUrl: B3, 
    uploadDate: "2024-12-10",
    title: "Why Web Development Is the Future",
    content: "Web development continues to shape the digital landscape. Dive into the key reasons why it remains one of the most in-demand skills globally.",
    categories: ["Development", "Web Design"],
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="max-w-7xl px-4 mx-auto text-left">
        <h2 className="text-4xl font-bold text-yellow-500">RELATED</h2>
        <h3 className="text-5xl font-extrabold text-gray-800">BLOGS</h3>
        <p className="text-gray-500 text-lg mt-4">
          Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
          <br />
          Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
          tincidunt tristique enim sed sollicitudin.
        </p>
      </div>

        {/* Blog Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5 max-w-7xl">
          {/* Left Section (Two Blog Posts) */}
          <div className="space-y-8">
            {blogsLeft.map((blog) => (
              <div key={blog.id} className="flex">
                <div className="w-1/3">
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-2/3 pl-6">
                  <p className="text-gray-500 text-sm">{blog.uploadDate}</p>
                  <h3 className="text-xl font-bold mt-2">{blog.title}</h3>
                  <p className="text-gray-700 mt-2">{blog.content}</p>
                  <div className="mt-4">
                    {blog.categories.map((category, index) => (
                      <span
                        key={index}
                        className="text-yellow-500 text-sm mr-2 inline-block"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section (One Large Blog Post) */}
          <div className="space-y-8">
            <div className="flex flex-col">
              <div className="mb-6">
                <img
                  src={blogRight.imageUrl}
                  alt={blogRight.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-500 text-sm">{blogRight.uploadDate}</p>
              <h3 className="text-2xl font-bold mt-2">{blogRight.title}</h3>
              <p className="text-gray-700 mt-2">{blogRight.content}</p>
              <div className="mt-4">
                {blogRight.categories.map((category, index) => (
                  <span
                    key={index}
                    className="text-yellow-500 text-sm mr-2 inline-block"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedBlogs;

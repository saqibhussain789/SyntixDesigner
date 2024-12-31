import A1 from "../../assets/Blog/Author1.png"
import A2 from "../../assets/Blog/Author2.png"
import A3 from "../../assets/Blog/Author3.png"

const TopAuthors = () => {
    const authors = [
      {
        id: 1,
        name: "John Doe",
        image: A1,
        profileLink: "#",
      },
      {
        id: 2,
        name: "Jane Smith",
        image: A2,
        profileLink: "#",
      },
      {
        id: 3,
        name: "David Miller",
        image: A3,
        profileLink: "#",
      },
    ];
  
    return (
      <div className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-left mb-8">
            <h2 className="text-4xl font-bold text-yellow-500">TOP</h2>
            <h3 className="text-5xl font-extrabold text-gray-800">AUTHORS</h3>
            <p className="mt-4 text-gray-500 text-lg">
              Meet the brilliant minds behind our platform.
            </p>
          </div>
  
          {/* Authors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {authors.map((author) => (
              <a
                key={author.id}
                href={author.profileLink}
                className="group block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full h-64">
                  <img
                    src={author.image}
                    alt={author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-xl font-bold text-gray-800 group-hover:text-yellow-500 transition-colors">
                    {author.name}
                  </h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default TopAuthors;
  
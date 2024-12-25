const FeaturedComponents = () => {
    const components = [
      {
        id: 1,
        title: "Core Features",
        description: "Discover the key features.",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        title: "Main Tutorials",
        description: "Perfect tutorials for new users.",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        title: "Featured Designs",
        description: "Top-rated designs for developers.",
        image: "https://via.placeholder.com/150",
      },
    ];
  
    return (
      <div className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-left mb-8">
            <h2 className="text-4xl font-bold text-yellow-500">FEATURED</h2>
            <h3 className="text-5xl font-extrabold text-gray-800">COMPONENTS</h3>
            <p className="mt-4 text-gray-500 text-lg">
              Explore our featured components to enhance your projects.
            </p>
          </div>
  
          {/* Components Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {components.map((component) => (
              <div
                key={component.id}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <img
                  src={component.image}
                  alt={component.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-bold">{component.title}</h4>
                <p className="text-gray-500 mt-2">{component.description}</p>
              </div>
            ))}
          </div>
  
          <div className="mt-8 text-center">
            <button className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg">
              Read More
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default FeaturedComponents;
  
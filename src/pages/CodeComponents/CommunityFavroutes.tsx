const CommunityFavorites = () => {
    const favorites = [
      {
        id: 1,
        title: "UI Kit",
        description: "Complete UI Kit for mobile and web apps.",
        icon: "📱",
      },
      {
        id: 2,
        title: "Animation Pack",
        description: "Custom animations for engaging experiences.",
        icon: "🎥",
      },
      {
        id: 3,
        title: "Icon Set",
        description: "High-quality icons for all platforms.",
        icon: "🌟",
      },
      {
        id: 4,
        title: "Design System",
        description: "Comprehensive design systems for teams.",
        icon: "📐",
      },
    ];
  
    return (
      <div className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-left mb-8">
            <h2 className="text-4xl font-bold text-yellow-500">COMMUNITY</h2>
            <h3 className="text-5xl font-extrabold text-gray-800">FAVORITES</h3>
            <p className="mt-4 text-gray-500 text-lg">
              Explore the most loved components by the community.
            </p>
          </div>
  
          {/* Favorite Components */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {favorites.map((favorite) => (
              <div
                key={favorite.id}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-5xl mb-4">{favorite.icon}</div>
                <h4 className="text-xl font-bold">{favorite.title}</h4>
                <p className="text-gray-500 mt-2">{favorite.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default CommunityFavorites;
  
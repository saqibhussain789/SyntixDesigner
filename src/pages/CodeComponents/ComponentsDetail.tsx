const ComponentsDetails = () => {
    const details = [
      {
        id: 1,
        title: "Mobile App Components",
        description: "Design and development components for mobile apps.",
        icon: "📱", // Emoji for representation
      },
      {
        id: 2,
        title: "Website Components",
        description: "Responsive and interactive website components.",
        icon: "🌐",
      },
      {
        id: 3,
        title: "UI/UX Design Components",
        description: "UI/UX essentials to enhance user experience.",
        icon: "🎨",
      },
    ];
  
    return (
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-left mb-8">
            <h2 className="text-4xl font-bold text-yellow-500">COMPONENTS</h2>
            <h3 className="text-5xl font-extrabold text-gray-800">DETAILS</h3>
            <p className="mt-4 text-gray-500 text-lg">
              A brief overview of essential components for your projects.
            </p>
          </div>
  
          {/* Component Details Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {details.map((detail) => (
              <div
                key={detail.id}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-5xl mb-4">{detail.icon}</div>
                <h4 className="text-xl font-bold">{detail.title}</h4>
                <p className="text-gray-500 mt-2">{detail.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ComponentsDetails;
  
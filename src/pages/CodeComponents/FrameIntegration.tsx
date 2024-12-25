const FrameIntegration = () => {
    const integrations = [
      {
        id: 1,
        title: "Seamless Compatibility",
        description: "Integrates easily with your existing setup.",
        icon: "🔗",
      },
      {
        id: 2,
        title: "Reusable Components",
        description: "Save time by reusing well-designed components.",
        icon: "♻️",
      },
      {
        id: 3,
        title: "Scalability",
        description: "Designed to scale with your project.",
        icon: "📈",
      },
    ];
  
    return (
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-left mb-8">
            <h2 className="text-4xl font-bold text-yellow-500">FRAME</h2>
            <h3 className="text-5xl font-extrabold text-gray-800">INTEGRATION</h3>
            <p className="mt-4 text-gray-500 text-lg">
              Efficiently integrate with your existing workflow.
            </p>
          </div>
  
          {/* Integration Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {integrations.map((integration) => (
              <div
                key={integration.id}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-5xl mb-4">{integration.icon}</div>
                <h4 className="text-xl font-bold">{integration.title}</h4>
                <p className="text-gray-500 mt-2">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default FrameIntegration;
  
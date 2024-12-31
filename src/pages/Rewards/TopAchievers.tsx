const TopAchievers = () => {
    const achievers = [
      {
        name: "Sunil Das Gupta",
        position: "1ST POSITION",
        status: "Excellent",
        statusColor: "bg-green-500",
        description: "Product design can be used to structure and define how you deliver value to a business to its customers.",
        avatar: "/placeholder.svg?height=80&width=80"
      },
      {
        name: "Sounak Das",
        position: "2ND POSITION",
        status: "Good",
        statusColor: "bg-blue-500",
        description: "Product design can be used to structure and define how you deliver value to a business to its customers.",
        avatar: "/placeholder.svg?height=80&width=80"
      },
      {
        name: "Supriyo Mitra",
        position: "3RD POSITION",
        status: "Fair",
        statusColor: "bg-orange-500",
        description: "Product design can be used to structure and define how you deliver value to a business to its customers.",
        avatar: "/placeholder.svg?height=80&width=80"
      }
    ];
  
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
          <div className="max-w-7xl px-4 mx-auto text-left">
            <h2 className="text-4xl font-bold text-yellow-500">TOP</h2>
            <h3 className="text-5xl font-extrabold text-gray-800">
              ACHIEVERS
            </h3>
            <p className="mt-4 text-gray-500 text-lg">
              Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
              <br />
              Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
              tincidunt tristique enim sed sollicitudin.
            </p>
  
          {/* Achievers Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {achievers.map((achiever, index) => (
              <div 
                key={index}
                className="bg-yellow-50 rounded-lg p-8 flex flex-col items-center text-center"
              >
                <img
                  src={achiever.avatar}
                  alt={achiever.name}
                  className="w-20 h-20 rounded-full mb-4"
                />
                <h4 className="font-semibold text-gray-900 mb-1">
                  {achiever.name}
                </h4>
                <p className="text-sm font-medium text-gray-600 mb-2">
                  {achiever.position}
                </p>
                <span className={`${achiever.statusColor} text-white text-sm px-4 py-1 rounded-full mb-4`}>
                  {achiever.status}
                </span>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {achiever.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  };
  
  export default TopAchievers;
  
  
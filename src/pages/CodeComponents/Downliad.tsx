const DownloadOption = () => {
    const items = [
      {
        id: 1,
        title: "Photography Basics",
        link: "Download",
        description: "An introductory guide to photography.",
      },
      {
        id: 2,
        title: "Web Development",
        link: "Download",
        description: "A complete guide to front-end and back-end development.",
      },
      {
        id: 3,
        title: "Graphic Design Tips",
        link: "Download",
        description: "Boost your design skills with this resource.",
      },
    ];
  
    return (
      <div className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-left mb-8">
            <h2 className="text-4xl font-bold text-yellow-500">DOWNLOAD</h2>
            <h3 className="text-5xl font-extrabold text-gray-800">OPTION</h3>
            <p className="mt-4 text-gray-500 text-lg">
              Download helpful resources to improve your skills.
            </p>
          </div>
  
          {/* Download Table */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {/* Add horizontal scrolling */}
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300">
                <thead>
                  <tr className="bg-yellow-200">
                    <th className="p-4 text-left font-bold">Title</th>
                    <th className="p-4 text-left font-bold">Description</th>
                    <th className="p-4 text-center font-bold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="p-4">{item.title}</td>
                      <td className="p-4">{item.description}</td>
                      <td className="p-4 text-center">
                        <button className="px-4 py-2 bg-yellow-500 text-white font-bold rounded-lg">
                          {item.link}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
  
          {/* Mobile View (Fallback for smaller screens) */}
          <div className="md:hidden">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-lg shadow-lg mb-4 border border-gray-300"
              >
                <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
                <button className="mt-2 px-4 py-2 bg-yellow-500 text-white font-bold rounded-lg">
                  {item.link}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default DownloadOption;
  
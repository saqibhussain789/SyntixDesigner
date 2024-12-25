const LivePreview = () => {
    return (
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-left mb-8">
            <h2 className="text-4xl font-bold text-yellow-500">LIVE</h2>
            <h3 className="text-5xl font-extrabold text-gray-800">PREVIEW</h3>
            <p className="mt-4 text-gray-500 text-lg">
              Experience our tools with a live preview feature.
            </p>
          </div>
  
          {/* Preview Section */}
          <div className="bg-yellow-300 p-8 rounded-lg shadow-lg">
            <input
              type="text"
              placeholder="Search for articles or components"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 mb-4"
            />
            <button className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg">
              Search
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default LivePreview;
  
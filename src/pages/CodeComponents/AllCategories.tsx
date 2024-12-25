const AllCategories = () => {
    return (
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-left mb-8">
            <h2 className="text-4xl font-bold text-yellow-500">ALL</h2>
            <h3 className="text-5xl font-extrabold text-gray-800">CATEGORIES</h3>
            <p className="mt-4 text-gray-500 text-lg">
              Discover the categories that suit your needs.
            </p>
          </div>
  
          {/* Categories Table */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <input
                type="text"
                placeholder="Search categories"
                className="p-3 rounded-lg border border-gray-300 w-full max-w-md focus:ring-2 focus:ring-yellow-500"
              />
              <button className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg ml-4">
                Search
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-4">
                <input type="checkbox" id="photography" />
                <label htmlFor="photography" className="text-lg">
                  Photography
                </label>
              </div>
              <div className="flex items-center gap-4">
                <input type="checkbox" id="design" />
                <label htmlFor="design" className="text-lg">
                  Design
                </label>
              </div>
              <div className="flex items-center gap-4">
                <input type="checkbox" id="development" />
                <label htmlFor="development" className="text-lg">
                  Development
                </label>
              </div>
              <div className="flex items-center gap-4">
                <input type="checkbox" id="marketing" />
                <label htmlFor="marketing" className="text-lg">
                  Marketing
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AllCategories;
  
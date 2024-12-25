import  { useState } from "react";

const SearchFilter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [results, setResults] = useState([]);

  const data = [
    { id: 1, title: "The Basics of Smart Photography", category: "Photography" },
    { id: 2, title: "Creative & Modern UI Design", category: "Design" },
    { id: 3, title: "The Art of Code", category: "Development" },
  ];

  const handleSearch = () => {
    const filtered = data.filter((item) => {
      const matchesQuery = searchQuery
        ? item.title.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      const matchesCategory = category
        ? item.category === category
        : true;
      return matchesQuery && matchesCategory;
    });

    setResults(filtered);
  };

  return (
    <div className="py-16 bg-yellow-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-left mb-8">
          <h2 className="text-4xl font-bold text-yellow-500">SEARCH &</h2>
          <h3 className="text-5xl font-extrabold text-gray-800">FILTER</h3>
          <p className="mt-4 text-gray-500 text-lg">
            Discover the perfect components for your projects. Search and filter from our extensive database of available resources.
          </p>
        </div>

        {/* Search Box */}
        <div className="bg-yellow-300 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <input
              type="text"
              placeholder="Search photography"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              className="w-full sm:w-auto p-3 rounded-lg border border-gray-300"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Categories selected</option>
              <option value="Photography">Photography</option>
              <option value="Design">Design</option>
              <option value="Development">Development</option>
            </select>
            <button
              className="w-full sm:w-auto px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>

        {/* Results Section */}
        <div className="mt-8">
          {results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-lg shadow-md"
                >
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="text-gray-500">{item.category}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-lg">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;

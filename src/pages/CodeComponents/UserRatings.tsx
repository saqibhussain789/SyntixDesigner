const RatingsReviews = () => {
    const ratingsData = [
      {
        id: 1,
        title: "Rate Alex's Cinema",
        average: 4.5,
        totalReviews: 12938,
      },
      {
        id: 2,
        title: "Rate Alex's Cinema",
        average: 4.5,
        totalReviews: 12938,
      },
    ];
  
    return (
      <div className="py-16 bg-yellow-100">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-left mb-8">
            <h2 className="text-4xl font-bold text-yellow-500">USER RATING &</h2>
            <h3 className="text-5xl font-extrabold text-gray-800">REVIEWS</h3>
            <p className="mt-4 text-gray-500 text-lg">
              Share your thoughts and read what others are saying about the services.
            </p>
          </div>
  
          {/* Ratings Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ratingsData.map((rating) => (
              <div
                key={rating.id}
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-500"
              >
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  {rating.title}
                </h4>
                <div className="flex items-center mb-2">
                  <span className="text-4xl font-extrabold text-gray-800">
                    {rating.average}
                  </span>
                  <span className="ml-2 text-yellow-500 text-lg font-bold">/ 5</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mb-4">
                  <div
                    className="h-full bg-yellow-500"
                    style={{ width: `${(rating.average / 5) * 100}%` }}
                  ></div>
                </div>
                <p className="text-gray-500 text-sm">
                  {rating.totalReviews.toLocaleString()} total reviews
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default RatingsReviews;
  
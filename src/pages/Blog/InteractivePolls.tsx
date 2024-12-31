const InteractivePolls = () => {
  return (
    <div className="py-16 bg-yellow-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading Section */}
        <div className="text-left mb-8">
        <h2 className="text-4xl font-bold text-yellow-500">INTERACTIVE POLLS</h2>
          <h3 className="text-5xl font-extrabold text-gray-800">OR SURVEYS</h3>
          <p className="mt-4 text-gray-500 text-lg">
            Answer the questions below and share your feedback with us.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - Poll Card */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-yellow-500">
              <h3 className="text-xl font-bold text-gray-800">Question 1</h3>
              <p className="mt-2 text-gray-600">
                How would you rate your experience with our service?
              </p>

              {/* Emoji Reactions */}
              <div className="flex items-center justify-between mt-6">
                {["😀", "😊", "😐", "😟", "😢"].map((emoji, index) => (
                  <button
                    key={index}
                    className="text-3xl hover:scale-125 transform transition duration-200"
                  >
                    {emoji}
                  </button>
                ))}
              </div>

              {/* Separator */}
              <div className="my-6 border-t border-gray-300"></div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between">
                <button className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600">
                  Next Question
                </button>
                <p className="text-gray-600">2/3 Questions Remaining</p>
              </div>
            </div>
          </div>

          {/* Right Section - Timer */}
          <div className="bg-yellow-50 p-6 rounded-lg shadow-md flex items-center justify-center">
            <div className="text-center">
              <p className="text-lg text-gray-600">Remaining Time</p>
              <h3 className="text-4xl font-bold text-gray-800">02:35</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractivePolls;

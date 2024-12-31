const RedeemRewards = () => {
    const questions = [
      "What is the minimum goal of the website?",
      "Who is the target audience of the website?",
      "What features or functionalities should the website have?",
      "Who is the target audience of the website?"
    ];
  
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="mb-12">
          <div className="max-w-7xl px-4 mx-auto text-left">
            <h2 className="text-4xl font-bold text-yellow-500">REDEEM</h2>
            <h3 className="text-5xl font-extrabold text-gray-800">
              REWARDS
            </h3>
            <p className="mt-4 text-gray-500 text-lg">
              Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
              <br />
              Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
              tincidunt tristique enim sed sollicitudin.
            </p>
  
          {/* Content */}
          <div className="bg-yellow-50 p-8 rounded-lg mt-10">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Questions */}
              <div>
                <h4 className="text-lg font-semibold mb-4">ANSWER THIS QUESTION GET REWARDS</h4>
                <div className="space-y-4">
                  {questions.map((question, index) => (
                    <div key={index} className="bg-white p-4 rounded shadow-sm">
                      <p className="text-gray-800">{question}</p>
                    </div>
                  ))}
                </div>
                <button className="mt-6 bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors">
                  GET REWARDS
                </button>
              </div>
  
              {/* Image */}
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Rewards Illustration"
                  className="rounded-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
  };
  
  export default RedeemRewards;
  
  
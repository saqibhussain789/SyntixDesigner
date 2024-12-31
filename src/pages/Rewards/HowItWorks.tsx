const HowItWorks = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl px-4 mx-auto text-left">
            <h2 className="text-4xl font-bold text-yellow-500">HOW IT</h2>
            <h3 className="text-5xl font-extrabold text-gray-800">
              WORKS?
            </h3>
            <p className="mt-4 text-gray-500 text-lg">
              Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
              <br />
              Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
              tincidunt tristique enim sed sollicitudin.
            </p>
            <h3 className="text-center text-2xl font-bold mt-10">How It Works?</h3>
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex justify-center items-center text-white text-2xl">
              1
            </div>
            <h4 className="mt-4 font-bold text-xl text-gray-800">Research Topics</h4>
            <p className="text-gray-500 text-center mt-2">
              Explore and understand the topics provided by us.
            </p>
          </div>
          <div className="w-16 h-1 bg-blue-500"></div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex justify-center items-center text-white text-2xl">
              2
            </div>
            <h4 className="mt-4 font-bold text-xl text-gray-800">Submit Work</h4>
            <p className="text-gray-500 text-center mt-2">
              Validate and improve your contributions.
            </p>
          </div>
          <div className="w-16 h-1 bg-purple-500"></div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex justify-center items-center text-white text-2xl">
              3
            </div>
            <h4 className="mt-4 font-bold text-xl text-gray-800">Track Progress</h4>
            <p className="text-gray-500 text-center mt-2">
              Monitor your progress and achievements.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default HowItWorks;

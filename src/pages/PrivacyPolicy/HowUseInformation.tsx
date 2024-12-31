import UI from '../../assets/Privacy/usageinformation.png';

const HowUseInformation = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-left">
          <h2 className="text-4xl font-bold text-yellow-500">HOW USE</h2>
          <h3 className="text-5xl font-extrabold text-gray-800">INFORMATION</h3>
          <p className="mt-4 text-gray-500 text-lg">
            Here's what we collect. Take a moment to see what we gather and how
            it is used. Rest assured, we protect your data with strict privacy
            policies.
          </p>
        </div>

        {/* Cards Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Personal Details Card */}
          <div className="bg-white border-2 border-yellow-500 rounded-lg p-6 text-center shadow-md">
            <div className="mb-4">
              <img
                src="https://via.placeholder.com/80"
                alt="Personal Details"
                className="mx-auto w-16 h-16"
              />
            </div>
            <h4 className="text-2xl font-bold text-gray-800">Personal Details</h4>
            <p className="mt-2 text-gray-500">
              Provides accurate user info. Helps personalize your experience.
            </p>
          </div>

          {/* Account Data Card */}
          <div className="bg-white border-2 border-yellow-500 rounded-lg p-6 text-center shadow-md">
            <div className="mb-4">
              <img
                src="https://via.placeholder.com/80"
                alt="Account Data"
                className="mx-auto w-16 h-16"
              />
            </div>
            <h4 className="text-2xl font-bold text-gray-800">Account Data</h4>
            <p className="mt-2 text-gray-500">
              Tracks account data to enhance user features and services.
            </p>
          </div>

          {/* Usage Information Card */}
          <div className="bg-white border-2 border-yellow-500 rounded-lg p-6 text-center shadow-md">
            <div className="mb-4">
              <img
                src= {UI}
                alt="Usage Information"
                className="mx-auto w-16 h-16"
              />
            </div>
            <h4 className="text-2xl font-bold text-gray-800">Usage Information</h4>
            <p className="mt-2 text-gray-500">
              Provides insights on usage. Helps improve user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowUseInformation;

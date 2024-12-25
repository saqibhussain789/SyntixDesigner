import React from "react";

const CallToAction = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl px-4 mx-auto">
      <div className="max-w-7xl px-4 mx-auto text-left">
        <h2 className="text-4xl font-bold text-yellow-500">CALL TO</h2>
        <h3 className="text-5xl font-extrabold text-gray-800">ACTION</h3>
        <p className="mt-4 text-gray-500 text-lg">
          Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
          <br />
          Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
          tincidunt tristique enim sed sollicitudin.
        </p>
      </div>

        {/* Request a Quote Section */}
        <div className="grid gap-8 mt-10 lg:grid-cols-2 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              Need A Free Quote? Please Feel Free to Contact Us
            </h3>
            <div className="flex items-center mt-4 text-gray-600">
              <p className="flex items-center mr-6">
                <span className="mr-2 text-yellow-500">📞</span>Reply within 24
                hours
              </p>
              <p className="flex items-center">
                <span className="mr-2 text-yellow-500">☎️</span>24 hrs telephone
                support
              </p>
            </div>
            <p className="mt-4 text-gray-600">
              I'd be happy to provide you with a free quote! However, I would
              need more information about what you need assistance with. Please
              provide details about the product or services you're interested
              in, any specifications or requirements, and any other relevant
              information, so I can assist you in generating an accurate quote.
            </p>
            <div className="flex items-center mt-6">
              <span className="flex items-center px-4 py-2 text-lg font-bold text-white bg-yellow-500 rounded">
                📱 +91 1234567890
              </span>
            </div>
          </div>

          {/* Quote Form */}
          <div className="p-6 bg-yellow-400 rounded-lg shadow-md">
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <select
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select A Service
                  </option>
                  <option>Service 1</option>
                  <option>Service 2</option>
                  <option>Service 3</option>
                </select>
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Message"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
                  rows={4}
                ></textarea>
              </div>
              <button className="w-full px-4 py-3 text-white bg-black rounded-lg">
                Request A Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

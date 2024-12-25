const SubmitComponents = () => {
    return (
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-left mb-8">
            <h2 className="text-4xl font-bold text-yellow-500">SUBMIT YOUR</h2>
            <h3 className="text-5xl font-extrabold text-gray-800">COMPONENTS</h3>
            <p className="mt-4 text-gray-500 text-lg">
              Share your custom components with our community!
            </p>
          </div>
  
          {/* Submission Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border p-4 rounded-lg w-full"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border p-4 rounded-lg w-full"
                />
              </div>
              <textarea
                placeholder="Component Details"
                rows="4"
                className="border p-4 rounded-lg w-full mt-4"
              ></textarea>
              <button
                type="submit"
                className="mt-4 px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default SubmitComponents;
  
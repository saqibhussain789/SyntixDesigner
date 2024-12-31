import Experience from "../../assets/Blog/Experince.png";
import Support from "../../assets/Blog/support.png";
import Project from "../../assets/Blog/projects.png";

const WriteForUs = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold text-yellow-500">WRITE</h2>
          <h3 className="text-5xl font-extrabold text-gray-800">FOR US</h3>
          <p className="mt-4 text-gray-500 text-lg">
            Please share your expertise and write for us. Your feedback and
            contributions are invaluable to us.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-yellow-50 p-8 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-6">
            <h4 className="text-3xl font-extrabold text-gray-800">A BIT</h4>
            <h5 className="text-2xl font-bold text-gray-800">WRITE HERE</h5>
            <p className="text-gray-600 text-lg">
              I'm a top online marketer and branding expert. I started my career
              by launching the popular metroverse design. In just a few short
              years, I built the brand to millions of online readers and
              website visitors. I also created award-winning online products
              with millions of sales in online stores. With your expertise,
              share your personalized experiences that only you can give.
            </p>

            {/* Icons */}
            <div className="flex flex-wrap gap-8 mt-4">
              <div className="flex items-center gap-4">
                <img
                  src={Experience}
                  alt="Experience Icon"
                  className="w-10 h-10"
                />
                <div>
                  <h5 className="text-lg font-bold text-gray-800">Experience</h5>
                  <p className="text-sm text-gray-500">5+ years</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={Project}
                  alt="Projects Icon"
                  className="w-10 h-10"
                />
                <div>
                  <h5 className="text-lg font-bold text-gray-800">Projects</h5>
                  <p className="text-sm text-gray-500">50+ completed</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={Support}
                  alt="Support Icon"
                  className="w-10 h-10"
                />
                <div>
                  <h5 className="text-lg font-bold text-gray-800">24/7</h5>
                  <p className="text-sm text-gray-500">Customer Support</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 space-x-4">
              <button className="px-6 py-2 bg-yellow-500 text-white font-bold rounded-lg">
                Hire Me
              </button>
              <button className="px-6 py-2 border border-yellow-500 text-yellow-500 font-bold rounded-lg">
                Download CV
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-gray-700"
                >
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-700"
                >
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="website"
                  className="block text-sm font-bold text-gray-700"
                >
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter your website"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteForUs;

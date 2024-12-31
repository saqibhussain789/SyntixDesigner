import icon1 from "../../assets/Login/icon1.png" 
import icon2 from "../../assets/Login/icon2.png" 
import icon3 from "../../assets/Login/icon3.png" 

const Benefits = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-left">
          <h2 className="text-4xl font-bold text-yellow-500">BENEFITS OF</h2>
          <h3 className="text-5xl font-extrabold text-gray-800">CREATING AN ACCOUNT</h3>
          <p className="mt-4 text-gray-500 text-lg">
            Here's what we collect. Take a moment to see what we gather and how
            it is used. Rest assured, we protect your data with strict privacy
            policies.
          </p>
        </div>

        {/* Cards Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* exclusive access */}
          <div className="bg-white border-2 border-yellow-500 rounded-lg p-6 text-center shadow-md">
            <div className="mb-4">
              <img
                src={icon1}
                alt="Personal Details"
                className="mx-auto w-16 h-16"
              />
            </div>
            <h4 className="text-2xl font-bold text-gray-800">Exclusive Access</h4>
            <p className="mt-2 text-gray-500">
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            </p>
          </div>

          {/* Secure Data Card */}
          <div className="bg-white border-2 border-yellow-500 rounded-lg p-6 text-center shadow-md">
            <div className="mb-4">
              <img
                src={icon2}
                alt="Account Data"
                className="mx-auto w-16 h-16"
              />
            </div>
            <h4 className="text-2xl font-bold text-gray-800">Secure Data</h4>
            <p className="mt-2 text-gray-500">
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            </p>
          </div>

          {/* Stay updated card */}
          <div className="bg-white border-2 border-yellow-500 rounded-lg p-6 text-center shadow-md">
            <div className="mb-4">
              <img
                src= {icon3}
                alt="Usage Information"
                className="mx-auto w-16 h-16"
              />
            </div>
            <h4 className="text-2xl font-bold text-gray-800">Stay Updated</h4>
            <p className="mt-2 text-gray-500">
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

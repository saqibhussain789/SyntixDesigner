import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import UserProfile from "../../assets/Testimonials/girl2profile.jpeg";
import UserProfile2 from "../../assets/Testimonials/girlprofile.jpeg";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "As a satisfied customer of [SaaS Provider], I want to share my positive experience with others. Their software as a service platform has greatly improved the efficiency and productivity of our business operations. The cloud-based solution is user-friendly and regularly updated to stay ahead of the technology curve.",
      name: "Savannah Nguyen",
      role: "Customer",
      avatar: UserProfile,
    },
    {
      quote:
        "As a satisfied customer of [SaaS Provider], I want to share my positive experience with others. Their software as a service platform has greatly improved the efficiency and productivity of our business operations. The cloud-based solution is user-friendly and regularly updated to stay ahead of the technology curve.",
      name: "Savannah Nguyen",
      role: "Customer",
      avatar: UserProfile2,
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl px-4 mx-auto text-left">
        <h2 className="text-4xl font-bold text-yellow-500">TESTIMONIAL</h2>
        <h3 className="text-5xl font-extrabold text-gray-800">
          What Our Customers Say
        </h3>
        <p className="mt-4 text-gray-500 text-lg">
          Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
          <br />
          Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
          tincidunt tristique enim sed sollicitudin.
        </p>
      </div>
      <div className="max-w-7xl px-4 mx-auto text-center">
        <div className="grid gap-8 mt-10 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 transition bg-white rounded-lg shadow-lg hover:shadow-xl"
            >
              <FaQuoteLeft className="mb-4 text-2xl text-yellow-500" />
              <p className="text-gray-600">{testimonial.quote}</p>
              <FaQuoteRight className="mt-4 text-2xl text-yellow-500" />

              <div className="flex flex-col items-center mt-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 mb-2 rounded-full"
                />
                <h4 className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>

                <div className="flex mt-4 space-x-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex} className="text-xl text-yellow-500">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="px-6 py-3 mt-10 text-lg font-semibold text-white transition bg-teal-600 rounded-lg hover:bg-teal-700">
          View All Testimonials
        </button>
      </div>
    </div>
  );
};

export default Testimonials;

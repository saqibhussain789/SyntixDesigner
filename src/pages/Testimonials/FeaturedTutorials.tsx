import HTML from "../../assets/Testimonials/htmll.jpeg";
import Photo from "../../assets/Testimonials/Photography.jpeg";
import Marketing from "../../assets/Testimonials/Marketing.jpeg";

const FeaturedTutorials = () => {
  const tutorials = [
    {
      id: 1,
      title: "HTML Tutorials",
      image: HTML,
      description:
        "Learn the fundamentals of HTML with structured examples and exercises.",
    },
    {
      id: 2,
      title: "Photography",
      image: Photo,
      description:
        "Master the art of photography with practical tips and expert guidance.",
    },
    {
      id: 3,
      title: "Marketing",
      image: Marketing,
      description:
        "Explore marketing strategies to effectively promote and grow your business.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-yellow-500">FEATURED</h2>
        <h3 className="text-5xl font-extrabold text-gray-800">TUTORIALS</h3>
        <p className="text-gray-500 mt-4">
          Learn from the best tutorials handpicked by experts.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              className="shadow-md rounded-lg overflow-hidden border hover:shadow-lg"
            >
              <img
                src={tutorial.image}
                alt={tutorial.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-lg font-bold">{tutorial.title}</h4>
                <p className="text-sm text-gray-500 mt-2">
                  {tutorial.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-teal-600 text-white py-2 px-6 rounded-lg mt-6 mx-auto block hover:bg-teal-700">
          More Tutorials
        </button>
      </div>
    </section>
  );
};

export default FeaturedTutorials;

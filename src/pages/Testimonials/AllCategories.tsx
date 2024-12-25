import Web from "../../assets/Testimonials/web-development.webp";
import Program from "../../assets/Testimonials/programming.webp";
import HTML from "../../assets/Testimonials/HTML.webp";
import Testing from "../../assets/Testimonials/Testing.webp";

const AllCategories = () => {
  const categories = [
    { id: 1, title: "Web Development Training", image: Web },
    { id: 2, title: "Programming Tutorials", image: Program },
    { id: 3, title: "Learn HTML/CSS", image: HTML },
    { id: 4, title: "Software Testing", image: Testing },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-yellow-500">ALL</h2>
        <h3 className="text-5xl font-extrabold text-gray-800">CATEGORIES</h3>
        <p className="text-gray-500 mt-4">
          Explore our various categories to find the best courses for you.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-40 object-cover"
              />
              <h4 className="text-lg font-bold text-center mt-2">
                {category.title}
              </h4>
            </div>
          ))}
        </div>
        <button className="bg-teal-600 text-white py-2 px-6 rounded-lg mt-6 mx-auto block hover:bg-teal-700">
          View All Courses
        </button>
      </div>
    </section>
  );
};

export default AllCategories;

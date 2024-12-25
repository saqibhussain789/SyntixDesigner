import Course from "../../assets/Courses/rndom.png";
import PG from "../../assets/Courses/photography.jpeg";

const CoursesCategories = () => {
  const categories = [
    "All Programme",
    "UI/UX Design",
    "Program Design",
    "Program Design",
    "Program Design",
    "Program Design",
  ];

  const courses = [
    {
      id: 1,
      image: Course,
      title: "Product Management Basic - Course Certificate",
      students: "40 students",
      date: "1 - 14 July 2022",
      description:
        "Product Management Masterclass, you’ll learn with Sarah Johnson.",
      price: "$380",
      originalPrice: "$500",
    },
    {
      id: 2,
      image: Course,
      title: "BM Data Science Professional Certificate",
      students: "11 students",
      date: "1 - 14 July 2022",
      description:
        "Product Management Masterclass, you’ll learn with Sarah Johnson.",
      price: "$678",
      originalPrice: "$900",
    },
    {
      id: 3,
      image: PG,
      title: "The Science of Well-Being",
      students: "234 students",
      date: "1 - 14 July 2022",
      description:
        "Product Management Masterclass, you’ll learn with Sarah Johnson.",
      price: "$123",
      originalPrice: "$500",
    },
    {
      id: 4,
      image: Course,
      title: "Python for Everybody Specialization",
      students: "342 students",
      date: "1 - 14 July 2022",
      description:
        "Product Management Masterclass, you’ll learn with Sarah Johnson.",
      price: "$567",
      originalPrice: "$900",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl px-4 mx-auto text-left">
        <h2 className="text-4xl font-bold text-yellow-500">COURSES</h2>
        <h3 className="text-5xl font-extrabold text-gray-800">CATEGORIES</h3>
        <p className="mt-4 text-gray-500 text-lg">
          Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
          <br />
          Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
          tincidunt tristique enim sed sollicitudin.
        </p>
      </div>

      <div className="flex flex-wrap justify-center mt-10 gap-4 mb-12">
        {categories.map((category, index) => (
          <button
            key={index}
            className="px-4 py-2 text-sm font-medium text-yellow-600 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white border rounded-lg shadow-sm hover:shadow-lg transition"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{course.date}</span>
                <span>{course.students}</span>
              </div>
              <h4 className="mt-2 text-lg font-semibold text-gray-800">
                {course.title}
              </h4>
              <p className="mt-2 text-sm text-gray-600">{course.description}</p>
            </div>
            <div className="flex justify-between items-center p-4 border-t">
              <div>
                <span className="text-lg font-bold text-green-600">
                  {course.price}
                </span>
                <span className="text-sm line-through text-gray-400 ml-2">
                  {course.originalPrice}
                </span>
              </div>
              <button className="px-4 py-2 text-white bg-teal-600 rounded-lg hover:bg-teal-700">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesCategories;

import Structure from "../../assets/Testimonials/Structure.png";
import Practical from "../../assets/Testimonials/Practical.png";
import Career from "../../assets/Testimonials/career.png";

const BenefitsTutorials = () => {
  const benefits = [
    {
      id: 1,
      title: "Structured Learning",
      icon: Structure,
      description:
        "Engage in a well-organized curriculum that guides you through each concept step by step.",
    },
    {
      id: 2,
      title: "Practical Skills",
      icon: Practical,
      description:
        "Acquire hands-on experience with real-world projects to solidify your understanding.",
    },
    {
      id: 3,
      title: "Career Growth",
      icon: Career,
      description:
        "Enhance your professional prospects by mastering new skills and technologies.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-yellow-500">BENEFITS OF</h2>
        <h3 className="text-5xl font-extrabold text-gray-800">TUTORIALS</h3>
        <p className="text-gray-500 mt-4 text-center">
          Our tutorials are designed to provide you with structured knowledge,
          hands-on experience, and career-boosting opportunities. Join thousands
          of learners and unlock your potential.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="shadow-md rounded-lg border text-center p-6 bg-white"
            >
              <img
                src={benefit.icon}
                alt={benefit.title}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        <button className="bg-teal-600 text-white py-2 px-6 rounded-lg mt-6 mx-auto block hover:bg-teal-700">
          More Details
        </button>
      </div>
    </section>
  );
};

export default BenefitsTutorials;

import Branding from "../../assets/Testimonials/Brand.png";
import Design from "../../assets/Testimonials/design.png";
import Support from "../../assets/Testimonials/support.png";

const InteractiveExample = () => {
  const examples = [
    {
      id: 1,
      icon: Branding,
      title: "Branding Identity",
      content:
        "Create a strong and unique brand identity that resonates with your audience.",
    },
    {
      id: 2,
      icon: Design,
      title: "Unique Design",
      content:
        "Craft visually stunning designs that captivate and inspire creativity.",
    },
    {
      id: 3,
      icon: Support,
      title: "Support",
      content:
        "Provide exceptional support to ensure satisfaction and success.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-yellow-500">INTERACTIVE</h2>
        <h3 className="text-5xl font-extrabold text-gray-800">EXAMPLE</h3>
        <p className="text-gray-500 mt-4">
          Discover how we build practical and engaging examples.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {examples.map((example) => (
            <div
              key={example.id}
              className="shadow-md rounded-lg border text-center p-4 flex flex-col items-center"
            >
              <img
                src={example.icon}
                alt={example.title}
                className="w-16 h-16 mb-4 object-contain"
              />
              <h4 className="text-lg font-bold mt-2">{example.title}</h4>
              <p className="text-gray-500 text-sm mt-2">{example.content}</p>
            </div>
          ))}
        </div>
        <button className="bg-teal-600 text-white py-2 px-6 rounded-lg mt-6 mx-auto block hover:bg-teal-700">
          More Examples
        </button>
      </div>
    </section>
  );
};

export default InteractiveExample;

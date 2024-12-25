import React from "react";

const BenefitsEnrolling = () => {
  const benefits = [
    {
      id: 1,
      title: "Personalized Support",
      description: "Get one-on-one guidance and mentorship from our instructors.",
    },
    {
      id: 2,
      title: "Best Results",
      description: "Achieve your goals faster with our structured curriculum.",
    },
    {
      id: 3,
      title: "Trust",
      description: "Join thousands of satisfied learners who have transformed their careers.",
    },
  ];

  return (
    <div className="py-16">
    <div className="max-w-7xl px-4 mx-auto">
    <div className="max-w-7xl px-4 mx-auto text-left">
      <h2 className="text-4xl font-bold text-yellow-500">BENEFITS OF</h2>
      <h3 className="text-5xl font-extrabold text-gray-800">ENROLLING</h3>
      <p className="mt-4 text-gray-500 text-lg">
        Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
        <br />
        Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
        tincidunt tristique enim sed sollicitudin.
      </p>
    </div>
    </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 mt-10">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="bg-white border rounded-lg shadow-sm hover:shadow-lg transition p-6 text-center"
          >
            <h4 className="text-xl font-semibold text-gray-800">{benefit.title}</h4>
            <p className="mt-2 text-sm text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsEnrolling;

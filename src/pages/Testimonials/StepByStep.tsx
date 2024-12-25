import React from 'react';
import UI from "../../assets/Testimonials/uiux.png"
import Master from "../../assets/Testimonials/master.png"
import UserReserach from "../../assets/Testimonials/userreserach.png"
import WorkResearch from "../../assets/Testimonials/work.png"

const StepByStep = () => {
  const steps = [
    { id: 1, icon: UI, title: "Learn UX/UI Basics", content: "Get familiar with the basics of design and user experience." },
    { id: 2, icon: Master, title: "Master Design Tools", content: "Learn how to use popular design tools effectively." },
    { id: 3, icon: UserReserach, title: "User Research", content: "Conduct research to understand the users' needs." },
    { id: 4, icon: WorkResearch, title: "Work on Projects", content: "Apply your skills to real-world design projects." },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-yellow-500">STEP</h2>
        <h3 className="text-5xl font-extrabold text-gray-800">BY STEP</h3>
        <p className="text-gray-500 mt-4">
          Follow these steps to master your skills interactively.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="shadow-md rounded-lg border text-center p-4 flex flex-col items-center justify-between"
            >
              <img
                src={step.icon}
                alt={step.title}
                className="w-16 h-16 mb-4 object-cover"
              />
              <h4 className="text-lg font-bold mt-2">{step.title}</h4>
              <p className="text-gray-500 text-sm mt-2">{step.content}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-600 mt-6 text-center">
          1 interactive example
        </p>
      </div>
    </section>
  );
};

export default StepByStep;

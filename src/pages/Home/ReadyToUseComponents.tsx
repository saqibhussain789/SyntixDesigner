import React from "react";
import Header from "../../assets/Components/Header.webp"
import Footer from "../../assets/Components/Footer.webp"
import Card from "../../assets/Components/Component1.webp"

const ReadyToUseComponents = () => {
  const components = [
    {
      image: Header,
      title: "Header",
      description: "Phasellus non dolor nibh. Nullam elementum. Explore pre-built components for seamless integration.",
    },
    {
      image: Footer,
      title: "Footer",
      description: "Phasellus non dolor nibh. Nullam elementum. Easily customizable for your needs.",
    },
    {
      image: Card,
      title: "Cards",
      description: "Phasellus non dolor nibh. Nullam elementum. Built for speed and efficiency.",
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl px-4 mx-auto text-left">
        <h2 className="text-4xl font-bold text-yellow-500">POPULAR</h2>
        <h3 className="text-5xl font-extrabold text-gray-800">Components</h3>
        <p className="mt-4 text-gray-500 text-lg">
          Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
          <br />
          Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
          tincidunt tristique enim sed sollicitudin.
        </p>
          </div>
          <div className="max-w-7xl px-4 mx-auto text-center">
        <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {components.map((component, index) => (
            <div
              key={index}
              className="overflow-hidden transition bg-white rounded-lg shadow-lg hover:shadow-xl"
            >
              <img
                src={component.image}
                alt={component.title}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800">
                  {component.title}
                </h4>
                <p className="mt-2 text-gray-600">{component.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="px-6 py-3 mt-10 text-lg font-semibold text-white transition bg-teal-600 rounded-lg hover:bg-teal-700">
          View All Components
        </button>
      </div>
    </div>
  );
};

export default ReadyToUseComponents;

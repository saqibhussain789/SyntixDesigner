import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "How long until we deliver your first blog post?",
      answer:
        "Really long one actually the smaller text easier. Even if you’d still like it the answer is no because I do not know what it is. Focus inside on an logical limit.",
    },
    {
      question: "How long until we deliver your first blog post?",
      answer:
        "Really long one actually the smaller text easier. Even if you’d still like it the answer is no because I do not know what it is. Focus inside on an logical limit.",
    },
    {
      question: "How long until we deliver your first blog post?",
      answer:
        "Really long one actually the smaller text easier. Even if you’d still like it the answer is no because I do not know what it is. Focus inside on an logical limit.",
    },
    {
      question: "How long until we deliver your first blog post?",
      answer:
        "Really long one actually the smaller text easier. Even if you’d still like it the answer is no because I do not know what it is. Focus inside on an logical limit.",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl px-4 mx-auto">
      <div className="max-w-7xl px-4 mx-auto text-left">
        <h2 className="text-4xl font-bold text-yellow-500">SMART</h2>
        <h3 className="text-5xl font-extrabold text-gray-800">FAQ</h3>
        <p className="text-gray-500 text-2xl mt-4">
          Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
          <br />
          Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
          tincidunt tristique enim sed sollicitudin.
        </p>
      </div>

        {/* FAQ Section */}
        <div className="grid gap-6 mt-10 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`p-6 bg-yellow-100 rounded-lg shadow-lg transition duration-300 ${
                activeIndex === index ? "border-l-4 border-yellow-500" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between cursor-pointer">
                <h4 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h4>
                <span className="text-2xl text-gray-600">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

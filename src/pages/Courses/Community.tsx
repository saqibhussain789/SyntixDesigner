const GlobalCommunity = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sophia Johnson",
      country: "United States",
      feedback:
        "This platform has completely changed my career trajectory. Highly recommended!",
    },
    {
      id: 2,
      name: "Liam Chen",
      country: "China",
      feedback: "I never thought learning could be so enjoyable and effective.",
    },
    {
      id: 3,
      name: "Amara Patel",
      country: "India",
      feedback:
        "The support and resources available here are unmatched. Great experience!",
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl px-4 mx-auto">
        <div className="max-w-7xl px-4 mx-auto text-left">
          <h2 className="text-4xl font-bold text-yellow-500">USER</h2>
          <h3 className="text-5xl font-extrabold text-gray-800">TESTOMONIAL</h3>
          <p className="mt-4 text-gray-500 text-lg">
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            <br />
            Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
            tincidunt tristique enim sed sollicitudin.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 mt-10">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white border rounded-lg shadow-sm hover:shadow-lg transition p-6"
          >
            <p className="text-sm text-gray-600 italic">
              "{testimonial.feedback}"
            </p>
            <h4 className="mt-4 text-lg font-semibold text-gray-800">
              {testimonial.name}
            </h4>
            <p className="text-sm text-gray-500">{testimonial.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalCommunity;

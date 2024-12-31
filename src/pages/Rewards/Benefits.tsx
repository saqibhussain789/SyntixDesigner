const BenefitsParticipation = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path d="M16 4L20 12H12L16 4Z" fill="currentColor" />
          <path d="M10 14H22L18 22H14L10 14Z" fill="currentColor" />
          <path d="M8 24H24L20 32H12L8 24Z" fill="currentColor" />
        </svg>
      ),
      title: 'Skill Improvement'
    },
    {
      icon: (
        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <circle cx="16" cy="12" r="8" fill="currentColor" />
          <path d="M8 20H24L16 28L8 20Z" fill="currentColor" />
        </svg>
      ),
      title: 'Recognition & Rewards'
    },
    {
      icon: (
        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <rect x="4" y="8" width="24" height="16" rx="2" fill="currentColor" />
          <path d="M4 12H28" stroke="white" strokeWidth="2" />
        </svg>
      ),
      title: 'Real World Experience'
    },
    {
      icon: (
        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path d="M4 24L10 18L16 20L28 8" stroke="currentColor" strokeWidth="2" />
          <path d="M28 8L24 12M28 8L24 4" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: 'Personal Growth'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="mb-12">
          <div className="max-w-7xl px-4 mx-auto text-left">
            <h2 className="text-4xl font-bold text-yellow-500">BENEFITS OF</h2>
            <h3 className="text-5xl font-extrabold text-gray-800">
              PARTICIPATION
            </h3>
            <p className="mt-4 text-gray-500 text-lg">
              Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
              <br />
              Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
              tincidunt tristique enim sed sollicitudin.
            </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600">
                {benefit.icon}
              </div>
              <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
              <p className="mt-2 text-sm text-gray-600">
                Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
              </p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default BenefitsParticipation;

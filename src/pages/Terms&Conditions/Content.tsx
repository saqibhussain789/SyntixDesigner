const ContentOwnership = () => {
    const terms = [
      "All published content, including components, design & codes, remains the intellectual property of the original creator.",
      "By submitting content, you grant us a non-exclusive license to use, modify, and distribute your contribution for public purposes.",
      "Contributors must ensure their submissions are free from third party copyright claims.",
      "Content may be used for educational purposes with proper attribution.",
      "A license hierarchy system allows content sharing among teams & organizations.",
      "Republished content may be used in our products, documentation, or promotional materials with proper attribution.",
      "The license model is non-exclusive & perpetual as stated by third parties & customers.",
      "Content will be given to contributors in derived versions under respective allowances."
    ];
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-left">
          <h2 className="text-4xl font-bold text-yellow-500">CONTENT OWNERSHIP</h2>
          <h3 className="text-5xl font-extrabold text-gray-800">AND LICENSING</h3>
          <p className="mt-4 text-gray-500 text-lg">
            Here's what we collect. Take a moment to see what we gather and how
            it is used. Rest assured, we protect your data with strict privacy
            policies.
          </p>
        </div>

          <div className="bg-yellow-50 rounded-lg p-8 mt-5">
            <h4 className="font-semibold mb-4">To Remember</h4>
            <ul className="space-y-3">
              {terms.map((term, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2"></span>
                  <span className="text-gray-700">{term}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContentOwnership;
  
  
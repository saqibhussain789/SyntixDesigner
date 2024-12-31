const SubscriptionPayment = () => {
    const plans = [
      {
        name: "Free",
        price: "$0",
        features: [
          "Voice messages anywhere",
          "Voice messages anywhere",
          "Voice messages anywhere"
        ],
        buttonText: "Already using",
        buttonClass: "bg-teal-700"
      },
      {
        name: "Premium",
        price: "$9.99",
        features: [
          "Voice messages anywhere",
          "Voice messages anywhere",
          "Voice messages anywhere"
        ],
        buttonText: "Buy now",
        buttonClass: "bg-teal-700"
      },
      {
        name: "Business",
        price: "$29.99",
        features: [
          "Voice messages anywhere",
          "Voice messages anywhere",
          "Voice messages anywhere"
        ],
        buttonText: "Buy now",
        buttonClass: "bg-teal-700"
      }
    ];
  
    return (
      <div className="py-16">
        <div className="max-w-7xl px-4 mx-auto">
          <div className="max-w-7xl px-4 mx-auto text-left">
            <h2 className="text-4xl font-bold text-yellow-500">SUBSCRIPTION &</h2>
            <h3 className="text-5xl font-extrabold text-gray-800">PAYMENT</h3>
            <p className="mt-4 text-gray-500 text-lg">
              Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
              <br />
              Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
              tincidunt tristique enim sed sollicitudin.
            </p>
          </div>
  
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-5">
            {plans.map((plan, index) => (
              <div key={index} className="bg-black rounded-3xl p-8 text-white">
                <h4 className="text-xl font-medium mb-2">{plan.name}</h4>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 ml-1">/mo</span>
                </div>
  
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
  
                <button className={`w-full py-3 rounded-lg ${plan.buttonClass} hover:opacity-90 transition-opacity`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default SubscriptionPayment;
  
  
import Reward from "../../assets/Terms&conditions/Incentives.png"

const RewardsIncentives = () => {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-left">
          <h2 className="text-4xl font-bold text-yellow-500">RWEARDS &</h2>
          <h3 className="text-5xl font-extrabold text-gray-800">INCENTIVES</h3>
          <p className="mt-4 text-gray-500 text-lg">
            Here's what we collect. Take a moment to see what we gather and how
            it is used. Rest assured, we protect your data with strict privacy
            policies.
          </p>
        </div>
  
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-bold mb-4">REWARDS</h4>
              <p className="text-gray-600 mb-6 mt-10">
              Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.Cras dictum tellus dui, vitae 
              sollicitudin ipsum tincidunt in. Sed tincidunt tristique enim sed sollcitudin.Phasellus non dolor
               nibh. Nullam elementum tellus pretium feugiat.Cras dictum tellus dui, vitae sollicitudin ipsum 
               tincidunt in. Sed tincidunt tristique enim sed sollcitudin.Phasellus non dolor nibh. Nullam elementum 
               tellus pretium feugiat.Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed tincidunt
                tristique enim sed sollcitudin.Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
                Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed tincidunt tristique enim sed sollcitudin.
              </p>
              <button className="bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-800 transition-colors mt-10">
                GET MORE REWARDS
              </button>
            </div>
            <div className="flex justify-center mt-5">
              <img
                src={Reward}
                alt="Person with rewards"
                className="max-w-full h-auto rounded-lg bg-yellow-200"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default RewardsIncentives;
  
  
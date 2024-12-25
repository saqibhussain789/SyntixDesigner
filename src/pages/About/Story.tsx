import React from "react";

const Story = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl px-4 mx-auto">
      <div className="max-w-7xl px-4 mx-auto text-left">
        <h2 className="text-4xl font-bold text-yellow-500">OUR</h2>
        <h3 className="text-5xl font-extrabold text-gray-800">STORY</h3>
        <p className="mt-4 text-gray-500 text-lg">
          Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
          <br />
          Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
          tincidunt tristique enim sed sollicitudin.
        </p>
      </div>
      </div>


      {/* Card Section */}
      <div className="max-w-6xl px-4 py-8 mx-auto mt-8 bg-white rounded-lg shadow-lg">
        <p className="text-gray-800 text-lg leading-relaxed">
        Here at Verywell Mind, we know that there’s no one-size-fits-all 
        approach when it comes to mental health and wellness because we’re 
        living it every day with you. That’s why we’re the only dedicated
         mental health and wellness platform that’s there for you in all 
        aspects of your life—whether you’re living with a mental health 
        condition, managing day-to-day stressors, looking to level up your 
        relationships, or tapping into fascinating psychology theories, 
        we hope you’ll leave feeling empowered to take the next steps toward
         showing up as your best self.
          <br />
          <br />
          As research in this space constantly evolves, so does our understanding of
          these topics. You can count on us to sift through the noise that too often makes
          mental health advice confusing or misinformed, bringing it back down to earth
          through clear and actionable guidance. To earn your trust, we have a powerhouse
          team of experts, licensed therapists, board-certified psychiatrists, and the
          latest studies to back everything you’re reading with a stamp of approval.
          <br />
          
        </p>
      </div>

      {/* Button Section */}
      <div className="flex justify-center mt-6">
        <button className="px-6 py-3 text-lg font-semibold text-white bg-sky-900 rounded-lg shadow-md hover:bg-sky-950 hover:shadow-lg transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Story;

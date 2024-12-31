const EligibilityCriteria = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl px-4 mx-auto text-left">
            <h2 className="text-4xl font-bold text-yellow-500">ELIGIBILTY</h2>
            <h3 className="text-5xl font-extrabold text-gray-800">
              CRITERIA
            </h3>
            <p className="mt-4 text-gray-500 text-lg">
              Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
              <br />
              Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
              tincidunt tristique enim sed sollicitudin.
            </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border-2 border-yellow-500 rounded-lg">
            <img
              src="/path-to-image1.jpg"
              alt="Criteria 1"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h4 className="text-xl font-bold mt-4">Educational Background</h4>
            <p className="text-gray-500 mt-2">
              Minimum qualifications required to be eligible.
            </p>
          </div>
          <div className="p-6 border-2 border-yellow-500 rounded-lg">
            <img
              src="/path-to-image2.jpg"
              alt="Criteria 2"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h4 className="text-xl font-bold mt-4">Skills and Experience</h4>
            <p className="text-gray-500 mt-2">
              Showcase your relevant skills for participation.
            </p>
          </div>
          <div className="p-6 border-2 border-yellow-500 rounded-lg">
            <img
              src="/path-to-image3.jpg"
              alt="Criteria 3"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h4 className="text-xl font-bold mt-4">Availability</h4>
            <p className="text-gray-500 mt-2">
              Ensure availability for the required duration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilityCriteria;

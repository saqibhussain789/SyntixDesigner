const PartnersCollaboration = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl px-4 mx-auto">
        <div className="max-w-7xl px-4 mx-auto text-left">
          <h2 className="text-4xl font-bold text-yellow-500">PARTNERS</h2>
          <h3 className="text-5xl font-extrabold text-gray-800">
            COLLABORATION
          </h3>
          <p className="mt-4 text-gray-500 text-lg">
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            <br />
            Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
            tincidunt tristique enim sed sollicitudin.
          </p>
        </div>

        {/* Images and Join Us Button */}
        <div className="grid bg-gray-900 px-5 py-8 justify-center gap-8 mt-10 lg:grid-cols-2">
          <div>
            <img
              src="src/assets/Courses/rndom.png"
              alt="Collaboration 1"
              className="rounded-lg"
            />
          </div>
          <div>
            <img
              src="src/assets/Courses/rndom.png"
              alt="Collaboration 2"
              className="rounded-lg"
            />
          </div>
          <div className="mt-8 text-center">
            <button className="px-6 py-3 text-lg font-bold text-white bg-blue-700 rounded-lg">
              Join Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersCollaboration;

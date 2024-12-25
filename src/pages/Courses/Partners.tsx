import Google from "../../assets/Partners/Google.png";
import Microsoft from "../../assets/Partners/Microsoft.png";
import Adobe from "../../assets/Partners/Adobe.png";

const PartnerWithUs = () => {
  const partners = [
    {
      id: 1,
      name: "Google",
      description: "Empowering education with advanced tools and resources.",
      logo: Google,
    },
    {
      id: 2,
      name: "Microsoft",
      description: "Building a future of learning through technology.",
      logo: Microsoft,
    },
    {
      id: 3,
      name: "Adobe",
      description:
        "Enhancing creativity and innovation for learners worldwide.",
      logo: Adobe,
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl px-4 mx-auto">
        <div className="max-w-7xl px-4 mx-auto text-left">
          <h2 className="text-4xl font-bold text-yellow-500">PARTNER</h2>
          <h3 className="text-5xl font-extrabold text-gray-800">WITH US</h3>
          <p className="mt-4 text-gray-500 text-lg">
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            <br />
            Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
            tincidunt tristique enim sed sollicitudin.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 mt-10">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="bg-white border rounded-lg shadow-sm hover:shadow-lg transition p-6 text-center"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-20 h-20 object-contain mx-auto"
            />
            <h4 className="mt-4 text-lg font-semibold text-gray-800">
              {partner.name}
            </h4>
            <p className="mt-2 text-sm text-gray-600">{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerWithUs;

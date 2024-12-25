
import Quality from "../../assets/Missions/Quality.png"
import Integrity from "../../assets/Missions/integrity.png"
import Experince from "../../assets/Missions/Exp.png"

const MissionVision = () => {
  const cards = [
    {
      id: 1,
      image: Quality,
      title: "Quality",
      description:
        "To empower individuals to live healthier, happier, and more fulfilling lives.",
    },
    {
      id: 2,
      image: Integrity,
      title: "Integrity",
      description:
        "To be a globally recognized platform for mental health and wellness resources.",
    },
    {
      id: 3,
      image: Experince,
      title: "Experince",
      description:
        "Integrity, inclusivity, and innovation in everything we do to support well-being.",
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
     <div className="max-w-7xl px-4 mx-auto text-left">
        <h2 className="text-4xl font-bold text-yellow-500">OUR</h2>
        <h3 className="text-5xl font-extrabold text-gray-800">MISSION VISION</h3>
        <p className="mt-4 text-gray-500 text-lg">
          Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
          <br />
          Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
          tincidunt tristique enim sed sollicitudin.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition"
            style={{ boxShadow: "0 4px 10px rgba(255, 223, 0, 0.6)" }} // Yellow shadow
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-16 h-16 mb-4"
            />

            {/* Card Heading */}
            <h4 className="text-xl font-semibold text-gray-800">{card.title}</h4>

            {/* Description */}
            <p className="mt-2 text-center text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionVision;

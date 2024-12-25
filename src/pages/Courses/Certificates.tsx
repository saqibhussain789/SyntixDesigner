import { FaMedal } from "react-icons/fa";

const CourseRewards = () => {
  const rewards = [
    { color: "text-gray-300", description: "Competition" },
    { color: "text-yellow-500", description: "Results" },
    { color: "text-gray-400", description: "Rewards" },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl px-4 mx-auto text-left text-black bg-white">
        <h2 className="text-4xl font-bold text-yellow-500">COURSE</h2>
        <h3 className="text-5xl font-extrabold text-black">REWARDS</h3>
        <p className="text-gray-500 text-2xl mt-4">
          Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
          <br />
          Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
          tincidunt tristique enim sed sollicitudin.
        </p>
      </div>

      <div className="max-w-7xl px-4 py-8 mx-auto text-center bg-gray-900 text-black">
        <div className="grid grid-cols-3 gap-8 mt-10">
          <div className="col-span-1">
            <h4 className="text-xl font-semibold text-yellow-500">
              COMPETITION
            </h4>
            <p className="mt-2 text-gray-400">
              Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            </p>
          </div>

          <div className="flex items-center justify-center col-span-1 space-x-4">
            {rewards.map((reward, index) => (
              <FaMedal key={index} className={`text-4xl ${reward.color}`} />
            ))}
          </div>

          <div className="col-span-1">
            <h4 className="text-xl font-semibold text-yellow-500">REWARDS</h4>
            <p className="mt-2 text-gray-400">
              Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            </p>
          </div>
        </div>

        <button className="px-6 py-3 mt-10 text-lg font-semibold text-gray-900 transition bg-yellow-500 rounded-lg hover:bg-yellow-600">
          More Details
        </button>
      </div>
    </div>
  );
};

export default CourseRewards;

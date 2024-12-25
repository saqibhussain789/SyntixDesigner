import PreviewImage1 from "../../assets/Learningpreview/C1.webp";
import PreviewImage2 from "../../assets/Learningpreview/ai.webp";
import PreviewImage3 from "../../assets/Learningpreview/marketing.jpeg";

const LearningPreview = () => {
  const previews = [
    {
      id: 1,
      title: "How to build a website",
      description:
        "Master the art of web development in this comprehensive course.",
      image: PreviewImage1,
    },
    {
      id: 2,
      title: "Understanding AI",
      description: "Get insights into the world of artificial intelligence.",
      image: PreviewImage2,
    },
    {
      id: 3,
      title: "Marketing 101",
      description: "Learn the basics of marketing and grow your business.",
      image: PreviewImage3,
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl px-4 mx-auto">
        <div className="max-w-7xl px-4 mx-auto text-left">
          <h2 className="text-4xl font-bold text-yellow-500">LEARNING</h2>
          <h3 className="text-5xl font-extrabold text-gray-800">PREVIEW</h3>
          <p className="mt-4 text-gray-500 text-lg">
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            <br />
            Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
            tincidunt tristique enim sed sollicitudin.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 mt-10">
        {previews.map((preview) => (
          <div
            key={preview.id}
            className="bg-white border rounded-lg shadow-sm hover:shadow-lg transition p-4"
          >
            <img
              src={preview.image}
              alt={preview.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800">
                {preview.title}
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                {preview.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPreview;

import { useState } from 'react';
import Icon1 from "../../assets/Login/captch1.jpeg";
import Icon2 from "../../assets/Login/captch2.jpeg";
import Icon3 from "../../assets/Login/captch3.jpeg";
import Icon4 from "../../assets/Login/captch4.jpeg";
import Icon5 from "../../assets/Login/captch5.jpeg";
import Icon6 from "../../assets/Login/captch6.jpeg";
import Icon7 from "../../assets/Login/captch7.jpeg";
import Icon8 from "../../assets/Login/captch8.jpeg";
import Icon9 from "../../assets/Login/captch9.jpeg";

const SecurityCheck = () => {
  const [selectedImages, setSelectedImages] = useState<number[]>([]);

  const securityImages = [
    { id: 1, src: Icon1 },
    { id: 2, src: Icon2 },
    { id: 3, src: Icon3 },
    { id: 4, src: Icon4 },
    { id: 5, src: Icon5 },
    { id: 6, src: Icon6 },
    { id: 7, src: Icon7 },
    { id: 8, src: Icon8 },
    { id: 9, src: Icon9 },
  ];

  const toggleImage = (id: number) => {
    setSelectedImages((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section className="max-w-7xl mx-auto p-6">
      <div className="text-left">
        <h2 className="text-4xl font-bold text-yellow-500">CAPTCHA OR</h2>
        <h3 className="text-5xl font-extrabold text-gray-800">SECURITY CHECK</h3>
        <p className="mt-4 text-gray-500 text-lg">
          Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
          <br />
          Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
          tincidunt tristique enim sed sollicitudin.
        </p>
      </div>

      <div className="space-y-6 mt-10">
        <div className="bg-blue-100 text-blue-800 p-4 rounded">
          Select all images with crosswalks
        </div>

        <div className="grid grid-cols-3 gap-2">
          {securityImages.map((image) => (
            <button
              key={image.id}
              onClick={() => toggleImage(image.id)}
              className={`relative w-24 h-24 overflow-hidden rounded-lg hover:opacity-90 transition-opacity
                ${selectedImages.includes(image.id) ? 'ring-2 ring-blue-500' : ''}`}
            >
              <img
                src={image.src}
                alt={`Image ${image.id}`}
                className="w-full h-full object-cover"
              />
              {selectedImages.includes(image.id) && (
                <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="rounded border-gray-300" />
            <span className="text-sm text-gray-600">I'm not a robot</span>
          </div>
          <img
            src="https://via.placeholder.com/100?text=reCAPTCHA"
            alt="reCAPTCHA"
            className="h-12"
          />
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
          Verify
        </button>
      </div>
    </section>
  );
};

export default SecurityCheck;

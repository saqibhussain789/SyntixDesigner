import { useState } from "react";

// Define the types for the form inputs
interface FormData {
  name: string;
  email: string;
  details: string;
}

const SubmitComponents = () => {
  // Use useState to handle form data
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    details: "",
  });

  // Handle form input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission (you can add actual form handling logic here)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle form submission, e.g., API call, validation, etc.
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-left mb-8">
          <h2 className="text-4xl font-bold text-yellow-500">SUBMIT YOUR</h2>
          <h3 className="text-5xl font-extrabold text-gray-800">COMPONENTS</h3>
          <p className="mt-4 text-gray-500 text-lg">
            Share your custom components with our community!
          </p>
        </div>

        {/* Submission Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border p-4 rounded-lg w-full"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="border p-4 rounded-lg w-full"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="details"
              placeholder="Component Details"
              rows={4}
              className="border p-4 rounded-lg w-full mt-4"
              value={formData.details}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmitComponents;

import { useState } from "react";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");

  // Subscription handler
  const handleSubscribe = () => {
    // Ensure the event is passed correctly and prevent default form submission
    
    // Validate email
    if (!email.trim()) {
      alert("Please enter a valid email address.");
      return;
    }

    // Add logic for subscription (e.g., API call)
    alert(`Thank you for subscribing with ${email}!`);
    setEmail(""); // Clear input after submission
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold text-yellow-500">NEWSLETTER</h2>
          <h3 className="text-5xl font-extrabold text-gray-800">SUBSCRIPTION</h3>
          <p className="mt-4 text-gray-500 text-lg">
            Please share your expertise and write for us. Your feedback and
            contributions are invaluable to us.
          </p>
        </div>

        {/* Subscription Card */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
          <form
            onSubmit={handleSubscribe} // Attach handler to the form's onSubmit
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <h3 className="text-xl font-bold text-gray-800">
              Signup to Get the Latest News & Updates:
            </h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Properly capture input value
              className="flex-1 w-full sm:w-auto p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;

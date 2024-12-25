import React from "react";

const NewsletterSubscription = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl px-4 mx-auto">
      <div className="max-w-7xl px-4 mx-auto text-left">
        <h2 className="text-4xl font-bold text-yellow-500">NEWSLETTER</h2>
        <h3 className="text-5xl font-extrabold text-gray-800">SUBSCRIPTIONS</h3>
        <p className="mt-4 text-gray-500 text-lg">
          Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
          <br />
          Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
          tincidunt tristique enim sed sollicitudin.
        </p>
      </div>
        {/* Subscription Form */}
        <div className="shadow-xl card mt-10 p-6 bg-white rounded-lg">
          <h4 className="text-xl font-bold text-gray-800 mb-4">
            Get Our Weekly <br /><span className="text-yellow-500">Newsletter</span>
          </h4>
          <p className="text-gray-600 mb-6">
          Get weekly updates on the newest design stories, case <br />studies and tips right in your mailbox. <br />
          <span className="font-bold text-slate-950">Subscribe now!</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 bg-white border border-gray-300 rounded-lg mb-4 sm:mb-0 sm:mr-4"
            />
            <button className="px-6 py-3 text-white bg-sky-900 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;

const UserGuides = () => {
    const guides = [
      {
        id: 1,
        user: {
          name: "Alexandra",
          avatar: "/images/avatar-1.jpg", // Replace with your image path
        },
        question: "How to use dark mode on desktop?",
        answer:
          "To activate dark mode on desktop, go to Settings > Display > Theme and select Dark.",
        time: "2:45 PM",
        date: "12/27/2023",
        likes: 24,
        replies: 5,
      },
      {
        id: 2,
        user: {
          name: "Thomas",
          avatar: "/images/avatar-2.jpg", // Replace with your image path
        },
        question: "How to forward messages, best practices?",
        answer:
          "Select the message you want to forward, click the forward icon, and choose your recipient.",
        time: "3:15 PM",
        date: "12/27/2023",
        likes: 18,
        replies: 3,
      },
      {
        id: 3,
        user: {
          name: "Sophie",
          avatar: "/images/avatar-3.jpg", // Replace with your image path
        },
        question: "Looking help to integrate, What is first necessary steps?",
        answer:
          "Start by reviewing our API documentation and setting up your development environment.",
        time: "4:00 PM",
        date: "12/27/2023",
        likes: 12,
        replies: 7,
      },
    ];
  
    const helpfulLinks = [
      "Getting started guide",
      "API Documentation",
      "Community guidelines",
      "FAQs",
      "Support tickets",
      "Best practices",
      "Release notes",
    ];
  
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-yellow-400"></div>
              <div>
                <h2 className="text-2xl font-bold">USER</h2>
                <h3 className="text-4xl font-bold">GUIDES</h3>
              </div>
            </div>
            <p className="mt-4 text-gray-600 max-w-2xl">
              Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
              Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in.
            </p>
          </div>
  
          <div className="bg-yellow-50 rounded-lg p-6">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Questions List */}
              <div className="md:col-span-2">
                <div className="space-y-4">
                  {guides.map((guide) => (
                    <div
                      key={guide.id}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <img
                          src={guide.user.avatar}
                          alt={guide.user.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium">{guide.user.name}</h4>
                          <p className="text-sm text-gray-500">
                            {guide.time} • {guide.date}
                          </p>
                        </div>
                      </div>
                      <h5 className="font-medium mb-2">{guide.question}</h5>
                      <p className="text-gray-600 text-sm mb-3">{guide.answer}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <button className="flex items-center gap-1 hover:text-gray-700">
                          <span>👍</span> {guide.likes}
                        </button>
                        <button className="flex items-center gap-1 hover:text-gray-700">
                          <span>💬</span> {guide.replies}
                        </button>
                        <button className="hover:text-gray-700">Share</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
  
              {/* Helpful Links */}
              <div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium mb-4">Most helpful posts</h4>
                  <ul className="space-y-2">
                    {helpfulLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="text-sm text-teal-600 hover:text-teal-700"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default UserGuides;
  
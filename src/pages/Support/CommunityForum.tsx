const CommunityForum = () => {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-yellow-400"></div>
              <div>
                <h2 className="text-2xl font-bold">COMMUNITY</h2>
                <h3 className="text-4xl font-bold">FORUM</h3>
              </div>
            </div>
            <p className="mt-4 text-gray-600 max-w-2xl">
              Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
              Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in.
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-8">
            {/* Join Form */}
            <div className="bg-yellow-50 rounded-lg p-8">
              <h4 className="text-2xl font-bold mb-6">Join Community</h4>
              <p className="text-gray-600 mb-8">
                Sign up to be a part of our global family by joining this extraordinary community
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 rounded-md border border-gray-200"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 rounded-md border border-gray-200"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full p-3 rounded-md border border-gray-200"
                />
                <button className="w-full bg-teal-700 text-white py-3 rounded-md hover:bg-teal-800 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
  
            {/* Image */}
            <div>
              <img
                src="/images/community-image.jpg" // Replace with your image path
                alt="Community"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default CommunityForum
  
  
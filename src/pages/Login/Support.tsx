const SupportLink = () => {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-12">
        <div className="max-w-7xl px-4 mx-auto text-left">
          <h2 className="text-4xl font-bold text-yellow-500">CUSTOMER</h2>
          <h3 className="text-5xl font-extrabold text-gray-800">SUPPORT LINK</h3>
          <p className="mt-4 text-gray-500 text-lg">
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            <br />
            Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
            tincidunt tristique enim sed sollicitudin.
          </p>
        </div>
  
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div>
            <h3 className="text-2xl font-bold mb-8">
              Let's discuss<br />
              on something cool<br />
              together
            </h3>
  
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                <span className="text-gray-400">✉</span>
                <input
                  type="email"
                  placeholder="yourdesign@gmail.com"
                  className="flex-1 outline-none text-gray-600"
                />
              </div>
              <button className="w-full bg-[#1a2b3c] text-white p-3 rounded-lg hover:bg-[#1a2b3c]/90 transition-colors">
                +123 456 789
              </button>
              <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                <span className="text-gray-400">📍</span>
                <input
                  type="text"
                  placeholder="123 Street 456 House"
                  className="flex-1 outline-none text-gray-600"
                />
              </div>
            </div>
  
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                f
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                in
              </button>
            </div>
          </div>
  
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="mb-6">
              <p className="mb-3 text-sm font-medium">I'm interested in...</p>
              <div className="flex flex-wrap gap-2">
                {['UI/UX design', 'Web design', 'Graphic design', 'Design system', 'Other'].map((interest) => (
                  <label
                    key={interest}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded cursor-pointer hover:bg-gray-50"
                  >
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="text-sm">{interest}</span>
                  </label>
                ))}
              </div>
            </div>
  
            <form className="space-y-6">
              <div>
                <label className="text-sm text-gray-600">Your name</label>
                <div className="mt-1 border-b border-gray-300">
                  <input
                    type="text"
                    className="w-full p-2 outline-none focus:border-yellow-400"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-600">Your email</label>
                <div className="mt-1 border-b border-gray-300">
                  <input
                    type="email"
                    className="w-full p-2 outline-none focus:border-yellow-400"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-600">Your message</label>
                <div className="mt-1 border-b border-gray-300">
                  <textarea
                    rows={4}
                    className="w-full p-2 outline-none resize-none focus:border-yellow-400"
                  />
                </div>
              </div>
  
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-medium py-3 rounded hover:bg-yellow-500 transition-colors"
              >
                ✈ Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    )
  }
  
  export default SupportLink
  
  
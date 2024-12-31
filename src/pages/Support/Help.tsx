const HelpTopic = () => {
    const topics = [
      'HTML', 'Design', 'Python', 'CSS',
      'PHP', 'Android', 'Swift', 'iOS',
      'Linux', 'React', 'Angular', 'Vue'
    ]
  
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-yellow-400"></div>
              <div>
                <h2 className="text-2xl font-bold">HELP</h2>
                <h3 className="text-4xl font-bold">TOPIC</h3>
              </div>
            </div>
            <p className="mt-4 text-gray-600 max-w-2xl">
              Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
              Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in.
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-3xl font-bold mb-2">HELLO,</h4>
              <h5 className="text-2xl font-bold mb-6">HOW CAN WE HELP</h5>
              <button className="bg-teal-700 text-white px-8 py-3 rounded-md hover:bg-teal-800 transition-colors mb-8">
                SEARCH COURSES
              </button>
  
              <div className="flex flex-wrap gap-2">
                {topics.map((topic, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-yellow-50 rounded-full text-sm cursor-pointer hover:bg-yellow-100"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
  
            <div>
              <img
                src="/images/help-image.jpg" // Replace with your image path
                alt="Help Center"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default HelpTopic
  
  
const VideoTutorials = () => {
    const tutorials = [
      {
        title: 'HTML TUTORIAL',
        image: '/images/tutorial-1.jpg', // Replace with your image path
        description: 'Learn HTML basics and advanced techniques'
      },
      {
        title: 'PHOTOGRAPHY TUTORIALS',
        image: '/images/tutorial-2.jpg', // Replace with your image path
        description: 'Master photography skills with our guides'
      },
      {
        title: 'MARKETING TUTORIALS',
        image: '/images/tutorial-3.jpg', // Replace with your image path
        description: 'Discover marketing strategies and tips'
      }
    ]
  
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-yellow-400"></div>
              <div>
                <h2 className="text-2xl font-bold">VIDEO</h2>
                <h3 className="text-4xl font-bold">TUTORIALS</h3>
              </div>
            </div>
            <p className="mt-4 text-gray-600 max-w-2xl">
              Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
              Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in.
            </p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-6">
            {tutorials.map((tutorial, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                  <img
                    src={tutorial.image}
                    alt={tutorial.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-4xl">▶</span>
                  </div>
                </div>
                <h4 className="font-semibold mb-2">{tutorial.title}</h4>
                <p className="text-sm text-gray-600">{tutorial.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default VideoTutorials;
  
  
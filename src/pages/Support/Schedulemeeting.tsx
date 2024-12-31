const ScheduleMeeting = () => {
    const timelineItems = [
      { 
        name: 'Eclipse', 
        description: 'Project to showcase',
        icon: '/images/project-icon.jpg' // Replace with your image path
      },
      {
        name: 'Sam',
        description: 'Finance board',
        icon: '/images/user-icon.jpg' // Replace with your image path
      },
      {
        name: 'Internal',
        description: 'Resource shared',
        icon: '/images/internal-icon.jpg' // Replace with your image path
      }
    ]
  
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-yellow-400"></div>
              <div>
                <h2 className="text-2xl font-bold">SCHEDULE</h2>
                <h3 className="text-4xl font-bold">MEETING</h3>
              </div>
            </div>
            <p className="mt-4 text-gray-600 max-w-2xl">
              Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
              Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in.
            </p>
          </div>
  
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Timeline */}
              <div className="border-r border-gray-200">
                <div className="space-y-8">
                  {timelineItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-8 h-8 rounded"
                      />
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
  
              {/* Meeting Form */}
              <div className="md:col-span-2">
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Meeting title"
                    className="w-full p-3 bg-gray-100 rounded-md"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <textarea
                      placeholder="Notes..."
                      rows={4}
                      className="w-full p-3 bg-gray-100 rounded-md resize-none"
                    />
                  </div>
                  <div className="bg-gray-100 rounded-md p-4">
                    <div className="text-right mb-2">
                      <span className="text-blue-600 text-sm cursor-pointer">Upload file</span>
                    </div>
                    <div className="border-2 border-dashed border-gray-300 rounded-md h-32 flex items-center justify-center">
                      <span className="text-gray-500">Drop files here</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded">
                    Upload
                  </button>
                  <button className="px-4 py-2 bg-red-100 text-red-600 rounded">
                    Delete
                  </button>
                  <button className="px-4 py-2 bg-green-100 text-green-600 rounded">
                    Edit
                  </button>
                  <button className="px-4 py-2 bg-yellow-100 text-yellow-600 rounded">
                    Delete system
                  </button>
                  <button className="px-4 py-2 bg-purple-100 text-purple-600 rounded">
                    External credit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default ScheduleMeeting
  
  
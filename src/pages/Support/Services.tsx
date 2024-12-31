const ServicesStatus = () => {
    const services = [
      {
        name: 'Database',
        uptime: [
          { status: 'up', duration: '2h' },
          { status: 'up', duration: '4h' },
          { status: 'up', duration: '6h' },
          { status: 'down', duration: '1h' },
          { status: 'up', duration: '11h' }
        ]
      },
      {
        name: 'API endpoints',
        uptime: [
          { status: 'up', duration: '6h' },
          { status: 'up', duration: '8h' },
          { status: 'down', duration: '2h' },
          { status: 'up', duration: '8h' }
        ]
      },
      {
        name: 'User service',
        uptime: [
          { status: 'up', duration: '12h' },
          { status: 'down', duration: '1h' },
          { status: 'up', duration: '11h' }
        ]
      }
    ]
  
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-yellow-400"></div>
              <div>
                <h2 className="text-2xl font-bold">SERVICES</h2>
                <h3 className="text-4xl font-bold">STATUS</h3>
              </div>
            </div>
            <p className="mt-4 text-gray-600 max-w-2xl">
              Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
              Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in.
            </p>
          </div>
  
          <div className="bg-gray-900 rounded-lg p-8">
            {services.map((service, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <div className="flex items-center justify-between text-white mb-2">
                  <span>{service.name}</span>
                  <span className="text-sm text-gray-400">99.9% uptime</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="flex h-full">
                    {service.uptime.map((period, idx) => (
                      <div
                        key={idx}
                        className={`${
                          period.status === 'up' ? 'bg-green-500' : 'bg-red-500'
                        }`}
                        style={{
                          width: `${(parseInt(period.duration) / 24) * 100}%`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default ServicesStatus
  
  
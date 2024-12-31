const TypeOfRewards = () => {
    const rewards = [
      { type: 'Gold', points: '24', color: 'bg-yellow-400' },
      { type: 'Silver', points: '15', color: 'bg-gray-300' },
      { type: 'Bronze', points: '120', color: 'bg-amber-700' }
    ];
  
    const badges = [
      { name: 'Star', icon: '/placeholder.svg?height=32&width=32' },
      { name: 'Star', icon: '/placeholder.svg?height=32&width=32' },
      { name: 'Star', icon: '/placeholder.svg?height=32&width=32' }
    ];
  
    const certificates = [
      { 
        name: 'HTML', 
        description: 'Phasellus non dolor nibh. Nullam elementum', 
        icon: '/placeholder.svg?height=40&width=40'
      },
      { 
        name: 'CSS', 
        description: 'Phasellus non dolor nibh. Nullam elementum', 
        icon: '/placeholder.svg?height=40&width=40'
      },
      { 
        name: 'JavaScript', 
        description: 'Phasellus non dolor nibh. Nullam elementum', 
        icon: '/placeholder.svg?height=40&width=40'
      }
    ];
  
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-yellow-400"></div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">TYPE OF</h2>
                <h3 className="text-4xl font-bold text-gray-900">REWARDS</h3>
              </div>
            </div>
            <p className="mt-4 text-gray-600 max-w-2xl">
              Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
              Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in.
            </p>
          </div>
  
          {/* Rewards Container */}
          <div className="bg-gray-900 rounded-lg p-8">
            <div className="grid gap-8">
              {/* Rewards and Badges Section */}
              <div className="grid gap-8">
                {/* Rewards */}
                <div>
                  <h4 className="text-yellow-400 text-xl font-semibold mb-4">REWARDS</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {rewards.map((reward, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 text-center">
                        <div className={`w-8 h-8 ${reward.color} rounded-full mx-auto mb-2`}></div>
                        <div className="text-gray-900 font-medium">{reward.type}</div>
                        <div className="text-gray-600">{reward.points}</div>
                      </div>
                    ))}
                  </div>
                </div>
  
                {/* Badges */}
                <div>
                  <h4 className="text-yellow-400 text-xl font-semibold mb-4">BADGES</h4>
                  <div className="space-y-2">
                    {badges.map((badge, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <img
                          src={badge.icon}
                          alt={badge.name}
                          className="w-8 h-8"
                        />
                        <span className="text-white">{badge.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
  
              {/* Certificates */}
              <div>
                <h4 className="text-yellow-400 text-xl font-semibold mb-4">CERTIFICATES</h4>
                <div className="grid grid-cols-3 gap-4">
                  {certificates.map((cert, index) => (
                    <div key={index} className="bg-white rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <img
                          src={cert.icon}
                          alt={cert.name}
                          className="w-10 h-10"
                        />
                        <div>
                          <h5 className="font-medium text-gray-900">{cert.name}</h5>
                          <p className="text-sm text-gray-600 mt-1">{cert.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TypeOfRewards;
  
  
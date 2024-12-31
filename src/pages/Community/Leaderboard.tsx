const LeadershipBoard = () => {
    const onlineUsers = [
      { name: 'Alexandra Max', avatar: '/placeholder.svg?height=32&width=32', online: true },
      { name: 'Marcus Ray', avatar: '/placeholder.svg?height=32&width=32', online: true },
      { name: 'Sophie', avatar: '/placeholder.svg?height=32&width=32', online: false },
      { name: 'Type Code...', avatar: '/placeholder.svg?height=32&width=32', typing: true }
    ];
  
    const leaderboardData = [
      {
        color: 'bg-blue-400',
        user: {
          name: 'Alexandra Max',
          avatar: '/placeholder.svg?height=40&width=40'
        },
        stats: [
          { label: 'Online Test', value: 5 },
          { label: 'Video Tutorial', value: 3 },
          { label: 'Expert Review', value: 4 },
          { label: 'Life Log', value: 2 }
        ]
      },
      {
        color: 'bg-teal-600',
        user: {
          name: 'Alexandra Max',
          avatar: '/placeholder.svg?height=40&width=40'
        },
        stats: [
          { label: 'Online Test', value: 4 },
          { label: 'Video Tutorial', value: 5 },
          { label: 'Expert Review', value: 3 },
          { label: 'Life Log', value: 3 }
        ]
      },
      {
        color: 'bg-rose-400',
        user: {
          name: 'Alexandra Max',
          avatar: '/placeholder.svg?height=40&width=40'
        },
        stats: [
          { label: 'Online Test', value: 3 },
          { label: 'Video Tutorial', value: 4 },
          { label: 'Expert Review', value: 5 },
          { label: 'Life Log', value: 2 }
        ]
      }
    ];
  
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">USER</h2>
            <h3 className="text-4xl font-bold text-gray-900">LEADERSHIP BOARD</h3>
            <p className="mt-2 text-gray-600 max-w-2xl">
              Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
              Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in.
            </p>
          </div>
  
          <div className="grid md:grid-cols-4 gap-6">
            {/* Online Users Card */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="space-y-4">
                {onlineUsers.map((user, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <span 
                        className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-white
                          ${user.online ? 'bg-green-500' : 
                            user.typing ? 'bg-yellow-500' : 'bg-gray-400'}`}
                      />
                    </div>
                    <span className="text-sm text-gray-700">{user.name}</span>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
                Message
              </button>
            </div>
  
            {/* Leaderboard Cards */}
            {leaderboardData.map((board, index) => (
              <div key={index} className={`${board.color} rounded-lg p-6 text-white`}>
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src={board.user.avatar}
                    alt={board.user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h4 className="font-medium">{board.user.name}</h4>
                    <div className="flex items-center gap-1">
                      <span className="text-sm opacity-90">Score:</span>
                      <span className="text-sm font-medium">85</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {board.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-sm">{stat.label}</span>
                      <span className="font-medium">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default LeadershipBoard;
  
  
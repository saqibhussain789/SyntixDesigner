const LiveChat = () => {
  const contacts = [
    {
      name: 'Sophie Miller',
      status: 'online',
      lastMessage: 'Great! Let me check...',
      time: '2:34 PM',
      avatar: '/images/avatar-1.jpg' // Replace with your image path
    },
    {
      name: 'Marcus Webb',
      status: 'offline',
      lastMessage: 'Thanks for your help!',
      time: '1:15 PM',
      avatar: '/images/avatar-2.jpg' // Replace with your image path
    },
    {
      name: 'Emma Thompson',
      status: 'online',
      lastMessage: "I'll look into it",
      time: '12:45 PM',
      avatar: '/images/avatar-3.jpg' // Replace with your image path
    }
  ]

  const messages = [
    {
      id: 1,
      sender: 'Sophie Miller',
      content: 'Hi! Can you help me with installation?',
      time: '2:30 PM',
      avatar: '/images/avatar-1.jpg' // Replace with your image path
    },
    {
      id: 2,
      sender: 'me',
      content: 'Of course! What seems to be the issue?',
      time: '2:31 PM'
    },
    {
      id: 3,
      sender: 'Sophie Miller',
      content: "I'm having trouble with the initial setup",
      time: '2:33 PM',
      avatar: '/images/avatar-1.jpg' // Replace with your image path
    }
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <div className="flex items-center gap-4">
            <div className="w-1 h-12 bg-yellow-400"></div>
            <div>
              <h2 className="text-2xl font-bold">LIVE</h2>
              <h3 className="text-4xl font-bold">CHAT</h3>
            </div>
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in.
          </p>
        </div>

        <div className="bg-yellow-50 rounded-lg p-4">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="grid md:grid-cols-3">
              {/* Contacts */}
              <div className="border-r border-gray-200">
                <div className="p-4">
                  <input
                    type="text"
                    placeholder="Search messages..."
                    className="w-full p-2 bg-gray-100 rounded-md"
                  />
                </div>
                <div className="divide-y">
                  {contacts.map((contact, index) => (
                    <div key={index} className="p-4 hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img
                            src={contact.avatar}
                            alt={contact.name}
                            className="w-10 h-10 rounded-full"
                          />
                          <span
                            className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white
                              ${contact.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium truncate">{contact.name}</h4>
                          <p className="text-sm text-gray-500 truncate">
                            {contact.lastMessage}
                          </p>
                        </div>
                        <span className="text-xs text-gray-400">{contact.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat */}
              <div className="md:col-span-2 flex flex-col h-[600px]">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={contacts[0].avatar}
                        alt={contacts[0].name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h4 className="font-medium">{contacts[0].name}</h4>
                        <p className="text-sm text-green-500">Online</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-full">
                        <span className="sr-only">Call</span>
                        📞
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-full">
                        <span className="sr-only">Video</span>
                        🎥
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-full">
                        <span className="sr-only">More</span>
                        ⋯
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender === 'me' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-[70%] ${
                          message.sender === 'me'
                            ? 'bg-teal-600 text-white rounded-l-lg rounded-tr-lg'
                            : 'bg-gray-100 rounded-r-lg rounded-tl-lg'
                        } p-3`}
                      >
                        <p>{message.content}</p>
                        <span className="text-xs opacity-70 mt-1 block">
                          {message.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <span className="sr-only">Attach</span>
                      📎
                    </button>
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 p-2 bg-gray-100 rounded-md"
                    />
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <span className="sr-only">Send</span>
                      ➤
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiveChat


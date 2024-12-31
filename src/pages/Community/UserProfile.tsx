const UserProfile = () => {
    const profiles = [
      {
        name: 'Chili Mili',
        title: 'CEO & Founder',
        image: '/path-to-profile-1.jpg',
        bgColor: 'bg-blue-500'
      },
      {
        name: 'Chili Mili',
        title: 'CEO & Founder',
        image: '/path-to-profile-2.jpg',
        bgColor: 'bg-black'
      },
      {
        name: 'Chili Mili',
        title: 'CEO & Founder',
        image: '/path-to-profile-3.jpg',
        bgColor: 'bg-emerald-800'
      }
    ]
  
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-yellow-400"></div>
              <div>
                <h2 className="text-2xl font-bold">USER</h2>
                <h3 className="text-4xl font-bold">PROFILE</h3>
              </div>
            </div>
            <p className="mt-4 text-gray-600 max-w-2xl">
              Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
              Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in.
            </p>
          </div>
  
          {/* Profile Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {profiles.map((profile, index) => (
              <div key={index} className="group relative">
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className={`absolute inset-0 ${profile.bgColor} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                </div>
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-xl font-semibold">{profile.name}</h4>
                  <p className="text-sm opacity-90">{profile.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default UserProfile
  
  
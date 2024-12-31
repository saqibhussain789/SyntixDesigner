const SocialLogin = () => {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-12">
        <div className="max-w-7xl px-4 mx-auto text-left">
          <h2 className="text-4xl font-bold text-yellow-500">SOCIAL LOGIN</h2>
          <h3 className="text-5xl font-extrabold text-gray-800">OPTIONS</h3>
          <p className="mt-4 text-gray-500 text-lg">
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            <br />
            Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
            tincidunt tristique enim sed sollicitudin.
          </p>
        </div>
  
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Twitter Login */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium">Enter your password</h3>
              <button className="text-gray-400 hover:text-gray-600">×</button>
            </div>
            
            <div className="mb-4">
              <div className="text-gray-500 text-sm mb-1">email@email.com</div>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              />
              <div className="text-sm text-blue-500 mt-1 cursor-pointer hover:underline">
                Forgot password?
              </div>
            </div>
  
            <button className="w-full bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition-colors">
              Log in
            </button>
          </div>
  
          {/* Facebook Login */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-6">Log in to Facebook</h3>
            
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Email address or phone number"
                className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              />
              
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                Log in
              </button>
  
              <div className="text-center">
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgotten password?
                </a>
              </div>
  
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or</span>
                </div>
              </div>
  
              <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors">
                Create new account
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
  
  export default SocialLogin
  
  
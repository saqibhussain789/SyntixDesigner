import women from "../../assets/Login/women.png"
const LoginForm = () => {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-12">
        <div className="max-w-7xl px-4 mx-auto text-left">
          <h2 className="text-4xl font-bold text-yellow-500">LOGIN</h2>
          <h3 className="text-5xl font-extrabold text-gray-800">FORM</h3>
          <p className="mt-4 text-gray-500 text-lg">
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            <br />
            Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
            tincidunt tristique enim sed sollicitudin.
          </p>
        </div>
  
  
        <div className="grid md:grid-cols-2 gap-8 items-center mt-10">
          <div className="max-w-sm">
            <h3 className="text-xl mb-6">LOGIN</h3>
            <p className="text-sm text-gray-600 mb-4">
              How to I get started lorem ipsum dolor sit?
            </p>
  
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full p-3 pl-10 bg-[#f3f0ff] rounded focus:outline-none"
                />
                <svg
                  className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
  
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 pl-10 bg-[#f3f0ff] rounded focus:outline-none"
                />
                <svg
                  className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
  
              <button
                type="submit"
                className="w-full bg-[#1a2b3c] text-white py-3 rounded hover:bg-[#1a2b3c]/90 transition-colors"
              >
                Login now
              </button>
  
              <div className="text-center text-sm text-gray-500">
                Login with Others
              </div>
  
              <div className="space-y-3">
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 p-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                >
                  <img src="/google-icon.png" alt="" className="w-5 h-5" />
                  <span className="text-sm">Sign with Google</span>
                </button>
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 p-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                >
                  <img src="/facebook-icon.png" alt="" className="w-5 h-5" />
                  <span className="text-sm">Sign with Facebook</span>
                </button>
              </div>
            </form>
          </div>
  
          <div className="relative aspect-square md:aspect-auto md:h-[600px] bg-[#1a2b3c] rounded-lg overflow-hidden">
            <div className="absolute inset-0 opacity-10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 max-w-sm mx-4">
                <img
                  src= {women}
                  alt="Woman with tablet"
                  className="rounded-lg mb-4"
                />
                <h4 className="text-white text-xl font-medium">
                  Very good works are waiting for you Login Now!!!
                </h4>
                <div className="mt-4 flex justify-center">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    ⚡
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
  
  export default LoginForm
  
  
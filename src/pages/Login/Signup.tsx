import signup from "../../assets/Login/signup.jpeg"
const SignupForm = () => {
    return (
      <section className="max-w-7xl mx-auto p-6">
        <div className="max-w-7xl px-4 mx-auto text-left">
          <h2 className="text-4xl font-bold text-yellow-500">SIGN UP</h2>
          <h3 className="text-5xl font-extrabold text-gray-800">FORM</h3>
          <p className="mt-4 text-gray-500 text-lg">
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            <br />
            Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
            tincidunt tristique enim sed sollicitudin.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <img
            src={signup}
            alt="People working together"
            className="rounded-lg object-cover w-full h-full opacity-60"
          />
  
          <div>
            <h3 className="text-xl font-semibold mb-6 mt-40">Sign Up For Free</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 border border-gray-200 rounded-md focus:border-teal-600 outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 border border-gray-200 rounded-md focus:border-teal-600 outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-200 rounded-md focus:border-teal-600 outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-200 rounded-md focus:border-teal-600 outline-none"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-3 border border-gray-200 rounded-md focus:border-teal-600 outline-none"
              />
              
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-600">
                  I accept the terms and conditions
                </span>
              </label>
  
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700 transition-colors"
              >
                Sign up
              </button>
  
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm"
                >
                  Sign up with Google
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm"
                >
                  Use as guest
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
  
  export default SignupForm
  
  
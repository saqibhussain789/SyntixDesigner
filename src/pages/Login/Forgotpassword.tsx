const ForgotPassword = () => {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-12">
        <div className="max-w-7xl px-4 mx-auto text-left">
          <h2 className="text-4xl font-bold text-yellow-500">FORGOT</h2>
          <h3 className="text-5xl font-extrabold text-gray-800">OPTION</h3>
          <p className="mt-4 text-gray-500 text-lg">
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            <br />
            Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
            tincidunt tristique enim sed sollicitudin.
          </p>
        </div>
  
        <div className="max-w-xl mx-auto bg-[#fff9f0] rounded-lg p-8 mt-10">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-1">Forgot<br />password?</h3>
            <p className="text-gray-600">Don't worry. We can help.</p>
          </div>
  
          <form className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Please fill in your email address"
                className="w-full p-3 border border-gray-200 rounded bg-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Please fill in your Login ID"
                className="w-full p-3 border border-gray-200 rounded bg-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <p className="text-right text-sm text-gray-500">
              I can't remember my login ID
            </p>
  
            <div className="flex items-center justify-between pt-4">
              <div className="space-x-4 text-sm">
                <a href="#" className="text-blue-600 hover:underline">Remember your password?</a>
                <a href="#" className="text-blue-600 hover:underline">Back to login</a>
              </div>
              <button
                type="submit"
                className="px-8 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    )
  }
  
  export default ForgotPassword
  
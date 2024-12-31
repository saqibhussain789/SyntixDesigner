const ContactOption = () => {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-yellow-400"></div>
              <div>
                <h2 className="text-2xl font-bold">CONTACT</h2>
                <h3 className="text-4xl font-bold">OPTION</h3>
              </div>
            </div>
            <p className="mt-4 text-gray-600 max-w-2xl">
              Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
              Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in.
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/contact-image.jpg" // Replace with your image path
                alt="Contact Us"
                className="rounded-lg w-full"
              />
            </div>
            
            <div>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 border-b border-gray-300 focus:border-teal-600 outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full p-3 border-b border-gray-300 focus:border-teal-600 outline-none"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full p-3 border-b border-gray-300 focus:border-teal-600 outline-none resize-none"
                  />
                </div>
                <button className="bg-teal-700 text-white px-8 py-3 rounded-md hover:bg-teal-800 transition-colors">
                  Contact Us
                </button>
              </form>
  
              <div className="mt-8">
                <div className="mb-4">
                  <h4 className="font-medium">Contact</h4>
                  <p className="text-gray-600">help@web.com</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-medium">Based in</h4>
                  <p className="text-gray-600">New York<br/>California, Ohio</p>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-600 hover:text-black">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-black">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-black">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default ContactOption
  
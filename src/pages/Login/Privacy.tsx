const PrivacyNotice = () => {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-12">
        <div className="max-w-7xl px-4 mx-auto text-left">
          <h2 className="text-4xl font-bold text-yellow-500">TERMS AND</h2>
          <h3 className="text-5xl font-extrabold text-gray-800">PRIVACY NOTICE</h3>
          <p className="mt-4 text-gray-500 text-lg">
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            <br />
            Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
            tincidunt tristique enim sed sollicitudin.
          </p>
        </div>
  
        <div className="bg-[#fff9e5] rounded-lg p-8 mt-10">
          <h3 className="font-semibold mb-4">Terms and Conditions</h3>
          <div className="mb-4">
            <h4 className="font-medium mb-2">Your Agreement</h4>
            <div className="bg-white rounded p-4 h-80 overflow-y-auto text-sm text-gray-600">
              <p className="mb-4">Last Revised: December 16, 2013</p>
              <p className="mb-4">
                Welcome to www.lorem-ipsum.info. This site is provided as a service to our visitors and may be used for informational purposes only.
              </p>
              <p className="mb-4">
                Because these Terms and Conditions contain legal obligations, please read them carefully.
              </p>
              <p className="mb-4">
                1. YOUR AGREEMENT<br />
                By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.
              </p>
              <p className="mb-4">
                PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes.
              </p>
              <p className="mb-4">
                2. PRIVACY<br />
                Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices.
              </p>
              <p className="mb-4">
                3. LINKED SITES<br />
                This Site may contain links to other independent third-party Web sites ("Linked Sites"). These Linked Sites are provided solely as a convenience to our visitors.
              </p>
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <button className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              Cancel
            </button>
            <button className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors">
              Agree
            </button>
          </div>
        </div>
      </div>
      </div>
    )
  }
  
  export default PrivacyNotice
  
  
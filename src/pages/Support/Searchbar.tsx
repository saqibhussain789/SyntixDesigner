const SearchBar = () => {
    const searchResults = [
      {
        name: 'Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1"',
        image: '/images/product-1.jpg' // Replace with your image path
      },
      {
        name: 'Mobile Phone Nokia 8210, Dual SIM, 4G',
        image: '/images/product-2.jpg' // Replace with your image path
      },
      {
        name: 'SONY SRSX900, Wireless Party Speaker, MEGA BASS',
        image: '/images/product-3.jpg' // Replace with your image path
      },
      {
        name: 'Headphones, Noise cancelling, Bluetooth 5.0',
        image: '/images/product-4.jpg' // Replace with your image path
      },
      {
        name: 'D-SLR Canon EOS R10, 4k, DIGIC X, RF-S 18-45mm',
        image: '/images/product-5.jpg' // Replace with your image path
      }
    ]
  
    return (
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-yellow-400"></div>
              <div>
                <h2 className="text-2xl font-bold">SEARCH</h2>
                <h3 className="text-4xl font-bold">BAR</h3>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
              Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in.
            </p>
          </div>
  
          <div className="border border-blue-500 rounded-lg overflow-hidden">
            <div className="p-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="search products..."
                  className="w-full pl-10 pr-4 py-2 bg-transparent outline-none"
                />
                <span className="absolute left-2 top-1/2 -translate-y-1/2">
                  🔍
                </span>
              </div>
            </div>
  
            <div className="border-t">
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer"
                >
                  <img
                    src={result.image}
                    alt={result.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <span className="flex-1">{result.name}</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    ↗
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default SearchBar
  
  
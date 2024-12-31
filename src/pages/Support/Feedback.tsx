import { useState } from 'react'

const FeedbackSuggestions = () => {
  const [rating, setRating] = useState<number>(0)

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <div className="flex items-center gap-4">
            <div className="w-1 h-12 bg-yellow-400"></div>
            <div>
              <h2 className="text-2xl font-bold">FEEDBACK</h2>
              <h3 className="text-4xl font-bold">SUGGESTIONS</h3>
            </div>
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rate your experience or feeling
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className={`text-2xl ${
                      rating >= star ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-700 text-white py-3 rounded-md hover:bg-teal-800 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default FeedbackSuggestions

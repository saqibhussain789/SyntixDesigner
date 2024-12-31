import { useState } from 'react'

const PollSurvey = () => {
  const [rating, setRating] = useState<number>(0)
  const [timeLeft] = useState('14:50:03')

  const emojis = Array(5).fill('😊')

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4">
            <div className="w-1 h-12 bg-yellow-400"></div>
            <div>
              <h2 className="text-2xl font-bold">POLL</h2>
              <h3 className="text-4xl font-bold">SURVEY</h3>
            </div>
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in.
          </p>
        </div>

        {/* Survey Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-yellow-50 rounded-lg p-8 relative">
            {/* Close Button */}
            <button className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
              ×
            </button>

            {/* Question */}
            <div className="mb-8">
              <h4 className="font-semibold mb-4">Question Title</h4>
              <p className="text-gray-600">
                Cheesecake gummi bears pastry dragée cheesecake.
                Sweet topping topping topping cake oat cake.
              </p>
            </div>

            {/* Rating */}
            <div className="mb-8">
              <div className="flex gap-2">
                {emojis.map((emoji, index) => (
                  <button
                    key={index}
                    onClick={() => setRating(index + 1)}
                    className={`text-2xl transition-transform ${
                      rating >= index + 1 ? 'scale-110' : 'opacity-50'
                    }`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                Next Question
              </button>
              <div className="flex items-center gap-2 text-gray-500">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" strokeWidth="2"/>
                </svg>
                <span>{timeLeft}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PollSurvey


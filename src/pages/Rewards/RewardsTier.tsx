const RewardsTiers = () => {
    const CheckIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    );
  
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="mb-12">
          <div className="max-w-7xl px-4 mx-auto text-left">
            <h2 className="text-4xl font-bold text-yellow-500">REWARDS</h2>
            <h3 className="text-5xl font-extrabold text-gray-800">
              TIERS
            </h3>
            <p className="mt-4 text-gray-500 text-lg">
              Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
              <br />
              Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
              tincidunt tristique enim sed sollicitudin.
            </p>
  
          {/* Badges */}
          <div className="bg-gray-100 rounded-lg p-8 mb-8 mt-10">
            <div className="flex justify-center gap-8 mb-12">
              {['purple', 'yellow', 'gray', 'brown'].map((color, index) => (
                <div
                  key={index}
                  className={`w-16 h-16 rounded-full flex items-center justify-center
                    ${color === 'purple' ? 'bg-purple-200' : ''}
                    ${color === 'yellow' ? 'bg-yellow-200' : ''}
                    ${color === 'gray' ? 'bg-gray-300' : ''}
                    ${color === 'brown' ? 'bg-stone-200' : ''}
                  `}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center
                    ${color === 'purple' ? 'bg-purple-300' : ''}
                    ${color === 'yellow' ? 'bg-yellow-300' : ''}
                    ${color === 'gray' ? 'bg-gray-400' : ''}
                    ${color === 'brown' ? 'bg-stone-300' : ''}
                  `}>
                    <CheckIcon />
                  </div>
                </div>
              ))}
            </div>
  
            {/* Tiers */}
            <div className="flex justify-center gap-8">
              {[
                { name: 'Gold', points: '24', color: 'yellow' },
                { name: 'Silver', points: '15', color: 'gray' },
                { name: 'Bronze', points: '120', color: 'stone' }
              ].map((tier, index) => (
                <div key={index} className="bg-white rounded-lg p-6 w-[200px] text-center shadow-sm">
                  <div className="flex justify-center mb-4">
                    <div className={`w-8 h-8 rounded-full bg-${tier.color}-200`}></div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">{tier.name}</h4>
                  <p className={`text-lg mt-2 text-${tier.color}-500`}>{tier.points}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  };
  
  export default RewardsTiers;
  
  
const TrackProgress = () => {
    const monthlyData = [
      { month: 'Jan', value: 40 },
      { month: 'Feb', value: 30 },
      { month: 'Mar', value: 60 },
      { month: 'Apr', value: 40 },
      { month: 'May', value: 50 }
    ];
  
    const weeklyData = [
      { week: 'Week 1', spent: 80, received: 60 },
      { week: 'Week 2', spent: 60, received: 40 },
      { week: 'Week 3', spent: 100, received: 75 },
      { week: 'Week 4', spent: 55, received: 65 }
    ];
  
    // Create SVG path for line chart
    const createLinePath = () => {
      const height = 150;
      const width = 400;
      const padding = 40;
      const graphWidth = width - (padding * 2);
      const graphHeight = height - (padding * 2);
  
      const points = monthlyData.map((point, index) => {
        const x = padding + (index * (graphWidth / (monthlyData.length - 1)));
        const y = height - (padding + ((point.value / 100) * graphHeight));
        return `${x},${y}`;
      });
  
      return `M ${points.join(' L ')}`;
    };
  
    return (
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="mb-12">
          <div className="max-w-7xl px-4 mx-auto text-left">
            <h2 className="text-4xl font-bold text-yellow-500">TRACK YOUR</h2>
            <h3 className="text-5xl font-extrabold text-gray-800">
              PROGRESS
            </h3>
            <p className="mt-4 text-gray-500 text-lg">
              Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
              <br />
              Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
              tincidunt tristique enim sed sollicitudin.
            </p>
            
  
          {/* Stats and Charts */}
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {/* Card */}
            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-6 rounded-xl text-white">
              <div className="mb-8">
                <p className="text-sm opacity-80">Savings Stats</p>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {['2020', '2021', '2022', '2023'].map((year) => (
                    <div key={year} className="text-center py-1 px-2 rounded bg-white/10">
                      {year}
                    </div>
                  ))}
                </div>
              </div>
  
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Daily saving</span>
                  <span className="text-lg font-semibold">24%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Revenue saving</span>
                  <span className="text-lg font-semibold">36%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Margin saving</span>
                  <span className="text-lg font-semibold">16%</span>
                </div>
              </div>
            </div>
  
            {/* Charts */}
            <div className="bg-teal-700 p-6 rounded-xl text-white">
              {/* Line Chart */}
              <div className="mb-8 h-40 relative">
                <svg 
                  viewBox="0 0 400 150" 
                  className="w-full h-full"
                  preserveAspectRatio="none"
                >
                  {/* Grid lines */}
                  <g className="stroke-white/10">
                    {[0, 1, 2, 3].map((i) => (
                      <line
                        key={i}
                        x1="40"
                        y1={40 + (i * 30)}
                        x2="360"
                        y2={40 + (i * 30)}
                        strokeDasharray="3,3"
                      />
                    ))}
                  </g>
                  {/* Line chart */}
                  <path
                    d={createLinePath()}
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
                {/* X-axis labels */}
                <div className="flex justify-between px-10 mt-2">
                  {monthlyData.map((point) => (
                    <span key={point.month} className="text-xs">{point.month}</span>
                  ))}
                </div>
              </div>
  
              {/* Bar Chart */}
              <div className="h-40">
                <div className="h-full flex items-end justify-between gap-2">
                  {weeklyData.map((data) => (
                    <div key={data.week} className="flex-1 space-y-2">
                      <div className="flex gap-1 h-32">
                        <div 
                          className="w-1/2 bg-orange-400 rounded-t"
                          style={{ height: `${data.spent}%` }}
                        />
                        <div 
                          className="w-1/2 bg-cyan-400 rounded-t"
                          style={{ height: `${data.received}%` }}
                        />
                      </div>
                      <div className="text-center text-xs">{data.week}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  };
  
  export default TrackProgress;
  
  
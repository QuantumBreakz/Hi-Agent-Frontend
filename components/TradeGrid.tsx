const trades = [
  '🔧 Plumbing',
  '❄️ HVAC',
  '⚡ Electrical',
  '🏠 Roofing',
  '🔑 Locksmith',
  '🐛 Pest Control',
  '🌿 Landscaping',
  '🪟 Windows & Doors',
  '🛁 Bathroom Remodeling',
  '🍳 Kitchen Remodeling',
  '🏗️ General Contractor',
  '🧹 Cleaning Services',
  '🔥 Fireplace & Chimney',
  '💧 Water Damage Restoration',
  '🌳 Tree Services',
]

export function TradeGrid() {
  return (
    <section id="trades" className="py-24 bg-teal-light/30">
      <div className="container-max px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-warm-dark mb-6 tracking-tight">
            Built for the <span className="text-teal-dark">Trades</span>
          </h2>
          <p className="text-xl text-warm-mid">
            If your customers call you, HI Agent is built for your business.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {trades.map((trade) => (
            <span 
              key={trade} 
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-warm-dark text-base font-semibold rounded-full border border-teal-mid/20 shadow-sm hover:shadow-md hover:border-teal-mid/40 hover:-translate-y-0.5 transition-all cursor-default"
            >
              {trade}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

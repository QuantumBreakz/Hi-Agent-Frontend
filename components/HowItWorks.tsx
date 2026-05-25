const steps = [
  {
    number: '01',
    title: 'Customer Calls',
    body: 'Your phone rings. HI Agent picks up instantly — no hold music, no voicemail. The caller hears a real-sounding, friendly voice.',
    icon: '📞',
  },
  {
    number: '02',
    title: 'Qualify & Engage',
    body: 'HI Agent gets their name, what business they run, and whether they\'re the decision-maker. It delivers the right pitch for their specific trade.',
    icon: '🎯',
  },
  {
    number: '03',
    title: 'Book & Notify',
    body: 'The call closes on a 15-minute discovery call with Scott. You get an email with the full transcript and summary — zero effort on your part.',
    icon: '✅',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-gray-50/50">
      <div className="container-max px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-warm-dark mb-6 tracking-tight">
            How It Works
          </h2>
          <p className="text-xl text-warm-mid">
            Three steps. Zero friction. From first ring to booked appointment.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-teal-light via-teal-mid to-teal-light opacity-50 z-0" />

            {steps.map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                {/* Number/Icon Bubble */}
                <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-50 flex flex-col items-center justify-center shadow-lg shadow-teal-dark/5 mb-8 relative group">
                  <div className="absolute inset-0 rounded-full bg-teal-dark scale-0 group-hover:scale-100 transition-transform duration-500 ease-out z-0" />
                  <span className="relative z-10 text-3xl group-hover:hidden">{step.icon}</span>
                  <span className="relative z-10 text-white font-bold text-2xl hidden group-hover:block">{step.number}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-warm-dark mb-4">{step.title}</h3>
                <p className="text-lg text-warm-mid leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

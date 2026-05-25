const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-teal-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 2v6h6M22 2l-6 6M13.832 16.568a1 1 0 001.213-.303l.355-.465A2 2 0 0117 15h3a2 2 0 012 2v3a2 2 0 01-2 2A18 18 0 012 4a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-.8 1.6l-.468.351a1 1 0 00-.292 1.233 14 14 0 006.392 6.384" />
      </svg>
    ),
    title: 'Inbound Call Agent',
    description: 'Every call answered by a real-sounding AI. Qualifies the lead, answers questions, and closes on a discovery call with Scott — 24/7.',
    tags: ['24/7 Answering', 'Lead Qualification', 'Appointment Booking', 'Trade-Specific Scripts'],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-teal-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 6a13 13 0 008.4-2.8A1 1 0 0121 4v12a1 1 0 01-1.6.8A13 13 0 0011 14H5a2 2 0 01-2-2V8a2 2 0 012-2zM6 14a12 12 0 002.4 7.2 2 2 0 003.2-2.4A8 8 0 0110 14M8 6v8" />
      </svg>
    ),
    title: 'Custom AI Builds',
    description: 'Need something specific? We build fully custom AI voice agents trained on your exact business — your services, prices, service area, and call flows.',
    tags: ['Custom Training', 'Your Business Logic', 'CRM Integration', 'Multi-Trade Support'],
  },
]

export function ServicesCards() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container-max px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-warm-dark mb-6 tracking-tight">
            What HI Agent Does
          </h2>
          <p className="text-xl text-warm-mid">
            Two ways to put AI to work for your home service business — starting today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((svc, i) => (
            <div key={i} className="group relative rounded-3xl bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col p-8 sm:p-12">
              
              {/* Top subtle gradient arc */}
              <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-teal-light/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-10 group-hover:scale-110 group-hover:border-teal-mid/30 transition-transform duration-500">
                  {svc.icon}
                </div>
                
                <h3 className="text-3xl font-bold text-warm-dark mb-6 tracking-tight group-hover:text-teal-dark transition-colors duration-300">
                  {svc.title}
                </h3>
                
                <p className="text-xl text-warm-mid leading-relaxed mb-10">
                  {svc.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100">
                  {svc.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-warm-dark text-sm font-medium rounded-full border border-gray-200 group-hover:border-teal-mid/20 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

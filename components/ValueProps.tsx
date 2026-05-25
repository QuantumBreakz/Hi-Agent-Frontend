const props = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-teal-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    headline: 'Always On',
    body: 'Your phone gets answered 24/7/365 — nights, weekends, holidays. No missed calls, no voicemail.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-teal-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    headline: 'Books Appointments',
    body: 'HI Agent qualifies callers and schedules discovery calls with Scott — so you wake up to booked jobs.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-teal-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    headline: 'Zero Setup',
    body: 'Forward your number and you\'re live. No app to install, no training, no complicated dashboard.',
  },
]

export function ValueProps() {
  return (
    <section id="value-props" className="py-24 bg-gray-50/50">
      <div className="container-max px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-warm-dark mb-6 tracking-tight">
            The simplest way to <span className="text-teal-dark">never miss a lead.</span>
          </h2>
          <p className="text-xl text-warm-mid">
            HI Agent acts as your dedicated receptionist, completely hands-free.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {props.map((p, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm hover:shadow-teal-md hover:border-teal-mid/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-light/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-white border border-gray-100 shadow-sm rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-teal-mid/40 group-hover:shadow-teal-sm transition-all duration-300">
                  {p.icon}
                </div>
                <h3 className="text-2xl font-bold text-warm-dark mb-4">{p.headline}</h3>
                <p className="text-warm-mid text-lg leading-relaxed flex-grow">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

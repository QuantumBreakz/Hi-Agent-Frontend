import Image from 'next/image'

const features = [
  {
    title: 'Instant Qualification',
    description: 'We don\'t just answer the phone. HI Agent asks the right questions to qualify leads immediately. "What kind of plumbing issue?" "Is the water shut off?"',
    emoji: '🎯'
  },
  {
    title: 'Frictionless Scheduling',
    description: 'Stop playing phone tag. The agent integrates directly with your calendar and locks in appointments while the homeowner is on the line.',
    emoji: '📅'
  },
  {
    title: 'Zero Sick Days',
    description: 'No breaks, no holidays, no sick leave. Every single 3:00 AM emergency call is answered instantly with a warm, human-like voice.',
    emoji: '🌙'
  },
  {
    title: 'Instant Summaries',
    description: 'The second the call hangs up, a beautifully formatted summary and transcript is emailed directly to your inbox so you know exactly what the job is.',
    emoji: '⚡'
  }
]

export function FeaturesSplit() {
  return (
    <section className="bg-warm-light py-24 md:py-32 relative">
      <div className="container-max px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">
          
          {/* Sticky Left Column */}
          <div className="lg:w-1/2 lg:sticky lg:top-32 space-y-8">
            <div className="inline-block bg-white text-teal-dark font-semibold px-4 py-2 rounded-full border border-gray-200 text-sm shadow-sm">
              Built for the Trades
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-warm-dark leading-[1.1] tracking-tight">
              We handle the phones.<br/>
              <span className="text-teal-dark">You handle the jobs.</span>
            </h2>
            <p className="text-lg text-warm-mid leading-relaxed max-w-md">
              A missed call is a missed job. HI Agent ensures every single homeowner who calls gets an instant, professional response, no matter the time of day.
            </p>
            
            {/* Visual aesthetic element */}
            <div className="w-full h-64 mt-8 rounded-[40px] bg-gradient-to-br from-teal-mid to-teal-dark relative overflow-hidden shadow-teal-md border-4 border-white">
               <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[150%] bg-white/10 blur-[50px] rounded-full rotate-45" />
               <div className="absolute bottom-6 left-8 right-8">
                 <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-white">
                   <div className="text-3xl">🎙️</div>
                   <div>
                     <p className="font-bold">Live AI Agent</p>
                     <p className="text-sm opacity-80">Listening & Responding</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            {features.map((feat, idx) => (
              <div 
                key={idx} 
                className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-light/50 rounded-bl-[100px] -z-0 transition-transform duration-500 group-hover:scale-110" />
                
                <div className="text-6xl mb-6 relative z-10">{feat.emoji}</div>
                <h3 className="text-3xl font-bold text-warm-dark mb-4 relative z-10">{feat.title}</h3>
                <p className="text-lg text-warm-mid leading-relaxed relative z-10">{feat.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section id="hero" className="relative bg-white overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background blobs for a modern feel */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-teal-light blur-[120px] opacity-60" />
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-amber-brand/10 blur-[100px] opacity-60" />
      </div>

      <div className="container-max relative z-10 px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white text-teal-dark text-sm font-semibold px-5 py-2.5 rounded-full border border-gray-200 shadow-sm transition-all hover:shadow-teal-sm hover:border-teal-mid/30">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-mid opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-dark"></span>
            </span>
            Live 24/7 AI Receptionist
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-extrabold text-warm-dark leading-[1.1] tracking-tight">
            If You Serve <span className="text-teal-dark">Homeowners,</span><br/> We Serve You.
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-warm-mid leading-relaxed max-w-2xl mx-auto">
            HI Agent answers every inbound call, qualifies leads, and books appointments
            — 24 hours a day. While you're on the job, your phone keeps working.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <Link
              href="#voice-widget"
              className="btn-amber text-lg px-8 py-4 w-full sm:w-auto shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              📞 Talk to HI Agent Now
            </Link>
            <Link
              href="/savings-calculator"
              className="btn-teal-outline bg-white hover:bg-teal-light border-gray-200 hover:border-teal-mid text-warm-dark hover:text-teal-dark text-lg px-8 py-4 w-full sm:w-auto shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              See Your Savings
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-medium text-warm-mid">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-teal-light flex items-center justify-center text-teal-dark">
                ✓
              </div>
              No contracts
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-teal-light flex items-center justify-center text-teal-dark">
                ✓
              </div>
              Live in days
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-teal-light flex items-center justify-center text-teal-dark">
                ✓
              </div>
              No app required
            </div>
          </div>
          
          {/* Floating Mascot */}
          <div className="mt-12 relative w-full max-w-lg mx-auto">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10 h-32 bottom-0 top-auto" />
             <Image
                src="/hi-agent-mascot.png"
                alt="HI Agent Mascot"
                width={500}
                height={500}
                className="w-full h-auto animate-float drop-shadow-2xl object-contain relative z-0"
                priority
             />
          </div>

        </div>
      </div>
    </section>
  )
}

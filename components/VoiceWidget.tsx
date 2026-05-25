'use client'
import { useState, useEffect, useRef } from 'react'

type Status = 'idle' | 'connecting' | 'active' | 'ended'
type Message = { role: 'assistant' | 'user'; text: string; id: number }

export function VoiceWidget() {
  const [status, setStatus] = useState<Status>('idle')
  const [transcript, setTranscript] = useState<Message[]>([])
  const [volume, setVolume] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const vapiRef = useRef<any>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const msgIdRef = useRef(0)

  useEffect(() => {
    let vapi: any = null

    async function initVapi() {
      try {
        const { default: Vapi } = await import('@vapi-ai/web')
        const key = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY
        if (!key || key.includes('<<')) {
          return
        }
        vapi = new Vapi(key)
        vapiRef.current = vapi

        vapi.on('call-start', () => {
          setStatus('active')
          setError(null)
        })
        vapi.on('call-end', () => {
          setStatus('ended')
          setVolume(0)
        })
        vapi.on('volume-level', (v: number) => setVolume(v))
        vapi.on('error', (err: any) => {
          console.error('Vapi error:', err)
          setError('Connection failed. Please try calling directly.')
          setStatus('idle')
        })
        vapi.on('message', (msg: any) => {
          if (msg.type === 'transcript' && msg.transcriptType === 'final') {
            setTranscript(prev => [
              ...prev,
              { role: msg.role, text: msg.transcript, id: ++msgIdRef.current },
            ])
            setTimeout(() => {
              scrollRef.current?.scrollTo({ top: 9999, behavior: 'smooth' })
            }, 50)
          }
        })
      } catch (err) {
        console.error('Failed to init Vapi:', err)
      }
    }

    initVapi()
    return () => { vapi?.stop?.() }
  }, [])

  const startCall = () => {
    const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID
    if (!vapiRef.current || !assistantId || assistantId.includes('<<')) {
      setError('Please add your Vapi keys to your Vercel Project Environment Variables and redeploy.')
      return
    }
    setStatus('connecting')
    setTranscript([])
    setError(null)
    vapiRef.current.start(assistantId)
  }

  const endCall = () => vapiRef.current?.stop?.()

  const bars = [0.35, 0.55, 0.80, 1.0, 0.80, 0.55, 0.35]
  const delays = [0, 100, 200, 0, 200, 100, 0]

  return (
    <section id="voice-widget" className="py-24 md:py-32 bg-white relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-teal-light/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-max px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-[60px] font-extrabold text-warm-dark mb-6 tracking-tight leading-[1.1]">
            Talk to <span className="text-teal-dark">HI Agent</span> Right Now
          </h2>
          <p className="text-xl text-warm-mid">
            This is exactly what your customers will experience. Give it a try.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Call Panel */}
          <div className="bg-white rounded-[2rem] p-10 lg:p-14 border border-gray-200 shadow-xl shadow-teal-dark/5 flex flex-col items-center justify-center min-h-[400px]">
            {status === 'active' && (
              <div className="flex items-center gap-2 text-sm font-semibold text-teal-dark mb-8 bg-teal-light/50 px-4 py-2 rounded-full">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
                Live Call in Progress
              </div>
            )}
            
            {status === 'connecting' && (
              <div className="flex items-center gap-2 text-sm font-semibold text-teal-mid animate-pulse mb-8">
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                Connecting...
              </div>
            )}

            {(status === 'idle' || status === 'ended') ? (
              <div className="flex flex-col items-center gap-6 w-full">
                <button
                  onClick={startCall}
                  className="btn-amber text-xl px-12 py-6 w-full sm:w-auto shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                >
                  📞 Call HI Agent
                </button>
                {status === 'ended' && (
                  <p className="text-sm text-teal-dark font-medium bg-teal-light/50 px-4 py-2 rounded-full">
                    Call ended. Start a new one anytime.
                  </p>
                )}
              </div>
            ) : status === 'active' ? (
              <div className="flex flex-col items-center gap-10">
                <div className="flex items-end gap-2 h-20">
                  {bars.map((scale, i) => (
                    <div
                      key={i}
                      className="w-2 bg-teal-mid rounded-full transition-all duration-100"
                      style={{
                        height: `${Math.max(12, volume * scale * 80)}px`,
                        animationDelay: `${delays[i]}ms`,
                        ...(volume < 0.01 ? { animation: 'wave 1.4s ease-in-out infinite', height: `${scale * 32}px` } : {}),
                      }}
                    />
                  ))}
                </div>
                <button
                  onClick={endCall}
                  className="btn-teal-outline text-lg px-8 py-4 hover:bg-red-50 hover:text-red-600 hover:border-red-600 transition-all"
                >
                  End Call
                </button>
              </div>
            ) : null}

            {error && (
              <div className="mt-8 text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3 text-center max-w-sm">
                {error}
              </div>
            )}

            <div className="mt-auto pt-10 text-center w-full">
              <p className="text-sm text-warm-mid mb-2 uppercase tracking-widest font-semibold">
                Or call directly
              </p>
              <a
                href="tel:+12164748167"
                className="text-3xl font-extrabold text-teal-dark hover:text-teal-mid transition-colors"
              >
                +1 (216) 474-8167
              </a>
            </div>
          </div>

          {/* Transcript Panel */}
          <div className="bg-gray-50 rounded-[2rem] p-8 lg:p-10 border border-gray-200 flex flex-col h-full min-h-[400px]">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
              <h3 className="text-lg font-bold text-warm-dark flex items-center gap-2">
                Live Transcript
              </h3>
              {status === 'active' && (
                <span className="w-2.5 h-2.5 bg-teal-mid rounded-full animate-pulse" />
              )}
            </div>
            
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto space-y-4 pr-4 custom-scrollbar"
            >
              {transcript.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[200px] text-center opacity-50">
                  <span className="text-5xl mb-4 grayscale">🤖</span>
                  <p className="text-warm-mid text-lg max-w-[250px]">
                    Transcript will appear here in real time.
                  </p>
                </div>
              ) : (
                transcript.map((m) => (
                  <div
                    key={m.id}
                    className={`flex gap-3 items-end ${m.role === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-sm">
                      {m.role === 'assistant' ? '🤖' : '👤'}
                    </div>
                    <p
                      className={`text-base rounded-2xl px-5 py-3 max-w-[85%] leading-relaxed ${
                        m.role === 'assistant'
                          ? 'bg-teal-dark text-white rounded-bl-sm'
                          : 'bg-white border border-gray-200 text-warm-dark rounded-br-sm'
                      }`}
                    >
                      {m.text}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

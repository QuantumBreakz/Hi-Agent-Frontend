'use client'
import { useState } from 'react'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { AnnouncementBar } from '@/components/AnnouncementBar'

interface Inputs {
  staff: number
  hourlyPay: number
  phoneHours: number
  missedCalls: number
  jobValue: number
}

function calculate(i: Inputs) {
  const annualStaffCost  = i.staff * i.hourlyPay * i.phoneHours * 52
  const revenueLost      = i.missedCalls * 365 * i.jobValue * 0.30
  const totalExposure    = annualStaffCost + revenueLost
  const estimatedSavings = totalExposure * 0.60
  return { annualStaffCost, revenueLost, totalExposure, estimatedSavings }
}

const fmt = (n: number) =>
  '$' + Math.round(n).toLocaleString()

interface SliderProps {
  id: string
  label: string
  value: number
  min: number
  max: number
  step: number
  format: (v: number) => string
  onChange: (v: number) => void
}

function Slider({ id, label, value, min, max, step, format, onChange }: SliderProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label htmlFor={id} className="text-sm font-semibold text-warm-dark">{label}</label>
        <span className="text-teal-dark font-bold text-sm bg-teal-light px-3 py-1 rounded-full">
          {format(value)}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5
          [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-teal-dark [&::-webkit-slider-thumb]:shadow-md"
        style={{
          background: `linear-gradient(to right, #0F6E56 0%, #0F6E56 ${((value - min) / (max - min)) * 100}%, #E1F5EE ${((value - min) / (max - min)) * 100}%, #E1F5EE 100%)`,
        }}
      />
      <div className="flex justify-between text-xs text-warm-mid">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  )
}

export default function SavingsCalculatorPage() {
  const [inputs, setInputs] = useState<Inputs>({
    staff: 2,
    hourlyPay: 18,
    phoneHours: 20,
    missedCalls: 5,
    jobValue: 500,
  })

  const set = (key: keyof Inputs) => (v: number) =>
    setInputs(prev => ({ ...prev, [key]: v }))

  const results = calculate(inputs)

  return (
    <>
      <AnnouncementBar />
      <NavBar />
      <main className="pt-24">
        {/* Header */}
        <section className="bg-teal-dark text-white py-16 px-6 text-center">
          <h1 className="text-4xl font-extrabold mb-3">Savings Calculator</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            See exactly how much missed calls are costing your business — and what HI Agent recovers.
          </p>
        </section>

        {/* Calculator */}
        <section className="section-pad bg-warm-light">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Sliders */}
              <div className="bg-white rounded-3xl p-8 shadow-teal-sm space-y-8">
                <h2 className="text-2xl font-bold text-warm-dark">Your Business</h2>
                <Slider
                  id="slider-staff"
                  label="Phone staff handling calls"
                  value={inputs.staff}
                  min={1} max={10} step={1}
                  format={v => `${v} staff`}
                  onChange={set('staff')}
                />
                <Slider
                  id="slider-hourly"
                  label="Hourly pay per staff member"
                  value={inputs.hourlyPay}
                  min={12} max={35} step={1}
                  format={v => `$${v}/hr`}
                  onChange={set('hourlyPay')}
                />
                <Slider
                  id="slider-hours"
                  label="Hours/week on phone"
                  value={inputs.phoneHours}
                  min={5} max={40} step={1}
                  format={v => `${v} hrs/wk`}
                  onChange={set('phoneHours')}
                />
                <Slider
                  id="slider-missed"
                  label="Missed calls per day"
                  value={inputs.missedCalls}
                  min={1} max={20} step={1}
                  format={v => `${v} calls/day`}
                  onChange={set('missedCalls')}
                />
                <Slider
                  id="slider-job"
                  label="Average job value"
                  value={inputs.jobValue}
                  min={100} max={5000} step={50}
                  format={v => `$${v.toLocaleString()}`}
                  onChange={set('jobValue')}
                />
              </div>

              {/* Results */}
              <div className="flex flex-col gap-5">
                <div className="bg-white rounded-3xl p-6 shadow-teal-sm">
                  <p className="text-xs font-semibold uppercase tracking-widest text-warm-mid mb-1">Annual Phone Staff Cost</p>
                  <p className="text-3xl font-extrabold text-warm-dark">{fmt(results.annualStaffCost)}</p>
                </div>
                <div className="bg-white rounded-3xl p-6 shadow-teal-sm">
                  <p className="text-xs font-semibold uppercase tracking-widest text-warm-mid mb-1">Revenue Lost to Missed Calls</p>
                  <p className="text-3xl font-extrabold text-warm-dark">{fmt(results.revenueLost)}</p>
                </div>
                <div className="bg-white rounded-3xl p-6 shadow-teal-sm">
                  <p className="text-xs font-semibold uppercase tracking-widest text-warm-mid mb-1">Total Annual Exposure</p>
                  <p className="text-3xl font-extrabold text-warm-dark">{fmt(results.totalExposure)}</p>
                </div>
                {/* Savings — hero card */}
                <div className="bg-teal-light rounded-3xl p-8 shadow-teal-md border border-teal-mid/30">
                  <p className="text-xs font-semibold uppercase tracking-widest text-teal-dark mb-2">
                    Estimated Annual Savings with HI Agent
                  </p>
                  <p className="text-5xl font-extrabold text-teal-dark mb-4">
                    {fmt(results.estimatedSavings)}
                  </p>
                  <p className="text-teal-dark/80 text-sm leading-relaxed italic">
                    "Recovering just {inputs.missedCalls} missed calls a day at ${inputs.jobValue.toLocaleString()}/job
                    adds {fmt(results.estimatedSavings)}/year back to your business."
                  </p>
                </div>
                <a
                  href="/#voice-widget"
                  id="calc-cta-button"
                  className="btn-amber text-center text-base py-4"
                >
                  Talk to HI Agent — Start Recovering Revenue
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

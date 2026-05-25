'use client'
import { useState } from 'react'
import Link from 'next/link'

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null
  return (
    <div
      id="announcement-bar"
      className="bg-amber-brand text-warm-dark py-3 px-4 text-center relative"
    >
      <Link
        href="#voice-widget"
        className="text-sm font-semibold hover:underline transition-all"
      >
        🎙️ HI Agent is live — call and hear it yourself →
      </Link>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss announcement"
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100 transition-opacity text-lg leading-none"
      >
        ×
      </button>
    </div>
  )
}

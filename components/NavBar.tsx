'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { title: 'How It Works', href: '/#how-it-works' },
  { title: 'Live Demo',    href: '/#voice-widget' },
  { title: 'Calculator',  href: '/savings-calculator' },
  { title: 'FAQ',         href: '/faq' },
]

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md border-gray-200 shadow-sm py-3' 
          : 'bg-white border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 relative z-10">
          <Image
            src="/hi-agent-logo.png"
            alt="HI Agent"
            width={160}
            height={44}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => {
            const isActive = pathname === link.href || (link.href.includes('#') && pathname === '/')
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:bg-gray-100 ${
                  isActive ? 'text-teal-dark' : 'text-warm-dark hover:text-teal-dark'
                }`}
              >
                {link.title}
              </Link>
            )
          })}
        </div>
        
        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="text-sm font-semibold text-warm-dark hover:text-teal-dark px-4 py-2 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/#voice-widget"
            className="bg-warm-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-teal-dark shadow-sm hover:shadow-md transition-all duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative z-10 p-2 -mr-2 text-warm-dark"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-xl transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 border-t' : 'max-h-0 border-t-0 border-b-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col space-y-2">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-warm-dark hover:text-teal-dark hover:bg-gray-50 font-semibold py-3 px-4 rounded-xl transition-colors"
            >
              {link.title}
            </Link>
          ))}
          <div className="h-px bg-gray-100 my-2" />
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block text-warm-dark hover:text-teal-dark hover:bg-gray-50 font-semibold py-3 px-4 rounded-xl transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/#voice-widget"
            onClick={() => setMobileOpen(false)}
            className="block text-center bg-warm-dark text-white font-semibold py-3 px-4 rounded-xl hover:bg-teal-dark transition-colors mt-2"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  )
}

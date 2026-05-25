import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
  {
    title: 'Product',
    items: [
      { label: 'How It Works', href: '/#how-it-works' },
      { label: 'Live Demo',    href: '/#voice-widget' },
      { label: 'Calculator',  href: '/savings-calculator' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'FAQ',     href: '/faq' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

export function Footer() {
  return (
    <footer id="footer" className="bg-[#1a1a1a] text-white pt-20 pb-12">
      <div className="container-max px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="md:col-span-5 lg:col-span-6">
            <Link href="/" className="inline-block mb-6 bg-white p-2 rounded-lg">
              <Image
                src="/hi-agent-logo.png"
                alt="HI Agent"
                width={160}
                height={44}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-base leading-relaxed max-w-sm mb-6">
              24/7 AI Voice Agents built for the home service trades. Never miss another call, day or night.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-teal-mid transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-teal-mid transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div className="md:col-span-7 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {footerLinks.map(col => (
              <div key={col.title}>
                <h4 className="text-sm font-bold text-white mb-6">
                  {col.title}
                </h4>
                <ul className="space-y-4">
                  {col.items.map(item => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-gray-400 hover:text-teal-light text-base transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

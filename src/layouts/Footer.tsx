import { Link } from 'react-router-dom';

const footerColumns = [
  {
    title: 'COMPANY',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Our Work', to: '/gallery' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'SERVICES',
    links: [
      { label: 'Social Media Management', to: '/services' },
      { label: 'Content Creation Schedule', to: '/services' },
      { label: 'Digital Marketing', to: '/services' },
      { label: 'Video Editing', to: '/services' },
    ],
  },
  {
    title: 'RESOURCES',
    links: [
      { label: 'Blog', to: '/blog' },
      { label: 'Gallery', to: '/gallery' },
      { label: 'Book a Call', to: '/contact' },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070817] pt-14 pb-8 relative mt-10 md:mt-18 overflow-hidden">
      {/* SVG Wave Divider at the top */}
      <div className="absolute bottom-[calc(100%-1px)] left-0 w-full leading-none pointer-events-none">
        <svg className="relative block w-full h-[50px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="footer-wave-gradient" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00D2FF" />
              <stop offset="40%" stopColor="#005BFF" />
              <stop offset="70%" stopColor="#A100FF" />
              <stop offset="100%" stopColor="#FF00D4" />
            </linearGradient>
          </defs>
          <path d="M0,72 C150,22 300,22 450,72 C600,122 750,122 900,72 C1050,22 1150,38 1200,58 L1200,120 L0,120 Z" fill="#070817"></path>
          <path d="M0,72 C150,22 300,22 450,72 C600,122 750,122 900,72 C1050,22 1150,38 1200,58" fill="none" stroke="url(#footer-wave-gradient)" strokeWidth="5" strokeLinecap="round"></path>
        </svg>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(0,210,255,0.18),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(255,0,212,0.16),transparent_30%),radial-gradient(circle_at_54%_98%,rgba(58,0,255,0.20),transparent_34%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-5 text-balance">
              Keep your content working.
            </h2>
            <p className="text-base md:text-lg text-white/68 mb-7 max-w-lg leading-relaxed">
              Get practical notes on content planning, short-form video, and social media growth.
            </p>
            <form className="relative max-w-md w-full">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full pl-6 pr-32 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A100FF] focus:bg-white/10 transition-all"
                required
              />
              <button 
                type="submit" 
                className="absolute right-2 top-2 bottom-2 logo-blend-bg text-white font-semibold px-6 rounded-full transition-transform hover:scale-[1.02] flex items-center justify-center"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-white/42 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mb-12">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-white mb-5 text-xs tracking-[0.16em]">{column.title}</h4>
              <ul className="space-y-3.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-white/58 hover:text-white transition-colors text-sm md:text-base">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-white mb-5 text-xs tracking-[0.16em]">CONTACT</h4>
            <div className="space-y-3.5 text-sm md:text-base text-white/58">
              <p>London, United Kingdom</p>
              <Link to="/contact" className="inline-flex text-white hover:text-[#00D2FF] transition-colors">
                Book a strategy call
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-7 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 sm:gap-5 text-center sm:text-left">
            <img src="/logo-official.png" alt="CONTENTFLOW MEDIA" className="h-16 md:h-20 w-auto object-contain" />
            <p className="text-sm text-white/44 sm:pt-7">
              &copy; {currentYear} ContentFlow. All rights reserved.
            </p>
          </div>
          
          <Link to="/contact" className="text-sm font-semibold text-white hover:text-[#00D2FF] transition-colors">
            Contact ContentFlow Media
          </Link>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { List, X } from '@phosphor-icons/react';
import Button from '../components/Button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHeroTop = location.pathname === '/' && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isHeroTop
          ? 'bg-transparent py-2.5'
          : 'bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(17,24,39,0.06)] py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex justify-between items-center min-h-[60px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 relative z-50">
          <img src="/logo-official.png" alt="CONTENTFLOW MEDIA" className="h-[52px] sm:h-[60px] md:h-[68px] w-auto object-contain origin-left drop-shadow-[0_2px_10px_rgba(255,255,255,0.45)]" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[15px] font-semibold transition-colors ${
                location.pathname === link.path
                  ? isHeroTop ? 'text-white' : 'logo-blend-text'
                  : isHeroTop ? 'text-white/92 hover:text-white' : 'text-[#111827] hover:text-[#3A00FF]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link to="/contact">
            <Button variant="primary" size="md">
              Book a Call
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden relative z-50 p-2 ${isHeroTop ? 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]' : 'text-[#111827]'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 w-full h-[100dvh] bg-white/94 backdrop-blur-xl z-40 flex flex-col items-center justify-center px-6"
          >
            <div className="flex flex-col items-center gap-8 w-full">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-3xl font-bold tracking-tight transition-colors ${
                      location.pathname === link.path ? 'logo-blend-text' : 'text-[#111827] hover:text-[#3A00FF]'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.4 }}
                className="w-full max-w-xs mt-8"
              >
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="primary" size="lg" className="w-full">
                    Book a Call
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

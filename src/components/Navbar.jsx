import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { languages } from '@/i18n/translations';
import JacLogo from '@/components/JacLogo';

export default function Navbar() {
  const { t, lang, changeLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setLangDropdown(false);
  }, [location.pathname]);

  const navItems = [
    { key: 'home', path: '/' },
    { key: 'products', path: '/products' },
    { key: 'dealers', path: '/dealers' },
    { key: 'about', path: '/about' },
    { key: 'service', path: '/service' },
    { key: 'contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden lg:block bg-white text-jac-obsidian/60 text-xs border-b border-jac-obsidian/10">
        <div className="px-6 lg:px-20 py-2 flex items-center justify-between">
          <span className="font-heading uppercase tracking-widest">
            {t('home.heroBadge')}
          </span>
          <a href="tel:+966114720000" className="flex items-center gap-2 hover:text-jac-yellow transition-colors">
            <Phone size={14} />
            +966 11 472 0000
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-jac-obsidian/10'
            : 'bg-white'
        }`}
      >
        <nav className="px-6 lg:px-20 flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <JacLogo height={36} className="transition-transform group-hover:scale-105 flex-shrink-0" />
            <div className="hidden sm:block">
              <div className="text-jac-obsidian font-heading font-bold text-sm tracking-wide leading-none">
                JAC FORKLIFT
              </div>
              <div className="text-jac-yellow font-heading text-xs tracking-widest uppercase leading-none mt-0.5">
                Saudi Arabia
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`relative px-4 py-2 font-heading font-bold text-sm uppercase tracking-wider transition-colors ${
                  isActive(item.path)
                    ? 'text-jac-yellow'
                    : 'text-jac-obsidian hover:text-jac-yellow'
                }`}
              >
                {t(`nav.${item.key}`)}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-jac-yellow" />
                )}
              </Link>
            ))}
          </div>

          {/* Right section */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangDropdown(!langDropdown)}
                className="flex items-center gap-1.5 text-jac-obsidian hover:text-jac-yellow font-heading font-bold text-sm tracking-wider px-3 py-2 transition-colors"
              >
                {languages[lang].native}
                <ChevronDown size={14} className={`transition-transform ${langDropdown ? 'rotate-180' : ''}`} />
              </button>
              {langDropdown && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setLangDropdown(false)} />
                  <div className="absolute end-0 mt-2 bg-white border border-jac-obsidian/10 z-50 min-w-[140px] shadow-lg">
                    {Object.values(languages).map((lng) => (
                      <button
                        key={lng.code}
                        onClick={() => {
                          changeLanguage(lng.code);
                          setLangDropdown(false);
                        }}
                        className={`w-full text-start px-4 py-3 font-heading text-sm transition-colors flex items-center gap-2 ${
                          lang === lng.code
                            ? 'bg-jac-yellow text-jac-obsidian font-bold'
                            : 'text-jac-obsidian hover:bg-jac-obsidian/5'
                        }`}
                      >
                        {lng.native}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* CTA */}
            <Link to="/contact" className="hidden md:inline-flex btn-jac text-xs px-5 py-2.5">
              {t('nav.getQuote')}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-jac-obsidian p-2"
              aria-label={t('nav.menu')}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-jac-obsidian/10 animate-heavy-lift shadow-lg">
            <div className="px-6 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`px-4 py-3 font-heading font-bold text-sm uppercase tracking-wider transition-colors ${
                    isActive(item.path)
                      ? 'text-jac-yellow bg-jac-obsidian/5'
                      : 'text-jac-obsidian hover:text-jac-yellow'
                  }`}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
              <Link to="/contact" className="btn-jac mt-3 text-xs">
                {t('nav.getQuote')}
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
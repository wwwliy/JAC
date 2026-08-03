import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const productLinks = [
  { label: t('footer.diesel'), path: '/products' },
  { label: t('footer.electric'), path: '/products' },
  { label: t('footer.warehouse'), path: '/products' },
  { label: t('footer.roughTerrain'), path: '/products' }];


  const quickLinks = [
  { label: t('nav.home'), path: '/' },
  { label: t('nav.products'), path: '/products' },
  { label: t('nav.dealers'), path: '/dealers' },
  { label: t('nav.about'), path: '/about' },
  { label: t('nav.service'), path: '/service' },
  { label: t('nav.contact'), path: '/contact' }];


  return (
    <footer className="bg-jac-obsidian text-white">
      {/* Tonnage Counter Bar */}
      <div className="bg-jac-yellow text-jac-obsidian border-y-4 border-jac-obsidian">
        












        
      </div>

      {/* Main footer */}
      <div className="px-6 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <div className="mb-4">
            <div className="font-heading font-bold text-base tracking-wide leading-none text-white">
              JAC FORKLIFT
            </div>
            <div className="text-jac-yellow font-heading text-xs tracking-widest uppercase leading-none mt-1">
              Saudi Arabia
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            {t('footer.tagline')}
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-jac-yellow mb-4">
            {t('footer.quickLinks')}
          </h3>
          <ul className="space-y-2.5">
            {quickLinks.map((link, i) =>
            <li key={i}>
                <Link
                to={link.path}
                className="text-white/60 hover:text-jac-yellow text-sm transition-colors inline-flex items-center gap-1 group">
                
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Product links */}
        <div>
          <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-jac-yellow mb-4">
            {t('footer.productLinks')}
          </h3>
          <ul className="space-y-2.5">
            {productLinks.map((link, i) =>
            <li key={i}>
                <Link
                to={link.path}
                className="text-white/60 hover:text-jac-yellow text-sm transition-colors inline-flex items-center gap-1 group">
                
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-jac-yellow mb-4">
            {t('footer.contactTitle')}
          </h3>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-jac-yellow flex-shrink-0 mt-0.5" />
              <span>{t('footer.address')}</span>
            </li>
            <li>
              <a href="tel:+966114720000" className="flex items-center gap-3 hover:text-jac-yellow transition-colors">
                <Phone size={16} className="text-jac-yellow flex-shrink-0" />
                +966 11 472 0000
              </a>
            </li>
            <li>
              <a href="mailto:info@jacforklift-saudi.com" className="flex items-center gap-3 hover:text-jac-yellow transition-colors">
                <Mail size={16} className="text-jac-yellow flex-shrink-0" />
                info@jacforklift-saudi.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={16} className="text-jac-yellow flex-shrink-0 mt-0.5" />
              <span>{t('contact.hoursValue').replace('\n', ' ')}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-jac-obsidian-card px-6 lg:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/40 text-xs">
          © {new Date().getFullYear()} JAC Forklift Saudi Arabia. {t('footer.rights')}
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-white/40 hover:text-jac-yellow text-xs transition-colors">{t('footer.privacy')}</a>
          <span className="text-white/20">|</span>
          <a href="#" className="text-white/40 hover:text-jac-yellow text-xs transition-colors">{t('footer.terms')}</a>
          <span className="text-white/20">|</span>
          <a href="#" className="text-white/40 hover:text-jac-yellow text-xs transition-colors">{t('footer.sitemap')}</a>
        </div>
      </div>
    </footer>);

}
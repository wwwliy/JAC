import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import Reveal from '@/components/Reveal';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="bg-jac-steel section-padding relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-8 border-l-8 border-jac-obsidian opacity-10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-8 border-r-8 border-jac-obsidian opacity-10" />

      <div className="relative max-w-[1600px] mx-auto">
        <Reveal className="text-center">
          <h2 className="heading-massive text-jac-obsidian text-4xl md:text-6xl lg:text-7xl mb-6 max-w-4xl mx-auto">
            {t('home.ctaTitle')}
          </h2>
          <p className="text-jac-obsidian/70 text-lg mb-10 max-w-2xl mx-auto">
            {t('home.ctaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-jac-obsidian text-jac-yellow font-heading font-bold uppercase tracking-wider px-8 py-4 text-sm transition-all duration-300 hover:bg-jac-obsidian-light hover:-translate-y-0.5">
              {t('home.ctaButton')}
              <ArrowRight size={18} className="rtl:rotate-180" />
            </Link>
            <a href="https://wa.me/966551854250" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-heading font-bold uppercase tracking-wider px-8 py-4 text-sm transition-all duration-300 hover:bg-[#1da851] hover:-translate-y-0.5">
              <MessageCircle size={18} />
              {t('home.ctaCall')}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
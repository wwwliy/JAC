import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { dealers } from '@/data/dealers';
import Reveal from '@/components/Reveal';

export default function DealerPreview() {
  const { t, lang } = useLanguage();

  return (
    <section className="bg-jac-steel section-padding">
      <div className="max-w-[1600px] mx-auto">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="label-industrial mb-4">{t('home.dealersBadge')}</div>
            <h2 className="heading-massive text-jac-obsidian text-4xl md:text-6xl lg:text-7xl max-w-3xl">
              {t('home.dealersTitle')}
            </h2>
          </div>
          <p className="text-jac-obsidian/60 text-lg max-w-xl">
            {t('home.dealersSubtitle')}
          </p>
        </Reveal>

        {/* Dealer cities grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-jac-obsidian/10">
          {dealers.map((dealer, i) => (
            <Reveal
              key={dealer.id}
              delay={i * 50}
              className="bg-white p-6 lg:p-8 group hover:bg-jac-yellow transition-colors duration-300"
            >
              <Link to="/dealers" className="block">
                <MapPin size={24} className="text-jac-obsidian mb-4 group-hover:scale-110 transition-transform" />
                <div className="font-heading font-bold text-xl text-jac-obsidian mb-1">
                  {dealer.city[lang] || dealer.city.en}
                </div>
                <div className="text-jac-obsidian/40 text-xs uppercase tracking-widest font-heading">
                  {dealer.role[lang] || dealer.role.en}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Link to="/dealers" className="btn-jac">
            {t('home.dealersCta')}
            <ArrowRight size={18} className="rtl:rotate-180" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
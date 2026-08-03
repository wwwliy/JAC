import { Link } from 'react-router-dom';
import { ShieldCheck, Wrench, Check, ArrowRight, Headphones, PackageCheck, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import Reveal from '@/components/Reveal';
import SEO from '@/components/SEO';

export default function ServiceSupport() {
  const { t } = useLanguage();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": { "@type": "Organization", "name": "JAC Forklift Saudi Arabia" },
    "serviceType": "Forklift warranty and spare parts service",
    "areaServed": "Saudi Arabia",
  };

  const warrantyPoints = [
    t('service.warrantyP1'),
    t('service.warrantyP2'),
    t('service.warrantyP3'),
    t('service.warrantyP4'),
  ];

  const partsPoints = [
    t('service.partsP1'),
    t('service.partsP2'),
    t('service.partsP3'),
    t('service.partsP4'),
  ];

  const stats = [
    { icon: Clock, value: '24/7', label: 'Emergency Support' },
    { icon: MapPin, value: '3', label: 'Kingdom Locations' },
    { icon: PackageCheck, value: '100%', label: 'Genuine Parts' },
    { icon: Headphones, value: '48h', label: 'Response Time' },
  ];

  return (
    <>
      <SEO
        title="Service & Support | JAC Forklift Saudi Arabia"
        description="Comprehensive after-sales support for JAC forklifts in Saudi Arabia — professional warranty service and genuine spare parts supply across Riyadh, Jeddah, and Dammam."
        keywords="JAC forklift service Saudi Arabia, forklift warranty KSA, genuine spare parts, forklift maintenance"
        path="/service"
        schema={serviceSchema}
      />

      {/* Page header */}
      <section className="bg-jac-obsidian text-white section-padding pt-32">
        <div className="max-w-[1600px] mx-auto">
          <div className="label-industrial mb-4">{t('service.badge')}</div>
          <h1 className="heading-massive text-white text-5xl md:text-7xl lg:text-8xl mb-6">
            {t('service.title')}
          </h1>
          <p className="text-white/50 text-lg max-w-2xl">
            {t('service.subtitle')}
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-jac-obsidian-light border-y border-jac-obsidian-card">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-20 py-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-jac-yellow flex items-center justify-center flex-shrink-0">
                  <stat.icon size={22} className="text-jac-obsidian" />
                </div>
                <div>
                  <div className="font-heading font-bold text-2xl text-white">{stat.value}</div>
                  <div className="text-white/40 text-xs font-heading uppercase tracking-widest">{stat.label}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Warranty service */}
      <section className="bg-jac-steel section-padding">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <div className="label-industrial mb-4">{t('service.warrantyBadge')}</div>
              <h2 className="heading-massive text-jac-obsidian text-4xl md:text-5xl lg:text-6xl mb-6">
                {t('service.warrantyTitle')}
              </h2>
              <p className="text-jac-obsidian/70 text-lg leading-relaxed mb-8">
                {t('service.warrantyText')}
              </p>
              <ul className="space-y-4">
                {warrantyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-jac-yellow flex items-center justify-center mt-0.5">
                      <Check size={14} className="text-jac-obsidian" strokeWidth={3} />
                    </div>
                    <span className="text-jac-obsidian/80 text-base">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative aspect-[4/3] overflow-hidden bg-jac-obsidian border-4 border-jac-obsidian-card flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-jac-obsidian via-jac-obsidian-light to-jac-obsidian" />
                <div className="relative text-center p-8">
                  <ShieldCheck size={80} className="text-jac-yellow mx-auto mb-6" strokeWidth={1.5} />
                  <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                    {stats.slice(0, 2).map((stat, i) => (
                      <div key={i} className="bg-jac-obsidian-card border border-jac-obsidian/30 p-3">
                        <stat.icon size={20} className="text-jac-yellow mx-auto mb-1" />
                        <div className="font-heading font-bold text-xl text-white">{stat.value}</div>
                        <div className="text-white/40 text-xs font-heading uppercase tracking-widest">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-6 start-6 bg-jac-yellow text-jac-obsidian font-heading font-bold text-sm uppercase tracking-wider px-4 py-2 flex items-center gap-2">
                  <ShieldCheck size={18} />
                  {t('service.warrantyBadge')}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Spare parts */}
      <section className="bg-white section-padding">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden bg-jac-steel border-4 border-jac-obsidian/10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-jac-steel via-white to-jac-steel" />
                <div className="relative text-center p-8">
                  <Wrench size={80} className="text-jac-obsidian mx-auto mb-6" strokeWidth={1.5} />
                  <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                    {stats.slice(2, 4).map((stat, i) => (
                      <div key={i} className="bg-white border border-jac-obsidian/10 p-3">
                        <stat.icon size={20} className="text-jac-obsidian mx-auto mb-1" />
                        <div className="font-heading font-bold text-xl text-jac-obsidian">{stat.value}</div>
                        <div className="text-jac-obsidian/40 text-xs font-heading uppercase tracking-widest">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-6 start-6 bg-jac-yellow text-jac-obsidian font-heading font-bold text-sm uppercase tracking-wider px-4 py-2 flex items-center gap-2">
                  <Wrench size={18} />
                  {t('service.partsBadge')}
                </div>
              </div>
            </Reveal>
            <Reveal delay={100} className="order-1 lg:order-2">
              <div className="label-industrial mb-4">{t('service.partsBadge')}</div>
              <h2 className="heading-massive text-jac-obsidian text-4xl md:text-5xl lg:text-6xl mb-6">
                {t('service.partsTitle')}
              </h2>
              <p className="text-jac-obsidian/70 text-lg leading-relaxed mb-8">
                {t('service.partsText')}
              </p>
              <ul className="space-y-4">
                {partsPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-jac-yellow flex items-center justify-center mt-0.5">
                      <Check size={14} className="text-jac-obsidian" strokeWidth={3} />
                    </div>
                    <span className="text-jac-obsidian/80 text-base">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-jac-obsidian section-padding">
        <div className="max-w-[1600px] mx-auto text-center">
          <Reveal>
            <h2 className="heading-massive text-white text-4xl md:text-5xl lg:text-6xl mb-6">
              {t('service.ctaTitle')}
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-2xl mx-auto">
              {t('service.ctaSubtitle')}
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-jac-yellow text-jac-obsidian font-heading font-bold uppercase tracking-wider px-8 py-4 text-sm transition-all duration-300 hover:bg-jac-yellow-hover hover:-translate-y-0.5">
              {t('service.ctaButton')}
              <ArrowRight size={18} className="rtl:rotate-180" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
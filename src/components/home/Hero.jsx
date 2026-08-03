import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { image } from '@/lib/assets';

const HERO_IMAGES = [
  {
    src: image('1ae4c6e41_generated_image.png'),
    alt: 'Red JAC heavy-duty forklift at Saudi Arabian industrial port at golden hour',
  },
  {
    src: image('b69d628d3_generated_image.png'),
    alt: 'Red JAC diesel forklift operating in a modern logistics warehouse',
  },
  {
    src: image('e89e99179_generated_image.png'),
    alt: 'Red JAC electric forklift at a Saudi Arabian industrial facility',
  },
];

export default function Hero() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-jac-obsidian">
      {/* Background images carousel */}
      <div className="absolute inset-0">
        {HERO_IMAGES.map((image, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: idx === current ? 1 : 0 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              fetchPriority={idx === 0 ? 'high' : 'low'}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-jac-obsidian via-jac-obsidian/60 to-jac-obsidian/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-jac-obsidian/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end px-6 lg:px-20 pb-20 lg:pb-32 max-w-[1600px]">
        {/* Badge */}
        <div className="mb-6 animate-heavy-lift">
          <div className="inline-flex items-center gap-3 bg-jac-yellow text-jac-obsidian px-4 py-2">
            <span className="w-2 h-2 bg-jac-obsidian rounded-full animate-beacon-pulse" />
            <span className="font-heading font-bold text-xs uppercase tracking-[0.2em]">
              {t('home.heroBadge')}
            </span>
          </div>
        </div>

        {/* Title */}
        <h1 className="heading-massive text-white text-5xl sm:text-7xl lg:text-8xl xl:text-9xl max-w-5xl mb-6 animate-heavy-lift" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
          {t('home.heroTitle')}
        </h1>

        {/* Subtitle */}
        <p className="text-white/70 text-lg lg:text-xl max-w-2xl mb-8 leading-relaxed animate-heavy-lift" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
          {t('home.heroSubtitle')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 animate-heavy-lift" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
          <Link to="/products" className="btn-jac group">
            {t('home.heroCta1')}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </Link>
          <Link to="/dealers" className="btn-ghost-jac">
            {t('home.heroCta2')}
          </Link>
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1 transition-all duration-300 ${
              idx === current ? 'w-12 bg-jac-yellow' : 'w-6 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Side label */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 hidden xl:block">
        <div className="rotate-90 origin-right text-white/30 text-xs uppercase tracking-[0.4em] font-heading whitespace-nowrap">
          JAC × Vision 2030
        </div>
      </div>
    </section>
  );
}

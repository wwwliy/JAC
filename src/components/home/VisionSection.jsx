import { Check } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import Reveal from '@/components/Reveal';

const VISION_IMAGE = './images/ed857b767_generated_3883ec93.png';

export default function VisionSection() {
  const { t } = useLanguage();

  const points = [
    t('home.visionPoint1'),
    t('home.visionPoint2'),
    t('home.visionPoint3'),
    t('home.visionPoint4'),
  ];

  return (
    <section className="bg-jac-obsidian text-white relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={VISION_IMAGE}
          alt="Modern logistics warehouse in Saudi Arabia with rows of industrial forklifts"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-jac-obsidian via-jac-obsidian/90 to-jac-obsidian/70" />
      </div>

      <div className="relative section-padding">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <Reveal>
            <div className="label-industrial mb-4">{t('home.visionBadge')}</div>
            <h2 className="heading-massive text-white text-4xl md:text-6xl mb-8">
              {t('home.visionTitle')}
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              {t('home.visionText')}
            </p>
            <ul className="space-y-4">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-jac-yellow flex items-center justify-center mt-0.5">
                    <Check size={14} className="text-jac-obsidian" strokeWidth={3} />
                  </div>
                  <span className="text-white/80 text-base">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right: Large stat block */}
          <Reveal delay={200} className="hidden lg:block">
            <div className="relative">
              <div className="bg-jac-yellow text-jac-obsidian p-12 relative">
                <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-jac-obsidian" />
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-jac-obsidian" />
                <div className="text-center py-8">
                  <div className="font-heading font-bold text-9xl leading-none mb-4">2030</div>
                  <div className="font-heading font-bold text-xl uppercase tracking-widest">
                    Vision Aligned
                  </div>
                  <div className="w-16 h-1 bg-jac-obsidian mx-auto mt-6" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

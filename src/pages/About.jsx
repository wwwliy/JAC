import { Check, Award, Factory, Users, Wrench } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import Reveal from '@/components/Reveal';
import SEO from '@/components/SEO';
import { Image } from '@/components/ui/image';

const ABOUT_IMAGE_1 = '/www1/images/561f6d560_IMG20260105181328.jpg';
const ABOUT_IMAGE_2 = '/www1/images/8_about_03.jpg';

export default function About() {
  const { t } = useLanguage();

  const values = [
  { icon: Factory, title: t('about.value1Title'), text: t('about.value1Text') },
  { icon: Users, title: t('about.value2Title'), text: t('about.value2Text') },
  { icon: Award, title: t('about.value3Title'), text: t('about.value3Text') },
  { icon: Wrench, title: t('about.value4Title'), text: t('about.value4Text') }];


  const certs = [
  t('about.cert1'), t('about.cert2'), t('about.cert3'),
  t('about.cert4'), t('about.cert5'), t('about.cert6')];


  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About JAC Forklift Saudi Arabia",
    "description": t('about.subtitle'),
    "mainEntity": {
      "@type": "Organization",
      "name": "JAC Forklift Saudi Arabia",
      "foundingDate": "2018",
      "numberOfEmployees": "150+",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Riyadh",
        "addressCountry": "SA"
      }
    }
  };

  return (
    <>
      <SEO
        title="About JAC Forklift Saudi Arabia | Exclusive KSA Distributor & Vision 2030 Partner"
        description="JAC Forklift Saudi Arabia — the exclusive Kingdom-wide distributor of JAC forklifts. Learn about our story, mission, Vision 2030 alignment, and commitment to Saudization."
        keywords="about JAC forklift Saudi Arabia, JAC KSA distributor, Vision 2030 forklift, Saudization forklift, JAC heritage Saudi"
        path="/about"
        schema={orgSchema} />
      

      {/* Header */}
      <section className="bg-jac-obsidian text-white section-padding pt-32">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <Reveal>
            <div className="label-industrial mb-4">{t('about.badge')}</div>
            <h1 className="heading-massive text-white text-4xl md:text-6xl lg:text-7xl mb-6">
              {t('about.title')}
            </h1>
            <p className="text-white/50 text-lg max-w-xl">
              {t('about.subtitle')}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden border-4 border-jac-obsidian-card">
                <Image
                  src={ABOUT_IMAGE_1}
                  alt="JAC Forklift Saudi Arabia headquarters and operations"
                  fittingType="fill"
                  className="w-full h-full"
                  loading="lazy" />
              </div>
              


              
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white section-padding">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-1">
            <div className="label-industrial mb-4">01</div>
            <h2 className="heading-massive text-jac-obsidian text-3xl md:text-5xl mb-4">
              {t('about.storyTitle')}
            </h2>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-2 space-y-6 text-lg text-jac-obsidian/70 leading-relaxed">
            <p>{t('about.storyP1')}</p>
            <p>{t('about.storyP2')}</p>
            <p>{t('about.storyP3')}</p>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision 2030 */}
      <section className="bg-jac-steel section-padding">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-px bg-jac-obsidian/10">
          <Reveal className="bg-white p-10 lg:p-12">
            <div className="label-industrial mb-4">02</div>
            <h2 className="heading-massive text-jac-obsidian text-2xl md:text-4xl mb-6">
              {t('about.missionTitle')}
            </h2>
            <p className="text-jac-obsidian/70 text-lg leading-relaxed">
              {t('about.missionText')}
            </p>
          </Reveal>
          <Reveal delay={100} className="bg-jac-obsidian p-10 lg:p-12 text-white">
            <div className="label-industrial mb-4">03</div>
            <h2 className="heading-massive text-white text-2xl md:text-4xl mb-6">
              {t('about.vision2030Title')}
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              {t('about.vision2030Text')}
            </p>
            <div className="bg-jac-yellow text-jac-obsidian p-6 inline-block">
              <div className="font-heading font-bold text-5xl">65%</div>
              <div className="font-heading font-bold text-xs uppercase tracking-widest mt-1">Saudization Rate</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-jac-obsidian text-white section-padding">
        <div className="max-w-[1600px] mx-auto">
          <Reveal className="mb-16">
            <div className="label-industrial mb-4">04</div>
            <h2 className="heading-massive text-white text-3xl md:text-5xl lg:text-6xl">
              {t('about.valuesTitle')}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-jac-obsidian-card">
            {values.map((value, i) =>
            <Reveal
              key={i}
              delay={i * 100}
              className="bg-jac-obsidian p-8 lg:p-10 group hover:bg-jac-obsidian-light transition-colors">
              
                <value.icon size={40} className="text-jac-yellow mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-bold text-xl text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {value.text}
                </p>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Certifications */}
      




















      

      {/* JAC Heritage */}
      



































      
    </>);

}
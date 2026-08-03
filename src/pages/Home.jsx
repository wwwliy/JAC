import Hero from '@/components/home/Hero';
import Marquee from '@/components/home/Marquee';
import StatsBar from '@/components/home/StatsBar';
import ProductPreview from '@/components/home/ProductPreview';
import VisionSection from '@/components/home/VisionSection';
import DealerPreview from '@/components/home/DealerPreview';
import CTASection from '@/components/home/CTASection';
import SEO from '@/components/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="JAC Forklift Saudi Arabia | Exclusive KSA Distributor of Industrial Forklifts"
        description="JAC Forklift Saudi Arabia — exclusive KSA distributor of diesel, electric, and LPG forklifts. Serving Riyadh, Jeddah, Dammam, NEOM & Kingdom-wide with sales, parts, and service aligned with Vision 2030."
        keywords="JAC forklift Saudi Arabia, forklift KSA, diesel forklift Riyadh, electric forklift Jeddah, material handling Saudi Arabia, Vision 2030"
        path="/"
      />
      <Hero />
      <Marquee />
      <StatsBar />
      <ProductPreview />
      <VisionSection />
      <DealerPreview />
      <CTASection />
    </>
  );
}
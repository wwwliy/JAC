import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, Phone, Check } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { products } from '@/data/products';
import { productSpecs } from '@/data/productSpecs';
import SEO from '@/components/SEO';
import Reveal from '@/components/Reveal';

export default function ProductDetail() {
  const { slug } = useParams();
  const { t, lang } = useLanguage();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = products.find((p) => p.slug === slug);
    setProduct(found || null);
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="bg-jac-obsidian text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/60 mb-4">Product not found</p>
          <Link to="/products" className="btn-jac">{t('products.backToProducts')}</Link>
        </div>
      </div>
    );
  }

  const name = lang === 'zh' ? product.nameZh : lang === 'ar' ? product.nameAr : product.name;
  const desc = product.description[lang] || product.description.en;
  const features = product.features[lang] || product.features.en;
  const specs = productSpecs[product.id] || null;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "image": product.image,
    "description": desc,
    "brand": { "@type": "Brand", "name": "JAC Forklift" },
    "category": product.category,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "SAR",
      "seller": { "@type": "Organization", "name": "JAC Forklift Saudi Arabia" }
    }
  };

  return (
    <>
      <SEO
        title={`${name} | JAC Forklift Saudi Arabia`}
        description={desc}
        keywords={`${name}, JAC forklift, ${product.category} forklift Saudi Arabia`}
        path={`/products/${product.slug}`}
        schema={productSchema}
      />

      {/* Product hero */}
      <section className="bg-jac-obsidian text-white pt-32 pb-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-20">
          <Link to="/products" className="inline-flex items-center gap-2 text-white/40 hover:text-jac-yellow transition-colors mb-8 text-sm font-heading uppercase tracking-widest">
            <ArrowLeft size={16} className="rtl:rotate-180" />
            {t('products.backToProducts')}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Image */}
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden bg-white border-4 border-jac-obsidian-card">
                <img
                  src={product.image}
                  alt={name}
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-6 start-6 bg-jac-yellow text-jac-obsidian font-heading font-bold text-sm uppercase tracking-wider px-4 py-2">
                  {product.series} Series
                </div>
              </div>
            </Reveal>

            {/* Info */}
            <Reveal delay={100}>
              <div className="label-industrial mb-4">{product.category}</div>
              <h1 className="heading-massive text-white text-4xl md:text-5xl lg:text-6xl mb-6">
                {name}
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                {desc}
              </p>

              {/* Key specs */}
              <div className="grid grid-cols-3 gap-px bg-jac-obsidian-card mb-8">
                <div className="bg-jac-obsidian p-5">
                  <div className="text-jac-yellow text-xs font-heading uppercase tracking-widest mb-1">
                    {t('products.capacity')}
                  </div>
                  <div className="font-heading font-bold text-xl text-white">
                    {product.capacity}
                  </div>
                </div>
                <div className="bg-jac-obsidian p-5">
                  <div className="text-jac-yellow text-xs font-heading uppercase tracking-widest mb-1">
                    {t('products.engine')}
                  </div>
                  <div className="font-heading font-bold text-sm text-white">
                    {product.engine}
                  </div>
                </div>
                <div className="bg-jac-obsidian p-5">
                  <div className="text-jac-yellow text-xs font-heading uppercase tracking-widest mb-1">
                    {t('products.series')}
                  </div>
                  <div className="font-heading font-bold text-xl text-white">
                    {product.series}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="font-heading font-bold text-lg text-jac-yellow uppercase tracking-widest mb-4">
                  {t('products.keyFeatures')}
                </h2>
                <ul className="space-y-3">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-jac-yellow flex items-center justify-center mt-0.5">
                        <Check size={12} className="text-jac-obsidian" strokeWidth={3} />
                      </div>
                      <span className="text-white/70 text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Technical specs section */}
      <section className="bg-jac-steel section-padding pb-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-20">
          <Reveal>
            <div className="label-industrial mb-4">{t('products.technicalSpecs')}</div>
            <h2 className="heading-massive text-jac-obsidian text-3xl md:text-5xl mb-8">
              {t('products.technicalSpecs')}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="bg-white border border-jac-obsidian/10 max-w-4xl overflow-hidden">
              {specs ? (
                <>
                  {[
                    { label: t('products.specModel'), value: specs.model },
                    { label: t('products.specPowerType'), value: specs.powerType },
                    { label: t('products.specRatedLoad'), value: specs.ratedLoad },
                    { label: t('products.specLoadCenter'), value: specs.loadCenter },
                    { label: t('products.specLiftHeight'), value: specs.liftHeight },
                    { label: t('products.specFreeLift'), value: specs.freeLiftHeight },
                    { label: t('products.specForkSize'), value: specs.forkSize },
                    { label: t('products.specTurningRadius'), value: specs.minTurningRadius },
                    { label: t('products.specOverallLength'), value: specs.overallLength },
                    { label: t('products.specOverallWidth'), value: specs.overallWidth },
                    { label: t('products.specMastHeightMax'), value: specs.mastHeightMax },
                    { label: t('products.specMastLowered'), value: specs.mastLoweredHeight },
                  ].map((row, i) => (
                    <div key={i} className={`flex ${i % 2 === 0 ? 'bg-jac-steel' : 'bg-white'} border-b border-jac-obsidian/5`}>
                      <div className="w-1/2 p-4 font-heading font-bold text-sm text-jac-obsidian uppercase tracking-wider">
                        {row.label}
                      </div>
                      <div className="w-1/2 p-4 text-jac-obsidian/80 text-sm">
                        {row.value || '—'}
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-jac-obsidian/10">
                  <div className="bg-white p-6">
                    <div className="text-jac-obsidian/40 text-xs font-heading uppercase tracking-widest mb-2">
                      {t('products.capacity')}
                    </div>
                    <div className="font-heading font-bold text-2xl text-jac-obsidian">
                      {product.capacity}
                    </div>
                  </div>
                  <div className="bg-white p-6">
                    <div className="text-jac-obsidian/40 text-xs font-heading uppercase tracking-widest mb-2">
                      {t('products.engine')}
                    </div>
                    <div className="font-heading font-bold text-lg text-jac-obsidian">
                      {product.engine}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sticky spec bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-jac-obsidian/95 backdrop-blur-md border-t-2 border-jac-yellow">
        <div className="px-6 lg:px-20 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-jac-yellow text-jac-obsidian font-heading font-bold text-sm px-3 py-1">
              {product.series}
            </div>
            <div>
              <div className="text-white font-heading font-bold text-sm line-clamp-1">
                {name}
              </div>
              <div className="text-jac-yellow font-heading text-xs">
                {t('products.capacity')}: {product.capacity}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 border-2 border-jac-yellow text-jac-yellow font-heading font-bold uppercase tracking-wider px-6 py-2.5 text-xs hover:bg-jac-yellow hover:text-jac-obsidian transition-colors">
              <Download size={14} />
              {t('products.downloadSpecs')}
            </button>
            <Link to="/contact" className="flex-1 sm:flex-none btn-jac text-xs px-6 py-2.5">
              {t('products.requestQuote')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
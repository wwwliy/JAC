import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { products, productCategories } from '@/data/products';
import Reveal from '@/components/Reveal';
import SEO from '@/components/SEO';

export default function Products() {
  const { t, lang } = useLanguage();
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(() => {
    if (filter === 'all') return products;
    return products.filter((p) => p.category === filter);
  }, [filter]);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Product",
        "name": p.name,
        "category": p.category,
        "image": p.image,
        "url": `https://jacforklift-saudi.com/products/${p.slug}`,
        "brand": { "@type": "Brand", "name": "JAC Forklift" },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "SAR",
          "seller": { "@type": "Organization", "name": "JAC Forklift Saudi Arabia" }
        }
      }
    }))
  };

  return (
    <>
      <SEO
        title="JAC Forklift Products Saudi Arabia | Diesel, Electric & Warehouse Equipment"
        description="Explore the full range of JAC forklifts in Saudi Arabia — diesel (1-25T), electric, warehouse equipment, and rough terrain forklifts. Built for Saudi industrial demands."
        keywords="JAC forklift products Saudi Arabia, diesel forklift, electric forklift, warehouse equipment KSA"
        path="/products"
        schema={productSchema}
      />

      {/* Page header */}
      <section className="bg-jac-obsidian text-white section-padding pt-32">
        <div className="max-w-[1600px] mx-auto">
          <div className="label-industrial mb-4">{t('products.badge')}</div>
          <h1 className="heading-massive text-white text-5xl md:text-7xl lg:text-8xl mb-6">
            {t('products.title')}
          </h1>
          <p className="text-white/50 text-lg max-w-2xl">
            {t('products.subtitle')}
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <div className="sticky top-20 z-30 bg-jac-obsidian-light border-y border-jac-obsidian-card">
        <div className="px-6 lg:px-20 py-4 flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`flex-shrink-0 px-5 py-2.5 font-heading font-bold text-xs uppercase tracking-wider transition-colors ${
                filter === cat.id
                  ? 'bg-jac-yellow text-jac-obsidian'
                  : 'text-white/60 hover:text-jac-yellow'
              }`}
            >
              {cat.id === 'all' ? t('products.all') : t(`products.${cat.filterKey}`)}
            </button>
          ))}
        </div>
      </div>

      {/* Products grid */}
      <section className="bg-jac-steel section-padding">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) => (
              <Reveal
                key={product.id}
                delay={(i % 3) * 100}
                className="bg-white group"
              >
                <Link to={`/products/${product.slug}`} className="block">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-jac-obsidian">
                    <img
                      src={product.image}
                      alt={lang === 'zh' ? product.nameZh : lang === 'ar' ? product.nameAr : product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    {/* Series badge */}
                    <div className="absolute top-4 start-4 bg-jac-yellow text-jac-obsidian font-heading font-bold text-xs uppercase tracking-wider px-3 py-1.5">
                      {product.series}
                    </div>
                    {/* Category badge */}
                    <div className="absolute bottom-4 end-4 bg-jac-obsidian/80 text-white font-heading text-xs uppercase tracking-wider px-3 py-1.5 backdrop-blur-sm">
                      {product.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 border-t-2 border-jac-obsidian/10 group-hover:border-jac-yellow transition-colors">
                    <h3 className="font-heading font-bold text-lg text-jac-obsidian mb-4 line-clamp-2 min-h-[3.5rem]">
                      {lang === 'zh' ? product.nameZh : lang === 'ar' ? product.nameAr : product.name}
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-jac-obsidian/40 text-xs font-heading uppercase tracking-widest mb-1">
                          {t('products.capacity')}
                        </div>
                        <div className="font-heading font-bold text-base text-jac-obsidian">
                          {product.capacity}
                        </div>
                      </div>
                      <div>
                        <div className="text-jac-obsidian/40 text-xs font-heading uppercase tracking-widest mb-1">
                          {t('products.engine')}
                        </div>
                        <div className="font-heading font-bold text-sm text-jac-obsidian line-clamp-1">
                          {product.engine}
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-1 text-jac-obsidian font-heading font-bold text-xs uppercase tracking-widest group-hover:text-jac-yellow-dark transition-colors">
                      {t('products.requestQuote')}
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
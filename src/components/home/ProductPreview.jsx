import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { products } from '@/data/products';
import Reveal from '@/components/Reveal';

export default function ProductPreview() {
  const { t, lang } = useLanguage();
  const featured = products.slice(0, 4);

  return (
    <section className="bg-jac-steel section-padding">
      <div className="max-w-[1600px] mx-auto">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="label-industrial mb-4">{t('home.productsBadge')}</div>
            <h2 className="heading-massive text-jac-obsidian text-4xl md:text-6xl lg:text-7xl max-w-3xl">
              {t('home.productsTitle')}
            </h2>
          </div>
          <p className="text-jac-obsidian/60 text-lg max-w-xl">
            {t('home.productsSubtitle')}
          </p>
        </Reveal>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {featured.map((product, i) => (
            <Reveal
              key={product.id}
              delay={i * 100}
              className="bg-white group cursor-pointer"
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
                </div>

                {/* Specs */}
                <div className="p-6 border-t-2 border-jac-obsidian/10 group-hover:border-jac-yellow transition-colors">
                  <div className="mb-3">
                    <div className="text-jac-obsidian/40 text-xs font-heading uppercase tracking-widest mb-1">
                      {t('home.specsCapacity')}
                    </div>
                    <div className="font-heading font-bold text-2xl text-jac-obsidian">
                      {product.capacity}
                    </div>
                  </div>
                  <div className="text-jac-obsidian/60 text-sm line-clamp-2">
                    {product.description[lang] || product.description.en}
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1 text-jac-obsidian font-heading font-bold text-xs uppercase tracking-widest group-hover:text-jac-yellow-dark transition-colors">
                    {t('home.viewSpecs')}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="mt-12 flex justify-center">
          <Link to="/products" className="btn-jac">
            {t('home.productsCta')}
            <ArrowRight size={18} className="rtl:rotate-180" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
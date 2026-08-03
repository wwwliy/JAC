import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, X } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { dealers } from '@/data/dealers';
import Reveal from '@/components/Reveal';
import SEO from '@/components/SEO';

// Simplified Saudi Arabia SVG map outline (geographically approximate)
// West coast = Red Sea (Jeddah), East coast = Persian Gulf (Dammam), Center = Riyadh
const SAUDI_MAP_PATH = "M 133,188 L 251,130 L 323,157 L 395,178 L 464,205 L 517,205 L 527,235 L 608,257 L 645,300 L 633,320 L 685,360 L 640,410 L 570,450 L 523,474 L 440,490 L 357,488 L 326,436 L 264,376 L 229,313 L 182,261 L 158,234 Z";

export default function Dealers() {
  const { t, lang } = useLanguage();
  const [selectedDealer, setSelectedDealer] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleDealerClick = (dealer) => {
    setSelectedDealer(dealer);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to backend
    setFormData({ name: '', phone: '', message: '' });
  };

  const dealerSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": dealers.map((d, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "LocalBusiness",
        "name": `JAC Forklift ${d.city.en}`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": d.address.en,
          "addressLocality": d.city.en,
          "addressCountry": "SA"
        },
        "telephone": d.phone,
        "email": d.email
      }
    }))
  };

  return (
    <>
      <SEO
        title="JAC Forklift Saudi Dealers | Riyadh HQ, Jeddah & Dammam Distributors"
        description="JAC Forklift Saudi Arabia — three strategic locations: Riyadh headquarters, Jeddah authorized distributor, and Dammam authorized distributor. Sales, genuine parts, and 24/7 service."
        keywords="JAC forklift dealers Saudi Arabia, forklift dealer Riyadh, forklift service Jeddah, JAC dealer Dammam, KSA forklift service"
        path="/dealers"
        schema={dealerSchema}
      />

      {/* Header */}
      <section className="bg-jac-obsidian text-white section-padding pt-32">
        <div className="max-w-[1600px] mx-auto">
          <div className="label-industrial mb-4">{t('dealers.badge')}</div>
          <h1 className="heading-massive text-white text-5xl md:text-7xl lg:text-8xl mb-6">
            {t('dealers.title')}
          </h1>
          <p className="text-white/50 text-lg max-w-2xl">
            {t('dealers.subtitle')}
          </p>
        </div>
      </section>

      {/* Interactive map */}
      <section className="bg-jac-steel section-padding">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-jac-obsidian border-4 border-jac-yellow">
            {/* Map — takes 3 columns */}
            <div className="lg:col-span-3 relative bg-jac-obsidian p-8 lg:p-12">
              <div className="relative w-full aspect-[4/3]">
                <svg viewBox="0 0 900 600" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                  {/* Saudi Arabia outline */}
                  <path
                    d={SAUDI_MAP_PATH}
                    fill="none"
                    stroke="#FFCC00"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    opacity="0.4"
                  />
                  <path
                    d={SAUDI_MAP_PATH}
                    fill="#1A1A1A"
                    stroke="#FFCC00"
                    strokeWidth="1"
                    strokeLinejoin="round"
                  />

                  {/* Grid lines for industrial blueprint feel */}
                  {[100, 200, 300, 400, 500].map((y) => (
                    <line key={y} x1="50" y1={y} x2="850" y2={y} stroke="#FFCC00" strokeWidth="0.3" opacity="0.1" />
                  ))}
                  {[150, 300, 450, 600, 750].map((x) => (
                    <line key={x} x1={x} y1="50" x2={x} y2="550" stroke="#FFCC00" strokeWidth="0.3" opacity="0.1" />
                  ))}

                  {/* Dealer beacons */}
                  {dealers.map((dealer) => {
                    const x = (dealer.x / 100) * 900;
                    const y = (dealer.y / 100) * 600;
                    const isSelected = selectedDealer?.id === dealer.id;
                    return (
                      <g
                        key={dealer.id}
                        onClick={() => handleDealerClick(dealer)}
                        className="cursor-pointer"
                      >
                        {/* Pulse ring */}
                        <circle
                          cx={x}
                          cy={y}
                          r={isSelected ? 20 : 12}
                          fill="#FFCC00"
                          opacity="0.3"
                          className="animate-beacon-pulse"
                          style={{ transformOrigin: `${x}px ${y}px` }}
                        />
                        {/* Beacon dot */}
                        <circle
                          cx={x}
                          cy={y}
                          r={isSelected ? 8 : 6}
                          fill="#FFCC00"
                          stroke="#111111"
                          strokeWidth="2"
                        />
                        {/* Label */}
                        <text
                          x={x}
                          y={y - 15}
                          textAnchor="middle"
                          fill={isSelected ? '#FFCC00' : '#FFFFFF'}
                          fontSize="14"
                          fontFamily="Space Grotesk, sans-serif"
                          fontWeight="bold"
                          className="pointer-events-none"
                        >
                          {dealer.city[lang] || dealer.city.en}
                        </text>
                        {dealer.isHQ && (
                          <text
                            x={x}
                            y={y + 25}
                            textAnchor="middle"
                            fill="#FFCC00"
                            fontSize="9"
                            fontFamily="Space Grotesk, sans-serif"
                            fontWeight="bold"
                            className="pointer-events-none uppercase"
                          >
                            HQ
                          </text>
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* City list below map for mobile */}
              <div className="lg:hidden mt-6 grid grid-cols-2 gap-2">
                {dealers.map((dealer) => (
                  <button
                    key={dealer.id}
                    onClick={() => handleDealerClick(dealer)}
                    className={`px-3 py-2 font-heading font-bold text-xs uppercase tracking-wider transition-colors ${
                      selectedDealer?.id === dealer.id
                        ? 'bg-jac-yellow text-jac-obsidian'
                        : 'bg-jac-obsidian-light text-white/60 border border-jac-obsidian-card'
                    }`}
                  >
                    {dealer.city[lang] || dealer.city.en}
                  </button>
                ))}
              </div>
            </div>

            {/* Split-screen dealer details — takes 2 columns */}
            <div className="lg:col-span-2 bg-jac-obsidian-light border-l-0 lg:border-l-2 border-jac-obsidian-card min-h-[500px]">
              {!selectedDealer ? (
                <div className="h-full flex items-center justify-center p-12 text-center">
                  <div>
                    <MapPin size={48} className="text-jac-yellow mx-auto mb-4 opacity-50" />
                    <p className="text-white/40 font-heading uppercase tracking-widest text-sm">
                      {t('dealers.selectDealer')}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-8 lg:p-10 animate-heavy-lift relative">
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedDealer(null)}
                    className="absolute top-4 end-4 text-white/40 hover:text-jac-yellow transition-colors"
                  >
                    <X size={20} />
                  </button>

                  {/* Dealer header */}
                  <div className="mb-6 pb-6 border-b border-jac-obsidian-card">
                    <div className="flex items-center gap-2 mb-2">
                      {selectedDealer.isHQ && (
                        <span className="bg-jac-yellow text-jac-obsidian font-heading font-bold text-xs uppercase tracking-wider px-2 py-1">
                          HQ
                        </span>
                      )}
                      <span className="text-jac-yellow font-heading text-xs uppercase tracking-widest">
                        {selectedDealer.role[lang] || selectedDealer.role.en}
                      </span>
                    </div>
                    <h2 className="font-heading font-bold text-3xl text-white mb-1">
                      {selectedDealer.city[lang] || selectedDealer.city.en}
                    </h2>
                    <p className="text-white/40 text-sm">
                      {t('dealers.dealerSince')} {selectedDealer.since}
                    </p>
                  </div>

                  {/* Contact info */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-jac-yellow flex-shrink-0 mt-1" />
                      <p className="text-white/70 text-sm">{selectedDealer.address[lang] || selectedDealer.address.en}</p>
                    </div>
                    <a href={`tel:${selectedDealer.phone}`} className="flex items-center gap-3 text-white/70 hover:text-jac-yellow transition-colors text-sm">
                      <Phone size={18} className="text-jac-yellow flex-shrink-0" />
                      {selectedDealer.phone}
                    </a>
                    <a href={`mailto:${selectedDealer.email}`} className="flex items-center gap-3 text-white/70 hover:text-jac-yellow transition-colors text-sm">
                      <Mail size={18} className="text-jac-yellow flex-shrink-0" />
                      {selectedDealer.email}
                    </a>
                    <div className="flex items-start gap-3">
                      <Clock size={18} className="text-jac-yellow flex-shrink-0 mt-1" />
                      <p className="text-white/70 text-sm">{t('dealers.hoursValue')}</p>
                    </div>
                  </div>

                  {/* WhatsApp button */}
                  <a
                    href={`https://wa.me/${selectedDealer.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-heading font-bold uppercase tracking-wider px-6 py-3 text-sm hover:bg-[#1DA851] transition-colors mb-6"
                  >
                    <MessageCircle size={18} />
                    {t('dealers.whatsapp')}
                  </a>

                  {/* Inquiry form */}
                  <div className="pt-6 border-t border-jac-obsidian-card">
                    <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-jac-yellow mb-4">
                      {t('dealers.sendInquiry')}
                    </h3>
                    <form onSubmit={handleFormSubmit} className="space-y-3">
                      <input
                        type="text"
                        placeholder={t('dealers.yourName')}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-jac-obsidian border border-jac-obsidian-card text-white px-4 py-3 text-sm focus:border-jac-yellow focus:outline-none transition-colors"
                        required
                      />
                      <input
                        type="tel"
                        placeholder={t('dealers.yourPhone')}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-jac-obsidian border border-jac-obsidian-card text-white px-4 py-3 text-sm focus:border-jac-yellow focus:outline-none transition-colors"
                        required
                      />
                      <textarea
                        placeholder={t('dealers.inquiryPlaceholder')}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={3}
                        className="w-full bg-jac-obsidian border border-jac-obsidian-card text-white px-4 py-3 text-sm focus:border-jac-yellow focus:outline-none transition-colors resize-none"
                      />
                      <button type="submit" className="btn-jac w-full text-xs">
                        <Send size={14} />
                        {t('dealers.send')}
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Services row */}
          <Reveal className="mt-12">
            <div className="grid grid-cols-3 gap-px bg-jac-obsidian-card">
              {[
                { icon: '🛒', label: t('dealers.sales') },
                { icon: '🔧', label: t('dealers.parts') },
                { icon: '⚙️', label: t('dealers.service') },
              ].map((service, i) => (
                <div key={i} className="bg-jac-obsidian text-white p-6 text-center">
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <div className="font-heading font-bold text-xs uppercase tracking-widest text-jac-yellow">
                    {service.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
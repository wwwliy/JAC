import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import Reveal from '@/components/Reveal';
import SEO from '@/components/SEO';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', subject: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const subjectLabel = inquiryTypes.find((it) => it.value === formData.subject)?.label || formData.subject;
    const text =
      `New Inquiry — JAC Forklift Website\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Company: ${formData.company || '-'}\n` +
      `Subject: ${subjectLabel}\n\n` +
      `Message:\n${formData.message}`;
    const url = `https://wa.me/966551854250?text=${encodeURIComponent(text)}`;
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.open(url, '_blank', 'noopener,noreferrer');
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact JAC Forklift Saudi Arabia",
    "mainEntity": {
      "@type": "Organization",
      "name": "JAC Forklift Saudi Arabia",
      "telephone": "+966-11-472-0000",
      "email": "info@jacforklift-saudi.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "King Fahd Road, Al Qirawan District",
        "addressLocality": "Riyadh",
        "postalCode": "13241",
        "addressCountry": "SA"
      }
    }
  };

  const inquiryTypes = [
    { value: 'sales', label: t('contact.inquirySales') },
    { value: 'service', label: t('contact.inquiryService') },
    { value: 'parts', label: t('contact.inquiryParts') },
    { value: 'partnership', label: t('contact.inquiryPartnership') },
  ];

  return (
    <>
      <SEO
        title="Contact JAC Forklift Saudi Arabia | Sales, Service & Parts Inquiry"
        description="Contact JAC Forklift Saudi Arabia for sales inquiries, service requests, parts orders, and partnership opportunities. Riyadh HQ + Kingdom-wide dealer network."
        keywords="contact JAC forklift Saudi Arabia, forklift sales inquiry KSA, forklift service request Riyadh, JAC parts order Saudi"
        path="/contact"
        schema={contactSchema}
      />

      {/* Header */}
      <section className="bg-jac-obsidian text-white section-padding pt-32">
        <div className="max-w-[1600px] mx-auto">
          <div className="label-industrial mb-4">{t('contact.badge')}</div>
          <h1 className="heading-massive text-white text-4xl md:text-6xl lg:text-7xl mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-white/50 text-lg max-w-2xl">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="bg-jac-steel section-padding">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-px bg-jac-obsidian/10">
          {/* Form — takes 3 columns */}
          <Reveal className="lg:col-span-3 bg-white p-8 lg:p-12 order-2">
            <h2 className="font-heading font-bold text-2xl text-jac-obsidian mb-8">
              {t('contact.formTitle')}
            </h2>

            {submitted && (
              <div className="bg-jac-yellow text-jac-obsidian p-4 mb-6 font-heading font-bold text-sm">
                ✓ {t('contact.successMessage')}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-heading text-xs uppercase tracking-widest text-jac-obsidian/60 mb-2">
                    {t('contact.fieldName')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t('contact.fieldNamePlaceholder')}
                    className="w-full bg-jac-steel border-2 border-transparent border-b-jac-obsidian/20 px-4 py-3 text-sm focus:border-jac-yellow focus:outline-none transition-colors text-jac-obsidian"
                  />
                </div>
                <div>
                  <label className="block font-heading text-xs uppercase tracking-widest text-jac-obsidian/60 mb-2">
                    {t('contact.fieldEmail')} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t('contact.fieldEmailPlaceholder')}
                    className="w-full bg-jac-steel border-2 border-transparent border-b-jac-obsidian/20 px-4 py-3 text-sm focus:border-jac-yellow focus:outline-none transition-colors text-jac-obsidian"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-heading text-xs uppercase tracking-widest text-jac-obsidian/60 mb-2">
                    {t('contact.fieldPhone')} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t('contact.fieldPhonePlaceholder')}
                    className="w-full bg-jac-steel border-2 border-transparent border-b-jac-obsidian/20 px-4 py-3 text-sm focus:border-jac-yellow focus:outline-none transition-colors text-jac-obsidian"
                  />
                </div>
                <div>
                  <label className="block font-heading text-xs uppercase tracking-widest text-jac-obsidian/60 mb-2">
                    {t('contact.fieldCompany')}
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder={t('contact.fieldCompanyPlaceholder')}
                    className="w-full bg-jac-steel border-2 border-transparent border-b-jac-obsidian/20 px-4 py-3 text-sm focus:border-jac-yellow focus:outline-none transition-colors text-jac-obsidian"
                  />
                </div>
              </div>

              <div>
                <label className="block font-heading text-xs uppercase tracking-widest text-jac-obsidian/60 mb-2">
                  {t('contact.fieldSubject')}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {inquiryTypes.map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, subject: type.value })}
                      className={`px-3 py-2.5 font-heading font-bold text-xs uppercase tracking-wider transition-colors ${
                        formData.subject === type.value
                          ? 'bg-jac-yellow text-jac-obsidian'
                          : 'bg-jac-steel-dark text-jac-obsidian/60 hover:bg-jac-steel'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-heading text-xs uppercase tracking-widest text-jac-obsidian/60 mb-2">
                  {t('contact.fieldMessage')} *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t('contact.fieldMessagePlaceholder')}
                  className="w-full bg-jac-steel border-2 border-transparent border-b-jac-obsidian/20 px-4 py-3 text-sm focus:border-jac-yellow focus:outline-none transition-colors text-jac-obsidian resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn-jac w-full sm:w-auto disabled:opacity-50"
              >
                {submitting ? t('contact.submitting') : t('contact.submit')}
                {!submitting && <Send size={16} className="rtl:rotate-180" />}
              </button>
            </form>
          </Reveal>

          {/* Contact info — takes 2 columns */}
          <Reveal delay={100} className="lg:col-span-2 bg-jac-obsidian p-8 lg:p-12 text-white order-1">
            <div className="space-y-8">
              {/* HQ */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <MapPin size={20} className="text-jac-yellow" />
                  <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-jac-yellow">
                    {t('contact.hqTitle')}
                  </h3>
                </div>
                <p className="text-white/60 text-sm whitespace-pre-line leading-relaxed">
                  {t('contact.hqAddress')}
                </p>
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Phone size={20} className="text-jac-yellow" />
                  <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-jac-yellow">
                    {t('contact.phoneTitle')}
                  </h3>
                </div>
                <a href={`tel:${t('contact.phoneValue')}`} className="text-white/60 hover:text-jac-yellow transition-colors text-lg font-heading">
                  {t('contact.phoneValue')}
                </a>
              </div>

              {/* Email */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Mail size={20} className="text-jac-yellow" />
                  <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-jac-yellow">
                    {t('contact.emailTitle')}
                  </h3>
                </div>
                <a href={`mailto:${t('contact.emailValue')}`} className="text-white/60 hover:text-jac-yellow transition-colors text-sm break-all">
                  {t('contact.emailValue')}
                </a>
              </div>

              {/* WhatsApp */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle size={20} className="text-jac-yellow" />
                  <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-jac-yellow">
                    {t('contact.whatsappTitle')}
                  </h3>
                </div>
                <a
                  href={`https://wa.me/${t('contact.whatsappValue').replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white font-heading font-bold text-sm uppercase tracking-wider px-5 py-2.5 hover:bg-[#1DA851] transition-colors"
                >
                  <MessageCircle size={16} />
                  {t('contact.whatsappValue')}
                </a>
              </div>

              {/* Hours */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={20} className="text-jac-yellow" />
                  <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-jac-yellow">
                    {t('contact.hoursTitle')}
                  </h3>
                </div>
                <p className="text-white/60 text-sm whitespace-pre-line leading-relaxed">
                  {t('contact.hoursValue')}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
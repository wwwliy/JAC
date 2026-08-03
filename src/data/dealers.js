// Saudi Arabia dealer network data
// Three locations: Riyadh HQ + Dammam & Jeddah authorized distributors
// Positioning approximated for SVG map placement (percentage based on 1000x600 viewBox)

export const dealers = [
  {
    id: 'riyadh',
    city: { en: 'Riyadh', ar: 'الرياض', zh: '利雅得' },
    role: { en: 'Headquarters', ar: 'المقر الرئيسي', zh: '总部' },
    x: 56,
    y: 50,
    address: {
      en: 'King Fahd Road, Al Qirawan District, Riyadh 13241, KSA',
      ar: 'طريق الملك فهد، حي القيروان، الرياض 13241، المملكة العربية السعودية',
      zh: '法赫德国王路，基尔万区，利雅得 13241，沙特阿拉伯',
    },
    phone: '+966 11 472 0000',
    whatsapp: '+966 55 185 4250',
    email: 'riyadh@jacforklift-saudi.com',
    since: '2018',
    isHQ: true,
  },
  {
    id: 'jeddah',
    city: { en: 'Jeddah', ar: 'جدة', zh: '吉达' },
    role: { en: 'Authorized Distributor', ar: 'موزّع معتمد', zh: '授权经销商' },
    x: 29,
    y: 63,
    address: {
      en: 'Madinah Road, Al Sharafiyah District, Jeddah, KSA',
      ar: 'طريق المدينة، حي الشرفية، جدة، المملكة العربية السعودية',
      zh: '麦地那路，沙尔菲亚区，吉达，沙特阿拉伯',
    },
    phone: '+966 12 673 0000',
    whatsapp: '+966 55 185 4250',
    email: 'jeddah@jacforklift-saudi.com',
    since: '2019',
  },
  {
    id: 'dammam',
    city: { en: 'Dammam', ar: 'الدمام', zh: '达曼' },
    role: { en: 'Authorized Distributor', ar: 'موزّع معتمد', zh: '授权经销商' },
    x: 68,
    y: 43,
    address: {
      en: 'King Saud Road, Al Adamah District, Dammam, KSA',
      ar: 'طريق الملك سعود، حي الأدامة، الدمام، المملكة العربية السعودية',
      zh: '沙特国王路，阿达玛区，达曼，沙特阿拉伯',
    },
    phone: '+966 13 814 0000',
    whatsapp: '+966 55 185 4250',
    email: 'dammam@jacforklift-saudi.com',
    since: '2019',
  },
];
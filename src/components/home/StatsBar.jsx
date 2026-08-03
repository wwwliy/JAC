import { useLanguage } from '@/i18n/LanguageContext';
import Reveal from '@/components/Reveal';

export default function StatsBar() {
  const { t } = useLanguage();

  const stats = [
  { value: t('home.stat1Value'), label: t('home.stat1Label') },
  { value: t('home.stat2Value'), label: t('home.stat2Label') },
  { value: t('home.stat3Value'), label: t('home.stat3Label') },
  { value: t('home.stat4Value'), label: t('home.stat4Label') }];


  return null;































}
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Reusable scroll-reveal wrapper that triggers the "heavy-lift" animation
export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const { ref, visible } = useScrollReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
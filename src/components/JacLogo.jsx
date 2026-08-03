import { image } from '@/lib/assets';

export default function JacLogo({ height = 36, className = '' }) {
  return (
    <img
      src={image('3884c4ab2_jac.png')}
      alt="JAC"
      className={className}
      style={{ height: `${height}px`, width: 'auto' }}
    />
  );
}

import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="flex items-center">
        <CrownIcon className="text-gold-primary w-8 h-8 mr-2" />
        <div>
          <div className="text-xs text-gold-primary font-medium leading-tight">Fashion By</div>
          <div className="text-xl font-bold text-gold-primary leading-tight tracking-wide font-[family-name:var(--font-playfair)]">KYLIE</div>
        </div>
      </div>
    </Link>
  );
}

function CrownIcon({ className = '' }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 14c-2.76 0-5-2.24-5-5h10c0 2.76-2.24 5-5 5z" />
    </svg>
  );
}
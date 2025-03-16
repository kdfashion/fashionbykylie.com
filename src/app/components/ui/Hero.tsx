import Image from 'next/image';
import Button from './Button';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc: string;
  imageAlt: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  imageSrc,
  imageAlt,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-soft-black text-cream">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-soft-black/80 to-soft-black/40" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
            {title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-cream/90 font-[family-name:var(--font-montserrat)]">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href={ctaLink} size="lg">
              {ctaText}
            </Button>
            {secondaryCtaText && secondaryCtaLink && (
              <Button href={secondaryCtaLink} variant="outline" size="lg">
                {secondaryCtaText}
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Decorative Gold Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-primary" />
    </section>
  );
}
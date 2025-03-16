import Image from 'next/image';
import Button from './Button';

interface BrandStoryProps {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function BrandStory({
  title,
  content,
  imageSrc,
  imageAlt,
  ctaText,
  ctaLink,
}: BrandStoryProps) {
  return (
    <section className="py-16 bg-soft-black text-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative aspect-square lg:aspect-auto lg:h-full overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            {/* Gold Frame */}
            <div className="absolute inset-0 border-8 border-gold-primary opacity-30" />
          </div>
          
          {/* Content Column */}
          <div className="lg:pl-8">
            <div className="flex items-center mb-6">
              <div className="h-px bg-gold-primary flex-grow mr-4" />
              <span className="text-gold-primary uppercase tracking-widest text-sm font-medium">Our Story</span>
              <div className="h-px bg-gold-primary flex-grow ml-4" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
              {title}
            </h2>
            
            <div className="prose prose-invert prose-gold mb-8 font-[family-name:var(--font-montserrat)]">
              <p className="text-cream/90 leading-relaxed">
                {content}
              </p>
            </div>
            
            {ctaText && ctaLink && (
              <Button href={ctaLink} variant="outline">
                {ctaText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
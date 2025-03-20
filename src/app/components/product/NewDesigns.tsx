import Image from 'next/image';
import Button from '../ui/Button';

interface NewDesignsProps {
  title: string;
  subtitle: string;
  birthdayMessage: string;
  ctaText: string;
  ctaLink: string;
}

export default function NewDesigns({
  title,
  subtitle,
  birthdayMessage,
  ctaText,
  ctaLink,
}: NewDesignsProps) {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        {/* Birthday Message */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gold-primary text-soft-black px-6 py-4 rounded-md transform -rotate-2">
            <p className="text-xl md:text-2xl font-bold font-[family-name:var(--font-playfair)]">
              {birthdayMessage}
            </p>
          </div>
        </div>
        
        {/* New Designs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* First Design */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-md group">
            <Image
              src="/fashion1.jpeg"
              alt="New royal design"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-soft-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
              <div className="p-6 w-full">
                <div className="bg-gold-primary text-soft-black inline-block px-3 py-1 mb-2 text-sm font-bold">
                  NEW DESIGN
                </div>
                <h3 className="text-cream text-xl font-bold mb-2">Royal Elegance Collection</h3>
                <p className="text-cream/80">Exclusive birthday release</p>
              </div>
            </div>
          </div>
          
          {/* Second Design */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-md group">
            <Image
              src="/fashion2.jpeg"
              alt="New modern royal design"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-soft-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
              <div className="p-6 w-full">
                <div className="bg-gold-primary text-soft-black inline-block px-3 py-1 mb-2 text-sm font-bold">
                  NEW DESIGN
                </div>
                <h3 className="text-cream text-xl font-bold mb-2">Modern Majesty Collection</h3>
                <p className="text-cream/80">Anniversary special edition</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button href={ctaLink} size="lg">
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}
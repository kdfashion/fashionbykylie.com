import Image from 'next/image';
import Link from 'next/link';

interface Category {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  link: string;
}

interface CategoryShowcaseProps {
  title: string;
  subtitle?: string;
  categories: Category[];
}

export default function CategoryShowcase({
  title,
  subtitle,
  categories,
}: CategoryShowcaseProps) {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={category.link}
      className="group block relative overflow-hidden aspect-square royal-card hover:shadow-lg transition-shadow"
    >
      {/* Category Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src={category.imageSrc}
            alt={category.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-soft-black/70 via-transparent to-transparent" />
      </div>
      
      {/* Category Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-cream">
        <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-playfair)]">
          {category.name}
        </h3>
        <p className="text-sm text-cream/80 mb-4">
          {category.description}
        </p>
        <span className="inline-flex items-center text-gold-primary font-medium group-hover:underline">
          Explore Collection
          <ArrowRightIcon className="ml-2 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
      
      {/* Gold Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gold-primary" />
    </Link>
  );
}

function ArrowRightIcon({ className = '' }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}
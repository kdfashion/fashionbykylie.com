import ProductCard from './ProductCard';
import Button from '../ui/Button';

interface Product {
  id: string;
  name: string;
  price: number;
  imageSrc: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  salePrice?: number;
}

interface FeaturedProductsProps {
  title: string;
  subtitle?: string;
  products: Product[];
  viewAllLink?: string;
}

export default function FeaturedProducts({
  title,
  subtitle,
  products,
  viewAllLink,
}: FeaturedProductsProps) {
  return (
    <section className="py-16 bg-background">
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
        
        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              imageSrc={product.imageSrc}
              category={product.category}
              isNew={product.isNew}
              isSale={product.isSale}
              salePrice={product.salePrice}
            />
          ))}
        </div>
        
        {/* View All Button */}
        {viewAllLink && (
          <div className="text-center mt-12">
            <Button href={viewAllLink} variant="outline">
              View All Collection
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
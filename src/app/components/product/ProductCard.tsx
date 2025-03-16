import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageSrc: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  salePrice?: number;
}

export default function ProductCard({
  id,
  name,
  price,
  imageSrc,
  category,
  isNew = false,
  isSale = false,
  salePrice,
}: ProductCardProps) {
  // Format price with currency
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="group">
      {/* Product Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-muted">
        {/* Product Image */}
        <Link href={`/products/${id}`} className="block relative w-full h-full">
          <Image
            src={imageSrc}
            alt={name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        
        {/* Product Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {isNew && (
            <span className="bg-gold-primary text-soft-black text-xs font-bold px-2 py-1">
              NEW
            </span>
          )}
          {isSale && (
            <span className="bg-ruby text-cream text-xs font-bold px-2 py-1">
              SALE
            </span>
          )}
        </div>
        
        {/* Quick Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-soft-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex justify-center gap-2">
            <button 
              className="bg-cream text-soft-black p-2 rounded-full hover:bg-gold-primary transition-colors"
              aria-label="Add to wishlist"
            >
              <HeartIcon />
            </button>
            <button 
              className="bg-cream text-soft-black p-2 rounded-full hover:bg-gold-primary transition-colors"
              aria-label="Quick view"
            >
              <EyeIcon />
            </button>
            <button 
              className="bg-cream text-soft-black p-2 rounded-full hover:bg-gold-primary transition-colors"
              aria-label="Add to cart"
            >
              <CartIcon />
            </button>
          </div>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="space-y-1">
        <div className="text-sm text-muted-foreground">{category}</div>
        <h3 className="font-medium">
          <Link href={`/products/${id}`} className="hover:text-primary transition-colors">
            {name}
          </Link>
        </h3>
        <div className="flex items-center gap-2">
          {isSale && salePrice ? (
            <>
              <span className="font-bold text-ruby">{formatPrice(salePrice)}</span>
              <span className="text-muted-foreground line-through">{formatPrice(price)}</span>
            </>
          ) : (
            <span className="font-bold">{formatPrice(price)}</span>
          )}
        </div>
      </div>
    </div>
  );
}

// Icon Components
function HeartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );
}

function CartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
  );
}
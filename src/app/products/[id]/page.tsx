import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { featuredProducts } from '../../lib/sample-data';

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const productId = params.id;
  const product = featuredProducts.find(p => p.id === productId);
  
  if (!product) {
    return {
      title: 'Product Not Found | Fashion By Kylie',
      description: 'The requested product could not be found.',
    };
  }
  
  return {
    title: `${product.name} | Fashion By Kylie`,
    description: `Shop the ${product.name} from our premium collection of women&apos;s clothing that blends regal sophistication with contemporary style.`,
  };
}

export default function ProductPage({ params }: { params: { id: string } }): React.ReactNode {
  const productId = params.id;
  const product = featuredProducts.find(p => p.id === productId);
  
  if (!product) {
    notFound();
  }
  
  // Format price with currency
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };
  
  // Generate random related products (excluding current product)
  const relatedProducts = featuredProducts
    .filter(p => p.id !== productId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);
  
  return (
    <div className="bg-background">
      {/* Product Detail Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <nav className="flex text-sm">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <span className="mx-2 text-muted-foreground">/</span>
              <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                Products
              </Link>
              <span className="mx-2 text-muted-foreground">/</span>
              <Link href={`/products/${product.category.toLowerCase()}`} className="text-muted-foreground hover:text-foreground transition-colors">
                {product.category}
              </Link>
              <span className="mx-2 text-muted-foreground">/</span>
              <span className="text-foreground">{product.name}</span>
            </nav>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square relative overflow-hidden bg-muted">
                <div className="relative w-full h-full">
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority
                  />
                </div>
                
                {/* Product Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-gold-primary text-soft-black text-xs font-bold px-3 py-1">
                      NEW
                    </span>
                  )}
                  {product.isSale && (
                    <span className="bg-ruby text-cream text-xs font-bold px-3 py-1">
                      SALE
                    </span>
                  )}
                </div>
              </div>
              
              {/* Thumbnail Images - In a real app, these would be different angles */}
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <button key={i} className="aspect-square relative overflow-hidden bg-muted border-2 border-transparent hover:border-gold-primary transition-colors">
                    <div className="relative w-full h-full">
                      <Image
                        src={product.imageSrc}
                        alt={`${product.name} view ${i}`}
                        fill
                        className="object-cover"
                        sizes="25vw"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold mb-2 font-[family-name:var(--font-playfair)]">
                  {product.name}
                </h1>
                <div className="text-sm text-muted-foreground mb-4">{product.category}</div>
                
                <div className="flex items-center gap-2 mb-6">
                  {product.isSale && product.salePrice ? (
                    <>
                      <span className="text-2xl font-bold text-ruby">{formatPrice(product.salePrice)}</span>
                      <span className="text-lg text-muted-foreground line-through">{formatPrice(product.price)}</span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold">{formatPrice(product.price)}</span>
                  )}
                </div>
                
                <div className="prose max-w-none mb-8">
                  <p>
                    Experience royal elegance with our {product.name}. This premium piece combines classical royal elements with contemporary design, making it a perfect addition to your wardrobe.
                  </p>
                  <p>
                    Crafted with meticulous attention to detail and made from high-quality materials, this {product.category.toLowerCase()} ensures both comfort and style for any occasion.
                  </p>
                </div>
              </div>
              
              {/* Product Options */}
              <div className="space-y-6 mb-8">
                {/* Size Selection */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Size
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                      <button
                        key={size}
                        className="w-12 h-12 border border-border hover:border-gold-primary focus:border-gold-primary focus:outline-none transition-colors flex items-center justify-center font-medium"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <div className="mt-2">
                    <button className="text-sm text-gold-primary hover:underline flex items-center gap-1">
                      <RulerIcon />
                      Size Guide
                    </button>
                  </div>
                </div>
                
                {/* Color Selection */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Color
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: 'Black', color: '#000000' },
                      { name: 'White', color: '#FFFFFF' },
                      { name: 'Gold', color: '#D4AF37' },
                      { name: 'Navy', color: '#0A1E3C' },
                    ].map((colorOption) => (
                      <button
                        key={colorOption.name}
                        className="w-12 h-12 border border-border hover:border-gold-primary focus:border-gold-primary focus:outline-none transition-colors rounded-full overflow-hidden"
                        title={colorOption.name}
                      >
                        <span 
                          className="block w-full h-full" 
                          style={{ backgroundColor: colorOption.color }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Quantity */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center border border-border w-32">
                    <button className="w-10 h-10 flex items-center justify-center hover:bg-muted transition-colors">
                      <MinusIcon />
                    </button>
                    <input
                      type="number"
                      min="1"
                      value="1"
                      readOnly
                      className="w-12 h-10 text-center border-x border-border focus:outline-none"
                    />
                    <button className="w-10 h-10 flex items-center justify-center hover:bg-muted transition-colors">
                      <PlusIcon />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-gold-primary text-soft-black px-6 py-3 font-medium hover:bg-gold-dark transition-colors flex-1">
                  Add to Cart
                </button>
                <button className="border border-gold-primary text-gold-primary px-6 py-3 font-medium hover:bg-gold-primary hover:text-soft-black transition-colors">
                  Add to Wishlist
                </button>
              </div>
              
              {/* Product Details */}
              <div className="border-t border-border pt-6 space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Product Details</h3>
                  <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                    <li>Premium quality materials</li>
                    <li>Designed for comfort and elegance</li>
                    <li>Unique royal-inspired design elements</li>
                    <li>Made with sustainable practices</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Shipping & Returns</h3>
                  <p className="text-sm text-muted-foreground">
                    Free shipping on orders over $100. Easy returns within 30 days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 font-[family-name:var(--font-playfair)] text-center">
            You May Also Like
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="group">
                <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-muted">
                  <Link href={`/products/${relatedProduct.id}`} className="block relative w-full h-full">
                    <Image
                      src={relatedProduct.imageSrc}
                      alt={relatedProduct.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  
                  {/* Product Badges */}
                  <div className="absolute top-2 left-2 flex flex-col gap-2">
                    {relatedProduct.isNew && (
                      <span className="bg-gold-primary text-soft-black text-xs font-bold px-2 py-1">
                        NEW
                      </span>
                    )}
                    {relatedProduct.isSale && (
                      <span className="bg-ruby text-cream text-xs font-bold px-2 py-1">
                        SALE
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">{relatedProduct.category}</div>
                  <h3 className="font-medium">
                    <Link href={`/products/${relatedProduct.id}`} className="hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </Link>
                  </h3>
                  <div className="flex items-center gap-2">
                    {relatedProduct.isSale && relatedProduct.salePrice ? (
                      <>
                        <span className="font-bold text-ruby">{formatPrice(relatedProduct.salePrice)}</span>
                        <span className="text-muted-foreground line-through">{formatPrice(relatedProduct.price)}</span>
                      </>
                    ) : (
                      <span className="font-bold">{formatPrice(relatedProduct.price)}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Icon Components
function RulerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.3 8.7 8.7 21.3c-1 1-2.5 1-3.4 0l-2.6-2.6c-1-1-1-2.5 0-3.4L15.3 2.7c1-1 2.5-1 3.4 0l2.6 2.6c1 1 1 2.5 0 3.4Z"></path>
      <path d="m7.5 10.5 2 2"></path>
      <path d="m10.5 7.5 2 2"></path>
      <path d="m13.5 4.5 2 2"></path>
      <path d="m4.5 13.5 2 2"></path>
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"></path>
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"></path>
      <path d="M12 5v14"></path>
    </svg>
  );
}
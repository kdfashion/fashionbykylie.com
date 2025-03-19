import React from 'react';
import { Metadata } from 'next';
import { featuredProducts } from '../lib/sample-data';
import ProductCard from '../components/product/ProductCard';

export const metadata: Metadata = {
  title: 'All Products | Fashion By Kylie',
  description: 'Browse our collection of premium women\'s clothing that blends regal sophistication with contemporary style.',
};

export default function ProductsPage(): React.ReactNode {
  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
            Our Collection
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collection of premium women&apos;s clothing that blends regal sophistication with contemporary style.
          </p>
        </div>
        
        {/* Filters - To be implemented */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <button className="px-4 py-2 border border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-soft-black transition-colors rounded-md">
            All Products
          </button>
          <button className="px-4 py-2 border border-border hover:border-gold-primary transition-colors rounded-md">
            New Arrivals
          </button>
          <button className="px-4 py-2 border border-border hover:border-gold-primary transition-colors rounded-md">
            Sale
          </button>
          <button className="px-4 py-2 border border-border hover:border-gold-primary transition-colors rounded-md">
            Bestsellers
          </button>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
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
      </div>
    </div>
  );
}
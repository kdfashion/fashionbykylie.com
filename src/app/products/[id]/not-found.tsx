import React from 'react';
import Link from 'next/link';

export default function ProductNotFound(): React.ReactNode {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-background">
      <div className="text-center max-w-md px-4">
        <h1 className="text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
          Product Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          We couldn&apos;t find the product you&apos;re looking for. It may have been removed or the URL might be incorrect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/products" 
            className="bg-gold-primary text-soft-black px-6 py-3 font-medium hover:bg-gold-dark transition-colors"
          >
            Browse Products
          </Link>
          <Link 
            href="/" 
            className="border border-gold-primary text-gold-primary px-6 py-3 font-medium hover:bg-gold-primary hover:text-soft-black transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
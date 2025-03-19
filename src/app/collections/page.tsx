import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { categories } from '../lib/sample-data';

export const metadata: Metadata = {
  title: 'Collections | Fashion By Kylie',
  description: 'Explore our curated collections of premium women\'s clothing that blends regal sophistication with contemporary style.',
};

export default function CollectionsPage(): React.ReactNode {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-soft-black text-cream overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070"
              alt="Fashion By Kylie Collections"
              fill
              priority
              className="object-cover opacity-40"
              sizes="100vw"
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
              Our Collections
            </h1>
            <p className="text-lg md:text-xl mb-8 text-cream/90 font-[family-name:var(--font-montserrat)]">
              Explore our curated categories of premium women&apos;s clothing
            </p>
          </div>
        </div>
      </section>
      
      {/* Collections Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CollectionCard
                key={category.id}
                category={category}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Collection */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
              Royal Elegance Collection
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our signature collection featuring premium pieces inspired by royal fashion throughout history
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="aspect-[3/4] relative overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000"
                  alt="Royal Elegance Collection"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
                Timeless Elegance
              </h3>
              <p className="mb-6">
                Our Royal Elegance collection features premium pieces that blend historical royal fashion elements with contemporary design. Each garment is crafted with meticulous attention to detail and made from the finest materials.
              </p>
              <p className="mb-8">
                From flowing dresses to structured blazers, this collection offers versatile pieces that make you feel like royalty in your everyday life.
              </p>
              <Link 
                href="/products" 
                className="self-start bg-gold-primary text-soft-black px-6 py-3 font-medium hover:bg-gold-dark transition-colors"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Seasonal Collection */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
              Spring/Summer 2025
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our latest seasonal collection featuring fresh colors and lightweight fabrics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="aspect-square relative overflow-hidden group">
              <div className="relative w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000"
                  alt="Spring/Summer Collection"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-soft-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 text-cream">
                  <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)]">Pastel Dreams</h3>
                  <p className="text-sm">Soft colors for spring days</p>
                </div>
              </div>
            </div>
            
            <div className="aspect-square relative overflow-hidden group">
              <div className="relative w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000"
                  alt="Spring/Summer Collection"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-soft-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 text-cream">
                  <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)]">Summer Breeze</h3>
                  <p className="text-sm">Lightweight fabrics for warm days</p>
                </div>
              </div>
            </div>
            
            <div className="aspect-square relative overflow-hidden group">
              <div className="relative w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1566206091558-7f218b696731?q=80&w=1000"
                  alt="Spring/Summer Collection"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-soft-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 text-cream">
                  <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)]">Evening Elegance</h3>
                  <p className="text-sm">Statement pieces for special occasions</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/products" 
              className="inline-block bg-gold-primary text-soft-black px-6 py-3 font-medium hover:bg-gold-dark transition-colors"
            >
              Shop Spring/Summer Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

interface Category {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  link: string;
}

function CollectionCard({ category }: { category: Category }) {
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
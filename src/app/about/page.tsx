import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { brandStoryContent } from '../lib/sample-data';

export const metadata: Metadata = {
  title: 'About Us | Fashion By Kylie',
  description: 'Learn about Fashion By Kylie, our mission, and our passion for blending royal elegance with modern fashion.',
};

export default function AboutPage(): React.ReactNode {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-soft-black text-cream overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src={brandStoryContent.imageSrc}
              alt="Fashion By Kylie brand story"
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
              Our Story
            </h1>
            <p className="text-lg md:text-xl mb-8 text-cream/90 font-[family-name:var(--font-montserrat)]">
              Reimagining royal elegance for the modern era
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 font-[family-name:var(--font-playfair)]">
              Our Mission
            </h2>
            <p className="mb-6 text-lg">
              Fashion By Kylie was born from a passion for blending classical royal elements with avant-garde fashion. Our founder, Kylie Davis, drew inspiration from historical royal wardrobes and reimagined them for the modern woman.
            </p>
            <p className="mb-6 text-lg">
              Each piece in our collection is designed to make you feel like royalty in your everyday life, with meticulous attention to detail, premium materials, and timeless silhouettes that command attention. We believe that every woman deserves to experience the confidence and grace that comes with truly exceptional clothing.
            </p>
            
            <div className="my-12 border-l-4 border-gold-primary pl-6 py-2">
              <blockquote className="text-xl italic">
                &quot;Fashion is not just about clothes; it&apos;s about how you carry yourself, how you feel, and the confidence that comes from knowing you look exceptional.&quot;
              </blockquote>
              <p className="mt-4 font-medium">— Kylie Davis, Founder</p>
            </div>
            
            <h2 className="text-3xl font-bold mb-8 font-[family-name:var(--font-playfair)]">
              Our Values
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="royal-card p-6">
                <h3 className="text-xl font-bold mb-3 text-gold-primary">Quality</h3>
                <p>We use only the finest materials and craftsmanship to ensure each piece meets our exacting standards.</p>
              </div>
              
              <div className="royal-card p-6">
                <h3 className="text-xl font-bold mb-3 text-gold-primary">Elegance</h3>
                <p>We believe in timeless design that transcends trends while incorporating modern elements.</p>
              </div>
              
              <div className="royal-card p-6">
                <h3 className="text-xl font-bold mb-3 text-gold-primary">Empowerment</h3>
                <p>Our clothing is designed to make women feel confident, powerful, and ready to conquer their world.</p>
              </div>
              
              <div className="royal-card p-6">
                <h3 className="text-xl font-bold mb-3 text-gold-primary">Sustainability</h3>
                <p>We&apos;re committed to ethical production practices and reducing our environmental footprint.</p>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-8 font-[family-name:var(--font-playfair)]">
              Our Team
            </h2>
            <p className="mb-12 text-lg">
              Behind Fashion By Kylie is a dedicated team of designers, craftspeople, and fashion enthusiasts who share a passion for creating exceptional clothing. From our design studio to our customer service team, everyone at Fashion By Kylie is committed to delivering an experience that makes you feel like royalty.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
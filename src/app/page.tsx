import Hero from './components/ui/Hero';
import FeaturedProducts from './components/product/FeaturedProducts';
import CategoryShowcase from './components/product/CategoryShowcase';
import BrandStory from './components/ui/BrandStory';
import Newsletter from './components/ui/Newsletter';
import NewDesigns from './components/product/NewDesigns';
import {
  featuredProducts,
  newArrivals,
  categories,
  heroContent,
  brandStoryContent,
  newDesignsContent
} from './lib/sample-data';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title={heroContent.title}
        subtitle={heroContent.subtitle}
        ctaText={heroContent.ctaText}
        ctaLink={heroContent.ctaLink}
        secondaryCtaText={heroContent.secondaryCtaText}
        secondaryCtaLink={heroContent.secondaryCtaLink}
        imageSrc={heroContent.imageSrc}
        imageAlt={heroContent.imageAlt}
      />
      
      {/* Birthday New Designs Section */}
      <NewDesigns
        title={newDesignsContent.title}
        subtitle={newDesignsContent.subtitle}
        birthdayMessage={newDesignsContent.birthdayMessage}
        ctaText={newDesignsContent.ctaText}
        ctaLink={newDesignsContent.ctaLink}
      />
      
      {/* New Arrivals Section */}
      <FeaturedProducts
        title="New Arrivals"
        subtitle="The latest additions to our royal collection"
        products={newArrivals}
        viewAllLink="/products/new-arrivals"
      />
      
      {/* Category Showcase */}
      <CategoryShowcase
        title="Explore Our Collections"
        subtitle="Discover premium pieces across our curated categories"
        categories={categories.slice(0, 3)}
      />
      
      {/* Featured Products */}
      <FeaturedProducts
        title="Royal Favorites"
        subtitle="Our most coveted pieces, fit for modern royalty"
        products={featuredProducts}
        viewAllLink="/products"
      />
      
      {/* Brand Story */}
      <BrandStory
        title={brandStoryContent.title}
        content={brandStoryContent.content}
        imageSrc={brandStoryContent.imageSrc}
        imageAlt={brandStoryContent.imageAlt}
        ctaText={brandStoryContent.ctaText}
        ctaLink={brandStoryContent.ctaLink}
      />
      
      {/* Newsletter */}
      <Newsletter />
    </>
  );
}

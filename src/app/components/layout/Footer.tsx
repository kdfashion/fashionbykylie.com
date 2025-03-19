'use client';

import Link from 'next/link';
import Logo from '../ui/Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-soft-black text-cream pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm max-w-xs">
              Reimagining royal elegance for the modern era. Premium women&apos;s clothing that blends regal sophistication with contemporary style.
            </p>
            <div className="flex space-x-4 pt-2">
              <SocialLink href="https://instagram.com" label="Instagram">
                <InstagramIcon />
              </SocialLink>
              <SocialLink href="https://facebook.com" label="Facebook">
                <FacebookIcon />
              </SocialLink>
              <SocialLink href="https://pinterest.com" label="Pinterest">
                <PinterestIcon />
              </SocialLink>
              <SocialLink href="https://twitter.com" label="Twitter">
                <TwitterIcon />
              </SocialLink>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-gold-primary font-bold mb-4 font-[family-name:var(--font-montserrat)]">Shop</h4>
            <ul className="space-y-2">
              <FooterLink href="/products/new-arrivals">New Arrivals</FooterLink>
              <FooterLink href="/products/bestsellers">Bestsellers</FooterLink>
              <FooterLink href="/products/dresses">Dresses</FooterLink>
              <FooterLink href="/products/tops">Tops</FooterLink>
              <FooterLink href="/products/bottoms">Bottoms</FooterLink>
              <FooterLink href="/products/accessories">Accessories</FooterLink>
              <FooterLink href="/products/sale">Sale</FooterLink>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-gold-primary font-bold mb-4 font-[family-name:var(--font-montserrat)]">Company</h4>
            <ul className="space-y-2">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/about/our-story">Our Story</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/press">Press</FooterLink>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div>
            <h4 className="text-gold-primary font-bold mb-4 font-[family-name:var(--font-montserrat)]">Customer Service</h4>
            <ul className="space-y-2">
              <FooterLink href="/help">Help Center</FooterLink>
              <FooterLink href="/shipping">Shipping Information</FooterLink>
              <FooterLink href="/returns">Returns & Exchanges</FooterLink>
              <FooterLink href="/size-guide">Size Guide</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-charcoal pt-8 pb-12">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-gold-primary font-bold mb-2 font-[family-name:var(--font-playfair)]">
              Join Our Royal Court
            </h4>
            <p className="text-sm mb-4">
              Subscribe to receive exclusive offers, early access to new collections, and royal treatment.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 bg-charcoal border border-gold-primary focus:outline-none focus:ring-2 focus:ring-gold-light"
                required
              />
              <button
                type="submit"
                className="bg-gold-primary text-soft-black px-4 py-2 font-medium hover:bg-gold-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-charcoal pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="mb-4 md:mb-0">
            © {currentYear} KD Fashion LLC. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <button 
              className="hover:text-cream transition-colors"
              onClick={() => {
                // Open Terms of Service modal
                console.log('Open Terms of Service modal');
              }}
            >
              Terms of Service
            </button>
            <button 
              className="hover:text-cream transition-colors"
              onClick={() => {
                // Open Privacy Policy modal
                console.log('Open Privacy Policy modal');
              }}
            >
              Privacy Policy
            </button>
            <Link href="/sitemap" className="hover:text-cream transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper Components
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-muted-foreground hover:text-cream transition-colors text-sm"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-muted-foreground hover:text-gold-primary transition-colors"
    >
      {children}
    </a>
  );
}

// Social Media Icons
function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
      <path d="M12 4v4"></path>
      <path d="M12 12v8"></path>
      <path d="M4 12h8"></path>
      <path d="M12 12h8"></path>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
  );
}
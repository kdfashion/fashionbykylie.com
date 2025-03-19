import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact Us | Fashion By Kylie',
  description: 'Get in touch with Fashion By Kylie for inquiries, customer service, or collaboration opportunities.',
};

export default function ContactPage(): React.ReactNode {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-soft-black text-cream overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070"
              alt="Contact Fashion By Kylie"
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
              Contact Us
            </h1>
            <p className="text-lg md:text-xl mb-8 text-cream/90 font-[family-name:var(--font-montserrat)]">
              We&apos;d love to hear from you
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 font-[family-name:var(--font-playfair)]">
                Get In Touch
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gold-primary">Customer Service</h3>
                  <p className="mb-2">For order inquiries, returns, and general questions:</p>
                  <p className="flex items-center gap-2">
                    <EmailIcon />
                    <span>support@fashionbykylie.com</span>
                  </p>
                  <p className="flex items-center gap-2 mt-1">
                    <PhoneIcon />
                    <span>+1 (800) 555-0123</span>
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gold-primary">Business Inquiries</h3>
                  <p className="mb-2">For partnerships, press, and business opportunities:</p>
                  <p className="flex items-center gap-2">
                    <EmailIcon />
                    <span>business@fashionbykylie.com</span>
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gold-primary">Visit Our Office</h3>
                  <p className="mb-2">KD Fashion LLC</p>
                  <p className="flex items-center gap-2">
                    <LocationIcon />
                    <span>123 Royal Avenue, Suite 500<br />New York, NY 10001</span>
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gold-primary">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gold-primary text-soft-black rounded-full hover:bg-gold-dark transition-colors">
                      <InstagramIcon />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gold-primary text-soft-black rounded-full hover:bg-gold-dark transition-colors">
                      <FacebookIcon />
                    </a>
                    <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gold-primary text-soft-black rounded-full hover:bg-gold-dark transition-colors">
                      <PinterestIcon />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gold-primary text-soft-black rounded-full hover:bg-gold-dark transition-colors">
                      <TwitterIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 font-[family-name:var(--font-playfair)]">
                Send Us a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block mb-2 font-medium">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-border focus:border-gold-primary focus:outline-none focus:ring-1 focus:ring-gold-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block mb-2 font-medium">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-border focus:border-gold-primary focus:outline-none focus:ring-1 focus:ring-gold-primary"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-border focus:border-gold-primary focus:outline-none focus:ring-1 focus:ring-gold-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-border focus:border-gold-primary focus:outline-none focus:ring-1 focus:ring-gold-primary"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Order Inquiry</option>
                    <option value="returns">Returns & Exchanges</option>
                    <option value="product">Product Information</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-border focus:border-gold-primary focus:outline-none focus:ring-1 focus:ring-gold-primary"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-gold-primary text-soft-black px-6 py-3 font-medium hover:bg-gold-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Icon Components
function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-primary">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-primary">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-primary">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}

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
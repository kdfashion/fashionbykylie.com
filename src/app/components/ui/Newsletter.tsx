'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      if (email && email.includes('@')) {
        setIsSuccess(true);
        setEmail('');
      } else {
        setError('Please enter a valid email address');
      }
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-royal-purple text-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Gold Crown Icon */}
          <div className="flex justify-center mb-6">
            <CrownIcon className="text-gold-primary w-12 h-12" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
            Join Our Royal Court
          </h2>
          
          <p className="text-lg mb-8 text-cream/90">
            Subscribe to receive exclusive offers, early access to new collections, and royal treatment.
          </p>
          
          {isSuccess ? (
            <div className="bg-emerald/20 text-cream p-4 rounded-md mb-8">
              <p className="font-medium">Thank you for subscribing to our newsletter!</p>
              <p className="text-sm mt-2">You&apos;ll be the first to know about our new collections and exclusive offers.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-grow">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-cream/10 border border-cream/30 text-cream placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-gold-light focus:border-transparent"
                    required
                  />
                  {error && <p className="text-ruby text-sm mt-1 text-left">{error}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gold-primary text-soft-black px-6 py-3 font-medium hover:bg-gold-dark transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
            </form>
          )}
          
          <p className="text-sm mt-4 text-cream/70">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
}

function CrownIcon({ className = '' }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 14c-2.76 0-5-2.24-5-5h10c0 2.76-2.24 5-5 5z" />
    </svg>
  );
}
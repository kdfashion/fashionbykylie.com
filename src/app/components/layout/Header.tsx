'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../ui/Logo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed w-full bg-background z-50 border-b border-border">
      <div className="container mx-auto px-4 h-[var(--header-height)] flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/products">Shop</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 hover:text-primary transition-colors" aria-label="Search">
            <SearchIcon />
          </button>
          <Link href="/account" className="p-2 hover:text-primary transition-colors" aria-label="Account">
            <UserIcon />
          </Link>
          <Link href="/cart" className="p-2 hover:text-primary transition-colors" aria-label="Cart">
            <CartIcon />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:text-primary transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink href="/products" onClick={toggleMobileMenu}>Shop</MobileNavLink>
              <MobileNavLink href="/collections" onClick={toggleMobileMenu}>Collections</MobileNavLink>
              <MobileNavLink href="/about" onClick={toggleMobileMenu}>About</MobileNavLink>
              <MobileNavLink href="/contact" onClick={toggleMobileMenu}>Contact</MobileNavLink>
            </nav>
            <div className="flex items-center space-x-4 mt-6 pt-6 border-t border-border">
              <Link href="/account" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors" onClick={toggleMobileMenu}>
                <UserIcon />
                <span>Account</span>
              </Link>
              <Link href="/cart" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors" onClick={toggleMobileMenu}>
                <CartIcon />
                <span>Cart</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// Navigation Link Components
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-foreground hover:text-primary transition-colors font-medium font-[family-name:var(--font-montserrat)]"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-lg text-foreground hover:text-primary transition-colors font-medium py-2 font-[family-name:var(--font-montserrat)]"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

// Icon Components
function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
}

function UserIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );
}

function CartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}
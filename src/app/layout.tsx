import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainLayout from "./components/layout/MainLayout";

// Elegant serif font for headings
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

// Clean sans-serif for body text
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

// Monospace font for technical elements
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fashion By Kylie | Premium Women's Clothing",
  description: "Discover royal elegance reimagined for the modern era. Fashion By Kylie offers premium women's clothing that blends regal sophistication with contemporary style.",
  keywords: ["women's fashion", "premium clothing", "royal style", "luxury fashion", "modern elegance"],
  authors: [{ name: "KD Fashion LLC" }],
  creator: "KD Fashion LLC",
  publisher: "KD Fashion LLC",
  formatDetection: {
    email: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${montserrat.variable} ${geistMono.variable} antialiased`}
      >
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { OrderProvider } from "@/context/OrderContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://vjfurniture.in'),
  title: {
    default: "VJ Furniture — Premium Furniture for Modern Living",
    template: "%s | VJ Furniture"
  },
  description: "Discover handcrafted, premium-quality furniture at VJ Furniture. Shop sofas, chairs, tables, beds, lighting & more. Free delivery across India. Transform your space with timeless elegance.",
  keywords: ["VJ Furniture", "premium furniture", "modern furniture", "sofas Agra", "chairs", "tables", "home decor India", "handcrafted furniture", "VJ Furniture Agra"],
  authors: [{ name: "VJ Furniture" }],
  creator: "VJ Furniture",
  publisher: "VJ Furniture",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "VJ Furniture — Premium Furniture for Modern Living",
    description: "Handcrafted, premium-quality furniture. Shop sofas, chairs, tables, and more. Free delivery across India.",
    url: 'https://vjfurniture.in',
    siteName: 'VJ Furniture',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VJ Furniture Showroom',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "VJ Furniture — Premium Furniture for Modern Living",
    description: "Handcrafted, premium-quality furniture. Shop luxury sofas and more.",
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "VJ Furniture",
  "image": "https://vjfurniture.in/images/logo.png",
  "@id": "https://vjfurniture.in",
  "url": "https://vjfurniture.in",
  "telephone": "+919870765966",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Magtai Moad, Bichpuri Road",
    "addressLocality": "Agra",
    "postalCode": "282007",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 27.1767,
    "longitude": 77.9230
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "10:00",
    "closes": "20:00"
  },
  "sameAs": [
    "https://www.facebook.com/vjfurniture",
    "https://www.instagram.com/vjfurniture"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <CartProvider>
          <OrderProvider>
            <Header />
            {children}
            <Footer />
          </OrderProvider>
        </CartProvider>
      </body>
    </html>
  );
}

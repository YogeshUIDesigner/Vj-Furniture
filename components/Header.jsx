'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { cartCount } = useCart();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    const handleSearch = (e) => {
        if (e) e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
            setMobileMenuOpen(false);
        }
    };

    const isActive = (path) => pathname === path;

    return (
        <>
            {/* Top Bar */}
            <div className="topbar">
                <div className="container topbar-inner">
                    <p className="topbar-promo">
                        🎉 Only this week — <strong>Flat 20% OFF</strong> on all living room furniture!
                    </p>
                    <div className="topbar-links">
                        <Link href="/about" className={isActive('/about') ? 'active' : ''}>About Us</Link>
                        <Link href="#">Blog</Link>
                        <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
                        <Link href="#">Track Order</Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <div className="container header-inner">
                    {/* Hamburger Button (Mobile Only) */}
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? '✕' : '☰'}
                    </button>

                    {/* Logo */}
                    <Link href="/" className="logo">
                        <div className="logo-icon">🏠</div>
                        <div className="logo-text">
                            VJ<br />Furniture
                            <span>Premium Living</span>
                        </div>
                    </Link>

                    {/* Navigation (Desktop) */}
                    <nav className="nav-links">
                        <Link href="/shop" className={isActive('/shop') ? 'active' : ''}>Products</Link>
                        <Link href="/rooms" className={isActive('/rooms') ? 'active' : ''}>Rooms</Link>
                        <Link href="/inspirations" className={isActive('/inspirations') ? 'active' : ''}>Inspirations</Link>
                        <Link href="/services" className={isActive('/services') ? 'active' : ''}>Our Services</Link>
                        <Link href="/offers" className={isActive('/offers') ? 'active' : ''}>Offers</Link>
                    </nav>

                    {/* Search Bar (Desktop) */}
                    <form className="search-bar" onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search for products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit">🔍</button>
                    </form>

                    {/* Actions */}
                    <div className="header-actions">
                        <div className="header-contact">
                            <div className="header-contact-icon">📞</div>
                            <div className="header-contact-info">
                                Need help?
                                <strong>+91 9870765966</strong>
                            </div>
                        </div>
                        <Link href="/profile" className="action-btn" title="Account">👤</Link>
                        <button className="action-btn" title="Wishlist">
                            ♡
                            <span className="action-badge">0</span>
                        </button>
                        <Link href="/cart" className="action-btn" title="Cart">
                            🛒
                            <span className="action-badge">{cartCount}</span>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                    <div className="mobile-menu-content">
                        <div className="mobile-search">
                            <form onSubmit={handleSearch}>
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button type="submit">🔍</button>
                            </form>
                        </div>
                        <nav className="mobile-nav-links">
                            <Link href="/shop" className={isActive('/shop') ? 'active' : ''}>Products</Link>
                            <Link href="/rooms" className={isActive('/rooms') ? 'active' : ''}>Rooms</Link>
                            <Link href="/inspirations" className={isActive('/inspirations') ? 'active' : ''}>Inspirations</Link>
                            <Link href="/services" className={isActive('/services') ? 'active' : ''}>Our Services</Link>
                            <Link href="/offers" className={isActive('/offers') ? 'active' : ''}>Offers</Link>
                            <Link href="/about" className={isActive('/about') ? 'active' : ''}>About Us</Link>
                            <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
                        </nav>
                        <div className="mobile-contact-info">
                            <p>Call Us: <strong>+91 9870765966</strong></p>
                        </div>
                    </div>
                    <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}></div>
                </div>
            </header>
        </>
    );
}

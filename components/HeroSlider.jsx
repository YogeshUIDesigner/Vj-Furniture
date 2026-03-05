'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
    {
        image: '/images/hero/slider1.jpg',
        label: 'New Collection 2026',
        heading: 'Transform Your Space with Timeless Elegance.',
        subtext: 'Premium furniture for the modern home. Crafted with passion, designed for comfort.',
        cta: 'Shop Now',
    },
    {
        image: '/images/hero/slider2.jpg',
        label: 'Bedroom Collection',
        heading: 'Where Comfort Meets Beautiful Design.',
        subtext: 'Discover our handcrafted bedroom furniture. Sleep in luxury, wake up inspired.',
        cta: 'Explore Bedrooms',
    },
    {
        image: '/images/hero/slider3.jpg',
        label: 'Dining Room',
        heading: 'Gather Around in Style.',
        subtext: 'Create unforgettable dining experiences with our exquisite furniture pieces.',
        cta: 'View Collection',
    },
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    const prev = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(next, 5000);
        return () => clearInterval(interval);
    }, [next]);

    return (
        <section className="hero">
            {slides.map((slide, i) => (
                <div key={i} className={`hero-slide ${i === current ? 'active' : ''}`}>
                    <div className="hero-slide-image">
                        <Image
                            src={slide.image}
                            alt={slide.heading}
                            fill
                            style={{ objectFit: 'cover' }}
                            priority={i === 0}
                        />
                    </div>
                    <div className="hero-content">
                        <span className="hero-label">{slide.label}</span>
                        <h1 className="hero-heading">{slide.heading}</h1>
                        <p className="hero-subtext">{slide.subtext}</p>
                        <Link href="/shop">
                            <button className="btn btn-primary">{slide.cta} →</button>
                        </Link>
                    </div>
                </div>
            ))}

            <button className="hero-nav prev" onClick={prev}>←</button>
            <button className="hero-nav next" onClick={next}>→</button>

            <div className="hero-dots">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        className={`hero-dot ${i === current ? 'active' : ''}`}
                        onClick={() => setCurrent(i)}
                    />
                ))}
            </div>
        </section>
    );
}

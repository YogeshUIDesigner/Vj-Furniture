import Image from 'next/image';
import Link from 'next/link';

const offers = [
    {
        image: '/images/featured-offers/living-room.jpg',
        label: 'Living Room',
        title: 'Where Quality Meets Style',
        link: 'Chair & Sofas',
    },
    {
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=400&fit=crop',
        label: 'Chair & Sofas',
        title: 'Bring Comfort Home!',
        link: 'Shop Now',
    },
    {
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=400&fit=crop',
        label: 'Accessories',
        title: 'Details are Important',
        link: 'Browse Collection',
    },
];

export default function FeaturedOffers() {
    return (
        <section className="featured-offers">
            <div className="container">
                <h2 className="section-title">Featured Offers</h2>
                <div className="featured-grid">
                    {/* Tall Card */}
                    <div className="featured-card tall">
                        <div className="featured-card-image">
                            <Image
                                src={offers[0].image}
                                alt={offers[0].title}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="featured-card-content">
                            <span className="featured-card-label">{offers[0].label}</span>
                            <h3 className="featured-card-title">{offers[0].title}</h3>
                            <Link href="/shop" className="featured-card-link">{offers[0].link} →</Link>
                        </div>
                    </div>

                    {/* Regular Cards */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {offers.slice(1).map((offer, i) => (
                            <div key={i} className="featured-card">
                                <div className="featured-card-image">
                                    <Image
                                        src={offer.image}
                                        alt={offer.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="featured-card-content">
                                    <span className="featured-card-label">{offer.label}</span>
                                    <h3 className="featured-card-title">{offer.title}</h3>
                                    <Link href="/shop" className="featured-card-link">{offer.link} →</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

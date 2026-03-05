'use client';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function OffersPage() {
    const discountedProducts = products.filter(p => p.discount > 0);

    return (
        <main>
            <div className="page-header" style={{
                position: 'relative',
                height: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center',
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1558444458-5cf75194a0d4?w=1600&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                marginBottom: '60px'
            }}>
                <div className="container">
                    <div style={{
                        background: 'var(--color-secondary)',
                        color: 'white',
                        padding: '8px 20px',
                        display: 'inline-block',
                        borderRadius: '50px',
                        marginBottom: '20px',
                        fontWeight: '700',
                        fontSize: '0.9rem',
                        letterSpacing: '1px'
                    }}>
                        UNMISSABLE DEALS
                    </div>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '16px' }}>Exclusive Offers</h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', opacity: '0.9' }}>
                        Save big on premium furniture. Up to 40% OFF on selected collections.
                    </p>
                </div>
            </div>

            <div className="container section">
                <div className="product-grid" style={{ paddingBottom: '80px' }}>
                    {discountedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {discountedProducts.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '60px 0' }}>
                        <h3>Check back later for exciting new offers!</h3>
                    </div>
                )}
            </div>
        </main>
    );
}

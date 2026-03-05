'use client';
import { useCart } from '@/context/CartContext';
import ProductGrid from '@/components/ProductGrid';
import Link from 'next/link';

export default function ProductView({ product, relatedProducts }) {
    const { addToCart } = useCart();

    if (!product) {
        return (
            <div className="container section" style={{ textAlign: 'center' }}>
                <h1>Product Not Found</h1>
                <Link href="/shop" className="btn btn-primary">Back to Shop</Link>
            </div>
        );
    }

    return (
        <main>
            <div className="container section">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
                    {/* Image Gallery Placeholder */}
                    <div style={{ background: 'var(--color-bg-light)', borderRadius: '24px', overflow: 'hidden', aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={product.image} alt={product.name} style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                    </div>

                    {/* Product Info */}
                    <div>
                        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                            <span className="hero-label" style={{ color: 'var(--color-primary)', background: 'rgba(42, 108, 74, 0.1)', fontSize: '0.75rem' }}>{product.category}</span>
                            {product.discount && <span className="hero-label" style={{ background: 'var(--color-accent-red)', fontSize: '0.75rem' }}>{product.discount}% OFF</span>}
                        </div>

                        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{product.name}</h1>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px' }}>Brand: <strong>{product.brand}</strong></p>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                            <span style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-primary)' }}>₹{product.price.toLocaleString()}</span>
                            {product.originalPrice && <span style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', textDecoration: 'line-through' }}>₹{product.originalPrice.toLocaleString()}</span>}
                        </div>

                        <p style={{ fontSize: '1.1rem', marginBottom: '40px', lineHeight: '1.8' }}>{product.description}</p>

                        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
                            <button className="btn btn-primary" onClick={() => addToCart(product)} style={{ flex: 1, padding: '18px' }}>Add to Cart 🛒</button>
                            <button className="action-btn" style={{ width: '60px', height: '60px', borderRadius: '12px', border: '1px solid var(--color-border)' }}>♡</button>
                        </div>

                        {/* Specs */}
                        <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '30px' }}>
                            <h3 style={{ marginBottom: '20px' }}>Specifications</h3>
                            <div style={{ display: 'grid', gap: '12px' }}>
                                {Object.entries(product.specs).map(([key, value]) => (
                                    <div key={key} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ fontWeight: '500', color: 'var(--color-text-light)' }}>{key}:</span>
                                        <span>{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <div className="container section">
                    <ProductGrid title="Related Products" products={relatedProducts} />
                </div>
            )}
        </main>
    );
}

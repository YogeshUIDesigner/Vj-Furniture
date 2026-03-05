'use client';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, ...props }) {
    const { addToCart } = useCart();

    // Use product object if provided, otherwise fallback to other props
    const p = product || props;

    // Safety check: if neither p.id exists, it means the product is missing or invalid
    if (!p || !p.id) return null;

    return (
        <div className="product-card">
            <Link href={`/product/${p.id}`}>
                <div className="product-card-image">
                    <button className="product-wishlist" title="Add to Wishlist" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>♡</button>
                    {p.discount && <div className="product-badge">-{p.discount}%</div>}
                    <img src={p.image} alt={p.name} style={{ objectFit: 'contain', width: '80%', height: '80%' }} />
                </div>
                <div className="product-brand">{p.brand}</div>
                <h3 className="product-name">{p.name}</h3>
                <div className="product-price">
                    <span className="current">₹{p.price.toLocaleString()}</span>
                    {p.originalPrice && <span className="original">₹{p.originalPrice.toLocaleString()}</span>}
                </div>
            </Link>
            <button
                className="btn btn-primary"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart(p); }}
            >
                Add to Cart
            </button>
        </div>
    );
}

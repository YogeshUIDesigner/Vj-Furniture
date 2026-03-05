'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useOrders } from '@/context/OrderContext';

export default function Cart() {
    const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
    const { addOrder } = useOrders();
    const router = useRouter();

    const handleCheckout = () => {
        router.push('/checkout');
    };

    if (cart.length === 0) {
        return (
            <div className="container section" style={{ textAlign: 'center', padding: '100px 0' }}>
                <h1 className="section-title">Your cart is empty</h1>
                <p style={{ marginBottom: '30px', color: 'var(--color-text-muted)' }}>Looks like you haven't added anything to your cart yet.</p>
                <Link href="/shop" className="btn btn-primary">Start Shopping</Link>
            </div>
        );
    }

    return (
        <div className="container section">
            <h1 className="section-title">Shopping Cart</h1>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '40px' }}>
                {/* Cart Items */}
                <div>
                    {cart.map((item) => (
                        <div key={item.id} style={{
                            display: 'flex',
                            gap: '20px',
                            padding: '20px 0',
                            borderBottom: '1px solid var(--color-border)',
                            alignItems: 'center'
                        }}>
                            <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }} />
                            <div style={{ flex: 1 }}>
                                <h4 style={{ marginBottom: '5px' }}>{item.name}</h4>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{item.brand}</p>
                                <p style={{ fontWeight: '600', color: 'var(--color-primary)' }}>₹{item.price.toLocaleString()}</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--color-border)', borderRadius: '20px', padding: '5px 15px' }}>
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ fontSize: '1.2rem' }}>−</button>
                                    <span style={{ margin: '0 15px', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ fontSize: '1.2rem' }}>+</button>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} style={{ color: 'var(--color-accent-red)', fontSize: '1.2rem' }}>🗑️</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary */}
                <div style={{
                    background: 'var(--color-bg-warm)',
                    padding: '30px',
                    borderRadius: '12px',
                    height: 'fit-content',
                    position: 'sticky',
                    top: '120px'
                }}>
                    <h3 style={{ marginBottom: '20px' }}>Order Summary</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span>Subtotal</span>
                        <span>₹{cartTotal.toLocaleString()}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span>Shipping</span>
                        <span style={{ color: 'var(--color-primary)' }}>FREE</span>
                    </div>
                    <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid var(--color-border)' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', fontWeight: '700', fontSize: '1.2rem' }}>
                        <span>Total</span>
                        <span>₹{cartTotal.toLocaleString()}</span>
                    </div>
                    <button onClick={handleCheckout} className="btn btn-primary" style={{ width: '100%' }}>Proceed to Checkout</button>
                    <Link href="/shop" style={{ display: 'block', textAlign: 'center', marginTop: '15px', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Continue Shopping</Link>
                </div>
            </div>
        </div>
    );
}

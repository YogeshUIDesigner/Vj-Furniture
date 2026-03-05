'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useOrders } from '@/context/OrderContext';
import Link from 'next/link';

export default function Checkout() {
    const { cart, cartTotal, clearCart } = useCart();
    const { addOrder } = useOrders();
    const router = useRouter();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        paymentMethod: 'cod'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const orderId = `ORD-${Math.floor(Math.random() * 90000) + 10000}`;
        const newOrder = {
            id: orderId,
            date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
            total: `₹${cartTotal.toLocaleString()}`,
            status: 'Processing',
            items: cart.map(item => `${item.name} (x${item.quantity})`).join(', '),
            itemsList: cart.map(item => ({ name: item.name, quantity: item.quantity, price: item.price, image: item.image })),
            shippingDetails: { ...formData }
        };

        // 1. Save to Server Side Dashboard
        try {
            await fetch('/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newOrder)
            });
        } catch (err) {
            console.error('Failed to save order to dashboard:', err);
        }

        // 2. Save to local OrderContext (for user profile)
        addOrder(newOrder);

        // 3. Trigger Email Notification
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                access_key: "59ee0ef6-110f-4439-92c8-936ce8636abf",
                subject: `New Order Received: ${orderId}`,
                from_name: "VJ Furniture Orders",
                name: formData.fullName,
                email: formData.email,
                message: `
New Order Details:
-----------------
Order ID: ${orderId}
Date: ${newOrder.date}
Items: 
${cart.map(item => `- ${item.name} (x${item.quantity})
  Image: ${window.location.origin}${item.image}`).join('\n')}

Total Amount: ${newOrder.total}

Customer Details:
-----------------
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}, ${formData.city}, ${formData.pincode}
Payment Method: ${formData.paymentMethod.toUpperCase()}
                `
            })
        }).catch(err => console.error('Email trigger failed:', err));

        clearCart();
        alert(`🎉 Order ${orderId} placed successfully!`);
        router.push('/profile?tab=orders');
    };

    if (cart.length === 0) {
        return (
            <div className="container section" style={{ textAlign: 'center', padding: '100px 0' }}>
                <h1 className="section-title">Your cart is empty</h1>
                <Link href="/shop" className="btn btn-primary">Start Shopping</Link>
            </div>
        );
    }

    return (
        <main style={{ background: 'var(--color-bg-light)', minHeight: '100vh', padding: '140px 0 80px' }}>
            <div className="container">
                <h1 className="section-title">Checkout</h1>

                <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '40px', alignItems: 'start' }}>

                    {/* Shipping Details Form */}
                    <div style={{ background: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ marginBottom: '30px' }}>Shipping Information</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <div style={{ gridColumn: 'span 2' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600' }}>Full Name</label>
                                <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} placeholder="Enter your full name" style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid var(--color-border)' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600' }}>Email Address</label>
                                <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="email@example.com" style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid var(--color-border)' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600' }}>Phone Number</label>
                                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid var(--color-border)' }} />
                            </div>
                            <div style={{ gridColumn: 'span 2' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600' }}>Full Address</label>
                                <textarea name="address" required value={formData.address} onChange={handleChange} rows="3" placeholder="House No, Street, Locality" style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid var(--color-border)', fontFamily: 'inherit' }}></textarea>
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600' }}>City</label>
                                <input type="text" name="city" required value={formData.city} onChange={handleChange} placeholder="e.g. Agra" style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid var(--color-border)' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600' }}>Pincode</label>
                                <input type="text" name="pincode" required value={formData.pincode} onChange={handleChange} placeholder="XXXXXX" style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid var(--color-border)' }} />
                            </div>
                        </div>

                        <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>Payment Method</h3>
                        <div style={{ display: 'grid', gap: '15px' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', border: '1px solid var(--color-border)', borderRadius: '12px', cursor: 'pointer', background: formData.paymentMethod === 'cod' ? 'var(--color-bg-warm)' : 'transparent' }}>
                                <input type="radio" name="paymentMethod" value="cod" checked={formData.paymentMethod === 'cod'} onChange={handleChange} />
                                <div>
                                    <strong style={{ display: 'block' }}>Cash on Delivery</strong>
                                    <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>Pay when your furniture arrives at your doorstep.</span>
                                </div>
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', border: '1px solid var(--color-border)', borderRadius: '12px', cursor: 'pointer', opacity: 0.6 }}>
                                <input type="radio" name="paymentMethod" value="online" disabled />
                                <div>
                                    <strong style={{ display: 'block' }}>Online Payment (Coming Soon)</strong>
                                    <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>Securely pay via UPI, Card, or Netbanking.</span>
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div style={{ position: 'sticky', top: '120px' }}>
                        <div style={{ background: 'white', padding: '30px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ marginBottom: '20px' }}>Order Summary</h3>
                            <div style={{ display: 'grid', gap: '15px', marginBottom: '25px' }}>
                                {cart.map(item => (
                                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                                        <span style={{ flex: 1, marginRight: '10px' }}>{item.name} <span style={{ opacity: 0.6 }}>x{item.quantity}</span></span>
                                        <strong>₹{(item.price * item.quantity).toLocaleString()}</strong>
                                    </div>
                                ))}
                            </div>
                            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '20px', display: 'grid', gap: '10px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Subtotal</span>
                                    <span>₹{cartTotal.toLocaleString()}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Delivery Charges</span>
                                    <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>FREE</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '1.2rem', fontWeight: '800' }}>
                                    <span>Total</span>
                                    <span>₹{cartTotal.toLocaleString()}</span>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '30px', padding: '18px' }}>
                                Place Order Now
                            </button>
                            <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '0.8rem', opacity: 0.6 }}>
                                By placing an order, you agree to our terms and conditions.
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}

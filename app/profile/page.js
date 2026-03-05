'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useOrders } from '@/context/OrderContext';
import { Suspense } from 'react';

function ProfileContent() {
    const searchParams = useSearchParams();
    const { orders } = useOrders();
    const [activeTab, setActiveTab] = useState('profile');

    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab) setActiveTab(tab);
    }, [searchParams]);

    const user = {
        name: 'Yogesh Singh',
        email: 'yogesh@example.com',
        phone: '+91 9870765966',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
        joinDate: 'March 2024',
        totalOrders: orders.length,
        wishlistCount: 5,
        totalSpent: '₹1,45,000'
    };

    const tabs = [
        { id: 'profile', label: 'My Profile', icon: '👤' },
        { id: 'orders', label: 'Order History', icon: '📦' },
        { id: 'addresses', label: 'Addresses', icon: '📍' },
        { id: 'wishlist', label: 'Wishlist', icon: '❤️' },
        { id: 'settings', label: 'Settings', icon: '⚙️' }
    ];

    return (
        <main style={{ background: 'var(--color-bg-light)', minHeight: '100vh', padding: '140px 0 80px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '40px', alignItems: 'start' }}>

                    {/* Sidebar / Sidebar Profile Info */}
                    <div style={{ display: 'grid', gap: '20px' }}>
                        <div style={{ background: 'white', padding: '30px', borderRadius: '24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            <img src={user.avatar} alt={user.name} style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '20px', objectFit: 'cover' }} />
                            <h2 style={{ fontSize: '1.4rem', marginBottom: '5px' }}>{user.name}</h2>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>{user.email}</p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', borderTop: '1px solid var(--color-border)', paddingTop: '20px' }}>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', color: 'var(--color-primary)' }}>{user.totalOrders}</h4>
                                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.6 }}>Orders</span>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', color: 'var(--color-primary)' }}>{user.wishlistCount}</h4>
                                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.6 }}>Saved</span>
                                </div>
                            </div>
                        </div>

                        <div style={{ background: 'white', overflow: 'hidden', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '15px',
                                        padding: '15px 25px',
                                        border: 'none',
                                        background: activeTab === tab.id ? 'var(--color-bg-warm)' : 'transparent',
                                        color: activeTab === tab.id ? 'var(--color-primary)' : 'var(--color-dark)',
                                        fontWeight: activeTab === tab.id ? '700' : '500',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        transition: 'all 0.2s ease',
                                        borderLeft: activeTab === tab.id ? '4px solid var(--color-primary)' : '4px solid transparent'
                                    }}
                                >
                                    <span style={{ fontSize: '1.2rem' }}>{tab.icon}</span>
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div style={{ background: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', minHeight: '600px' }}>

                        {activeTab === 'profile' && (
                            <div>
                                <h1 style={{ marginBottom: '30px' }}>Account Information</h1>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.9rem', opacity: 0.7 }}>First Name</label>
                                        <input type="text" defaultValue="Yogesh" style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid var(--color-border)' }} />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.9rem', opacity: 0.7 }}>Last Name</label>
                                        <input type="text" defaultValue="Singh" style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid var(--color-border)' }} />
                                    </div>
                                    <div className="form-group" style={{ gridColumn: 'span 2' }}>
                                        <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.9rem', opacity: 0.7 }}>Email Address</label>
                                        <input type="email" defaultValue={user.email} style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid var(--color-border)' }} />
                                    </div>
                                    <div className="form-group" style={{ gridColumn: 'span 2' }}>
                                        <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.9rem', opacity: 0.7 }}>Phone Number</label>
                                        <input type="tel" defaultValue={user.phone} style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid var(--color-border)' }} />
                                    </div>
                                </div>
                                <button className="btn btn-primary" style={{ marginTop: '30px', padding: '15px 40px' }}>Update Profile</button>
                            </div>
                        )}

                        {activeTab === 'orders' && (
                            <div>
                                <h1 style={{ marginBottom: '30px' }}>Recent Orders</h1>
                                <div style={{ display: 'grid', gap: '20px' }}>
                                    {orders.length > 0 ? orders.map(order => (
                                        <div key={order.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', border: '1px solid var(--color-border)', borderRadius: '16px' }}>
                                            <div>
                                                <h4 style={{ marginBottom: '5px' }}>{order.id}</h4>
                                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{order.items} • {order.date}</p>
                                            </div>
                                            <div style={{ textAlign: 'right' }}>
                                                <p style={{ fontWeight: '700', marginBottom: '5px' }}>{order.total}</p>
                                                <span style={{
                                                    background: order.status === 'Delivered' ? '#e6f4ea' : (order.status === 'Shipped' ? '#e8f0fe' : '#fff7e6'),
                                                    color: order.status === 'Delivered' ? '#1e7e34' : (order.status === 'Shipped' ? '#1a73e8' : '#b27b16'),
                                                    padding: '4px 12px',
                                                    borderRadius: '20px',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px'
                                                }}>{order.status}</span>
                                            </div>
                                        </div>
                                    )) : (
                                        <div style={{ textAlign: 'center', padding: '60px 0' }}>
                                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px' }}>No orders found.</p>
                                            <Link href="/shop" className="btn btn-primary">Start Shopping</Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {activeTab === 'addresses' && (
                            <div>
                                <h1 style={{ marginBottom: '30px' }}>Saved Addresses</h1>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <div style={{ padding: '25px', border: '2px solid var(--color-primary)', borderRadius: '16px', position: 'relative' }}>
                                        <span style={{ background: 'var(--color-primary)', color: 'white', fontSize: '0.7rem', padding: '2px 8px', borderRadius: '4px', position: 'absolute', top: '20px', right: '20px', fontWeight: '700' }}>DEFAULT</span>
                                        <h4 style={{ marginBottom: '10px' }}>Home</h4>
                                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                                            Magtai Moad Bichpuri Road,<br />
                                            Agra, Uttar Pradesh 282007<br />
                                            India
                                        </p>
                                    </div>
                                    <button style={{ border: '2px dashed var(--color-border)', background: 'transparent', borderRadius: '16px', padding: '25px', color: 'var(--color-text-muted)', cursor: 'pointer' }}>
                                        + Add New Address
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'settings' && (
                            <div>
                                <h1 style={{ marginBottom: '30px' }}>Account Settings</h1>
                                <div style={{ display: 'grid', gap: '30px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '20px', borderBottom: '1px solid var(--color-border)' }}>
                                        <div>
                                            <h4 style={{ marginBottom: '5px' }}>Change Password</h4>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Update your account security periodically.</p>
                                        </div>
                                        <button className="btn" style={{ border: '1px solid var(--color-border)', padding: '8px 20px' }}>Change</button>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '20px', borderBottom: '1px solid var(--color-border)' }}>
                                        <div>
                                            <h4 style={{ marginBottom: '5px' }}>Email Notifications</h4>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Receive updates on orders and offers.</p>
                                        </div>
                                        <input type="checkbox" defaultChecked style={{ width: '20px', height: '20px' }} />
                                    </div>
                                    <button style={{ color: '#dc3545', background: 'transparent', border: 'none', fontWeight: '700', cursor: 'pointer', textAlign: 'left', marginTop: '20px' }}>Log Out from Account</button>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </main>
    );
}

export default function ProfilePage() {
    return (
        <Suspense fallback={<div style={{ padding: '150px', textAlign: 'center' }}>Loading profile...</div>}>
            <ProfileContent />
        </Suspense>
    );
}

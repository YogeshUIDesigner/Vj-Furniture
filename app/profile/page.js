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
        <main className="profile-page">
            <div className="container">
                <div className="profile-layout">

                    {/* Sidebar / Sidebar Profile Info */}
                    <div className="profile-sidebar">
                        <div className="profile-card">
                            <img src={user.avatar} alt={user.name} className="profile-avatar" />
                            <h2 style={{ fontSize: '1.4rem', marginBottom: '5px' }}>{user.name}</h2>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>{user.email}</p>
                            <div className="profile-quick-stats">
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

                        <div className="profile-tabs">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`profile-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                                >
                                    <span style={{ fontSize: '1.2rem' }}>{tab.icon}</span>
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="profile-content">

                        {activeTab === 'profile' && (
                            <div>
                                <h1 style={{ marginBottom: '30px' }}>Account Information</h1>
                                <div className="profile-form-grid">
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input type="text" defaultValue="Yogesh" />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input type="text" defaultValue="Singh" />
                                    </div>
                                    <div className="form-group full-width">
                                        <label>Email Address</label>
                                        <input type="email" defaultValue={user.email} />
                                    </div>
                                    <div className="form-group full-width">
                                        <label>Phone Number</label>
                                        <input type="tel" defaultValue={user.phone} />
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
                                        <div key={order.id} className="order-item-card">
                                            <div className="order-info">
                                                <h4 style={{ marginBottom: '5px' }}>{order.id}</h4>
                                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{order.items} • {order.date}</p>
                                            </div>
                                            <div className="order-status-price">
                                                <p style={{ fontWeight: '700', marginBottom: '5px' }}>{order.total}</p>
                                                <span className={`status-pill ${order.status.toLowerCase()}`}>{order.status}</span>
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
                                <div className="address-grid">
                                    <div className="address-card default">
                                        <span className="address-badge">DEFAULT</span>
                                        <h4 style={{ marginBottom: '10px' }}>Home</h4>
                                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                                            Magtai Moad Bichpuri Road,<br />
                                            Agra, Uttar Pradesh 282007<br />
                                            India
                                        </p>
                                    </div>
                                    <button className="add-address-btn">
                                        + Add New Address
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'settings' && (
                            <div>
                                <h1 style={{ marginBottom: '30px' }}>Account Settings</h1>
                                <div style={{ display: 'grid', gap: '30px' }}>
                                    <div className="settings-item">
                                        <div>
                                            <h4 style={{ marginBottom: '5px' }}>Change Password</h4>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Update your account security periodically.</p>
                                        </div>
                                        <button className="btn outline-btn">Change</button>
                                    </div>
                                    <div className="settings-item">
                                        <div>
                                            <h4 style={{ marginBottom: '5px' }}>Email Notifications</h4>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Receive updates on orders and offers.</p>
                                        </div>
                                        <input type="checkbox" defaultChecked style={{ width: '20px', height: '20px' }} />
                                    </div>
                                    <button className="logout-btn">Log Out from Account</button>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
            <style jsx>{`
                .profile-page {
                    background: var(--color-bg-light);
                    min-height: 100vh;
                    padding: 140px 0 80px;
                }
                .profile-layout {
                    display: grid;
                    grid-template-columns: 300px 1fr;
                    gap: 40px;
                    align-items: start;
                }
                .profile-sidebar {
                    display: grid;
                    gap: 20px;
                }
                .profile-card {
                    background: white;
                    padding: 30px;
                    border-radius: 24px;
                    text-align: center;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                }
                .profile-avatar {
                    width: 100px;
                    height: 100px;
                    borderRadius: 50%;
                    marginBottom: 20px;
                    objectFit: cover;
                }
                .profile-quick-stats {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 15px;
                    border-top: 1px solid var(--color-border);
                    padding-top: 20px;
                }
                .profile-tabs {
                    background: white;
                    overflow: hidden;
                    border-radius: 24px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                }
                .profile-tab-btn {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    padding: 15px 25px;
                    border: none;
                    background: transparent;
                    color: var(--color-dark);
                    fontWeight: 500;
                    cursor: pointer;
                    textAlign: left;
                    transition: all 0.2s ease;
                    borderLeft: 4px solid transparent;
                }
                .profile-tab-btn.active {
                    background: var(--color-bg-warm);
                    color: var(--color-primary);
                    fontWeight: 700;
                    borderLeft: 4px solid var(--color-primary);
                }
                .profile-content {
                    background: white;
                    padding: 40px;
                    border-radius: 24px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.05);
                    min-height: 600px;
                }
                .profile-form-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 30px;
                }
                .form-group label {
                    display: block;
                    marginBottom: 10px;
                    fontSize: 0.9rem;
                    opacity: 0.7;
                }
                .form-group input {
                    width: 100%;
                    padding: 15px;
                    borderRadius: 12px;
                    border: 1px solid var(--color-border);
                }
                .full-width {
                    grid-column: span 2;
                }
                .order-item-card {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 20px;
                    border: 1px solid var(--color-border);
                    border-radius: 16px;
                }
                .status-pill {
                    padding: 4px 12px;
                    border-radius: 20px;
                    fontSize: 0.8rem;
                    fontWeight: 700;
                    textTransform: uppercase;
                    letterSpacing: 0.5px;
                }
                .status-pill.delivered { background: #e6f4ea; color: #1e7e34; }
                .status-pill.shipped { background: #e8f0fe; color: #1a73e8; }
                .status-pill.processing { background: #fff7e6; color: #b27b16; }

                .address-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                }
                .address-card {
                    padding: 25px;
                    border: 1px solid var(--color-border);
                    border-radius: 16px;
                    position: relative;
                }
                .address-card.default {
                    border: 2px solid var(--color-primary);
                }
                .address-badge {
                    background: var(--color-primary);
                    color: white;
                    fontSize: 0.7rem;
                    padding: 2px 8px;
                    borderRadius: 4px;
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    fontWeight: 700;
                }
                .add-address-btn {
                    border: 2px dashed var(--color-border);
                    background: transparent;
                    borderRadius: 16px;
                    padding: 25px;
                    color: var(--color-text-muted);
                    cursor: pointer;
                }
                .settings-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    paddingBottom: 20px;
                    borderBottom: 1px solid var(--color-border);
                }
                .outline-btn {
                    border: 1px solid var(--color-border);
                    padding: 8px 20px;
                }
                .logout-btn {
                    color: #dc3545;
                    background: transparent;
                    border: none;
                    fontWeight: 700;
                    cursor: pointer;
                    textAlign: left;
                    marginTop: 20px;
                }

                @media (max-width: 992px) {
                    .profile-page {
                        padding-top: 100px;
                    }
                    .profile-layout {
                        grid-template-columns: 1fr;
                    }
                    .profile-sidebar {
                        order: 2;
                    }
                    .profile-content {
                        order: 1;
                        padding: 30px;
                        min-height: auto;
                    }
                }
                @media (max-width: 768px) {
                    .profile-form-grid, .address-grid {
                        grid-template-columns: 1fr;
                    }
                    .full-width {
                        grid-column: span 1;
                    }
                    .order-item-card {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 15px;
                    }
                    .order-status-price {
                        text-align: left !important;
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                }
            `}</style>
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

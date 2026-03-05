'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
    const [orders, setOrders] = useState([]);
    const [subscribers, setSubscribers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('orders');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [ordersRes, subscribersRes] = await Promise.all([
                    fetch('/api/orders'),
                    fetch('/api/subscribers')
                ]);
                const ordersData = await ordersRes.json();
                const subscribersData = await subscribersRes.json();
                setOrders(ordersData);
                setSubscribers(subscribersData);
            } catch (err) {
                console.error('Fetch error:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const totalRevenue = orders.reduce((acc, order) => {
        const amount = parseInt(order.total.replace(/[^0-9]/g, '')) || 0;
        return acc + amount;
    }, 0);

    if (loading) return <div style={{ padding: '150px', textAlign: 'center' }}>Loading Dashboard...</div>;

    return (
        <main style={{ background: 'var(--color-bg-light)', minHeight: '100vh', padding: '120px 0 60px' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                    <div>
                        <Link href="/" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '10px', display: 'block' }}>← Back to Site</Link>
                        <h1 className="section-title" style={{ margin: 0 }}>Admin Dashboard</h1>
                    </div>
                    <div style={{ background: 'white', padding: '10px 20px', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
                        <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>Welcome Back,</span> <strong>Admin</strong>
                    </div>
                </div>

                {/* Stats Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                    <div className="admin-stat-card">
                        <span className="stat-icon">💰</span>
                        <div>
                            <p className="stat-label">Total Revenue</p>
                            <h3 className="stat-value">₹{totalRevenue.toLocaleString()}</h3>
                        </div>
                    </div>
                    <div className="admin-stat-card">
                        <span className="stat-icon">📦</span>
                        <div>
                            <p className="stat-label">Total Orders</p>
                            <h3 className="stat-value">{orders.length}</h3>
                        </div>
                    </div>
                    <div className="admin-stat-card">
                        <span className="stat-icon">📧</span>
                        <div>
                            <p className="stat-label">Subscribers</p>
                            <h3 className="stat-value">{subscribers.length}</h3>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', flexWrap: 'wrap' }}>
                    <button
                        onClick={() => setActiveTab('orders')}
                        className={`admin-tab ${activeTab === 'orders' ? 'active' : ''}`}
                    >
                        Orders Management ({orders.length})
                    </button>
                    <button
                        onClick={() => setActiveTab('subscribers')}
                        className={`admin-tab ${activeTab === 'subscribers' ? 'active' : ''}`}
                    >
                        Newsletter Subscribers ({subscribers.length})
                    </button>
                </div>

                {/* Content */}
                <div className="admin-table-container">
                    {activeTab === 'orders' ? (
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Order Details</th>
                                    <th>Customer</th>
                                    <th>Items</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.length === 0 ? (
                                    <tr><td colSpan="5" style={{ textAlign: 'center', padding: '40px' }}>No orders found yet.</td></tr>
                                ) : (
                                    orders.map(order => (
                                        <tr key={order.id}>
                                            <td>
                                                <div style={{ fontWeight: '700', color: 'var(--color-primary)' }}>{order.id}</div>
                                                <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>{order.date}</div>
                                            </td>
                                            <td>
                                                <div style={{ fontWeight: '600' }}>{order.shippingDetails?.fullName}</div>
                                                <div style={{ fontSize: '0.85rem', color: 'var(--color-primary)' }}>{order.shippingDetails?.phone}</div>
                                                <div style={{ fontSize: '0.8rem', opacity: 0.6, maxWidth: '200px' }}>{order.shippingDetails?.address}</div>
                                            </td>
                                            <td style={{ maxWidth: '250px', fontSize: '0.85rem' }}>{order.items}</td>
                                            <td><strong style={{ fontSize: '1.1rem' }}>{order.total}</strong></td>
                                            <td>
                                                <span className="status-badge status-processing">
                                                    {order.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    ) : (
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Subscriber Email</th>
                                    <th>Subscription Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subscribers.length === 0 ? (
                                    <tr><td colSpan="3" style={{ textAlign: 'center', padding: '40px' }}>No subscribers found yet.</td></tr>
                                ) : (
                                    subscribers.map((sub, idx) => (
                                        <tr key={sub.email || idx}>
                                            <td>
                                                <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>{sub.email}</div>
                                            </td>
                                            <td>
                                                {sub.subscribedAt ? new Date(sub.subscribedAt).toLocaleDateString('en-IN', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric'
                                                }) : 'N/A'}
                                            </td>
                                            <td>
                                                <span className="status-active">● Active</span>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            <style jsx>{`
                .admin-stat-card {
                    background: white;
                    padding: 25px;
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.03);
                }
                .stat-icon {
                    font-size: 2rem;
                    background: var(--color-bg-light);
                    width: 60px;
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 15px;
                }
                .stat-label {
                    fontSize: 0.85rem;
                    opacity: 0.6;
                    margin-bottom: 5px;
                }
                .stat-value {
                    margin: 0;
                    font-size: 1.4rem;
                    font-weight: 800;
                }
                .admin-tab {
                    padding: 12px 24px;
                    border-radius: 12px;
                    border: none;
                    background: transparent;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    color: var(--color-dark);
                    opacity: 0.6;
                }
                .admin-tab.active {
                    background: var(--color-primary);
                    color: white !important;
                    opacity: 1;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                }
                .admin-table-container {
                    background: white;
                    border-radius: 24px;
                    padding: 30px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    overflow-x: auto;
                }
                .admin-table {
                    width: 100%;
                    border-collapse: collapse;
                    text-align: left;
                    min-width: 800px;
                }
                .admin-table th {
                    padding: 15px;
                    border-bottom: 2px solid var(--color-bg-light);
                    font-size: 0.9rem;
                    opacity: 0.7;
                    font-weight: 600;
                }
                .admin-table td {
                    padding: 20px 15px;
                    border-bottom: 1px solid var(--color-bg-light);
                    font-size: 0.95rem;
                }
                .status-badge {
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: 600;
                }
                .status-processing {
                    background: var(--color-bg-warm);
                    color: var(--color-primary);
                }
                .status-active {
                    color: #059669;
                    font-weight: 600;
                }
            `}</style>
        </main>
    );
}

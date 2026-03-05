'use client';
import { useState } from 'react';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Subscribing...');

        try {
            const res = await fetch('/api/subscribers', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            if (res.ok) {
                setStatus('Thank you for subscribing! 🎉');
                setEmail('');
            } else {
                setStatus('Something went wrong. Please try again.');
            }
        } catch (err) {
            console.error('Subscription error:', err);
            setStatus('Error connecting to server.');
        }
    };

    return (
        <section className="newsletter">
            <div className="container">
                <div className="newsletter-inner">
                    <p className="newsletter-text">
                        Join our newsletter and get <strong>₹500 discount</strong> for your first order
                    </p>
                    <form className="newsletter-form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Your email address..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="btn btn-primary" disabled={status === 'Subscribing...'}>
                            {status === 'Subscribing...' ? '...' : 'Subscribe'}
                        </button>
                    </form>
                </div>
                {status && <p style={{ textAlign: 'center', marginTop: '15px', color: 'var(--color-primary)', fontWeight: '500' }}>{status}</p>}
            </div>
        </section>
    );
}

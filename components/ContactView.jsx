'use client';
import { useState } from 'react';

export default function ContactView() {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        setStatus('Sending...');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: "59ee0ef6-110f-4439-92c8-936ce8636abf",
                    name: data.fullName,
                    email: data.email,
                    subject: `New Contact Message: ${data.subject}`,
                    message: data.message,
                    from_name: "VJ Furniture Contact"
                })
            });

            const result = await response.json();
            if (result.success) {
                setStatus('Thank you! Your message has been sent. We will get back to you shortly.');
                e.target.reset();
            } else {
                setStatus('Something went wrong. Please try again later.');
            }
        } catch (error) {
            console.error('Contact Form Error:', error);
            setStatus('Error sending message. Please check your connection.');
        }
    };

    return (
        <div className="container section">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
                {/* Contact Info */}
                <div>
                    <h1 className="section-title">Get in Touch</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '40px', lineHeight: '1.8' }}>
                        Have questions about our products or need help with an order?
                        Our team is here to help you create your dream home.
                    </p>

                    <div style={{ display: 'grid', gap: '30px' }}>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <div style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>📍</div>
                            <div>
                                <h4 style={{ marginBottom: '5px' }}>Our Showroom</h4>
                                <p style={{ color: 'var(--color-text-muted)' }}>Magtai Moad Bichpuri Road, Agra 282007</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <div style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>📞</div>
                            <div>
                                <h4 style={{ marginBottom: '5px' }}>Call Us</h4>
                                <p style={{ color: 'var(--color-text-muted)' }}>+91 9870765966</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <div style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>📧</div>
                            <div>
                                <h4 style={{ marginBottom: '5px' }}>Email Us</h4>
                                <p style={{ color: 'var(--color-text-muted)' }}>info@vjfurniture.in</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <div style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>⏰</div>
                            <div>
                                <h4 style={{ marginBottom: '5px' }}>Working Hours</h4>
                                <p style={{ color: 'var(--color-text-muted)' }}>Mon - Sat: 10:00 AM - 8:00 PM<br />Sun: 11:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div style={{ background: 'var(--color-bg-warm)', padding: '40px', borderRadius: '24px' }}>
                    <h3 style={{ marginBottom: '30px' }}>Send us a Message</h3>
                    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
                        <div style={{ display: 'grid', gap: '8px' }}>
                            <label style={{ fontWeight: '500', fontSize: '0.9rem' }}>Full Name</label>
                            <input type="text" name="fullName" required placeholder="John Doe" style={{ padding: '15px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'white' }} />
                        </div>
                        <div style={{ display: 'grid', gap: '8px' }}>
                            <label style={{ fontWeight: '500', fontSize: '0.9rem' }}>Email Address</label>
                            <input type="email" name="email" required placeholder="john@example.com" style={{ padding: '15px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'white' }} />
                        </div>
                        <div style={{ display: 'grid', gap: '8px' }}>
                            <label style={{ fontWeight: '500', fontSize: '0.9rem' }}>Subject</label>
                            <input type="text" name="subject" placeholder="How can we help?" style={{ padding: '15px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'white' }} />
                        </div>
                        <div style={{ display: 'grid', gap: '8px' }}>
                            <label style={{ fontWeight: '500', fontSize: '0.9rem' }}>Message</label>
                            <textarea name="message" required rows="5" placeholder="Write your message here..." style={{ padding: '15px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'white', fontFamily: 'inherit' }}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '15px' }}>Send Message</button>
                    </form>
                    {status && <p style={{ marginTop: '20px', color: 'var(--color-primary)', fontWeight: '500', textAlign: 'center' }}>{status}</p>}
                </div>
            </div>

            {/* Google Map Section */}
            <div style={{ width: '100%', height: '500px', background: 'var(--color-bg-light)', position: 'relative', overflow: 'hidden', marginTop: '80px' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14203.245224388307!2d77.9238384!3d27.1462086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974776e737c5af3%3A0xc02e4d463fc06e8b!2sMagtai%20Bichpuri%20Rd%2C%20Agra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709572200000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="VJ Furniture Location"
                ></iframe>
            </div>
        </div>
    );
}

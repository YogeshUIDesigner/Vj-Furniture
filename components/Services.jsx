export default function Services() {
    const services = [
        {
            icon: '🚚',
            title: 'Free Delivery',
            desc: 'Free shipping on all orders above ₹4,999. Fast and reliable delivery across India within 5-7 business days.',
        },
        {
            icon: '🔧',
            title: 'Expert Assembly',
            desc: 'Professional assembly service included with every purchase. Our skilled team ensures perfect setup.',
        },
        {
            icon: '🎨',
            title: 'Interior Consultation',
            desc: 'Get free interior design advice from our experts. We help you choose the perfect furniture for your space.',
        },
        {
            icon: '🔄',
            title: 'Easy Returns',
            desc: '30-day hassle-free return policy. Not satisfied? Return or exchange your furniture with no questions asked.',
        },
        {
            icon: '🛡️',
            title: '5 Year Warranty',
            desc: 'All VJ Furniture products come with a comprehensive 5-year warranty covering manufacturing defects.',
        },
        {
            icon: '💳',
            title: 'Easy EMI Options',
            desc: 'Affordable monthly installments with 0% interest. Furnish your dream home without breaking the bank.',
        },
        {
            icon: '📐',
            title: 'Custom Furniture',
            desc: 'Get furniture tailored to your exact specifications. Choose dimensions, colors, and fabrics that suit your style.',
        },
        {
            icon: '🏠',
            title: 'Room Makeover',
            desc: 'Complete room transformation service. From concept to execution, we handle your entire room redesign.',
        },
    ];

    return (
        <section className="services" id="services">
            <div className="container">
                <h2 className="section-title section-title-center">Our Services</h2>
                <p style={{ textAlign: 'center', color: 'var(--color-text-light)', marginTop: '-24px', marginBottom: '48px', fontSize: '1.05rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                    We go beyond selling furniture. Discover our premium services designed to make your experience exceptional.
                </p>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

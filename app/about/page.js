export const metadata = {
    title: "About Us | VJ Furniture - Crafting Elegance Since 2010",
    description: "Learn about VJ Furniture's journey of crafting premium, sustainable, and handcrafted furniture in India. Discover our values and commitment to quality.",
    openGraph: {
        title: "About Us | VJ Furniture",
        description: "Crafting elegence for every corner of your home since 2010.",
    }
};

export default function About() {
    return (
        <main>
            {/* About Hero */}
            <div className="section" style={{ background: 'var(--color-bg-warm)', padding: '100px 0' }}>
                <div className="container text-center" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <span className="hero-label" style={{ color: 'var(--color-primary)' }}>Our Story</span>
                    <h1 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '30px' }}>Elegance for Every Corner of Your Home</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', lineHeight: '1.8' }}>
                        At VJ Furniture, we believe that your home should be a reflection of your personality.
                        Since 2010, we have been crafting high-quality, modern, and sustainable furniture
                        that brings comfort and style to every space.
                    </p>
                </div>
            </div>

            {/* Our Values */}
            <div className="container section">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🌲</div>
                        <h3>Sustainable Sourcing</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>We only use responsibly sourced materials to ensure our furniture is as kind to the planet as it is to your home.</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🛠️</div>
                        <h3>Expert Craftsmanship</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>Every piece is handmade by master artisans who pay attention to even the smallest details.</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🚚</div>
                        <h3>Free Nationwide Delivery</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>We deliver across India for free, ensuring your dream furniture reaches you safely and quickly.</p>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="section" style={{ background: 'var(--color-primary)', color: 'var(--color-white)', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: 'var(--color-white)', fontSize: '2.5rem', marginBottom: '20px' }}>Ready to transform your space?</h2>
                    <p style={{ marginBottom: '40px', opacity: 0.9 }}>Browse our latest collection and find the perfect pieces for your home.</p>
                    <a href="/shop" className="btn btn-outline" style={{ border: '2px solid white' }}>Explore Shop</a>
                </div>
            </div>
        </main>
    );
}

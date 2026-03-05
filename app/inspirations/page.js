'use client';

export default function InspirationsPage() {
    const inspirations = [
        { id: 1, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80', title: 'Modern Minimalism' },
        { id: 2, image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80', title: 'Boho Chic Living' },
        { id: 3, image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=80', title: 'Smart Home Office' },
        { id: 4, image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80', title: 'Industrial Design' },
        { id: 5, image: 'https://images.unsplash.com/photo-1616489953149-807206466f91?w=800&q=80', title: 'Scandinavian Dining' },
        { id: 6, image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800&q=80', title: 'Cozy Bedroom' },
    ];

    return (
        <main>
            <div className="page-header" style={{
                position: 'relative',
                height: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center',
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1600&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                marginBottom: '60px'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '16px' }}>Design Inspirations</h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '750px', margin: '0 auto', opacity: '0.9' }}>
                        Get inspired by our curated collection of interior designs. Turn your house into a dream home.
                    </p>
                </div>
            </div>

            <div className="container section">
                <div style={{
                    columns: '3 300px',
                    columnGap: '30px',
                    paddingBottom: '80px'
                }}>
                    {inspirations.map((item) => (
                        <div key={item.id} style={{
                            breakInside: 'avoid',
                            marginBottom: '30px',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            position: 'relative'
                        }}>
                            <img src={item.image} alt={item.title} style={{ width: '100%', display: 'block' }} />
                            <div style={{
                                padding: '15px 20px',
                                background: 'white',
                                fontWeight: '600',
                                color: 'var(--color-dark)'
                            }}>
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

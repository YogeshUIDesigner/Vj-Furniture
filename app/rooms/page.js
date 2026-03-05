'use client';
import Link from 'next/link';

export default function RoomsPage() {
    const rooms = [
        {
            name: 'Living Room',
            image: 'https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?w=800&q=80',
            tag: 'Sofa'
        },
        {
            name: 'Dining Room',
            image: 'https://images.unsplash.com/photo-1617806118233-18e16208a50a?w=800&q=80',
            tag: 'Table'
        },
        {
            name: 'Bedroom',
            image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800&q=80',
            tag: 'Bed'
        },
        {
            name: 'Office',
            image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
            tag: 'Chair'
        },
        {
            name: 'Kitchen',
            image: 'https://images.unsplash.com/photo-1556911220-e150213467f9?w=800&q=80',
            tag: 'Storage'
        }
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
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                marginBottom: '60px'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '16px', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Browse by Room</h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', opacity: '0.9' }}>
                        Find perfectly curated furniture for every corner of your home.
                    </p>
                </div>
            </div>

            <div className="container section">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '30px',
                    paddingBottom: '80px'
                }}>
                    {rooms.map((room) => (
                        <Link href={`/shop?q=${room.tag}`} key={room.name} className="room-card" style={{
                            position: 'relative',
                            height: '450px',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            textDecoration: 'none',
                            transition: 'transform 0.3s ease'
                        }}>
                            <img src={room.image} alt={room.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                padding: '30px',
                                color: 'white'
                            }}>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '8px' }}>{room.name}</h3>
                                <span style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', opacity: 0.8 }}>Explore Collection →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}

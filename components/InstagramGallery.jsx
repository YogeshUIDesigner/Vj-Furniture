import Image from 'next/image';
import Link from 'next/link';

const photos = [
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=400&fit=crop',
];

export default function InstagramGallery() {
    return (
        <section className="instagram">
            <div className="container">
                <h2 className="section-title">
                    Follow us on Instagram{' '}
                    <Link href="#" style={{ color: 'var(--color-primary)' }}>@VJFurniture</Link>
                </h2>
            </div>
            <div className="instagram-grid">
                {photos.map((photo, i) => (
                    <div key={i} className="instagram-item">
                        <Image
                            src={photo}
                            alt={`Handcrafted VJ Furniture showcase - Indian Home Decor ${i + 1}`}
                            width={400}
                            height={400}
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

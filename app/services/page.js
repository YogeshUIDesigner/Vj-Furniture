import Services from '@/components/Services';

export const metadata = {
    title: 'Our Services | VJ Furniture',
    description: 'Explore the premium services offered by VJ Furniture, including free delivery, expert assembly, and interior consultation.',
};

export default function ServicesPage() {
    return (
        <main>
            <div className="page-header" style={{
                background: 'var(--color-bg-light)',
                padding: '80px 0 40px',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '16px' }}>Services We Provide</h1>
                    <p style={{ color: 'var(--color-text-light)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                        Providing more than just furniture—we offer a complete home transformation experience tailored to your needs.
                    </p>
                </div>
            </div>
            <Services />
        </main>
    );
}

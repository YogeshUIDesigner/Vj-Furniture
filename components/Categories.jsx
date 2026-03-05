import Link from 'next/link';

const categories = [
    { name: 'Sofas', icon: '🛋️' },
    { name: 'Wardrobes', icon: '🚪' },
    { name: 'Chairs', icon: '🪑' },
    { name: 'Desks', icon: '🖥️' },
    { name: 'Tables', icon: '🪵' },
    { name: 'Lighting', icon: '💡' },
    { name: 'Cabinets', icon: '🗄️' },
    { name: 'Office', icon: '📋' },
    { name: 'Accessories', icon: '🏺' },
];

export default function Categories() {
    return (
        <section className="categories">
            <div className="container">
                <h2 className="section-title section-title-center">Shop by Top Categories</h2>
                <div className="categories-grid">
                    {categories.map((cat) => (
                        <Link
                            key={cat.name}
                            href={`/shop?category=${cat.name === 'Sofas' ? 'Sofa' : cat.name.replace('s', '')}`}
                            className="category-pill"
                        >
                            <div className="category-icon">{cat.icon}</div>
                            <span className="category-name">{cat.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

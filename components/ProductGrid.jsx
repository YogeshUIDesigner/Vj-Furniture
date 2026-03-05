import ProductCard from './ProductCard';

export default function ProductGrid({ title, products }) {
    return (
        <section className="product-section">
            <div className="container">
                <div className="product-section-header">
                    <h2 className="section-title" style={{ marginBottom: 0 }}>{title}</h2>
                    <div className="product-scroll-btns">
                        <button className="scroll-btn">←</button>
                        <button className="scroll-btn">→</button>
                    </div>
                </div>
                <div className="product-grid">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}

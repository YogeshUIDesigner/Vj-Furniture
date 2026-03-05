'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function ShopView() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get('category');
    const searchQuery = searchParams.get('q') || '';
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        if (categoryParam) {
            setSelectedCategory(categoryParam);
        }
    }, [categoryParam]);

    const categories = [
        { name: 'All', icon: '✨' },
        { name: 'Sofa', icon: '🛋️' },
        { name: 'Chair', icon: '🪑' },
        { name: 'Table', icon: '🪵' },
        { name: 'Lighting', icon: '💡' },
        { name: 'Storage', icon: '📦' },
        { name: 'Accessories', icon: '🏺' }
    ];

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchesSearch = searchQuery === '' ||
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <div className="container section">
            <h1 className="section-title">Shop All Furniture</h1>

            {/* Category Filter */}
            <div className="categories-grid" style={{ marginBottom: '60px' }}>
                {categories.map(cat => (
                    <button
                        key={cat.name}
                        onClick={() => setSelectedCategory(cat.name)}
                        className={`category-pill ${selectedCategory === cat.name ? 'active' : ''}`}
                    >
                        <div className="category-icon">{cat.icon}</div>
                        <span className="category-name">{cat.name}</span>
                    </button>
                ))}
            </div>

            <div className="product-grid">
                {filteredProducts.map((product, idx) => (
                    <ProductCard key={product.id || idx} product={product} />
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div style={{ textAlign: 'center', padding: '60px 0' }}>
                    <h3>No products found in this category.</h3>
                </div>
            )}
        </div>
    );
}

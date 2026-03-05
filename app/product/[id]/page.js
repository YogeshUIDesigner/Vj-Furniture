import { products } from '@/data/products';
import ProductView from '@/components/ProductView';

export async function generateMetadata({ params }) {
    const { id } = await params;
    const product = products.find(p => p.id === id);

    if (!product) return { title: 'Product Not Found' };

    return {
        title: `${product.name} | VJ Furniture`,
        description: product.description,
        openGraph: {
            title: product.name,
            description: product.description,
            images: [product.image],
        },
    };
}

export default async function ProductDetail({ params }) {
    const { id } = await params;
    const product = products.find(p => p.id === id);
    const relatedProducts = products.filter(p => p.category === product?.category && p.id !== id).slice(0, 4);

    if (!product) {
        return <ProductView product={null} />;
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "image": product.image,
        "description": product.description,
        "brand": {
            "@type": "Brand",
            "name": product.brand
        },
        "offers": {
            "@type": "Offer",
            "url": `https://vjfurniture.in/product/${id}`,
            "priceCurrency": "INR",
            "price": product.price,
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ProductView product={product} relatedProducts={relatedProducts} />
        </>
    );
}

import { Suspense } from 'react';
import ShopView from '@/components/ShopView';

export const metadata = {
    title: "Shop All Furniture | VJ Furniture Online Store",
    description: "Browse our extensive collection of premium furniture. Shop sofas, chairs, tables, storage, and home accessories with free delivery across India.",
    keywords: ["buy furniture online", "living room furniture", "bedroom furniture Agra", "modern sofa online"],
};

export default function Shop() {
    return (
        <Suspense fallback={<div className="container section">Loading shop...</div>}>
            <ShopView />
        </Suspense>
    );
}

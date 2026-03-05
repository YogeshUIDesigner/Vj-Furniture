export const products = [
    {
        id: '1',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
        brand: 'VJ Craft',
        name: 'Luxe 3 Seater Fabric Sofa',
        price: 24999,
        originalPrice: 34999,
        discount: 29,
        category: 'Sofa',
        description: 'A luxurious and comfortable 3-seater sofa perfect for modern living rooms. Crafted with premium fabric and a sturdy wooden frame.',
        specs: {
            Material: 'Premium Velvet Fabric',
            Frame: 'Solid Teak Wood',
            Dimensions: '210 x 90 x 85 cm',
            Seating: '3 Adults'
        }
    },
    {
        id: '2',
        image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop',
        brand: 'VJ Studio',
        name: 'Scandinavian Accent Chair',
        price: 12499,
        originalPrice: 15999,
        discount: 22,
        category: 'Chair',
        description: 'An elegant accent chair inspired by Scandinavian design. Lightweight yet incredibly durable with an ergonomic backrest.',
        specs: {
            Material: 'Oak Wood & Linen',
            Style: 'Scandinavian',
            Weight: '8 kg',
            Dimensions: '65 x 75 x 80 cm'
        }
    },
    {
        id: '3',
        image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop',
        brand: 'VJ Home',
        name: 'Walnut Coffee Table',
        price: 8999,
        originalPrice: 11999,
        discount: 25,
        category: 'Table',
        description: 'A minimalist coffee table made from high-quality walnut wood. Perfect for keeping your essentials within reach while adding a touch of warmth to your room.',
        specs: {
            Material: 'Solid Walnut Wood',
            Finish: 'Matte Oil',
            Dimensions: '100 x 60 x 45 cm'
        }
    },
    {
        id: '4',
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab3fe?w=600&h=600&fit=crop',
        brand: 'VJ Lighting',
        name: 'Modern Brass Table Lamp',
        price: 3499,
        originalPrice: 4599,
        discount: 24,
        category: 'Lighting',
        description: 'Enhance your desk or bedside with this sleek brass table lamp. Features adjustable brightness and a timeless design.',
        specs: {
            Material: 'Polished Brass',
            Bulb: 'E27 (LED included)',
            Height: '40 cm'
        }
    },
    {
        id: '5',
        image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop',
        brand: 'VJ Decor',
        name: 'Handwoven Throw Pillow Set',
        price: 1999,
        originalPrice: 2599,
        discount: 23,
        category: 'Accessories',
        description: 'Soft and stylish handwoven pillows to add texture and color to your sofa or bed.',
        specs: {
            Material: 'Cotton Blend',
            Size: '45 x 45 cm',
            Count: 'Set of 2'
        }
    },
    {
        id: '6',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop',
        brand: 'VJ Home',
        name: 'Industrial Bookcase',
        price: 15999,
        originalPrice: 19999,
        discount: 20,
        category: 'Storage',
        description: 'A robust industrial-style bookcase with five spacious shelves. Metal frame meets rustic wood for a bold look.',
        specs: {
            Material: 'Powder-coated Iron & MDF',
            Shelves: '5 Tiers',
            Dimensions: '120 x 30 x 180 cm'
        }
    }
];

export const latestProducts = products.slice(0, 4);
export const bestSellers = products.slice(2, 6);

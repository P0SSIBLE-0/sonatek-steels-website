import React from 'react';
import HeroSection from '@/components/common/HeroSection/HeroSection';
import ProductGrid from '@/components/core/products/ProductGrid';
import styles from './page.module.css';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

async function fetchProducts() {
    try {
        const res = await fetch(`${API_URL}/api/products`, { next: { revalidate: 60 } });
        if (!res.ok) return [];
        const data = await res.json();
        return data.products || [];
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

const FALLBACK_PRODUCTS = [
    {
        _id: '1',
        name: 'JSW Steel HR Coils',
        slug: 'jsw-steel-hr-coils',
        brand: 'JSW Steel',
        thicknesses: ['2.0mm', '3.0mm', '5.0mm'],
        image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80'
    },
    {
        _id: '2',
        name: 'Tata Astrum Hot Rolled',
        slug: 'tata-astrum-hot-rolled',
        brand: 'Tata Steel',
        thicknesses: ['1.6mm', '2.5mm', '4.0mm'],
        image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80'
    },
    {
        _id: '3',
        name: 'AM/NS India CR Steel',
        slug: 'amns-india-cr-steel',
        brand: 'AM/NS India',
        thicknesses: ['0.5mm', '0.8mm', '1.2mm'],
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
    }
];

export default async function ProductListingPage() {
    const products = await fetchProducts();
    const displayProducts = products.length > 0 ? products : FALLBACK_PRODUCTS;

    return (
        <main className={styles.page}>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>All Products</h2>
                        <p className={styles.subtitle}>
                            Discover high-quality steel solutions tailored to your infrastructure and industrial needs.
                        </p>
                    </div>

                    <ProductGrid initialProducts={displayProducts} />
                </div>
            </section>
        </main>
    );
}

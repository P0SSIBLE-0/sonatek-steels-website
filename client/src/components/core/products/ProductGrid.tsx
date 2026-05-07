'use client';

import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';
import styles from './ProductGrid.module.css';

interface Product {
    _id: string;
    name: string;
    slug: string;
    brand: string;
    image?: string;
    thicknesses: string[];
}

interface ProductGridProps {
    initialProducts: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ initialProducts }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');

    // Extract unique brands for filters
    const brands = useMemo(() => {
        const uniqueBrands = new Set(initialProducts.map(p => p.brand).filter(Boolean));
        return Array.from(uniqueBrands).sort();
    }, [initialProducts]);

    // Filter products based on search and brand
    const filteredProducts = useMemo(() => {
        return initialProducts.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.brand.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesBrand = selectedBrand === '' || product.brand === selectedBrand;
            return matchesSearch && matchesBrand;
        });
    }, [initialProducts, searchQuery, selectedBrand]);

    return (
        <div className={styles.layout}>
            {/* <aside className={styles.sidebar}>
                <ProductFilters 
                    brands={brands}
                    selectedBrand={selectedBrand}
                    onBrandChange={setSelectedBrand}
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    totalResults={filteredProducts.length}
                />
            </aside> */}
            <main className={styles.content}>
                {filteredProducts.length > 0 ? (
                    <div className={styles.grid}>
                        {filteredProducts.map(product => (
                            <ProductCard
                                key={product._id}
                                name={product.name}
                                slug={product.slug}
                                brand={product.brand}
                                image={product.image}
                                thicknesses={product.thicknesses}
                            />
                        ))}
                    </div>
                ) : (
                    <div className={styles.noResults}>
                        <h3>No products found</h3>
                        <p>Try adjusting your search or filters to find what you're looking for.</p>
                        <button
                            onClick={() => { setSearchQuery(''); setSelectedBrand(''); }}
                            className={styles.resetBtn}
                        >
                            Reset all filters
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
};

export default ProductGrid;

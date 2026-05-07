import React from 'react';
import styles from './ProductFilters.module.css';

interface ProductFiltersProps {
    brands: string[];
    selectedBrand: string;
    onBrandChange: (brand: string) => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
    totalResults: number;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
    brands,
    selectedBrand,
    onBrandChange,
    searchQuery,
    onSearchChange,
    totalResults
}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.searchBox}>
                <input 
                    type="text" 
                    placeholder="Search products..." 
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className={styles.searchInput}
                />
                <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </div>

            <div className={styles.filterSection}>
                <h4 className={styles.filterTitle}>Filter by Brand</h4>
                <div className={styles.brandList}>
                    <button 
                        className={`${styles.brandBtn} ${selectedBrand === '' ? styles.active : ''}`}
                        onClick={() => onBrandChange('')}
                    >
                        All Brands
                    </button>
                    {brands.map(brand => (
                        <button 
                            key={brand}
                            className={`${styles.brandBtn} ${selectedBrand === brand ? styles.active : ''}`}
                            onClick={() => onBrandChange(brand)}
                        >
                            {brand}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.resultsCount}>
                Showing <strong>{totalResults}</strong> products
            </div>
        </div>
    );
};

export default ProductFilters;

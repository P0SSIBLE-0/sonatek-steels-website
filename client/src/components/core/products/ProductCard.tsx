import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    name: string;
    slug: string;
    brand: string;
    image?: string;
    thicknesses?: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ name, slug, brand, image, thicknesses }) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
    const initialImageUrl = image
        ? (image.startsWith('http') ? image : `${API_URL}${image}`)
        : 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800'; // Default high-quality steel image

    const [imgSrc, setImgSrc] = useState(initialImageUrl);

    useEffect(() => {
        setImgSrc(initialImageUrl);
    }, [initialImageUrl]);

    const handleError = () => {
        setImgSrc('https://placehold.co/600x400');
    };

    return (
        <div className={styles.card}>
            <Link href={`/products/${slug}`} className={styles.imageLink}>
                <div className={styles.imageWrapper}>
                    <img
                        src={imgSrc}
                        alt={name}
                        className={styles.image}
                        onError={handleError}
                    />
                </div>
            </Link>
            <div className={styles.content}>
                <div className={styles.brand}>{brand || 'Premium Steel'}</div>
                <h3 className={styles.name}>
                    <Link href={`/products/${slug}`}>{name}</Link>
                </h3>
                {thicknesses && thicknesses.length > 0 && (
                    <div className={styles.specs}>
                        <span className={styles.specLabel}>Thickness:</span>
                        <span className={styles.specValue}>{thicknesses.slice(0, 3).join(', ')}{thicknesses.length > 3 ? '...' : ''}</span>
                    </div>
                )}
                <div className={styles.footer}>
                    <Link href={`/products/${slug}`} className={styles.btn}>
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

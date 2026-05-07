'use client';

import React, { useState } from 'react';
import styles from './ProductPage.module.css';

interface SpecRow { label: string; value: string; }

export interface Product {
    name: string;
    slug: string;
    brand: string;
    image?: string;
    thicknesses: string[];
    widths: string[];
    overview: {
        description: string;
        bulletPoints: string[];
        brandName: string;
        sheetWeight: string;
        supplyCondition: string;
        packaging: string;
    };
    specs: {
        composition: SpecRow[];
        mechanical: SpecRow[];
        tolerance: SpecRow[];
    };
    whatsappNumber: string;
}

const PhoneIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
);
const WhatsappIcon = () => (
    <svg width="20" height="20" viewBox="0 0 448 512" fill="currentColor">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.7 69.4 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.6-30.6-38.1-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.2 3.7-5.5 5.5-9.2 1.9-3.7 1-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
);

type SpecKey = 'composition' | 'mechanical' | 'tolerance';
const TAB_LABELS: Record<SpecKey, string> = {
    composition: 'Chemical composition',
    mechanical:  'Mechanical Properties',
    tolerance:   'Tolerance properties',
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function ProductClient({ product }: { product: Product }) {
    const [thickness, setThickness] = useState('');
    const [width, setWidth]         = useState('');
    const [length, setLength]       = useState('2500');
    const [quantity, setQuantity]   = useState('1');
    const [activeTab, setActiveTab] = useState<SpecKey>('composition');

    const imageUrl = product.image
        ? (product.image.startsWith('http') ? product.image : `${API_URL}${product.image}`)
        : null;

    const handleReset = () => { setThickness(''); setWidth(''); setLength(''); setQuantity(''); };

    const handleEnquiry = () => {
        const msg = `I am interested in ${product.name} with following specs:\nThickness: ${thickness}mm\nWidth: ${width}mm\nLength: ${length}mm\nQuantity: ${quantity} sheets`;
        window.open(`https://wa.me/${product.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    };

    const activeTabs = (Object.keys(product.specs) as SpecKey[]).filter((t) => product.specs[t]?.length > 0);

    return (
        <div className={styles.main}>
            <div className={styles.productContainer}>
                <div className={styles.imageSection}>
                    <div className={styles.imageWrapper}>
                        {imageUrl
                            ? <img src={imageUrl} alt={product.name} className={styles.productImage} />
                            : <div style={{ width: '100%', aspectRatio: '1', background: '#0b1628', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4a7fd4' }}>No Image</div>
                        }
                    </div>
                </div>

                <div className={styles.detailsSection}>
                    <nav className={styles.breadcrumb}>
                        <a href="/">Home</a> / <a href="/products">Products</a> / <span>{product.name}</span>
                    </nav>
                    <h1 className={styles.title}>{product.name}</h1>
                    {product.brand && <span className={styles.brand}>Brand: {product.brand}</span>}

                    {product.thicknesses.length > 0 && (
                        <div className={styles.attributeGroup}>
                            <div className={styles.attributeHeader}>
                                <h3 className={styles.attributeTitle}>Thickness (mm)</h3>
                                <button className={styles.resetBtn} onClick={handleReset}>Reset Selection</button>
                            </div>
                            <div className={styles.chips}>
                                {product.thicknesses.map((t) => (
                                    <button key={t} className={`${styles.chip} ${thickness === t ? styles.active : ''}`} onClick={() => setThickness(t)}>{t}</button>
                                ))}
                            </div>
                        </div>
                    )}

                    {product.widths.length > 0 && (
                        <div className={styles.attributeGroup}>
                            <h3 className={styles.attributeTitle}>Width (mm)</h3>
                            <div className={styles.chips}>
                                {product.widths.map((w) => (
                                    <button key={w} className={`${styles.chip} ${width === w ? styles.active : ''}`} onClick={() => setWidth(w)}>{w}</button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className={styles.inputGroup}>
                        <div className={styles.inputField}>
                            <label>Custom length (mm)</label>
                            <input type="number" className={styles.input} value={length} onChange={(e) => setLength(e.target.value)} placeholder="Enter custom length" />
                        </div>
                    </div>
                    <div className={styles.inputGroup}>
                        <div className={styles.inputField}>
                            <label>Specify quantity (In number of sheets)</label>
                            <input type="number" className={styles.input} value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Enter number of sheets" />
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <p style={{ fontSize: '13px', color: '#555' }}>Send all details on WhatsApp</p>
                        <button className={styles.whatsappBtn} onClick={handleEnquiry}><WhatsappIcon /> Enquire On Whatsapp</button>
                        <button className={styles.callBtn} onClick={() => window.open(`tel:+${product.whatsappNumber}`)}><PhoneIcon /> Call Now</button>
                    </div>
                </div>
            </div>

            <div className={styles.contentSections}>
                <div className={styles.overviewBox}>
                    <h2 className={styles.sectionTitle}>Overview</h2>
                    {product.overview.description && (
                        <div className={styles.infoBlock}>
                            <h3 className={styles.infoTitle}>Product information</h3>
                            <p className={styles.infoText}>{product.overview.description}</p>
                            {product.overview.bulletPoints?.length > 0 && (
                                <ul className={styles.bulletList}>
                                    {product.overview.bulletPoints.map((bp, i) => <li key={i} className={styles.infoText}>{bp}</li>)}
                                </ul>
                            )}
                        </div>
                    )}
                    <div className={styles.infoBlock}>
                        <h3 className={styles.infoTitle}>Item details</h3>
                        <div className={styles.gridInfo}>
                            {product.overview.brandName && <div className={styles.gridItem}><label>Brand name</label><p>{product.overview.brandName}</p></div>}
                            {product.overview.sheetWeight && <div className={styles.gridItem}><label>Sheet weight</label><p>{product.overview.sheetWeight}</p></div>}
                            {product.overview.supplyCondition && <div className={styles.gridItem} style={{ gridColumn: 'span 2' }}><label>Supply condition</label><p>{product.overview.supplyCondition}</p></div>}
                        </div>
                    </div>
                    {product.overview.packaging && (
                        <div className={styles.infoBlock}>
                            <h3 className={styles.infoTitle}>Packaging</h3>
                            <p className={styles.infoText}>{product.overview.packaging}</p>
                        </div>
                    )}
                </div>

                {activeTabs.length > 0 && (
                    <div className={styles.tabsContainer}>
                        <div className={styles.tabList}>
                            {activeTabs.map((t) => (
                                <div key={t} className={`${styles.tabItem} ${activeTab === t ? styles.active : ''}`} onClick={() => setActiveTab(t)}>
                                    {TAB_LABELS[t]}
                                </div>
                            ))}
                        </div>
                        <div className={styles.tabContent}>
                            <table className={styles.table}>
                                <tbody>
                                    {product.specs[activeTab]?.map((row, i) => (
                                        <tr key={i}><td>{row.label}</td><td>{row.value}</td></tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

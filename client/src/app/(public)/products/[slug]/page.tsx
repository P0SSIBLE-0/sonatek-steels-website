import { notFound } from 'next/navigation';
import ProductClient from './ProductClient';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

async function fetchProduct(slug: string) {
    try {
        const res = await fetch(`${API_URL}/api/products/${slug}`, {
            next: { revalidate: 60 },
        });
        if (!res.ok) return null;
        const data = await res.json();
        return data.product ?? null;
    } catch {
        return null;
    }
}

export default async function ProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = await fetchProduct(slug);
    if (!product) notFound();
    return <ProductClient product={product} />;
}

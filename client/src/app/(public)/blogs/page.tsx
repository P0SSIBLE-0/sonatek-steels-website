import styles from './page.module.css';
import NewsCard from '@/components/core/blogs/NewsCard/NewsCard';
import FeaturedNewsCard from '@/components/core/blogs/FeaturedNewsCard/FeaturedNewsCard';
import FloatingTagsDynamic from './FloatingTagsDynamic';
import { tagsData } from './tags-data';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface Tag { _id: string; label: string; slug: string; }
interface Blog {
    _id: string; title: string; slug: string; excerpt: string;
    coverImage?: string; publishedAt?: string; createdAt: string;
    isFeatured: boolean; readTime: number; tags: Tag[];
}

function fmtDate(iso: string) {
    return new Date(iso).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}
function imgUrl(p?: string) {
    if (!p) return 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80';
    return p.startsWith('http') ? p : `${API_URL}${p}`;
}

async function fetchBlogs(): Promise<Blog[]> {
    try {
        const res = await fetch(`${API_URL}/api/blogs?limit=9`, { next: { revalidate: 60 } });
        if (!res.ok) return [];
        return (await res.json()).blogs ?? [];
    } catch { return []; }
}
async function fetchTags(): Promise<Tag[]> {
    try {
        const res = await fetch(`${API_URL}/api/tags`, { next: { revalidate: 300 } });
        if (!res.ok) return [];
        return (await res.json()).tags ?? [];
    } catch { return []; }
}

const FALLBACK: Blog[] = [
    { _id: '1', title: 'BASICALLY STEEL', slug: 'basically-steel', excerpt: 'Steel is an alloy primarily composed of iron and a small percentage of carbon, which enhances its strength and fracture resistance.', coverImage: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80', publishedAt: '2025-05-10', createdAt: '2025-05-10', isFeatured: true, readTime: 3, tags: [] },
    { _id: '2', title: 'TEMPERATURE', slug: 'temperature', excerpt: 'Hot rolling primarily involves deforming the slab/bloom at high temperature & roll pressure.', coverImage: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80', publishedAt: '2025-05-08', createdAt: '2025-05-08', isFeatured: false, readTime: 4, tags: [] },
    { _id: '3', title: 'SMOOTH SURFACE', slug: 'smooth-surface', excerpt: 'Cold rolling is performed to produce sheets & strips with smooth surfaces, having a better surface finish.', coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', publishedAt: '2025-05-05', createdAt: '2025-05-05', isFeatured: false, readTime: 3, tags: [] },
    { _id: '4', title: 'NEW MILESTONE', slug: 'milestone', excerpt: 'Pioneering infrastructure development in Northern India transforms local and global steel trade capacities.', coverImage: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80', publishedAt: '2025-05-01', createdAt: '2025-05-01', isFeatured: true, readTime: 5, tags: [] },
];

export default async function BlogsPage() {
    const [blogs, tags] = await Promise.all([fetchBlogs(), fetchTags()]);
    const list = blogs.length > 0 ? blogs : FALLBACK;
    const finalTags = tags.length > 0 ? tags : tagsData.map(t => ({ _id: String(t.id), label: t.label, slug: t.label.toLowerCase().replace(/ /g, '-') }));

    const featured = list.filter((b) => b.isFeatured);
    const regular = list.filter((b) => !b.isFeatured);
    const f1 = featured[0] ?? list[0];
    const g1 = regular.slice(0, 2);
    const f2 = featured[1] ?? regular[2];
    const g2 = list.slice((f1 ? 1 : 0) + g1.length + (f2 ? 1 : 0), 7);

    const toCard = (b: Blog) => ({
        date: fmtDate(b.publishedAt ?? b.createdAt),
        title: b.title, excerpt: b.excerpt,
        imageUrl: imgUrl(b.coverImage),
        link: `/blogs/${b.slug}`,
    });

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>Insights &amp; News</h1>
                <div className={styles.layout}>
                    <div className={styles.content}>
                        {f1 && <FeaturedNewsCard {...toCard(f1)} />}
                        {g1.length > 0 && (
                            <section className={styles.grid}>
                                {g1.map((b) => <NewsCard key={b._id} {...toCard(b)} />)}
                            </section>
                        )}
                        {f2 && <FeaturedNewsCard {...toCard(f2)} isReversed />}
                        {g2.length > 0 && (
                            <section className={styles.grid}>
                                {g2.map((b) => <NewsCard key={b._id} {...toCard(b)} />)}
                            </section>
                        )}
                    </div>
                    <aside className={styles.sidebar}>
                        <FloatingTagsDynamic tags={finalTags} />
                    </aside>
                </div>
            </div>
        </main>
    );
}

import { notFound } from 'next/navigation';
import styles from './page.module.css';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

async function fetchBlog(slug: string) {
    try {
        const res = await fetch(`${API_URL}/api/blogs/${slug}`, { next: { revalidate: 60 } });
        if (!res.ok) return null;
        return (await res.json()).blog ?? null;
    } catch { return null; }
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const blog = await fetchBlog(slug);
    if (!blog) notFound();

    const imgUrl = blog.coverImage
        ? (blog.coverImage.startsWith('http') ? blog.coverImage : `${API_URL}${blog.coverImage}`)
        : null;

    const date = new Date(blog.publishedAt ?? blog.createdAt)
        .toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });

    return (
        <main className={styles.page}>
            <article className={styles.section}>
                <div className={styles.container}>
                    {blog.tags?.length > 0 && (
                        <div className={styles.tags}>
                            {blog.tags.map((t: { _id: string; label: string }) => (
                                <span key={t._id} className={styles.tag}>
                                    {t.label}
                                </span>
                            ))}
                        </div>
                    )}

                    <h1 className={styles.title}>
                        {blog.title}
                    </h1>

                    <div className={styles.meta}>
                        <span className={styles.metaItem}>{date}</span>
                        <div className={styles.dot} />
                        <span className={styles.metaItem}>{blog.author}</span>
                        <div className={styles.dot} />
                        <span className={styles.metaItem}>{blog.readTime} min read</span>
                    </div>

                    {imgUrl && (
                        <img
                            src={imgUrl}
                            alt={blog.title}
                            className={styles.coverImage}
                        />
                    )}

                    {blog.excerpt && (
                        <p className={styles.excerpt}>
                            {blog.excerpt}
                        </p>
                    )}

                    <div
                        className={styles.content}
                        dangerouslySetInnerHTML={{ __html: blog.content || '<p>No content available.</p>' }}
                    />
                </div>
            </article>
        </main>
    );
}

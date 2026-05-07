"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NewsCard from "@/components/core/blogs/NewsCard/NewsCard";
import { publicApi } from "@/lib/publicApi";
import styles from "./SolutionInsights.module.css";

interface ApiBlog {
  slug: string;
  title: string;
  excerpt?: string;
  coverImage?: string;
  publishedAt?: string;
  createdAt?: string;
}

interface BlogResponse {
  blogs: ApiBlog[];
}

function formatDate(value?: string) {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-IN", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(value));
}

function resolveImage(image?: string) {
  if (!image) {
    return "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80";
  }
  if (image.startsWith("http")) return image;
  const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
  return `${apiBase}${image}`;
}

export default function SolutionInsights() {
  const [blogs, setBlogs] = useState<ApiBlog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadBlogs() {
      try {
        const { data } = await publicApi.get<BlogResponse>("/blogs", {
          params: { limit: 3 },
        });
        if (active) setBlogs(data.blogs || []);
      } catch {
        if (active) setBlogs([]);
      } finally {
        if (active) setIsLoading(false);
      }
    }

    loadBlogs();
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>INDUSTRY INSIGHTS</h2>
          <Link href="/blogs" className={styles.viewAll}>
            View all
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        {isLoading && <p className={styles.empty}>Loading latest insights...</p>}

        {!isLoading && blogs.length === 0 && (
          <p className={styles.empty}>Latest industry insights will appear here once published.</p>
        )}

        {!isLoading && blogs.length > 0 && (
          <div className={styles.grid}>
            {blogs.map((blog) => (
              <NewsCard
                key={blog.slug}
                date={formatDate(blog.publishedAt || blog.createdAt)}
                title={blog.title}
                imageUrl={resolveImage(blog.coverImage)}
                link={`/blogs/${blog.slug}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

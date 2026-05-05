import React from 'react';
import Image from 'next/image';
import styles from './FeaturedNewsCard.module.css';

interface FeaturedNewsCardProps {
  date: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  link: string;
  isReversed?: boolean;
}

export default function FeaturedNewsCard({ date, title, excerpt, imageUrl, link, isReversed = false }: FeaturedNewsCardProps) {
  const isLocalImage = !imageUrl.startsWith('https');
  return (
    <article className={`${styles.card} ${isReversed ? styles.reversed : ''}`}>
      <a href={link} className={styles.imageLink}>
        <div className={styles.imageWrap}>
          <Image src={imageUrl} alt={title} fill sizes="(max-width: 768px) 100vw, 60vw" className={styles.image} unoptimized={isLocalImage} />
        </div>
      </a>
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <span className={styles.date}>{date}</span>
          <h2 className={styles.title}>
            <a href={link}>{title}</a>
          </h2>
          <p className={styles.excerpt}>{excerpt}</p>
          <a href={link} className={styles.readMore}>
            Read More
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

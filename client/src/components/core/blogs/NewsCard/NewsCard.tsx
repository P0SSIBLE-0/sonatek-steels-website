import React from 'react';
import Image from 'next/image';
import styles from './NewsCard.module.css';

interface NewsCardProps {
  date: string;
  title: string;
  excerpt?: string;
  imageUrl: string;
  link: string;
}

export default function NewsCard({ date, title, excerpt, imageUrl, link }: NewsCardProps) {
  const isLocalImage = !imageUrl.startsWith('https');
  return (
    <article className={styles.card}>
      <a href={link} className={styles.imageLink}>
        <div className={styles.imageWrap}>
          <Image src={imageUrl} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className={styles.image} unoptimized={isLocalImage} />
        </div>
      </a>
      <div className={styles.content}>
        <span className={styles.date}>{date}</span>
        <h3 className={styles.title}>
          <a href={link}>{title}</a>
        </h3>
        <a href={link} className={styles.readMore}>
          Read More
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </article>
  );
}

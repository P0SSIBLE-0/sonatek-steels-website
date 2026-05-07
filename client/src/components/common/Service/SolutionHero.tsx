"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./SolutionHero.module.css";
import React from "react";

interface Breadcrumb {
  label: string;
  href: string;
}

interface SolutionHeroProps {
  title: string;
  description: string;
  image: string;
  ctaText?: string;
  ctaHref?: string;
  breadcrumbs: Breadcrumb[];
}

export default function SolutionHero({
  title,
  description,
  image,
  ctaText = "Talk to an Expert",
  ctaHref = "/contact-us",
  breadcrumbs
}: SolutionHeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ""}`}>
          <nav className={styles.breadcrumb}>
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                <Link href={crumb.href} className={`${styles.crumb} ${index === breadcrumbs.length - 1 ? styles.current : ""}`}>
                  {crumb.label}
                </Link>
                {index < breadcrumbs.length - 1 && <span className={styles.separator}> &gt; </span>}
              </React.Fragment>
            ))}
          </nav>
          
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          
          <Link href={ctaHref} className={styles.cta}>
            {ctaText}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        <div className={`${styles.imageWrap} ${isVisible ? styles.visible : ""}`}>
          <div className={styles.imageInner}>
            <Image
              src={image}
              alt={title}
              fill
              className={styles.image}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ServicesSection.module.css";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

interface Service {
    title: string;
    description: string;
    image: string;
    href: string;
}

interface ServicesSectionProps {
    title: string;
    subtitle: string;
    services: Service[];
    topLink?: { label: string; href: string };
}

function ServiceCard({
    service,
    index,
    visible,
}: {
    service: Service;
    index: number;
    visible: boolean;
}) {
    return (
        <div
            className={`${styles.card} ${visible ? styles.cardVisible : ""}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
        >
            <div className={styles.imageWrap}>
                <Image
                    width={800}
                    height={500}
                    src={service.image}
                    alt={service.title}
                    className={styles.image}
                    loading="lazy"
                />
            </div>
            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
                <Link href={service.href} className={styles.readMore}>
                    Explore <MoveRight size={18} strokeWidth={1.5} />
                </Link>
            </div>
        </div>
    );
}

export default function ServicesSection({ title, subtitle, services, topLink }: ServicesSectionProps) {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 },
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.section} ref={ref}>
            <div className={styles.container}>
                <div className={`${styles.header} ${visible ? styles.visible : ""}`}>
                    <div className={styles.headerLeft}>
                        <h2 className={styles.headerTitle}>{title}</h2>
                        <p className={styles.headerSubtitle}>{subtitle}</p>
                    </div>
                    {topLink && (
                        <a href={topLink.href} className={styles.topLink}>
                            {topLink.label}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </a>
                    )}
                </div>

                <div className={`${styles.scrollWrapper} ${visible ? styles.gridVisible : ""}`}>
                    <div className={styles.cardsContainer} ref={scrollRef}>
                        {services.map((service, i) => (
                            <ServiceCard
                                key={i}
                                service={service}
                                index={i}
                                visible={visible}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./WhySonatek.module.css";

export default function WhySonatek() {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 },
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.section} ref={ref}>
            <div className={`${styles.inner} ${visible ? styles.visible : ""}`}>
                {/* Label */}
                <p className={styles.label}>Why Sonatek Steels?</p>

                {/* Big headline */}
                <h2 className={styles.headline}>Precision. Reliability.</h2>

                {/* Body */}
                <p className={styles.body}>
                    As MOU Dealers of SAIL and leading stockists in Northern India,
                    we provide a comprehensive range of flat steel products tailored
                    to your industrial needs. From OEMs to corporate clients, we
                    deliver quality and excellence in every coil and sheet.
                </p>

                {/* CTA text link */}
                <a href="#" className={styles.cta}>
                    Explore Our Solutions
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </a>
            </div>
        </section>
    );
}

import Hero from "@/components/core/home/Hero";
import Impact from "@/components/core/home/Impact";
import SinglePlatform from "@/components/core/home/SinglePlatform";
import GlobalNetwork from "@/components/core/home/GlobalNetwork";
import BeyondBusiness from "@/components/core/home/BeyondBusiness";
import LatestNews from "@/components/core/home/LatestNews";
import CTABanner from "@/components/core/home/CTABanner";
import Testimonials from "@/components/core/home/Testimonials";
import Services from "@/components/core/home/Services";
import WhySonatek from "@/components/core/home/WhySonatek";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

async function fetchHomeContent() {
    try {
        const res = await fetch(`${API_URL}/api/home-content`, { next: { revalidate: 60 } });
        if (!res.ok) return null;
        return (await res.json()).homeContent ?? null;
    } catch { return null; }
}

async function fetchTestimonials() {
    try {
        const res = await fetch(`${API_URL}/api/testimonials`, { next: { revalidate: 60 } });
        if (!res.ok) return [];
        return (await res.json()).testimonials ?? [];
    } catch { return []; }
}

export default async function Home() {
    const [hc, testimonials] = await Promise.all([fetchHomeContent(), fetchTestimonials()]);

    return (
        <main>
            <Hero
                title={hc?.hero?.title}
                description={hc?.hero?.description}
                paragraph={hc?.hero?.paragraph}
                btnText={hc?.hero?.btnText}
                btnLink={hc?.hero?.btnLink}
                videoUrl={hc?.hero?.videoUrl}
                posterUrl={hc?.hero?.posterUrl}
            />
            <WhySonatek />
            <Impact
                label={hc?.impact?.label}
                headline={hc?.impact?.headline}
                sub={hc?.impact?.sub}
                stats={hc?.impact?.stats}
            />
            <SinglePlatform />
            <Services />
            <GlobalNetwork />
            <BeyondBusiness />
            <LatestNews />
            <Testimonials items={testimonials} />
            <CTABanner
                headline={hc?.cta?.headline}
                sub={hc?.cta?.sub}
                btnText={hc?.cta?.btnText}
                btnLink={hc?.cta?.btnLink}
                bgImage={hc?.cta?.bgImage}
            />
        </main>
    );
}

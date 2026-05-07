"use client";

import SolutionHero from "@/components/common/Service/SolutionHero";
import MissionSection from "@/components/common/MissionSection/MissionSection";
import ServicesSection from "@/components/common/Industry/ServicesSection";
import IconGrid from "@/components/common/Service/IconGrid";
import FAQSection from "@/components/common/Industry/FAQSection";
import SolutionInsights from "@/components/common/Service/SolutionInsights";
import CTABanner from "@/components/common/Industry/CTABanner";
import StickyNav from "@/components/common/Navbar/StickyNav";
import styles from "./page.module.css";

const SERVICES_DATA = [
    {
        title: "Bulk Steel Dispatch",
        description: "Coordinated dispatch planning for coils, sheets, plates, and project steel orders across industrial routes.",
        image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",
        href: "/products"
    },
    {
        title: "Urgent Material Movement",
        description: "Priority support for time-sensitive maintenance, fabrication, and production requirements.",
        image: "https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=800&q=80",
        href: "/freight-forwarding"
    },
    {
        title: "Regional Road Delivery",
        description: "Reliable road movement for industrial customers and OEMs across Northern India's steel consumption hubs.",
        image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",
        href: "/freight-forwarding"
    },
    {
        title: "Project Delivery Planning",
        description: "Staged dispatch coordination for construction, infrastructure, and heavy engineering project schedules.",
        image: "https://images.unsplash.com/photo-1581674662583-5e89b374fae6?q=80&w=1170",
        href: "/infrastructure-industrial-project"
    },
    {
        title: "Processed Material Supply",
        description: "Slit, sheared, pickled, and cut-to-size steel dispatches that reduce downstream handling.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        href: "/custom-steel-processing"
    }
];

const ICON_GRID_DATA = [
    {
        icon: "ShieldCheck",
        title: "Customs Clearance",
        description: "Expert navigation of complex customs regulations to ensure smooth and compliant cross-border trade."
    },
    {
        icon: "Warehouse",
        title: "Warehousing",
        description: "Strategic warehousing and distribution solutions optimized for efficiency and inventory control."
    },
    {
        icon: "BarChart3",
        title: "Trade Finance",
        description: "Financial solutions to support your global trade ambitions and manage supply chain risks effectively."
    },
    {
        icon: "Info",
        title: "Business Intelligence",
        description: "Data-driven insights to optimize your supply chain performance and drive strategic growth."
    }
];

const INDUSTRY_EXPERTISE_DATA = [
    {
        title: "Automotive",
        description: "Precision supply support for OEMs and component manufacturers using CR and HR steel.",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
        href: "/industries/automotive"
    },
    {
        title: "Construction",
        description: "Project dispatch support for sheets, plates, and chequered plates used in construction.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1176",
        href: "/industries/construction"
    },
    {
        title: "Oil & Gas",
        description: "Reliable material movement for refinery, pipeline, tank, and energy infrastructure work.",
        image: "https://images.unsplash.com/photo-1693847173071-bd6237101335?q=80&w=1170",
        href: "/industries/oil-gas"
    },
    {
        title: "Shipbuilding",
        description: "Marine project steel movement for shipyards, offshore structures, and deck applications.",
        image: "https://images.unsplash.com/photo-1602575051429-c502cac0d3e8?q=80&w=1170",
        href: "/industries/shipbuilding"
    },
    {
        title: "Heavy Engineering",
        description: "Heavy plate and processed steel delivery support for machinery and industrial fabrication.",
        image: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?q=80&w=1170",
        href: "/industries/heavy-engineering"
    },
    {
        title: "Fabricators & OEMs",
        description: "Repeat supply support for workshops, manufacturing lines, and OEM production teams.",
        image: "https://images.unsplash.com/photo-1469289759076-d1484757abc3?q=80&w=1170",
        href: "/industries/fabricators-oems"
    }
];

const FAQS_DATA = [
    {
        question: "How does DP World ensure efficient handling and tracking of shipments?",
        answer: "We use state-of-the-art digital platforms and real-time tracking systems to provide end-to-end visibility and ensure every shipment is handled with precision and care."
    },
    {
        question: "What types of cargo can be handled through your freight services?",
        answer: "Our network is equipped to handle a wide variety of cargo, including containerized goods, bulk commodities, temperature-sensitive items, and oversized machinery."
    },
    {
        question: "Do you offer customized solutions for specific industry needs?",
        answer: "Yes, we specialize in tailored supply chain solutions designed to meet the unique requirements of various sectors, including automotive, healthcare, and retail."
    },
    {
        question: "What are the benefits of using a single partner for all freight routes?",
        answer: "Working with a single partner provides consistency, better coordination, simplified communication, and often more competitive pricing through consolidated volumes."
    }
];

export default function FreightForwardingPage() {
    const navItems = [
        { id: "overview", label: "Overview" },
        { id: "services", label: "Services" },
        { id: "solutions", label: "Solutions" },
        { id: "expertise", label: "Expertise" },
        { id: "insights", label: "Insights" },
        { id: "faqs", label: "FAQs" },
    ];

    return (
        <main className={styles.main}>
            <div id="overview">
                <SolutionHero
                    title="Freight Forwarding Services"
                    description="Get your cargo from origin to destination smoothly and reliably. We combine global reach with on-ground expertise to move your goods wherever they need to go, whether by air, ocean, rail, or road."
                    image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
                    ctaText="Talk to an Expert"
                    ctaHref="/contact-us"
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "Supply Chain Solutions", href: "/supply-chain" },
                        { label: "Freight Forwarding", href: "/freight-forwarding" },
                    ]}
                />
            </div>

            <StickyNav navItems={navItems} />

            <MissionSection
                label="Our Focus"
                title="YOUR FREIGHT. OUR EXPERTISE."
            >
                <p>
                    At Sonatek Steels, we combine our deep industry knowledge with a global network to deliver seamless freight forwarding solutions that drive your business forward.
                    For our customers, this means practical steel movement support: planned dispatches, urgent material coordination, processed steel delivery, and documentation-backed supply from stockyard to site or factory.
                </p>
            </MissionSection>

            <div id="services">
                <ServicesSection
                    title="ALL ROUTES. ONE PARTNER."
                    subtitle="We provide a comprehensive range of freight services across all modes of transport, ensuring your cargo moves efficiently through every stage of the journey."
                    services={SERVICES_DATA}
                />
            </div>

            <div id="solutions">
                <IconGrid
                    title="MORE THAN FREIGHT FORWARDING"
                    subtitle="Beyond moving cargo, we offer a suite of integrated services to optimize your entire supply chain and add value to your business."
                    items={ICON_GRID_DATA}
                />
            </div>

            <div id="expertise">
                <ServicesSection
                    title="INDUSTRY EXPERTISE"
                    subtitle="Our specialized teams understand the unique challenges of your industry and develop tailored solutions to meet your specific logistics requirements."
                    services={INDUSTRY_EXPERTISE_DATA}
                    topLink={{ label: "Start with construction", href: "/industries/construction" }}
                />
            </div>

            <div id="insights">
                <SolutionInsights />
            </div>

            <div id="faqs">
                <FAQSection
                    title="FREIGHT FORWARDING SOLUTIONS FAQs"
                    items={FAQS_DATA}
                />
            </div>

            <CTABanner
                title="TALK TO AN EXPERT"
                description="Our experts are ready to help you optimize your supply chain. Reach out to us today for a customized freight forwarding solution."
                btnText="Contact Us"
                btnHref="/contact-us"
                bgImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80"
            />
        </main>
    );
}

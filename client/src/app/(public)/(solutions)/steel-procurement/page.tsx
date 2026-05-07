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
import { SOLUTIONS_DATA } from "@/constants/solutions";

const PROCUREMENT_PRODUCTS_DATA = [
  {
    title: "HR Coils & Sheets",
    description: "Premium Hot Rolled steel from trusted sources like SAIL, ensuring structural integrity and longevity.",
    image: "https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=800&q=80",
    href: "/products"
  },
  {
    title: "CR Coils & Sheets",
    description: "Cold Rolled steel providing superior surface finish, tight tolerances, and excellent formability.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    href: "/products"
  },
  {
    title: "Chequered Plates",
    description: "High-friction, anti-slip plates sourced directly from primary mills for maximum industrial safety.",
    image: "https://images.unsplash.com/photo-1504904126298-3fde501c9b31?w=800&q=80",
    href: "/products"
  },
  {
    title: "Heavy Plates",
    description: "Heavy gauge plates required for robust machinery, shipbuilding, and infrastructure development.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    href: "/products"
  }
];

const PROCUREMENT_SUPPORT_DATA = [
  {
    icon: "ShieldCheck",
    title: "Trusted Sourcing",
    description: "Authorized partnerships with primary producers like SAIL, guaranteeing genuine and certified steel."
  },
  {
    icon: "BadgeCheck",
    title: "Quality Assurance",
    description: "100% material traceability with Manufacturer Test Certificates (MTC) accompanying every delivery."
  },
  {
    icon: "Warehouse",
    title: "Ready Stock Availability",
    description: "Extensive inventory of standard sizes and grades maintained to handle urgent procurement demands."
  },
  {
    icon: "Banknote",
    title: "Competitive Pricing",
    description: "Direct mill relationships allow us to offer highly competitive rates for bulk and continuous procurement."
  }
];

const VALUE_ADDED_SERVICES_DATA = [
  {
    title: "Custom Cut-to-Length",
    description: "Precision shearing lines to deliver exact sheet dimensions, reducing your scrap and processing time.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    href: "/custom-steel-processing"
  },
  {
    title: "Coil Slitting",
    description: "Narrow coil slitting services maintaining edge quality and dimensional accuracy for roll forming applications.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    href: "/custom-steel-processing"
  },
  {
    title: "Vendor Managed Inventory",
    description: "Strategic stocking and JIT delivery solutions to optimize your working capital and warehouse space.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    href: "/supply-chain"
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
    question: "Do you supply steel directly from primary mills like SAIL?",
    answer: "Yes, we are authorized distributors and source our materials directly from primary producers like Steel Authority of India Limited (SAIL), ensuring you receive authentic, high-quality steel."
  },
  {
    question: "What grades of HR and CR coils/sheets do you stock?",
    answer: "We stock a wide variety of commercial, structural, and drawing grades (e.g., IS 2062, IS 513). We can also procure specific grades based on your project requirements."
  },
  {
    question: "Can I get Manufacturer Test Certificates (MTC) with my order?",
    answer: "Absolutely. 100% traceability is a core part of our procurement solution. Every dispatch is accompanied by the relevant MTC."
  },
  {
    question: "Do you offer credit facilities for regular procurement?",
    answer: "We offer flexible commercial terms and trade finance options for our long-term, continuous procurement partners, subject to standard financial approvals."
  }
];

export default function SteelProcurementPage() {
  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "solutions", label: "Solutions" },
    { id: "products", label: "Products" },
    { id: "advantages", label: "Advantages" },
    { id: "processing", label: "Processing" },
    { id: "industries", label: "Industries" },
    { id: "insights", label: "Insights" },
    { id: "faqs", label: "FAQs" },
  ];

  return (
    <main className={styles.main}>
      <div id="overview">
        <SolutionHero
          title="Steel Procurement Solution"
          description="Reliable, certified, and cost-effective sourcing of CR/HR coils, sheets, plates, and chequered plates directly from trusted primary mills like SAIL."
          image="https://images.unsplash.com/photo-1697698532602-ccf880036281?q=80&w=1170&auto=format"
          ctaText="Request a Quote"
          ctaHref="/contact-us"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/steel-procurement" },
            { label: "Steel Procurement", href: "/steel-procurement" },
          ]}
        />
      </div>

      <StickyNav navItems={navItems} />

      <MissionSection
        label="Procurement Excellence"
        title="YOUR TRUSTED STEEL SOURCING PARTNER."
      >
        <p>
          For buyers who demand uncompromising quality, Sonatek Steels offers a streamlined procurement solution.
          By bridging the gap between primary mills like SAIL and your manufacturing facility, we guarantee
          certified materials, ready availability, and transparent pricing for all your flat steel requirements.
          The solution is built for real procurement teams: fewer sourcing calls, clearer documentation, dependable stock,
          and a partner who understands how grade, size, finish, and delivery timing affect your project or production line.
        </p>
      </MissionSection>

      <div id="solutions">
        <ServicesSection
          title="OUR CORE SOLUTIONS"
          subtitle="Explore our comprehensive range of specialized flat steel solutions designed for industrial excellence."
          services={SOLUTIONS_DATA}
        />
      </div>

      <div id="products">
        <ServicesSection
          title="CERTIFIED STEEL INVENTORY"
          subtitle="Explore our comprehensive range of flat steel products sourced from India's most respected steel manufacturers."
          services={PROCUREMENT_PRODUCTS_DATA}
        />
      </div>

      <div id="advantages">
        <IconGrid
          title="THE SONATEK ADVANTAGE"
          subtitle="Why leading OEMs, fabricators, and infrastructure companies trust us with their critical steel procurement."
          items={PROCUREMENT_SUPPORT_DATA}
        />
      </div>

      <div id="processing">
        <ServicesSection
          title="VALUE ADDED PROCESSING"
          subtitle="Beyond procurement, we deliver steel exactly how you need it. Our in-house processing centers convert coils to your exact specifications."
          services={VALUE_ADDED_SERVICES_DATA}
          topLink={{ label: "View processing capabilities", href: "/custom-steel-processing" }}
        />
      </div>

      <div id="industries">
        <ServicesSection
          title="INDUSTRIES WE SUPPLY"
          subtitle="Our procurement solution supports every major industry segment represented across Sonatek Steels."
          services={INDUSTRY_EXPERTISE_DATA}
        />
      </div>

      <div id="insights">
        <SolutionInsights />
      </div>

      <div id="faqs">
        <FAQSection
          title="PROCUREMENT FAQs"
          items={FAQS_DATA}
        />
      </div>

      <CTABanner
        title="SECURE YOUR SUPPLY CHAIN"
        description="Whether you need a one-time bulk order or a continuous supply agreement, our procurement experts are ready to assist."
        btnText="Contact Sales Team"
        btnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=1920&q=80"
      />
    </main>
  );
}

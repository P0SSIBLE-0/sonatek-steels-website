"use client";

import React from "react";
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

const SERVICES_DATA = [
  {
    title: "Steel Requirement Planning",
    description: "Aligning grades, thicknesses, quantities, and delivery milestones around your production or project schedule.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    href: "/technical-steel-selection"
  },
  {
    title: "Stock Availability",
    description: "Supporting recurring demand with dependable flat steel availability across CR coils, HR coils, sheets, and plates.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    href: "/products"
  },
  {
    title: "Distribution & Dispatch",
    description: "Coordinated delivery planning for OEMs, fabricators, and industrial buyers across Northern India.",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",
    href: "/contact-us"
  },
  {
    title: "Documentation Support",
    description: "Material certificates and traceability support to keep quality approvals, procurement, and audits moving.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    href: "/contact-us"
  }
];

const ICON_GRID_DATA = [
  {
    icon: "Target",
    title: "Strategic Sourcing",
    description: "Optimizing your procurement processes and supplier relationships for better cost and quality."
  },
  {
    icon: "Truck",
    title: "Logistics Optimization",
    description: "Reducing transportation costs and improving delivery times through advanced route planning."
  },
  {
    icon: "Shield",
    title: "Risk Management",
    description: "Identifying and mitigating supply chain risks to ensure business continuity and resilience."
  },
  {
    icon: "Settings",
    title: "Process Engineering",
    description: "Streamlining operations and eliminating waste to improve overall supply chain efficiency."
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
    question: "What is supply chain management?",
    answer: "Supply chain management involves the coordination and optimization of all activities involved in sourcing, procurement, conversion, and logistics management."
  },
  {
    question: "How can you help reduce our supply chain costs?",
    answer: "We analyze your entire network to identify inefficiencies, optimize inventory levels, and negotiate better rates with carriers and suppliers."
  },
  {
    question: "Do you provide real-time visibility into shipments?",
    answer: "Yes, our digital platforms provide end-to-end visibility, allowing you to track your cargo and manage exceptions in real-time."
  }
];

export default function SupplyChainPage() {
  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "solutions", label: "Solutions" },
    { id: "services", label: "Services" },
    { id: "expertise", label: "Expertise" },
    { id: "sectors", label: "Sectors" },
    { id: "insights", label: "Insights" },
    { id: "faqs", label: "FAQs" },
  ];

  return (
    <main className={styles.main}>
      <div id="overview">
        <SolutionHero
          title="Supply Chain Solutions"
          description="End-to-end requirement planning, stock availability management, and optimized distribution. We connect the dots between primary mills and your factory floor."
          image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
          ctaText="Optimize Your Supply Chain"
          ctaHref="/contact-us"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/supply-chain" },
            { label: "Supply Chain", href: "/supply-chain" },
          ]}
        />
      </div>

      <StickyNav navItems={navItems} />

      <MissionSection
        label="Our Vision"
        title="YOUR FREIGHT. OUR EXPERTISE."
      >
        <p>
          At Sonatek Steels, we combine our deep industry knowledge with a global network to deliver seamless supply chain solutions that drive your business forward.
          For our customers, this means practical steel movement support: planned dispatches, urgent material coordination, processed steel delivery, and documentation-backed supply from stockyard to site or factory.
        </p>
      </MissionSection>

      <div id="solutions">
        <ServicesSection
          title="OUR CORE SOLUTIONS"
          subtitle="Explore our comprehensive range of specialized flat steel solutions designed for industrial excellence."
          services={SOLUTIONS_DATA}
        />
      </div>

      <div id="expertise">
        <IconGrid
          title="BEYOND LOGISTICS"
          subtitle="Our integrated approach covers every stage of the supply chain, providing the tools and expertise to drive operational excellence."
          items={ICON_GRID_DATA}
        />
      </div>

      <div id="sectors">
        <ServicesSection
          title="INDUSTRY SECTORS"
          subtitle="Our specialized teams understand the unique challenges of your industry and develop tailored solutions to meet your specific requirements."
          services={INDUSTRY_EXPERTISE_DATA}
          topLink={{ label: "Start with construction", href: "/industries/construction" }}
        />
      </div>

      <div id="insights">
        <SolutionInsights />
      </div>

      <div id="faqs">
        <FAQSection
          title="SUPPLY CHAIN SOLUTIONS FAQs"
          items={FAQS_DATA}
        />
      </div>

      <CTABanner
        title="TALK TO AN EXPERT"
        description="Our experts are ready to help you optimize your supply chain. Reach out to us today for a customized solution."
        btnText="Contact Us"
        btnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80"
      />
    </main>
  );
}

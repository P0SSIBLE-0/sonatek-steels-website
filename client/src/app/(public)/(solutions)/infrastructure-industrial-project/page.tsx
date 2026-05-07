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

const PROJECT_SUPPLY_DATA = [
  {
    title: "HR Sheets & Plates",
    description:
      "High-strength hot rolled sheets and plates for bridges, industrial sheds, plants, machinery bases, and structural fabrication.",
    image: "https://images.unsplash.com/photo-1727504172725-14acb4f32655?q=80&w=1170",
    href: "/products",
  },
  {
    title: "HR Coils",
    description:
      "Reliable coil supply for large-volume project requirements, downstream processing, and heavy-duty manufacturing applications.",
    image: "https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=800&q=80",
    href: "/products",
  },
  {
    title: "Chequered Plates",
    description:
      "Anti-slip plates for walkways, staircases, factory flooring, vehicle ramps, platforms, and high-traffic industrial zones.",
    image: "https://images.unsplash.com/photo-1504904126298-3fde501c9b31?w=800&q=80",
    href: "/products",
  },
  {
    title: "CR Sheets & Coils",
    description:
      "Superior finish and dimensional accuracy for enclosures, panels, components, and project applications requiring cleaner surface quality.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    href: "/products",
  },
];

const PROJECT_SUPPORT_DATA = [
  {
    icon: "Building2",
    title: "Project-Scale Supply",
    description:
      "Bulk flat steel availability for infrastructure, construction, plant expansion, and industrial development schedules.",
  },
  {
    icon: "BadgeCheck",
    title: "Certified Material",
    description:
      "Material supplied with manufacturer test certificates and traceability support for project approval workflows.",
  },
  {
    icon: "Scissors",
    title: "Custom Processing",
    description:
      "Slitting, shearing, and cut-to-size support to reduce on-site handling and fabrication preparation time.",
  },
  {
    icon: "Truck",
    title: "Regional Delivery",
    description:
      "Distribution support across Northern India with practical planning for staged or urgent project dispatches.",
  },
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
    question: "What steel products are best suited for infrastructure projects?",
    answer:
      "Most infrastructure and industrial projects use HR sheets, HR plates, HR coils, and chequered plates depending on load, surface, fabrication, and flooring requirements.",
  },
  {
    question: "Can Sonatek supply steel for large project quantities?",
    answer:
      "Yes, Sonatek Steels supports bulk project requirements through its flat steel product portfolio, SAIL-linked sourcing, stock availability, and regional distribution capability.",
  },
  {
    question: "Do you provide processed steel for project sites?",
    answer:
      "Yes, we provide custom processing support such as slitting, shearing, pickling, and cut-to-size supply so material can reach fabrication or site teams in usable dimensions.",
  },
  {
    question: "Will material certificates be available?",
    answer:
      "Yes, orders can be supplied with manufacturer test certificates and relevant documentation to support project approvals, quality checks, and traceability.",
  },
];

export default function InfrastructureIndustrialProjectPage() {
  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "solutions", label: "Solutions" },
    { id: "products", label: "Products" },
    { id: "support", label: "Support" },
    { id: "applications", label: "Applications" },
    { id: "insights", label: "Insights" },
    { id: "faqs", label: "FAQs" },
  ];

  return (
    <main className={styles.main}>
      <div id="overview">
        <SolutionHero
          title="Infrastructure & Industrial Project Solution"
          description="Certified flat steel supply, custom processing, and dependable distribution for infrastructure, construction, heavy engineering, and industrial project requirements."
          image="https://images.unsplash.com/photo-1727504172725-14acb4f32655?q=80&w=1170"
          ctaText="Discuss Your Project"
          ctaHref="/contact-us"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/infrastructure-industrial-project" },
            {
              label: "Infrastructure & Industrial Project",
              href: "/infrastructure-industrial-project",
            },
          ]}
        />
      </div>

      <StickyNav navItems={navItems} />

      <MissionSection
        label="Infrastructure Excellence"
        title="BUILT FOR SCALE. DELIVERED WITH PRECISION."
      >
        <p>
          Large-scale infrastructure and industrial projects demand more than just
          material; they require a supply chain that never sleeps. Sonatek
          Steels provides a complete flat steel supply solution. From
          SAIL-backed sourcing and certified materials to processing and timely
          dispatch, we help project teams reduce procurement complexity and
          maintain execution momentum. The solution is built around real site
          and plant needs: correct grades, usable dimensions, clear
          documentation, and coordinated supply across multiple project phases.
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
          title="PROJECT-READY STEEL PRODUCTS"
          subtitle="Choose from flat steel products commonly required for industrial construction, structural fabrication, plant expansion, and infrastructure work."
          services={PROJECT_SUPPLY_DATA}
        />
      </div>

      <div id="support">
        <IconGrid
          title="BUILT FOR PROJECT RELIABILITY"
          subtitle="Our solution combines product availability, documentation, processing, and distribution support for demanding project timelines."
          items={PROJECT_SUPPORT_DATA}
        />
      </div>

      <div id="applications">
        <ServicesSection
          title="WHERE THIS SOLUTION FITS"
          subtitle="Designed for buyers who need consistent flat steel quality, practical technical support, and dependable supply across project phases."
          services={INDUSTRY_EXPERTISE_DATA}
          topLink={{ label: "View all industries", href: "/industries/construction" }}
        />
      </div>

      <div id="insights">
        <SolutionInsights />
      </div>

      <div id="faqs">
        <FAQSection
          title="INFRASTRUCTURE & INDUSTRIAL PROJECT FAQs"
          items={FAQS_DATA}
        />
      </div>

      <CTABanner
        title="PLAN YOUR STEEL REQUIREMENT"
        description="Share your project grade, size, quantity, and delivery schedule. Our team will help you align sourcing, processing, and dispatch."
        btnText="Contact Us"
        btnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80"
      />
    </main>
  );
}

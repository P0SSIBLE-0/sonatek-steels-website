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

const PROCESSING_CAPABILITIES_DATA = [
  {
    title: "Precision Slitting",
    description: "High-speed coil slitting to produce narrow width coils (slit baby coils) with tight dimensional tolerances and burr-free edges.",
    image: "https://images.unsplash.com/photo-1504904126298-3fde501c9b31?w=800&q=80",
    href: "/contact-us"
  },
  {
    title: "Cut-to-Length / Shearing",
    description: "Converting master coils into perfectly flat sheets and blanks, cut to your exact length specifications to eliminate in-house scrap.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    href: "/contact-us"
  },
  {
    title: "Pickling & Oiling (P&O)",
    description: "Removing scale and impurities from Hot Rolled steel and applying a protective oil layer, ensuring a clean surface for immediate painting or fabrication.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    href: "/contact-us"
  },
  {
    title: "Edge Trimming",
    description: "Removing uneven edges from master coils to provide a uniform, mill-edge alternative that is safe to handle and ready for automated feeding lines.",
    image: "https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=800&q=80",
    href: "/contact-us"
  }
];

const PROCESSING_BENEFITS_DATA = [
  {
    icon: "ScissorsLineDashed",
    title: "Zero Scrap Generation",
    description: "By receiving material in exact dimensions, you completely eliminate offcuts and scrap waste from your factory floor."
  },
  {
    icon: "Timer",
    title: "Production Ready",
    description: "Bypass your preparatory workstations. Our processed steel can be fed directly into your stamping presses or assembly lines."
  },
  {
    icon: "Banknote",
    title: "Capital Efficiency",
    description: "Avoid heavy investments in slitting or shearing machinery, and reduce your labor costs associated with material preparation."
  },
  {
    icon: "Ruler",
    title: "Guaranteed Precision",
    description: "Our state-of-the-art CNC processing lines ensure consistent dimensional accuracy across every batch, adhering to strict tolerances."
  }
];

const APPLICATIONS_DATA = [
  {
    title: "Construction",
    description: "Cut-to-size sheets and plates for construction fabrication, flooring, sheds, and site-ready assemblies.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&q=80",
    href: "/industries/construction"
  },
  {
    title: "Automotive",
    description: "Slit coils and exact-size blanks ready for high-speed stamping of automotive chassis, body panels, and structural parts.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    href: "/industries/automotive"
  },
  {
    title: "Oil & Gas",
    description: "Processed sheets and plates for tanks, refinery maintenance, pipeline support, and energy project fabrication.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    href: "/industries/oil-gas"
  },
  {
    title: "Shipbuilding",
    description: "Processed flat steel for marine fabrication, decks, hull sections, and offshore structural requirements.",
    image: "https://images.unsplash.com/photo-1518005020951-ecc84916723c?w=800&q=80",
    href: "/industries/shipbuilding"
  },
  {
    title: "Heavy Engineering",
    description: "Near-net-shape blanks and processed plates for machinery, equipment, and large industrial assemblies.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    href: "/industries/heavy-engineering"
  },
  {
    title: "Fabricators & OEMs",
    description: "Pickled and oiled (P&O) steel plates ready for immediate welding and painting by fabricators and structural engineers.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    href: "/industries/fabricators-oems"
  },
];

const FAQS_DATA = [
  {
    question: "What is the minimum and maximum thickness you can process?",
    answer: "Our service centers are equipped to slit and shear a wide range of thicknesses. Generally, we process Cold Rolled steel from 0.4mm upwards, and Hot Rolled plates up to several inches thick. Contact us with your specific requirements."
  },
  {
    question: "What are your dimensional tolerances for slitting and shearing?",
    answer: "We utilize advanced CNC machinery that allows us to maintain incredibly tight tolerances, often within fractions of a millimeter, ensuring the material performs flawlessly in your automated lines."
  },
  {
    question: "Can you provide Pickled and Oiled (P&O) Hot Rolled steel?",
    answer: "Yes, we offer comprehensive P&O processing to remove surface scale from Hot Rolled steel, providing a clean surface that is ideal for immediate painting, welding, or laser cutting."
  },
  {
    question: "Do you offer Just-In-Time (JIT) delivery for processed steel?",
    answer: "Absolutely. We can process your master coils into blanks or slit coils, warehouse them, and deliver them to your assembly line exactly when your production schedule demands it."
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

export default function CustomSteelProcessingPage() {
  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "solutions", label: "Solutions" },
    { id: "capabilities", label: "Capabilities" },
    { id: "benefits", label: "Benefits" },
    { id: "industries", label: "Industries" },
    { id: "insights", label: "Insights" },
    { id: "faqs", label: "FAQs" },
  ];

  return (
    <main className={styles.main}>
      <div id="overview">
        <SolutionHero
          title="Custom Steel Processing"
          description="Slitting, shearing, pickling, and cut-to-size services. We transform master coils into exact dimensions so you receive material that is 100% ready for immediate production or fabrication."
          image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80"
          ctaText="Discuss Your Processing Needs"
          ctaHref="/contact-us"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/custom-steel-processing" },
            { label: "Custom Processing", href: "/custom-steel-processing" },
          ]}
        />
      </div>

      <StickyNav navItems={navItems} />

      <MissionSection
        label="Processing Excellence"
        title="WE PREPARE IT. YOU BUILD IT."
      >
        <p>
          Stop wasting time and money on material preparation. Our Custom Steel Processing solution acts as an extension
          of your factory floor. We take the heavy lifting out of steel handling by delivering high-precision,
          cut-to-size blanks and slit coils that drop right into your manufacturing process, eliminating scrap and accelerating your output.
        </p>
        <p>
          This integrated approach goes beyond simple cutting. We provide a strategic solution that optimizes your entire
          production workflow. By leveraging our state-of-the-art service centers, you can focus on your core manufacturing
          strengths while we handle the technical complexities of steel preparation. It is about providing a reliable,
          scalable foundation for your business growth.
        </p>
      </MissionSection>

      <div id="solutions">
        <ServicesSection
          title="OUR CORE SOLUTIONS"
          subtitle="Explore our comprehensive range of specialized flat steel solutions designed for industrial excellence."
          services={SOLUTIONS_DATA}
        />
      </div>

      {/* <div id="capabilities">
        <ServicesSection
          title="OUR PROCESSING CAPABILITIES"
          subtitle="Equipped with state-of-the-art machinery, our service centers can handle high-volume processing across all flat steel categories."
          services={PROCESSING_CAPABILITIES_DATA}
        />
      </div> */}

      <div id="benefits">
        <IconGrid
          title="WHY OUTSOURCE YOUR PROCESSING?"
          subtitle="Partnering with Sonatek Steels for your material preparation provides immediate operational and financial advantages."
          items={PROCESSING_BENEFITS_DATA}
        />
      </div>

      <div id="industries">
        <ServicesSection
          title="INDUSTRIES WE SERVE"
          subtitle="Our precision-processed steel feeds directly into the production lines of India's most demanding sectors."
          services={INDUSTRY_EXPERTISE_DATA}
        />
      </div>

      <div id="insights">
        <SolutionInsights />
      </div>

      <div id="faqs">
        <FAQSection
          title="PROCESSING FAQs"
          items={FAQS_DATA}
        />
      </div>

      <CTABanner
        title="READY FOR PRODUCTION?"
        description="Tell us your required dimensions, tolerances, and monthly volume. We will design a custom processing and delivery solution for your plant."
        btnText="Get a Processing Quote"
        btnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=1920&q=80"
      />
    </main>
  );
}

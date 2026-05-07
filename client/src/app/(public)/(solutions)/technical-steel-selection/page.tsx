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

const ANALYSIS_DATA = [
  {
    title: "Grade Selection",
    description: "Matching your structural and forming requirements with the exact Indian Standard (IS) or international grades, such as IS 2062 or IS 513.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    href: "/contact-us"
  },
  {
    title: "Surface Finish Optimization",
    description: "Determining if your application requires standard Hot Rolled, Cold Rolled, or Pickled and Oiled (P&O) steel for optimal painting or coating.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    href: "/contact-us"
  },
  {
    title: "Mechanical Properties Assessment",
    description: "Evaluating yield strength, tensile strength, and elongation requirements to prevent cracking during deep drawing or heavy fabrication.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    href: "/contact-us"
  },
  {
    title: "Dimensional Tolerances",
    description: "Advising on the correct thickness and width specifications to minimize scrap and ensure seamless feeding into your CNC or stamping lines.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    href: "/contact-us"
  }
];

const ADVANTAGE_DATA = [
  {
    icon: "BadgeCheck",
    title: "100% Traceability",
    description: "Every recommendation is backed by certified material accompanied by Manufacturer Test Certificates (MTCs) directly from primary mills."
  },
  {
    icon: "ShieldAlert",
    title: "Defect Prevention",
    description: "Choosing the right grade upfront drastically reduces rejection rates, cracking, and structural failures during your manufacturing process."
  },
  {
    icon: "TrendingDown",
    title: "Value Engineering",
    description: "We help you identify areas where you can safely switch to a more cost-effective grade or finish without compromising end-product quality."
  },
  {
    icon: "Users",
    title: "Mill-Direct Expertise",
    description: "As authorized partners, we bridge the gap between your engineering team and metallurgists at primary producers like SAIL."
  }
];

const INDUSTRIES_DATA = [
  {
    title: "Construction",
    description: "Specifying the correct structural Hot Rolled grades capable of bearing extreme loads for bridges, high-rises, and industrial sheds.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&q=80",
    href: "/industries/construction"
  },
  {
    title: "Automotive",
    description: "Selecting high-formability Cold Rolled grades that withstand aggressive stamping without tearing, ensuring flawless chassis and body panels.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    href: "/industries/automotive"
  },
  {
    title: "Oil & Gas",
    description: "Selecting steel grades and finishes for tanks, pipelines, refinery work, and energy-sector fabrication.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    href: "/industries/oil-gas"
  },
  {
    title: "Shipbuilding",
    description: "Supporting marine-grade material selection for ship hulls, decks, and offshore structures.",
    image: "https://images.unsplash.com/photo-1518005020951-ecc84916723c?w=800&q=80",
    href: "/industries/shipbuilding"
  },
  {
    title: "Heavy Engineering",
    description: "Advising on thick, high-yield plates designed for the rigors of earthmoving equipment, agricultural machinery, and power plant components.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    href: "/industries/heavy-engineering"
  },
  {
    title: "Fabricators & OEMs",
    description: "Helping fabricators and OEMs match steel grade, thickness, finish, and tolerances to production needs.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    href: "/industries/fabricators-oems"
  }
];

const FAQS_DATA = [
  {
    question: "Do you charge for technical selection support?",
    answer: "No, our technical advisory services are a core part of our commitment to our clients. We work with you during the procurement phase to ensure you are buying the correct material."
  },
  {
    question: "How do you guarantee the chemical composition of the steel?",
    answer: "We source exclusively from primary producers like SAIL. Every batch is accompanied by a Manufacturer Test Certificate (MTC) that explicitly details the chemical composition and mechanical properties."
  },
  {
    question: "Can you help us switch from Hot Rolled to Pickled & Oiled (P&O)?",
    answer: "Yes. Many fabricators switch to P&O to save time on surface cleaning before painting. We can analyze your workflow to see if P&O offers a cost-effective advantage for your specific production line."
  },
  {
    question: "What happens if we need a highly specific or rare steel grade?",
    answer: "Through our strong mill relationships, we can facilitate custom rolling or special procurement for highly specific grades, provided the volume meets mill minimums."
  }
];

export default function TechnicalSteelSelectionPage() {
  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "solutions", label: "Solutions" },
    { id: "analysis", label: "What We Analyze" },
    { id: "advantages", label: "The Advantage" },
    { id: "industries", label: "Industries" },
    { id: "insights", label: "Insights" },
    { id: "faqs", label: "FAQs" },
  ];

  return (
    <main className={styles.main}>
      <div id="overview">
        <SolutionHero
          title="Technical Steel Selection Support"
          description="Precision starts before production. We help you choose the exact grade, thickness, surface finish, and mechanical properties required to guarantee the success of your application."
          image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80"
          ctaText="Consult an Expert"
          ctaHref="/contact-us"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/technical-steel-selection" },
            { label: "Technical Selection", href: "/technical-steel-selection" },
          ]}
        />
      </div>

      <StickyNav navItems={navItems} />

      <MissionSection
        label="Engineering First"
        title="THE RIGHT STEEL FOR THE RIGHT JOB."
      >
        <p>
          Selecting the wrong steel grade can lead to catastrophic structural failures, massive scrap rates,
          and production bottlenecks. At Sonatek Steels, our technical experts act as an extension of your
          engineering team. We analyze your end-use application to recommend the most cost-effective,
          certificate-backed material that meets your exact mechanical and chemical specifications.
          The result is a clearer buying decision, fewer trial-and-error orders, lower rejection risk, and material
          that arrives with the right grade, finish, tolerances, and documentation for your application.
        </p>
      </MissionSection>

      <div id="solutions">
        <ServicesSection
          title="OUR CORE SOLUTIONS"
          subtitle="Explore our comprehensive range of specialized flat steel solutions designed for industrial excellence."
          services={SOLUTIONS_DATA}
        />
      </div>

      <div id="analysis">
        <ServicesSection
          title="WHAT WE ANALYZE"
          subtitle="Our technical advisory covers every critical aspect of flat steel procurement to ensure flawless manufacturing."
          services={ANALYSIS_DATA}
        />
      </div>

      <div id="advantages">
        <IconGrid
          title="THE SONATEK ADVISORY ADVANTAGE"
          subtitle="Partnering with us means you never have to guess. You get mill-backed expertise and absolute traceability."
          items={ADVANTAGE_DATA}
        />
      </div>

      <div id="industries">
        <ServicesSection
          title="WHO BENEFITS FROM THIS?"
          subtitle="We provide technical selection support to some of India's most demanding engineering sectors."
          services={INDUSTRIES_DATA}
          topLink={{ label: "Start with construction", href: "/industries/construction" }}
        />
      </div>

      <div id="insights">
        <SolutionInsights />
      </div>

      <div id="faqs">
        <FAQSection
          title="TECHNICAL SUPPORT FAQs"
          items={FAQS_DATA}
        />
      </div>

      <CTABanner
        title="NEED HELP SPECIFYING MATERIAL?"
        description="Share your blueprints, load requirements, or current manufacturing challenges. Our experts will recommend the ideal steel grade for your project."
        btnText="Speak to an Expert"
        btnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=1920&q=80"
      />
    </main>
  );
}

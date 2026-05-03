import CTA from "@/components/common components/cta/cta";
import Faq from "@/components/common components/faq/faq";
import ServiceListCards from "@/components/common components/services-list/service-cards";
import FeatureCard from "@/components/marketing/feature";
import { MarketingHeroSection } from "@/components/marketing/hero";
import React from "react";

const MArketingPage = () => {
  return (
    <>
      <MarketingHeroSection />
      <FeatureCard />
      <ServiceListCards />
      <Faq />
      <CTA />
    </>
  );
};

export default MArketingPage;

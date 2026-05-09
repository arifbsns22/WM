"use client";
import CTA from "@/components/common components/cta/cta";
import Faq from "@/components/common components/faq/faq";
import ServiceListCards from "@/components/common components/services-list/service-cards";
import { HeroSection } from "@/components/serves-page/hero-section";

const ServicePage = () => {
  return (
    <>
      <HeroSection />
      <ServiceListCards />
      <Faq />
      <CTA />
    </>
  );
};

export default ServicePage;

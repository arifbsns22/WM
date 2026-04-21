"use client";
import { HeroSection } from "@/components/serves-page/hero-section";
import ServiceListCards from "@/components/common components/services-list/service-cards";
import Faq from "@/components/common components/faq/faq";
import CTA from "@/components/common components/cta/cta";

const ServicePage = () => {
  return (
    <>
      <HeroSection />
      <ServiceListCards/>
      <Faq/>
      <CTA/>
    </>
  );
};

export default ServicePage;

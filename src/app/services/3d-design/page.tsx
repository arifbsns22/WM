"use client";

import Feature from "@/components/3d-page/feature-list";
import { HeroScrub } from "@/components/3d-page/hero";
import Portfolio from "@/components/3d-page/portfolio";
import CTA from "@/components/common components/cta/cta";
import Faq from "@/components/common components/faq/faq";
import ServiceListCards from "@/components/common components/services-list/service-cards";

const ThreeDPage = () => {
  return (
    <>
      <HeroScrub
        frameCount={300}
        frameUrl={(i) =>
          `https://raw.githubusercontent.com/duthiljean/ferrari-hero-demo/main/${String(i + 1).padStart(4, "0")}.webp`
        }
        titleTop="3D Design"
        titleBottom="Services"
        accentHex="#3a9b8a"
      />
      <Portfolio />
      <Feature />
      <ServiceListCards />
      <Faq />
      <CTA />
    </>
  );
};

export default ThreeDPage;

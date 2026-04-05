import AboutUs1 from "@/components/mvpblocks/about-us-1";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";
import Services from "@/components/shadcn-space/blocks/services-02/services";
import Team from "@/components/shadcn-space/blocks/team-01/team";
import Testimonials from "@/components/shadcn-space/blocks/testimonial-01/testimonial";
import React from "react";

const AboutUsPage = () => {
  return (
    <>
      <AboutUs1 />
      <Team />
      <Testimonials />
      <CTA />
    </>
  );
};

export default AboutUsPage;

import FloatingNavBar from "@/components/floating-dock-demo";
import AboutAndStats01 from "@/components/shadcn-space/blocks/about-us-01";
import Bentogrid from "@/components/shadcn-space/blocks/bento-grid-01/bentogrid";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";
import Faq from "@/components/shadcn-space/blocks/faq-01/faq";
import Footer from "@/components/shadcn-space/blocks/footer-02/footer";
import AgencyHeroSection from "@/components/shadcn-space/blocks/hero-01";
import Header from "@/components/shadcn-space/blocks/hero-01/header";
import Portfolio from "@/components/shadcn-space/blocks/portfolio-01/portfolio";
import Services from "@/components/shadcn-space/blocks/services-01/services";
import Team from "@/components/shadcn-space/blocks/team-01/team";
import Testimonials from "@/components/shadcn-space/blocks/testimonial-01/testimonial";

const HomePage = () => {
  return (
    <>
      <AgencyHeroSection />
      <AboutAndStats01 />
      <Services />
      <Bentogrid />
      <Portfolio />
      <Team />
      <Testimonials />
      <Faq />
      <CTA />
    </>
  );
};

export default HomePage;

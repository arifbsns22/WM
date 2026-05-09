import CTA from "@/components/common components/cta/cta";
import Faq from "@/components/common components/faq/faq";
import Testimonials from "@/components/common components/testimonial/testimonial";
import AboutAndStats01 from "@/components/home-page/about-us";
import Bentogrid from "@/components/home-page/bento-grid/bentogrid";
import Services from "@/components/home-page/services/services";
import AgencyHeroSection from "@/components/shadcn-space/blocks/hero-01";

const HomePage = () => {
  return (
    <>
      <AgencyHeroSection />
      <AboutAndStats01 />
      <Services />
      <Bentogrid />
      <Testimonials />
      <Faq />
      <CTA />
    </>
  );
};

export default HomePage;

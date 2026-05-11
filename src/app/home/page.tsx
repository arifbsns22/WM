import CTA from "@/components/common components/cta/cta";
import Faq from "@/components/common components/faq/faq";
import Testimonials from "@/components/common components/testimonial/testimonial";
import IntroAnimation from "@/app/home/components/hero2";
import AboutAndStats01 from "@/components/home-page/about-us";
import Bentogrid from "@/components/home-page/bento-grid/bentogrid";
import Services from "@/components/home-page/services/services";
import AgencyHeroSection from "@/components/shadcn-space/blocks/hero-01";
import ServiceListCards from "@/components/common components/services-list/service-cards";

const HomePage = () => {
  return (
    <>
      <div className="w-full relative">
        {/* Hero Section - Full Height with Internal Scroll */}
        <div className="w-full h-screen border rounded-lg overflow-hidden">
          <IntroAnimation />
        </div>
      </div>

      <AboutAndStats01 />
      <Services />
      <ServiceListCards />
      <Testimonials />
      <Faq />
      <CTA />
    </>
  );
};

export default HomePage;

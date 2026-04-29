import CTA from "@/components/common components/cta/cta";
import Faq from "@/components/common components/faq/faq";
import ServiceListCards from "@/components/common components/services-list/service-cards";
import GraphicFeature from "@/components/graphic-design/graphic-features";
import IntroAnimation from "@/components/graphic-design/hero";
import ImageCarousel from "@/components/graphic-design/slider";

const GraphicDesignPage = () => {
  return (
    <div className="w-full relative">
      {/* Hero Section - Full Height with Internal Scroll */}
      <div className="w-full h-screen border rounded-lg overflow-hidden">
        <IntroAnimation />
      </div>
      {/* Features Section */}
      <div className="w-full">
        <GraphicFeature />
      </div>
      <div className="items-center justify-center ">
        <ImageCarousel />
        <ServiceListCards />
        <Faq />
        <CTA />
      </div>
    </div>
  );
};

export default GraphicDesignPage;

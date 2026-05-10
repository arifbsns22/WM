import CTA from "@/components/common components/cta/cta";
import Faq from "@/components/common components/faq/faq";
import ServiceListCards from "@/components/common components/services-list/service-cards";
import BrandingService from "@/components/graphic-design/barnding-service";
import GraphicFeature from "@/components/graphic-design/graphic-features";
import ImageCarousel from "@/components/graphic-design/slider";
import Team from "@/components/graphic-design/team";
import { ArcGalleryHero } from "./components/hero";

const memoryImages = [
  "/works/gd/1.jpg",
  "/works/gd/2.jpg",
  "/works/gd/3.jpg",
  "/works/gd/4.jpg",
  "/works/gd/5.jpg",
  "/works/gd/6.jpg",
  "/works/gd/2.jpg",
  "/works/gd/8.jpg",
  "/works/gd/9.jpg",
  "/works/gd/10.jpg",
  "/works/gd/11.jpg",
  "/works/gd/12.jpg",
  "/works/gd/13.jpg",
];

const GraphicDesignPage = () => {
  return (
    <main>
      <div className="w-full">
        <ArcGalleryHero images={memoryImages} />
        <GraphicFeature />
      </div>
      <div className="items-center justify-center ">
        <ImageCarousel />
        <Team />
        <BrandingService />
        <ServiceListCards />
        <Faq />
        <CTA />
      </div>
    </main>
  );
};

export default GraphicDesignPage;

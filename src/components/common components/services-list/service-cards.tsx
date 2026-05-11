import { TextType } from "../animated-text/text-type";
import { ServicesCardsGooeyText } from "../texts/services-card-gooey-text";
import CardFlip from "./animated-card";

export default function ServiceListCards() {
  return (
    <section className="w-full overflow-x-hidden bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex min-h-[160px] items-center justify-center mb-12">
          <div className="text-center max-w-7xl mx-auto w-full">
            <ServicesCardsGooeyText />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-12 gap-x-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center items-start">
          <CardFlip
            title="Web Development"
            subtitle="Build fast, modern, responsive web experiences"
            description="Professional web development creating fast, responsive, SEO-optimized websites that enhance user experience, brand visibility, and online growth."
            features={["Ecommerce", "Landing page", "Shopify", "Agency"]}
            link={"/services/web-development"}
          />
          <CardFlip
            title="Graphic Design"
            subtitle="Create visually appealing designs for brands"
            description="Creative graphic design delivering impactful visuals, strong branding, and marketing materials that attract audiences, increase engagement, and conversions."
            features={[
              "Logo & Branding",
              "Social Media Graphics",
              "Marketing Materials",
              "Digital & Print Design",
              "Product Photography",
              "Packageing Design",
            ]}
            link={"/services/graphic-design"}
          />
          <CardFlip
            title="Video Editing"
            subtitle="Create engaging, polished videos with professional editing"
            description="Professional video editing transforming raw footage into polished, engaging content with smooth transitions, refined audio, branding, and storytelling."
            features={[
              "Social Media Video Editing",
              "YouTube Video Editing",
              "Promotional & Business Videos",
              "Motion Graphics & 3D Design",
              "Reel",
            ]}
            link={"/services/video-editing"}
          />
          <CardFlip
            title="Social Media Marketing"
            subtitle="Grow brands through strategic social media marketing"
            description="Effective social media marketing creating engaging content and campaigns that grow followers, build brand awareness, and drive conversions."
            features={[
              "Meta Business Suite",
              "Google Ads",
              "SEO",
              "Business Strategy",
            ]}
            link={"/services/marketing"}
          />
          <CardFlip
            title="Custom Software"
            subtitle="Build tailored software solutions for businesses"
            description="Custom software development creating tailored applications that streamline operations, improve efficiency, integrate systems, and support scalable growth long-term."
            features={[
              "CRM Software",
              "POS Software",
              "ERP Software",
              "Custom software",
            ]}
            link={"/services/web-development"}
          />
          <CardFlip
            title="3D Design"
            subtitle="Create realistic and creative 3D visual designs"
            description="Creative 3D design producing realistic models, animations, and visualizations for products, architecture, branding, marketing, presentations, and digital experiences."
            features={["Product", "Interior", "Commercial"]}
            link={""}
          />
        </div>
      </div>
    </section>
  );
}

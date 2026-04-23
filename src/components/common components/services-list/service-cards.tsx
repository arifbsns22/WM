import { TextType } from "../animated-text/text-type";
import CardFlip from "./animated-card";

export default function ServiceListCards() {
  return (
    <>
     <div className="flex min-h-[200px] items-center justify-center">
          <div className="text-center">
            <h1 className="text-foreground text-3xl md:text-5xl">
              <TextType
                text={['Crafting fast, modern, user-friendly web experiences', 'Designs that make your brand stand out', 'Turning raw footage into captivating stories','Boosting brands with powerful social strategies','Building smart solutions tailored to your needs','Bringing ideas to life in stunning 3D']}
                typingSpeed={70}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="text-foreground"
              />
            </h1>
          </div>
        </div>
    <div className="grid grid-rows-2">
        <div className="flex items-center justify-center my-8 gap-20">
        <CardFlip
            title="Web Development"
            subtitle="Build fast, modern, responsive web experiences"
            description="Professional web development creating fast, responsive, SEO-optimized websites that enhance user experience, brand visibility, and online growth."
            features={[
            "Ecommerce",
            "Landing page", 
            "Shopify",
            "Agency"
            ]}
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
            "Packageing Design"
            ]}
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
            "Reel"
            ]}
        />
    </div>
    <div className="flex items-center justify-center my-8 gap-20 mb-20">
        <CardFlip
            title="Social Media Marketing"
            subtitle="Grow brands through strategic social media marketing"
            description="Effective social media marketing creating engaging content and campaigns that grow followers, build brand awareness, and drive conversions."
            features={[
            "Meta Business Suite",
            "Google Ads", 
            "SEO",
            "Business Strategy"
            ]}
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
        />
        <CardFlip
            title="3D Design"
            subtitle="Create realistic and creative 3D visual designs"
            description="Creative 3D design producing realistic models, animations, and visualizations for products, architecture, branding, marketing, presentations, and digital experiences."
            features={[
            "Product",
            "Interior", 
            "Commercial"
            ]}
        />
    </div>
   </div>
   </>
  );
}
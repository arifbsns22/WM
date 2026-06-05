import { Check } from "lucide-react";
import Image from "next/image";

const GraphicDesignFeatures2 = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-12 lg:gap-20 grid-cols-1 md:grid-cols-2 items-center">
        <div className="order-2 md:order-1 space-y-6 md:pr-8 lg:pr-12">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            Why Choose Us for Your Graphic Design Needs?
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            At WeMake, we are passionate about delivering exceptional graphic design
            services that elevate your brand and captivate your audience. Here's why
            you should choose us:
          </p>
          <ul className="space-y-3 text-base sm:text-lg">
            <li className="flex items-start gap-3">
              <Check className="mt-1 h-6 w-6 text-primary flex-shrink-0" />
              <span>Experienced and talented design team with a proven track record.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="mt-1 h-6 w-6 text-primary flex-shrink-0" />
              <span>Creative and innovative design solutions tailored to your brand's unique identity.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="mt-1 h-6 w-6 text-primary flex-shrink-0" />
              <span>Transparent and clear communication.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="mt-1 h-6 w-6 text-primary flex-shrink-0" />
              <span>Client-focused, tailored solutions.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="mt-1 h-6 w-6 text-primary flex-shrink-0" />
              <span>Reliable support you can depend on.</span>
            </li>
          </ul>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-start">
          <Image
            src="/works/gd/Organic-Food.jpg"
            alt="Graphic design concept"
            width={600}
            height={400}
            className="rounded-3xl w-full max-w-xl h-auto object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default GraphicDesignFeatures2;

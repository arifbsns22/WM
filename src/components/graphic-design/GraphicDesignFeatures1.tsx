"use client";
import { Check } from "lucide-react";
import Image from "next/image";

const GraphicDesignFeatures1 = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-0">
      <div className="grid gap-12 lg:gap-20 xl:gap-24 grid-cols-1 md:grid-cols-2 items-center">
        <div className="space-y-6 md:pr-8 lg:pr-12">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            Professional Team Delivering Reliable Services You Trust
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            We have a very professional team, so you don’t have to worry about our
            services. We are a trusted partner for you and make it easy to get
            services from us. We also have an extensive network, with thousands of
            trusted partners and weekly active users.
          </p>
          <ul className="space-y-3 text-base sm:text-lg">
            <li className="flex items-start gap-3">
              <Check className="mt-1 text-primary" />
              <span>Reliable solutions delivered by professionals.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="mt-1 text-primary" />
              <span>Expert services you can always rely on.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="mt-1 text-primary" />
              <span>Trusted services from a professional team.</span>
            </li>
          </ul>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image
            src="/works/gd/service.jpg"
            alt="Graphic design team"
            width={600}
            height={400}
            className="rounded-3xl w-full max-w-xl h-auto object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default GraphicDesignFeatures1;

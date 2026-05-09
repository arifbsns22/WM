"use client";

import { Separator } from "@/components/ui/separator";

type BrandList = {
  image: string;
  name: string;
  lightimg: string;
};

const _brandList: BrandList[] = [
  {
    image: "/logos/clients/gabfit-logo.png",
    lightimg:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-1.svg",
    name: "Brand 1",
  },
  {
    image: "/logos/clients/gabfit-logo.png",
    lightimg:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-2.svg",
    name: "Brand 2",
  },
  {
    image: "/logos/clients/gabfit-logo.png",
    lightimg:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-3.svg",
    name: "Brand 3",
  },
  {
    image: "/logos/clients/gabfit-logo.png",
    lightimg:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-4.svg",
    name: "Brand 4",
  },
  {
    image: "/logos/clients/gabfit-logo.png",
    lightimg:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-5.svg",
    name: "Brand 5",
  },
];

const ContactInfo = () => {
  return (
    <div className="flex flex-col md:gap-12 gap-8">
      <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-left-10 duration-1000 ease-in-out fill-mode-both">
        <div className="flex gap-3 items-center">
          <div className="w-2 h-2 rounded-full bg-teal-400"></div>
          <p className="text-base font-normal text-muted-foreground">
            We can help
          </p>
        </div>

        <p className="text-3xl  md:text-4xl font-medium text-foreground">
          Let’s discuss about your project and take it the next level.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-6 animate-in fade-in slide-in-from-left-10 duration-1000 delay-100 ease-in-out fill-mode-both">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-normal text-muted-foreground">Phone</p>
          <a
            href="tel:+8801750150752"
            className="text-base font-medium text-primary"
          >
            +8801750150752
          </a>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-normal text-muted-foreground">Email</p>
          <a
            href="mailto:watermelondigitalnz@gmail.com"
            className="text-base font-medium text-primary"
          >
            watermelondigitalnz@gmail.com
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-1 animate-in fade-in slide-in-from-left-10 duration-1000 delay-100 ease-in-out fill-mode-both">
        <p className="text-sm font-normal text-muted-foreground">Location</p>
        <p className="text-base font-medium text-primary">
          Ferdous Tower, 5th Floor, Mymensingh Sadar, Mymensingh-2200,
          Bangladesh
        </p>
      </div>
      <Separator orientation="horizontal" />
    </div>
  );
};

export default ContactInfo;

"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type FeatureItem = {
  image: string;
  title: string;
  description: string;
  position?: "left" | "right";
  cornerStyle?: string;
};
const leftFeatures: FeatureItem[] = [
  {
    image: "/logos/branding.png",
    title: "Logo & Branding",
    description:
      "Crafting memorable and timeless brand identities that represent your business",
    cornerStyle: "sm:translate-x-4 sm:rounded-br-[2px]",
  },
  {
    image: "/logos/publicity.png",
    title: "Social Media Graphics",
    description:
      "Engaging visuals designed to boost interaction and strengthen your online presence",
    cornerStyle: "sm:-translate-x-4 sm:rounded-br-[2px]",
  },
  {
    image: "/logos/brochure.png",
    title: "Marketing Materials",
    description:
      "Brochures, posters, and business cards that tell your brand story with style.",
    cornerStyle: "sm:translate-x-4 sm:rounded-tr-[2px]",
  },
];

const rightFeatures: FeatureItem[] = [
  {
    image: "/logos/printing-machine.png",
    title: "Digital & Print Design",
    description:
      "Consistent, high-quality designs ready for both online and offline campaigns.",
    cornerStyle: "sm:-translate-x-4 sm:rounded-bl-[2px]",
  },
  {
    image: "/logos/photography.png",
    title: "Product Photography",
    description:
      "Professional product photography that showcases your items with clarity, style, and precision.",
    cornerStyle: "sm:translate-x-4 sm:rounded-bl-[2px]",
  },
  {
    image: "/logos/package.png",
    title: "Packaging Design",
    description:
      "Creative and functional packaging design that elevates your brand and attracts customers",
    cornerStyle: "sm:-translate-x-4 sm:rounded-tl-[2px]",
  },
];

const FeatureCard = ({ feature }: { feature: FeatureItem }) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl px-4 pt-5 pb-4 text-sm",
        "bg-secondary/50 ring-border ring transition duration-300 hover:shadow-lg",
        feature.cornerStyle,
      )}
    >
      <div className="mb-4 bg-primary/10 p-3 rounded-xl w-fit">
        <Image
          src={feature.image}
          alt={feature.title}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <h2 className="text-foreground mb-2.5 text-2xl font-semibold">
        {feature.title}
      </h2>

      <p className="text-muted-foreground text-base text-pretty">
        {feature.description}
      </p>

      <span className="from-primary/0 via-primary to-primary/0 absolute -bottom-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r opacity-60"></span>
      <span className="absolute inset-0 bg-[radial-gradient(30%_5%_at_50%_100%,hsl(var(--primary)/0.15)_0%,transparent_100%)] opacity-60"></span>
    </div>
  );
};

export default function GraphicFeature() {
  return (
    <section className="pt-20 pb-10" id="features">
      <div className="mx-6 max-w-[1120px] pt-2 pb-16 min-[1150px]:mx-auto">
        <div className="flex flex-col-reverse gap-6 md:grid md:grid-cols-3">
          <div className="flex flex-col gap-6">
            {leftFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>

          <div className="order-[1] mb-6 self-center text-center sm:order-[0] md:mb-0">
            <div className="bg-secondary ring-border relative mx-auto mb-4 w-fit rounded-full px-4 py-2 text-sm ring">
              Features
            </div>

            <h2 className="text-foreground mb-3 text-2xl md:text-[2rem] font-semibold">
              All the services you need, available on our platform
            </h2>

            <p className="text-muted-foreground mx-auto max-w-[18rem]">
              simplifies every step of your graphic design workflow with
              complete tools for planning, managing, and delivering creative
              projects.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {rightFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

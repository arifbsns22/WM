"use client";
import AboutUs from "@/components/home-page/about-us/about-us";
import { Target, WandSparkles, Zap } from "lucide-react";

const aboutusData = [
  {
    icon: WandSparkles,
    title: "Creativity",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Zap,
    title: "Innovation",
    color: "bg-teal-400/10 text-teal-400",
  },
  {
    icon: Target,
    title: "Strategy",
    color: "bg-orange-400/10 text-orange-400",
  },
];

const statisticsCounter = [
  {
    title: "Total Projects Completed",
    count: 93,
  },
  {
    title: "Years of Experience",
    count: 3,
  },
  {
    title: "Country Served",
    count: 7,
  },
];

const AboutAndStats01 = () => {
  return (
    <>
      <AboutUs
        aboutusData={aboutusData}
        statisticsCounter={statisticsCounter}
      />
    </>
  );
};

export default AboutAndStats01;

"use client";

import { HeroScrub } from "@/components/3d-page/hero";
import React from "react";

const ThreeDPage = () => {
  return (
    <HeroScrub
      frameCount={300}
      frameUrl={(i) =>
        `https://raw.githubusercontent.com/duthiljean/ferrari-hero-demo/main/${String(i + 1).padStart(4, "0")}.webp`
      }
      titleTop="3D Design"
      titleBottom="Services"
      accentHex="#3a9b8a"
    />
  );
};

export default ThreeDPage;

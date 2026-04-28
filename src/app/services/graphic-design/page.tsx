import GraphicFeature from "@/components/graphic-design/features";
import IntroAnimation from "@/components/graphic-design/hero";

import React from "react";

const GraphicDesign = () => {
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
    </div>
  );
};

export default GraphicDesign;

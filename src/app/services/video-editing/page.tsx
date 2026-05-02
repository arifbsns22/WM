"use client";
import CTA from "@/components/common components/cta/cta";
import ServiceListCards from "@/components/common components/services-list/service-cards";
import { VideoHeroSection } from "@/components/video-editing/grid-hero";
import VideoEditingGrid from "@/components/video-editing/video-editing-services";
import VideoGallery from "@/components/video-editing/video-gallery";

import React from "react";

const VideoEditingPage = () => {
  return (
    <>
      <VideoHeroSection />
      <VideoGallery />
      <VideoEditingGrid />
      <ServiceListCards/>
      <CTA />
    </>
  );
};

export default VideoEditingPage;

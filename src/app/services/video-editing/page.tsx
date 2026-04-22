import CTA from "@/components/common components/cta/cta";
import VideoEditingGrid from "@/components/video-editing/video-editing-services";
import VideoGallery from "@/components/video-editing/video-gallery";

import React from "react";

const VideoEditingPage = () => {
  return (
    <>
      <VideoGallery />
      <VideoEditingGrid />
      <CTA />
    </>
  );
};

export default VideoEditingPage;

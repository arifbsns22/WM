"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- The ArcGalleryHero Component ---
type ArcGalleryHeroProps = {
  images: string[];
  startAngle?: number;
  endAngle?: number;
  // radius for different screen sizes
  radiusLg?: number;
  radiusMd?: number;
  radiusSm?: number;
  // size of each card for different screen sizes
  cardSizeLg?: number;
  cardSizeMd?: number;
  cardSizeSm?: number;
  // optional extra class on outer section
  className?: string;
};

export const ArcGalleryHero: React.FC<ArcGalleryHeroProps> = ({
  images,
  startAngle = 20,
  endAngle = 160,
  radiusLg = 480,
  radiusMd = 360,
  radiusSm = 260,
  cardSizeLg = 120,
  cardSizeMd = 100,
  cardSizeSm = 80,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({
    radius: radiusLg,
    cardSize: cardSizeLg,
  });
  const [isMounted, setIsMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const radiusOffset = useTransform(smoothProgress, [0, 1], [0, 400]);
  const scrollOpacity = useTransform(smoothProgress, [0, 0.8], [1, 0]);
  const scrollScale = useTransform(smoothProgress, [0, 1], [1, 1.1]);
  const contentY = useTransform(smoothProgress, [0, 1], [0, -100]);

  // Effect to handle responsive resizing of the arc and cards
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDimensions({ radius: radiusSm, cardSize: cardSizeSm });
      } else if (width < 1024) {
        setDimensions({ radius: radiusMd, cardSize: cardSizeMd });
      } else {
        setDimensions({ radius: radiusLg, cardSize: cardSizeLg });
      }
    };

    handleResize(); // Set initial size
    setIsMounted(true);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [radiusLg, radiusMd, radiusSm, cardSizeLg, cardSizeMd, cardSizeSm]);

  // Ensure at least 2 points to distribute angles for the arc calculation
  const count = Math.max(images.length, 2);
  const step = (endAngle - startAngle) / (count - 1);

  return (
    <section
      ref={containerRef}
      className={`relative overflow-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col pt-24 ${className}`}
    >
      {/* Background ring container that controls geometry */}
      <motion.div
        className="relative mx-auto"
        style={{
          width: "100%",
          // Increase height to accommodate expanded radius and floating motion
          height: dimensions.radius * 1.5,
          opacity: scrollOpacity,
          scale: scrollScale,
        }}
      >
        {/* Center pivot for transforms - positioned at bottom center */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
          {/* Each image is positioned on the circle and rotated to face outward */}
          {isMounted &&
            images.map((src, i) => {
              const angle = startAngle + step * i; // degrees
              const angleRad = (angle * Math.PI) / 180;

              return (
                <ArcImage
                  key={i}
                  src={src}
                  index={i}
                  angle={angle}
                  angleRad={angleRad}
                  baseRadius={dimensions.radius}
                  radiusOffset={radiusOffset}
                  cardSize={dimensions.cardSize}
                  zIndex={count - i}
                  onClick={() => setSelectedImage(src)}
                />
              );
            })}
        </div>
      </motion.div>

      {/* Content positioned below the arc */}
      <motion.div
        style={{ y: contentY, opacity: scrollOpacity }}
        className="relative z-10 flex-1 flex items-center justify-center px-6 -mt-40 md:-mt-52 lg:-mt-64"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center max-w-2xl px-6"
        >
          <h1 className="text-3xl mt-[-180px] sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            The Superpower that
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            You need to for growing your Business fast
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => {
                window.open("https://wa.me/8801681583033", "_blank");
              }}
              className="group text-sm font-medium border border-black text-black bg-white hover:text-black dark:hover:text-black hover:bg-white/90 rounded-full flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer"
            >
              <span>Let’s Collaborate</span>
              <div className="p-3 bg-black text-white rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out">
                <ArrowUpRight size={16} />
              </div>
            </Button>
            <Button className="group text-sm font-medium text-white bg-gray-950 hover:text-white dark:hover:text-white hover:bg-gray-950/90 rounded-full border border-white/50 flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer">
              <a href="/contact" className="flex items-center gap-4">
                <span>Contact Us</span>
                <div className="p-3 bg-white text-black rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out">
                  <ArrowUpRight size={16} />
                </div>
              </a>
            </Button>
          </div>
        </motion.div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Sub-component for individual arc images
const ArcImage = ({
  src,
  index,
  angle,
  angleRad,
  baseRadius,
  radiusOffset,
  cardSize,
  zIndex,
  onClick,
}: {
  src: string;
  index: number;
  angle: number;
  angleRad: number;
  baseRadius: number;
  radiusOffset: any;
  cardSize: number;
  zIndex: number;
  onClick: () => void;
}) => {
  const currentRadius = useTransform(
    radiusOffset,
    (latest: number) => baseRadius + latest,
  );
  const x = useTransform(currentRadius, (r) =>
    (Math.cos(angleRad) * r).toFixed(3),
  );
  const y = useTransform(currentRadius, (r) =>
    (Math.sin(angleRad) * r).toFixed(3),
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.05,
      }}
      className="absolute"
      style={{
        width: cardSize,
        height: cardSize,
        left: useTransform(x, (val) => `calc(50% + ${val}px)`),
        bottom: useTransform(y, (val) => `${val}px`),
        transform: "translate(-50%, 50%)",
        zIndex: zIndex,
      }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [angle / 4, angle / 4 + 2, angle / 4],
        }}
        transition={{
          duration: 4 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2,
        }}
        whileHover={{
          scale: 1.1,
          rotate: 0,
          zIndex: 50,
          transition: { duration: 0.2 },
        }}
        onClick={onClick}
        className="rounded-2xl shadow-xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 bg-white dark:bg-gray-800 w-full h-full cursor-pointer"
      >
        <img
          src={src}
          alt={`Memory ${index + 1}`}
          className="block w-full h-full object-cover"
          draggable={false}
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              `https://placehold.co/400x400/334155/e2e8f0?text=Memory`;
          }}
        />
      </motion.div>
    </motion.div>
  );
};

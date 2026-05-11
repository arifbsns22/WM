"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import router from "next/router";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface FlipCardProps {
  src: string;
  index: number;
  total: number;
  phase: AnimationPhase;
  target: {
    x: number;
    y: number;
    rotation: number;
    scale: number;
    opacity: number;
  };
}

// --- FlipCard Component ---
const IMG_WIDTH = 120;
const IMG_HEIGHT = 120;

function FlipCard({ src, index, total, phase, target }: FlipCardProps) {
  return (
    <motion.div
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 35,
        damping: 12,
      }}
      style={{
        position: "absolute",
        width: IMG_WIDTH,
        height: IMG_HEIGHT,
        transformStyle: "preserve-3d",
        perspective: "1200px",
      }}
      className="cursor-pointer group"
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        whileHover={{ rotateY: 180 }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl border border-black/5 dark:border-white/10 shadow-xl bg-white dark:bg-zinc-900"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={src}
            alt={`hero-${index}`}
            className="h-full w-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-black/5 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
        </div>

        {/* Back Face - Glassmorphism */}
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl shadow-2xl bg-zinc-900/90 dark:bg-zinc-950/80 backdrop-blur-md flex flex-col items-center justify-center p-4 border border-white/20"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="text-center">
            <div className="p-2 bg-white/10 rounded-full mb-2 mx-auto w-fit">
              <ArrowUpRight size={14} className="text-white" />
            </div>
            <p className="text-[10px] font-bold text-white/70 uppercase tracking-[0.2em]">
              View
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// --- Main Hero Component ---
const TOTAL_IMAGES = 20;
const MAX_SCROLL = 1500;

const IMAGES = [
  "/works/gd/1.jpg",
  "/works/gd/2.jpg",
  "/works/gd/3.jpg",
  "/works/gd/4.jpg",
  "/works/gd/5.jpg",
  "/works/gd/6.jpg",
  "/works/gd/2.jpg",
  "/works/gd/8.jpg",
  "/works/gd/9.jpg",
  "/works/gd/10.jpg",
  "/works/gd/11.jpg",
  "/works/gd/12.jpg",
  "/works/gd/13.jpg",
  "/works/gd/1.jpg",
  "/works/gd/2.jpg",
  "/works/gd/16.jpg",
  "/works/gd/12.jpg",
  "/works/gd/1.jpg",
  "/works/gd/12.jpg",
  "/works/gd/2.jpg",
];

const lerp = (start: number, end: number, t: number) =>
  start * (1 - t) + end * t;

export default function IntroAnimation() {
  const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const handleResize = (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        setContainerSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    };

    const observer = new ResizeObserver(handleResize);
    observer.observe(containerRef.current);

    setContainerSize({
      width: containerRef.current.offsetWidth,
      height: containerRef.current.offsetHeight,
    });

    return () => observer.disconnect();
  }, []);

  const virtualScroll = useMotionValue(0);
  const scrollRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const width = window.innerWidth;
      const multiplier = width < 768 ? 3.0 : width < 1024 ? 2.0 : 1.0;
      const delta = e.deltaY * multiplier;

      if (scrollRef.current >= MAX_SCROLL && delta > 0) return;
      e.preventDefault();
      const newScroll = Math.min(
        Math.max(scrollRef.current + delta, 0),
        MAX_SCROLL,
      );
      scrollRef.current = newScroll;
      virtualScroll.set(newScroll);
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      const rawDeltaY = touchStartY - touchY;
      touchStartY = touchY;

      const width = window.innerWidth;
      const multiplier = width < 768 ? 3.5 : width < 1024 ? 2.5 : 1.0;
      const deltaY = rawDeltaY * multiplier;

      if (scrollRef.current >= MAX_SCROLL && deltaY > 0) return;
      e.preventDefault();
      const newScroll = Math.min(
        Math.max(scrollRef.current + deltaY, 0),
        MAX_SCROLL,
      );
      scrollRef.current = newScroll;
      virtualScroll.set(newScroll);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    container.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, [virtualScroll]);

  const morphProgress = useTransform(virtualScroll, [0, 400], [0, 1]);
  const smoothMorph = useSpring(morphProgress, { stiffness: 60, damping: 20 });

  const scrollRotate = useTransform(virtualScroll, [400, 1500], [0, 360]);
  const smoothScrollRotate = useSpring(scrollRotate, {
    stiffness: 60,
    damping: 20,
  });

  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const normalizedX = (relativeX / rect.width) * 2 - 1;
      mouseX.set(normalizedX * 100);
    };
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX]);

  useEffect(() => {
    const timer1 = setTimeout(() => setIntroPhase("line"), 500);
    const timer2 = setTimeout(() => setIntroPhase("circle"), 2500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const scatterPositions = useMemo(() => {
    return IMAGES.map(() => ({
      x: (Math.random() - 0.5) * 2000,
      y: (Math.random() - 0.5) * 1200,
      rotation: (Math.random() - 0.5) * 360,
      scale: 0.5,
      opacity: 0,
    }));
  }, []);


  const [morphValue, setMorphValue] = useState(0);
  const [rotateValue, setRotateValue] = useState(0);
  const [parallaxValue, setParallaxValue] = useState(0);

  useEffect(() => {
    const unsubscribeMorph = smoothMorph.on("change", setMorphValue);
    const unsubscribeRotate = smoothScrollRotate.on("change", setRotateValue);
    const unsubscribeParallax = smoothMouseX.on("change", setParallaxValue);
    return () => {
      unsubscribeMorph();
      unsubscribeRotate();
      unsubscribeParallax();
    };
  }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

  const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
  const contentY = useTransform(smoothMorph, [0.8, 1], [40, 0]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-[#FAFAFA] dark:bg-zinc-950 overflow-hidden pt-20"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 dark:opacity-30 bg-[radial-gradient(circle_at_center,_#27272a_0%,_transparent_70%)]" />
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="flex h-full w-full flex-col items-center justify-center perspective-2000">
        {/* Intro Text */}
        <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
            animate={
              introPhase === "circle" && morphValue < 0.5
                ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" }
                : { opacity: 0, filter: "blur(20px)" }
            }
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-xl sm:text-2xl lg:text-6xl font-black tracking-tight text-zinc-900 dark:text-white"
          >
            Crafting Digital <br />
            <span
              className={`${instrumentSerif.className} text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-600 to-rose-600 dark: from-orange-500 via-pink-600 to-rose-600`}
            >
              Masterpieces
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={
              introPhase === "circle" && morphValue < 0.5
                ? { opacity: 0.6 - morphValue }
                : { opacity: 0 }
            }
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-8 flex flex-col items-center gap-4"
          >
            <p className="text-xs sm:text-sm font-bold tracking-[0.4em] text-black dark:text-indigo-400 uppercase">
              Scroll Down to Begin Your Journey
            </p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-1 border border-black/10 dark:border-white/20 rounded-full"
            >
              <MousePointer2
                size={16}
                className="text-black/30 dark:text-white/40"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Active Content */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="absolute top-0 pt-32 z-10 flex flex-col items-center justify-start text-center pointer-events-none px-6 w-full"
        >
          <h2 className="text-3xl lg:text-6xl font-bold text-zinc-900 dark:text-white tracking-tighter mb-6">
            We Build the Future <br /> of Your Brand
          </h2>
          <p className="text-base md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-10">
            Combining strategy, design, and technology to elevate your business
            beyond the ordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
            <Button
              onClick={() => {
                window.open("https://wa.me/8801681583033", "_blank");
              }}
              className="group text-sm font-medium bg-black text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 rounded-sm flex items-center gap-4 p-1 ps-6 h-14 cursor-pointer"
            >
              <span>Work with Us</span>
              <div className="p-3 bg-white text-black dark:bg-black dark:text-white rounded-full group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={20} />
              </div>
            </Button>
          </div>
        </motion.div>

        {/* Main Animation Container */}
        <div className="relative flex items-center justify-center w-full h-full">
          {IMAGES.slice(0, TOTAL_IMAGES).map((src, i) => {
            let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

            if (introPhase === "scatter") {
              target = scatterPositions[i];
            } else if (introPhase === "line") {
              const lineSpacing = 140;
              const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
              const lineX = i * lineSpacing - lineTotalWidth / 2;
              target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
            } else {
              const isMobile = containerSize.width < 768;
              const minDimension = Math.min(
                containerSize.width,
                containerSize.height,
              );
              const circleRadius = Math.min(minDimension * 0.4, 400);
              const circleAngle = (i / TOTAL_IMAGES) * 360;
              const circleRad = (circleAngle * Math.PI) / 180;
              const circlePos = {
                x: Math.cos(circleRad) * circleRadius,
                y: Math.sin(circleRad) * circleRadius,
                rotation: circleAngle + 90,
              };

              const baseRadius = Math.min(
                containerSize.width,
                containerSize.height * 1.5,
              );
              const arcRadius = baseRadius * (isMobile ? 1.5 : 1.2);
              const arcApexY = containerSize.height * (isMobile ? 0.3 : 0.2);
              const arcCenterY = arcApexY + arcRadius;
              const spreadAngle = isMobile ? 110 : 140;
              const startAngle = -90 - spreadAngle / 2;
              const step = spreadAngle / (TOTAL_IMAGES - 1);
              const scrollProgress = Math.min(
                Math.max(rotateValue / 360, 0),
                1,
              );
              const maxRotation = spreadAngle * 0.8;
              const boundedRotation = -scrollProgress * maxRotation;
              const currentArcAngle = startAngle + i * step + boundedRotation;
              const arcRad = (currentArcAngle * Math.PI) / 180;

              const arcPos = {
                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                rotation: currentArcAngle + 90,
                scale: isMobile ? 1.5 : 2.0,
              };

              target = {
                x: lerp(circlePos.x, arcPos.x, morphValue),
                y: lerp(circlePos.y, arcPos.y, morphValue),
                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                scale: lerp(1, arcPos.scale, morphValue),
                opacity: 1,
              };
            }

            return (
              <FlipCard
                key={i}
                src={src}
                index={i}
                total={TOTAL_IMAGES}
                phase={introPhase}
                target={target}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

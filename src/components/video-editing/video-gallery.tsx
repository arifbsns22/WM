"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  Variants,
  Transition,
} from "framer-motion";
import {
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Expand,
  Minimize,
  Share2,
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  thumbnailUrl: string;
  videoUrl: string;
  description: string;
}

interface Category {
  id: number;
  name: string;
}

interface AnimationVariants extends Variants {
  hidden: {
    opacity: number;
    y?: number;
    scale?: number;
    width?: number | string;
  };
  visible: {
    opacity: number;
    y?: number;
    scale?: number;
    width?: number | string;
    transition: Transition;
  };
}

const getYoutubeThumbnail = (url: string) => {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11
    ? `https://i.ytimg.com/vi/${match[2]}/hq720.jpg`
    : "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=600&fit=crop";
};

const categories: Category[] = [
  { id: 1, name: "Reel" },
  { id: 2, name: "Cinematic" },
  { id: 3, name: "Motion" },
  { id: 4, name: "Commercial" },
];

const projects: Project[] = [
  {
    id: 1,
    title: "Cinematic Journey",
    category: "reel",
    thumbnailUrl: getYoutubeThumbnail(
      "https://www.youtube.com/embed/PiPCXXvQamo",
    ),
    videoUrl: "https://www.youtube.com/embed/PiPCXXvQamo",
    description:
      "A breathtaking visual narrative exploring the depths of human emotion through stunning cinematography and compelling storytelling.",
  },
  {
    id: 2,
    title: "Brand Vision",
    category: "reel",
    thumbnailUrl: getYoutubeThumbnail(
      "https://www.youtube.com/embed/EXFYrtrYXZk",
    ),
    videoUrl: "https://www.youtube.com/embed/EXFYrtrYXZk",
    description:
      "A dynamic commercial piece that captures the essence of modern lifestyle and brand identity.",
  },
  {
    id: 3,
    title: "Documentary Truth",
    category: "reel",
    thumbnailUrl: getYoutubeThumbnail(
      "https://www.youtube.com/embed/cxQr5gb6-Dg",
    ),
    videoUrl: "https://www.youtube.com/embed/cxQr5gb6-Dg",
    description:
      "An intimate documentary exploring real stories and authentic human experiences.",
  },
  {
    id: 4,
    title: "Musical Harmony",
    category: "reel",
    thumbnailUrl: getYoutubeThumbnail(
      "https://www.youtube.com/embed/osXstBGPNdQ",
    ),
    videoUrl: "https://www.youtube.com/embed/osXstBGPNdQ",
    description:
      "A vibrant music video that blends visual artistry with rhythmic storytelling.",
  },
  {
    id: 5,
    title: "Tuscany Wedding Trailer | Emma & James",
    category: "cinematic",
    thumbnailUrl: getYoutubeThumbnail(
      "https://www.youtube.com/embed/LlWAF6ykvsA",
    ),
    videoUrl: "https://www.youtube.com/embed/LlWAF6ykvsA",
    description:
      "A cinematic trailer of Emma and James’s wedding in the Tuscan hills—pure romance, festivity, and family love.",
  },
  {
    id: 6,
    title: "Tuscany Wedding Trailer | Emma & James",
    category: "cinematic",
    thumbnailUrl: getYoutubeThumbnail(
      "https://www.youtube.com/embed/D4VIxOWRYSQ",
    ),
    videoUrl: "https://www.youtube.com/embed/D4VIxOWRYSQ",
    description:
      "A cinematic trailer of Emma and James’s wedding in the Tuscan hills—pure romance, festivity, and family love.",
  },
  {
    id: 7,
    title: "Tuscany Wedding Trailer | Emma & James",
    category: "cinematic",
    thumbnailUrl: getYoutubeThumbnail(
      "https://www.youtube.com/embed/3S6DVBLVvaM",
    ),
    videoUrl: "https://www.youtube.com/embed/3S6DVBLVvaM",
    description:
      "A cinematic trailer of Emma and James’s wedding in the Tuscan hills—pure romance, festivity, and family love.",
  },
  {
    id: 8,
    title: "Tuscany Wedding Trailer | Emma & James",
    category: "cinematic",
    thumbnailUrl: getYoutubeThumbnail(
      "https://www.youtube.com/embed/Ckasp8D9weU",
    ),
    videoUrl: "https://www.youtube.com/embed/Ckasp8D9weU",
    description:
      "A cinematic trailer of Emma and James’s wedding in the Tuscan hills—pure romance, festivity, and family love.",
  },
  {
    id: 9,
    title: "Tuscany Wedding Trailer | Emma & James",
    category: "motion",
    thumbnailUrl: getYoutubeThumbnail(
      "https://www.youtube.com/embed/dgIOZgDDeBE",
    ),
    videoUrl: "https://www.youtube.com/embed/dgIOZgDDeBE",
    description:
      "A cinematic trailer of Emma and James’s wedding in the Tuscan hills—pure romance, festivity, and family love.",
  },
  {
    id: 10,
    title: "Tuscany Wedding Trailer | Emma & James",
    category: "motion",
    thumbnailUrl: getYoutubeThumbnail(
      "https://www.youtube.com/embed/ox635qWLTBw",
    ),
    videoUrl: "https://www.youtube.com/embed/ox635qWLTBw",
    description:
      "A cinematic trailer of Emma and James’s wedding in the Tuscan hills—pure romance, festivity, and family love.",
  },
  {
    id: 11,
    title: "Tuscany Wedding Trailer | Emma & James",
    category: "motion",
    thumbnailUrl: getYoutubeThumbnail(
      "https://www.youtube.com/embed/t90EtDovG30",
    ),
    videoUrl: "https://www.youtube.com/embed/t90EtDovG30",
    description:
      "A cinematic trailer of Emma and James’s wedding in the Tuscan hills—pure romance, festivity, and family love.",
  },
  {
    id: 12,
    title: "Tuscany Wedding Trailer | Emma & James",
    category: "motion",
    thumbnailUrl: getYoutubeThumbnail(
      "https://www.youtube.com/embed/wZdeg2rdMYo",
    ),
    videoUrl: "https://www.youtube.com/embed/wZdeg2rdMYo",
    description:
      "A cinematic trailer of Emma and James’s wedding in the Tuscan hills—pure romance, festivity, and family love.",
  },
  {
    id: 13,
    title: "Tuscany Wedding Trailer | Emma & James",
    category: "motion",
    thumbnailUrl: getYoutubeThumbnail(
      "https://www.youtube.com/embed/d4O3ucZVsac",
    ),
    videoUrl: "https://www.youtube.com/embed/d4O3ucZVsac",
    description:
      "A cinematic trailer of Emma and James’s wedding in the Tuscan hills—pure romance, festivity, and family love.",
  },
  {
    id: 14,
    title: "Commercial Video Ad for a Real Estate Company",
    category: "commercial",
    thumbnailUrl: getYoutubeThumbnail(
      "https://www.youtube.com/embed/P2UggxpYwVw",
    ),
    videoUrl: "https://www.youtube.com/embed/P2UggxpYwVw",
    description:
      "A cinematic trailer of Emma and James’s wedding in the Tuscan hills—pure romance, festivity, and family love.",
  },
];

const useScrollAnimation = () => {
  const containerAnimation: AnimationVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemAnimation: AnimationVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return { containerAnimation, itemAnimation };
};

const VideoGallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("all");
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { containerAnimation, itemAnimation } = useScrollAnimation();

  const categoryOptions = [
    "all",
    ...categories.map((cat) => cat.name.toLowerCase()),
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        category === "all" || project.category === category;
      return matchesCategory;
    });
  }, [category]);

  const openProject = useCallback(
    (project: Project) => {
      const projectIndex = filteredProjects.findIndex(
        (p) => p.id === project.id,
      );
      setCurrentProjectIndex(projectIndex);
      setSelectedProject(project);
      setIsPlaying(false);
      document.body.style.overflow = "hidden";
    },
    [filteredProjects],
  );

  const closeProject = useCallback(() => {
    setSelectedProject(null);
    setIsPlaying(false);
    setIsFullscreen(false);
    document.body.style.overflow = "auto";
  }, []);

  const navigateProject = useCallback(
    (direction: "next" | "prev") => {
      const newIndex =
        direction === "next"
          ? (currentProjectIndex + 1) % filteredProjects.length
          : (currentProjectIndex - 1 + filteredProjects.length) %
            filteredProjects.length;

      setCurrentProjectIndex(newIndex);
      setSelectedProject(filteredProjects[newIndex]);
      setIsPlaying(false);
    },
    [currentProjectIndex, filteredProjects],
  );

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(true);
  };

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen((prev) => !prev);
  }, []);

  const handleShare = useCallback(async () => {
    if (navigator.share && selectedProject) {
      try {
        await navigator.share({
          title: selectedProject.title,
          text: selectedProject.description,
          url: window.location.href,
        });
      } catch {
        navigator.clipboard.writeText(window.location.href);
      }
    }
  }, [selectedProject]);

  const getEmbedUrl = (url: string): string => {
    if (!url) return "";
    if (url.includes("youtube")) {
      return url + "?autoplay=1&rel=0";
    } else if (url.includes("vimeo")) {
      return url + "?autoplay=1";
    }
    return url;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      switch (e.key) {
        case "Escape":
          closeProject();
          break;
        case "ArrowLeft":
          e.preventDefault();
          navigateProject("prev");
          break;
        case "ArrowRight":
          e.preventDefault();
          navigateProject("next");
          break;
        case " ":
          e.preventDefault();
          if (!isPlaying) {
            setIsPlaying(true);
          }
          break;
        case "f":
        case "F":
          e.preventDefault();
          toggleFullscreen();
          break;
        case "s":
        case "S":
          e.preventDefault();
          handleShare();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [
    selectedProject,
    isPlaying,
    navigateProject,
    closeProject,
    handleShare,
    toggleFullscreen,
  ]);

  const handleImageError = (id: number) => {
    setImageError((prev) => ({ ...prev, [id]: true }));
  };

  const buttonHoverAnimation = {
    scale: 1.05,
    transition: {
      stiffness: 400,
      damping: 10,
    },
  };

  const cardHoverAnimation = {
    scale: 1.03,
    y: -8,
    transition: {
      stiffness: 300,
      damping: 20,
    },
  };

  return (
    <>
      <section
        id="gallery"
        className="py-6 sm:py-16 md:py-20 min-h-screen relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            ref={ref}
            variants={containerAnimation}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.h2
              variants={itemAnimation}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-red-500 tracking-tight"
            >
              Our Popular Portfolio
            </motion.h2>
            <motion.div
              variants={itemAnimation}
              className="w-24 h-1 bg-black mx-auto mb-6"
            />
            <motion.p
              variants={itemAnimation}
              className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
            >
              Explore a curated selection of cinematic projects showcasing
              storytelling and visual artistry.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerAnimation}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-12 sm:mb-16"
          >
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {categoryOptions.map((cat) => (
                <motion.button
                  key={cat}
                  variants={itemAnimation}
                  className={`px-6 py-3 rounded uppercase tracking-widest text-sm font-semibold transition-all duration-300 ${
                    category === cat
                      ? "bg-white text-black"
                      : "border border-gray-600 text-gray-500 hover:border-black hover:text-black"
                  } focus:outline-none focus:border-white`}
                  onClick={() => setCategory(cat)}
                  whileHover={buttonHoverAnimation}
                  whileTap={{ scale: 0.95 }}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            layout
            variants={containerAnimation}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  variants={itemAnimation}
                  className="relative group cursor-pointer rounded overflow-hidden h-72 sm:h-80 bg-gray-900 border border-gray-800"
                  onClick={() => openProject(project)}
                  whileHover={cardHoverAnimation}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                >
                  {!imageError[project.id] ? (
                    <img
                      src={project.thumbnailUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={() => handleImageError(project.id)}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                      <span className="text-gray-400 text-sm font-medium">
                        Image unavailable
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                    <motion.h3
                      className="text-lg sm:text-xl font-bold text-white mb-1"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-300 text-sm uppercase tracking-wider mb-3"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.category}
                    </motion.p>
                    <motion.div
                      className="flex items-center space-x-3"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="w-12 h-12 rounded bg-white flex items-center justify-center">
                        <Play className="text-black ml-1" size={16} />
                      </div>
                      <span className="text-white text-sm font-medium">
                        View Project
                      </span>
                    </motion.div>
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 rounded text-xs text-gray-300 uppercase tracking-wider font-semibold">
                    {project.category}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">
                No projects found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setCategory("all");
                }}
                className="mt-4 px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6 ${isFullscreen ? "p-0" : ""}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProject}
            >
              <motion.div
                ref={modalRef}
                className={`relative bg-black w-full overflow-y-auto rounded shadow border border-gray-800 ${
                  isFullscreen
                    ? "max-w-none max-h-none h-full rounded-none"
                    : "max-w-6xl max-h-[90vh]"
                }`}
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                transition={{ damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center p-4 bg-gradient-to-b from-black/80 to-transparent">
                  <div className="flex items-center space-x-4">
                    <span className="text-white text-sm">
                      {currentProjectIndex + 1} / {filteredProjects.length}
                    </span>
                    <span className="text-gray-400 text-sm">
                      Use ← → to navigate
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handleShare}
                      className="w-10 h-10 rounded bg-gray-800/80 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
                      title="Share (S)"
                    >
                      <Share2 size={16} />
                    </button>
                    <button
                      onClick={toggleFullscreen}
                      className="w-10 h-10 rounded bg-gray-800/80 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
                      title="Fullscreen (F)"
                    >
                      {isFullscreen ? (
                        <Minimize size={16} />
                      ) : (
                        <Expand size={16} />
                      )}
                    </button>
                    <button
                      onClick={closeProject}
                      className="w-10 h-10 rounded bg-gray-800/80 flex items-center justify-center text-white hover:bg-gray-500 transition-colors duration-300"
                      title="Close (Esc)"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>

                {filteredProjects.length > 1 && (
                  <>
                    <button
                      onClick={() => navigateProject("prev")}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded bg-black/60 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
                      title="Previous (←)"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() => navigateProject("next")}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded bg-black/60 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
                      title="Next (→)"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                <div
                  className={`relative bg-black ${isFullscreen ? "h-full" : "aspect-video"}`}
                >
                  {isPlaying ? (
                    <iframe
                      src={getEmbedUrl(selectedProject.videoUrl)}
                      className="w-full h-full"
                      title={selectedProject.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img
                        src={selectedProject.thumbnailUrl}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.button
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded bg-white flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={handlePlayClick}
                          title="Play (Space)"
                        >
                          <Play className="text-black ml-1" size={24} />
                        </motion.button>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default VideoGallery;

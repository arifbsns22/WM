"use client";
import type React from "react";
import { useEffect, useState } from "react";
import {
  SiLaravel,
  SiNextdotjs,
  SiReact,
  SiShopify,
  SiWordpress,
} from "react-icons/si";

// --- ICON MAP (WITH BRAND COLORS) ---
type IconType = (props: any) => React.ReactNode;

const iconMap: Record<string, IconType> = {
  wordpress: (props) => <SiWordpress {...props} color="#21759B" />,
  react: (props) => <SiReact {...props} color="#61DAFB" />,
  next: (props) => {
    const isDark =
      typeof window !== "undefined" &&
      document.documentElement.classList.contains("dark");

    return <SiNextdotjs {...props} color={isDark ? "#fff" : "#000"} />;
  },
  shopify: (props) => <SiShopify {...props} color="#95BF47" />,
  laravel: (props) => <SiLaravel {...props} color="#FF2D20" />,
};

// --- TYPES ---
type FrameworkKey = keyof typeof iconMap;

// --- FRAMEWORK BUTTON ---
interface FrameworkPillProps {
  framework: FrameworkKey;
  text: string;
  active: boolean;
  onClick: () => void;
}

const FrameworkPill = ({
  framework,
  text,
  active,
  onClick,
}: FrameworkPillProps) => {
  const Icon = iconMap[framework];

  return (
    <button
      onClick={onClick}
      className={`
        group inline-flex items-center px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105
        ${
          active
            ? "bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 shadow-md"
            : "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-900 hover:shadow-md"
        }
      `}
    >
      <Icon className="w-5 h-5 mr-2 transition group-hover:scale-110" />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {text}
      </span>
    </button>
  );
};

// --- PREVIEW ---
const CodeDisplay = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div
      className={`relative max-w-5xl mx-auto px-4 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 rounded-3xl scale-105 opacity-40 blur-xl"></div>

      <div className="relative bg-white dark:bg-gray-950 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-400 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-green-400 rounded-full" />
          </div>
          <span className="text-xs font-medium text-purple-600">
            Watermelon Digital
          </span>
        </div>

        <img
          src="/works/web/dashboard.png"
          alt="preview"
          className="w-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "https://placehold.co/1200x600/111827/FFFFFF?text=Image+Not+Found";
          }}
        />
      </div>
    </div>
  );
};

// --- MAIN ---
export default function WebHero() {
  const [activeTab, setActiveTab] = useState<FrameworkKey>("react");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const frameworks: { id: FrameworkKey; name: string }[] = [
    { id: "wordpress", name: "WordPress" },
    { id: "react", name: "React" },
    { id: "next", name: "Next.js" },
    { id: "shopify", name: "Shopify" },
    { id: "laravel", name: "Laravel" },
  ];

  return (
    <div className="font-sans">
      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.5s ease-out forwards; }
      `}</style>

      <div className="min-h-screen bg-gray-50 dark:bg-black py-12 px-4 transition-colors">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
            MODERN STACK
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Build with Modern Technologies
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
            We use powerful frameworks and platforms to build fast, scalable,
            and high-performing digital products.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {frameworks.map((fw) => (
              <FrameworkPill
                key={fw.id}
                framework={fw.id}
                text={fw.name}
                active={activeTab === fw.id}
                onClick={() => setActiveTab(fw.id)}
              />
            ))}
          </div>

          {/* Preview */}
          <div className={isVisible ? "animate-slide-up" : "opacity-0"}>
            <CodeDisplay isVisible={isVisible} />
          </div>
        </div>
      </div>
    </div>
  );
}

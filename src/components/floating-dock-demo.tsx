import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconList,
  IconSend,
  IconClipboardText,
  IconLayoutGridAdd,
} from "@tabler/icons-react";

export default function FloatingNavBar() {
  const links = [
    {
      title: "Services",
      icon: <IconList className="h-full w-full text-black dark:text-white" />,
      href: "/services",
    },
    {
      title: "Projects",
      icon: (
        <IconLayoutGridAdd className="h-full w-fulltext-black dark:text-white" />
      ),

      href: "/projects",
    },
    {
      title: "Home",
      icon: <img src="/logos/wm-icon.png" width={25} height={25} alt="Home" />,
      href: "/",
    },
    {
      title: "About Us",
      icon: (
        <IconClipboardText className="h-full w-fulltext-black dark:text-white" />
      ),
      href: "#",
    },

    {
      title: "Contact Us",
      icon: <IconSend className="h-full w-fulltext-black dark:text-white" />,
      href: "#",
    },
  ];
  return (
    <FloatingDock
      desktopClassName="
      fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999]
      backdrop-blur-md bg-white/30 dark:bg-black/30
      border border-white/20 shadow-2xl
    "
      mobileClassName="translate-y-20"
      items={links}
    />
  );
}

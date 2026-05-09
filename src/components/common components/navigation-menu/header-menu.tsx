"use client";
import {
  FileText,
  GlobeIcon,
  Handshake,
  HelpCircle,
  LayersIcon,
  Leaf,
  ListTodoIcon,
  type LucideIcon,
  MegaphoneIcon,
  PhoneCallIcon,
  RotateCcw,
  Shield,
  Star,
  UserPlusIcon,
  Users,
} from "lucide-react";
// Fixed: navigation menu items now use proper keys
import React from "react";

import { createPortal } from "react-dom";
import Logo from "@/assets/logo/logo";
import { ThemeSwitch } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { MenuToggleIcon } from "./menu-toggle-icon";
import { MobileIcon } from "@radix-ui/react-icons";

type LinkItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  description?: string;
};

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn("sticky top-0 z-50 w-full border-b border-transparent", {
        "bg-background/95 supports-backdrop-filter:bg-background/50 border-border backdrop-blur-lg":
          scrolled,
      })}
    >
      <nav className="mx-auto flex h-18 w-full max-w-5xl items-center justify-between px-4">
        <div className="flex items-center gap-20">
          <a href="/" className="hover:bg-accent rounded-md p-2">
            <Logo className="gap-3" />
          </a>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <a
                  href="/"
                  className="px-4 text-1xl font-medium hover:bg-accent rounded-md p-2"
                >
                  Home
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-1xl font-medium">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-background p-1 pr-1.5">
                  <ul className="bg-popover grid w-lg grid-cols-2 gap-2 rounded-md border p-2 shadow">
                    {servicesLinks.map((item) => (
                      <li key={item.title}>
                        <ListItem {...item} />
                      </li>
                    ))}
                  </ul>
                  <div className="p-2">
                    <p className="text-muted-foreground text-sm">
                      Interested?{" "}
                      <a
                        href="https://api.whatsapp.com/send/?phone=8801681583033&text&type=phone_number&app_absent=0"
                        className="text-foreground font-medium hover:underline"
                      >
                        Schedule a meeting
                      </a>
                    </p>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a
                  href="/about"
                  className="px-4 text-1xl font-medium hover:bg-accent rounded-md p-2"
                >
                  About
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a
                  href="/contact"
                  className="px-4 text-1xl font-medium hover:bg-accent rounded-md p-2"
                >
                  Contact
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <ThemeSwitch />

          <Button
            onClick={() => {
              window.open("https://wa.me/+8801681583033", "_blank");
            }}
          >
            Let's Talk
          </Button>
        </div>
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>
      <MobileMenu
        open={open}
        className="flex flex-col justify-between gap-2 overflow-y-auto"
      >
        <NavigationMenu className="max-w-full">
          <NavigationMenuList className="flex w-full flex-col gap-y-2">
            <span className="text-sm font-semibold text-muted-foreground px-2 pt-2">
              Our Services
            </span>
            {servicesLinks.map((link) => (
              <NavigationMenuItem key={link.title} className="w-full">
                <ListItem {...link} />
              </NavigationMenuItem>
            ))}
            <span className="text-sm font-semibold text-muted-foreground px-2 pt-2">
              Company
            </span>
            {companyLinks.map((link) => (
              <NavigationMenuItem key={link.title} className="w-full">
                <ListItem {...link} />
              </NavigationMenuItem>
            ))}
            {companyLinks2.map((link) => (
              <NavigationMenuItem key={link.title} className="w-full">
                <ListItem {...link} />
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-col gap-2">
          <Button
            onClick={() => {
              window.open("https://app.watermelondigi.com/public/", "_blank");
            }}
            variant="outline"
            className="w-full bg-transparent"
          >
            Log In
          </Button>
          <Button className="w-full">Let's Talk</Button>
        </div>
      </MobileMenu>
    </header>
  );
}

type MobileMenuProps = React.ComponentProps<"div"> & {
  open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
  if (!open || typeof window === "undefined") return null;

  return createPortal(
    <div
      id="mobile-menu"
      className={cn(
        "bg-background/95 supports-backdrop-filter:bg-background/50 backdrop-blur-lg",
        "fixed top-18 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y md:hidden",
      )}
    >
      <div
        data-slot={open ? "open" : "closed"}
        className={cn(
          "data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out",
          "size-full p-4",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}

function ListItem({
  title,
  description,
  icon: Icon,
  className,
  href,
  ...props
}: React.ComponentProps<typeof NavigationMenuLink> & LinkItem) {
  return (
    <NavigationMenuLink
      href={href}
      className={cn(
        "w-full flex flex-row items-start gap-x-3 data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground rounded-sm p-2",
        className,
      )}
      {...props}
    >
      <div className="bg-background/40 flex aspect-square size-12 items-center justify-center rounded-md border shadow-sm shrink-0">
        <Icon className="text-foreground size-5" />
      </div>
      <div className="flex flex-col items-start justify-center">
        <span className="font-medium text-sm">{title}</span>
        <span className="text-muted-foreground text-xs leading-snug">
          {description}
        </span>
      </div>
    </NavigationMenuLink>
  );
}

const servicesLinks: LinkItem[] = [
  {
    title: "All Services",
    href: "/services",
    description: "Explore our full range of services",
    icon: ListTodoIcon,
  },
  {
    title: "Website Development",
    href: "/services/web-development",
    description: "Build fast, mordern and responsive websites",
    icon: GlobeIcon,
  },
  {
    title: "Video Editing ",
    href: "/services/video-editing",
    description:
      "Create engaging, polished videos that captivate your audience",
    icon: LayersIcon,
  },
  {
    title: "Graphic Design",
    href: "/services/graphic-design",
    description: "Create stunning visuals that make your brand stand out",
    icon: UserPlusIcon,
  },
  {
    title: "Marketing Solutions",
    href: "/services/marketing",
    description: "Boost your online presence and drive growth",
    icon: MegaphoneIcon,
  },
];

const companyLinks: LinkItem[] = [
  {
    title: "About Us",
    href: "/about",
    description: "Who We Are",
    icon: Users,
  },
  {
    title: "Contact Us",
    href: "/contact",
    description: "Let's Work Together",
    icon: PhoneCallIcon,
  },
];

const companyLinks2: LinkItem[] = [];

function useScroll(threshold: number) {
  const [scrolled, setScrolled] = React.useState(false);

  const onScroll = React.useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  // also check on first load
  React.useEffect(() => {
    onScroll();
  }, [onScroll]);

  return scrolled;
}

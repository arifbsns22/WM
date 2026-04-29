"use client";
import React, { useState, useRef, useEffect } from "react";

const classNames = (
  ...classes: (string | boolean | undefined | null)[]
): string => {
  return classes.filter(Boolean).join(" ");
};

interface Person {
  name: string;
  title: string;
  img: string;
}

const persons: Person[] = [
  {
    name: "Aria Rossi",
    title: "Lead Architect",
    img: "/works/gd/1.jpg",
  },
  {
    name: "Leo Carter",
    title: "Creative Director",
    img: "/works/gd/2.jpg",
  },
  {
    name: "Mia Chen",
    title: "Senior Developer",
    img: "/works/gd/3.jpg",
  },
  {
    name: "Kai Tanaka",
    title: "UX/UI Designer",
    img: "/works/gd/4.jpg",
  },
  {
    name: "Zoe Williams",
    title: "Project Manager",
    img: "/works/gd/5.jpg",
  },
  {
    name: "Ethan Hunt",
    title: "Marketing Head",
    img: "/works/gd/6.jpg",
  },
  {
    name: "Ethan Hunt",
    title: "Marketing Head",
    img: "/works/gd/1.jpg",
  },
  {
    name: "Ethan Hunt",
    title: "Marketing Head",
    img: "/works/gd/8.jpg",
  },
  {
    name: "Ethan Hunt",
    title: "Marketing Head",
    img: "/works/gd/9.jpg",
  },
  {
    name: "Chloe Garcia",
    title: "Data Scientist",
    img: "/works/gd/10.jpg",
  },
  {
    name: "Noah King",
    title: "Brand Strategist",
    img: "/works/gd/11.jpg",
  },
  {
    name: "Ava Martinez",
    title: "Content Creator",
    img: "/works/gd/13.jpg",
  },
  {
    name: "Ava Martinez",
    title: "Content Creator",
    img: "/works/gd/14.jpg",
  },
];

function ImageCarousel() {
  const [activeItem, setActiveItem] = useState(Math.floor(persons.length / 2));
  const wrapperRef = useRef<HTMLUListElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    wrapperRef.current.style.setProperty(
      "--transition",
      "600ms cubic-bezier(0.22, 0.61, 0.36, 1)",
    );

    timeoutRef.current = setTimeout(() => {
      wrapperRef.current?.style.removeProperty("--transition");
    }, 900);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeItem]);

  return (
    <div className="w-full font-sans">
      <div className="w-full  p-4 sm:p-6 md:p-8">
        <ul
          ref={wrapperRef}
          className="flex w-full flex-col gap-2 md:h-[640px] md:flex-row md:gap-[1.5%]"
        >
          {persons.map((person, index) => (
            <li
              onClick={() => setActiveItem(index)}
              aria-current={activeItem === index}
              className={classNames(
                "relative group cursor-pointer transition-all duration-500 ease-in-out",
                "md:w-[8%]",
                "md:[&[aria-current='true']]:w-[120%]",
                "md:[transition:width_var(--transition,300ms_ease_in)]",
              )}
              key={person.name}
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white  transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:z-10 transform-gpu">
                <img
                  className={classNames(
                    "absolute left-1/2 top-1/2 h-full w-auto max-w-none -translate-x-1/2 -translate-y-1/2 object-cover transition-all duration-500 ease-in-out",
                    activeItem === index
                      ? "scale-105 grayscale-0"
                      : "scale-100 grayscale",
                  )}
                  src={person.img}
                  alt={person.name}
                  width="1500"
                  height="1000"
                />
                <div
                  className={classNames(
                    "absolute inset-0 transition-opacity duration-500",
                    activeItem === index ? "opacity-100" : "opacity-0",

                    "md:absolute",
                  )}
                />
                <div
                  className={classNames(
                    "absolute bottom-0 left-0 w-full p-6 text-white transition-[transform,opacity] duration-700 ease-in-out md:p-8",
                    activeItem === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0",
                  )}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ImageCarousel;

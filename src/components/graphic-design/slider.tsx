"use client";
import { useEffect, useRef, useState } from "react";

const classNames = (
  ...classes: (string | boolean | undefined | null)[]
): string => {
  return classes.filter(Boolean).join(" ");
};

interface Person {
 
  img: string;
}

const persons: Person[] = [
  {
   
    img: "/works/gd/1.jpg",
  },
  {
   
    img: "/works/gd/2.jpg",
  },
  {
   
    img: "/works/gd/3.jpg",
  },
  {
  
    img: "/works/gd/4.jpg",
  },
  {
   
    img: "/works/gd/5.jpg",
  },
  {
   
    img: "/works/gd/6.jpg",
  },
  {
 
    img: "/works/gd/1.jpg",
  },
  {
    
    img: "/works/gd/8.jpg",
  },
  {
   
    img: "/works/gd/9.jpg",
  },
  {
    
    img: "/works/gd/10.jpg",
  },
  {
    
    img: "/works/gd/11.jpg",
  },
  {
    
    img: "/works/gd/13.jpg",
  },
  {
    
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
  }, []);

  return (
    <div className="w-full font-sans">
      <div className="w-full p-4 sm:p-6 md:p-8">
        <ul
          ref={wrapperRef}
          className="flex w-full h-90 gap-4 overflow-x-auto scroll-px-4 snap-x snap-mandatory md:h-160 md:overflow-hidden md:gap-[1.5%] md:snap-none"
        >
          {persons.map((person, index) => (
            <li
              onClick={() => setActiveItem(index)}
              aria-current={activeItem === index}
              className={classNames(
                "relative shrink-0 snap-center cursor-pointer transition-all duration-500 ease-in-out",
                "min-w-[80%] sm:min-w-[60%] md:w-[8%]",
                "md:aria-current:w-[120%]",
                "md:[transition:width_var(--transition,300ms_ease_in)]",
              )}
              key={index}
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:z-10 transform-gpu">
                <img
                  className={classNames(
                    "absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-in-out",
                    activeItem === index
                      ? "scale-105 grayscale-0"
                      : "scale-100 md:grayscale",
                  )}
                  src={person.img}
                  width="1500"
                  height="1000"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-4 text-white sm:p-6">
                  <p className="text-base font-semibold sm:text-lg">
                  
                  </p>
                  <p className="mt-1 text-sm opacity-90 sm:text-base">
                    
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ImageCarousel;

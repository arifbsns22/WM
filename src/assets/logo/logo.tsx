import type { SVGAttributes } from "react";
import Image from "next/image";

const Logo = (props: SVGAttributes<SVGElement>) => {
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src="/Water-Melon-Digital-Logo_-Final.png"
        alt="Watermelon Digital logo"
        width={100}
        height={20}
        priority
        className="h-auto w-auto object-contain"
      />
    </div>
  );
};

export default Logo;

import * as React from "react";
import { GooeyText } from "./gooey-text";

function ServicesCardsGooeyText() {
  return (
    <div className="h-[120px] w-full flex items-center justify-center">
      <GooeyText
        texts={[
          "Crafting fast modern & user-friendly web experiences",
          "Designs that make your brand stand out",
          "Turning raw footage into captivating stories",
          "Boosting brands with powerful social strategies",
          "Building smart solutions tailored to your needs",
          "Bringing ideas to life in stunning 3D",
        ]}
        morphTime={1}
        cooldownTime={0.25}
        className="font-bold"
      />
    </div>
  );
}

export { ServicesCardsGooeyText };

'use client';

import { TextType } from "./text-type";


export default function AnimatedTextType() {
  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <div className="text-center">
        <h1 className="text-foreground text-3xl md:text-5xl">
          <TextType
            text={['why choose', 'our video editing', 'services']}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="text-foreground"
          />
        </h1>
      </div>
    </div>
  );
}

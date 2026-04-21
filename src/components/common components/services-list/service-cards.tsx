import { TextType } from "../animated-text/text-type";
import CardFlip from "./animated-card";

export default function ServiceListCards() {
  return (
    <>
     <div className="flex min-h-[200px] items-center justify-center">
          <div className="text-center">
            <h1 className="text-foreground text-3xl md:text-5xl">
              <TextType
                text={['Our', 'All', 'Services']}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="text-foreground"
              />
            </h1>
          </div>
        </div>
    <div className="grid grid-rows-2">
        <div className="flex items-center justify-center my-8 gap-20">
        <CardFlip
            title="ariful haque mohosin"
            subtitle="Launch your idea in record time"
            description="Copy, paste, customize—and launch your MVP faster than ever with our developer-first component library."
            features={[
            "Copy & Paste Ready",
            "Developer-First", 
            "MVP Optimized",
            "Zero Setup Required"
            ]}
        />
        <CardFlip
            title="sadman sakib muhit"
            subtitle="Launch your idea in record time"
            description="Copy, paste, customize—and launch your MVP faster than ever with our developer-first component library."
            features={[
            "Copy & Paste Ready",
            "Developer-First", 
            "MVP Optimized",
            "Zero Setup Required"
            ]}
        />
        <CardFlip
            title="Build MVPs Fast"
            subtitle="Launch your idea in record time"
            description="Copy, paste, customize—and launch your MVP faster than ever with our developer-first component library."
            features={[
            "Copy & Paste Ready",
            "Developer-First", 
            "MVP Optimized",
            "Zero Setup Required"
            ]}
        />
    </div>
    <div className="flex items-center justify-center my-8 gap-20 mb-20">
        <CardFlip
            title="Build MVPs Fast"
            subtitle="Launch your idea in record time"
            description="Copy, paste, customize—and launch your MVP faster than ever with our developer-first component library."
            features={[
            "Copy & Paste Ready",
            "Developer-First", 
            "MVP Optimized",
            "Zero Setup Required"
            ]}
        />
        <CardFlip
            title="Build MVPs Fast"
            subtitle="Launch your idea in record time"
            description="Copy, paste, customize—and launch your MVP faster than ever with our developer-first component library."
            features={[
            "Copy & Paste Ready",
            "Developer-First", 
            "MVP Optimized",
            "Zero Setup Required"
            ]}
        />
        <CardFlip
            title="Build MVPs Fast"
            subtitle="Launch your idea in record time"
            description="Copy, paste, customize—and launch your MVP faster than ever with our developer-first component library."
            features={[
            "Copy & Paste Ready",
            "Developer-First", 
            "MVP Optimized",
            "Zero Setup Required"
            ]}
        />
    </div>
   </div>
   </>
  );
}
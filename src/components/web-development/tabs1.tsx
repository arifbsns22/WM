import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tab";

export default function TabsDemo() {
  return (
    <Tabs
      defaultValue="all"
      className="mx-auto border rounded-md overflow-hidden w-full max-w-[1200px] mt-20"
    >
      <TabsList className="border-b w-full gap-1 rounded-b-none overflow-x-auto">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="e-commerce">E-Commerce</TabsTrigger>
        <TabsTrigger value="business">Business</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="others">Others</TabsTrigger>
      </TabsList>
      <TabsContent
        value="all"
        className="min-h-40 flex items-center justify-center pb-10 px-4 sm:px-6"
      >
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full">
            <a
              href="https://www.icnsea.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl"
            >
              <Image
                src="/works/web/Screenshot-2025-10-29-160816.png"
                alt="all"
                width={500}
                height={400}
                className="rounded-xl w-full h-auto"
              />
            </a>
            <a
              href="https://www.amarhoster.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl"
            >
              <Image
                src="/works/web/Screenshot-2025-10-29-161121.png"
                alt="all"
                width={500}
                height={400}
                className="rounded-xl w-full h-auto"
              />
            </a>
            <a
              href="https://www.spocket.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl"
            >
              <Image
                src="/works/web/spocket-1024x485.png"
                alt="all"
                width={500}
                height={400}
                className="rounded-xl w-full h-auto"
              />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full">
            <a
              href="https://plusdesignbd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl"
            >
              <Image
                src="/works/web/Screenshot-2025-10-29-160913.png"
                alt="all"
                width={500}
                height={400}
                className="rounded-xl w-full h-auto"
              />
            </a>
            <a
              href="https://byoreg.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl"
            >
              <Image
                src="/works/web/Screenshot-2025-10-29-161041.png"
                alt="all"
                width={500}
                height={400}
                className="rounded-xl w-full h-auto"
              />
            </a>
            <a
              href="https://nsricvisa.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl"
            >
              <Image
                src="/works/web/Screenshot-2025-10-29-160732.png"
                alt="all"
                width={500}
                height={400}
                className="rounded-xl w-full h-auto"
              />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full">
            <a
              href="https://jassleather.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl"
            >
              <Image
                src="/works/web/Screenshot-2026-01-25-162256-1024x488.png"
                alt="all"
                width={500}
                height={400}
                className="rounded-xl w-full h-auto"
              />
            </a>
            <a
              href="https://aniyanetworks.net/hvac-ai-voice/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl"
            >
              <Image
                src="/works/web/Screenshot-2026-03-04-151257-1024x548.png"
                alt="all"
                width={500}
                height={400}
                className="rounded-xl w-full h-auto"
              />
            </a>
          </div>
        </div>
      </TabsContent>
      <TabsContent
        value="e-commerce"
        className="min-h-40 flex items-center justify-center pb-10 px-4 sm:px-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full">
          <a
            href="https://jassleather.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-xl"
          >
            <Image
              src="/works/web/Screenshot-2026-01-25-162256-1024x488.png"
              alt="all"
              width={500}
              height={400}
              className="rounded-xl w-full h-auto"
            />
          </a>
        </div>
      </TabsContent>
      <TabsContent
        value="business"
        className="min-h-40 flex items-center justify-center pb-10 px-4 sm:px-6"
      >
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full">
            <a
              href="https://plusdesignbd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl"
            >
              <Image
                src="/works/web/Screenshot-2025-10-29-160913.png"
                alt="all"
                width={500}
                height={400}
                className="rounded-xl w-full h-auto"
              />
            </a>
            <a
              href="https://burnwe.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl"
            >
              <Image
                src="/works/web/Screenshot-2025-10-29-160947.png"
                alt="all"
                width={500}
                height={400}
                className="rounded-xl w-full h-auto"
              />
            </a>
            <a
              href="https://nsricvisa.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl"
            >
              <Image
                src="/works/web/Screenshot-2025-10-29-160732.png"
                alt="all"
                width={500}
                height={400}
                className="rounded-xl w-full h-auto"
              />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full">
            <a
              href="https://www.icnsea.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl"
            >
              <Image
                src="/works/web/Screenshot-2025-10-29-160816.png"
                alt="all"
                width={500}
                height={400}
                className="rounded-xl w-full h-auto"
              />
            </a>
            <a
              href="https://www.spocket.co/ "
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl"
            >
              <Image
                src="/works/web/spocket-1024x485.png"
                alt="all"
                width={500}
                height={400}
                className="rounded-xl w-full h-auto"
              />
            </a>
            <a
              href="https://www.amarhoster.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl"
            >
              <Image
                src="/works/web/Screenshot-2025-10-29-161121.png"
                alt="all"
                width={500}
                height={400}
                className="rounded-xl w-full h-auto"
              />
            </a>
          </div>
        </div>
      </TabsContent>
      <TabsContent
        value="education"
        className="min-h-40 flex items-center justify-center pb-10 px-4 sm:px-6"
      >
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full">
            <a
              href="https://www.amarhoster.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl"
            >
              <Image
                src="/works/web/Screenshot-2025-10-29-160922.png"
                alt="all"
                width={500}
                height={400}
                className="rounded-xl w-full h-auto"
              />
            </a>
          </div>
        </div>
      </TabsContent>
      <TabsContent
        value="others"
        className="min-h-40 flex items-center justify-center pb-10 px-4 sm:px-6"
      >
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full">
            <a
              href="https://www.amarhoster.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl"
            >
              <Image
                src="/works/web/Screenshot-2025-10-29-161121.png"
                alt="all"
                width={500}
                height={400}
                className="rounded-xl w-full h-auto"
              />
            </a>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}

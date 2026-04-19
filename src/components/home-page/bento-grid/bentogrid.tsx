import { Badge } from "@/components/ui/badge";
import ReminderAnimation from "@/components/home-page/bento-grid/ReminderAnimation";
import AnimatedUiBlock from "@/components/home-page/bento-grid/AnimatedUiBlock";

const Bentogrid = () => {
  return (
    <section>
      <div className="py-11 md:py-20">
        <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4 items-center justify-center max-w-3xl mx-auto">
            <Badge
              variant={"default"}
              className="px-3 py-1 h-auto text-sm font-normal"
            >
              Our Services
            </Badge>
            <h2 className="text-center md:text-5xl text-3xl mx-auto font-medium">
              Watermelon Digital's Vision For The Next Generation Of Business
              Growth
            </h2>
          </div>
          <div className="grid grid-cols-12 gap-5">
            <div className="lg:col-span-4 col-span-12 overflow-hidden">
              <div className="rounded-xl border border-border">
                <div className="bg-muted rounded-t-xl py-8 px-9 relative">
                  <ReminderAnimation />
                </div>
                <div className="flex flex-col gap-0.5 p-8 border-t border-border">
                  <h3 className="text-xl font-medium text-foreground">
                    Website Development
                  </h3>
                  <p className="text-base font-normal text-muted-foreground">
                    Mordern Website that focused on building a strong brand
                    identity for a business.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 col-span-12 overflow-hidden">
              <div className="rounded-xl border border-border">
                <div className="bg-muted rounded-t-xl py-7 lg:px-30 px-6 relative">
                  <AnimatedUiBlock />
                </div>
                <div className="flex flex-col gap-0.5 p-8 border-t border-border">
                  <h3 className="text-xl font-medium text-foreground">
                    Video Editing
                  </h3>
                  <p className="text-base font-normal text-muted-foreground">
                    Digital advertising where businesses pay to promote their
                    products and services.It can be an effective way to reach a
                    large audience and drive traffic to a website or social
                    media page.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 col-span-12 overflow-hidden">
              <div className="rounded-xl border border-border h-full flex flex-col">
                <div className="p-8 bg-muted rounded-t-xl flex-1 flex items-center justify-center">
                  <img
                    src="https://images.shadcnspace.com/assets/bento-grid/bento-grid-img-1.png"
                    alt="layout options"
                    className="dark:hidden"
                  />
                  <img
                    src="https://images.shadcnspace.com/assets/bento-grid/bento-grid-darkimg-1.png"
                    alt="layout options"
                    className="hidden dark:block"
                  />
                </div>
                <div className="flex flex-col gap-0.5 p-8 border-t border-border">
                  <h3 className="text-xl font-medium text-foreground">
                    Graphic Design
                  </h3>
                  <p className="text-base font-normal text-muted-foreground">
                    Graphic design is the art and practice of creating visual
                    content to communicate information and ideas to a specific
                    audience.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 col-span-12 overflow-hidden">
              <div className="rounded-xl border border-border h-full flex flex-col">
                <div className="p-8 bg-muted rounded-t-xl flex-1 flex items-center justify-center">
                  <img
                    src="https://images.shadcnspace.com/assets/bento-grid/bento-grid-img-2.png"
                    alt="documentation"
                    className="dark:hidden"
                  />
                  <img
                    src="https://images.shadcnspace.com/assets/bento-grid/bento-grid-darkimg-2.png"
                    alt="documentation"
                    className="hidden dark:block"
                  />
                </div>
                <div className="flex flex-col gap-0.5 p-8 border-t border-border">
                  <h3 className="text-xl font-medium text-foreground">
                    Social Media Marketing
                  </h3>
                  <p className="text-base font-normal text-muted-foreground">
                    Creating engaging social media content that resonates with
                    the target audience.Reach a large audience and drive traffic
                    to a social media page.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 col-span-12 overflow-hidden">
              <div className="rounded-xl border border-border h-full flex flex-col">
                <div className="p-8 bg-muted rounded-t-xl flex-1 flex items-center justify-center relative">
                  <img
                    src="https://images.shadcnspace.com/assets/bento-grid/bento-grid-img-3.png"
                    alt="color options"
                  />
                </div>
                <div className="flex flex-col gap-0.5 p-8 border-t border-border">
                  <h3 className="text-xl font-medium text-foreground">
                    3D Animation
                  </h3>
                  <p className="text-base font-normal text-muted-foreground">
                    3D animation is the process of creating three-dimensional
                    moving images in a digital environment. It's good for
                    creating 3D visual.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bentogrid;

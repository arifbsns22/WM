import CTA from "@/components/common components/cta/cta";
import Faq from "@/components/common components/faq/faq";
import ServiceListCards from "@/components/common components/services-list/service-cards";
import BentoGrid1 from "@/components/web-development/bentogrid";

import WebHero from "@/components/web-development/hero";
import TabsDemo from "@/components/web-development/tabs1";

const WebDevelopmentPage = () => {
  return (
    <>
      <WebHero />
      <TabsDemo/>
      <BentoGrid1 />
      <ServiceListCards />
      <Faq />
      <CTA />
    </>
  );
};

export default WebDevelopmentPage;

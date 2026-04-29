import CTA from "@/components/common components/cta/cta";
import Faq from "@/components/common components/faq/faq";
import ServiceListCards from "@/components/common components/services-list/service-cards";

import WebHero from "@/components/web-development/hero";
import TabsDemo from "@/components/web-development/tabs1";

const WebDevelopmentPage = () => {
  return (
    <>
      <WebHero />
      <TabsDemo/>
      <ServiceListCards />
      <Faq />
      <CTA />
    </>
  );
};

export default WebDevelopmentPage;

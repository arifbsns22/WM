"use client";

import { MailIcon, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";
import { FooterBackgroundGradient, TextHoverEffect } from "./hover-footer";

function HoverFooter() {
  const handleSocialClick = (href: string) => {
    console.log("Clicking social link:", href);
    try {
      window.open(href, "_blank");
    } catch (error) {
      console.error("Error opening link:", error);
    }
  };

  // Footer link data
  const footerLinks = [
    {
      title: "About Us",
      links: [
        { label: "Home", href: "/" },
        { label: "Contact Us", href: "/contact" },
        { label: "Our Works", href: "/services" },
        { label: "About Us", href: "/about" },
      ],
    },
    {
      title: "Helpful Links",
      links: [
        { label: "All Services", href: "/services" },
        { label: "Web Development", href: "/services/web-development" },
        { label: "Graphic Design", href: "/services/graphic-design" },
        { label: "Video Editing", href: "/services/video-editing" },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <MailIcon size={18} className="text-[#3ca2fa]" />,
      text: "watermelondigitalnz@gmail.com",
      href: "mailto:watermelondigitalnz@gmail.com",
    },
    {
      icon: <Phone size={18} className="text-[#3ca2fa]" />,
      text: "+8801750150752",
      href: "tel:+8801750150752",
    },
    {
      icon: <MapPin size={18} className="text-[#3ca2fa]" />,
      text: "Mymensingh Sadar",
    },
  ];

  // Social media icons
  const socialLinks = [
    {
      icon: <SiFacebook size={20} />,
      label: "Facebook",
      href: "https://www.facebook.com/WatermelonDigitalMarketingAgency/",
    },
    {
      icon: <SiInstagram size={20} />,
      label: "Instagram",
      href: "https://www.instagram.com/watermelon_digi/",
    },
    {
      icon: <SiYoutube size={20} />,
      label: "Youtube",
      href: "https://www.youtube.com/@WatermelonDigital",
    },
  ];

  return (
    <footer className="bg-black text-white relative h-fit rounded-3xl overflow-hidden m-8">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-white text-2xl font-bold">
                Watermelon Digital
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Seed To Success-Grow Business
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="hover:text-[#3ca2fa] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div className="flex flex-col w-full">
            <h4 className="text-white text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-[#3ca2fa] transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-[#3ca2fa] transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-700 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 relative z-50">
          {/* Social icons */}
          <div className="flex space-x-6 text-white relative z-50">
            {socialLinks.map(({ icon, label, href }) => (
              <button
                key={label}
                onClick={() => handleSocialClick(href)}
                aria-label={label}
                className="hover:text-[#fa883c] transition-colors cursor-pointer bg-none border-none p-0 relative z-50 pointer-events-auto"
              >
                {icon}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Watermelon Digital. All rights
            reserved. V2.1
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-15 -mb-36 pointer-events-none">
        <TextHoverEffect text="Watermelon" className="z-50" />
      </div>
      <FooterBackgroundGradient />
    </footer>
  );
}

export default HoverFooter;

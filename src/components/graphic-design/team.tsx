"use client";
import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 mt-15 gap-20">
      <div>
        <h1 className="text-4xl">Professional Team Delivering Reliable Services You Trust</h1>
        <p className="text-2xl mt-5">
          We have a very professional team, so you don’t have to worry about our
          services, we are a trusted partner for you, you are also easy to get
          services from us We also have an extemsive network, with thousands of
          trusted partners and thousands of weekly active users
        </p>
        <ul className="mt-5 text-lg">
            <li className="flex items-center gap-2"><Check /> Reliable Solutions Delivered by Professionals</li>
            <li className="flex items-center gap-2"><Check /> Expert Services You Can Always Rely On</li>
            <li className="flex items-center gap-2"><Check /> Trusted Services from a Professional Team</li>
        </ul>
      </div>
      <div>
        <Image src="/works/gd/service.jpg" alt="Team" width={500} height={500} className="rounded"/>
      </div>
    </div>
  );
};

export default Team;

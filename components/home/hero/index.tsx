"use client";
import React from "react";
import { Cover } from "@/components/ui/cover";

const Hero = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-4xl lg:text-5xl  max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b  text-white !font-sans font-semibold">
        Connect, Contribute & Earn with <Cover>Contribunation</Cover>
      </h1>
    </div>
  );
};

export default Hero;

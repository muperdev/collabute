"use client";
import React from "react";
import { Cover } from "@/components/ui/cover";
import { Button } from "@/components/ui/button";

const Hero = React.memo(({ className }: { className?: string }) => {
  const words = `Contribute like you never did before! you know what time it is...`;

  return (
    <div>
      <h1 className="text-4xl md:text-4xl lg:text-5xl  max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b  text-white !font-sans font-semibold">
        Connect, Contribute & Earn with <Cover>speed of light</Cover>
      </h1>
      {/* <div className="space-x-4 w-full flex justify-center">
        <Button className="bg-blue-400 hover:bg-white hover:text-blue-400 text-white">
          Get Started
        </Button>
      </div> */}
    </div>
  );
});

export default Hero;

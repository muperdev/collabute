"use client";
import React from "react";
import BlurIn from "@/components/magicui/blur-in";

const Hero = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-10">
      <BlurIn
        className="text-4xl md:text-4xl lg:text-5xl  max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b  text-white !font-sans font-semibold"
        word="Connect, Contribute and Earn with Collabute"
      />
      <a
        href="#early-bird"
        className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Register Early Bird
        </span>
      </a>
    </div>
  );
};

export default Hero;

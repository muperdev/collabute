"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";
import GitLabIcon from "@/public/icons/gitlab";
import GithubIcon from "@/public/icons/github";
import { ArrowRightIcon } from "lucide-react";
const Auth = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center gap-y-16 px-[80px] w-[500px] py-[90px] text-center border border-slate-200 rounded-md">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <p className="text-black font-light">Welcome to</p>
          <h1 className="text-3xl font-bold">Collabute</h1>
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-4 gap-y-2">
          <Button className="w-full gap-x-2 bg-[#24292F] text-white">
            <GithubIcon />
            Continue with Github
          </Button>
          <Button className="w-full gap-x-2 bg-[#6B4FBB] text-white">
            <GitLabIcon />
            Continue with GitLab
          </Button>
          <Button
            onClick={() => router.push("/auth/email")}
            className="w-full gap-x-2 bg-transparent border border-[#930CFE] text-[#930CFE]"
          >
            Continue with Email
            <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Auth;

import { Button } from "@/components/ui/button";
import React from "react";
import GitLabIcon from "@/public/icons/gitlab";
import GithubIcon from "@/public/icons/github";
import { ArrowRightIcon } from "lucide-react";
const Auth = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center gap-y-16 border border-gray-300 rounded-md p-4 w-[500px] h-[500px] text-center">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <p className="text-gray-500">welcome to</p>
          <h1 className="text-3xl font-bold">Collabute</h1>
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-4 gap-y-2">
          <Button className="w-[70%] gap-x-2 py-7 bg-[#24292F] text-white">
            <GithubIcon />
            Continue with Github
          </Button>
          <Button className="w-[70%] gap-x-2 py-7 bg-[#6B4FBB] text-white">
            <GitLabIcon />
            Continue with GitLab
          </Button>
          <Button className="w-[70%] gap-x-2 py-7 bg-transparent border border-[#930CFE] text-[#930CFE]">
            Continue with Email
            <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Auth;

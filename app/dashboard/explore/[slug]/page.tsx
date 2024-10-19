import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  CircleUser,
  GitPullRequest,
  DollarSign,
  Clock9,
  Users,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const ProjectPage = () => {
  return (
    <div className="flex flex-col">
      <header className="flex h-14 justify-between items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <h3 className="text-lg dark:text-white">Explore Projects</h3>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-opacity-50"
        >
          <CircleUser className="h-5 w-5" />
        </Button>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <Card className="flex flex-col gap-4 p-4">
          <div className="flex items-center justify-start gap-4">
            <h3 className="font-medium text-black">Project title</h3>
            <Badge
              icon={<GitPullRequest className="h-4 w-4 text-primary2" />}
              variant="outline"
            >
              32 issues
            </Badge>
            <Badge
              icon={<DollarSign className="h-4 w-4 text-primary2" />}
              variant="outline"
            >
              budget
              <span className="text-xs">$100,000</span>
            </Badge>
            <Badge
              icon={<Clock9 className="h-4 w-4 text-primary2" />}
              variant="outline"
            >
              timeline
              <Progress className="w-20 ml-2" value={50} />
              <span className="text-xs">50%</span>
            </Badge>
            <Badge
              icon={<Users className="h-4 w-4 text-primary2" />}
              variant="outline"
            >
              collabuters
              <span className="text-xs">10</span>
            </Badge>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          <div>
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="password">
                Change your password here.
              </TabsContent>
            </Tabs>{" "}
          </div>
        </Card>
      </main>
    </div>
  );
};

export default ProjectPage;

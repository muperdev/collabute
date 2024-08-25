import React from "react";
import { Card, CardContent } from "../../ui/card";
import { Code, DollarSign, Users } from "lucide-react";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-12 md:py-24 lg:py-32 text-white"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl text-center mb-8">
          Key Features
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className=" bg-transparent border-gray-800 text-white w-full">
            <CardContent className="flex flex-col items-center space-y-2 p-6">
              <Users className="h-12 w-12 text-blue-400 " />
              <h3 className="text-xl font-bold">Connect</h3>
              <p className="text-center text-gray-400">
                Find the perfect match between startups and skilled developers.
              </p>
            </CardContent>
          </Card>
          <Card className=" bg-transparent border-gray-800 text-white w-full">
            <CardContent className="flex flex-col items-center space-y-2 p-6">
              <Code className="h-12 w-12 text-blue-400 " />
              <h3 className="text-xl font-bold">Contribute</h3>
              <p className="text-center text-gray-400">
                Work on exciting projects and make meaningful contributions.
              </p>
            </CardContent>
          </Card>
          <Card className=" bg-transparent border-gray-800 text-white w-full">
            <CardContent className="flex flex-col items-center space-y-2 p-6">
              <DollarSign className="h-12 w-12 text-blue-400 " />
              <h3 className="text-xl font-bold">Earn</h3>
              <p className="text-center text-gray-400">
                Get rewarded for your valuable contributions to startup
                projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Feature;

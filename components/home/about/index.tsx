import React from 'react'
import { Card, CardContent } from "../../ui/card"

const About = () => {
  return (
    <section id="about" className="w-full py-6 md:py-10 lg:py-12 text-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl text-center mb-4">
          About Contribunation
        </h2>
        <p className="text-lg text-center text-gray-400 mb-8">
          Contribunation is a platform that connects skilled developers with startups, 
          enabling meaningful contributions and fair compensation.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="bg-transparent border-gray-800 text-white">
            <CardContent className="flex flex-col items-center space-y-2 p-6">
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="text-center text-gray-400">
                To empower developers and startups by facilitating collaboration 
                and fostering innovation in the tech ecosystem.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-transparent border-gray-800 text-white">
            <CardContent className="flex flex-col items-center space-y-2 p-6">
              <h3 className="text-xl font-bold">Our Vision</h3>
              <p className="text-center text-gray-400">
                A world where every developer can contribute to exciting projects 
                and every startup can access top-tier talent.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-transparent border-gray-800 text-white">
            <CardContent className="flex flex-col items-center space-y-2 p-6">
              <h3 className="text-xl font-bold">Our Team</h3>
              <p className="text-center text-gray-400">
                A diverse group of passionate individuals dedicated to 
                revolutionizing the way developers and startups collaborate.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default About

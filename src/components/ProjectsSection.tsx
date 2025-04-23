"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const ProjectsSection = () => {
  const projects = [
    {
      title: "YukMyYum",
      description: "Experience your surroundings in a whole new dimension with YukMyYum. Discover and explore local establishments around you.",      
      link: "#",
    },
    {
      title: "XPloration",
      description: "A application that connects outdoor enthusiasts with exceptional camping destinations and adventures.",      
      link: "#",
    },
    {
      title: "IPTV",
      description: "A powerful application that generates M3U playlist links, enabling users to effortlessly stream their favorite live TV channels through any compatible IPTV player application.",
      link: "#",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index} className="mb-4 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  {/* Added text-black to ensure visibility */}
                  <h3 className="text-xl font-semibold text-black">{project.title}</h3>
                  {/* Added text-black to ensure visibility */}
                  <p className="text-black">{project.description}</p>
                </div>
                <Button asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

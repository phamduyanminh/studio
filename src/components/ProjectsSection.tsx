"use client";

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of project 1.",
      image: "https://picsum.photos/400/300",
      link: "#",
    },
    {
      title: "Project 2",
      description: "A brief description of project 2.",
      image: "https://picsum.photos/400/300",
      link: "#",
    },
    {
      title: "Project 3",
      description: "A brief description of project 3.",
      image: "https://picsum.photos/400/300",
      link: "#",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="mb-4 rounded-md"
                />
                <Button asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

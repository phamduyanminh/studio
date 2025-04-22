"use client";

import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin } from "lucide-react"

export const HeroSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto text-center">
        <Image
          src="https://picsum.photos/200/200"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold text-portfolio-accent mb-4">John Doe</h1>
        <p className="text-lg mb-8">
          Web Developer | React Enthusiast | Problem Solver
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="secondary" >
            <Mail className="mr-2" />
            Contact Me
          </Button>
          <Button variant="secondary">
            <Github className="mr-2" />
            GitHub
          </Button>
           <Button variant="secondary">
            <Linkedin className="mr-2" />
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
};

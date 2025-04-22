"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const AboutSection = () => {
  return (
    <section className="py-16 bg-portfolio-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Professional Summary</CardTitle>
            <CardDescription>A brief overview of my background and experience.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3 className="text-xl font-semibold mt-4">Experience</h3>
            <ul className="list-disc list-inside">
              <li>Web Developer at ABC Company (2018-2021)</li>
              <li>Frontend Engineer at XYZ Corp (2021-Present)</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4">Education</h3>
            <ul className="list-disc list-inside">
              <li>Bachelor of Science in Computer Science - University of Tech</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4">Skills</h3>
            <ul className="list-disc list-inside">
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

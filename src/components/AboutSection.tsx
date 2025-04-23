"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const AboutSection = () => {
  return (
    <section className="py-16 bg-portfolio-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Martin Pham</CardTitle>
            <CardDescription>A brief overview of my background and experience.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              A software developer intern with over one year of experience building web applications and AI/ML solutions for the healthcare industry. Skilled in React, .NET, Node.js, JavaScript, C# and Python with a track record of developing web applications and implementing efficient AI systems.
            </p>
            <h3 className="text-xl font-semibold mt-4">Experience</h3>
            <ul className="list-disc list-inside">
              <li>AI/ML Developer Intern at Harris Computer (January, 2025 - August, 2025) | Toronto</li>
              <li>Software Developer Intern at Harris Computer (March, 2023 - December, 2023) | Toronro</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4">Education</h3>
            <ul className="list-disc list-inside">
              <li>Bachelor of Science in Computer Science - Sheridan College Institute of Technology</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

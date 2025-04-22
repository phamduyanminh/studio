import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';

export default function Home() {
  return (
    <div className="bg-portfolio-primary min-h-screen text-white">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}


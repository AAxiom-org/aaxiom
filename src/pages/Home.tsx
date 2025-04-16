import { useQuery } from '@tanstack/react-query';
import GitHubCard from "../components/Github";
import HeroSection from '../components/home/HeroSection';
import ProjectsSection from '../components/home/ProjectsSection';
import AboutSection from '../components/home/AboutSection';
import Footer from '../components/layout/Footer';
import Career from '../components/Career';

interface Project {
  id: string;
  title: string;
  description: string;
  link: string | null;
  githubLink: string | null;
  demoLink: string | null;
  tags: string[];
  logo?: string;
}

export default function HomePage() {
  const { data: projects, isLoading, error } = useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await fetch('https://raw.githubusercontent.com/aidanandrews22/aidanandrews22.github.io/main/content/aaxiom.json');
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error('Invalid project data format');
      }
      return data;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-transparent to-black/5 p-5">
      <main>
        <HeroSection />
        <ProjectsSection projects={projects} isLoading={isLoading} error={error instanceof Error ? error : null} />
        <AboutSection />
        <GitHubCard />
        <div id="careers" className="container mx-auto px-6 py-12">
          <Career />
        </div>
      </main>
      <Footer />
    </div>
  );
}

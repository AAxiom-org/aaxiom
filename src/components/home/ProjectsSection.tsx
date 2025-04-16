import React from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

// Define the Project type, mirroring the one in Home.tsx
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

interface ProjectsSectionProps {
  projects: Project[] | undefined;
  isLoading: boolean;
  error: Error | null;
}

// Reusable icon button for GitHub link
const GitHubButton: React.FC<{ href: string }> = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center w-10 h-10 rounded-full gradient-blue-purple transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md"
    aria-label="View Code on GitHub"
  >
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  </a>
);

// Reusable icon button for external link
const ExternalLinkButton: React.FC<{ href: string }> = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center w-10 h-10 rounded-full gradient-blue-purple transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md"
    aria-label="Visit Site"
  >
    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
  </a>
);

export default function ProjectsSection({ projects, isLoading, error }: ProjectsSectionProps) {
  return (
    <section id="ventures" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Title with more subtle styling */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block pb-4 after:content-[''] after:absolute after:w-16 after:h-1 after:gradient-blue-purple after:bottom-0 after:left-1/2 after:-translate-x-1/2">
            Featured Ventures
          </h2>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-current"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-400">
            Failed to load projects. Please try again later.
          </div>
        ) : (
          <div className="space-y-16 sm:space-y-24">
            {projects?.map((project, index) => (
              <div 
                key={project.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                {/* Media Content - Video or Placeholder */}
                <div className="w-full lg:w-1/2 overflow-hidden rounded-xl shadow-2xl">
                  {project.demoLink ? (
                    <div className="aspect-video">
                      <iframe
                        className="w-full h-full"
                        title={`${project.title} Demo`}
                        src={`https://www.youtube.com/embed/${project.demoLink?.split('v=')[1] || project.demoLink?.split('/').pop()}?color=white&modestbranding=1&rel=0`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-current/5 to-current/10 flex items-center justify-center">
                      {project.logo ? (
                        <img 
                          src={project.logo} 
                          alt={`${project.title} logo`} 
                          className="w-20 h-20 object-contain opacity-80"
                        />
                      ) : (
                        <div className="text-3xl font-bold opacity-10">{project.title[0]}</div>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Project Info */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <div className="flex items-center gap-4">
                    {project.logo && (
                      <img 
                        src={project.logo} 
                        alt={`${project.title} logo`} 
                        className="w-12 h-12 rounded-lg object-contain"
                      />
                    )}
                    <h3 className="text-2xl sm:text-3xl font-bold">{project.title}</h3>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium gradient-blue-purple">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Description */}
                  <p className="text-base sm:text-lg opacity-90">
                    {project.description}
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-2">
                    {project.link && <ExternalLinkButton href={project.link} />}
                    {project.githubLink && <GitHubButton href={project.githubLink} />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
} 
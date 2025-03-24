import { useQuery } from '@tanstack/react-query';
import GitHubCard from "../components/Github"
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

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
      return await response.json();
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      {/* Hero Section */}
      <section className="section relative overflow-hidden">
        <div className="container">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="w-48 md:w-64 lg:w-72 animate-fade-in relative">
              <img
                src="/aaxiom.png"
                alt="AAXIOM"
                className="w-full h-auto absolute inset-0 dark:opacity-0 transition-opacity duration-300"
                width={288}
                height={288}
              />
              <img
                src="/aaxiom-dark.png"
                alt="AAXIOM"
                className="w-full h-auto opacity-0 dark:opacity-100 transition-opacity duration-300"
                width={288}
                height={288}
              />
            </div>
            <h1 className="space-grotesk-bold text-4xl md:text-6xl lg:text-7xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              by Aidan Andrews
            </h1>
            <p className="space-grotesk-medium text-xl md:text-2xl max-w-2xl text-gray-700 dark:text-gray-300">
              Building the future through innovative technology and entrepreneurship
            </p>
          </div>
        </div>
      </section>

      {/* GitHub Card Section */}
      <GitHubCard />

      {/* Projects Section */}
      <section className="section">
        <div className="container">
          <h2 className="space-grotesk-bold text-4xl md:text-5xl mb-12 text-center">
            Featured
          </h2>
          {isLoading ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-600 dark:text-red-400">
              Failed to load projects. Please try again later.
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects?.map((project) => (
                <div key={project.id} className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    {project.logo && (
                      <img 
                        src={project.logo} 
                        alt={`${project.title} logo`} 
                        className="w-12 h-auto rounded-lg"
                      />
                    )}
                    <h3 className="space-grotesk-semibold text-2xl">{project.title}</h3>
                  </div>
                  {project.demoLink && (
                    <div className="mb-6 rounded-lg overflow-hidden aspect-video">
                      <iframe
                        className="w-full h-full"
                        title={`${project.title} Demo`}
                        src={`https://www.youtube.com/embed/${project.demoLink?.split('v=')[1] || project.demoLink?.split('/').pop()}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags?.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mb-6 text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        aria-label="Visit Site"
                      >
                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 bg-gray-800 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                        aria-label="View Code on GitHub"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="section py-16">
        <div className="container max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="space-grotesk-bold text-4xl md:text-5xl mb-8">
                About Aidan
              </h2>
              <p className="space-grotesk-regular text-lg mb-8 text-gray-700 dark:text-gray-300">
                Aidan is an entrepreneur and developer passionate about creating innovative solutions that make a difference. Through AAXIOM's portfolio of projects and businesses, I'm working to build technology that shapes the future.
              </p>
              <a
                href="https://aidanandrews.info"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white space-grotesk-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1"
              >
                Learn More About Aidan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8">
        <div className="container">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p className="space-grotesk-regular">
              © {new Date().getFullYear()} AAXIOM. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

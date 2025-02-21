import { useQuery } from '@tanstack/react-query';

interface Project {
  id: string;
  title: string;
  description: string;
  link: string | null;
  githubLink: string | null;
  demoLink: string | null;
  tags: string[];
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
                src="/AAXIOM-02.png"
                alt="AAXIOM"
                className="w-full h-auto absolute inset-0 dark:opacity-0 transition-opacity duration-300"
                width={288}
                height={288}
              />
              <img
                src="/AAXIOM-01.png"
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

      {/* Projects Section */}
      <section className="section">
        <div className="container">
          <h2 className="space-grotesk-bold text-4xl md:text-5xl mb-12 text-center">
            Featured Projects
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
                  <h3 className="space-grotesk-semibold text-2xl mb-4">{project.title}</h3>
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
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Visit Site →
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        View Code →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="mt-12 text-center">
            <a
              href="https://aidanandrews.info/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white space-grotesk-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1"
            >
              View All Projects →
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section py-16">
        <div className="container max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="space-grotesk-bold text-4xl md:text-5xl mb-8">
                About Me
              </h2>
              <p className="space-grotesk-regular text-lg mb-8 text-gray-700 dark:text-gray-300">
                I'm an entrepreneur and developer passionate about creating innovative solutions that make a difference. Through AAXIOM's portfolio of projects and businesses, I'm working to build technology that shapes the future.
              </p>
              <a
                href="https://aidanandrews.info"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white space-grotesk-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1"
              >
                Learn More About Me
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

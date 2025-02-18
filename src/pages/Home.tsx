export default function HomePage() {
  const projects = [
    {
      id: "illini-plan",
      title: "IlliniPlan: AI Powered Class Planner",
      description: "The app allows students to create course maps, track graduation readiness, and meet nuanced academic requirements using a rule-enforcing scheduler. Users can see their status on every single degree requirement to determine graduation readiness. Personalized course recommendations via an LLM, reorganizes plans to resolve unmet requirements, and prevents invalid scheduling (e.g., prerequisite violations, time conflicts, restrictions). The app integrates institutional course data, displays insights like average GPA, and supports exporting schedules (google sheets) to share with advisors.",
      link: "https://www.illiniplan.com/",
      githubLink: "https://github.com/aidanandrews22/IlliniPlan",
    },
    {
      id: "illini-spots",
      title: "IlliniSpots: The Instagram of study spots at UIUC",
      description: "Shows all buildings on campus with room availability. Users can favorite buildings and comment.",
      link: null,
      githubLink: "https://github.com/aidanandrews22/IlliniSpots",
    },
    {
      id: "nvralone",
      title: "NVRALONE",
      description: "Mental health awareness brand. Previously $10/month revenue. Raised thousands for suicide awareness",
      link: "https://urnvralone.com/",
      githubLink: null,
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section relative overflow-hidden">
        <div className="container">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="w-48 md:w-64 lg:w-72">
              <img
                src="/AAXIOM.png"
                alt="AAXIOM"
                className="w-full h-auto"
                width={288}
                height={288}
              />
            </div>
            <p className="space-grotesk-medium text-xl md:text-2xl max-w-2xl">
              Building the future through innovative technology and entrepreneurship
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section bg-[oklch(0.98_0_0)] dark:bg-[oklch(0.25_0_0)]">
        <div className="container">
          <h2 className="space-grotesk-bold text-4xl md:text-5xl mb-12 text-center">
            Our Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="bg-[oklch(1_0_0)] dark:bg-[oklch(0.3_0_0)] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="space-grotesk-semibold text-2xl mb-4">{project.title}</h3>
                <p className="mb-6">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[oklch(0.7_0.2_250)] hover:underline space-grotesk-medium"
                    >
                      Visit Site →
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[oklch(0.7_0.2_250)] hover:underline space-grotesk-medium"
                    >
                      View Code →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="space-grotesk-bold text-4xl md:text-5xl mb-8">
              About Aidan Andrews
            </h2>
            <p className="space-grotesk-regular text-lg mb-8">
              Entrepreneur, developer, and innovator. Building the next generation of technology solutions through AAXIOM's portfolio of projects and businesses.
            </p>
            <a
              href="https://aidanandrews.info"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[oklch(0.7_0.2_250)] hover:bg-[oklch(0.65_0.2_250)] text-[oklch(1_0_0)] space-grotesk-medium px-8 py-3 rounded-full transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[oklch(0.98_0_0)] dark:bg-[oklch(0.25_0_0)]">
        <div className="container">
          <div className="text-center">
            <p className="space-grotesk-regular">
              © {new Date().getFullYear()} AAXIOM. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

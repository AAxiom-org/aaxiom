export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* About Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="aspect-square w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/aidan.jpeg" 
                  alt="Aidan Andrews"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full gradient-blue-purple opacity-20 -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full gradient-blue-purple opacity-20 -z-10"></div>
            </div>
          </div>
          
          {/* About Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Section Title - with left alignment on desktop */}
            <h2 className="text-3xl md:text-4xl font-bold relative inline-block pb-4 text-center lg:text-left after:content-[''] after:absolute after:w-16 after:h-1 after:gradient-blue-purple after:bottom-0 after:left-1/2 lg:after:left-0 after:-translate-x-1/2 lg:after:-translate-x-0">
              About Aidan
            </h2>
            
            {/* Description with improved typography */}
            <p className="text-lg sm:text-xl text-center lg:text-left leading-relaxed">
              Aidan is an entrepreneur and developer passionate about creating innovative solutions that make a difference. Through AAXIOM's portfolio of projects and businesses, I'm working to build technology that shapes the future.
            </p>
            
            {/* Skills/Interests Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {["Entrepreneur", "Developer", "Open Source", "Innovation"].map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-full text-sm font-medium gradient-blue-purple">
                  {tag}
                </span>
              ))}
            </div>
            
            {/* CTA Button - Modernized with gradient */}
            <div className="pt-4 text-center lg:text-left">
              <a
                href="https://aidanandrews.info"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 gradient-blue-purple-hover text-white rounded-lg font-semibold transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg"
              >
                Learn More About Aidan
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
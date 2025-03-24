import { BookMarked, Code, User } from 'lucide-react';

const GitHubCard = () => {
  const repoData = {
    name: "AAxiom",
    fullName: "AAxiom-org",
    description: "Open source organization for AAxiom projects",
    repositories: 4,
    members: 1,
    language: "TypeScript, Python, Rust",
    languageColor: "#3178c6",
    owner: {
      login: "AAxiom-org",
      avatarUrl: "/aaxiompfp-01.png"
    },
    topics: ["open-source", "typescript", "react", "axiom"]
  };

  return (
    <div className="max-w-md mx-auto">
      <a 
        href={`https://github.com/${repoData.fullName}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          {/* Header with repo info */}
          <div className="p-5">
            <div className="flex items-center space-x-3">
              <img 
                src={repoData.owner.avatarUrl} 
                alt={`${repoData.owner.login}`}
                className="h-10 w-10 rounded-full"
              />
              <div>
                <h2 className="font-medium text-gray-900 dark:text-white">
                  {repoData.name}
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {repoData.owner.login}
                </p>
              </div>
            </div>
            
            {repoData.description && (
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-3 line-clamp-2">
                {repoData.description}
              </p>
            )}
          </div>
          
          {/* Language */}
          {repoData.language && (
            <div className="px-5 py-3 border-t border-gray-100 dark:border-gray-800">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <Code className="mr-1.5 h-4 w-4 text-gray-400" />
                <div className="flex items-center">
                  <span 
                    className="h-2.5 w-2.5 rounded-full mr-1.5"
                    style={{ backgroundColor: repoData.languageColor }} 
                  />
                  <span className="text-sm">{repoData.language}</span>
                </div>
              </div>
            </div>
          )}

          {/* Stats */}
          <div className="flex divide-x divide-gray-100 dark:divide-gray-800 border-t border-gray-100 dark:border-gray-800">
            <div className="flex-1 px-4 py-3 flex items-center justify-center">
              <BookMarked className="h-4 w-4 text-gray-400 mr-1.5" />
              <span className="text-sm text-gray-600 dark:text-gray-300">{repoData.repositories}</span>
            </div>
            <div className="flex-1 px-4 py-3 flex items-center justify-center">
              <User className="h-4 w-4 text-gray-400 mr-1.5" />
              <span className="text-sm text-gray-600 dark:text-gray-300">{repoData.members}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default GitHubCard;
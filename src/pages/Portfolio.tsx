import React, { useEffect, useState } from "react";

interface Project {
  id: number;
  name: string;
  description: string;
  language: string;
  html_url: string;
  topics?: string[];
  stargazers_count: number;
  forks_count: number;
}

const Portfolio: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Replace with your GitHub username
  const GITHUB_USERNAME = "sakxu-np";

  // Custom descriptions for your projects
  const projectDescriptions: { [key: string]: string } = {
    "protfolio": "My personal portfolio website built with React, TypeScript, and Tailwind CSS. Showcasing my projects and skills.",
    "Indreni": "A web application project built with modern TypeScript technologies.",
    "weatherapp": "Real-time weather application that provides current weather information and forecasts.",
    "logintest": "Authentication and login system implementation with secure user management.",
    "devicefeature": "Application demonstrating device feature detection and integration.",
    "counterapp": "Simple counter application built to practice state management concepts.",
    "banking-system": "Full-stack banking system with TypeScript, featuring account management and transactions.",
    "portfolio-master": "Portfolio template with modern design and smooth animations.",
    "e-learning": "E-learning platform for online courses and educational content management."
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        
        const data = await response.json();
        
        // Filter out forks and sort by stars
        const filteredProjects = data
          .filter((repo: Project) => !repo.hasOwnProperty('fork') || !(repo as any).fork)
          .sort((a: Project, b: Project) => b.stargazers_count - a.stargazers_count)
          .map((repo: Project) => ({
            ...repo,
            description: repo.description || projectDescriptions[repo.name] || ""
          }));
        
        setProjects(filteredProjects);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto mb-4"></div>
            <p className="text-slate-400">Loading projects...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center text-red-400">
            <p>Error: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <section className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/20">
              💼 My Work
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Projects & Repositories
          </h1>
          <p className="text-slate-400 text-lg mb-6">
            {projects.length} public repositories from GitHub
          </p>
          <a 
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-emerald-500 rounded-lg transition-all text-sm font-medium hover:shadow-lg hover:shadow-emerald-500/20"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>View All on GitHub</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
            </svg>
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-gradient-to-br from-slate-800/70 to-slate-800/40 rounded-xl p-6 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:scale-[1.02] flex flex-col"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-slate-100 truncate mb-1">{project.name}</h3>
                    {project.language && (
                      <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 bg-emerald-600/20 text-emerald-400 rounded-full border border-emerald-500/30">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                        {project.language}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-grow min-h-[40px]">
                {project.description || <span className="italic text-slate-500">No description provided</span>}
              </p>
              
              {/* Topics */}
              {project.topics && project.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.topics.slice(0, 3).map((topic, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2.5 py-1 bg-slate-700/50 text-slate-300 rounded-md border border-slate-600/50"
                    >
                      #{topic}
                    </span>
                  ))}
                  {project.topics.length > 3 && (
                    <span className="text-xs px-2.5 py-1 text-slate-500">
                      +{project.topics.length - 3}
                    </span>
                  )}
                </div>
              )}
              
              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-700/50 mt-auto">
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    {project.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    {project.forks_count}
                  </span>
                </div>
                
                <a 
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors group"
                >
                  View
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

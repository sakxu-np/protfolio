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
  const GITHUB_USERNAME = "sadikshya";

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
          .sort((a: Project, b: Project) => b.stargazers_count - a.stargazers_count);
        
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
        <h1 className="text-5xl font-bold mb-4 text-center">My Projects</h1>
        <p className="text-slate-400 text-center mb-12">
          {projects.length} repositories from GitHub
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-emerald-500 transition-all hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold truncate flex-1 pr-2">{project.name}</h3>
                {project.language && (
                  <span className="text-xs px-2 py-1 bg-emerald-600/20 text-emerald-400 rounded whitespace-nowrap">
                    {project.language}
                  </span>
                )}
              </div>
              
              <p className="text-slate-400 text-sm mb-4 line-clamp-3 min-h-[60px]">
                {project.description || "No description provided"}
              </p>
              
              {project.topics && project.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.topics.slice(0, 5).map((topic, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    {project.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
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
                  className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 text-sm font-medium"
                >
                  View
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
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

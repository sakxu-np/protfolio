import React from "react";

const About: React.FC = () => {
  const skills = {
    "Frontend": ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS", "Vite"],
    "Backend": ["Node.js", "Express","REST APIs"],
    "Tools & Others": ["Git", "GitHub", "VS Code", "npm/yarn", "Responsive Design"]
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <section className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/20">
              👤 Get to Know Me
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h1>
        </div>
        
        <div className="space-y-8 text-slate-300">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 rounded-2xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-semibold text-emerald-400">Who I Am</h2>
            </div>
            <p className="text-lg leading-relaxed mb-4 text-slate-200">
              Hello! I'm <span className="text-emerald-400 font-semibold">Sadikshya Neupane</span>, an aspiring web developer passionate about creating 
              beautiful and functional websites. I'm currently studying and learning modern web 
              technologies to build my skills in this exciting field.
            </p>
            <p className="text-lg leading-relaxed text-slate-200">
              I love learning new things every day and turning ideas into code. My goal is to 
              create projects that solve real problems and deliver great user experiences.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              Technical Skills
            </h2>
            <p className="text-slate-400 mb-6 text-lg">
              Technologies and tools I work with to bring ideas to life:
            </p>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                  <h3 className="text-xl font-medium text-emerald-400 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill) => (
                      <span 
                        key={skill}
                        className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm transition-all border border-slate-700 hover:border-emerald-500 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-semibold">What I Do</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <span className="text-emerald-500 mt-1 text-xl">✓</span>
                <span className="text-slate-200 group-hover:text-emerald-400 transition-colors">Build responsive and interactive web applications using modern frameworks</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-emerald-500 mt-1 text-xl">✓</span>
                <span className="text-slate-200 group-hover:text-emerald-400 transition-colors">Create beautiful user interfaces with React, TypeScript, and Tailwind CSS</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-emerald-500 mt-1 text-xl">✓</span>
                <span className="text-slate-200 group-hover:text-emerald-400 transition-colors">Develop RESTful APIs and backend services with Node.js</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-emerald-500 mt-1 text-xl">✓</span>
                <span className="text-slate-200 group-hover:text-emerald-400 transition-colors">Write clean, maintainable, and well-documented code</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-emerald-500 mt-1 text-xl">✓</span>
                <span className="text-slate-200 group-hover:text-emerald-400 transition-colors">Collaborate with teams using Git and GitHub</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-emerald-500/10 rounded-2xl p-8 border border-emerald-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-3xl font-semibold">Education & Experience</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-medium text-emerald-400 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                  </svg>
                  Education
                </h3>
                <p className="text-slate-200 font-medium">
                  Bachelor's in BIT
                </p>
                <p className="text-slate-300 text-sm mt-1">
                  (Bachelor's Information Technology)
                </p>
                <p className="text-slate-400 text-sm mt-2">
                  Texas College of Management and IT
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-medium text-emerald-400 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path>
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                  </svg>
                  Experience
                </h3>
                <p className="text-slate-200">
                  Building projects and expanding my skills with modern web technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

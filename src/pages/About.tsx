import React from "react";

const About: React.FC = () => {
  const skills = {
    "Frontend": ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS", "Vite"],
    "Backend": ["Node.js", "Express","REST APIs"],
    "Tools & Others": ["Git", "GitHub", "VS Code", "npm/yarn", "Responsive Design"]
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h1>
        
        <div className="space-y-8 text-slate-300">
          <div className="bg-slate-800/30 rounded-lg p-8 border border-slate-700">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-400">Who I Am</h2>
            <p className="text-lg leading-relaxed mb-4">
              Hello! I'm Sadikshya Neupane, an aspiring web developer passionate about creating 
              beautiful and functional websites. I'm currently studying and learning modern web 
              technologies to build my skills in this exciting field.
            </p>
            <p className="text-lg leading-relaxed">
              I love learning new things every day and turning ideas into code. My goal is to 
              create projects that solve real problems and deliver great user experiences.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6">Technical Skills</h2>
            <p className="text-slate-400 mb-6">
              Here are the technologies and tools I work with:
            </p>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-xl font-medium text-emerald-400 mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill) => (
                      <span 
                        key={skill}
                        className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-full text-sm transition-colors border border-slate-700 hover:border-emerald-500"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/30 rounded-lg p-8 border border-slate-700">
            <h2 className="text-3xl font-semibold mb-4">What I Do</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>Build responsive and interactive web applications using modern frameworks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>Create beautiful user interfaces with React, TypeScript, and Tailwind CSS</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>Develop RESTful APIs and backend services with Node.js</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>Write clean, maintainable, and well-documented code</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>Collaborate with teams using Git and GitHub</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-lg p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-semibold mb-4">Education & Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-emerald-400">Education</h3>
                <p className="text-slate-300 mt-2">
                  Bachelor's in BIT (Bachelor's Information Technology)
                  <br />
                  <span className="text-slate-400">Texas College of Management and IT</span>
                </p>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-medium text-emerald-400">Experience</h3>
                <p className="text-slate-300 mt-2">
                  Currently building projects and expanding my portfolio with modern web technologies
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

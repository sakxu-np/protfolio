import React from "react";

const Contact: React.FC = () => {

  return (
    <div className="container mx-auto px-4 py-20">
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/20">
              📬 Let's Connect
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Feel free to reach out for collaborations, questions, or just to say hello! I'd love to hear from you.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a 
            href="mailto:sadikshya@example.com" 
            className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-all text-center group hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10"
          >
            <div className="w-14 h-14 mx-auto mb-4 bg-emerald-500/10 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
              <svg className="w-7 h-7 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
              </svg>
            </div>
            <p className="text-lg text-slate-200 font-semibold mb-2">Email</p>
            <p className="text-sm text-slate-400">sadikshya@example.com</p>
          </a>

          <a 
            href="https://github.com/sakxu-np" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-all text-center group hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10"
          >
            <div className="w-14 h-14 mx-auto mb-4 bg-emerald-500/10 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
              <svg className="w-7 h-7 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <p className="text-lg text-slate-200 font-semibold mb-2">GitHub</p>
            <p className="text-sm text-slate-400">@sakxu-np</p>
          </a>

          <a 
            href="https://www.linkedin.com/in/sadikshya-neupane-960784397" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-all text-center group hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10"
          >
            <div className="w-14 h-14 mx-auto mb-4 bg-emerald-500/10 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
              <svg className="w-7 h-7 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <p className="text-lg text-slate-200 font-semibold mb-2">LinkedIn</p>
            <p className="text-sm text-slate-400">Sadikshya Neupane</p>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;

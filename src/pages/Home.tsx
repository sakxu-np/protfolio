import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <section className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mb-8">
          I'm a developer passionate about creating beautiful and functional web experiences.
        </p>
        <div className="flex gap-4">
          <Link to="/portfolio" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors">
            View Projects
          </Link>
          <Link to="/contact" className="px-6 py-3 border border-slate-700 hover:border-emerald-500 rounded-lg transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const location = useLocation();
    
    const isActive = (path: string) => {
        return location.pathname === path ? 'text-emerald-500' : 'hover:text-emerald-500';
    };
    
    return (
        <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-sm border-b border-slate-800">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2">
                        <span className="text-emerald-500 text-2xl">•</span>
                        <span className="text-xl font-bold">Sadikshya Neupane</span>
                    </Link>
                    <nav className="flex gap-8">
                        <Link to="/" className={`transition-colors ${isActive('/')}`}>Home</Link>
                        <Link to="/about" className={`transition-colors ${isActive('/about')}`}>About</Link>
                        <Link to="/portfolio" className={`transition-colors ${isActive('/portfolio')}`}>Portfolio</Link>
                        <Link to="/contact" className={`transition-colors ${isActive('/contact')}`}>Contact</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;




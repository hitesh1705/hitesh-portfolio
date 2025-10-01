import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar: React.FC = () => {
return (
<nav className="bg-white shadow sticky top-0 z-50">
<div className="container mx-auto px-6 py-4 flex items-center justify-between">
<div className="text-xl font-bold text-gray-800">Hitesh Yarlagadda</div>
<div className="flex items-center gap-6 text-gray-700">
<a href="#projects" className="hover:text-blue-600">Projects</a>
<a href="#experience" className="nav-link">Experience</a>
<a href="#contact" className="hover:text-blue-600">Contact</a>
<a href="https://www.linkedin.com/in/hitesh-yarlagadda-9bb799119/" target="_blank" rel="noreferrer" className="hover:text-blue-600"><FaLinkedin size={20} /></a>
<a href="https://github.com/hitesh1705" target="_blank" rel="noreferrer" className="hover:text-blue-600"><FaGithub size={20} /></a>
</div>
</div>
</nav>
);
};

export default Navbar;
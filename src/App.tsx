import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './index.css';

const App: React.FC = () => {
return (
<div className="min-h-screen flex flex-col bg-gray-50">
<Navbar />
<main className="flex-1">
<Hero />
<section className="container mx-auto px-6">
<About />
<Experience />
<Projects />
<Skills />
<Contact />
</section>
</main>
<footer className="bg-gray-900 text-gray-400 py-6 mt-12">
<div className="container mx-auto px-4 text-center text-sm">
© {new Date().getFullYear()} Hitesh Yarlagadda — Built with React & TailwindCSS.
</div>
</footer>
</div>
);
};

export default App;
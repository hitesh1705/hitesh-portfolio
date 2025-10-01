import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Hi — I’m Hitesh Yarlagadda</h1>
          <p className="text-lg md:text-xl mb-6">
            I am a Master’s student in Computer Science at Northeastern University, passionate about software development, AI, and machine learning. With hands-on experience in full-stack development, data analytics, and AI/ML projects. I am eager to contribute to innovative teams in roles like Software Engineer, AI/ML Engineer, or Data Scientist.
          </p>
          <div className="flex gap-4">
            <a
              className="px-5 py-3 bg-white text-blue-600 font-medium rounded-lg shadow hover:bg-gray-100 transition"
              href="/Hitesh_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
            <a
              className="px-5 py-3 border border-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition"
              href="#projects"
            >
              See Projects
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/images/Image1.jpeg"
            alt="Hitesh Yarlagadda"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
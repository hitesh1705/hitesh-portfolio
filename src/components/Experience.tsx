import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-blue-600 inline-block">
        Experience
      </h2>
      <article>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-bold text-xl text-gray-800">Software Engineer — CodeFacts IT Solutions</h3>
            <p className="text-sm text-gray-500">Jan 2023 – Dec 2023 · Hyderabad, India</p>
          </div>
          <div className="mt-2 md:mt-0 text-sm text-gray-500">React, Node.js, MongoDB</div>
        </div>
        <ul className="mt-4 list-disc pl-6 text-gray-700 space-y-2">
          <li>Built a scalable full‑stack app using React & Node.js, reducing load times by 30%.</li>
          <li>Designed RESTful APIs and optimized MongoDB schemas and indexes, improving query times by 40%.</li>
          <li>Implemented CI/CD pipelines using GitHub Actions to automate builds and deployments.</li>
        </ul>
      </article>
    </section>
  );
};

export default Experience;
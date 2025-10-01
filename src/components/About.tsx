import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-blue-600 inline-block">About</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <img
            src="/images/Image1.jpeg"
            alt="Your Name"
            className="w-48 h-48 rounded-full mx-auto mb-6 md:mb-0"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-700">Education</h3>
          <ul className="mt-3 space-y-3 text-gray-600">
            <li><strong>Northeastern University</strong> — MS in Computer Science (Jan 2024 – Dec 2025), GPA: 3.76</li>
            <li><strong>Vellore Institute of Technology</strong> — B.Tech Computer Science (July 2019 – May 2023), CGPA: 8.46</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-700">Certifications & Courses</h3>
          <p className="mt-3 text-gray-600">
            <a
              href="https://www.credly.com/badges/8f2ecd78-3c8f-41a6-9a6e-06376a3174e0/public_url"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              AWS Certified Cloud Practitioner
            </a>,{' '}
            <a
              href="https://www.cloudskillsboost.google/public_profiles/7152a514-77c6-4514-9ddb-4b69112751ef"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              Google Cloud Skills
            </a>.
          </p>
          <p className="mt-3 text-gray-600">
            Completed courses in Data Structures, Algorithms, Database Management Systems, Artificial Intelligence, Data Analytics, and Mobile Application Development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
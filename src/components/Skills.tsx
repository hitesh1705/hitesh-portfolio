import React from 'react';

const Skills: React.FC = () => {
  const skills = {
    Programming: ['SQL', 'Python', 'Java', 'Swift', 'Flask', 'C++', 'Pandas', 'HTML/CSS', 'JavaScript', 'React.js', 'Express.js', 'Node.js'],
    Databases: ['MySQL', 'PostgreSQL', 'Microsoft SQL Server', 'Redis', 'NoSQL (MongoDB)'],
    Tools: ['PowerBI', 'Git', 'Tableau', 'MS Excel', 'Jupyter Notebook', 'IntelliJ', 'XCode', 'Docker', 'Kubernetes'],
    Cloud: ['AWS (Lambda, EC2, EMR, Glue, S3)', 'GCP (DataProc, Composer, BigQuery)'],
  };

  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-blue-600 inline-block">Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">{category}</h3>
            <ul className="space-y-2">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="px-4 py-2 bg-white rounded-lg shadow text-sm font-medium text-gray-700 hover:bg-blue-100 transition"
                  aria-label={`Skill: ${skill}`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
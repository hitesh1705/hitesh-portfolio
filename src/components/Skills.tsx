import React from 'react';

const Skills: React.FC = () => {
const skills: string[] = ['Java', 'Python', 'C++', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'MySQL', 'Docker', 'AWS'];
return (
<section id="skills" className="py-16">
<h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-blue-600 inline-block">Skills</h2>
<div className="flex flex-wrap gap-3">
{skills.map((s) => (
<span key={s} className="px-4 py-2 bg-white rounded-lg shadow text-sm font-medium text-gray-700">{s}</span>
))}
</div>
</section>
);
};

export default Skills;
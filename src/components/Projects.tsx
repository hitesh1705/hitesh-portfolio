import React from 'react';

type Project = {
title: string;
desc: string;
link: string;
};

const projectList: Project[] = [
{
title: 'Similar Document Retrieval Engine',
desc: 'Semantic search using FAISS and embeddings. Deployed on AWS EKS.',
link: 'https://github.com/hitesh1705/Similar-Document-Retrieval'
},
{
title: 'Twitter Topic Modeling via LDA',
desc: 'Analyzed 50k+ tweets using LDA to extract topics and trends, Flask visualizations.',
link: 'https://github.com/hitesh1705/Twitter-LDA'
},
{
title: 'Prediction of Mobile Prices',
desc: 'Trained ML models achieving 93.5% accuracy in predicting mobile price ranges.',
link: 'https://github.com/hitesh1705/Prediction_Of_Mobile_Prices'
},
{
title: 'Hostel Management System',
desc: 'Portal for student room allocations with PHP & MySQL, reducing manual errors.',
link: 'https://github.com/hitesh1705/Hostel-Management-System'
}
];

const Projects: React.FC = () => {
return (
<section id="projects" className="py-16">
<h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-blue-600 inline-block">Selected Projects</h2>
<div className="grid md:grid-cols-2 gap-8">
{projectList.map((p, i) => (
<a key={i} href={p.link} target="_blank" rel="noreferrer" className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
<h3 className="text-xl font-semibold text-gray-800">{p.title}</h3>
<p className="mt-2 text-gray-600">{p.desc}</p>
</a>
))}
</div>
</section>
);
};

export default Projects;

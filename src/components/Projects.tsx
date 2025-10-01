import React from 'react';

const projectList = [
  {
    title: 'Research Paper Summarization using Knowledge Graphs',
    desc: 'A Research paper summarization system leveraging Knowledge Graphs',
    link: 'https://github.com/hitesh1705/Research-Paper-Summarization-using-KG',
  },
  {
    title: 'Twitter Topic Modeling via LDA',
    desc: 'Analyzed 50k+ tweets using LDA to extract topics and trends, Flask visualizations.',
    link: 'https://github.com/hitesh1705/twitter_topic_modeling_cs5100',
  },
  {
    title: 'Similar Document Search Application',
    desc: 'Semantic search using FAISS and embeddings. Deployed on AWS EKS.',
    link: 'https://github.com/hitesh1705/Similar_Document_Search'
    },
    {
    title: 'Spotify Analytics Application',
    desc: 'A web application utilizing Spotify APIs for personalized analytics and recommendations',
    link: 'https://github.com/hitesh1705/spotify_analytics'
    },
    {
    title: 'Prediction of Mobile Prices',
    desc: 'Trained ML models achieving 93.5% accuracy in predicting mobile price ranges.',
    link: 'https://github.com/hitesh1705/Prediction_Of_Mobile_Prices'
    }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-blue-600 inline-block">Selected Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projectList.length === 0 ? (
          <p className="text-gray-600">No projects to display at the moment.</p>
        ) : (
          projectList.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform"
              aria-label={`View project: ${p.title}`}
            >
              <h3 className="text-xl font-semibold text-gray-800">{p.title}</h3>
              <p className="mt-2 text-gray-600">{p.desc}</p>
            </a>
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;

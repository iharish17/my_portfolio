import React from 'react';
import { ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Digital Signature Web App',
      description: [
        'Developed a Digital Signature Application enabling users to securely upload, sign, and verify documents.',
        'Implemented secure authentication and document integrity using encrypted signature workflows, and JWT-based user sessions to prevent unauthorized access.'
      ],
      tags: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', ],
      category: 'Full Stack',
      link: null
    },
    {
      title: 'Freelancing Platform',
       description: [
        'Developed a responsive freelancing platform supporting two user roles — freelancer and client — with secure account creation and role-based access.',
        'Implemented gig creation, ordering workflow, and a dedicated freelancer dashboard to manage incoming orders, payments, and activity data efficiently.'
      ],
      tags: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs',],
      category: 'Full Stack',
      link: null
    },
    {
      title: 'Face Detection using OpenCV',
      description: [
        'Developed a Python-based gender detection system using Flask, OpenCV, and NumPy to analyze images and real-time webcam video.',
        'Implemented deep learning–based face detection and gender classification, displaying prediction results through a simple and interactive web interface.'
      ],
      tags: ['Python', 'Flask', 'NumPy', 'OpenCV', 'HTML', 'CSS', 'Deep Learning'],
      category: 'AI/ML',
      link: null
    },
    {
      title: 'Object Detection using YOLOv8',
       description: [
        'Developed a Flask-based YOLOv8 object detection application supporting image uploads and real-time webcam detection using OpenCV.',
        'Implemented high-performance object recognition to accurately detect people and multiple objects with fast inference and reliable results.'
      ],
      tags: ['Python', 'Flask', 'YOLOv8', 'OpenCV', 'Computer Vision'],
      category: 'AI/ML',
      link: null
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="text-emerald-400">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-emerald-400 mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden hover:border-emerald-400/50 transition-all duration-300 group hover:transform hover:scale-[1.02]"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-all duration-300">
                      <Folder className="text-emerald-400" size={24} />
                    </div>
                    <span className="ml-3 px-3 py-1 bg-slate-800 text-emerald-400 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-800 text-gray-400 rounded-lg text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
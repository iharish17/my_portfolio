import React from 'react';
import { ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Digital Signature Web App',
      description: [
        'Developed a secure digital signature system enabling users to upload, sign, and download document.',
        'Integrated JWT-based authentication to prevent unauthorized access.'
      ],
      tags: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', ],
      category: 'Full Stack',
      link: 'https://github.com/iharish17/frontend-signature'
    },
    {
      title: 'Freelancing Platform',
       description: [
        'Built a full-stack freelancing platform supporting freelancer and client user roles.',
        'Implemented secure registration, login, and role-based access control.',
        'Developed gig creation, order management, and freelancer dashboard features.',
        'Enabled structured workflow for order tracking and activity management.'
      ],
      tags: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs',],
      category: 'Full Stack',
      link: 'https://github.com/iharish17/freelancersHUB'
    },
    {
      title: 'Face & Gender Detection System',
      description: [
        'Developed a computer vision application to detect faces and predict gender from images and live webcam feed.',
         'Utilized deep learning–based face detection models for accurate classification.'
        ],
      tags: ['Python', 'Flask', 'NumPy', 'OpenCV', 'HTML', 'CSS', 'Deep Learning'],
      category: 'AI/ML',
      link: 'https://github.com/iharish17/Face_Detection'
    },
    {
      title: 'YOLOv8 Object Detection System',
       description: [
        'Built an object detection application supporting image uploads and real-time webcam detection.',
        'Implemented YOLOv8 for fast and accurate multi-object recognition.',
        'Achieved reliable inference performance for detecting people and common objects.'
      ],
      tags: ['Python', 'Flask', 'YOLOv8', 'OpenCV', 'Computer Vision'],
      category: 'AI/ML',
      link: 'https://github.com/iharish17/Object_Detection'
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
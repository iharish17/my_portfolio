import React from 'react';
import { ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Digital Signature Web App',
      description: 'A responsive digital signature web app made using MERN Stack. Upload the PDF you want to sign, add your signature, and download it seamlessly.',
      tags: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
      category: 'Full Stack',
      link: null
    },
    {
      title: 'Freelancing Platform',
      description: 'A comprehensive freelancing website with dual role accounts (Freelancer & Client). Features gig creation, order management, and a complete freelancer dashboard for tracking orders and payments.',
      tags: ['MERN Stack', 'JWT Auth', 'REST API', 'Dashboard'],
      category: 'Full Stack',
      link: null
    },
    {
      title: 'Face Detection using OpenCV',
      description: 'Python project built using Flask, OpenCV, and NumPy that detects faces and predicts gender from images or webcam video using deep learning models.',
      tags: ['Python', 'Flask', 'OpenCV', 'NumPy', 'Deep Learning'],
      category: 'AI/ML',
      link: null
    },
    {
      title: 'Object Detection using YOLOv8',
      description: 'Flask-based YOLOv8 object detection app with image upload and real-time webcam detection using OpenCV, enabling fast and accurate detection of people and objects.',
      tags: ['Python', 'Flask', 'YOLOv8', 'OpenCV', 'Computer Vision'],
      category: 'AI/ML',
      link: null
    },
    {
      title: 'Weather App using OpenWeather API',
      description: 'A responsive PWA web app built with Flask, JavaScript, HTML, and CSS. Features real-time weather data, location-based detection, city search, and hourly/multi-day forecasts.',
      tags: ['Flask', 'JavaScript', 'PWA', 'API Integration'],
      category: 'AI/ML',
      link: null
    }
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
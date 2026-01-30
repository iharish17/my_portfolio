import React from 'react';
import { Briefcase, Users, Award,} from 'lucide-react';

const Experience = () => {
  const experiences = [
      {
      title: 'Campus Mantri (Campus Ambassador)',
      company: 'GeeksforGeeks',
      location: 'Remote',
      period: '2024 - Present',
      icon: Award,
      description: [
        'Joined as a Campus Mantri, actively developing leadership skills, learning new initiatives, and supporting students in gaining technical knowledge and growth opportunities.'
      ]
    },
    {
      title: 'Co-Organizer',
      company: 'HACKtoLEARN',
      location: 'Part-Time (Remote)',
      period: 'Oct 2024 - Dec 2024',
      icon: Users,
      description: [
        'Served as Co-Organizer for an online hackathon, assisting in planning, coordination, and smooth execution of the event.',
        'Managed participant onboarding, team coordination, and communication workflows, supporting 100+ participants throughout the hackathon.',
        'Collaborated with the organizing team on problem statement design, mentor coordination, submission evaluation flow, and final result announcements.'
      ]
    },
    {
      title: 'Full Stack Intern',
      company: 'Labmentix',
      location: 'Remote',
      period: 'Jun 2025 - Aug 2025',
      icon: Briefcase,
      description: [
        'Joined as a Full Stack Intern as a fresher, quickly adapting to the development workflow and collaborating with the team on real-world applications.',
        'Contributed to two full-stack projects — Freelancer Web App and Digital Signature Web App — working on frontend-backend integration and feature implementation.',
        'Gained hands-on experience with RESTful APIs, JWT-based authentication, API testing using Postman, and debugging end-to-end application flows.'
      ]
    },

  ];

  return (
    <section id="experience" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My <span className="text-emerald-400">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-emerald-400 mx-auto mb-16"></div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-800"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-emerald-500 rounded-full items-center justify-center z-10 border-4 border-slate-950">
                    <Icon size={20} className="text-white" />
                  </div>

                  <div className={`md:flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-center`}>
                    <div className="md:w-1/2"></div>
                    <div className="md:w-1/2 md:px-8">
                      <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-105">
                        <div className="flex items-start mb-4">
                          <div className="md:hidden p-2 bg-emerald-500/10 rounded-lg mr-4">
                            <Icon className="text-emerald-400" size={24} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                            <p className="text-emerald-400 font-medium">{exp.company}</p>
                            <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                              <span>{exp.location}</span>
                              <span>•</span>
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {exp.description.map((point, idx) => (
                            <li key={idx} className="text-gray-400 text-sm leading-relaxed flex">
                              <span className="text-emerald-400 mr-2">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
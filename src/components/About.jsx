import React from 'react';
import { GraduationCap, Award, Code } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '3+' },
    { icon: Award, label: 'Certifications', value: '10+' },
    { icon: GraduationCap, label: 'CGPA', value: '8.43 (First Year)' }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About <span className="text-emerald-400">Me</span>
        </h2>
        <div className="w-20 h-1 bg-emerald-400 mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-emerald-400">Who am I?</h3>
            <p className="text-gray-400 leading-relaxed">
              I'm a passionate B.Tech student specializing in Computer Science with Artificial Intelligence and Machine Learning 
              at Kanpur Institute of Technology. With hands-on experience in full-stack development and AI/ML projects, 
              I love turning ideas into reality through code.
            </p>
            <p className="text-gray-400 leading-relaxed">
              As a Full Stack Intern at Labmentix, I've worked on real-world applications using the MERN stack, 
              gaining expertise in RESTful APIs, JWT authentication, and end-to-end development workflows. 
              I'm also active in the tech community as a Campus Mantri for GeeksforGeeks and have organized 
              successful hackathons with 700+ participants.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-slate-800 text-emerald-400 rounded-lg text-sm font-medium">MERN Stack</span>
              <span className="px-4 py-2 bg-slate-800 text-emerald-400 rounded-lg text-sm font-medium">AI/ML</span>
              <span className="px-4 py-2 bg-slate-800 text-emerald-400 rounded-lg text-sm font-medium">Computer Vision</span>
              <span className="px-4 py-2 bg-slate-800 text-emerald-400 rounded-lg text-sm font-medium">REST APIs</span>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-emerald-400">Education</h3>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-emerald-400/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-xl font-semibold text-white">B. Tech CS-AIML</h4>
                  <p className="text-emerald-400 text-sm mt-1">Kanpur Institute of Technology, Kanpur, UP</p>
                </div>
                <span className="text-gray-400 text-sm">2024 - 2028</span>
              </div>
              <p className="text-gray-400">CGPA: <span className="text-emerald-400 font-semibold">8.43</span> (1st Year)</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-emerald-400/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-xl font-semibold text-white">Class XII</h4>
                  <p className="text-emerald-400 text-sm mt-1">Government HSS Chhan Rorian, Kathua, J&K</p>
                </div>
                <span className="text-gray-400 text-sm">2023 - 2024</span>
              </div>
              <p className="text-gray-400">Percentage: <span className="text-emerald-400 font-semibold">78%</span></p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-emerald-400/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-xl font-semibold text-white">Class X</h4>
                  <p className="text-emerald-400 text-sm mt-1">Government High School Khanpur, Kathua, J&K</p>
                </div>
                <span className="text-gray-400 text-sm">2021 - 2022</span>
              </div>
              <p className="text-gray-400">Percentage: <span className="text-emerald-400 font-semibold">90%</span></p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-slate-800 p-8 rounded-xl text-center border border-slate-700 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/10 rounded-full mb-4">
                  <Icon className="text-emerald-400" size={32} />
                </div>
                <h4 className="text-3xl font-bold text-white mb-2">{stat.value}</h4>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
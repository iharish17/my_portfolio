import React from 'react';
import { Github, Linkedin, Mail,} from 'lucide-react';
import { SiGeeksforgeeks } from "react-icons/si";

const Hero = ({ onResumeClick }) => {
  const socialLinks = [
    { icon: Github, url: 'https://github.com/iharish17', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/harishk18', label: 'LinkedIn' },
    { icon: Mail, url: 'mailto:harishk3445@gmail.com', label: 'Email' },
    { icon: SiGeeksforgeeks , url: 'https://www.geeksforgeeks.org/profile/harishk19', label: 'GeeksforGeeks' }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <p className="text-emerald-400 text-lg font-medium mb-4">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Harish Kumar
          </h1>
          <p className="text-2xl md:text-3xl text-gray-400 font-light mb-8">
            Full Stack Developer & AI/ML Enthusiast
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
            B.Tech CS-AIML Student passionate about building innovative web applications and exploring artificial intelligence. 
            Experienced in MERN Stack development and computer vision projects.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <button
            onClick={onResumeClick}
            className="px-8 py-3 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50"
          >
            View Resume
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-3 border-2 border-emerald-500 text-emerald-400 rounded-lg font-medium hover:bg-emerald-500 hover:text-white transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        <div className="flex items-center justify-center gap-6 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg text-gray-400 hover:text-emerald-400 hover:bg-slate-700 transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
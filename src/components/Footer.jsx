import React, { useState } from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { SiGeeksforgeeks, SiDiscord, SiInstagram } from 'react-icons/si';
import ContactModal from './ContactModal'; 

const Footer = () => {
  const [openContact, setOpenContact] = useState(false);

  const socialLinks = [
{ icon: Github, url: 'https://github.com/iharish17', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/harishk18', label: 'LinkedIn' },
    { icon: Mail, url: 'mailto:harishk3445@gmail.com', label: 'Email' },
    { icon: SiGeeksforgeeks, url: 'https://www.geeksforgeeks.org/profile/harishk19', label: 'GeeksforGeeks' },
    { icon: SiDiscord, url: 'https://discord.com/channels/hey.harish', label: 'Discord' },
    { icon: SiInstagram, url: 'https://www.instagram.com/hey._harish', label: 'Instagram' }
  ];

  return (
    <>
      <footer id="contact" className="bg-slate-900 border-t border-slate-800 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Let's <span className="text-emerald-400">Connect</span>
            </h2>

            <p className="text-gray-400 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>

            <button
              onClick={() => setOpenContact(true)}
              className="inline-block px-8 py-3 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 mb-8">
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

          <div className="text-center text-gray-500 text-sm">
            <p className="flex items-center justify-center gap-2">
              Designed & Built with <Heart size={16} className="text-emerald-400" fill="currentColor" /> by Harish Kumar
            </p>
            <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ContactModal
        isOpen={openContact}
        onClose={() => setOpenContact(false)}
      />
    </>
  );
};

export default Footer;

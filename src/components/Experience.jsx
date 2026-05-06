import React, { useState, useEffect, useRef } from "react";
import {
  Briefcase,
  Award,
  FileText,
  ExternalLink,
  Download,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Campus Mantri (Campus Ambassador)",
      company: "GeeksforGeeks",
      companyUrl: "https://www.geeksforgeeks.org",
      location: "Remote",
      period: "2024 - Present",
      icon: Award,
      offerLetterUrl: "/offer-letter.pdf",
      lorUrl: "/lor.pdf",
      description: [
        "Actively involved in leadership development and student engagement initiatives.",
        "Promoted technical learning, coding culture, and awareness of GeeksforGeeks programs.",
        "Ranked AIR-217 out of 1000+ Campus Mantris and got the Letter of Recommendation.",
      ],
    },
    {
      title: "Full Stack Intern",
      company: "Labmentix",
      companyUrl: "https://www.labmentix.in",
      location: "Remote Internship",
      period: "Jun 2025 - Aug 2025",
      icon: Briefcase,
      description: [
        "Worked on real-world full-stack web applications with frontend–backend integration.",
        "Developed RESTful APIs and implemented JWT-based authentication and authorization.",
        "Contributed to two major projects: Freelancer Web Application and Digital Signature Web Application.",
        "Performed API testing and debugging using Postman to ensure smooth end-to-end workflows.",
      ],
    },
  ];

  const [selectedDoc, setSelectedDoc] = useState(null);
  const modalRef = useRef();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedDoc(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setSelectedDoc(null);
    }
  };

  return (
    <>
      <section id="experience" className="py-24 px-6 glass-section">
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

                    <div
                      className={`md:flex ${
                        isEven ? "flex-row" : "flex-row-reverse"
                      } items-center`}
                    >
                      <div className="md:w-1/2"></div>
                      <div className="md:w-1/2 md:px-8">
                        <div
                          className="portfolio-card reveal-card"
                          style={{ "--reveal-delay": `${index * 90}ms` }}
                        >
                          <div className="flex items-start mb-4">
                            <div className="md:hidden p-2 bg-emerald-500/10 rounded-lg mr-4">
                              <Icon className="text-emerald-400" size={24} />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-white mb-1">
                                {exp.title}
                              </h3>
                              <a
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-emerald-400 font-medium hover:text-emerald-300 hover:underline transition"
                              >
                                {exp.company}
                              </a>
                              {(exp.offerLetterUrl || exp.lorUrl) && (
                                <div className="mt-2 flex flex-wrap gap-3">
                                  {exp.offerLetterUrl && (
                                    <button
                                      onClick={() =>
                                        setSelectedDoc({
                                          title: `Offer Letter — ${exp.company}`,
                                          url: exp.offerLetterUrl,
                                          filename: exp.offerLetterUrl
                                            .split("/")
                                            .pop(),
                                        })
                                      }
                                      className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:underline"
                                    >
                                      <FileText size={16} />
                                      <span>Offer Letter</span>
                                    </button>
                                  )}
                                  {exp.lorUrl && (
                                    <button
                                      onClick={() =>
                                        setSelectedDoc({
                                          title: `Letter of Recommendation — ${exp.company}`,
                                          url: exp.lorUrl,
                                          filename: exp.lorUrl.split("/").pop(),
                                        })
                                      }
                                      className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:underline"
                                    >
                                      <ExternalLink size={16} />
                                      <span>Letter of Recommendation</span>
                                    </button>
                                  )}
                                </div>
                              )}
                              <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                                <span>{exp.location}</span>
                                <span>•</span>
                                <span>{exp.period}</span>
                              </div>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {exp.description.map((point, idx) => (
                              <li
                                key={idx}
                                className="text-gray-400 text-sm leading-relaxed flex"
                              >
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

      <AnimatePresence>
        {selectedDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOutsideClick}
            className="fixed inset-0 backdrop-blur-lg bg-white/10 flex items-center justify-center z-50"
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col border border-white/20"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-800">
                <h2 className="text-2xl font-bold text-white">
                  {selectedDoc?.title}
                </h2>
                <button
                  onClick={() => setSelectedDoc(null)}
                  className="p-2 text-white hover:text-emerald-400"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-auto p-6">
                <div className="bg-slate-950 rounded-lg border border-slate-800 overflow-hidden">
                  <iframe
                    src={selectedDoc?.url}
                    title={selectedDoc?.title}
                    className="w-full h-[600px]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 p-6 border-t border-slate-800">
                <button
                  onClick={() => window.open(selectedDoc?.url, "_blank")}
                  className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 hover:scale-105"
                >
                  <ExternalLink size={20} />
                  View in New Tab
                </button>

                <a
                  href={selectedDoc?.url}
                  download={selectedDoc?.filename}
                  className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-all duration-300 hover:scale-105"
                >
                  <Download size={20} />
                  Download
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Experience;

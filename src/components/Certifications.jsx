import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Download, X, CheckCircle } from "lucide-react";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const modalRef = useRef();

  const certificationsData = [
    {
      title: "Python for Data Science",
      description:
        "Completed the course covering Python basics, data science libraries.",
      issuer: "GeeksforGeeks",
      issuerLogo:
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200817185016/gfg_complete_logo_2x-min.png",
      pdf: "/certificate-data-science.pdf",
      verified: true,
      details: ["Python", "Data Science", "Certificate"],
    },
    {
      title: "Software Engineering Job Simulation by Forage",
      description:
        "Completed a comprehensive job simulation program covering software engineering concepts, coding challenges.",
      issuer: "Accenture",
      issuerLogo:
        "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
      pdf: "/certificate-accenture.pdf",
      verified: true,
      details: ["software Engineering", "Coding challenges", "Projects"],
    },
    {
      title: "Solutions Architecture Job Simulationby Forage",
      description:
        "Completed a comprehensive job simulation program covering solution architecture concepts, system design challenges.",
      issuer: "AWS",
      issuerLogo:
        "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      pdf: "/certificate-aws.pdf",
      verified: true,
      details: ["Solutions Architecture", "System Design", "Projects"],
    },
  ];

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  /* Outside Click Close */
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setSelectedCert(null);
    }
  };

  return (
    <section id="certifications" className="py-24 px-6 glass-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          My <span className="text-emerald-400">Certifications</span>
        </h2>
        <div className="w-20 h-1 bg-emerald-400 mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="portfolio-card reveal-card"
              style={{ "--reveal-delay": `${index * 90}ms` }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={cert.issuerLogo}
                    alt={cert.issuer}
                    className="w-10 h-10 object-contain bg-white rounded-md p-1"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                  </div>
                </div>

                {/* Shimmer Verified Badge */}
                {cert.verified && (
                  <div className="relative">
                    <CheckCircle size={20} className="text-emerald-400" />
                    <span className="absolute inset-0 shimmer rounded-full"></span>
                  </div>
                )}
              </div>

              <p className="text-gray-400 text-sm mb-5">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {cert.details.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-800 text-gray-300
                    rounded-lg text-sm hover:bg-emerald-500/20
                    hover:text-emerald-400 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedCert(cert)}
                className="flex items-center gap-2 text-sm
                text-emerald-400 hover:text-white transition"
              >
                <ExternalLink size={16} />
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Glassmorphism Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOutsideClick}
            className="fixed inset-0 backdrop-blur-lg bg-white/10
            flex items-center justify-center z-50"
          >
            
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20
              w-[90%] max-w-4xl p-6 rounded-2xl relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 text-white hover:text-emerald-400"
              >
                <X />
              </button>

              <h3 className="text-xl text-white mb-4">
                {selectedCert.title}
              </h3>

              <iframe
                src={selectedCert.pdf}
                title="Certificate Preview"
                className="w-full h-[500px] rounded-lg border border-white/20 mb-4"
              />

              <a
                href={selectedCert.pdf}
                download
                className="inline-flex items-center gap-2 px-4 py-2
                bg-emerald-500 text-white rounded-lg
                hover:bg-emerald-600 transition"
              >
                <Download size={16} />
                Download Certificate
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
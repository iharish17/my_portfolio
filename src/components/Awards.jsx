import React from "react";
import { Trophy, Award, Star, Badge } from "lucide-react";

const Awards = () => {
  const awardsData = [
    {
      title: "Hackathon Runner-Up",
      icon: Trophy,
      description:
        "Developed an AI-ML based project for recognizing Indian cattle breeds, securing 6th position among 80+ teams and received a Certificate of Merit.",
      details: ["Aviothic 2.0", "College Hackathon", "6th Position", "Team Work"],
    },
    {
      title: "HPL 2.0 Runner-Up",
      icon: Award,
      description:
        "Finished as runner-up in HPL 2.0 cricket tournament, showcasing teamwork and leadership.",
      details: ["Cricket", "Team Work", "Medal", "Certificate of Achivement"],
    },
    {
      title: "5x National Hackathon Finalist",
      icon: Star,
      description:
        "Qualified as finalist in multiple national-level hackathons.",
      details: ["RIFT'26", "Hack-Nocturne 2.0", "DU Hacks", "AceHack 5.0", "Hacksagon 2026"],
    },
    {
      title: "Campus Mantri",
      icon: Badge,
      description:
        "Contributing as a Campus Ambassador at GeeksforGeeks ",
      details: ["Leadership", "Communication", "AIR 217", "Letter of Recommendation"],
    },
  ];

  return (
    <section id="awards" className="py-24 px-6 glass-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          My <span className="text-emerald-400">Awards & Achievements</span>
        </h2>
        <div className="w-20 h-1 bg-emerald-400 mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awardsData.map((award, index) => {
            const Icon = award.icon;

            return (
              <div
                key={index}
                className="portfolio-card reveal-card"
                style={{ "--reveal-delay": `${index * 90}ms` }}
              >
                {/* Header: Icon + Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-emerald-500/10 rounded-lg">
                    <Icon className="text-emerald-400" size={24} />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {award.title}
                  </h3>
                </div>

                {/* Description: full width from card start */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {award.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {award.details.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-slate-800 text-gray-300
                      rounded-lg text-sm font-medium
                      hover:bg-emerald-500/20 hover:text-emerald-400
                      transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Awards;

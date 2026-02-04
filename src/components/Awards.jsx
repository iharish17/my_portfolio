import React from "react";
import { Trophy, Award, Star } from "lucide-react";

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
      title: "3x National Hackathon Finalist",
      icon: Star,
      description:
        "Qualified as finalist in multiple national-level hackathons.",
      details: ["RIFT'26", "Hack-Nocturne 2.0", "DU Hacks", "HackX", "Certificates of Appreciation"],
    },
  ];

  return (
    <section id="awards" className="py-24 px-6 bg-slate-950">
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
                className="bg-slate-900 p-6 rounded-xl border border-slate-800
                hover:border-emerald-400/50 hover:scale-105 transition-all"
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

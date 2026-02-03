import React from "react";
import { Trophy, Award, Star } from "lucide-react";


const Awards = () => {
  const awardsData = [
    {
      title: "Hackathon Runner-Up",
      icon: Trophy,
      details: ["6th Position", "80+ Teams", "Team Work", "AI-ML Project", "Recognition of Indian Cattle Breed", "Certificate of Merit"]
    },
    {
      title: "HPL 2.0 Runnner-Up",
      icon: Award,
      details: ["Cricket", "Team Work", "Medal", "Certificate of Achievement"]
    },
    {
      title: "3x National Hackathon Finalist",
      icon: Star,
      details: ["RIFT'26", "Hack-Nocturne 2.0 ", "DU Hacks"]
    }
  ];

  return (
    <section id="awards" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My <span className="text-emerald-400">Awards & Achievements</span>
        </h2>
        <div className="w-20 h-1 bg-emerald-400 mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awardsData.map((award, index) => {
            const Icon = award.icon;

            return (
              <div
                key={index}
                className="
                  bg-slate-900
                  p-6
                  rounded-xl
                  border border-slate-800
                  hover:border-emerald-400/50
                  transition-all duration-300
                  hover:transform hover:scale-105
                  group
                "
              >

                <div className="flex items-center mb-6">
                  <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-all duration-300">
                    <Icon className="text-emerald-400" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold ml-4">
                    {award.title}
                  </h3>
                </div>


                <div className="flex flex-wrap gap-2">
                  {award.details.map((item, idx) => (
                    <span
                      key={idx}
                      className="
                        px-3 py-1.5
                        bg-slate-800
                        text-gray-300
                        rounded-lg
                        text-sm font-medium
                        hover:bg-emerald-500/20
                        hover:text-emerald-400
                        transition-all duration-300
                        cursor-default
                      "
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

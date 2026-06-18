import React from "react";

const Hero = ({ onResumeClick, socialLinks = [] }) => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
          <div className="text-center md:text-left">
            <div
              className="mb-8 opacity-0 animate-fadeInUp"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              <p className="text-emerald-400 text-lg font-medium mb-4">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Harish Kumar
              </h1>
              <p className="text-2xl md:text-3xl text-gray-400 font-light mb-8">
                Aspiring Full Stack Developer
              </p>
              <p className="text-lg text-gray-500 max-w-2xl md:max-w-xl md:mx-0 mx-auto mb-12">
                B.Tech CS-AIML Student passionate about building innovative web
                applications and exploring artificial intelligence. Currently
                Campus Ambassador at GeeksforGeeks.
              </p>
            </div>

            <div
              className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-12 opacity-0 animate-fadeInUp"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
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

            <div
              className="flex items-center justify-center md:justify-start gap-6 opacity-0 animate-fadeInUp"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
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

          <div
            className="opacity-0 animate-fadeInUp md:translate-x-6 lg:translate-x-10"
            style={{ animationDelay: "0s", animationFillMode: "forwards" }}
          >
            <div className="hero-image-glow-wrap mx-auto w-64 h-64 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem]">
              <img
                src="/myImage.png"
                alt="Harish Kumar"
                className="w-full h-full object-contain hero-image-float"
              />
            </div>
          </div>
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

        .hero-image-glow-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-image-float {
          filter: drop-shadow(10px 0 18px rgba(16, 185, 129, 0.62))
            drop-shadow(22px 0 40px rgba(16, 185, 129, 0.42));
        }

        /* Removed animation as per the requirement */
      `}</style>
    </section>
  );
};

export default Hero;

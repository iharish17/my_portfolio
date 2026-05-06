import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Awards from "../components/Awards";
import Certifications from "../components/Certifications";
import Footer from "../components/Footer";
import ResumeModal from "../components/ResumeModal";
import CustomCursor from "../components/CustomCursor";

const Portfolio = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const cards = document.querySelectorAll(".reveal-card");
    if (!cards.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
      observer.disconnect();
    };
  }, []);

 useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const footer = document.getElementById("contact");

    const scrollMiddle = window.scrollY + window.innerHeight / 2;
    let currentSection = "home";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollMiddle >= sectionTop &&
        scrollMiddle < sectionTop + sectionHeight
      ) {
        currentSection = section.id;
      }
    });

    // 🔥 Special Footer Detection
    if (footer) {
      const footerTop = footer.offsetTop;

      // If footer top crosses middle of screen
      if (scrollMiddle >= footerTop) {
        currentSection = "contact";
      }

      // Or if user reached bottom
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5
      ) {
        currentSection = "contact";
      }
    }

    setActiveSection(currentSection);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div className="min-h-screen portfolio-glass-bg text-white">
      <CustomCursor />
      <Header
        activeSection={activeSection}
        onResumeClick={() => setIsResumeModalOpen(true)}
      />

      <Hero onResumeClick={() => setIsResumeModalOpen(true)} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Awards />
      <Certifications />
      <Footer />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};

export default Portfolio;
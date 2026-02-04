import React, { useEffect, useState } from "react";
import "./Loader.css";

const lines = [
  "Initializing Portfolio...",
  "Loading Projects & Skills...",
  "Setting Up Animations...",
  "Almost Done...",
  "Here We Go!"
];

const Loader = ({ onFinish }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [zoomOut, setZoomOut] = useState(false);

  const title = "Loading Portfolio";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentLine < lines.length - 1) {
        setCurrentLine((prev) => prev + 1);
      } else {
        setZoomOut(true);

        setTimeout(() => {
          onFinish();
        }, 800); 
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentLine, onFinish]);

  return (
    <div className={`loader-screen ${zoomOut ? "zoom-out" : ""}`}>
      <div className="loader-wrapper">
        <div className="loader-title">
          {title.split("").map((char, index) => (
            <span key={index} className="loader-letter">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>

        <div className="loader"></div>

        <p key={currentLine} className="loader-text">
          {lines[currentLine]}
        </p>
      </div>
    </div>
  );
};

export default Loader;

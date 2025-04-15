import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const navigate = useNavigate();
  const roles = ["Full Stack Developer", "App Developer", "Web Developer", "Frontend Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];

    const typingSpeed = isDeleting ? 50 : 100; // Speed up when deleting
    const delay = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(!isDeleting);

        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        } else {
          setIndex((prev) => (prev + 1) % roles.length);
          setCharIndex(0);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, Hii  I'm RaviTeja Katraju</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">{text}</span>
            <span className="cursor">|</span>
          </h1>
          <p className="hero--section-description">
            Future Graduate Class of 2026🚀 | Eager to explore and innovate in the field of technology.  
            Always excited to learn, build, and grow in the ever-evolving tech landscape.
          </p>
        </div>
        
        <div className="hero--section--buttons">
          <button 
            className="btn btn-primary" 
            onClick={() => document.getElementById("Contact").scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </button>
          <a 
            href="https://docs.google.com/document/d/1u6heNMtT7cuaiH6H8RneBaqMwFdDQpoxjt3yEAKWUDk/edit?tab=t.0" 
            download 
            className="btn btn-secondary"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero--section--img">
        <img src="./img/23A95A1203.png" alt="Hero Section" />
      </div>
    </section>
  );
}

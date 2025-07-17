import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const navigate = useNavigate();
  const roles = [
    "FullStack Developer",
    "App Developer",
    "Web Developer",
    "Frontend Developer",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];

    const typingSpeed = isDeleting ? 60 : 80; // slower typing speed
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), 1000); // longer pause before deleting
        } else {
          setIsDeleting(false);
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
          <p className="section--title">
            Eat. 🍽️ Code.👨‍💻 Sleep.😴 Repeat.🔁🎯 — I'm Ravi Teja Katraju
          </p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">{text}</span>
            <span className="cursor">|</span>
          </h1>
          <p className="hero--section-description">
            Future Graduate Class of 2026🚀 | Eager to explore and innovate in
            the field of technology. Always excited to learn, build, and grow in
            the ever-evolving tech landscape.
          </p>
        </div>

        <div className="hero--section--buttons">
          <button
            className="btn btn-primary"
            onClick={() =>
              document
                .getElementById("Contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Get In Touch
          </button>
          <a
            href="https://drive.google.com/file/d/1_GD5ip6vvYJ0jnFbKvGixT3FGcTdMLfh/view?usp=drive_link"
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

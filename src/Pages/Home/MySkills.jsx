import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaJava, FaPython, FaCode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {/* Frontend Skills */}
        <div className="skills--section--card">
          <div className="skills--section--img">
            <FaHtml5 size={48} color="#E34F26" />
            <FaCss3Alt size={48} color="#264DE4" />
            <FaJs size={48} color="#F7DF1E" />
            <FaReact size={48} color="#61DAFB" />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Frontend</h3>
            <p className="skills--section--description">
              Proficient in HTML, CSS, JavaScript, and React for building responsive and interactive user interfaces.
            </p>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="skills--section--card">
          <div className="skills--section--img">
            <SiMongodb size={48} color="#47A248" />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Backend</h3>
            <p className="skills--section--description">
              Experience with MongoDB for database management and backend development.
            </p>
          </div>
        </div>

        {/* Programming Languages */}
        <div className="skills--section--card">
          <div className="skills--section--img">
            <FaJava size={48} color="#007396" />
            <FaPython size={48} color="#3776AB" />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Programming Languages</h3>
            <p className="skills--section--description">
              Skilled in Java and Python for building robust and scalable applications.
            </p>
          </div>
        </div>

        {/* Tools */}
        <div className="skills--section--card">
          <div className="skills--section--img">
            <FaGitAlt size={48} color="#F05032" />
            <FaGithub size={48} color="#181717" />
            <FaCode size={48} color="#007ACC" />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Tools</h3>
            <p className="skills--section--description">
              Proficient in Git, GitHub, and VS Code for version control and development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
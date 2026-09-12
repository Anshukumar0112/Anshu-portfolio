import "./Hero.css";
import profile from "../../assets/anshu.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <p className="intro">Hi, I'm </p>

        <h1>
          Anshu <span>Kumar</span>
        </h1>

        <h2>Full Stack Developer</h2>

        <p className="tech-stack">
          Java • Spring Boot • React • MySQL
        </p>

        <p className="description">
          I build scalable Java web applications using Spring Boot, React, and MySQL.

          I enjoy solving real-world problems through clean backend architecture and modern web development.
        </p>

        <div className="hero-buttons">

          {/* Download Resume */}
          <a
            href="/resume.pdf"
            download="Anshu-Kumar-Resume.pdf"
            className="primary-btn"
          >
            Download Resume
          </a>

          {/* Go to Contact Page */}
          <Link
            to="/contact"
            className="secondary-btn"
          >
            Contact Me
          </Link>

        </div>

      </div>

      <div className="hero-right">

        <div className="image-bg"></div>

        <img
          src={profile}
          alt="Anshu Kumar"
          className="profile-image"
        />

      </div>

    </section>
  );
}

export default Hero;
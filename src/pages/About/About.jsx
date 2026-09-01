import React from "react";
import "./About.css";
import InfoCard from "../../components/InfoCard/InfoCard";
import { Link } from "react-router-dom";

function About() {
    const skills = [
        "Java",
        "Spring Boot",
        "SQL",
        "React",
        "JavaScript",
        "MySQL",
        "MongoDB",
        "Git",
        "GitHub",
        "REST API"
    ];

    return (
        <section className="about">

            <h1 className="section-title">About Me</h1>

            {/* About Introduction */}
            <InfoCard>
                <h2 className="about-title">
                    Hi, I'm <span>Anshu Kumar</span>
                </h2>

                <p className="about-description">
                    I recently completed my B.Tech in Computer Science &
                    Engineering and I'm continuously improving my
                    development, problem-solving and software engineering
                    skills.
                </p>

                <p className="about-description">
                    Focused on developing reliable full-stack web applications
                    using modern technologies and clean development practices.
                </p>

                <div className="about-buttons">

                    <a
                        href="/resume.pdf"
                        download="Anshu-Kumar-Resume.pdf"
                        className="primary-btn"
                    >
                        Download Resume
                    </a>

                    <Link
                        to="/contact"
                        className="secondary-btn"
                    >
                        Contact Me
                    </Link>

                </div>
            </InfoCard>

            {/* Education & Skills */}
            <div className="about-grid">

                <InfoCard>

                    <h2 className="card-heading">
                        Education
                    </h2>

                    <h3 className="degree-title">
                        B.Tech in Computer Science & Engineering
                    </h3>

                    <div className="education-details">

                        <p className="university-name">
                            Sharda University
                        </p>

                        <span>2022 – 2026</span>

                    </div>

                    <p className="cgpa">
                        CGPA: 7.23
                    </p>

                </InfoCard>

                <InfoCard>

                    <h2 className="card-heading">
                        Technical Skills
                    </h2>

                    <div className="skills-container">
                        {skills.map((skill) => (
                            <span key={skill} className="skill-chip">
                                {skill}
                            </span>
                        ))}
                    </div>

                </InfoCard>

            </div>

            {/* Internship */}
            <InfoCard>

                <div className="internship-header">

                    <div>

                        <h3 className="job-title">
                            Software Developer Intern
                        </h3>

                        <p className="company-details">
                            S.H. Solutions
                        </p>

                    </div>

                    <span>May 2024 – July 2024</span>

                </div>

                <p className="internship-description">
                    Worked as a Software Developer Intern at S.H. Solutions,
                    contributing to responsive e-commerce applications using
                    HTML, CSS, JavaScript, and React.js. Improved front-end
                    performance through code optimization and implemented SEO
                    best practices to enhance website visibility and user
                    experience.
                </p>

            </InfoCard>

            {/* Achievements & Certifications */}
            <div className="about-grid">

                <InfoCard>

                    <h2 className="card-heading">
                        Achievements
                    </h2>

                    <ul className="achievement-list">
                        <li>IEEE Xplore Research Publication (2025)</li>
                        <li>Presented Research at ICICC 2026 (Springer)</li>
                    </ul>

                </InfoCard>

                <InfoCard>

                    <h2 className="card-heading">
                        Certifications
                    </h2>

                    <div className="certificate-card">

                        <h3 className="certificate-title">
                            Java Foundations
                        </h3>

                        <p className="certificate-provider">
                            Oracle Academy
                        </p>

                        <span>2023 – 2024</span>

                    </div>

                    <div className="certificate-card">

                        <h3 className="certificate-title">
                            Database Foundations
                        </h3>

                        <p className="certificate-provider">
                            Oracle Academy
                        </p>

                        <span>2023 – 2024</span>

                    </div>

                    <div className="certificate-card">

                        <h3 className="certificate-title">
                            Leadership & Team Effectiveness
                        </h3>

                        <p className="certificate-provider">
                            NPTEL (IIT Roorkee)
                        </p>

                        <span>2026</span>

                    </div>

                    <button className="view-all-btn">
                        View All Certifications →
                    </button>

                </InfoCard>

            </div>

        </section>
    );
}

export default About;
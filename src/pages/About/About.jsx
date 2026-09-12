import React, { useState } from "react";
import "./About.css";
import InfoCard from "../../components/InfoCard/InfoCard";
import CertificationsModal from "../../components/CertificationsModal/CertificationsModal";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

function About() {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                        Download Resume <span className="arrow-icon">→</span>
                    </a>

                    <Link
                        to="/contact"
                        className="secondary-btn"
                    >
                        Contact Me <span className="arrow-icon">→</span>
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
                        Research Publications
                    </h2>

                    <div className="achievement-container">

                        <div className="achievement-card">
                            <div className="achievement-header">
                                <span className="achievement-badge">IEEE Xplore</span>
                                <span className="achievement-year">2025</span>
                            </div>
                            <h3 className="achievement-title">
                                IEEE Xplore Research Publication
                            </h3>
                            <p className="achievement-desc">
                                Peer-reviewed research paper published and indexed in IEEE Xplore digital library.
                            </p>
                            <a
                                href="https://ieeexplore.ieee.org/document/11430248"
                                target="_blank"
                                rel="noreferrer"
                                className="achievement-link"
                            >
                                Read Paper <FiExternalLink />
                            </a>
                        </div>

                        <div className="achievement-card">
                            <div className="achievement-header">
                                <span className="achievement-badge">Springer · ICICC</span>
                                <span className="achievement-year">2026</span>
                            </div>
                            <h3 className="achievement-title">
                                ICICC 2026 Research Presentation
                            </h3>
                            <p className="achievement-desc">
                                Research presented and published as a book chapter in Springer proceedings.
                            </p>
                            <a
                                href="https://link.springer.com/chapter/10.1007/978-3-032-30909-9_15"
                                target="_blank"
                                rel="noreferrer"
                                className="achievement-link"
                            >
                                Read Chapter <FiExternalLink />
                            </a>
                        </div>

                    </div>

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

                    <button className="view-all-btn" onClick={() => setIsModalOpen(true)}>
                        View All Certifications <span className="arrow-icon">→</span>
                    </button>

                </InfoCard>

            </div>

            <CertificationsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </section>
    );
}

export default About;
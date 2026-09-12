import React from "react";
import "./TechTrustBar.css";
import { FaJava, FaReact, FaGitAlt, FaJs } from "react-icons/fa6";
import { SiSpringboot, SiMysql, SiC } from "react-icons/si";

function TechTrustBar() {
  const stack = [
    { name: "C", icon: <SiC /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "React", icon: <FaReact /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Git", icon: <FaGitAlt /> }
  ];

  return (
    <section className="tech-trust-bar">
      <div className="tech-trust-container">
        <span className="tech-trust-label">core stack on record</span>
        <div className="tech-trust-icons">
          {stack.map((item) => (
            <div key={item.name} className="tech-trust-item">
              <span className="tech-trust-icon">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechTrustBar;

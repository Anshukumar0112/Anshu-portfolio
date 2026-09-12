import React, { useEffect } from "react";
import "./CertificationsModal.css";
import { FiX, FiExternalLink } from "react-icons/fi";

function CertificationsModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const certifications = [
    {
      id: "CERT-001",
      title: "Java Foundations",
      provider: "Oracle Academy",
      date: "2023 – 2024",
      status: "Verified",
      link: "#"
    },
    {
      id: "CERT-002",
      title: "Database Foundations",
      provider: "Oracle Academy",
      date: "2023 – 2024",
      status: "Verified",
      link: "#"
    },
    {
      id: "CERT-003",
      title: "Leadership & Team Effectiveness",
      provider: "NPTEL (IIT Roorkee)",
      date: "2026",
      status: "Verified",
      link: "#"
    },
    {
      id: "CERT-004",
      title: "Full-Stack Web Development",
      provider: "Coursera / Self-Paced",
      date: "2024",
      status: "Completed",
      link: "#"
    },
    {
      id: "CERT-005",
      title: "Git & Version Control",
      provider: "Open Source",
      date: "2024",
      status: "Verified",
      link: "#"
    }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">
            Certifications <span className="modal-badge">{certifications.length} Verified</span>
          </h3>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <FiX />
          </button>
        </div>

        <div className="modal-body">
          {certifications.map((cert) => (
            <div key={cert.id} className="cert-modal-card">
              <div className="cert-info">
                <h4>{cert.title}</h4>
                <p className="cert-provider">{cert.provider}</p>
                <span className="cert-date">{cert.date}</span>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="cert-link-btn"
                onClick={(e) => cert.link === "#" && e.preventDefault()}
              >
                Verify <FiExternalLink />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CertificationsModal;

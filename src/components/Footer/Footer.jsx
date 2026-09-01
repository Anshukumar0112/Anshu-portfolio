import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {

    return (
        <footer className="footer">

            <div className="footer-main">

                {/* Left */}
                <div className="footer-info">
                    <h2>Anshu Kumar</h2>

                    <div className="footer-description">
                    <p>Developer · Java · C · SQL · Web</p>
                    <span>Building fast, accessible web experiences.</span>
                </div>
            </div>


                {/* Navigation */}
                <nav className="footer-nav">

                    <a href="/">Home</a>

                    <a href="/about">About</a>

                    <a href="/projects">Projects</a>

                    <a href="/contact">Contact</a>

                </nav>


                {/* Social */}
                <div className="footer-social">

                    <a
                        href="https://github.com/Anshukumar0112"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/anshu-kumar-6a1048254/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="#top"
                        className="back-to-top"
                    >
                        ↑ Top
                    </a>

                </div>

            </div>


            {/* Copyright */}
            <div className="footer-bottom">

                © 2026 Anshu Kumar. All rights reserved.

            </div>

        </footer>
    );
}

export default Footer;
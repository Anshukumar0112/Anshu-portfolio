import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">

            <div className="logo">//Anshu</div>

            <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
                <Link to="/" onClick={closeMenu}>Home</Link>
                <Link to="/about" onClick={closeMenu}>About</Link>
                <Link to="/projects" onClick={closeMenu}>Projects</Link>
                <Link to="/contact" onClick={closeMenu}>Contact</Link>
            </div>

            <button
                className="menu-btn"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>

        </nav>
    );
}

export default Navbar;
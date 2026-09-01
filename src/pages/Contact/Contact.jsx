import { useState } from "react";
import "./Contact.css";
import ContactCard from "../../components/ContactCard/ContactCard";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);
    const contacts = [
        {
            icon: <MdEmail />,
            title: "Email",
            value: "anshuukumar2910@gmail.com",
            link: "mailto:anshuukumar2910@gmail.com"
        },

        {
            icon: <FaGithub />,
            title: "GitHub",
            value: "github.com/Anshukumar0112",
            link: "https://github.com/Anshukumar0112"
        },

        {
            icon: <FaLinkedin />,
            title: "LinkedIn",
            value: "linkedin.com/in/anshukumar9/",
            link: "https://www.linkedin.com/in/anshukumar9/"
        }
    ];

    function handleSubmit(event) {

        event.preventDefault();

         if (!name || !email || !message) {
            setStatus("Please fill in all fields.");
            return;
        }

        setLoading(true);

        setTimeout(() => {

            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Message:", message);

            setStatus("Message sent successfully!");

            setName("");
            setEmail("");
            setMessage("");

            setLoading(false);

            setTimeout(() => {
                setStatus("");
            }, 3000);
            

        }, 1000);

    }

    return (
        <section className="contact">

            <h1 className="contact-title">
                Get In Touch
            </h1>

            <p className="contact-subtitle">
                I'm always open to discussing new opportunities,
                collaborations, or exciting projects.
            </p>

            <div className="contact-container">

                <div className="contact-info">

                    <h2>
                        Contact Information
                    </h2>

                    {contacts.map((contact) => (
                        <ContactCard
                            key={contact.title}
                            icon={contact.icon}
                            title={contact.title}
                            value={contact.value}
                            link={contact.link}
                        />
                    ))}

                </div>

                <div className="contact-form">

                    <h2>Send Me a Message</h2>

                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                       <textarea
                            placeholder="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>

                        {status && (
                            <p className="form-status">
                                {status}
                            </p>
                        )}


                        <button
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>

                    </form>
                </div>

            </div>

        </section>
    );
}

export default Contact;
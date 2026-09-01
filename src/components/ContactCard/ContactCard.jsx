import "./ContactCard.css";

function ContactCard({ icon, title, value, link }) {
    return (
        <div className="contact-card">

            <div className="contact-icon">
                {icon}
            </div>

            <div className="contact-content">

                <h3>{title}</h3>

                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {value}
                </a>

            </div>

        </div>
    );
}

export default ContactCard;
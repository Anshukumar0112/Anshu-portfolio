import "./ProjectCard.css";

function ProjectCard({ title, description, image, technologies, github, live }) {
  return (

    <div className="project-card">

    <div className="image-wrapper">
        <img
            src={image}
            alt={title}
            className="project-image"
        />
    </div>

    <div className="project-content">

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="technologies">
            {technologies.map((tech) => (
                <span key={tech}>{tech}</span>
            ))}
        </div>

        <div className="project-links">

            {github && (
                <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
            )}

            {live && (
                <a
                    href={live}
                    target="_blank"
                    rel="noreferrer"
                >
                    Live Demo
                </a>
            )}

        </div>

    </div>

</div>
  );
}
export default ProjectCard;
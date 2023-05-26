import { projects } from "@/data";
import { pathImages } from "@/helpers";

export const Projects = () => {
    return (
        <section id="projects" className="w-full">
            <h2 className="project-heading">Proyectos</h2>
            <div className="project-grid">
                {projects.map(({ id, title, description, image }) => (
                    <figure
                        className="project-card"
                        key={id}
                        style={{ backgroundImage: `url(${pathImages(image)})` }}
                    >
                        <figcaption className="project-content">
                            <h3 className="project-title">{title}</h3>
                            <p className="project-description">{description}</p>
                        </figcaption>
                        <figcaption className="project-buttons">
                            <button className="project-code-button">Ver Código</button>
                            <button className="project-demo-button">Demo</button>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
};

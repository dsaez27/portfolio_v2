import { projects } from "@/data";
import { path } from "@/helpers";

const Projects = () => {
    return (
        <section id="cards" className="h-full w-full">
            <h2 className="text-3xl font-semibold text-primary after:mt-1 after:block after:h-1 after:w-20 after:bg-primary">
                Proyectos
            </h2>
            <div className="cards__grid my-10 grid justify-items-center gap-3">
                {projects.map(({ id, title, desc, img }) => (
                    <figure
                        className="card relative h-full w-full cursor-pointer bg-cover bg-center bg-no-repeat text-left text-base text-white"
                        key={id}
                        style={{
                            backgroundImage: `url(${path(img, "images")})`,
                        }}
                    >
                        <div className="card__content absolute inset-0 flex flex-col justify-end bg-opacity-25 bg-card p-2">
                            <h3 className="card__heading text-lg">{title}</h3>
                            <p className="card__desc text-sm">{desc}</p>
                            <div className="card__buttons absolute inset-0 flex flex-col items-center justify-center gap-1 opacity-0">
                                <button className="mb-2 w-24 rounded-full bg-primary p-1 text-sm text-white transition duration-500 ease-in-out hover:bg-secondary">
                                    Ver Código
                                </button>
                                <button className="mb-2 w-24 rounded-full bg-primary p-1 text-sm text-white transition duration-500 ease-in-out hover:bg-secondary">
                                    Demo
                                </button>
                            </div>
                        </div>
                    </figure>
                ))}
            </div>
        </section>
    );
};

export default Projects;

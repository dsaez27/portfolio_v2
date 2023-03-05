import { projects } from "@/data";
import { pathImages } from "@/helpers";

export const Projects = () => {
    return (
        <section id="projects" className="w-full">
            <h2 className="after-content-[''] text-3xl font-semibold text-primary after:mt-1  after:block after:h-1 after:w-20 after:bg-primary">
                Proyectos
            </h2>
            <div
                className="my-10 grid justify-items-center gap-3"
                style={{
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gridAutoRows: "minmax(200px, auto)",
                }}
            >
                {projects.map((project) => {
                    return (
                        <figure
                            className="card relative h-full w-full cursor-pointer rounded-sm bg-center bg-cover bg-no-repeat text-left text-base text-white transition duration-500 ease-in-out"
                            key={project.id}
                            style={{
                                backgroundImage: `url(${pathImages(project.image)})`,
                            }}
                        >
                            {/** title and description */}
                            <figcaption className="z-1 absolute inset-0 flex flex-col justify-end bg-card p-2 transition duration-500 ease-in-out">
                                <h3 className="text-lg opacity-100 transition duration-500 ease-in-out">
                                    {project.title}
                                </h3>
                                <p className="text-sm opacity-100 transition duration-500 ease-in-out">
                                    {project.description}
                                </p>
                            </figcaption>
                            {/** buttons */}
                            <figcaption className="z-2 absolute inset-0 hidden p-2 transition duration-500 ease-in-out">
                                <button className="w-24 mb-2 rounded-full bg-primary p-2 text-sm text-white transition duration-500 ease-in-out hover:bg-opacity-80">
                                    Ver Código
                                </button>
                                <button className="w-24 rounded-full bg-primary p-2 text-sm text-white transition duration-500 ease-in-out hover:bg-opacity-80">
                                    Demo
                                </button>
                            </figcaption>
                        </figure>
                    );
                })}
            </div>
        </section>
    );
};

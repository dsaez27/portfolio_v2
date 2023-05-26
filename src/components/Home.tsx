import { Link } from "react-scroll";
import { pathImages } from "../helpers/path";

export const Home = () => {
    return (
        <>
            <div className="absolute top-0 left-0 h-full w-full">
                <div
                    className="absolute top-0 left-0 h-full w-full bg-cover bg-fixed bg-center"
                    style={{ backgroundImage: `url(${pathImages("background.jpg")})` }}
                />
                {/*Gradient*/}
                <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-dark via-transparent to-transparent backdrop-blur-sm" />
            </div>

            <section
                id="home"
                className="justify-cente relative flex h-screen w-full flex-col items-start"
            >
                <div className="absolute top-0 left-0 flex w-full flex-row items-center justify-center gap-10">
                    <div className="lg:min-[400px] z-10 flex h-screen w-full flex-col items-start justify-center ">
                        <h1 className="z-10 text-xl font-medium text-white">¡Hola! Soy</h1>
                        <h1 className="z-10 pb-2 text-5xl font-bold text-white">Daniel Sáez</h1>
                        <h5 className="z-10 pb-4 text-sm text-white">
                            Soy un desarrollador web con experiencia en React, Redux, CSS3, Sass,
                            Bootstrap y Tailwind. Manejo Git y Github para colaboración en equipo.
                            En mi sitio web encontrarás mis proyectos personales y habilidades de
                            programación. Contáctame si necesitas ayuda en el desarrollo de un
                            proyecto. ¡Gracias por visitar mi sitio!
                        </h5>
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            offset={-32}
                        >
                            <button className="inline h-12 bg-primary p-3 text-sm font-semibold text-white duration-500 ease-in-out hover:bg-secondary">
                                Ver Proyectos
                            </button>
                        </Link>
                    </div>
                    <img
                        src={pathImages("astronot.png")}
                        alt="astronaut"
                        className="w-[300px] animate-astronaut max-sm:hidden"
                        style={{
                            transform: "scaleX(-1)",
                        }}
                    />
                </div>
            </section>
            <img
                src={pathImages("astronot.png")}
                alt="astronaut"
                className="hidden w-[300px] animate-astronaut max-sm:block"
                style={{
                    transform: "scaleX(-1)",
                }}
            />
        </>
    );
};

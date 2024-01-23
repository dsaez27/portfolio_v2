import { Link } from "react-scroll";
import { path } from "../helpers/path";

const Home = () => {
    return (
        <>
            <div className="absolute top-0 left-0 h-full w-full">
                <div
                    className="absolute top-0 left-0 h-full w-full bg-cover bg-fixed bg-center"
                    style={{
                        backgroundImage: `url(${path(
                            "background.webp",
                            "images"
                        )})`,
                    }}
                />
                {/*Gradient*/}
                <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-dark via-transparent to-transparent backdrop-blur-sm" />
            </div>

            <section
                id="home"
                className="justify-cente relative flex h-screen w-full flex-col items-start"
            >
                <div className="absolute top-0 left-0 flex w-full flex-row items-center justify-center gap-10">
                    <div className="lg:min-[400px] z-10 flex h-screen w-full flex-col items-start justify-center gap-3 ">
                        <h1 className="z-10 text-5xl font-bold text-white">
                            ¡Hola! Soy <br />
                            Daniel Sáez H.
                        </h1>
                        <h5 className="z-10 pb-4 text-sm text-white">
                            "Soy un desarrollador web con experiencia en React,
                            Redux, CSS3, Sass, Bootstrap y Tailwind. Manejo Git
                            y Github para colaboración en equipo. En mi sitio
                            web encontrarás mis proyectos personales y
                            habilidades de programación. Contáctame si necesitas
                            ayuda en el desarrollo de un proyecto. ¡Gracias por
                            visitar mi sitio!
                        </h5>
                        <div className="flex flex-row gap-2 py-3">
                            <a
                                href="https://www.linkedin.com/in/dsaezh/"
                                target="_blank"
                                rel="noreferrer"
                                data-title="Linkedin"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="36"
                                    height="36"
                                    viewBox="0 0 24 24"
                                    fill="#fff"
                                    className="rounded-full border-2 p-1 transition duration-300  ease-in-out hover:border-primary hover:fill-primary"
                                >
                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                                </svg>
                            </a>
                            <a
                                href="https://github.com/dsaez27"
                                target="_blank"
                                rel="noreferrer"
                                data-title="Github"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="36"
                                    height="36"
                                    viewBox="0 0 24 24"
                                    fill="#fff"
                                    className="rounded-full border-2 p-1 transition duration-300  ease-in-out hover:border-primary hover:fill-primary"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a
                                href="mailto:daniel.s.saez.h@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                data-title="Email"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="36"
                                    height="36"
                                    viewBox="0 0 24 24"
                                    fill="#fff"
                                    className="rounded-full border-2 p-1 transition duration-300  ease-in-out hover:border-primary hover:fill-primary"
                                >
                                    <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
                                </svg>
                            </a>
                            <a
                                href={path("cv.pdf", "doc")}
                                data-title="Descargar CV"
                                download
                            >
                                <svg
                                    width="36px"
                                    height="36px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="rounded-full border-2 p-1 transition duration-300  ease-in-out hover:border-primary hover:fill-primary"
                                >
                                    <path
                                        opacity="0.15"
                                        d="M5 21H19V9H15C13.8954 9 13 8.10457 13 7V3H5V21Z"
                                        fill="#fff"
                                    />
                                    <path
                                        d="M9 14H15M13 3H5V21H19V9M13 3H14L19 8V9M13 3V7C13 8 14 9 15 9H19"
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <img
                        src={path("astronot.webp", "images")}
                        alt="astronaut"
                        className="w-[300px] animate-astronaut max-sm:hidden"
                        style={{
                            transform: "scaleX(-1)",
                        }}
                    />
                </div>
            </section>
        </>
    );
};

export default Home;

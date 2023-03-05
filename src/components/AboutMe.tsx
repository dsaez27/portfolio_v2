import { pathImages, pathFiles } from "@/helpers";

export const AboutMe = () => {
    return (
        <section id="about" className="z-10 w-full">
            <h2 className="after-content-[''] text-3xl font-semibold text-primary after:mt-1  after:block after:h-1 after:w-20 after:bg-primary">
                Sobre mí
            </h2>
            <div className="mt-20 mb-10 flex flex-col items-center justify-center">
                <img
                    src={pathImages("avatar.png")}
                    alt="Profile"
                    className="-mt-12 h-32 w-32 rounded-full"
                />
                <div className="my-5 flex flex-col items-center justify-center gap-1 text-quinary">
                    <h1 className="text-4xl font-semibold">Daniel Sáez</h1>
                    <span className="text-sm">Front End Developer</span>
                    <div className="p-2 md:flex-1">
                        <p className="mb-4 text-center leading-relaxed text-white">
                            Soy un desarrollador web apasionado por crear cosas en internet que sean
                            útiles para la gente. Me especializo en el desarrollo front-end, y
                            disfruto trabajando con tecnologías como React, Tailwind CSS, Bootstrap
                            y otras más.
                        </p>
                        <p className="text-center leading-relaxed text-white">
                            En mi tiempo libre, me gusta aprender cosas nuevas, hacer deporte y
                            pasar tiempo con mi familia y amigos.
                        </p>
                    </div>
                    <div className="flex flex-row gap-2 py-3">
                        <a
                            href="https://www.linkedin.com/in/dsaezh/"
                            target="_blank"
                            rel="noreferrer"
                            title="Linkedin"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                fill="#fff"
                                className="transition duration-300 ease-in-out hover:fill-primary"
                            >
                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                            </svg>
                        </a>
                        <a
                            href="https://github.com/dsaez27"
                            target="_blank"
                            rel="noreferrer"
                            title="Github"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                fill="#fff"
                                className="transition duration-300 ease-in-out hover:fill-primary"
                            >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a
                            href="mailto:daniel.s.saez.h@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            title="Email"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                fill="#fff"
                                className="transition duration-300 ease-in-out hover:fill-primary"
                            >
                                <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
                            </svg>
                        </a>
                    </div>
                    <a
                        href={pathFiles("cv.pdf")}
                        download
                        className="flex cursor-pointer flex-col items-center transition hover:text-primary hover:underline"
                    >
                        <img
                            src={pathImages("curriculum.png")}
                            alt="CV"
                            className="my-2 w-7"
                            title="Currículum Vitae"
                        />
                        Descargar CV
                    </a>
                </div>
            </div>
        </section>
    );
};

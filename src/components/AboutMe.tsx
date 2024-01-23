import { path } from "@/helpers";

const AboutMe = () => {
    return (
        <section id="about" className="h-full w-full">
            <h2 className="after-content-[''] text-3xl font-semibold text-primary after:mt-1  after:block after:h-1 after:w-20 after:bg-primary">
                Sobre mí
            </h2>
            <div className="mt-20 mb-10 flex flex-col items-center justify-center">
                <img
                    src={path("avatar.webp", "images")}
                    alt="Profile"
                    className="-mt-12 h-32 w-32 rounded-full"
                />
                <div className="my-5 flex flex-col items-center justify-center gap-1">
                    <h1 className="text-4xl font-semibold text-white">
                        Daniel Sáez
                    </h1>
                    <span className="text-sm text-white">
                        Front End Developer
                    </span>
                    <p className="mb-4 w-3/4 text-center leading-relaxed text-gray-300 max-sm:w-full">
                        ¡Hola! Soy un programador con conocimientos en React,
                        Bootstrap, Tailwind, CSS3, Redux, Sass, Git, Github, JS
                        y TS. En mi sitio encontrarás mis proyectos personales y
                        habilidades de programación. Si necesitas ayuda con el
                        desarrollo de un proyecto, contáctame. ¡Gracias por
                        visitar mi sitio web!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;

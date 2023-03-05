import { Link } from "react-scroll";
import { pathImages } from "../helpers/path";

export const Home = () => {
    return (
        <section
            id="home"
            className="relative flex h-screen w-full flex-col items-start justify-center"
        >
            <div className="absolute top-0 left-0 flex w-full flex-row items-center justify-center">
                <div className="lg:min-[400px] z-10 flex h-screen w-full flex-col items-start justify-center gap-5 max-sm:items-center max-sm:text-center">
                    <h1 className="z-10 animate-text bg-gradient bg-clip-text text-5xl font-bold text-transparent">
                        ¡Bienvenidos a mi portafolio Front End!
                    </h1>
                    <h5 className="z-10 max-w-[550px] text-quinary">
                        En este portafolio podrás encontrar algunos de mis proyectos personales y
                        profesionales, así como también algunos de los conocimientos que he
                        adquirido a lo largo de mi carrera como desarrollador web.
                    </h5>
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        offset={-32}
                    >
                        <button className="z-10 inline rounded-lg bg-primary p-3 text-sm font-semibold text-quinary duration-500 ease-in-out hover:bg-opacity-80">
                            Ver Proyectos
                        </button>
                    </Link>
                </div>
                <img
                    src={pathImages("astronot.png")}
                    alt="astronaut"
                    className="w-[300px] animate-astronaut max-sm:hidden"
                    style={{
                        transform: "scaleX(-1)"
                    }}
                />
            </div>
        </section>
    );
};

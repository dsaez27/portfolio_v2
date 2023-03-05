import { Link } from "react-scroll";
import { Menu } from "./Menu";

export const Navbar = () => {
    return (
        <nav className="max-sm:px-2 sm:px-4 py-2.5 bg-quaternary opacity-80 fixed w-full z-50">
            <div className="container flex flex-wrap items-center justify-between mx-auto max-w-4xl">
                <h2 className="self-center text-xl font-bold whitespace-nowrap dark:text-white first-letter:text-primary cursor-default">
                    DSÁEZ
                </h2>
                <div className="flex max-sm:hidden text-quinary font-medium">
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className=" cursor-pointer pr-8 hover:text-primary transition"
                    >
                        <span>Inicio</span>
                    </Link>
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="cursor-pointer pr-8 hover:text-primary transition"
                    >
                        <span>Sobre Mí</span>
                    </Link>
                    <Link
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className=""
                    >
                        <span className="cursor-pointer pr-8 hover:text-primary transition">
                            Skills
                        </span>
                    </Link>
                    <Link
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className=""
                    >
                        <span className="cursor-pointer pr-8 hover:text-primary transition">
                            Proyectos
                        </span>
                    </Link>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className=""
                    >
                        <span className="cursor-pointer pr-8 hover:text-primary transition">
                            Contacto
                        </span>
                    </Link>
                </div>
                <Menu />
            </div>
        </nav>
    );
};

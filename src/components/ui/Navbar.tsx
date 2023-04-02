import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Menu } from "./Menu";

export const Navbar = () => {
    const [bgOpacity, setBgOpacity] = useState(0);

    function handleScroll() {
        const scrollPercentage = Math.floor((window.scrollY / window.innerHeight) * 100);
        const rounded = Math.round(scrollPercentage / 5) * 5;
        rounded <= 75 ? setBgOpacity(rounded) : setBgOpacity(75);
    }

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [bgOpacity]);

    return (
        <nav
            className={`navbar fixed z-50 w-full bg-darken py-2.5 transition duration-1000 selection:ease-in-out max-sm:px-2 sm:px-4`}
            style={{ "--tw-bg-opacity": bgOpacity / 100 } as any}
        >
            <div className="container mx-auto flex max-w-4xl flex-wrap items-center justify-between">
                <h2 className="cursor-default self-center whitespace-nowrap text-xl font-bold text-white first-letter:text-primary">
                    DSÁEZ
                </h2>
                <ul className="flex gap-6 font-medium max-sm:hidden">
                    <li>
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="navbar-underline-animation cursor-pointer text-white"
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="navbar-underline-animation cursor-pointer text-white"
                        >
                            Sobre Mí
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="navbar-underline-animation cursor-pointer text-white"
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="navbar-underline-animation cursor-pointer text-white"
                        >
                            Proyectos
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="navbar-underline-animation cursor-pointer text-white"
                        >
                            Contacto
                        </Link>
                    </li>
                </ul>
                <Menu />
            </div>
        </nav>
    );
};

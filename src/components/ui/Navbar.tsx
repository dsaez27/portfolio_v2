import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { Menu } from "./Menu";

const Navbar = () => {
    const [bgOpacity, setBgOpacity] = useState(0);
    const bgOpacityRef = useRef(bgOpacity);

    const handleScroll = useCallback(() => {
        const scrollPercentage = Math.floor(
            (window.scrollY / window.innerHeight) * 100
        );
        const rounded = Math.round(scrollPercentage / 5) * 5;
        rounded <= 75 ? setBgOpacity(rounded) : setBgOpacity(0);
    }, []);

    useEffect(() => {
        bgOpacityRef.current = bgOpacity;
    }, [bgOpacity]);

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    return (
        <nav
            className={`navbar fixed z-50 w-full bg-darken py-2.5 transition duration-1000 selection:ease-in-out max-sm:px-2 sm:px-4`}
            style={
                {
                    "--tw-bg-opacity": bgOpacityRef.current / 100,
                } as React.CSSProperties
            }
        >
            <div className="container mx-auto flex max-w-4xl flex-wrap items-center justify-between">
                <h2 className="cursor-default self-center whitespace-nowrap text-xl font-bold text-white first-letter:text-primary">
                    DSÁEZ
                </h2>
                <ul className="flex gap-5 font-medium max-sm:hidden">
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

export default Navbar;

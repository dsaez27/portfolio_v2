import { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-scroll";
import { CSSTransition } from "react-transition-group";

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const genericHamburgerLine = `h-0.5 w-6 my-1 rounded-lg transition ease
    transform duration-300 bg-white`;

    return (
        <section className="MOBILE-MENU flex sm:hidden ">
            <button
                className="flex flex-col justify-center items-center group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div
                    className={`${genericHamburgerLine} ${
                        isOpen
                            ? "rotate-45 translate-y-2 group-hover:opacity-100 "
                            : "group-hover:opacity-100"
                    }`}
                />
                <div
                    className={`${genericHamburgerLine} ${
                        isOpen ? "opacity-0" : "group-hover:opacity-100"
                    }`}
                />
                <div
                    className={`${genericHamburgerLine} ${
                        isOpen
                            ? "-rotate-45 -translate-y-3 group-hover:opacity-100"
                            : "group-hover:opacity-100"
                    }`}
                />
            </button>
            {isOpen &&
                createPortal(
                    <CSSTransition in={isOpen} timeout={300} classNames="menu-mobile" unmountOnExit>
                        <div className="items-center bg-quaternary flex flex-col h-screen justify-evenly left-0 top-0 w-full z-10 fixed">
                            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] text-white uppercase">
                                <li className="cursor-pointer pr-8 transition my-8">
                                    <Link
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        onClick={() => setIsOpen(false)}
                                        className="hover:text-primary hover:underline hover:underline-offset-8 transition duration-300 ease-in-out"
                                    >
                                        Inicio
                                    </Link>
                                </li>
                                <li className="cursor-pointer pr-8 transition my-8">
                                    <Link
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        onClick={() => setIsOpen(false)}
                                        className="hover:text-primary hover:underline hover:underline-offset-8 transition duration-300 ease-in-out"
                                    >
                                        Sobre Mí
                                    </Link>
                                </li>
                                <li className="cursor-pointer pr-8 transition my-8">
                                    <Link
                                        to="skills"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        onClick={() => setIsOpen(false)}
                                        className="hover:text-primary hover:underline hover:underline-offset-8 transition duration-300 ease-in-out"
                                    >
                                        Skills
                                    </Link>
                                </li>
                                <li className="cursor-pointer pr-8 transition my-8">
                                    <Link
                                        to="projects"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        onClick={() => setIsOpen(false)}
                                        className="hover:text-primary hover:underline hover:underline-offset-8 transition duration-300 ease-in-out"
                                    >
                                        Proyectos
                                    </Link>
                                </li>
                                <li className="cursor-pointer pr-8 transition my-8">
                                    <Link
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        onClick={() => setIsOpen(false)}
                                        className="hover:text-primary hover:underline hover:underline-offset-8 transition duration-300 ease-in-out"
                                    >
                                        Contacto
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </CSSTransition>,
                    document.querySelector("#nav") as Element
                )}
        </section>
    );
};

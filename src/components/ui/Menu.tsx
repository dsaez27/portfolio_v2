import { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-scroll";
import { CSSTransition } from "react-transition-group";

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const genericHamburgerLine = `h-0.5 w-6 my-1 rounded-lg transition ease
    transform duration-300 bg-white`;

    return (
        <section className="sm:hidden ">
            <button
                className="group flex flex-col items-center justify-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div
                    className={`${genericHamburgerLine} ${
                        isOpen
                            ? "translate-y-2 rotate-45 group-hover:opacity-100 "
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
                            ? "-translate-y-3 -rotate-45 group-hover:opacity-100"
                            : "group-hover:opacity-100"
                    }`}
                />
            </button>
            {isOpen &&
                createPortal(
                    <CSSTransition
                        in={isOpen}
                        timeout={300}
                        classNames="menu-mobile"
                        unmountOnExit
                    >
                        <div className="fixed left-0 top-0 z-10 flex h-screen w-full flex-col items-center justify-evenly bg-darken">
                            <ul className="flex min-h-[250px] flex-col items-center justify-between uppercase text-white">
                                <li className="my-8 cursor-pointer pr-8 transition">
                                    <Link
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        onClick={() => setIsOpen(false)}
                                        className="navbar-underline-animation cursor-pointer text-white"
                                    >
                                        Inicio
                                    </Link>
                                </li>
                                <li className="my-8 cursor-pointer pr-8 transition">
                                    <Link
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        onClick={() => setIsOpen(false)}
                                        className="navbar-underline-animation cursor-pointer text-white"
                                    >
                                        Sobre Mí
                                    </Link>
                                </li>
                                <li className="my-8 cursor-pointer pr-8 transition">
                                    <Link
                                        to="skills"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        onClick={() => setIsOpen(false)}
                                        className="navbar-underline-animation cursor-pointer text-white"
                                    >
                                        Skills
                                    </Link>
                                </li>
                                <li className="my-8 cursor-pointer pr-8 transition">
                                    <Link
                                        to="projects"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        onClick={() => setIsOpen(false)}
                                        className="navbar-underline-animation cursor-pointer text-white"
                                    >
                                        Proyectos
                                    </Link>
                                </li>
                                <li className="my-8 cursor-pointer pr-8 transition">
                                    <Link
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        onClick={() => setIsOpen(false)}
                                        className="navbar-underline-animation cursor-pointer text-white"
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

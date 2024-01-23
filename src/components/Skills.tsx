import { path } from "@/helpers";
import { skills } from "../data";

const Skills = () => {
    return (
        <section id="skills" className="w-full h-full">
            <h2 className="after-content-[''] text-3xl font-semibold text-primary after:mt-1  after:block after:h-1 after:w-20 after:bg-primary">
                Skills
            </h2>
            <div
                className="my-10 grid justify-items-center gap-3"
                style={{
                    gridTemplateColumns: "repeat(auto-fit, minmax(135px, 1fr))",
                    gridAutoRows: "minmax(100px, auto)",
                }}
            >
                {skills.map((skill) => {
                    return (
                        <figure
                            key={skill.id}
                            className="group flex w-full flex-col items-center justify-center bg-tertiary align-middle"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="48"
                                height="48"
                                fill="#fff"
                                className="p-1 transition duration-300  ease-in-out hover:fill-primary group-hover:fill-primary"
                                viewBox={skill.viewBox}
                                id={skill.name}
                            >
                                <path d={skill.icon} />
                            </svg>
                            <figcaption className="mt-2 text-xs text-white transition duration-300  ease-in-out group-hover:text-primary cursor-default">
                                {skill.name}
                            </figcaption>
                        </figure>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;

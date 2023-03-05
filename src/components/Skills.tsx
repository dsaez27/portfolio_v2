import { pathImages } from "@/helpers";
import { skills } from "../data";

export const Skills = () => {
    return (
        <section id="skills" className="w-full">
            <h2 className="text-primary font-semibold text-3xl after-content-[''] after:block  after:w-20 after:h-1 after:mt-1 after:bg-primary">
                Skills
            </h2>
            <div
                className="grid gap-3 my-10 justify-items-center"
                style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}
            >
                {skills.map((skill) => {
                    return (
                        <figure
                            key={skill.id}
                            className="flex flex-col justify-center align-middle items-center rounded-sm w-[150px] h-[100px] bg-quaternary "
                        >
                            <img src={pathImages(skill.icon)} alt={skill.name} className="w-10" />
                            <figcaption className="text-quinary mt-2 text-xs">
                                {skill.name}
                            </figcaption>
                        </figure>
                    );
                })}
            </div>
        </section>
    );
};

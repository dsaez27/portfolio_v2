interface Project {
    id: number;
    title: string;
    desc: string;
    img: string;
    url: string;
    techs: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Portfolio",
        desc: "Portfolio personal",
        img: "portfolio.webp",
        url: "https://github.com/dsaez27/portfolio",
        techs: ["React", "React-Router-Dom", "Tailwind"],
    },
    {
        id: 2,
        title: "Calculadora",
        desc: "Calculadora",
        img: "calculadora.webp",
        url: "https://github.com/dsaez27/Calculadora",
        techs: ["React", "NodeJS", "MongoDB"],
    },
    {
        id: 3,
        title: "Modals",
        desc: "Modals",
        img: "calculadora.webp",
        url: "https://www.google.com",
        techs: ["React", "Styled-components"],
    },
    {
        id: 4,
        title: "Curso React",
        desc: "Curso React",
        img: "calculadora.webp",
        url: "https://www.google.com",
        techs: ["React", "NodeJS", "MongoDB"],
    },
    {
        id: 5,
        title: "Ecommerce",
        desc: "Ecommerce",
        img: "calculadora.webp",
        url: "https://www.google.com",
        techs: ["React", "Redux", "NodeJS", "MongoDB"],
    },
    {
        id: 6,
        title: "Journal App",
        desc: "Journal App",
        img: "calculadora.webp",
        url: "https://www.google.com",
        techs: ["React", "NodeJS", "MongoDB"],
    },
];

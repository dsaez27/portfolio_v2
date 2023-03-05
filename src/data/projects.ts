interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    url: string;
    technologies: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Portfolio",
        description: "Portfolio personal",
        image: "portfolio.png",
        url: "https://github.com/dsaez27/portfolio",
        technologies: ["React", "React-Router-Dom", "Tailwind"],
    },
    {
        id: 2,
        title: "Calculadora",
        description: "Calculadora",
        image: "calculadora.png",
        url: "https://github.com/dsaez27/Calculadora",
        technologies: ["React", "NodeJS", "MongoDB"],
    },
    {
        id: 3,
        title: "Modals",
        description: "Modals",
        image: "calculadora.png",
        url: "https://www.google.com",
        technologies: ["React", "Styled-components"],
    },
    {
        id: 4,
        title: "Curso React",
        description: "Curso React",
        image: "calculadora.png",
        url: "https://www.google.com",
        technologies: ["React", "NodeJS", "MongoDB"],
    },
    {
        id: 5,
        title: "Ecommerce",
        description: "Ecommerce",
        image: "calculadora.png",
        url: "https://www.google.com",
        technologies: ["React", "Redux", "NodeJS", "MongoDB"],
    },
    {
        id: 6,
        title: "Journal App",
        description: "Journal App",
        image: "calculadora.png",
        url: "https://www.google.com",
        technologies: ["React", "NodeJS", "MongoDB"],
    },
];

export type Skill = {
  skill: string;
  img: string;
};

export type SkillsData = {
  languages: Skill[];
  frameworks: Skill[];
  databases: Skill[];
  tools: Skill[];
};

export const skillsData: SkillsData = {
  languages: [
    { skill: "HTML", img: "/Icons/html-1.svg" },
    { skill: "CSS", img: "/Icons/css-3.svg" },
    { skill: "JavaScript", img: "/Icons/logo-javascript.svg" },
  ],
  frameworks: [
    { skill: "React", img: "/Icons/react-2.svg" },
    { skill: "Redux", img: "/Icons/redux.svg" },
    { skill: "Node.js", img: "/Icons/nodejsLight.svg" },
    { skill: "Express", img: "/Icons/download (2).png" },
  ],
  databases: [
    { skill: "MongoDB", img: "/Icons/mongodb-icon-1.svg" },
  ],
  tools: [
    { skill: "GitHub", img: "/Icons/GitHub-Mark.png" },
    { skill: "Postman", img: "/Icons/postman.svg" },
    { skill: "VS Code", img: "/Icons/Visual_Studio_Code_1.35_icon.svg.png" },
  ],
};

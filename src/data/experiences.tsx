export interface IExperience {
  time: number;
  position: string;
  company: string;
  description: string;
  responsibilities: string[];
}

export const experiences: IExperience[] = [
  {
    time: 2024,
    position: "Front-end Developer",
    company: "Level Up Studio",
    description:
      "Build a website to showcase the game company and the games it creates, as well as the companies it partners with.",
    responsibilities: [
      "Worked part-time as a Front-end developer.",
      "Developed the website application based on the company requirement.",
      "Worked with the design team of the company.",
    ],
  },
  {
    time: 2025,
    position: "Front-end Developer",
    company: "Tâm Luxury",
    description: "Develop interfaces for internal company systems.",
    responsibilities: [
      "Worked part-time as a Front-end developer.",
      "Worked and developed user interfaces provided from the design team.",
      "Developed interfaces for payroll accounting, attendance calculation, jewelry inspection.",
      "Developed employee salary viewing interface, sales revenue statistics.",
      "Developed jewelry order app and services customer for sales.",
      "Worked with back-end team to connect API.",
    ],
  },
];

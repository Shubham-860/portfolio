import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a passionate full stack developer skilled in JavaScript, React, Tailwind CSS, React Native, Node.js, MySQL, and MongoDB. I've crafted robust web and mobile apps like Site Tracker, Smart Wallet, Rent a Port, and TechnoMart. My goal is to create innovative solutions driving business growth and exceptional user experiences, always staying updated on the latest trends.`;

export const ABOUT_TEXT = `I am a dedicated full stack developer with expertise in JavaScript, React, Tailwind CSS, React Native, Node.js, MySQL, and MongoDB. Over the years, I've honed my skills in crafting robust and scalable web and mobile applications, showcasing my capabilities through projects like Site Tracker, Smart Wallet, Rent a Port, and TechnoMart. My passion lies in creating innovative solutions that not only drive business growth but also deliver exceptional user experiences. I am committed to staying updated with the latest trends and technologies in the field of software development to continually improve and deliver top-notch solutions `;

export const EXPERIENCES = [
    {
        year: "2023 - Present",
        role: "Senior Full Stack Developer",
        company: "Google Inc.",
        description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
        technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
    },
];

export const PROJECTS = [
    {
        title: "Site Tracker",
        image: project1,
        description:
            "Site Tracker streamlines land development management, offering robust tools to monitor sites, workers, and resources with efficiency. Its data-driven approach empowers informed decision-making, enhancing overall project outcomes.",
        technologies: ["HTML", "CSS", "React", "Node.js", "MySQL"],
    },
    {
        title: "Smart Wallet",
        image: project2,
        description:
            "A React Native application designed to enable users to meticulously track their income and expenses through detailed graphical overviews, significantly enhancing their financial management capabilities.",
        technologies: ["React native","Firebase"],
    },

    {
        title: "Rent a port",
        image: project4,
        description:
            "The website is built using Django and is dedicated to facilitating property rentals. Its frontend is designed with Bootstrap for a user-friendly interface. Users can easily add their rental properties to the platform. Furthermore, the website allows users to schedule appointments to meet with property owners if needed.",
        technologies: ["HTML", "CSS", "Django", "SQLite"],
    },
];

export const CONTACT = {
    address: "Phaltan, Maharashtra Pin:415523",
    phoneNo: "+12 4555 666 00",
    email: "shubhamsalunkhe860@gmail.com",
};

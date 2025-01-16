// import project1 from "../assets/projects/image-1.jpg";
import image2 from "../assets/projects/image-2.jpg";
import project2 from "../assets/projects/project-2.jpg";

export const HERO_CONTENT =
  "Hello, I am a cooked computer science student currently studying at the University of California, Irvine. I am passionate about web development and enjoy creating user-friendly applications that solve real-world problems. I am always eager to learn new technologies and collaborate with others to build innovative software solutions.";

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - Present",
    role: "Computer Science Tutor",
    company: "AYCLogic",
    description:
      "Taught students fundamental computer science concepts using Python. Prepared lessons and administered exams to students providing constructive feedback. Guided students in developing projects and reinforced problem-solving skills.",
    technologies: ["Python"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Javascript", "HTML", "CSS", "React"],
    link: "https://github.com/danmengo/daniel-portfolio",
  },
  {
    title: "IMDB Movie Reviews",
    image: image2,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["Python", "Tensorflow", "NumPy", "Sci-kit Learn"],
    link: "https://github.com/danmengo/IMDB-movie-reviews",
  },
];

export const CONTACT = {
  phoneNo: "+1 (714) 829-8896 ",
  email: "dsmeng@uci.edu",
};

import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a Full Stack and Android developer who loves building clean, scalable, and high-performance applications. I have hands-on experience with technologies like React, Java Spring Boot, PostgreSQL, Kafka, Redis, and WebSocket for full stack projects — and Jetpack Compose for crafting beautiful native Android UIs. I enjoy turning complex ideas into intuitive digital products, whether it's on the web or on mobile.`;

export const ABOUT_TEXT = `I’m Shiv Vrat Raghuvanshi, a versatile developer with experience in both full stack web development and modern Android app development using Jetpack Compose. My recent projects include a microservices-based trading simulation platform that integrates real-time market data with technologies like Spring Boot, Kafka, WebSocket, Redis, and PostgreSQL. On the Android side, I’ve built apps with clean architecture, Retrofit, Paging 3, and Compose, focusing on both functionality and UI/UX. I'm also passionate about system-level work — including Android reverse engineering and implementing secure key/license verification systems. Whether backend, frontend, or mobile, I strive to build performant, maintainable, and impactful software.`;

export const EXPERIENCES = [
  {
    year: "July 2024 - Nov 2024",
    role: "Android Developer Intern",
    company: "Adgama Digital Pvt Ltd.",
    description: `Built over 30 Android applications using Jetpack Compose with MVVM Architecture and implemented Backend Services using Firebase and utilised Trello for task management in the Organisation, along with Retrofit, Paging3, Mobile Device feature implementations.`,
    technologies: ["Android", "Jetpack Compose", "Firebase", "Java"],
  }
];

export const PROJECTS = [
  {
    title: "TradeSim",
    image: project2,
    description:
      "TradeSim is a scalable, real-time paper trading simulator that mimics stock and crypto trading using real-time market data from Binance. It's built with modern microservices architecture, optimized with Redis caching, and uses Kafka for event-driven workflows",
    technologies: ["JAVA", "Javascript", "React", "PostgreSQL", "Redis", "Kafka", "Docker"],
  },
  {
    title: "Trip Planner",
    image: project4,
    description:
      "Trip Planner is a mobile application designed to make trip planning easy and collaborative. The app enables users to create trips, invite collaborators, and manage trip details efficiently. It includes a robust backend and a user-friendly frontend for seamless functionality.",
    technologies: ["Kotlin", "Jetpack Compose", "Node.js", "Retrofit"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
];

export const CONTACT = {
  address: "Vill: Parwatpur, Chaubeypur, Varanasi, Uttar Pradesh, INDIA ",
  phoneNo: "+91 72678 15303 ",
  email: "shivbratraghuvanshi@gmail.com",
};
